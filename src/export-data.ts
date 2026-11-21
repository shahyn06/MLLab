export const isHostedViewer=false;
export function exportBlob(blob:Blob,name:string){if(isHostedViewer){void blob.text().then(text=>window.dispatchEvent(new CustomEvent('ml-export',{detail:{name,text}})));return}const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
export function exportText(name:string,text:string,type='text/plain'){exportBlob(new Blob([text],{type}),name)}
