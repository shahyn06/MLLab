import {chromium} from 'playwright-core';
import fs from 'node:fs';
const base=process.env.ML_LAB_URL||new URL('../../ml-lab.html',import.meta.url).href;
const out=process.env.ML_QA_OUTPUT||'.';
const browser=await chromium.launch({executablePath:process.env.CHROME_BIN||'/usr/bin/google-chrome-stable',headless:true,args:['--no-sandbox']});
const page=await browser.newPage({reducedMotion:'reduce'});
const records=[],errors=[];
page.on('pageerror',e=>errors.push(e.message));
const output=()=>page.locator('.ml-main .ml-metrics, .ml-main .ml-matrix table, .ml-main .ml-plot svg, .ml-main [role=status]').evaluateAll(elements=>elements.map(e=>e.outerHTML).join('\n'));
const check=(v,m)=>{if(!v)throw Error(m)};
try{
 for(const area of ['Linear Algebra','Calculus','Probability','Statistics']){
  await page.goto(base+'?runtime-math='+encodeURIComponent(area)+'#/math');
  await page.getByLabel('Mathematics area',{exact:true}).selectOption(area);
  if(area==='Probability')await page.getByLabel('Distribution',{exact:true}).selectOption('Binomial');
  const labels=await page.locator('.ml-main input[type=range], .ml-main input[type=number]').evaluateAll(es=>es.map(e=>e.getAttribute('aria-label')).filter(Boolean));
  for(const label of labels){
   const control=page.getByLabel(label,{exact:true});
   const old=await control.inputValue(),meta=await control.evaluate(e=>({min:e.min,max:e.max,step:e.step}));
   const step=label==='Probability cutoff'?1:Number(meta.step)||1;
   let next=Number(old)+step*2;
   if(meta.max&&next>Number(meta.max))next=Number(old)-step*2;
   const before=await output();
   await control.fill(String(next));
   const after=await output();
   check(before!==after,area+': no computed output change for '+label);
   records.push({area,label,old,value:String(next),effect:'Computed metric, matrix, plotted geometry or scientific status changed, excluding the input value itself.'});
   await control.fill(old);
  }
  if(area==='Linear Algebra'){
   const before=await output();await page.getByLabel('Matrix A 0',{exact:true}).fill('7');
   await page.getByRole('button',{name:'Reset algebra',exact:true}).click();
   check(await output()===before,'Algebra reset restores all computed output');
   records.push({area,label:'Reset algebra',effect:'Restores exact default computed output.'});
  }
  if(area==='Calculus'){
   const before=await output();await page.getByRole('button',{name:'Take a gradient step (α=0.05)',exact:true}).click();
   check(await output()!==before,'Gradient step changes numerical result');
   await page.getByRole('button',{name:'Reset calculus',exact:true}).click();
   check(await output()===before,'Calculus reset restores default output');
   records.push({area,label:'Take a gradient step / Reset calculus',effect:'Actual computed step followed by exact output restoration.'});
  }
  if(area==='Probability'){
   for(const kind of ['Bernoulli','Binomial','Poisson','Normal']){
    await page.getByLabel('Distribution',{exact:true}).selectOption(kind);
    const visible=page.locator('.ml-main input[type=range]');
    for(let i=0;i<await visible.count();i++){
     const c=visible.nth(i),label=await c.getAttribute('aria-label');
     if(records.some(r=>r.area===area&&r.label===label))continue;
     const old=await c.inputValue(),step=await c.getAttribute('step'),max=await c.getAttribute('max');
     let n=Number(old)+(Number(step)||1)*2;if(max&&n>Number(max))n=Number(old)-(Number(step)||1)*2;
     const before=await output();await c.fill(String(n));
     check(await output()!==before,'Distribution '+kind+' '+label);
     records.push({area,kind,label,old,value:String(n),effect:'Actual distribution or Bayes output changes.'});await c.fill(old);
    }
   }
  }
  if(area==='Statistics'){
   const before=await output();await page.getByLabel('Statistics data x,y',{exact:true}).fill('1,2\n3,5\n8,4');
   await page.getByRole('button',{name:'Apply statistics data',exact:true}).click();check(await output()!==before,'Statistics data applies');
   await page.getByRole('button',{name:'Draw bootstrap sample',exact:true}).click();
   check((await page.getByRole('status').filter({hasText:'Bootstrap draw:'}).innerText()).includes('Bootstrap draw:'),'Actual bootstrap status');
   records.push({area,label:'Apply statistics data / Draw bootstrap sample',effect:'New computed summary and generated bootstrap draw.'});
  }
 }
 check(errors.length===0,'No browser errors');
 fs.writeFileSync(out+'/math-control-effects-ui.json',JSON.stringify({scope:'Scientific numerical controls and reset/application effects. Shared guide navigation is covered separately.',records,errors},null,2));
 console.log(records.length+' runtime mathematical control-effect records passed');
}finally{await browser.close()}
