// Browser settings and media storage. All data stays on this device.
(()=>{
const PROFILE='viper-local-settings-v1';
const defaults={language:'ru',nickname:'Player',currency:'USDT',currencyIcon:'none',balance:10000,entryFee:50,pelletPrice:1,botCount:18,difficulty:1,worldHalfSize:1800,cashoutMultiplier:50,skinCode:0,mode:'cash',stakeBase:250,tournamentSeconds:180,quality:'original',hideCurrency:false,hideAmounts:false,hideDollar:false,hideNicknames:false,hideMapLeaderboard:false,hideLabels:false,hideExitHints:false,showStartHint:true,currencyDisplay:'full',background:'original',backgroundColor:'#07131a',wormPrimary:'#22ef82',wormSecondary:'#08784a',wormPattern:'gradient_stripe',wormFlag:'none',wormSkin:'default'};

const builtin=JSON.parse('{"skins": [{"id": "skin-7f92c7064df62685", "name": "Италия", "url": "/uploads/skins/skin-7f92c7064df62685.png", "span": 5.948818897637795}, {"id": "skin-e44c0b5e15b8f0cf", "name": "Аргентина", "url": "/uploads/skins/skin-e44c0b5e15b8f0cf.png", "span": 5.94488188976378}, {"id": "skin-284374a9c92ee533", "name": "Германия", "url": "/uploads/skins/skin-284374a9c92ee533.png", "span": 6.01593625498008}, {"id": "skin-461e86b39f8197de", "name": "Румыния", "url": "/uploads/skins/skin-461e86b39f8197de.png", "span": 6.088709677419355}, {"id": "skin-2597f0335adb8994", "name": "Франция", "url": "/uploads/skins/skin-2597f0335adb8994.png", "span": 6.06425702811245}, {"id": "skin-f29f1b8d6557fb78", "name": "Колумбия", "url": "/uploads/skins/skin-f29f1b8d6557fb78.png", "span": 6.163265306122449}], "backgrounds": []}');
const media={skins:[...builtin.skins],backgrounds:[...builtin.backgrounds]};
const originalFetch=window.fetch.bind(window);
let database;
const ready=new Promise(resolve=>{
  if(!window.indexedDB){resolve();return;}
  const request=indexedDB.open('viper-static-media-v1',1);
  request.onupgradeneeded=()=>request.result.createObjectStore('assets',{keyPath:'id'});
  request.onerror=()=>resolve();
  request.onsuccess=()=>{
    database=request.result;
    database.onversionchange=()=>database.close();
    const tx=database.transaction('assets','readonly'),query=tx.objectStore('assets').getAll();
    query.onerror=()=>resolve();
    query.onsuccess=()=>{for(const row of query.result||[]){if(!['skins','backgrounds'].includes(row.kind)||!(row.blob instanceof Blob))continue;media[row.kind].push({...row,url:URL.createObjectURL(row.blob),blob:undefined});}resolve();};
  };
});
function read(){try{const v=JSON.parse(localStorage.getItem(PROFILE)||'{}');return v&&typeof v==='object'?v:{}}catch{return{}}}
function write(v){const clean={...v};delete clean.skinImage;delete clean.backgroundImage;try{localStorage.setItem(PROFILE,JSON.stringify(clean))}catch{}}
function svg(theme,color){const map={neon:['#07131a','#16ce8c'],purple:['#160a29','#974fff'],gold:['#21190b','#e1b347'],custom:[/^#[0-9a-f]{6}$/i.test(color||'')?color:'#07131a','#16ce8c']};const [bg,fg]=map[theme]||map.neon;return `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="512" height="512" fill="${bg}"/><defs><pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M64 0H0V64" fill="none" stroke="${fg}" stroke-opacity=".16"/><circle cx="0" cy="0" r="2" fill="${fg}" fill-opacity=".32"/></pattern></defs><rect width="512" height="512" fill="url(#grid)"/></svg>`}
function configView(value){
  const c={...defaults,...value},skin=media.skins.find(x=>x.id===c.wormSkin),bg=media.backgrounds.find(x=>x.id===c.background);
  for(const [key,min,max] of [['balance',0,1e12],['entryFee',0,1e8],['pelletPrice',.001,1e6],['botCount',1,60],['difficulty',0,2],['worldHalfSize',800,4000],['stakeBase',.005,2e7],['tournamentSeconds',30,3600]]){const n=Number(c[key]);c[key]=Number.isFinite(n)?Math.max(min,Math.min(max,n)):defaults[key];}
  for(const key of ['botCount','difficulty','tournamentSeconds'])c[key]=Math.round(c[key]);
  c.currency=String(c.currency||'USDT').replace(/[\x00-\x1f<>]/g,'').trim().slice(0,12)||'USDT';
  c.nickname=String(c.nickname||'Player').trim().slice(0,24);
  return{...c,cashoutMultiplier:50,currencyDisplay:c.hideAmounts?'hidden':c.hideCurrency?'amount':'full',skinImage:skin?.url||(c.wormSkin==='serbia'?'/skins/serbia.png':'/assets/default-Bx4xt8yz.webp'),skinSpan:skin?.span||(c.wormSkin==='serbia'?1.6:4),backgroundImage:bg?.url||(c.background==='original'?'':c.background==='image'?'/backgrounds/custom.jpg':'data:image/svg+xml;base64,'+btoa(svg(c.background,c.backgroundColor)))};
}
function json(value,status=200){return new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json; charset=utf-8'}})}
function saveAsset(row){return new Promise((resolve,reject)=>{if(!database){reject(Error('Браузер не разрешил сохранение изображения. Откройте сайт в обычном режиме.'));return;}const tx=database.transaction('assets','readwrite');tx.objectStore('assets').put(row);tx.oncomplete=resolve;tx.onerror=()=>reject(Error('Не удалось сохранить изображение: недостаточно места на устройстве.'));tx.onabort=tx.onerror;});}
async function imageSize(blob){const url=URL.createObjectURL(blob);try{return await new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve({width:image.naturalWidth,height:image.naturalHeight});image.onerror=()=>reject(Error('Не удалось прочитать изображение'));image.src=url;});}finally{URL.revokeObjectURL(url);}}
window.fetch=async function(input,init={}){
 const raw=typeof input==='string'?input:input?.url||'';let u;try{u=new URL(raw,location.href)}catch{return originalFetch(input,init)}
 if(u.origin!==location.origin)return originalFetch(input,init);
 const path=u.pathname;
 if(!path.startsWith('/local/')&&!path.startsWith('/api/'))return originalFetch(input,init);
 await ready;
 if(path==='/local/config'||path==='/local/profile'){
   if((init.method||'GET').toUpperCase()==='GET')return json(configView(read()));
   try{const next=configView({...read(),...JSON.parse(init.body||'{}')});write(next);return json(next)}catch{return json({error:'Некорректные настройки'},400)}
 }
 if(path==='/local/media/skins'||path==='/local/media/backgrounds'){
   const kind=path.endsWith('/skins')?'skins':'backgrounds';
   if((init.method||'GET').toUpperCase()==='GET')return json(media[kind]);
   try{
     const blob=new Blob([init.body],{type:'image/png'});if(blob.size>4*1024*1024)throw Error('Максимальный размер — 4 МБ');
     const size=await imageSize(blob);let name='Мой '+(kind==='skins'?'скин':'фон');
     try{name=decodeURIComponent(init.headers?.['X-Asset-Name']||init.headers?.get?.('X-Asset-Name')||name)}catch{}
     name=name.replace(/[\x00-\x1f<>]/g,'').replace(/\.[^.]+$/,'').trim().slice(0,64)||'Изображение';
     const id=(kind==='skins'?'skin-':'bg-')+crypto.randomUUID().replace(/-/g,'').slice(0,16);
     const row={id,kind,name,span:Math.max(.5,Math.min(8,size.width/size.height)),blob};
     await saveAsset(row);const asset={id,name,span:row.span,url:URL.createObjectURL(blob)};media[kind].push(asset);return json(asset,201);
   }catch(error){return json({error:error.message||'Не удалось сохранить изображение'},400)}
 }
 if(path==='/local/background.svg')return new Response(svg(u.searchParams.get('theme'),u.searchParams.get('color')),{headers:{'Content-Type':'image/svg+xml'}});
 if(path==='/local/background-image'||path==='/local/background-image.jpg')return originalFetch('/backgrounds/custom.jpg');
 if(path==='/local/network'||path==='/local/stats')return json({urls:[],arenas:1,players:[]});
 if(path.startsWith('/api/'))return json({success:true,servers:[],tiers:[],balance:configView(read()).balance,currency:configView(read()).currency});
 return json({error:'Unknown local endpoint'},404);
};
window.__VIPER_STATIC_STORAGE__=true;
})();
