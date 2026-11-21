from pathlib import Path
import re,base64,zipfile
root=Path(__file__).resolve().parents[1];p=root/'dist-portable';s=(p/'index.html').read_text()
js=next((p/'assets').glob('*.js')).read_text()
for img in (p/'assets').glob('*.png'):
 uri='data:image/png;base64,'+base64.b64encode(img.read_bytes()).decode()
 js=re.sub(r'new URL\("'+re.escape(img.name)+r'",import.meta.url\)\.href',lambda m:'"'+uri+'"',js)
s=re.sub(r'<script type="module"[^>]*src="[^"]+"[^>]*></script>',lambda m:'<script type="module">'+js.replace('</script','<\\/script')+'</script>',s)
s=re.sub(r'<link rel="stylesheet"[^>]*>',lambda m:'<style>'+next((p/'assets').glob('*.css')).read_text()+'</style>',s)
(root/'ml-lab.html').write_text(s)
with zipfile.ZipFile(root/'ml-lab-source.zip','w',zipfile.ZIP_DEFLATED) as z:
 for path in root.rglob('*'):
  if path.is_file() and path.name!='ml-lab-source.zip' and 'node_modules' not in path.parts and '.git' not in path.parts and not any(part in path.parts for part in ['__pycache__','.pytest_cache','data','.venv']) and not any(part.endswith('.egg-info') for part in path.parts) and path.name!='.env':z.write(path,'ml-learning-lab/'+str(path.relative_to(root)))
print('Packaged standalone HTML and source ZIP')
