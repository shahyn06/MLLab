import {chromium} from 'playwright-core';import fs from 'node:fs';
const base=process.env.ML_LAB_URL||new URL('../../ml-lab.html',import.meta.url).href,out=process.env.ML_QA_OUTPUT||'.';const b=await chromium.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome-stable',headless:true,args:['--no-sandbox']}),p=await b.newPage({reducedMotion:'reduce'});let checks=0;const records=[],errors=[],check=(v,m)=>{if(!v)throw Error(m);checks++};p.on('pageerror',e=>errors.push(e.message));
try{
 for(const route of ['regression','perceptron','gradient','cnn','sequence','datasets','evaluation']){
  console.log('Checking '+route);await p.goto(base+'?chart-text='+route+'#/'+route);
  if(route==='cnn'||route==='sequence')await p.getByRole('button',{name:route==='cnn'?'One CNN epoch':'One sequence epoch',exact:true}).click();if(route==='datasets')await p.getByText('Pair plots (first four numeric columns)',{exact:true}).click();const charts=p.locator('.ml-plot').filter({has:p.locator('summary').filter({hasText:'View chart data:'})});
  await charts.first().waitFor();
  const count=await charts.count();
  for(let i=0;i<count;i++){
   const c=charts.nth(i),svg=c.locator('svg').first(),desc=svg.locator('desc');check(await desc.count()===1,'Text description '+route+i);
   check((await desc.textContent()).includes('Exact plotted values'),'Data alternative reference '+route+i);
   await c.locator('summary').click();const rows=c.locator('tbody tr');await rows.first().waitFor();
   const expected=await svg.locator('circle').count()+await svg.locator('polyline').evaluateAll(es=>es.reduce((n,e)=>n+(e.getAttribute('points')?.trim().split(/\s+/).filter(Boolean).length||0),0))+await svg.locator('line[stroke-dasharray="5 3"]').count();
   check(await rows.count()===Math.max(1,expected),'All plotted values available '+route+i);
   check(await c.getByRole('columnheader').count()===4,'Named data columns '+route+i);
   await c.locator('summary').click();await c.locator('tbody').waitFor({state:'detached'});check(await c.locator('tbody').count()===0,'Collapsed table releases DOM '+route+i);
   records.push({route,chart:i,values:expected});
  }
 }
 await p.goto(base+'#/regression');const source=p.getByRole('button',{name:'Export current snapshot',exact:true});await source.focus();
 await p.evaluate(()=>dispatchEvent(new CustomEvent('ml-export',{detail:{name:'focus-check.json',text:'{"actual":4}'}})));
 const panel=p.getByRole('region',{name:'Generated export content',exact:true});await panel.waitFor();check(await panel.evaluate(e=>e===document.activeElement),'Generated export receives focus');
 await p.getByRole('button',{name:'Close generated content',exact:true}).click();check(await source.evaluate(e=>e===document.activeElement),'Closing export returns focus to source');
 await p.getByRole('button',{name:'One regression update',exact:true}).click();check((await p.getByRole('status').filter({hasText:'Applied one real full-batch'}).innerText()).includes('gradient update'),'Real update status exposed');
 const jump=p.getByText('Jump to a lesson section',{exact:true});await jump.click();await p.getByRole('navigation',{name:'Algorithm lesson sections',exact:true}).getByRole('button',{name:'Results',exact:true}).click();check(await p.locator('#ml-lesson-8').evaluate(e=>e===document.activeElement),'Lesson navigation moves focus to actual heading');
 for(const theme of ['dark','light']){const t=p.getByRole('button',{name:'Switch to '+theme+' mode',exact:true});if(await t.count())await t.click();for(const width of [320,390,1280]){await p.setViewportSize({width,height:900});const chart=p.locator('.ml-plot').first();await chart.locator('summary').click();await chart.screenshot({path:out+`/chart-values-${theme}-${width}.png`});check(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Alternative table contained '+theme+width);await chart.locator('summary').click();}}
 check(errors.length===0,'No browser errors');fs.writeFileSync(out+'/chart-accessibility-ui.json',JSON.stringify({checks,records,errors},null,2));console.log(checks+' chart data/focus/announcement/reading-order checks passed');
}finally{await b.close()}
