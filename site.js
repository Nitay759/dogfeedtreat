document.querySelectorAll('details').forEach(d=>{const s=d.querySelector('summary');if(s){s.setAttribute('aria-expanded',String(d.open));d.addEventListener('toggle',()=>s.setAttribute('aria-expanded',String(d.open)));}});
const model=document.getElementById('full-model');
if(model){
 const rotate=document.getElementById('rotate-model');
 function rotation(on){model.autoRotate=on;rotate.setAttribute('aria-pressed',String(on));rotate.textContent=on?'עצירת סיבוב':'הפעלת סיבוב';}
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)rotation(false);
 rotate.addEventListener('click',()=>rotation(!model.autoRotate));
 document.getElementById('reset-model').addEventListener('click',()=>{model.cameraOrbit='35deg 70deg auto';model.cameraTarget='auto auto auto';});
 for(const [id,delta] of [['zoom-in',1],['zoom-out',-1]])document.getElementById(id).addEventListener('click',()=>model.zoom(delta));
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&typeof close3d==='function')close3d();});
