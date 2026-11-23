import type {Checker} from './types';
// Checkers execute only in the same disposable learning runtime as learner code.
export function checkerPython(checker:Checker):string{return `
import json as __json, math as __math
__spec = __json.loads(${JSON.stringify(JSON.stringify(checker))})
def __equal(a,b,tol):
    if isinstance(b,(list,tuple)):
        if hasattr(a,'tolist'): a=a.tolist()
        return isinstance(a,(list,tuple)) and len(a)==len(b) and all(__equal(x,y,tol) for x,y in zip(a,b))
    if isinstance(b,dict): return isinstance(a,dict) and set(a)==set(b) and all(__equal(a[k],v,tol) for k,v in b.items())
    if isinstance(b,(float,int)) and not isinstance(b,bool):
        try: return bool(__math.isclose(float(a),float(b),rel_tol=tol,abs_tol=tol))
        except (ValueError,TypeError): return False
    if b is None:
        try:
            import pandas as __pd
            return bool(__pd.isna(a))
        except: return a is None
    try: return bool(a==b)
    except: return False
def __check():
    kind=__spec['kind']; name=__spec.get('variable','result'); expected=__spec.get('expected'); tol=__spec.get('tolerance',1e-7)
    if kind=='output':
        actual=__learner_stdout.strip()
        return {'passed':actual==str(expected).strip(),'reason':'output','actual':actual[:1000]}
    if name not in globals(): return {'passed':False,'reason':'missing','actual':name}
    actual=globals()[name]
    if kind=='function':
        try:
            for case in __spec.get('cases',[]):
                if not __equal(actual(*case['args']),case['expected'],tol): return {'passed':False,'reason':'function','actual':str(case['args'])}
            return {'passed':True,'reason':'value'}
        except Exception as e: return {'passed':False,'reason':'function','actual':str(e)[:1000]}
    if kind=='frame':
        import pandas as __pd
        if not isinstance(actual,__pd.DataFrame): return {'passed':False,'reason':'type','actual':type(actual).__name__}
        if list(actual.columns)!=__spec.get('columns'): return {'passed':False,'reason':'columns','actual':str(list(actual.columns))}
        if list(actual.shape)!=[len(expected),len(__spec['columns'])]: return {'passed':False,'reason':'shape','actual':str(actual.shape)}
        actual=actual.values.tolist()
    elif kind=='series':
        import pandas as __pd
        if not isinstance(actual,__pd.Series): return {'passed':False,'reason':'type','actual':type(actual).__name__}
        if __spec.get('dtype') and str(actual.dtype)!=__spec['dtype']: return {'passed':False,'reason':'dtype','actual':str(actual.dtype)}
        actual=actual.tolist()
    elif kind=='array':
        if not hasattr(actual,'shape'): return {'passed':False,'reason':'type','actual':type(actual).__name__}
        if __spec.get('dtype') and str(actual.dtype)!=__spec['dtype']: return {'passed':False,'reason':'dtype','actual':str(actual.dtype)}
        actual=actual.tolist()
    return {'passed':__equal(actual,expected,tol),'reason':'value','actual':str(actual)[:1000]}
__check_result=__json.dumps(__check())
`}
