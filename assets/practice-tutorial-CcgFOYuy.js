const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/scene-stage-BqeDHIMe.js","assets/food-fx-DBBOWeAK.js","assets/supabase-client-BHMtNnbv.js","assets/index-DX65wbiK.js","assets/env-BJel9_CM.js","assets/env-C7vzROsb.js","assets/snake-physics-QCI22-RQ.js","assets/auth-manager-Cmpvns0S.js","assets/index-BVfXPvtU.js","assets/kyc-service-C_utPXUd.js","assets/tournaments-api-l_A1Z-uY.js","assets/utils-DJ8BS0_7.js","assets/tournaments-api-d0L9Z6JE.css"])))=>i.map(i=>d[i]);
import{e as re,d as ie,f as ae,s as Mt,b as nt,a as pt}from"./auth-manager-Cmpvns0S.js";import{c as le}from"./env-BJel9_CM.js";import{e as Tt}from"./tournaments-api-l_A1Z-uY.js";import{t as S,o as ce,b as $t,g as Lt}from"./index-BVfXPvtU.js";import{_ as ue}from"./env-C7vzROsb.js";import{P as Gt}from"./snake-physics-QCI22-RQ.js";import"./supabase-client-BHMtNnbv.js";import"./index-DX65wbiK.js";import"./kyc-service-C_utPXUd.js";import"./utils-DJ8BS0_7.js";const de="viper_rules_seen:";function Vt(s){const t=s==null?"":String(s).trim();return de+(t||"anon")}function It(s,t){try{return s?.getItem?.(t)==="1"}catch{return!1}}function Ot(s,t){if(!s||typeof s.setItem!="function")return!1;try{return s.setItem(t,"1"),!0}catch{return!1}}function he({serverCompleted:s=!1,userId:t=null,local:e=null,session:o=null,memory:h=null}={}){if(s===!0)return!1;const f=Vt(t);return!(h?.has?.(f)||It(e,f)||It(o,f))}function pe({userId:s=null,local:t=null,session:e=null,memory:o=null}={}){const h=Vt(s);return o?.add?.(h),{local:Ot(t,h),session:Ot(e,h)}}function Wt(){try{return typeof window<"u"?window.localStorage:null}catch{return null}}function Jt(){try{return typeof window<"u"?window.sessionStorage:null}catch{return null}}const fe=.05,ft=1/60;class ye{constructor({host:t,onFrame:e=null,onLoop:o=null}){this.host=t,this.onFrame=e,this.onLoop=o,this.stage=null,this.scene=null,this.t=0,this.playing=!1,this.stopAt=null,this._raf=0,this._last=0,this._disposed=!1,this._mountPromise=null}mount(t,e){return this._mountPromise?this._mountPromise:(this._mountPromise=(async()=>{const{createStage:o}=await ue(async()=>{const{createStage:h}=await import("./scene-stage-BqeDHIMe.js");return{createStage:h}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));return this._disposed?null:(this.stage=await o(this.host,{width:Math.max(1,t|0),height:Math.max(1,e|0)}),this._disposed?(this.stage.dispose(),this.stage=null,null):this.stage)})(),this._mountPromise)}get mounted(){return!!this.stage}load(t){this.scene=t,this.t=0,this.stopAt=null,this.stage&&(this.stage.load(t),this.stage.render(),this._emit())}play(){if(this.playing||!this.stage||!this.scene)return;this.playing=!0,this._last=0;const t=e=>{if(!this.playing)return;const o=this._last?Math.min(fe,Math.max(0,(e-this._last)/1e3)):0;this._last=e,this._advance(o),this._raf=requestAnimationFrame(t)};this._raf=requestAnimationFrame(t)}pause(){this.playing=!1,this._raf&&cancelAnimationFrame(this._raf),this._raf=0}replay(){this.scene&&(this.load(this.scene),this.play())}seek(t,{virtualClock:e=!1}={}){if(!this.stage||!this.scene)return;const o=Math.max(0,Math.min(t,this.scene.duration+this.scene.holdAfter));if(!e){this.stage.seek(o),this.t=o,this.stage.render(),this._emit();return}const h=performance.now(),f=Date.now();let l=0;const c=Object.getOwnPropertyDescriptor(performance,"now"),a=Date.now;performance.now=()=>h+l*1e3,Date.now=()=>f+Math.round(l*1e3);try{this.stage.load(this.scene);let m=0;for(;m+ft<=o;)m+=ft,l=m,this.stage.step(m,ft);o>m&&(l=o,this.stage.step(o,o-m))}finally{c?Object.defineProperty(performance,"now",c):delete performance.now,Date.now=a}this.t=o,this.stage.render(),this._emit()}playUntil(t){this.stopAt=t,this.play()}resize(t,e){this.stage?.resize(t,e),this.stage&&this.scene&&(this.stage.render(),this._emit())}_advance(t){if(!this.scene||!this.stage)return;const e=this.scene.duration+this.scene.holdAfter;let o=this.t+t;if(this.stopAt!==null&&o>=this.stopAt){o=this.stopAt,this.stopAt=null,this.stage.step(o,Math.max(0,o-this.t)),this.t=o,this.stage.render(),this._emit(),this.pause();return}if(o>=e){this.stage.load(this.scene),this.t=0,this.stage.render(),this._emit(),this.onLoop&&this.onLoop();return}this.stage.step(o,t),this.t=o,this.stage.render(),this._emit()}_emit(){if(!(!this.onFrame||!this.scene||!this.stage))try{this.onFrame({scene:this.scene,t:this.t,stage:this.stage})}catch(t){this._emitWarned||(this._emitWarned=!0,t?.message)}}dispose(){this._disposed=!0,this.pause(),this.stage&&(this.stage.dispose(),this.stage=null),this.scene=null}}const I={background:"#0a0a0a",backgroundAlpha:.85,border:"#00ffff",borderGlow:"rgba(0, 255, 255, 0.4)",countdownTimer:"#ffdd00",exitTimer:"#00ff88",buttonText:"#ffffff",success:"#00ff88"},ot="polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)";function J(s){return re()?ie(s,"receive"):ae(s)}const Pt="rules-hud-replica-style";function me(){if(typeof document>"u"||document.getElementById(Pt))return;const s=document.createElement("style");s.id=Pt,s.textContent=`
  @keyframes timerPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.02); }
  }
  @keyframes successPulse {
    0% { transform: scale(0.9); opacity: 0; }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes progressShimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }`,document.head.appendChild(s)}function R(s,t,e){const o=document.createElement(s);return e&&(o.className=e),o.style.cssText=t,o}function Ft(s,{isMobile:t=!1}={}){me();const e=R("div",`
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% - 32px);
      max-width: 500px;
      height: 32px;
      background: rgba(10, 10, 20, 0.7);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 20px;
      border: 1px solid rgba(0, 255, 102, 0.25);
      box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.4),
        0 0 15px rgba(0, 255, 102, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.05);
      display: none;
      align-items: center;
      padding: 4px;
      z-index: 900;
      overflow: hidden;
    `,"rules-hud-bar"),o=R("div",`
      position: relative;
      flex: 1;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 16px;
      overflow: hidden;
      margin: 0 8px;
    `),h=R("div",`
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #00ff66, #00ffaa, #00ff66);
      background-size: 200% 100%;
      border-radius: 16px;
      transition: width 0.3s ease-out, box-shadow 0.3s ease;
      box-shadow: 0 0 10px rgba(0, 255, 102, 0.4);
      animation: progressShimmer 2s linear infinite;
    `),f=R("div",`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, transparent 100%);
      border-radius: 16px 16px 0 0;
      pointer-events: none;
    `);h.appendChild(f);const l=R("div",`
      font-family: "Courier New", Courier, monospace;
      font-size: 12px;
      font-weight: bold;
      color: #00ff66;
      text-shadow: 0 0 8px rgba(0, 255, 102, 0.6);
      white-space: nowrap;
      padding-left: 8px;
      min-width: 50px;
    `),c=R("div",`
      font-family: "Courier New", Courier, monospace;
      font-size: 12px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.7);
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
      white-space: nowrap;
      padding-right: 8px;
      min-width: 50px;
      text-align: right;
    `);o.appendChild(h),e.appendChild(l),e.appendChild(o),e.appendChild(c);const a=R("div",`
      position: absolute;
      bottom: 15%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      z-index: 1000;
      pointer-events: none;
    `,"rules-hud-column");function m(r,n,u){const v=R("div",`
      display: none;
      flex-direction: column;
      align-items: center;
      padding: 12px 24px;
      background: ${I.background};
      opacity: ${I.backgroundAlpha};
      border: 2px solid ${n};
      clip-path: ${ot};
      box-shadow: 0 0 20px ${n}40, inset 0 0 10px ${n}20;
      animation: timerPulse 1s ease-in-out infinite;
      pointer-events: auto;
    `,`cashout-timer cashout-timer-${r}`),k=R("div",`
      font-family: Arial, Helvetica, sans-serif;
      font-size: 11px;
      font-weight: bold;
      color: ${n};
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 4px;
      text-shadow: 0 0 10px ${n};
    `,"timer-label");k.setAttribute("data-i18n",u),k.textContent=S(u);const C=R("div",`
      font-family: "Courier New", Courier, monospace;
      font-size: 32px;
      font-weight: bold;
      color: ${n};
      text-shadow: 0 0 15px ${n}, 0 0 30px ${n}80;
    `,"timer-value");return C.textContent="00",v.appendChild(k),v.appendChild(C),{timer:v,value:C}}const b=m("countdown",I.countdownTimer,"hud.cashout_in_label"),_=m("exit",I.exitTimer,"hud.exit_now_label"),y=R("button",`
      display: none;
      padding: 14px 28px;
      background: ${I.background};
      border: 2px solid ${I.border};
      clip-path: ${ot};
      color: ${I.buttonText};
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: default;
      pointer-events: none;
      transition: all 0.2s ease;
      box-shadow: 0 0 15px ${I.borderGlow}, inset 0 0 10px rgba(0, 255, 255, 0.1);
      text-shadow: 0 0 10px ${I.border};
    `,"rules-hud-cashout-btn");y.type="button",y.tabIndex=-1;const w=R("div",`
      display: none;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 2px;
      color: rgba(255, 255, 255, 0.75);
      text-transform: uppercase;
      padding: 3px 8px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.55);
      border: 1px solid rgba(255, 255, 255, 0.25);
    `,"rules-hud-ff");w.textContent="⏩ ×10",a.appendChild(b.timer),a.appendChild(_.timer),a.appendChild(y),a.appendChild(w);const x=R("div",`
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%) translateY(-20px);
      padding: 12px 24px;
      background: ${I.background};
      border: 2px solid ${I.border};
      clip-path: ${ot};
      color: ${I.buttonText};
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      z-index: 1001;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      pointer-events: none;
      box-shadow: 0 0 20px ${I.borderGlow};
      text-shadow: 0 0 10px ${I.border};
      white-space: nowrap;
      max-width: calc(100% - 24px);
      overflow: hidden;
      text-overflow: ellipsis;
    `,"rules-hud-toast"),$=R("div",`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      pointer-events: none;
    `,"rules-hud-success"),M=R("div",`
      padding: 40px 60px;
      background: ${I.background};
      border: 3px solid ${I.success};
      clip-path: ${ot};
      text-align: center;
      box-shadow: 0 0 40px ${I.success}60;
      animation: successPulse 0.5s ease-out;
      pointer-events: none;
      max-width: 90%;
    `,"overlay-content"),p=R("div",`
      font-family: Arial, Helvetica, sans-serif;
      font-size: 28px;
      font-weight: bold;
      color: ${I.success};
      text-transform: uppercase;
      letter-spacing: 4px;
      margin-bottom: 16px;
      text-shadow: 0 0 20px ${I.success};
    `);p.setAttribute("data-i18n","hud.cashout_successful"),p.textContent=S("hud.cashout_successful");const g=R("div",`
      font-family: "Courier New", Courier, monospace;
      font-size: 42px;
      font-weight: bold;
      color: ${I.buttonText};
      text-shadow: 0 0 15px ${I.success};
    `,"success-amount");g.textContent="$0.00",M.appendChild(p),M.appendChild(g),$.appendChild(M),s.appendChild(e),s.appendChild(a),s.appendChild(x),s.appendChild($);let T=null,A=!1;function O(r){if(!r||!r.visible||!(r.threshold>0)){e.style.display="none";return}e.style.display="flex";const n=r.current/r.threshold*100;h.style.width=`${Math.min(n,100)}%`,n>=100?(h.style.background="linear-gradient(90deg, #ffd700, #ffaa00, #ffd700)",h.style.boxShadow="0 0 20px rgba(255, 215, 0, 0.6), 0 0 40px rgba(255, 170, 0, 0.3)",e.style.borderColor="rgba(255, 215, 0, 0.5)",e.style.boxShadow="0 4px 20px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",l.style.color="#ffd700",l.style.textShadow="0 0 10px rgba(255, 215, 0, 0.8)",c.style.color="#ffd700",c.style.textShadow="0 0 8px rgba(255, 215, 0, 0.6)"):n>=75?(h.style.background="linear-gradient(90deg, #00ff88, #00ffcc, #00ff88)",h.style.boxShadow="0 0 15px rgba(0, 255, 136, 0.5)",e.style.borderColor="rgba(0, 255, 136, 0.35)",e.style.boxShadow="0 4px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 136, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",l.style.color="#00ff66",l.style.textShadow="0 0 8px rgba(0, 255, 102, 0.6)",c.style.color="rgba(255, 255, 255, 0.7)",c.style.textShadow="0 0 5px rgba(255, 255, 255, 0.3)"):(h.style.background="linear-gradient(90deg, #00ff66, #00ffaa, #00ff66)",h.style.boxShadow="0 0 10px rgba(0, 255, 102, 0.4)",e.style.borderColor="rgba(0, 255, 102, 0.25)",e.style.boxShadow="0 4px 20px rgba(0, 0, 0, 0.4), 0 0 15px rgba(0, 255, 102, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",l.style.color="#00ff66",l.style.textShadow="0 0 8px rgba(0, 255, 102, 0.6)",c.style.color="rgba(255, 255, 255, 0.7)",c.style.textShadow="0 0 5px rgba(255, 255, 255, 0.3)"),l.textContent=J(r.current),c.textContent=J(r.threshold)}function F(r){const n=r?`${r.key}|${r.amount??""}|${r.params?JSON.stringify(r.params):""}`:null;if(n===T)return;if(T=n,!r){x.style.opacity="0",x.style.transform="translateX(-50%) translateY(-20px)";return}const u=r.amount!==void 0?{...r.params,amount:J(r.amount)}:r.params;x.textContent=S(r.key,u),x.style.opacity="1",x.style.transform="translateX(-50%) translateY(0)"}function L(r,n){if(r==="hidden"||!r){y.style.display="none";return}if(y.style.display="block",r==="pressed")y.textContent=S("hud.cashing_out_button"),y.style.background="rgba(0, 255, 255, 0.15)",y.style.boxShadow=`0 0 25px ${I.borderGlow}, inset 0 0 15px rgba(0, 255, 255, 0.2)`,y.style.transform="scale(0.98)";else{const u=J(n??0);y.textContent=t?S("hud.cash_out_button",{amount:u}):S("hud.cash_out_button_with_key",{amount:u}),y.style.background=I.background,y.style.boxShadow=`0 0 15px ${I.borderGlow}, inset 0 0 10px rgba(0, 255, 255, 0.1)`,y.style.transform="scale(1)"}}function i(r,n){if(n==null){r.timer.style.display="none";return}r.timer.style.display="flex",r.value.textContent=String(n).padStart(2,"0")}function d(r){const n=!!r;n!==A&&(A=n,$.style.display=n?"flex":"none",n&&(M.style.animation="none",M.offsetWidth,M.style.animation="successPulse 0.5s ease-out")),n&&(g.textContent=J(r.amount??0))}return{elements:{bar:e,column:a,toast:x,success:$,button:y},apply(r){if(!r){O(null),F(null),L("hidden"),i(b,null),i(_,null),d(null),w.style.display="none";return}if(O(r.bar),F(r.toast),L(r.button,r.bar?.current),i(b,r.countdown),i(_,r.exit),d(r.success),r.fastForward){const n=Number(r.fastForward);w.textContent=Number.isFinite(n)&&n>1?`⏩ ×${Number.isInteger(n)?n:n.toFixed(1)}`:"⏩",w.style.display="block"}else w.style.display="none"},destroy(){for(const r of[e,a,x,$])r.remove()}}}const kt=Gt.BASE_SPEED,Rt=Gt.BOOST_SPEED,ge=5,be=3,_e=1.04,xe=1/120,yt=Math.PI*2;function W(s){const t=Math.max(0,Number(s)||0);return 10.8+1.39*Math.pow(t,.3)}function it(s){const t=Math.max(0,Number(s)||0);return Math.max(8,Math.min(220,Math.round(10+.255*t)))}function Nt(s,t){let e=(t-s)%yt;return e>Math.PI&&(e-=yt),e<=-Math.PI&&(e+=yt),e}function q(s){const{x:t,y:e,angle:o,duration:h,steer:f,preRoll:l=6,dt:c=xe,turnRate:a=be}=s;if(!(h>0))throw new Error("buildTrack: duration must be > 0");const m=Math.round(l/c)+Math.ceil(h/c)+2,b=new Float64Array(m),_=new Float64Array(m),y=new Float64Array(m),w=new Float64Array(m),x=new Float64Array(m),$=new Uint8Array(m),M=Math.round(l/c),p=(f(-l,{x:t,y:e,angle:o})||{}).boost?Rt:kt;for(let n=0;n<M;n++){const u=(M-n)*c;b[n]=-u,_[n]=t-Math.cos(o)*p*u,y[n]=e-Math.sin(o)*p*u,w[n]=o,x[n]=0,$[n]=0}for(let n=1;n<M;n++)x[n]=x[n-1]+p*c;let g=t,T=e,A=o,O=M>0?x[M-1]+p*c:0,F=0;for(let n=M;n<m;n++){const u=f(F,{x:g,y:T,angle:A})||{},v=!!u.boost,k=Number.isFinite(u.turnRate)?u.turnRate:a;if(Number.isFinite(u.angle)){const N=Nt(A,u.angle),D=k*c;A+=Math.max(-D,Math.min(D,N))}b[n]=F,_[n]=g,y[n]=T,w[n]=A,x[n]=O,$[n]=v?1:0;const P=(v?Rt:kt)*c;g+=Math.cos(A)*P,T+=Math.sin(A)*P,O+=P,F+=c}const L=b[0],i=n=>{const u=(n-L)/c;if(u<=0)return{i:0,u:0};if(u>=m-1)return{i:m-2,u:1};const v=Math.floor(u);return{i:v,u:u-v}},d=n=>{if(n<=x[0])return{x:_[0],y:y[0]};if(n>=x[m-1])return{x:_[m-1],y:y[m-1]};let u=0,v=m-1;for(;v-u>1;){const P=u+v>>1;x[P]<=n?u=P:v=P}const k=x[v]-x[u],C=k>0?(n-x[u])/k:0;return{x:_[u]+(_[v]-_[u])*C,y:y[u]+(y[v]-y[u])*C}},r={duration:h,preRoll:l,at(n){const{i:u,u:v}=i(n);return{x:_[u]+(_[u+1]-_[u])*v,y:y[u]+(y[u+1]-y[u])*v,angle:w[u]+Nt(w[u],w[u+1])*v,boost:(v<.5?$[u]:$[u+1])===1}},arcAt(n){const{i:u,u:v}=i(n);return x[u]+(x[u+1]-x[u])*v},path(n,u,v=ge){const k=r.at(n),C=r.arcAt(n),P=Math.max(2,u|0),N=new Array(P);for(let D=P-1;D>=1;D--){const H=d(C-D*v);N[P-1-D]={x:H.x,y:H.y}}return N[P-1]={x:k.x,y:k.y},N}};return r}function ve(s,t,e){const o=Math.max(0,Math.round(e.foodHeld??0)),h=e.headRadius??W(o),f=s.at(t),l=s.path(t,e.points??it(o));return{id:e.id,x:f.x,y:f.y,angle:f.angle,path:l,headRadius:h,baseRadius:h/_e,foodHeld:o,isBoosting:e.isBoosting??f.boost,_tailOffset:0,name:e.name??e.id,skin:e.skin??"default",color:e.color??"#4caf50",economics:e.economics??null,cashoutFlags:e.cashoutFlags??0,goldenBallValue:0}}function Se(s,t,e,o,h,{from:f=0,to:l,step:c=1/60}={}){const a=l??s.duration,m=t+o,b=m*m;for(let _=f;_<=a;_+=c){const y=s.at(_),w=e.path(_,h);for(let x=0;x<w.length-3;x++){const $=w[x].x-y.x,M=w[x].y-y.y;if($*$+M*M<=b)return _}}return null}function we(s,t,e,o,{from:h=0,to:f,step:l=1/60}={}){const c=f??s.duration,a=o*o;for(let m=h;m<=c;m+=l){const b=s.at(m),_=b.x-t,y=b.y-e;if(_*_+y*y<=a)return m}return null}function At(s,t={}){return e=>{for(const o of s)if(e<o.until)return o;return t}}const z="you",ke=2,Ae=4,Ce=500,Ee=Object.freeze({minX:-6e3,maxX:6e3,minY:-6e3,maxY:6e3});function ut(s){const t=Number(s)>0?Number(s):10;return{entryFee:t,pelletPrice:t/10,bigPelletPrice:t/5}}function dt(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Me(s,{count:t,goldShare:e=.7,from:o,idPrefix:h,jitter:f=9,rng:l=dt(7)}){const c=[];if(!s||s.length===0)return c;for(let a=0;a<t;a++){const m=(a+.5)/t,b=Math.min(s.length-1,Math.floor(m*s.length)),_=s[b],y=l()<e;c.push({id:`${h}-${a}`,x:_.x+(l()-.5)*2*f,y:_.y+(l()-.5)*2*f,value:y?2:1,from:o,until:1/0,eaterId:null,flyFrom:{x:_.x,y:_.y}})}return c}function Zt(s,t,e,o,{pelletReach:h=7,to:f}={}){for(const l of e){if(l.until!==1/0)continue;const c=we(s,l.x,l.y,t+h,{from:Math.max(0,l.from),to:f});c!==null&&(l.until=c,l.eaterId=o)}return e}function Qt(s,t,e){let o=0;for(const h of s)h.eaterId===t&&h.until<=e&&(o+=h.value);return o}function ht(s){const{snakes:t,economics:e}=s,o=new Map(t.map(l=>[l.id,l])),h=(l,c,a={})=>ve(l.track,c,{id:l.id,name:l.name,skin:l.skin,color:l.color,foodHeld:l.foodAt(c),cashoutFlags:l.flagsAt?l.flagsAt(c):0,isBoosting:l.boostAt?l.boostAt(c):void 0,economics:e,...a});return{...s,bounds:s.bounds??Ee,holdAfter:s.holdAfter??1.5,snakesAt(l){const c=[];for(const a of t)l<a.from||l>=a.until||c.push(h(a,l));return c},frameOf(l,c){const a=o.get(l);return a?h(a,c):null},cameraAt(l){if(s.cameraAt)return s.cameraAt(l);const c=o.get(z),a=c.track.at(Math.min(l,c.until-1e-6));return{x:a.x,y:a.y}},headOf(l,c){const a=o.get(l);if(!a)return null;const m=a.track.at(c);return{x:m.x,y:m.y,angle:m.angle}},headRadiusOf(l,c){const a=o.get(l);return a?W(a.foodAt(c)):13},pointsOf(l,c){const a=o.get(l);return a?it(a.foodAt(c)):10}}}const Te=10,mt=120,gt=60,$e=90,Dt=6.25,Z=6.85,zt=7.8,Le=140;function Ie({entryFee:s=10}={}){const t=ut(s),e=Te,o=W(mt),h=W(gt),f=q({x:-60,y:92,angle:0,duration:e,preRoll:8,steer:At([{until:1.45,angle:0},{until:99,angle:-Math.PI/2}])}),l=q({x:0,y:0,angle:0,duration:e,preRoll:8,steer:()=>({angle:0})}),c=Se(f,h,l,o,it(mt),{from:1.5,to:4.5})??2.1,a=f.path(c,it(gt)),m=Me(a,{count:22,goldShare:.72,from:c,idPrefix:"loot",rng:dt(11)}),b=c+.3,_=new Set(m.map(n=>n.id)),y=o+7,w=q({x:0,y:0,angle:0,duration:e,preRoll:8,steer:(n,u)=>{if(n<b)return{angle:0};if(n<Dt&&_.size>0){let v=null,k=1/0;for(const C of m){if(!_.has(C.id))continue;const P=Math.hypot(C.x-u.x,C.y-u.y);if(P<=y){_.delete(C.id);continue}P<k&&(k=P,v=C)}if(v)return{angle:Math.atan2(v.y-u.y,v.x-u.x)}}return n<Z?{angle:0}:n<zt?{angle:-Math.PI*.5}:{angle:0}}});Zt(w,o,m,z,{to:e});const x=w.at(Z),$=q({x:x.x+Le+kt*Z,y:x.y,angle:Math.PI,duration:e,preRoll:8,steer:At([{until:Z,angle:Math.PI},{until:zt,angle:Math.PI/2},{until:99,angle:Math.PI}])});let M=Z,p=1/0;for(let n=6;n<=9.5;n+=1/60){const u=w.at(n),v=$.at(n),k=Math.hypot(u.x-v.x,u.y-v.y);k<p&&(p=k,M=n)}const g=[{id:z,name:"You",skin:"default",color:"#4caf50",track:w,from:0,until:1/0,foodAt:n=>mt+Qt(m,z,n)},{id:"rival",name:"Krait_77",skin:"crimson",color:"#C41E3A",track:f,from:0,until:c,foodAt:()=>gt},{id:"mamba",name:"Mamba_x",skin:"electric_blue",color:"#00ccff",track:$,from:0,until:1/0,foodAt:()=>$e}],T=[{t:c,type:"kill",id:"rival"}],A=m.filter(n=>n.until!==1/0).map(n=>n.until),O=A.length?Math.min(...A):1/0,F=A.length?Math.max(...A):c+3,L=n=>n<c+.9?0:n<Dt+.3?1:2,i=f.at(c),d=a[Math.floor(a.length/2)];return ht({id:"combat",duration:e,holdAfter:1.4,economics:t,snakes:g,foods:m,events:T,stepAt:L,calloutsAt:n=>[{id:"you",kind:"tag",key:"tutorial.callout_you",anchor:"you",dx:58,dy:-30,side:"left",visible:!0},{id:"incoming",kind:"ring",anchor:"rival",tone:"warn",visible:n>=c-.7&&n<c},{id:"zap",kind:"burst",key:"tutorial.callout_killed",world:i,tone:"zap",age:n-c,visible:n>=c&&n<c+1.5},{id:"loot",kind:"label",key:"tutorial.callout_loot",world:d,dy:-34,tone:"gold",visible:n>=c+.45&&n<Math.min(F,O+1.6)},{id:"headon",kind:"warn",key:"tutorial.callout_head_on",anchor:"mamba",dy:-54,visible:n>=M-1.1&&n<M+.5}],hudAt:()=>null,meta:{tKill:c,tClosest:M,dClosest:p,firstEat:O,lastEat:F,eaten:A.length}})}const Oe=8,Y=3.4,K=5.6,Pe=.55,bt=60;function Ht(s){const t=-Math.PI*.15+s*.95,e=118+34*Math.sin(s*.7);return{x:Math.cos(t)*e,y:Math.sin(t)*e*.62}}function Fe({entryFee:s=10}={}){const t=ut(s),e=Oe,o=q({x:0,y:0,angle:-Math.PI*.15,duration:e,preRoll:6,steer:a=>{const m=Ht(Math.max(0,a));return{angle:Math.atan2(m.y,m.x),boost:a>=Y&&a<K}}});return ht({id:"controls",duration:e,holdAfter:.4,economics:t,snakes:[{id:z,name:"You",skin:"default",color:"#4caf50",track:o,from:0,until:1/0,foodAt:a=>{if(a<Y)return bt;const m=Math.floor((Math.min(a,K)-Y)/Pe);return Math.max(4,bt-m)},boostAt:a=>a>=Y&&a<K}],foods:[],events:[],stepAt:a=>a<Y?0:a<K?1:2,calloutsAt:a=>{const m=Ht(a),b=a>=Y&&a<K;return[{id:"you",kind:"tag",key:"tutorial.callout_you",anchor:"you",dx:58,dy:-30,side:"left",visible:!0},{id:"pointer",kind:"pointer",screen:m,pressed:b,visible:!0},{id:"boost",kind:"label",key:"tutorial.callout_boost",anchor:"you",dy:44,tone:"cyan",visible:b},{id:"burn",kind:"label",key:"tutorial.callout_burn",anchor:"you",dy:-124,tone:"warn",visible:a>=Y+.7&&a<K+1.2}]},hudAt:()=>null,meta:{headRadius:W(bt)}})}const Re=12,qt=30,_t=15,xt=3,vt=2,Bt=470;function Ne({entryFee:s=10}={}){const t=ut(s),e=Re,o=q({x:0,y:0,angle:0,duration:e,preRoll:10,steer:i=>i<6.4?{angle:.32*Math.sin(i*1.35)}:{angle:0}}),h=W(Bt),f=dt(23),l=[];for(let i=0;i<30;i++){const d=.25+i*.082,r=o.at(d+.35),n=(f()-.5)*2*12;l.push({id:`trail-${i}`,x:r.x-Math.sin(r.angle)*n,y:r.y+Math.cos(r.angle)*n,value:i%5===3?1:2,from:-1,until:1/0,eaterId:null,flyFrom:null})}Zt(o,h,l,z,{to:5});const c=i=>Bt+Qt(l,z,i);let a=1/0;for(let i=0;i<=6;i+=1/120)if(c(i)>=Ce){a=i;break}Number.isFinite(a)||(a=2.6);const m=a+.35,b=a+1.15,_=b+xt,y=_+vt,w=y+1,$={minX:-6e3,maxX:o.at(y).x,minY:-6e3,maxY:6e3},M=i=>i>=_?Ae:i>=b?ke:0,p=q({x:900,y:430,angle:Math.PI,duration:e,preRoll:6,steer:i=>({angle:Math.PI+.25*Math.sin(i*.9)})}),g=[{id:z,name:"You",skin:"golden",color:"#ffd700",track:o,from:0,until:y,foodAt:c,flagsAt:M},{id:"cruiser",name:"Adder_9",skin:"galaxy_stars",color:"#6633CC",track:p,from:0,until:1/0,foodAt:()=>140}],T=[{t:b,type:"boundary",phase:"countdown"},{t:_,type:"boundary",phase:"exit"},{t:y,type:"cashout",id:z}],A=i=>i<a?0:i<b+.25?1:i<_?2:i<y?3:4,O=c(y);return ht({id:"cashout",duration:e,holdAfter:1.6,economics:t,bounds:$,snakes:g,foods:l,events:T,stepAt:A,calloutsAt:i=>{const d=[];return d.push({id:"you",kind:"tag",key:"tutorial.callout_you",anchor:"you",dx:58,dy:-30,side:"left",visible:i<y}),d.push({id:"eat",kind:"label",key:"tutorial.callout_eat",anchor:"you",dy:44,tone:"green",visible:i>.3&&i<a-.1}),d.push({id:"unlock",kind:"label",key:"tutorial.callout_unlocked",anchor:"you",dy:44,tone:"gold",visible:i>=a&&i<b+.4}),d.push({id:"edge",kind:"edge",key:"tutorial.callout_cross",visible:i>=_+.3&&i<y,tone:"green"}),d},hudAt:i=>{const d=c(i),r=t.pelletPrice,n={bar:{visible:i<y,current:d*r,threshold:r*10*50},toast:null,button:"hidden",countdown:null,exit:null,success:null,fastForward:!1};return i<2&&(n.toast={key:"hud.cashout_threshold_toast",amount:r*10*50}),i>=b&&i<b+2.4&&(n.toast={key:"hud.survive_countdown_toast"}),i>=_&&i<_+2.4&&(n.toast={key:"hud.cross_boundary_toast"}),i>=m&&i<b&&(n.button="ready"),i>=b&&i<b+.7&&(n.button="pressed"),i>=b&&i<_&&(n.countdown=Math.max(1,Math.ceil(qt*(1-(i-b)/xt))),n.fastForward=qt/xt),i>=_&&i<y&&(n.exit=Math.max(1,Math.ceil(_t-(i-_)*(_t/(vt*1.5)))),n.fastForward=_t/(vt*1.5)),i>=w&&(n.success={amount:O*r}),n},cameraAt:i=>{const d=o.at(Math.min(i,y));return{x:d.x,y:d.y}},meta:{tThr:a,tButton:m,tPress:b,tExit:_,tCross:y,tSuccess:w,bankedFood:O,eaten:l.filter(i=>i.until!==1/0).length}})}const De=14.5,Q=3e3,rt=960,U=700,tt=960,Ct=10,at=1.5,V=4.5,te=8.5,et=8.5,st=11,Et=13,lt=(rt-U)/(te-V),ct=(tt-U)/(Et-st),St=-Math.PI/2,G=Math.PI/2;function wt(s){const t={type:"border_state",half_size:rt,target_half_size:rt,map_half_size:Q,speed:0,pending:"",pending_target_half_size:0,starts_in_sec:0,tick:0},e=(o,h)=>Ct*Math.max(0,1-(s-o)/(h-o));if(s<at)return t;if(s<V)return{...t,pending:"shrink",pending_target_half_size:U,starts_in_sec:e(at,V)};if(s<te){const o=rt-lt*(s-V);return{...t,half_size:o,target_half_size:U,speed:lt}}if(s<st)return{...t,half_size:U,target_half_size:U,pending:"grow",pending_target_half_size:tt,starts_in_sec:e(et,st)};if(s<Et){const o=U+ct*(s-st);return{...t,half_size:o,target_half_size:tt,speed:ct}}return{...t,half_size:tt,target_half_size:tt}}function ze({entryFee:s=10}={}){const t=ut(s),e=De,o=q({x:880,y:500,angle:St,duration:e,preRoll:4,steer:At([{until:3.4,angle:St},{until:5.8,angle:St-.75},{until:7,angle:Math.PI-.2},{until:11,angle:G}],{angle:G-1})}),h=q({x:420,y:-1117,angle:G,duration:e,preRoll:3,steer:()=>({angle:G})}),f=q({x:330,y:-1377,angle:G,duration:e,preRoll:3,steer:()=>({angle:G+.08})}),l=dt(41),c=[];for(let y=0;y<12;y++)c.push({id:`strip-${y}`,x:730+y%4*30+(l()-.5)*12,y:70+Math.floor(y/4)*85+(l()-.5)*30,value:y%3===0?2:1,from:-1,until:1/0,eaterId:null,flyFrom:null});const a=[{id:z,name:"You",skin:"golden",color:"#ffd700",track:o,from:0,until:1/0,foodAt:()=>160},{id:"joiner-a",name:"Mamba_4",skin:"galaxy_stars",color:"#6633CC",track:h,from:et,until:1/0,foodAt:()=>60},{id:"joiner-b",name:"Krait_12",skin:"default",color:"#22ff88",track:f,from:et+.4,until:1/0,foodAt:()=>40}],m=y=>y<at?0:y<V?1:y<et?2:y<Et+.2?3:4,b=y=>{const w=wt(y),x={bar:null,toast:null,button:"hidden",countdown:null,exit:null,success:null,fastForward:!1};return w.pending==="shrink"?(x.toast={key:"hud.border_banner_shrinking",params:{seconds:Math.ceil(w.starts_in_sec)}},x.fastForward=Ct/(V-at)):w.pending==="grow"?(x.toast={key:"hud.border_banner_expands_in",params:{seconds:Math.ceil(w.starts_in_sec)}},x.fastForward=Ct/(st-et)):w.target_half_size<w.half_size?x.fastForward=lt/15:w.target_half_size>w.half_size&&(x.toast={key:"hud.border_banner_expanding"},x.fastForward=ct/40),x},_=y=>{const w=wt(y),x=o.at(y),$=Math.max(Math.abs(x.x),Math.abs(x.y))>U-20;return[{id:"you",kind:"tag",key:"tutorial.callout_you",anchor:z,dx:58,dy:-30,side:"left",visible:!0},{id:"move",kind:"warn",key:"hud.border_move_inside",anchor:z,dy:46,visible:(w.pending==="shrink"||w.target_half_size<w.half_size)&&$}]};return ht({id:"wall",duration:e,holdAfter:1.5,economics:t,bounds:{minX:-Q,maxX:Q,minY:-Q,maxY:Q},snakes:a,foods:c,events:[],stepAt:m,calloutsAt:_,hudAt:b,borderAt:wt,meta:{SHRINK_SPEED:lt,GROW_SPEED:ct}})}const He=Object.freeze(["combat","controls","cashout","wall"]),qe={combat:Ie,controls:Fe,cashout:Ne,wall:ze};function Be(s,t={}){const e=typeof s=="number"?He[s]:s,o=qe[e];if(!o)throw new Error(`unknown scene ${s}`);return o(t)}const Ut=35,Yt={fx:.24,fy:.66},Xt={fx:.78,fy:.68},jt=s=>`/rules/poster-${s}.webp`,ee="http://www.w3.org/2000/svg",Ue=`<svg xmlns="${ee}" viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <path d="M5 3 L19 12 L12.5 13.5 L16 20.5 L13.5 21.5 L10 14.5 L5 19 Z" fill="#ffffff" stroke="#0a0a0e" stroke-width="1.6" stroke-linejoin="round"/></svg>`,Kt=`<svg xmlns="${ee}" viewBox="0 0 48 64" width="44" height="58" aria-hidden="true">
  <path d="M18 30 V12 a5 5 0 0 1 10 0 v16 l3-2 a4.5 4.5 0 0 1 7 3 l4 2 a4.5 4.5 0 0 1 5 4 v6 c0 9-6 16-15 16 h-6 c-6 0-10-3-13-8 l-7-11 a4 4 0 0 1 6-5 z" fill="#ffffff" stroke="#0a0a0e" stroke-width="2" stroke-linejoin="round"/></svg>`;function ne(){return typeof window>"u"?!1:"ontouchstart"in window||(navigator.maxTouchPoints||0)>0}function Ye(s){const t={sceneId:s.sceneId,entryFee:s.entryFee??10,device:s.device??(ne()?"mobile":"desktop"),scene:null,failed:!1},e=document.createElement("div");e.className=`rules-scene rules-scene-${t.sceneId}`,e.dir="ltr",e.innerHTML=`
    <div class="rules-scene-canvas"></div>
    <img class="rules-scene-poster" alt="" decoding="async" src="${jt(t.sceneId)}">
    <div class="rules-scene-hud"></div>
    <div class="rules-scene-callouts"></div>
    <div class="rules-scene-loading" aria-hidden="true"><span></span></div>
  `;const o=e.querySelector(".rules-scene-canvas"),h=e.querySelector(".rules-scene-poster"),f=e.querySelector(".rules-scene-hud"),l=e.querySelector(".rules-scene-callouts"),c=e.querySelector(".rules-scene-loading");h.addEventListener("error",()=>{h.style.display="none"});const a=Ft(f,{isMobile:t.device==="mobile"}),m=new Map,b=new ye({host:o,onFrame:({scene:p,t:g,stage:T})=>{a.apply(p.hudAt?p.hudAt(g):null),x(p,g,T),s.onFrame&&s.onFrame({scene:p,t:g,step:p.stepAt?p.stepAt(g):0})}});function _(){return{w:e.clientWidth||640,h:e.clientHeight||400}}function y(p){let g=m.get(p.id);return g||(g=document.createElement("div"),g.className=`rules-callout rules-callout-${p.kind}${p.tone?" tone-"+p.tone:""}${p.side?" side-"+p.side:""}`,g.setAttribute("aria-hidden","true"),p.kind==="pointer"?g.innerHTML=`
        <div class="rules-cursor">${Ue}<span class="rules-cursor-press"></span><span class="rules-cursor-tag">${S("tutorial.callout_hold")}</span></div>
        <div class="rules-joy">
          <div class="rules-joy-ring"></div>
          <div class="rules-joy-knob"></div>
          <div class="rules-joy-finger">${Kt}</div>
          <span class="rules-joy-tag">${S("tutorial.callout_steer")}</span>
        </div>
        <div class="rules-joy-boost"><span class="rules-joy-boost-ring"></span>${Kt}<span class="rules-joy-boost-tag">${S("tutorial.callout_second_finger")}</span></div>`:p.kind==="edge"?g.innerHTML=`<span class="rules-edge-tag">${p.key?S(p.key):""}</span><span class="rules-edge-chev">›››</span>`:p.kind==="ring"?g.innerHTML="":p.kind==="burst"?g.innerHTML=`<span class="rules-burst-bolt">⚡</span><span class="rules-burst-text">${p.key?S(p.key):""}</span>`:p.kind==="warn"?g.innerHTML=`<span class="rules-warn-icon">⚠</span><span>${p.key?S(p.key):""}</span>`:g.textContent=p.key?S(p.key):p.text||"",l.appendChild(g),m.set(p.id,g),g)}function w(p,g,T,A){const{w:O,h:F}=_();if(g.screen)return{x:O/2+g.screen.x,y:F/2+g.screen.y};if(g.world){const L=A.worldToScreen(g.world.x,g.world.y);return{x:L.x+(g.dx||0),y:L.y+(g.dy||0)}}if(g.anchor){const L=p.headOf(g.anchor,T);if(!L)return null;const i=A.worldToScreen(L.x,L.y);return{x:i.x+(g.dx||0),y:i.y+(g.dy||0)}}return null}function x(p,g,T){const A=p.calloutsAt?p.calloutsAt(g):[],O=new Set,{w:F,h:L}=_();for(const i of A){O.add(i.id);const d=y(i);if(!i.visible){d.classList.remove("is-on");continue}if(d.classList.add("is-on"),i.kind==="pointer"){$(d,i,F,L);continue}if(i.kind==="edge"){d.style.right="10px",d.style.top=`${L/2}px`;continue}const r=w(p,i,g,T);if(!r){d.classList.remove("is-on");continue}const n=d.offsetWidth/2,u=d.offsetHeight/2,v=Math.max(8+n,Math.min(F-8-n,r.x)),k=Math.max(8+u,Math.min(L-8-u,r.y));d.style.transform=`translate(${v}px, ${k}px) translate(-50%, -50%)`,i.kind==="burst"&&d.style.setProperty("--age",String(Math.max(0,i.age||0)))}for(const[i,d]of m)O.has(i)||d.classList.remove("is-on")}function $(p,g,T,A){const O=t.device==="mobile";p.classList.toggle("is-mobile",O),p.classList.toggle("is-pressed",!!g.pressed);const F=p.querySelector(".rules-cursor"),L=p.querySelector(".rules-joy"),i=p.querySelector(".rules-joy-boost");if(!O){const k=T/2+g.screen.x,C=A/2+g.screen.y;F.style.transform=`translate(${k}px, ${C}px)`;return}const d=T*Yt.fx,r=A*Yt.fy,n=Math.hypot(g.screen.x,g.screen.y)||1,u=g.screen.x/n*Ut,v=g.screen.y/n*Ut;L.style.transform=`translate(${d}px, ${r}px)`,L.querySelector(".rules-joy-knob").style.transform=`translate(${u}px, ${v}px) translate(-50%, -50%)`,L.querySelector(".rules-joy-finger").style.transform=`translate(${u}px, ${v}px) translate(-34%, -12%)`,i.style.transform=`translate(${T*Xt.fx}px, ${A*Xt.fy}px)`}const M={el:e,player:b,get scene(){return t.scene},get device(){return t.device},buildScene(){return t.scene=Be(t.sceneId,{entryFee:t.entryFee}),t.scene},async mount({autoplay:p=s.autoplay!==!1}={}){const{w:g,h:T}=_();c.classList.add("is-on");try{if(!await b.mount(g,T))return!1}catch(A){return A?.message,t.failed=!0,c.classList.remove("is-on"),e.classList.add("is-poster"),!1}return c.classList.remove("is-on"),h.style.opacity="0",t.scene||M.buildScene(),b.load(t.scene),p&&b.play(),!0},setScene(p){t.sceneId=p,e.className=`rules-scene rules-scene-${p}`,h.src=jt(p),l.innerHTML="",m.clear(),a.apply(null),M.buildScene(),b.stage&&(b.load(t.scene),b.play())},setDevice(p){if(p!=="mobile"&&p!=="desktop")return;t.device=p,a.destroy();const g=Ft(f,{isMobile:p==="mobile"});Object.assign(a,g),b.stage&&t.scene&&(b.stage.render(),b._emit())},replay(){b.replay()},play(){b.play()},pause(){b.pause()},seek(p){b.seek(p)},playUntil(p){b.playUntil(p)},resize(){const{w:p,h:g}=_();b.resize(p,g)},dispose(){b.dispose(),a.destroy(),m.clear(),l.innerHTML="",e.remove()}};return M}const Xe=["eat","cut","boost","cashout"],je=50,B=[{id:"combat",sceneId:"combat",titleKey:"tutorial.slide_combat_title",leadKey:"tutorial.lead_combat",steps:()=>["tutorial.combat_step_1_html","tutorial.combat_step_2_html","tutorial.combat_step_3_html"]},{id:"controls",sceneId:"controls",titleKey:"tutorial.slide_controls_title",leadKey:"tutorial.lead_controls",steps:s=>s==="mobile"?["tutorial.controls_steer_mobile_html","tutorial.controls_boost_mobile_html","tutorial.controls_cost_html"]:["tutorial.controls_steer_desktop_html","tutorial.controls_boost_desktop_html","tutorial.controls_cost_html"]},{id:"cashout",sceneId:"cashout",titleKey:"tutorial.slide_cashout_title",leadKey:"tutorial.slide_cashout_desc",steps:()=>["tutorial.cashout_step_1_html","tutorial.cashout_step_2_html","tutorial.cashout_step_3_html","tutorial.cashout_step_4_html","tutorial.cashout_step_5_html"]},{id:"rules",sceneId:null,titleKey:"tutorial.page_rules"},{id:"wall",sceneId:"wall",titleKey:"tutorial.page_wall",leadKey:"tutorial.lead_wall",steps:()=>["tutorial.wall_step_1_html","tutorial.wall_step_2_html","tutorial.wall_step_3_html","tutorial.wall_step_4_html","tutorial.wall_step_5_html"]},{id:"connection",sceneId:null,titleKey:"tutorial.page_connection",leadKey:"tutorial.lead_connection",rows:[["📶","cyan","tutorial.conn_hold_html"],["⚠️","red","tutorial.conn_unprotected_html"],["✅","green","tutorial.conn_back_html"],["💀","red","tutorial.conn_died_html"],["💰","gold","tutorial.conn_cashout_html"],["⌛","","tutorial.conn_timeout_html"],["💡","cyan","tutorial.conn_tip_html"]]}],Ke=["tutorial.slide_combat_title","tutorial.slide_controls_title","tutorial.slide_cashout_title","tutorial.page_rules","tutorial.tab_wall","tutorial.tab_connection"];function E(s,t,e){const o=document.createElement(s);return t&&(o.className=t),e!==void 0&&(o.innerHTML=e),o}function Ge(s={}){const t={page:Math.max(0,Math.min(B.length-1,s.initialPage??0)),device:s.device??(ne()?"mobile":"desktop"),entryFee:s.entryFee??10,open:!1,closing:!1,panel:null,stepEls:[],lastStep:-1,unsubLocale:null,resizeObs:null,touch:null},e=E("div","rules-overlay");e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.innerHTML=`
    <div class="rules-backdrop"></div>
    <div class="rules-card">
      <header class="rules-head">
        <div class="rules-title"></div>
        <nav class="rules-tabs"></nav>
        <button type="button" class="rules-close" aria-label=""></button>
      </header>
      <div class="rules-body"><section class="rules-page"></section></div>
      <footer class="rules-foot">
        <button type="button" class="rules-btn rules-btn-ghost rules-prev"></button>
        <div class="rules-dots"></div>
        <button type="button" class="rules-btn rules-btn-primary rules-next"></button>
      </footer>
    </div>`;const o=e.querySelector(".rules-card"),h=e.querySelector(".rules-title"),f=e.querySelector(".rules-tabs"),l=e.querySelector(".rules-close"),c=e.querySelector(".rules-body"),a=e.querySelector(".rules-page"),m=e.querySelector(".rules-prev"),b=e.querySelector(".rules-dots"),_=e.querySelector(".rules-next");e.setAttribute("aria-label",S("arenas.how_to_play"));function y(){h.textContent=S("arenas.how_to_play"),l.setAttribute("aria-label",S("common.close")),l.textContent="✕",f.innerHTML="",Ke.forEach((r,n)=>{const u=E("button","rules-tab"+(n===t.page?" active":""),S(r));u.type="button",u.addEventListener("click",()=>i.goTo(n)),f.appendChild(u)}),b.innerHTML="",B.forEach((r,n)=>{const u=E("button","rules-dot"+(n===t.page?" active":""));u.type="button",u.setAttribute("aria-label",S("tutorial.go_to_slide",{number:n+1})),u.addEventListener("click",()=>i.goTo(n)),b.appendChild(u)}),m.textContent=S("common.back"),m.disabled=t.page===0;const d=t.page===B.length-1;_.textContent=d?S("tutorial.got_it"):S("tutorial.next")}function w(d){return t.panel?{panel:t.panel,fresh:!1}:(t.panel=Ye({sceneId:d,entryFee:t.entryFee,device:t.device,autoplay:s.autoplay!==!1,onFrame:({step:r})=>x(r)}),{panel:t.panel,fresh:!0})}function x(d){d!==t.lastStep&&(t.lastStep=d,t.stepEls.forEach((r,n)=>{r.classList.toggle("active",n===d),r.classList.toggle("done",n<d)}))}function $(d){const{panel:r,fresh:n}=w(d.sceneId);a.className="rules-page",a.innerHTML="";const u=E("div","rules-scene-col");u.appendChild(r.el);const v=E("div","rules-scene-bar"),k=E("button","rules-chip","↻ "+S("tutorial.replay_scene"));if(k.type="button",k.addEventListener("click",()=>r.replay()),v.appendChild(k),d.id==="controls"){const N=E("div","rules-seg");for(const D of["desktop","mobile"]){const H=E("button",D===t.device?"active":"",S(D==="desktop"?"tutorial.device_desktop":"tutorial.device_mobile"));H.type="button",H.addEventListener("click",()=>{t.device!==D&&(t.device=D,r.setDevice(D),T())}),N.appendChild(H)}v.appendChild(N)}u.appendChild(v);const C=E("div","rules-text");C.appendChild(E("div","rules-kicker",`${t.page+1} / ${B.length}`)),C.appendChild(E("h2","rules-h2",S(d.titleKey))),C.appendChild(E("p","rules-lead",S(d.leadKey)));const P=E("ol","rules-steps");t.stepEls=[],d.steps(t.device).forEach((N,D)=>{const H=E("li","rules-step");H.appendChild(E("span","rules-step-num",String(D+1))),H.appendChild(E("span","rules-step-text",S(N))),P.appendChild(H),t.stepEls.push(H)}),C.appendChild(P),a.appendChild(u),a.appendChild(C),t.lastStep=-1,n?(r.buildScene(),r.mount().then(N=>{N&&A(r)})):r.scene?.id!==d.sceneId?r.setScene(d.sceneId):r.play(),x(0)}function M(d){t.panel&&(t.panel.pause(),t.panel.el.remove()),a.className="rules-page is-rules",a.innerHTML="";const r=E("div","rules-text");r.appendChild(E("div","rules-kicker",`${t.page+1} / ${B.length}`)),r.appendChild(E("h2","rules-h2",S(d.titleKey)));const n=E("div","rules-stats"),u=[["tutorial.stat_entry","tutorial.stat_entry_value",""],["tutorial.stat_cashout","tutorial.stat_cashout_value","gold"],["tutorial.stat_countdown","tutorial.stat_countdown_value","yellow"],["tutorial.stat_exit","tutorial.stat_exit_value","green"]];for(const[k,C,P]of u){const N=E("div","rules-stat");N.appendChild(E("div","rules-stat-k",S(k))),N.appendChild(E("div","rules-stat-v"+(P?" "+P:""),S(C))),n.appendChild(N)}r.appendChild(n);const v=E("div","rules-strip");for(const k of Xe){const C=document.createElement("img");C.src=`/rules/card-${k}.webp`,C.alt="",C.decoding="async",C.addEventListener("error",()=>C.remove()),v.appendChild(C)}r.appendChild(v),r.appendChild(p([["🎟️","","tutorial.rules_entry_html"],["🔴","gold","tutorial.rules_pellets_html"],["💰","gold","tutorial.rules_cashout_html"],["💀","red","tutorial.rules_die_html"],["⚡","cyan","tutorial.rules_boost_html"]])),a.appendChild(r)}function p(d){const r=E("ul","rules-list");for(const[n,u,v]of d){const k=document.createElement("li");k.appendChild(E("span","rules-ico"+(u?" "+u:""),n)),k.appendChild(E("span","",S(v))),r.appendChild(k)}return r}function g(d){t.panel&&(t.panel.pause(),t.panel.el.remove()),a.className="rules-page is-rules",a.innerHTML="";const r=E("div","rules-text");r.appendChild(E("div","rules-kicker",`${t.page+1} / ${B.length}`)),r.appendChild(E("h2","rules-h2",S(d.titleKey))),r.appendChild(E("p","rules-lead",S(d.leadKey))),r.appendChild(p(d.rows)),a.appendChild(r)}function T(){const d=B[t.page];y(),d.sceneId?$(d):d.rows?g(d):M(d),c.scrollTop=0}function A(d){t.resizeObs||typeof ResizeObserver>"u"||(t.resizeObs=new ResizeObserver(()=>d.resize()),t.resizeObs.observe(d.el))}function O(d){if(!t.open)return;if(d.key==="Escape"){i.close(!1);return}const r=$t(Lt()),n=r?"ArrowLeft":"ArrowRight",u=r?"ArrowRight":"ArrowLeft";d.key===n?i.next():d.key===u&&i.prev()}function F(d){const r=d.touches[0];t.touch={x:r.clientX,y:r.clientY}}function L(d){if(!t.touch)return;const r=d.changedTouches?.[0],n=(r?.clientX??t.touch.x)-t.touch.x,u=(r?.clientY??t.touch.y)-t.touch.y;t.touch=null,Math.abs(n)>Math.abs(u)&&Math.abs(n)>je&&(($t(Lt())?n>0:n<0)?i.next():i.prev())}const i={el:e,get page(){return t.page},get isOpen(){return t.open},get panel(){return t.panel},open(){t.open||(t.open=!0,document.body.appendChild(e),document.body.style.overflow="hidden",T(),document.addEventListener("keydown",O),o.addEventListener("touchstart",F,{passive:!0}),o.addEventListener("touchend",L,{passive:!0}),l.addEventListener("click",()=>i.close(!1)),m.addEventListener("click",()=>i.prev()),_.addEventListener("click",()=>i.next()),e.querySelector(".rules-backdrop").addEventListener("click",()=>i.close(!1)),t.unsubLocale=ce(()=>{t.open&&T()}))},goTo(d){!t.open||d===t.page||d<0||d>=B.length||(t.page=d,T())},next(){if(t.page>=B.length-1){i.close(!0);return}i.goTo(t.page+1)},prev(){i.goTo(t.page-1)},close(d=!1){if(!t.open||t.closing)return;t.closing=!0,document.removeEventListener("keydown",O),t.unsubLocale?.(),t.resizeObs?.disconnect(),e.classList.add("closing"),setTimeout(()=>{t.panel?.dispose(),t.panel=null,e.remove(),document.body.style.overflow="",t.open=!1,t.closing=!1,s.onClose?.(d)},240)}};return i}const se=new Set;let j=null;function oe(){const s=nt.getAuthState?.()||{};return{serverCompleted:s.practiceTutorialCompleted===!0,userId:s.userId||s.username||null,entryFee:parseFloat(s.entryFee)||0}}function Ve(){const s=oe();return he({serverCompleted:s.serverCompleted,userId:s.userId,local:Wt(),session:Jt(),memory:se})}function We(){return!!j}function Je(s,t={}){if(j)return j;const e=oe(),o=Number(t.entryFee)>0?Number(t.entryFee):e.entryFee>0?e.entryFee:10;return Mt(!0),j=Ge({entryFee:o,initialPage:t.page??0,onClose:h=>{j=null,Mt(!1),pe({userId:e.userId,local:Wt(),session:Jt(),memory:se});try{nt.state.practiceTutorialCompleted=!0}catch{}typeof s=="function"&&s(h)}}),j.open(),j}const X=[{video:"https://s3-viperroyale-crm.s3.eu-north-1.amazonaws.com/FrontAssets/combat+basics.webm",poster:"/tutorials/practice-slide-1-poster.jpg",title:()=>S("tutorial.slide_combat_title"),description:()=>S("tutorial.slide_combat_desc")},{video:"https://s3-viperroyale-crm.s3.eu-north-1.amazonaws.com/FrontAssets/controls.webm",poster:"/tutorials/practice-slide-2-poster.jpg",title:()=>S("tutorial.slide_controls_title"),description:()=>S("tutorial.slide_controls_desc")},{video:"https://s3-viperroyale-crm.s3.eu-north-1.amazonaws.com/FrontAssets/Cashout.webm",poster:"/tutorials/practice-slide-3-poster.jpg",title:()=>S("tutorial.slide_cashout_title"),description:()=>S("tutorial.slide_cashout_desc")}];class Ze{constructor(){this.container=null,this.currentSlide=0,this.totalSlides=X.length,this.onComplete=null,this.handleEscape=null,this.touchStartX=0,this.touchStartY=0,this.touchCurrentX=0,this.isDragging=!1,this.swipeThreshold=50}shouldShow(){if(pt())return Ve();const t=nt.getAuthState();return new URLSearchParams(window.location.search).get("forceTutorial")==="1"?t.token&&t.authProvider!=="anonymous":!(t.authProvider==="anonymous"||t.practiceTutorialCompleted||!t.token)}show(t){if(pt()){Je(t);return}this.container||(this.onComplete=t,this.currentSlide=0,this.render(),this.attachListeners(),this.preloadVideos(),document.body.style.overflow="hidden")}close(t=!1){this.container&&(this.handleEscape&&(document.removeEventListener("keydown",this.handleEscape),this.handleEscape=null),this.markComplete(),this.container.classList.add("closing"),setTimeout(()=>{this.container&&(this.container.querySelectorAll("video").forEach(e=>{e.pause(),e.src=""}),this.container.remove(),this.container=null),document.body.style.overflow="",this.onComplete&&this.onComplete(t)},300))}markComplete(){nt.state.practiceTutorialCompleted=!0;const t=nt.getAuthState(),e=t.authProvider==="telegram"?"/tg/tutorial/complete":"/standalone/tutorial/complete";fetch(`${le.lobbyApiUrl}${e}`,{method:"POST",headers:{Authorization:`Bearer ${t.token}`,"Content-Type":"application/json"},body:JSON.stringify({tutorial_type:"practice"})}).catch(o=>{o.message})}render(){const t=document.querySelector(".practice-tutorial");t&&t.remove(),this.container=document.createElement("div"),this.container.className="practice-tutorial",this.container.innerHTML=this.getHTML(),document.body.appendChild(this.container),setTimeout(()=>{this.playCurrentVideo()},100)}getHTML(){const t=X[this.currentSlide],e=this.currentSlide===this.totalSlides-1,o=this.currentSlide===0;return`
      <div class="practice-tutorial-overlay"></div>
      <div class="practice-tutorial-card">
        <button class="practice-tutorial-skip" aria-label="${S("tutorial.skip_tutorial")}">${S("tutorial.skip")}</button>

        <div class="practice-tutorial-video-container">
          <div class="practice-tutorial-slider-track" style="transform: translateX(-${this.currentSlide*100}%)">
            ${X.map((h,f)=>`
              <div class="practice-tutorial-slide" data-slide="${f}">
                <video
                  class="practice-tutorial-video"
                  poster="${h.poster}"
                  muted
                  playsinline
                  preload="metadata"
                >
                  <source src="${h.video}" type="video/webm">
                </video>
                <div class="practice-tutorial-video-fallback">
                  <img src="${h.poster}" alt="${h.title()}" />
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="practice-tutorial-content">
          <h2 class="practice-tutorial-title">${Tt(t.title())}</h2>
          <p class="practice-tutorial-description">${Tt(t.description())}</p>
        </div>

        <div class="practice-tutorial-dots">
          ${X.map((h,f)=>`
            <button
              class="practice-tutorial-dot ${f===this.currentSlide?"active":""}"
              data-slide="${f}"
              aria-label="${S("tutorial.go_to_slide",{number:f+1})}"
            ></button>
          `).join("")}
        </div>

        <div class="practice-tutorial-actions">
          <button
            class="practice-tutorial-btn practice-tutorial-btn-back ${o?"hidden":""}"
          >
            ${S("common.back")}
          </button>
          <button class="practice-tutorial-btn practice-tutorial-btn-next">
            ${e?S("tutorial.get_started"):S("tutorial.next")}
          </button>
        </div>
      </div>
    `}updateSlideUI(){if(!this.container)return;const t=X[this.currentSlide],e=this.currentSlide===this.totalSlides-1,o=this.currentSlide===0,h=this.container.querySelector(".practice-tutorial-slider-track");h&&(h.style.transform=`translateX(-${this.currentSlide*100}%)`),this.container.querySelectorAll(".practice-tutorial-dot").forEach((m,b)=>{m.classList.toggle("active",b===this.currentSlide)});const f=this.container.querySelector(".practice-tutorial-title"),l=this.container.querySelector(".practice-tutorial-description");f&&(f.textContent=t.title()),l&&(l.textContent=t.description());const c=this.container.querySelector(".practice-tutorial-btn-back");c&&c.classList.toggle("hidden",o);const a=this.container.querySelector(".practice-tutorial-btn-next");a&&(a.textContent=e?S("tutorial.get_started"):S("tutorial.next")),this.playCurrentVideo(),this.preloadVideo(this.currentSlide+1)}playCurrentVideo(){if(!this.container)return;this.container.querySelectorAll(".practice-tutorial-video").forEach(o=>{o.pause(),o.removeEventListener("ended",this._handleVideoEnded)});const t=this.container.querySelector(`.practice-tutorial-slide[data-slide="${this.currentSlide}"]`),e=t?.querySelector(".practice-tutorial-video");e&&(e.currentTime=0,this.currentSlide<this.totalSlides-1&&(this._handleVideoEnded=()=>this.nextSlide(),e.addEventListener("ended",this._handleVideoEnded)),e.play().catch(()=>{t.classList.add("video-error")}))}preloadVideos(){this.preloadVideo(1)}preloadVideo(t){if(t<0||t>=X.length)return;const e=X[t];if(document.querySelector(`link[href="${e.video}"]`))return;const o=document.createElement("link");o.rel="preload",o.as="video",o.href=e.video,o.crossOrigin="anonymous",document.head.appendChild(o)}nextSlide(){this.currentSlide<this.totalSlides-1?(this.currentSlide++,this.updateSlideUI()):this.close(!0)}prevSlide(){this.currentSlide>0&&(this.currentSlide--,this.updateSlideUI())}goToSlide(t){t>=0&&t<this.totalSlides&&t!==this.currentSlide&&(this.currentSlide=t,this.updateSlideUI())}attachListeners(){if(!this.container)return;this.container.querySelector(".practice-tutorial-skip")?.addEventListener("click",()=>this.close(!1)),this.container.querySelector(".practice-tutorial-btn-back")?.addEventListener("click",()=>this.prevSlide()),this.container.querySelector(".practice-tutorial-btn-next")?.addEventListener("click",()=>this.nextSlide()),this.container.querySelectorAll(".practice-tutorial-dot").forEach(f=>{f.addEventListener("click",l=>{const c=parseInt(l.target.dataset.slide);this.goToSlide(c)})});const h=this.container.querySelector(".practice-tutorial-video-container");h?.addEventListener("touchstart",f=>this.handleTouchStart(f),{passive:!0}),h?.addEventListener("touchmove",f=>this.handleTouchMove(f),{passive:!0}),h?.addEventListener("touchend",f=>this.handleTouchEnd(f),{passive:!0}),h?.addEventListener("touchcancel",f=>this.handleTouchEnd(f),{passive:!0}),this.handleEscape=f=>{f.key==="Escape"&&this.close(!1)},document.addEventListener("keydown",this.handleEscape)}handleTouchStart(t){this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchCurrentX=this.touchStartX,this.isDragging=!0;const e=this.container?.querySelector(".practice-tutorial-slider-track");e&&(e.style.transition="none")}handleTouchMove(t){if(!this.isDragging)return;this.touchCurrentX=t.touches[0].clientX;const e=this.touchStartX-this.touchCurrentX,o=this.touchStartY-t.touches[0].clientY;if(Math.abs(e)>Math.abs(o)){const h=this.container?.querySelector(".practice-tutorial-slider-track");if(h){const f=this.container.querySelector(".practice-tutorial-video-container")?.offsetWidth||300,l=e/f*100;let c=l;(this.currentSlide===0&&l<0||this.currentSlide===this.totalSlides-1&&l>0)&&(c=l*.3);const a=-this.currentSlide*100;h.style.transform=`translateX(${a-c}%)`}}}handleTouchEnd(t){if(!this.isDragging)return;this.isDragging=!1;const e=this.container?.querySelector(".practice-tutorial-slider-track");e&&(e.style.transition="transform 0.3s ease-out");const o=t.changedTouches?.[0]?.clientX??this.touchCurrentX,h=t.changedTouches?.[0]?.clientY??this.touchStartY,f=this.touchStartX-o,l=this.touchStartY-h;if(Math.abs(f)>Math.abs(l)&&Math.abs(f)>this.swipeThreshold){if(f>0&&this.currentSlide<this.totalSlides-1){this.nextSlide();return}else if(f<0&&this.currentSlide>0){this.prevSlide();return}}this.updateSlideUI()}isOpen(){return pt()?We():this.container!==null}}const un=new Ze;export{Ze as PracticeTutorial,un as practiceTutorial};
