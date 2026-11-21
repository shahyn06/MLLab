export class LabAPI {
  base:string; token='';
  constructor(base='http://127.0.0.1:8000/api/v1') { const u=new URL(base); if(!['127.0.0.1','localhost','[::1]'].includes(u.hostname)||u.protocol!=='http:'||u.username||u.password||u.search||u.hash)throw Error('Use an HTTP loopback API URL, such as http://127.0.0.1:8000/api/v1. Remote deployment is not configured.');this.base=u.origin+u.pathname.replace(/\/$/,''); }
  async request(path:string,method='GET',body?:unknown,download=false){const headers:Record<string,string>={};if(this.token)headers.Authorization='Bearer '+this.token;if(body&&!(body instanceof FormData))headers['Content-Type']='application/json';const res=await fetch(this.base+path,{method,headers,body:body instanceof FormData?body:body===undefined?undefined:JSON.stringify(body),credentials:'omit'});if(!res.ok){let msg='';try{const data=await res.json();msg=typeof data.detail==='string'?data.detail:JSON.stringify(data.detail)}catch{msg=res.statusText}throw Error(res.status+': '+msg)}if(res.status===204)return null;return download?res.blob():res.json()}
}
export {exportBlob as saveBlob} from "./export-data";
