import {build} from 'esbuild';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import katex from 'katex';
const result=await build({entryPoints:['src/math-stories.ts'],bundle:true,platform:'node',format:'esm',write:false});
const {mathStories}=await import('data:text/javascript;base64,'+Buffer.from(result.outputFiles[0].text).toString('base64'));
const source=fs.readFileSync('src/mathlab.tsx','utf8');
const block=source.slice(source.indexOf('export const mathTopics:'),source.indexOf('const notes:'));
const topicLists=[...block.matchAll(/:\[([^\]]+)\]/g)].flatMap(m=>[...m[1].matchAll(/'([^']+)'|"([^"]+)"/g)].map(v=>v[1]||v[2]));
assert.equal(topicLists.length,43);
let checks=0;
for(const name of topicLists){assert.ok(mathStories[name],name);checks++;assert.equal(mathStories[name].length,6);checks++;for(const [i,item] of mathStories[name].entries()){assert.ok(item.length>(i===0?8:20),name);checks++}katex.renderToString(mathStories[name][0],{throwOnError:true,trust:false});checks++;}
assert.deepEqual(Object.keys(mathStories).sort(),topicLists.sort());checks++;
assert.ok(source.includes('Learning level'));checks++;
console.log(`Education: ${checks} topic coverage, substantive-field and strict formula-render checks passed.`);
const algorithms=await build({entryPoints:['src/algorithm-depth.tsx'],bundle:true,platform:'node',format:'esm',external:['react'],write:false});
// Extract data modules without rendering React. Only Formula depends on JSX.
const extract=fs.readFileSync('src/algorithm-depth.tsx','utf8').split('export function AlgorithmDepth')[0].replace(/^import .*;$/gm,'');
const data=await build({stdin:{contents:extract,loader:'ts'},bundle:true,platform:'node',format:'esm',write:false});
const {algorithmStories}=await import('data:text/javascript;base64,'+Buffer.from(data.outputFiles[0].text).toString('base64'));
const networkBuild=await build({entryPoints:['src/network-stories.ts'],bundle:true,platform:'node',format:'esm',write:false});
const {networkStories}=await import('data:text/javascript;base64,'+Buffer.from(networkBuild.outputFiles[0].text).toString('base64'));
let ac=0;for(const [name,story] of Object.entries({...algorithmStories,...networkStories})){assert.equal(story.length,4);ac++;katex.renderToString(story[0],{throwOnError:true,trust:false});ac++;for(const text of story.slice(1)){assert.ok(text.length>40,name);ac++}}
assert.equal(Object.keys(algorithmStories).length,18);assert.equal(Object.keys(networkStories).length,11);ac+=2;
console.log(`Algorithm education: ${ac} coverage, substantive-field and strict formula-render checks passed for 29 algorithms/update rules.`);
