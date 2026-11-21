import {computeTask} from './compute-engine';
self.onmessage=async(event:MessageEvent)=>{try{const {kind,args}=event.data;const result=await computeTask(kind,args,message=>self.postMessage({type:'progress',message}));self.postMessage({type:'result',result})}catch(error){self.postMessage({type:'error',message:error instanceof Error?error.message:'Calculation failed.'})}};
