import assert from 'node:assert/strict';
import fs from 'node:fs';
import {scaleLinear} from '../src/vendor/ui-runtime.mjs';
let checks=0;const ok=(v,m)=>{assert.ok(v,m);checks++};
for(const [domain,range] of [[[-3,3],[32,640]],[[0,1],[360,12]],[[-100,100],[-50,50]]]){const s=scaleLinear().domain(domain).range(range);ok(s(domain[0])===range[0],'lower');ok(s(domain[1])===range[1],'upper');ok(Math.abs(s((domain[0]+domain[1])/2)-(range[0]+range[1])/2)<1e-9,'midpoint');ok(Math.abs(s.invert(s(domain[0]+.2))-(domain[0]+.2))<1e-9,'inverse');}
const read=p=>fs.readFileSync(p,'utf8');const three=read('src/three-cloud.tsx'),plotly=read('src/plotly-landscape.tsx'),sections=read('src/lesson-sections.tsx');
for(const term of ['geometry.dispose()','material.dispose()','renderer.dispose()','renderer.forceContextLoss()','cancelAnimationFrame(frame)','live.current.data!==lastData','if(dirty)renderer.render','[enabled]','camera.lookAt(center)'])ok(three.includes(term),term);
for(const term of ['plotly.current.purge(el)','P.react','length:41','f(w,b)','responsive:true','Close interactive contour'])ok(plotly.includes(term),term);
ok(sections.includes('useReducedMotion'),'reduced motion');ok(sections.includes('motion.nav'),'motion navigation');
for(const name of ['three-runtime.mjs','plotly-runtime.mjs','motion-runtime.mjs','ui-runtime.mjs','tailwind-utilities.css','LIBRARY-LICENSES.txt'])ok(fs.statSync('src/vendor/'+name).size>100,'local runtime '+name);
console.log(`${checks} visualization scale, local-runtime and lifecycle contract checks passed.`);
