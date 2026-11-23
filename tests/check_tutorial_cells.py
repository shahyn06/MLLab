import contextlib,io,json,os,sys,tempfile
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
payload=json.load(open(sys.argv[1]));errors=[]
with tempfile.TemporaryDirectory() as directory:
 os.chdir(directory);os.mkdir('data')
 for name,text in payload['files'].items():
  with open('data/'+name,'w') as f:f.write(text)
 for cell in payload['cells']:
  try:
   with contextlib.redirect_stdout(io.StringIO()):exec(cell['code'],{})
  except Exception as e:errors.append({'id':cell['id'],'error':str(e)})
  plt.close('all')
print(len(payload['cells']),'tutorial cells executed;',len(errors),'failures')
for error in errors:print(error)
sys.exit(bool(errors))
