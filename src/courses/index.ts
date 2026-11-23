import type {Course} from './types';
import {lesson as python_0} from './python/variables';
import {lesson as python_1} from './python/branches';
import {lesson as python_2} from './python/collections';
import {lesson as python_3} from './python/functions';
import {lesson as numpy_0} from './numpy/arrays';
import {lesson as numpy_1} from './numpy/indexing';
import {lesson as numpy_2} from './numpy/broadcasting';
import {lesson as numpy_3} from './numpy/linear-algebra';
import {lesson as pandas_0} from './pandas/creating';
import {lesson as pandas_1} from './pandas/selection';
import {lesson as pandas_2} from './pandas/summaries';
import {lesson as pandas_3} from './pandas/grouping';
import {lesson as pandas_4} from './pandas/missing-merging';
import {lesson as visualization_0} from './visualization/line';
import {lesson as visualization_1} from './visualization/scatter';
import {lesson as visualization_2} from './visualization/distributions';
import {lesson as visualization_3} from './visualization/categories';
import {lesson as math_0} from './math/vectors';
import {lesson as math_1} from './math/matrices';
import {lesson as math_2} from './math/calculus';
import {lesson as math_3} from './math/probability';
import {lesson as statistics_0} from './statistics/summary';
import {lesson as statistics_1} from './statistics/normal';
import {lesson as statistics_2} from './statistics/sampling';
import {lesson as statistics_3} from './statistics/inference';
import {lesson as intro_ml_0} from './intro-ml/prediction';
import {lesson as intro_ml_1} from './intro-ml/gradient';
import {lesson as intro_ml_2} from './intro-ml/classification';
import {lesson as intro_ml_3} from './intro-ml/multiclass';
import {lesson as evaluation_0} from './evaluation/splits';
import {lesson as evaluation_1} from './evaluation/metrics';
import {lesson as evaluation_2} from './evaluation/cross-validation';
import {lesson as evaluation_3} from './evaluation/leakage';
import {lesson as classical_0} from './classical/trees';
import {lesson as classical_1} from './classical/neighbors';
import {lesson as classical_2} from './classical/clusters';
import {lesson as classical_3} from './classical/pca';
import {lesson as neural_0} from './neural/forward';
import {lesson as neural_1} from './neural/backprop';
import {lesson as neural_2} from './neural/convolution';
import {lesson as neural_3} from './neural/sequences';
export const courses:Course[]=[
{id:"python",level:0,title:{"en":"Python Basics","ar":"أساسيات Python"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:[],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[python_0,python_1,python_2,python_3]},
{id:"numpy",level:0,title:{"en":"NumPy","ar":"NumPy - الحساب بالمصفوفات"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["numpy"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[numpy_0,numpy_1,numpy_2,numpy_3]},
{id:"pandas",level:0,title:{"en":"Pandas","ar":"Pandas - تحليل الجداول"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["pandas","numpy"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[pandas_0,pandas_1,pandas_2,pandas_3,pandas_4]},
{id:"visualization",level:0,title:{"en":"Data Visualization","ar":"تصوير البيانات"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["numpy","pandas","matplotlib","seaborn"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[visualization_0,visualization_1,visualization_2,visualization_3]},
{id:"math",level:1,title:{"en":"Math for ML","ar":"الرياضيات لتعلم الآلة"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["numpy"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[math_0,math_1,math_2,math_3]},
{id:"statistics",level:2,title:{"en":"Statistics","ar":"الإحصاء التطبيقي"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["numpy","scipy"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[statistics_0,statistics_1,statistics_2,statistics_3]},
{id:"intro-ml",level:3,title:{"en":"Intro to Machine Learning","ar":"مقدمة تعلم الآلة"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["numpy","scikit-learn"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[intro_ml_0,intro_ml_1,intro_ml_2,intro_ml_3]},
{id:"evaluation",level:4,title:{"en":"Model Evaluation","ar":"تقييم النماذج"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["numpy","scikit-learn"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[evaluation_0,evaluation_1,evaluation_2,evaluation_3]},
{id:"classical",level:4,title:{"en":"Classical Models","ar":"النماذج الكلاسيكية"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["numpy","scikit-learn"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[classical_0,classical_1,classical_2,classical_3]},
{id:"neural",level:5,title:{"en":"Neural Networks","ar":"الشبكات العصبية"},description:{"en":"Short lessons, editable Python and checked exercises.","ar":"دروس قصيرة و Python قابل للتعديل وتمارين مفحوصة."},packages:["numpy","scikit-learn"],datasetLicense:'Original synthetic datasets, CC0-1.0',lessons:[neural_0,neural_1,neural_2,neural_3]},
];
export const courseById=(id:string)=>courses.find(c=>c.id===id);
