import io
import json
import threading
import time
from collections import defaultdict
from .progress import LearningProgress
from contextlib import asynccontextmanager
from dataclasses import asdict
from typing import Annotated
from fastapi import FastAPI, Depends, Header, HTTPException, Query, Request, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, Response
from . import auth, datasets, playground, training
from .config import Settings
from .schemas import Credentials, DatasetInput, ExperimentInput, CompareInput, TrainInput, PlaygroundInput
from .store import Store, now, uid
from .schemas import DatasetInfo, DatasetPreview, DatasetList, ExperimentOutput, ExperimentList, CompareOutput, PlaygroundOutput, CapabilityOutput, AuthToken, AccountOutput


def create_app(settings=None):
    settings = settings or Settings()
    store = Store(settings.data_dir / 'ml-lab.sqlite3')
    train_gate = threading.BoundedSemaphore(1)
    app = FastAPI(title='ML Lab API', version='0.1.0', description='Local-only datasets, experiments, real ML training, and fail-closed isolated Python execution.')
    app.state.store = store
    app.state.settings = settings
    app.add_middleware(CORSMiddleware, allow_origins=list(settings.cors_origins), allow_credentials=False,
                       allow_methods=['GET', 'POST', 'PUT', 'DELETE'], allow_headers=['Authorization', 'Content-Type'])

    auth_attempts = defaultdict(list)
    auth_lock = threading.Lock()

    @app.middleware('http')
    async def request_size_limit(request: Request, call_next):
        # Reject both advertised and streamed oversized bodies before parsing.
        # The local prototype deliberately caps every request, including JSON.
        if request.url.path in {'/api/v1/auth/login', '/api/v1/auth/register'} and request.method == 'POST':
            key = request.client.host if request.client else 'unknown'
            tick = time.monotonic()
            with auth_lock:
                for old_key in list(auth_attempts):
                    auth_attempts[old_key] = [t for t in auth_attempts[old_key] if tick-t < 60]
                    if not auth_attempts[old_key]: del auth_attempts[old_key]
                if len(auth_attempts[key]) >= 12:
                    return JSONResponse({'detail': 'Too many authentication attempts. Try again in one minute.'}, status_code=429, headers={'Retry-After':'60'})
                auth_attempts[key].append(tick)
        limit = settings.upload_bytes + 65536
        try:
            if int(request.headers.get('content-length', '0')) > limit:
                return JSONResponse({'detail': 'Request body exceeds the local limit'}, status_code=413)
        except ValueError:
            return JSONResponse({'detail': 'Invalid Content-Length'}, status_code=400)
        if request.method in {'POST', 'PUT', 'PATCH'}:
            total, parts = 0, []
            async for chunk in request.stream():
                total += len(chunk)
                if total > limit:
                    return JSONResponse({'detail': 'Request body exceeds the local limit'}, status_code=413)
                parts.append(chunk)
            body = b''.join(parts)
            # Starlette Request.body cache is passed to the downstream request.
            request._body = body
        response = await call_next(request)
        response.headers['X-Content-Type-Options'] = 'nosniff'
        response.headers['Cache-Control'] = 'no-store'
        return response

    def owner(authorization: Annotated[str | None, Header()] = None):
        return auth.resolve_owner(store, settings.auth_enabled, authorization)

    Owner = Annotated[str, Depends(owner)]
    prefix = '/api/v1'

    @app.get(prefix + '/progress', response_model=LearningProgress, tags=['progress'])
    def get_progress(user: Owner):
        with store.connect() as db:
            row = db.execute('SELECT document FROM learning_progress WHERE owner=?', (user,)).fetchone()
        return json.loads(row['document']) if row else LearningProgress()

    @app.put(prefix + '/progress', response_model=LearningProgress, tags=['progress'])
    def put_progress(payload: LearningProgress, user: Owner):
        document = payload.model_dump_json()
        if len(document.encode()) > 2200000:
            raise HTTPException(413, 'Progress and snapshots exceed 2.2 MB')
        with store.connect() as db:
            db.execute('INSERT INTO learning_progress VALUES (?,?,?) ON CONFLICT(owner) DO UPDATE SET document=excluded.document, updated_at=excluded.updated_at', (user, document, now()))
        return payload

    def get_dataset(dataset_id, user):
        result = store.dataset(dataset_id, user)
        if not result: raise HTTPException(404, 'Dataset not found')
        return result

    def get_experiment(experiment_id, user):
        result = store.experiment(experiment_id, user)
        if not result: raise HTTPException(404, 'Experiment not found')
        return result

    def public_experiment(document):
        return {k:v for k,v in document.items() if k not in {'document', 'owner'}}

    def persist_experiment(payload, user, provenance=None):
        data = payload.model_dump() if hasattr(payload, 'model_dump') else dict(payload)
        if data.get('dataset_id'): get_dataset(data['dataset_id'], user)
        if provenance: data['provenance'] = provenance
        experiment_id, timestamp = uid(), now()
        with store.connect() as db:
            db.execute('INSERT INTO experiments VALUES (?,?,?,?,?)', (experiment_id,user,json.dumps(data,allow_nan=False),timestamp,timestamp))
        return public_experiment(get_experiment(experiment_id,user))

    @app.get(prefix + '/health', tags=['system'])
    def health():
        return {'status': 'ok', 'version': '0.1.0', 'storage': 'sqlite', 'auth_enabled': settings.auth_enabled}

    @app.get(prefix + '/capabilities', response_model=CapabilityOutput, tags=['system'])
    def capabilities():
        return {'auth_enabled': settings.auth_enabled, 'persistence': 'local_sqlite', 'cloud_persistence': False,
                'algorithms': training.ALGORITHMS, 'unsupported_algorithms': ['cnn', 'rnn', 'lstm'],
                'model_export': ['joblib', 'json_experiment'], 'dataset_formats': ['csv', 'xlsx', 'json'],
                'limits': {'upload_bytes': settings.upload_bytes, 'dataset_rows': settings.max_rows,
                           'dataset_columns': settings.max_columns, 'training_rows': 5000, 'quadratic_training_rows': 2000},
                'playground': playground.probe(settings)}

    @app.post(prefix + '/auth/register', status_code=201, response_model=AccountOutput, tags=['auth'])
    def register(payload: Credentials):
        if not settings.auth_enabled: raise HTTPException(409, 'Accounts are disabled; local mode uses one shared workspace')
        return auth.register(store,payload)

    @app.post(prefix + '/auth/login', response_model=AuthToken, tags=['auth'])
    def login(payload: Credentials):
        if not settings.auth_enabled: raise HTTPException(409, 'Accounts are disabled')
        return auth.login(store,payload)

    @app.get(prefix + '/auth/me', tags=['auth'])
    def me(user: Owner):
        return {'id': user, 'auth_enabled': settings.auth_enabled}

    @app.post(prefix + '/auth/logout', status_code=204, tags=['auth'])
    def logout(user: Owner, authorization: Annotated[str | None, Header()] = None):
        if settings.auth_enabled and authorization:
            with store.connect() as db: db.execute('DELETE FROM sessions WHERE token_hash=?', (auth.digest_token(authorization[7:]),))
        return Response(status_code=204)

    def save_dataset(payload, user):
        dataset_id, timestamp = uid(), now()
        with store.connect() as db:
            db.execute('INSERT INTO datasets VALUES (?,?,?,?,?,?)', (dataset_id,user,payload.name,json.dumps(payload.columns),json.dumps(payload.rows,allow_nan=False),timestamp))
        return {'id':dataset_id,'name':payload.name,'columns':payload.columns,'row_count':len(payload.rows),'column_count':len(payload.columns),'created_at':timestamp}

    @app.post(prefix + '/datasets', status_code=201, response_model=DatasetInfo, tags=['datasets'])
    def create_dataset(payload: DatasetInput, user: Owner):
        return save_dataset(payload,user)

    @app.post(prefix + '/datasets/upload', status_code=201, response_model=DatasetInfo, tags=['datasets'])
    def upload_dataset(user: Owner, file: UploadFile = File(...)):
        content = file.file.read(settings.upload_bytes+1)
        if len(content)>settings.upload_bytes: raise HTTPException(413,'Upload exceeds 5 MiB')
        payload = datasets.parse_upload(file.filename or 'dataset.csv',content,settings)
        return save_dataset(payload,user)

    @app.get(prefix + '/datasets', response_model=DatasetList, tags=['datasets'])
    def list_datasets(user: Owner, limit: int = Query(50,ge=1,le=100), offset: int = Query(0,ge=0)):
        with store.connect() as db:
            count = db.execute('SELECT count(*) FROM datasets WHERE owner=?',(user,)).fetchone()[0]
            records = db.execute('SELECT id,name,columns_json,rows_json,created_at FROM datasets WHERE owner=? ORDER BY created_at DESC LIMIT ? OFFSET ?', (user,limit,offset)).fetchall()
        return {'total':count,'items':[{'id':r['id'],'name':r['name'],'columns':json.loads(r['columns_json']),'row_count':len(json.loads(r['rows_json'])),'column_count':len(json.loads(r['columns_json'])),'created_at':r['created_at']} for r in records]}

    @app.get(prefix + '/datasets/{dataset_id}', response_model=DatasetPreview, tags=['datasets'])
    def dataset_preview(dataset_id: str, user: Owner, limit: int = Query(100,ge=1,le=1000), offset: int = Query(0,ge=0)):
        data = get_dataset(dataset_id,user)
        return {'id':data['id'],'name':data['name'],'columns':data['columns'],'rows':data['rows'][offset:offset+limit], 'row_count':len(data['rows']),'column_count':len(data['columns']),'created_at':data['created_at'],'offset':offset,'limit':limit}

    @app.get(prefix + '/datasets/{dataset_id}/summary', tags=['datasets'])
    def dataset_summary(dataset_id: str, user: Owner):
        return training.clean(datasets.summary(get_dataset(dataset_id,user)))

    @app.get(prefix + '/datasets/{dataset_id}/download', tags=['datasets'])
    def dataset_download(dataset_id: str, user: Owner):
        return Response(datasets.export_csv(get_dataset(dataset_id,user)),media_type='text/csv',headers={'Content-Disposition':f'attachment; filename="dataset-{dataset_id}.csv"'})

    @app.delete(prefix + '/datasets/{dataset_id}', status_code=204, tags=['datasets'])
    def delete_dataset(dataset_id: str, user: Owner):
        get_dataset(dataset_id,user)
        with store.connect() as db:
            # Preserve referenced data until experiments are deleted or detached.
            for row in db.execute('SELECT document FROM experiments WHERE owner=?',(user,)):
                if json.loads(row['document']).get('dataset_id')==dataset_id:
                    raise HTTPException(409,'Dataset is referenced by an experiment; delete or detach it first')
            db.execute('DELETE FROM datasets WHERE id=? AND owner=?',(dataset_id,user))
        return Response(status_code=204)

    @app.post(prefix + '/experiments/compare', response_model=CompareOutput, tags=['experiments'])
    def compare_experiments(payload: CompareInput,user: Owner):
        items = [public_experiment(get_experiment(i,user)) for i in payload.ids]
        return {'items':items,'metric_names':sorted({key for item in items for key in item['metrics']}),
                'warning':'Metrics are comparable only for matching tasks, datasets, splits, and evaluation scopes.'}

    @app.post(prefix + '/experiments',status_code=201,response_model=ExperimentOutput,tags=['experiments'])
    def create_experiment(payload: ExperimentInput,user: Owner):
        return persist_experiment(payload,user)

    @app.get(prefix + '/experiments',response_model=ExperimentList,tags=['experiments'])
    def list_experiments(user: Owner,limit: int=Query(50,ge=1,le=100),offset: int=Query(0,ge=0)):
        with store.connect() as db:
            total=db.execute('SELECT count(*) FROM experiments WHERE owner=?',(user,)).fetchone()[0]
            items=db.execute('SELECT id,document,created_at,updated_at FROM experiments WHERE owner=? ORDER BY updated_at DESC LIMIT ? OFFSET ?',(user,limit,offset)).fetchall()
        return {'total':total,'items':[{'id':r['id'],'created_at':r['created_at'],'updated_at':r['updated_at'],**json.loads(r['document'])} for r in items]}

    @app.get(prefix + '/experiments/{experiment_id}',response_model=ExperimentOutput,tags=['experiments'])
    def experiment(experiment_id: str,user: Owner):
        return public_experiment(get_experiment(experiment_id,user))

    @app.put(prefix + '/experiments/{experiment_id}',response_model=ExperimentOutput,tags=['experiments'])
    def update_experiment(experiment_id: str,payload: ExperimentInput,user: Owner):
        current=get_experiment(experiment_id,user)
        if current['provenance']=='server_computed':
            raise HTTPException(409,'Server-computed experiments are immutable; create a new experiment instead')
        if payload.dataset_id: get_dataset(payload.dataset_id,user)
        with store.connect() as db:
            db.execute('UPDATE experiments SET document=?,updated_at=? WHERE id=? AND owner=?',(json.dumps(payload.model_dump(),allow_nan=False),now(),experiment_id,user))
        return public_experiment(get_experiment(experiment_id,user))

    @app.delete(prefix + '/experiments/{experiment_id}',status_code=204,tags=['experiments'])
    def delete_experiment(experiment_id: str,user: Owner):
        get_experiment(experiment_id,user)
        with store.connect() as db:
            db.execute('DELETE FROM models WHERE experiment_id=? AND owner=?',(experiment_id,user))
            db.execute('DELETE FROM experiments WHERE id=? AND owner=?',(experiment_id,user))
        return Response(status_code=204)

    @app.get(prefix + '/experiments/{experiment_id}/export',tags=['experiments'])
    def experiment_export(experiment_id: str,user: Owner):
        data=public_experiment(get_experiment(experiment_id,user))
        return Response(json.dumps({'schema_version':1,'experiment':data},allow_nan=False,indent=2),media_type='application/json',headers={'Content-Disposition':f'attachment; filename="experiment-{experiment_id}.json"'})

    @app.get(prefix + '/experiments/{experiment_id}/model',tags=['models'])
    def export_model(experiment_id: str,user: Owner):
        get_experiment(experiment_id,user)
        with store.connect() as db:
            row=db.execute('SELECT artifact,metadata FROM models WHERE experiment_id=? AND owner=?',(experiment_id,user)).fetchone()
        if not row: raise HTTPException(404,'No server-trained model is attached to this experiment')
        return Response(row['artifact'],media_type='application/octet-stream',headers={'Content-Disposition':f'attachment; filename="model-{experiment_id}.joblib"',
                        'X-Model-Warning':'Joblib may execute code when loaded. Only load trusted models.'})

    @app.get(prefix + '/experiments/{experiment_id}/model/metadata',tags=['models'])
    def model_metadata(experiment_id: str,user: Owner):
        get_experiment(experiment_id,user)
        with store.connect() as db: row=db.execute('SELECT metadata FROM models WHERE experiment_id=? AND owner=?',(experiment_id,user)).fetchone()
        if not row: raise HTTPException(404,'No server-trained model is attached')
        return json.loads(row['metadata'])

    @app.post(prefix + '/train',status_code=201,response_model=ExperimentOutput,tags=['models'])
    def train_model(payload: TrainInput,user: Owner):
        data=get_dataset(payload.dataset_id,user)
        if not train_gate.acquire(blocking=False): raise HTTPException(429,'Another training job is running; retry shortly')
        try:
            metrics,results,artifact,metadata=training.train(payload,data)
            document={'name':payload.name,'algorithm':payload.algorithm,'dataset_id':payload.dataset_id,
                      'hyperparameters':payload.hyperparameters,'training_config':{'test_fraction':payload.test_fraction,'seed':payload.seed},
                      'metrics':metrics,'results':results,'history':[],'provenance':'server_computed'}
            # Experiment and artifact commit atomically.
            experiment_id,timestamp=uid(),now()
            with store.connect() as db:
                db.execute('INSERT INTO experiments VALUES (?,?,?,?,?)',(experiment_id,user,json.dumps(document,allow_nan=False),timestamp,timestamp))
                db.execute('INSERT INTO models VALUES (?,?,?,?)',(experiment_id,user,artifact,json.dumps(metadata)))
            return public_experiment(get_experiment(experiment_id,user))
        finally:
            train_gate.release()

    @app.post(prefix + '/playground/run',response_model=PlaygroundOutput,tags=['playground'])
    def playground_run(payload: PlaygroundInput,user: Owner):
        try: return playground.run(payload.code,settings)
        except playground.SandboxUnavailable as e: raise HTTPException(503,str(e))

    @app.get(prefix + '/playground/examples',tags=['playground'])
    def playground_examples():
        return {'items':[
            {'id':'hello','name':'Python basics','code':'values = [1, 2, 3, 4, 5]\nprint("Mean:", sum(values) / len(values))'},
            {'id':'regression','name':'Train linear regression','code':'import numpy as np\nfrom sklearn.linear_model import LinearRegression\nX = np.array([[1], [2], [3], [4]])\ny = np.array([3, 5, 7, 9])\nmodel = LinearRegression().fit(X, y)\nprint("Slope:", model.coef_[0])\nprint("Intercept:", model.intercept_)'},
            {'id':'chart','name':'Plot a sine wave','code':'import numpy as np\nimport matplotlib.pyplot as plt\nx = np.linspace(0, 2*np.pi, 100)\nplt.plot(x, np.sin(x))\nplt.title("Sine wave")\nplt.show()'}]}

    return app


app = create_app()
