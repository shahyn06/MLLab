import React,{useEffect,useRef,useState} from 'react';
import {CopyButton} from './ui';
import {Button} from './components';
export function ExportPanel(){
 const [data,S]=useState<{name:string,text:string}|null>(null);
 const trigger=useRef<HTMLElement|null>(null),panel=useRef<HTMLElement|null>(null);
 useEffect(()=>{
  const f=(event:Event)=>{
   const d=(event as CustomEvent).detail;
   if(d&&typeof d.name==='string'&&typeof d.text==='string'){
    if(document.activeElement instanceof HTMLElement&&!panel.current?.contains(document.activeElement))trigger.current=document.activeElement;
    S(d);
   }
  };
  addEventListener('ml-export',f);return()=>removeEventListener('ml-export',f);
 },[]);
 useEffect(()=>{if(data){panel.current?.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});panel.current?.focus({preventScroll:true})}},[data]);
 const close=()=>{S(null);if(trigger.current?.isConnected)trigger.current.focus()};
 return data?<section ref={panel} className="ml-panel" id="ml-generated-export" tabIndex={-1} aria-label="Generated export content"><h3>Generated content: {data.name}</h3><p>This hosted viewer cannot create a file download. Your generated text is shown below. Copy it and save it in your own text editor, or use the local source app for direct downloads. Nothing has been uploaded to another service.</p><CopyButton text={data.text} label="Copy generated text"/><Button secondary onClick={close}>Close generated content</Button><pre className="ml-api-output" tabIndex={0}>{data.text}</pre></section>:null;
}
