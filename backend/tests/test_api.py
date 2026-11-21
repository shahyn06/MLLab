import io
import json
from pathlib import Path
import joblib
import numpy as np
import pytest
from fastapi.testclient import TestClient
from openpyxl import Workbook
from app.main import create_app
from app.config import Settings
from conftest import dataset

P='/api/v1'


def test_health_and_schema(client):
    assert client.get(P+'/health').json()['storage']=='sqlite'
    schema=client.get('/openapi.json').json()
    assert schema['paths'][P+'/playground/run']['post']['responses']['200']['content']['application/json']['schema']['$ref'].endswith('PlaygroundOutput')


def test_dataset_pagination_summary_export_delete(client):
    key=dataset(client,columns=['a','b'],rows=[[1,2],[2,4],[None,6],[4,8]])
    result=client.get(P+f'/datasets/{key}?limit=2&offset=1').json()
    assert result['rows']==[[2,4],[None,6]]
    summary=client.get(P+f'/datasets/{key}/summary').json()
    assert summary['columns'][0]['missing']==1
    assert summary['columns'][1]['mean']==5
    assert summary['correlation']['a']['b']==pytest.approx(1)
    assert 'sample' in summary['variance_convention']
    assert client.get(P+f'/datasets/{key}/download').text.startswith('a,b')
    assert client.get(P+'/datasets').json()['total']==1
    assert client.delete(P+f'/datasets/{key}').status_code==204
    assert client.get(P+f'/datasets/{key}').status_code==404


@pytest.mark.parametrize('content,status',[(b'a,b\n1,2\n',201),(b'a,a\n1,2\n',422),(b'a,b\n1\n',422),(b'',422),(b'\xff',422)])
def test_csv_upload(client,content,status):
    assert client.post(P+'/datasets/upload',files={'file':('data.csv',content,'text/csv')}).status_code==status


def test_xlsx_upload(client):
    workbook=Workbook(); workbook.active.append(['a','b']); workbook.active.append([1,2])
    file=io.BytesIO(); workbook.save(file)
    response=client.post(P+'/datasets/upload',files={'file':('sample.xlsx',file.getvalue())})
    assert response.status_code==201,response.text
    assert response.json()['row_count']==1


def test_bad_extension_and_request_limit(client):
    assert client.post(P+'/datasets/upload',files={'file':('file.exe',b'data')}).status_code==415
    assert client.post(P+'/datasets',content=b'x'*(5*1024*1024+65537)).status_code==413


def test_invalid_json_dataset(client):
    assert client.post(P+'/datasets',json={'name':'x','columns':['a','b'],'rows':[[1]]}).status_code==422
    assert client.post(P+'/datasets',json={'name':'x','columns':['a','a'],'rows':[[1,2]]}).status_code==422


def test_formula_export_does_not_change_original(client):
    key=dataset(client,columns=['formula'],rows=[['=1+1'],['@sum(A1)']])
    assert "'=1+1" in client.get(P+f'/datasets/{key}/download').text
    assert client.get(P+f'/datasets/{key}').json()['rows'][0][0]=='=1+1'


def test_experiment_crud_compare_and_references(client):
    key=dataset(client)
    payload={'name':'experiment','algorithm':'linear_regression','dataset_id':key,'metrics':{'mse':0.5},'results':{'coefficients':[2,1]},'history':[{'step':1,'loss':0.5}]}
    first=client.post(P+'/experiments',json=payload)
    assert first.status_code==201,first.text
    one=first.json()['id']
    two=client.post(P+'/experiments',json=payload).json()['id']
    assert client.get(P+'/experiments').json()['total']==2
    assert client.get(P+f'/experiments/{one}').json()['provenance']=='client_computed'
    assert client.delete(P+f'/datasets/{key}').status_code==409
    payload['name']='edited'
    assert client.put(P+f'/experiments/{one}',json=payload).json()['name']=='edited'
    compare=client.post(P+'/experiments/compare',json={'ids':[one,two]}).json()
    assert compare['metric_names']==['mse']
    assert client.get(P+f'/experiments/{one}/export').json()['schema_version']==1
    assert client.get(P+f'/experiments/{one}/model').status_code==404
    assert client.delete(P+f'/experiments/{one}').status_code==204
    assert client.delete(P+f'/experiments/{two}').status_code==204
    assert client.delete(P+f'/datasets/{key}').status_code==204


def test_persistence_across_app_restarts(tmp_path):
    cfg=Settings(data_dir=tmp_path)
    a=TestClient(create_app(cfg)); key=dataset(a)
    b=TestClient(create_app(cfg))
    assert b.get(P+f'/datasets/{key}').json()['row_count']==40


def test_accounts_owner_isolation_logout(secured):
    def account(name):
        creds={'username':name,'password':'correct-local-pass'}
        assert secured.post(P+'/auth/register',json=creds).status_code==201
        token=secured.post(P+'/auth/login',json=creds).json()['access_token']
        return {'Authorization':'Bearer '+token}
    assert secured.get(P+'/datasets').status_code==401
    a,b=account('alice'),account('bob')
    key=dataset(secured,headers=a)
    assert secured.get(P+f'/datasets/{key}',headers=b).status_code==404
    assert secured.get(P+'/datasets',headers=b).json()['total']==0
    assert secured.post(P+'/train',headers=b,json={'dataset_id':key,'algorithm':'linear_regression','features':['x'],'target':'y'}).status_code==404
    exp=secured.post(P+'/experiments',headers=a,json={'name':'private','algorithm':'demo','dataset_id':key}).json()['id']
    assert secured.get(P+f'/experiments/{exp}/export',headers=b).status_code==404
    assert secured.post(P+'/auth/logout',headers=a).status_code==204
    assert secured.get(P+'/auth/me',headers=a).status_code==401


def test_auth_errors_and_local_mode(client,secured):
    assert client.post(P+'/auth/register',json={'username':'alice','password':'long-enough-pass'}).status_code==409
    payload={'username':'alice','password':'long-enough-pass'}
    assert secured.post(P+'/auth/register',json=payload).status_code==201
    assert secured.post(P+'/auth/register',json=payload).status_code==409
    assert secured.post(P+'/auth/login',json={'username':'alice','password':'wrong-password'}).status_code==401
    assert secured.get(P+'/auth/me',headers={'Authorization':'Bearer invalid'}).status_code==401


@pytest.mark.parametrize('algorithm',['linear_regression','ridge','lasso','elastic_net','logistic_regression','knn','decision_tree','random_forest','svm','naive_bayes','gradient_boosting','kmeans','hierarchical','dbscan','gmm','pca','anomaly_detection'])
def test_real_training_and_export(client,algorithm):
    key=dataset(client)
    target='y' if algorithm in ['linear_regression','ridge','lasso','elastic_net'] else 'label'
    response=client.post(P+'/train',json={'dataset_id':key,'algorithm':algorithm,'features':['x'],'target':target})
    assert response.status_code==201,response.text
    output=response.json()
    assert output['provenance']=='server_computed'
    assert output['metrics']
    if algorithm=='linear_regression': assert output['metrics']['mse']<1e-20
    content=client.get(P+f'/experiments/{output["id"]}/model')
    assert content.status_code==200
    # Only load our own freshly generated artifact in this local test.
    model=joblib.load(io.BytesIO(content.content))
    assert model is not None
    assert client.get(P+f'/experiments/{output["id"]}/model/metadata').json()['sklearn_version']
    assert client.put(P+f'/experiments/{output["id"]}',json={'name':'forged','algorithm':algorithm}).status_code==409


def test_training_invalid_input(client):
    key=dataset(client)
    base={'dataset_id':key,'algorithm':'linear_regression','features':['x'],'target':'y'}
    for override in [{'features':['missing']},{'features':['y']},{'hyperparameters':{'unexpected':1}},{'algorithm':'cnn'}]:
        assert client.post(P+'/train',json=base|override).status_code==422
    assert client.post(P+'/experiments',json={'name':'bad','algorithm':'x','dataset_id':'missing'}).status_code==404


def test_cors_local_only(client):
    good=client.options(P+'/datasets',headers={'Origin':'http://localhost:5173','Access-Control-Request-Method':'GET'})
    assert good.headers['access-control-allow-origin']=='http://localhost:5173'
    bad=client.options(P+'/datasets',headers={'Origin':'https://untrusted.invalid','Access-Control-Request-Method':'GET'})
    assert 'access-control-allow-origin' not in bad.headers


def test_pca_computes_known_rank_one_variance(client):
    key=dataset(client,columns=['a','b'],rows=[[i,2*i] for i in range(10)])
    result=client.post(P+'/train',json={'dataset_id':key,'algorithm':'pca','features':['a','b'],'hyperparameters':{'n_components':1}}).json()
    assert result['metrics']['explained_variance_ratio_sum']==pytest.approx(1)
    assert len(result['results']['coordinates'])==10
    assert len(result['results']['coordinates'][0])==1


def test_target_leakage_and_unknown_hyperparameters_rejected(client):
    key=dataset(client)
    assert client.post(P+'/train',json={'dataset_id':key,'algorithm':'linear_regression','features':['x','y'],'target':'y'}).status_code==422
    assert client.post(P+'/train',json={'dataset_id':key,'algorithm':'kmeans','features':['x'],'hyperparameters':{'n_clusters':99999}}).status_code==422


def test_constant_columns_have_undefined_correlation(client):
    key=dataset(client,columns=['a','b'],rows=[[1,2],[1,3],[1,4]])
    result=client.get(P+f'/datasets/{key}/summary').json()
    assert result['correlation']['a']['b'] is None
