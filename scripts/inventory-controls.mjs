import ts from 'typescript';
import fs from 'node:fs';
import path from 'node:path';
const root = new URL('../', import.meta.url);
const rows=[];
function visitFile(file){
 const text=fs.readFileSync(file,'utf8');
 const source=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);
 const visit=node=>{
  if(ts.isJsxElement(node)||ts.isJsxSelfClosingElement(node)){
   const el=ts.isJsxElement(node)?node.openingElement:node;
   const tag=el.tagName.getText(source);
   if(['button','Button','UIButton','input','select','textarea','Range','SelectField','Link','CopyButton'].includes(tag)){
    const attrs=Object.fromEntries(el.attributes.properties.filter(ts.isJsxAttribute).map(a=>[a.name.getText(source),a.initializer?.getText(source)??'true']));
    const position=source.getLineAndCharacterOfPosition(node.getStart(source));
    rows.push({file:path.relative(new URL('.',root).pathname,file),line:position.line+1,tag,label:attrs['aria-label']??attrs.label??(ts.isJsxElement(node)?node.children.map(c=>c.getText(source)).join(' ').replace(/\s+/g,' ').slice(0,180):''),events:Object.fromEntries(Object.entries(attrs).filter(([k])=>k.startsWith('on'))),disabled:attrs.disabled??null,type:attrs.type??null,to:attrs.to??null,componentForwarding:['UIButton','CopyButton','Link'].includes(tag)});
   }
  }
  ts.forEachChild(node,visit);
 };
 visit(source);
}
for(const filename of fs.readdirSync(new URL('src/',root)).filter(f=>f.endsWith('.tsx'))){visitFile(new URL('src/'+filename,root).pathname)}
const missingButtonHandlers=rows.filter(r=>['button','Button','UIButton'].includes(r.tag)&&!r.events.onClick&&r.type!=='"submit"'&&!r.componentForwarding);
const report={scope:'Static source inventory only. A mapped component, conditional disabled state or event handler is not proof of its rendered behavior. Pair each state with direct interaction evidence before universal acceptance.',sourceControlSites:rows.length,byTag:Object.fromEntries([...new Set(rows.map(r=>r.tag))].map(tag=>[tag,rows.filter(r=>r.tag===tag).length])),missingButtonHandlers,controls:rows};
fs.writeFileSync(new URL('docs/qa/control-source-inventory.json',root),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({sourceControlSites:rows.length,byTag:report.byTag,missingButtonHandlers},null,2));
