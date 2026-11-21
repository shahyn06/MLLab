import React, {createContext,useContext,useEffect,useState} from 'react';
const Path=createContext('/');
export function FileRouter({children}:{children:React.ReactNode}){const [path,setPath]=useState(location.hash.slice(1)||'/');useEffect(()=>{const f=()=>{setPath(location.hash.slice(1)||'/');window.scrollTo(0,0)};addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);return <Path.Provider value={path}>{children}</Path.Provider>}
export function Link({to,children,...props}:any){return <a {...props} href={'#'+to}>{children}</a>}
export function NavLink({to,children,end,...props}:any){const path=useContext(Path);return <Link {...props} to={to} aria-current={(end?path===to:path.startsWith(to))?'page':undefined}>{children}</Link>}
export function Routes({children}:any){const path=useContext(Path);const arr=React.Children.toArray(children) as React.ReactElement<any>[];return arr.find(c=>c.props.path===path)?.props.element||arr.find(c=>c.props.path==='*')?.props.element||null}
export function Route(_:any){return null}
export function FileCard({children,...props}:any){return <article {...props}>{children}</article>}
export function Header({title,intro}:any){return <header><h1>{title}</h1>{intro&&<p>{intro}</p>}</header>}
export function Group({label,children}:any){return <section className="ml-content-group" aria-label={label}><h2>{label}</h2>{children}</section>}
export function Closing({children}:any){return <footer>{children}</footer>}
export function TextLink({href,children}:any){return <a href={href} target="_blank" rel="noreferrer">{children} ↗</a>}
export function CopyButton({text,label}:any){const [status,S]=useState('');async function copy(){try{await navigator.clipboard.writeText(text);S('Copied')}catch{S('Copy is unavailable here. Select the code and copy it manually.')}}return <><button type="button" className="ml-btn ml-secondary" onClick={copy}>{status==='Copied'?status:label}</button>{status&&<span role="status" style={{display:'block'}}>{status}</span>}</>}

export function useLocalState(key:string,initial:any):[any,(v:any)=>void,{ready:boolean,message:string}]{const [value,setValue]=useState(()=>{try{return JSON.parse(localStorage.getItem(key)||'null')??initial}catch{return initial}});const [message,M]=useState('Preferences are saved on this device.');const save=(v:any)=>{setValue(v);try{localStorage.setItem(key,JSON.stringify(v));M('Preferences are saved on this device.')}catch{M('Storage is unavailable. This preference lasts for this session only.')}};return [value,save,{ready:true,message}]}
