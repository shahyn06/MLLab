import React,{createContext,useContext,useEffect,useState} from 'react';
export const LanguageContext=createContext<'en'|'ar'>('en');
let dictionary:Record<string,string>|null=null;let loading:Promise<Record<string,string>>|null=null;
function loadArabic(){return loading||=(import('./legacy-ar').then(m=>dictionary=m.legacyArabic));}
export function useLegacyText(){const language=useContext(LanguageContext),[lexicon,Lexicon]=useState(dictionary);useEffect(()=>{let mounted=true;if(language==='ar'&&!lexicon)loadArabic().then(d=>{if(mounted)Lexicon(d)});return()=>{mounted=false}},[language,lexicon]);return (text:string)=>language==='ar'?((lexicon||dictionary)?.[text]||text):text;}
export function LegacyText({text}:{text:string|number}){const translate=useLegacyText();return <>{translate(String(text))}</>}
