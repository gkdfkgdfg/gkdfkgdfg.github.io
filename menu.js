const $=id=>document.getElementById(id),form=$('config'),modal=$('settingsModal');
$('play').disabled=true;
const numeric=new Set(['balance','entryFee','stakeBase','pelletPrice','botCount','difficulty','worldHalfSize','cashoutMultiplier','tournamentSeconds']);
const toggles=['hideCurrency','hideAmounts','hideDollar','hideNicknames','hideMapLeaderboard','hideLabels','hideExitHints','showStartHint'];
const banners=['battle-banner.webp','practice-banner.webp','tournament-banner.webp','winner-banner.webp'];
const previewImages=new Map();
let catalogs={skins:[],backgrounds:[]};
let config={mode:'cash',currency:'USDT',entryFee:50,stakeBase:250,balance:10000,botCount:18,cashoutMultiplier:50,tournamentSeconds:180,wormSkin:'default'};
const LOCAL_SETTINGS_KEY='viper-local-settings-v1';
function readLocalSettings(){try{const value=JSON.parse(localStorage.getItem(LOCAL_SETTINGS_KEY)||'{}');return value&&typeof value==='object'?value:{}}catch{return{}}}
function writeLocalSettings(value){try{localStorage.setItem(LOCAL_SETTINGS_KEY,JSON.stringify(value))}catch{}}
const lobbyConfig=()=>({...config,currencyIcon:'none',language:'ru'});
function previewImage(src){if(!src)return null;if(!previewImages.has(src)){const image=new Image();image.onload=drawPreview;image.src=src;previewImages.set(src,image)}const image=previewImages.get(src);return image.complete&&image.naturalWidth?image:null}
function skinAsset(){return catalogs.skins.find(a=>a.id===config.wormSkin)||{url:config.wormSkin==='serbia'?'/skins/serbia.png':'/assets/default-Bx4xt8yz.webp',span:config.wormSkin==='serbia'?1.6:4};}
function fillCatalogs(){const skins=$('skinSelect'),backgrounds=$('backgroundSelect');skins.querySelectorAll('[data-upload]').forEach(el=>el.remove());backgrounds.querySelectorAll('[data-upload]').forEach(el=>el.remove());for(const[kind,select]of [['skins',skins],['backgrounds',backgrounds]])for(const item of catalogs[kind]){const option=new Option(item.name,item.id);option.dataset.upload='1';select.add(option)}if(config.background==='image'&&!backgrounds.querySelector('[value="image"]'))backgrounds.add(new Option('Ранее загруженный фон','image'));}
const t=(key,values)=>ViperI18n.t(key,values);
const number=v=>Number(v||0).toLocaleString(ViperI18n.locale('ru'),{maximumFractionDigits:3});
const money=v=>ViperLocal.text(v,lobbyConfig());
function readForm(){const values=Object.fromEntries([...new FormData(form)].map(([k,v])=>[k,numeric.has(k)?Number(v):v]));for(const key of toggles)values[key]=form.elements[key].checked;values.currency=String(values.currency||'').trim()||'USDT';values.currencyIcon=values.currencyIcon||'none';return {...config,...values,currencyDisplay:values.hideAmounts?'hidden':values.hideCurrency?'amount':'full'};}
function fillForm(){for(const[key,value]of Object.entries(config)){const el=form.elements[key];if(!el)continue;if(key==='currencyIcon'){for(const radio of el)radio.checked=radio.value===value;}else if(el.type==='checkbox')el.checked=!!value;else el.value=value;}if(!config.currencyIcon)form.elements.currencyIcon.value='none';}
function render(){
 ViperI18n.set('ru');
 ViperLocal.renderMoney($('balanceText'),config.balance,lobbyConfig());
 document.querySelectorAll('[data-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.mode===config.mode);b.setAttribute('aria-pressed',String(b.dataset.mode===config.mode));});
 const practice=config.mode==='practice',tournament=config.mode==='tournaments';
 $('modeDescription').textContent=practice?t('practiceDesc'):tournament?t('tournamentDesc',{minutes:number(Math.round(config.tournamentSeconds/60*10)/10)}):t('cashDesc');
 $('entryTitle').textContent=practice?t('freePractice'):t('entryTitle');
 const fees=[config.stakeBase/5,config.stakeBase,config.stakeBase*5].map(v=>Math.round(v*1000)/1000);
 $('stakes').replaceChildren(...fees.map((fee,i)=>{const b=document.createElement('button');b.type='button';b.className='stake'+(Math.abs(fee-config.entryFee)<.001?' active':'');b.setAttribute('aria-pressed',String(Math.abs(fee-config.entryFee)<.001));const dollar=String(config.currency||'').includes('$')&&!config.hideCurrency;const values=[practice?t('free'):config.hideCurrency?'':String(config.currency||'').replace(/\$/g,'').trim(),config.hideAmounts?'•••':(dollar?'$':'')+number(fee),practice?[t('training'),t('freePlay'),t('warmup')][i]:tournament?t('pool')+' '+money(fee*(config.botCount+1)):t('win')+' '+money(fee*config.cashoutMultiplier)+'+'];['currency','amount','prize'].forEach((name,n)=>{const s=document.createElement('span');s.className=name;s.innerHTML=ViperLocal.decorate(values[n],lobbyConfig());b.appendChild(s);});b.onclick=()=>{config.entryFee=fee;form.elements.entryFee.value=fee;render();};return b;}));
 $('stakeHint').textContent=t('stakes',{fees:fees.map(number).join(' · ')});
 $('play').innerHTML=ViperLocal.decorate(practice?t('playPractice'):tournament?t('joinFor',{amount:money(config.entryFee)}):t('playFor',{amount:money(config.entryFee)}),lobbyConfig());
 $('playersText').textContent=config.botCount+1;$('winTitle').textContent=practice?t('practiceArena'):tournament?t('prizePool'):t('minimumCashout');practice?$('minWin').textContent=t('freePlay'):ViperLocal.renderMoney($('minWin'),tournament?config.entryFee*(config.botCount+1):config.entryFee*config.cashoutMultiplier,lobbyConfig());$('ruleText').textContent=practice?t('practiceRules'):tournament?t('tournamentRules'):t('cashRules');drawPreview();
}
function slide(n){$('heroBanner').src='/banners/'+banners[n];document.querySelectorAll('[data-slide]').forEach(b=>b.classList.toggle('active',+b.dataset.slide===n));}
document.querySelectorAll('[data-slide]').forEach(b=>b.onclick=()=>slide(+b.dataset.slide));document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{config.mode=b.dataset.mode;slide(config.mode==='practice'?1:config.mode==='tournaments'?2:0);render();});
function openSettings(){fillForm();modal.showModal();document.body.classList.add('modal-open');drawPreview()}function closeSettings(){modal.close();document.body.classList.remove('modal-open')}
$('openSettings').onclick=openSettings;$('closeSettings').onclick=closeSettings;modal.addEventListener('close',()=>document.body.classList.remove('modal-open'));modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeSettings()}});
form.addEventListener('input',()=>{config=readForm();render()});
async function save(){const response=await fetch('/local/profile',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(config)});const data=await response.json();if(!response.ok)throw Error(data.error||t('saveError'));config=data;writeLocalSettings(config);fillForm();render();return config}
form.addEventListener('submit',async e=>{e.preventDefault();$('settingsError').textContent='';config=readForm();try{await save();closeSettings()}catch(e){$('settingsError').textContent=e.message}});
$('play').onclick=async()=>{$('error').textContent='';$('play').disabled=true;try{if(config.mode!=='practice'&&config.balance<config.entryFee)throw Error(t('balanceError'));await save();location.href='/play/'}catch(e){$('error').textContent=e.message;$('play').disabled=false}};
function loadImage(src){return new Promise((resolve,reject)=>{const i=new Image();i.onload=()=>resolve(i);i.onerror=()=>reject(new Error('Не удалось прочитать изображение. Выберите JPG, PNG или WebP.'));i.src=src})}
function loadImageFile(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=()=>reject(new Error('Не удалось прочитать файл'));reader.onload=()=>loadImage(String(reader.result)).then(resolve,reject);reader.readAsDataURL(file)})}
const UPLOAD_LIMIT=4*1024*1024;
function pngBlob(canvas){return new Promise((resolve,reject)=>canvas.toBlob(value=>value?resolve(value):reject(new Error('Не удалось подготовить изображение')),'image/png'))}
async function prepareImage(file){
 if(file.size>25*1024*1024)throw Error('Максимальный размер файла — 25 МБ');
 const image=await loadImageFile(file),canvas=document.createElement('canvas');
 let scale=Math.min(1,1600/Math.max(image.naturalWidth,image.naturalHeight)),blob;
 do{canvas.width=Math.max(1,Math.round(image.naturalWidth*scale));canvas.height=Math.max(1,Math.round(image.naturalHeight*scale));canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);blob=await pngBlob(canvas);scale*=.8;}while(blob.size>UPLOAD_LIMIT&&Math.max(canvas.width,canvas.height)>256);
 if(blob.size>UPLOAD_LIMIT)throw Error('Не удалось уменьшить изображение до 4 МБ');
 return blob;
}
async function uploadAsset(file,kind,statusId){
 if(!file)return;
 const status=$(statusId),submit=form.querySelector('button[type=submit]');
 status.textContent='Загрузка…';submit.disabled=true;$('play').disabled=true;
 try{
  const blob=await prepareImage(file);
  const response=await fetch('/local/media/'+kind,{method:'POST',headers:{'Content-Type':'image/png','X-Asset-Name':encodeURIComponent(file.name||'image')},body:blob});
  const body=await response.text();let asset;
  try{asset=JSON.parse(body)}catch{throw Error(response.status===413?'Изображение слишком большое. Выберите файл поменьше.':'Сервер не смог загрузить изображение (HTTP '+response.status+'). Попробуйте ещё раз.')}
  if(!response.ok)throw Error(asset.error||'Не удалось загрузить картинку');
  catalogs[kind].push(asset);config[kind==='skins'?'wormSkin':'background']=asset.id;
  fillCatalogs();fillForm();render();status.textContent='Загружено: '+asset.name;
 }catch(error){status.textContent=error.message||'Не удалось загрузить картинку'}
 finally{submit.disabled=false;$('play').disabled=false;}
}
$('backgroundUpload').addEventListener('change',e=>uploadAsset(e.target.files[0],'backgrounds','uploadStatus'));
$('skinUpload').addEventListener('change',e=>uploadAsset(e.target.files[0],'skins','skinUploadStatus'));
function drawPreview(){
 const canvas=$('appearancePreview'),ctx=canvas.getContext('2d'),w=canvas.width,h=canvas.height,c=config;
 const base={original:'#06121c',neon:'#07131a',purple:'#160a29',gold:'#21190b'}[c.background]||'#091014';ctx.fillStyle=base;ctx.fillRect(0,0,w,h);
 const background=catalogs.backgrounds.find(a=>a.id===c.background)?.url||(c.background==='image'?'/local/background-image.jpg':c.background==='original'?'/assets/bg3-BZGvx7Ar.png':null),image=previewImage(background);
 if(image){ctx.globalAlpha=.85;const scale=Math.max(w/image.width,h/image.height);ctx.drawImage(image,(w-image.width*scale)/2,(h-image.height*scale)/2,image.width*scale,image.height*scale);ctx.globalAlpha=1;}
 else if(c.background!=='original'){ctx.strokeStyle=c.background==='purple'?'#8242c74a':c.background==='gold'?'#b693324a':'#1bc88b25';ctx.lineWidth=1;for(let x=0;x<w;x+=32){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}for(let y=0;y<h;y+=32){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}}
 const skin=skinAsset(),texture=previewImage(skin.url),points=[],diameter=43,period=diameter*skin.span;
 function curve(a,b,c,d){for(let i=0;i<=120;i++){const t=i/120,u=1-t;points.push({x:u*u*u*a.x+3*u*u*t*b.x+3*u*t*t*c.x+t*t*t*d.x,y:u*u*u*a.y+3*u*u*t*b.y+3*u*t*t*c.y+t*t*t*d.y})}}
 curve({x:85,y:127},{x:220,y:175},{x:255,y:48},{x:385,y:101});curve({x:385,y:101},{x:450,y:130},{x:495,y:113},{x:577,y:85});
 ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=diameter+6;ctx.strokeStyle='#0006';ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y+4):ctx.moveTo(p.x,p.y+4));ctx.stroke();
 if(texture){let distance=0;for(let i=0;i<points.length-1;i++){const a=points[i],b=points[i+1],length=Math.hypot(b.x-a.x,b.y-a.y);if(!length)continue;const angle=Math.atan2(b.y-a.y,b.x-a.x),sourceX=(distance%period)/period*texture.width,sourceWidth=Math.min(texture.width-sourceX,Math.max(1,length/period*texture.width));ctx.save();ctx.translate(a.x,a.y);ctx.rotate(angle);ctx.drawImage(texture,sourceX,0,sourceWidth,texture.height,-.7,-diameter/2,length+1.4,diameter);ctx.restore();distance+=length;}
 for(const index of [0,points.length-1]){const p=points[index],other=points[index===0?1:points.length-2],angle=Math.atan2(p.y-other.y,p.x-other.x);ctx.save();ctx.translate(p.x,p.y);ctx.rotate(angle);ctx.beginPath();ctx.arc(0,0,diameter/2,0,Math.PI*2);ctx.clip();const sx=index===0?0:(distance%period)/period*texture.width;ctx.drawImage(texture,Math.min(texture.width-2,sx),0,2,texture.height,-diameter/2,-diameter/2,diameter,diameter);ctx.restore();}}
 else {ctx.strokeStyle='#26343b';ctx.lineWidth=diameter;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();}
 const head=points[points.length-1],last=points[points.length-2],angle=Math.atan2(head.y-last.y,head.x-last.x);ctx.save();ctx.translate(head.x,head.y);ctx.rotate(angle);for(const y of [-11,11]){ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(9,y,7.5,0,Math.PI*2);ctx.fill();ctx.fillStyle='#0d1720';ctx.beginPath();ctx.arc(12,y,4,0,Math.PI*2);ctx.fill()}ctx.restore();
}
Promise.all([fetch('/local/config').then(r=>r.json()),fetch('/local/media/skins').then(r=>r.json()),fetch('/local/media/backgrounds').then(r=>r.json())]).then(([c,skins,backgrounds])=>{config={...c,...readLocalSettings(),cashoutMultiplier:50};catalogs={skins,backgrounds};fillCatalogs();fillForm();slide(config.mode==='practice'?1:config.mode==='tournaments'?2:0);render();$('play').disabled=false;}).catch(()=>{$('error').textContent=t('launchError')});
