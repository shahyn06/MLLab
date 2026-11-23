import json,os,contextlib,io,pathlib,sys
root=pathlib.Path(__file__).resolve().parents[1]
os.chdir(root)
# Original in-browser fixtures are reproduced here for checker parity.
pathlib.Path('data').mkdir(exist_ok=True)
pathlib.Path('data/reviews.csv').write_text('item,rating,units,note\ntea,4,2,fresh\ncoffee,5,3,\ntea,3,1,mild\njuice,2,4,sour\ncoffee,4,2,\njuice,5,1,sweet\n')
rows=json.load(open('docs/qa-expansion/exercise-checks.json'));failed=[];checks=0
for row in rows:
 for correct,code in [(True,row['solution']),(False,row['wrong'])]:
  g={};out=io.StringIO()
  try:
   with contextlib.redirect_stdout(out):
    exec(row['setup'],g);exec(code,g)
   g['__learner_stdout']=out.getvalue()
   exec(row['checker'],g)
   result=json.loads(g['__check_result'])
   if result['passed']!=correct:failed.append({'id':row['id'],'correct':correct,'result':result})
   checks+=1
  except Exception as e:failed.append({'id':row['id'],'correct':correct,'error':str(e)})
json.dump({'checks':checks,'failed':failed},open('docs/qa-expansion/checkers.json','w'),indent=2)
print(checks,'official-solution / wrong-answer checks;',len(failed),'failed')
for f in failed:print(f)
sys.exit(bool(failed))
