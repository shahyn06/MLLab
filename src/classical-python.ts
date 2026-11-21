import type {Config,Sample} from './classical-engine';
export function classicalPython(algorithm:string,c:Config,train:Sample[],test:Sample[],updates:number){return `# Standalone Python reproduction of this bounded browser trainer.
# Uses the exact currently selected raw rows and split, not undefined X_train.
# Standard library only. Floating-point rounding may differ at ties.
import math, json
algorithm = ${JSON.stringify(algorithm)}
c = json.loads(${JSON.stringify(JSON.stringify(c))})
train = ${JSON.stringify(train.map(p=>[p.x,p.y,p.target]))}
test = ${JSON.stringify(test.map(p=>[p.x,p.y,p.target]))}
budget = ${updates||c.maxSteps}  # ${updates?'Reproduce the current displayed update count.':'No trained model yet: fit up to the selected maximum steps.'}
reg = algorithm in ['Multiple Linear Regression','Polynomial Regression','Ridge Regression','Lasso Regression','Elastic Net']
cluster = algorithm == 'K-Means'
def rng(seed):
    state = seed & 0xffffffff
    def random():
        nonlocal state
        state = (1664525*state + 1013904223) & 0xffffffff
        return state / 4294967296
    return random
def mean(values):
    return sum(values)/max(1,len(values))
def sigmoid(z):
    return 1/(1+math.exp(-z)) if z>=0 else math.exp(z)/(1+math.exp(z))
def features(p):
    return [1]+[(p[0]/3)**(i+1) for i in range(c['degree'])] if algorithm=='Polynomial Regression' else [1,p[0]/3,p[1]/3]
def distance(a,b):
    return sum((x-y)**2 for x,y in zip(a[:2],b[:2]))
def impurity(rows, regression, criterion):
    p=mean([r[2] for r in rows])
    if regression: return mean([(r[2]-p)**2 for r in rows])
    return (0 if p in (0,1) else -p*math.log2(p)-(1-p)*math.log2(1-p)) if criterion=='Entropy' else 2*p*(1-p)
def tree(rows, depth, regression=False, criterion='Gini', random=None):
    node={'value':mean([r[2] for r in rows]),'n':len(rows),'impurity':impurity(rows,regression,criterion)}
    if depth<=0 or len(rows)<4 or node['impurity']<1e-12: return node
    score=node['impurity']; best=None
    candidates=[int(random()*2)] if random else [0,1]
    for f in candidates:
        values=sorted(set(r[f] for r in rows))
        for j in range(1,len(values)):
            cut=(values[j-1]+values[j])/2
            left=[r for r in rows if r[f]<cut]; right=[r for r in rows if r[f]>=cut]
            if len(left)<2 or len(right)<2: continue
            value=(len(left)*impurity(left,regression,criterion)+len(right)*impurity(right,regression,criterion))/len(rows)
            if value<score-1e-12: score=value; best=(f,cut,left,right)
    if best:
        f,cut,left,right=best
        node.update(feature=f,cut=cut,left=tree(left,depth-1,regression,criterion,random),right=tree(right,depth-1,regression,criterion,random))
    return node
def tree_predict(t,p):
    if 'feature' not in t: return t['value']
    return tree_predict(t['left'] if p[t['feature']]<t['cut'] else t['right'],p)
weights=[0.0]*len(features(train[0])); forest=[]; fitted_tree=None; centers=[]; done=False; steps=0; history=[]
if cluster:
    random=rng(c['seed']); remaining=train[:]
    for _ in range(min(c['k'],len(train))):
        point=remaining.pop(int(random()*len(remaining))); centers.append(point[:2])
def predict(p):
    if cluster: return min(range(len(centers)),key=lambda i:distance(p,centers[i]))
    if algorithm=='K-Nearest Neighbors':
        near=sorted(train,key=lambda r:distance(r,p))[:c['k']]
        return mean([r[2] for r in near])
    if algorithm=='Decision Tree': return tree_predict(fitted_tree,p) if fitted_tree else .5
    if algorithm=='Random Forest': return mean([tree_predict(t,p) for t in forest]) if forest else .5
    if algorithm=='Gradient Boosting': return sigmoid(sum(c['rate']*tree_predict(t,p) for t in forest))
    if algorithm=='Gaussian Naive Bayes':
        scores=[]
        for label in [0,1]:
            rows=[r for r in train if r[2]==label]
            if not rows: scores.append(-1e9); continue
            s=math.log(len(rows)/len(train))
            for f in [0,1]:
                mu=mean([r[f] for r in rows]); var=max(1e-5,mean([(r[f]-mu)**2 for r in rows]))
                s+=-.5*math.log(2*math.pi*var)-(p[f]-mu)**2/(2*var)
            scores.append(s)
        return sigmoid(scores[1]-scores[0])
    z=sum(w*x for w,x in zip(weights,features(p)))
    return z if reg or algorithm=='Linear SVM' else sigmoid(z)
def objective():
    if cluster: return mean([distance(p,centers[predict(p)]) for p in train])
    values=[]
    for p in train:
        z=predict(p)
        values.append((z-p[2])**2 if reg else max(0,1-(2*p[2]-1)*z) if algorithm=='Linear SVM' else -p[2]*math.log(max(1e-12,z))-(1-p[2])*math.log(max(1e-12,1-z)))
    return mean(values)
for step in range(1,budget+1):
    if done: break
    old_weights=weights[:]
    if cluster:
        labels=[predict(p) for p in train]; old=[r[:] for r in centers]
        centers=[[mean([p[f] for i,p in enumerate(train) if labels[i]==j]) for f in [0,1]] if j in labels else center[:] for j,center in enumerate(centers)]
        done=sum(distance(a,b) for a,b in zip(centers,old))<1e-10
    elif algorithm=='Decision Tree': fitted_tree=tree(train,c['depth'],False,c['criterion']); done=True
    elif algorithm=='Random Forest':
        random=rng(c['seed']+step*31); draw=[train[int(random()*len(train))] for _ in train]
        forest.append(tree(draw,c['depth'],False,'Gini',random)); done=step>=24
    elif algorithm=='Gradient Boosting':
        residual=[p[:2]+[p[2]-predict(p)] for p in train]
        forest.append(tree(residual,c['depth'],True)); done=step>=min(80,c['maxSteps'])
    elif algorithm in ['K-Nearest Neighbors','Gaussian Naive Bayes']: done=True
    else:
        g=[0.0]*len(weights)
        for p in train:
            pred=predict(p); error=2*(pred-p[2]) if reg else (-(2*p[2]-1) if (2*p[2]-1)*pred<1 else 0) if algorithm=='Linear SVM' else pred-p[2]
            for j,v in enumerate(features(p)): g[j]+=error*v/len(train)
        for j,w in enumerate(old_weights):
            ridge=2*c['penalty']*(1-c['l1'] if algorithm=='Elastic Net' else 1)*w if j and algorithm in ['Ridge Regression','Elastic Net','Linear SVM'] else 0
            z=w-c['rate']*(g[j]+ridge)
            soft=c['rate']*c['penalty']*(c['l1'] if algorithm=='Elastic Net' else 1) if j and algorithm in ['Lasso Regression','Elastic Net'] else 0
            weights[j]=(1 if z>0 else -1 if z<0 else 0)*max(0,abs(z)-soft)
        done=sum((a-b)**2 for a,b in zip(weights,old_weights))<1e-14 or step>=c['maxSteps']
    history.append(objective()); steps=step
    if step>=c['maxSteps']: done=True
predictions=[predict(p) for p in test]
result={'steps':steps,'weights':weights,'history':history,'centers':centers,'predictions':predictions}
if test:
    result['test_mse']=mean([(p[2]-v)**2 for p,v in zip(test,predictions)])
    if not reg: result['test_accuracy']=mean([int((v>=(0 if algorithm=='Linear SVM' else .5))==bool(p[2])) for p,v in zip(test,predictions)])
print(json.dumps(result))
`}
