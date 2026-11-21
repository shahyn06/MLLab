"""Review actual hero-image background pixels after the browser capture.
Requires Pillow for this optional visual audit, not for running the app.
"""
import json,re,os
from pathlib import Path
from PIL import Image
root=Path(os.environ.get('ML_QA_OUTPUT','.'))
records=json.loads((root/'hero-label-boxes.json').read_text());results=[]
def lum(a):
 b=[v/255 for v in a]
 return sum((v/12.92 if v<=.04045 else ((v+.055)/1.055)**2.4)*w for v,w in zip(b,[.2126,.7152,.0722]))
for item in records:
 im=Image.open(item['path']).convert('RGB')
 for text in item['labels']:
  x=int(text['x']-item['box']['x']);y=int(text['y']-item['box']['y']);fg=lum(list(map(int,re.findall(r'\d+',text['color'])[:3])));ratios=[]
  for py in range(max(0,y),min(im.height,y+int(text['h']))):
   for px in range(max(0,x),min(im.width,x+int(text['w']))):
    bg=lum(im.getpixel((px,py)));ratios.append((max(fg,bg)+.05)/(min(fg,bg)+.05))
  ratio=min(ratios);minimum=3 if text['text']=='ML Lab' else 4.5
  assert ratio>=minimum,(item['theme'],item['width'],text['text'],ratio)
  results.append({'theme':item['theme'],'width':item['width'],'label':text['text'],'minimumContrast':round(ratio,3),'required':minimum})
(root/'hero-contrast-ui.json').write_text(json.dumps({'method':'Background pixels sampled with actual text transparent; conservative minimum over text range','results':results},indent=2))
print(len(results),'hero text-range checks passed; minimum contrast',min(v['minimumContrast'] for v in results))
