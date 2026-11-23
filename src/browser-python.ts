import type {Checker} from './courses/types';import {checkerPython} from './courses/checker';
export const PYODIDE_URL='https://cdn.jsdelivr.net/pyodide/v314.0.8/full/';
export type RunResult={stdout:string;stderr:string;figures:string[];check?:{passed:boolean;reason:string;actual?:string};error?:string};
const workerSource=`let py=null;let busy=false;
self.onmessage=async({data:m})=>{if(busy)return;busy=true;try{
 if(!py){self.postMessage({id:m.id,state:'loading'});const mod=await import('${PYODIDE_URL}pyodide.mjs');py=await mod.loadPyodide({indexURL:'${PYODIDE_URL}'});}
 if(m.packages.length){self.postMessage({id:m.id,state:'packages'});await py.loadPackage(m.packages.filter(p=>p!=='seaborn'));if(m.packages.includes('seaborn')){await py.loadPackage('micropip');await py.runPythonAsync("import micropip\\nawait micropip.install('seaborn==0.13.2', deps=False)");}}
 if(m.packages.includes('matplotlib'))await py.runPythonAsync("import matplotlib\\nmatplotlib.use('Agg', force=True)\\nimport matplotlib.pyplot as __worker_plt\\n__worker_plt.show = lambda *args, **kwargs: None");
 py.FS.mkdirTree('/home/pyodide/data');for(const [name,text]of Object.entries(m.files||{}))py.FS.writeFile('/home/pyodide/data/'+name,text);
 self.postMessage({id:m.id,state:'running'});
 const globals=py.runPython('dict()');
 globals.set('__source',m.code);globals.set('__setup',m.setup||'');
 await py.runPythonAsync(\`import io as __io, contextlib as __contextlib, traceback as __traceback
__out = __io.StringIO()
__err = __io.StringIO()
__figures = []
__execution_error = ''
with __contextlib.redirect_stdout(__out), __contextlib.redirect_stderr(__err):
    try:
        exec(__setup, globals())
        exec(__source, globals())
    except BaseException:
        __execution_error = __traceback.format_exc()
__learner_stdout = __out.getvalue()[:20000]
try:
    import sys as __sys
    if 'matplotlib.pyplot' in __sys.modules:
        import matplotlib.pyplot as __plt, base64 as __base64
        for __n in __plt.get_fignums()[:4]:
            __buf=__io.BytesIO()
            __plt.figure(__n).savefig(__buf,format='png',bbox_inches='tight',dpi=100)
            __figures.append(__base64.b64encode(__buf.getvalue()).decode())
        __plt.close('all')
except Exception:
    pass
\`,{globals});
 let check=null;if(m.checker&&!globals.get('__execution_error')){await py.runPythonAsync(m.checker,{globals});check=JSON.parse(globals.get('__check_result'));}
 const figures=globals.get('__figures');self.postMessage({id:m.id,result:{stdout:globals.get('__learner_stdout'),stderr:globals.get('__err').getvalue().slice(0,20000),figures:figures.toJs(),error:globals.get('__execution_error'),check}});figures.destroy();globals.destroy();
 }catch(e){self.postMessage({id:m.id,result:{stdout:'',stderr:'',figures:[],error:String(e)}})}finally{busy=false;}};`;
export class BrowserPython{private worker:Worker|null=null;private timer:ReturnType<typeof setTimeout>|null=null;private next=0;private pending:((r:RunResult)=>void)|null=null;private blob='';
 stop(){this.worker?.terminate();this.worker=null;if(this.blob)URL.revokeObjectURL(this.blob);this.blob='';if(this.timer)clearTimeout(this.timer);this.pending?.({stdout:'',stderr:'',figures:[],error:'Execution stopped. The Python session was reset.'});this.pending=null;}
 async run(code:string,setup:string,packages:string[],checker:Checker|undefined,files:Record<string,string>,state:(s:string)=>void):Promise<RunResult>{if(import.meta.env.MODE==='portable')return {stdout:'',stderr:'',figures:[],error:'Run requires the online version.'};if(this.pending)throw Error('Python is already running.');if(!this.worker){this.blob=URL.createObjectURL(new Blob([workerSource],{type:'text/javascript'}));this.worker=new Worker(this.blob,{type:'module'});}const id=++this.next;return new Promise(resolve=>{this.pending=resolve;const timeout=(ms:number)=>{if(this.timer)clearTimeout(this.timer);this.timer=setTimeout(()=>{this.stop()},ms)};timeout(150000);this.worker!.onerror=e=>{const done=this.pending;this.pending=null;this.stop();done?.({stdout:'',stderr:'',figures:[],error:e.message||'Python failed to load.'})};this.worker!.onmessage=({data:m})=>{if(m.id!==id)return;if(m.state){state(m.state);if(m.state==='running')timeout(12000);return}if(this.timer)clearTimeout(this.timer);this.pending=null;resolve(m.result)};this.worker!.postMessage({id,code,setup,packages,checker:checker?checkerPython(checker):null,files})})}}
