export type Text={en:string;ar:string};
export type Checker={kind:'value'|'array'|'frame'|'series'|'output'|'function';variable?:string;expected:unknown;tolerance?:number;columns?:string[];dtype?:string;cases?:{args:unknown[];expected:unknown}[]};
export type Exercise={id:string;title:Text;instructions:Text;starter:string;setup:string;checker:Checker;hints:[Text,Text];solution:string;explanation:Text;labRoute?:string};
export type TutorialCell={id:string;text:Text;code:string};
export type Lesson={id:string;title:Text;minutes:number;intro:Text;cells:TutorialCell[];exercises:Exercise[];challenge:{starter?:string;goal:Text;steps:Text[];expected:Text;selfCheck:Text};labRoute?:string};
export type Course={id:string;level:number;title:Text;description:Text;packages:string[];lessons:Lesson[];datasetLicense:string};
