import React from 'react';
// @ts-ignore Local MIT-licensed KaTeX runtime.
import katex from './vendor/katex.mjs';
const formulas:Record<string,string>={
 '01':String.raw`\hat{y}=mx+b,\qquad \mathrm{MSE}=\frac{1}{n}\sum_{i=1}^{n}(\hat{y}_i-y_i)^2`,
 '02':String.raw`z=\mathbf{w}^{\mathsf T}\mathbf{x}+b,\qquad \hat{y}=\begin{cases}1&z\geq0\\0&z<0\end{cases}`,
 '03':String.raw`w_{t+1}=w_t-\alpha\,f'(w_t),\qquad f(w)=(w-3)^2`
};
export function Equation({kind}:{kind:string}){const text=formulas[kind];if(!text)return null;return <div className="ml-equation" aria-label="Mathematical model" dangerouslySetInnerHTML={{__html:katex.renderToString(text,{output:'mathml',displayMode:true,throwOnError:true,trust:false})}}/>}

export function Formula({tex}:{tex:string}){return <div className="ml-formula-group">{tex.split(/,?\\quad\s*/).map((part,i)=><div key={i} className="ml-equation" dangerouslySetInnerHTML={{__html:katex.renderToString(part,{output:'mathml',displayMode:true,throwOnError:false,trust:false})}}/>)}</div>}
