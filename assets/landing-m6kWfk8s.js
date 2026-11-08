const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/practice-tutorial-CcgFOYuy.js","assets/auth-manager-Cmpvns0S.js","assets/env-C7vzROsb.js","assets/env-BJel9_CM.js","assets/index-BVfXPvtU.js","assets/supabase-client-BHMtNnbv.js","assets/index-DX65wbiK.js","assets/kyc-service-C_utPXUd.js","assets/tournaments-api-l_A1Z-uY.js","assets/utils-DJ8BS0_7.js","assets/tournaments-api-d0L9Z6JE.css","assets/snake-physics-QCI22-RQ.js","assets/practice-tutorial-CGPrM-uh.css","assets/fastoo-deposit-modal-Bbjf4BhI.js","assets/fastoo-deposit-modal-a70WxF3k.css"])))=>i.map(i=>d[i]);
import{a as A,v as Ee,d as O,f as H,c as G,b as h,g as D,l as ie,w as ta,k as Le,m as Zt,N as Et,x as ws,y as sa,z as na,A as aa,B as ia}from"./auth-manager-Cmpvns0S.js";import{K as Xe,y as C,i as ee,M as Xt,L as ra,N as oa,O as la,e as f,m as k,A as L,g as z,q as ue,P as Qt,Q as Ae,R as Z,S as we,U as ca,V as da,X as ua,Y as ha,Z as B,_ as pa,$ as ma,a0 as fa,a1 as lt,a2 as ga,a3 as ct,a4 as va,a5 as ya,a6 as at,a7 as dn,a8 as K,a9 as es,aa as un,o as T,ab as Lt,G as dt,ac as ba,ad as _a,ae as hn,af as wa,ag as ts,ah as pn,ai as ka,W as Sa}from"./tournaments-api-l_A1Z-uY.js";import{k as ss,d as mn,m as Ca,a as re,g as oe,n as fn,o as Ta,p as gn}from"./kyc-service-C_utPXUd.js";import{c as y}from"./env-BJel9_CM.js";import{t as a,o as q,a as v,g as he,d as ns,S as $a,s as Ea,e as La}from"./index-BVfXPvtU.js";import{l as I,k as Aa,m as vn}from"./supabase-client-BHMtNnbv.js";import{a as Ma,s as Ia}from"./casino-gate-hyIVpKVx.js";import{_ as ke}from"./env-C7vzROsb.js";import{getReferralCode as xa,getMyReferrals as Ra,getPhaseName as Pa}from"./referral-api-DKI1ANuy.js";import{canPromptInstall as Ba,promptInstall as Na}from"./pwa-install-service-Dfgg2S2d.js";import"./index-DX65wbiK.js";import"./utils-DJ8BS0_7.js";const Fa="/assets/Viper-Royale-background-Dsdv4D9o.webp";function yn(){return y.isTelegram?"/tg/banners":"/standalone/banners"}async function Ha(i="home"){try{const e=`${yn()}/active?placement=${encodeURIComponent(i)}`,t=await ss(e);return t.ok?(await t.json()).banners||[]:(t.status,[])}catch(e){return console.error("[BannerService] Error fetching banners:",e),[]}}async function At(i,e){try{const t=`${yn()}/${i}/events`;await mn(t,{action:e})}catch(t){console.error("[BannerService] Error recording event:",t)}}const Da={home:"/",tournament:"/tournaments",tournaments:"/tournaments",shop:"/wallet",tasks:"/tasks",friends:"/friends",lobby:"/arenas",profile:"/",wallet:"/wallet",replays:"/replays",arenas:"/arenas"},Oa={FEATURED:"ribbon-featured",DAILY:"ribbon-daily","TIME BASED":"ribbon-urgent",EXCLUSIVE:"ribbon-exclusive","FOR YOU":"ribbon-personal"};let ge=null,Mt=[],ut=0;const qa=5*60*1e3,ks=new Set;async function Ua(i=!1){if(Ca()!=="supabase"||!i&&ut&&Date.now()-ut<qa)return;_n();const e=document.querySelector(".tournaments-preview"),t=document.getElementById("tournament-cards");if(!e||!t)return;const s=await Ha("home");if(ut=Date.now(),!s.length){e.style.display="none";return}e.style.display="",t.innerHTML="",s.forEach(r=>{const o=Va(r);t.appendChild(o)});const n=document.querySelector(".tournament-cards-scroll");ge=new IntersectionObserver(r=>{r.forEach(o=>{if(o.isIntersecting){const l=o.target.dataset.bannerId;l&&!ks.has(l)&&(ks.add(l),At(l,"seen")),ge.unobserve(o.target)}})},{root:n,threshold:.5}),t.querySelectorAll(".tournament-card[data-banner-id]").forEach(r=>{ge.observe(r)})}function Va(i){const e=document.createElement("div");if(e.className="tournament-card",e.dataset.bannerId=i.id,i.background_color&&(e.style.backgroundColor=i.background_color),i.aspect_ratio&&(e.style.aspectRatio=i.aspect_ratio.replace(":"," / ")),i.video_url){e.classList.add("card-video");const s=document.createElement("video");s.className="tournament-card-video",s.autoplay=!0,s.loop=!0,s.muted=!0,s.playsInline=!0,s.src=i.video_url,i.image_url&&s.addEventListener("error",()=>{s.remove(),e.classList.remove("card-video"),e.classList.add("featured"),e.style.backgroundImage=`url(${JSON.stringify(i.image_url)})`},{once:!0}),e.appendChild(s)}else i.image_url&&(e.classList.add("featured"),e.style.backgroundImage=`url(${JSON.stringify(i.image_url)})`);if((i.video_url||i.image_url)&&(i.title||i.body)){const s=document.createElement("div");s.className="banner-text-overlay",e.appendChild(s)}if(i.is_featured&&e.classList.add("banner-featured"),i.ribbon){const s=document.createElement("div");if(s.className=`tournament-ribbon ${Oa[i.ribbon]||"ribbon-featured"}`,i.ribbon==="TIME BASED"&&i.end_at){const n=document.createElement("span");n.className="ribbon-countdown",n.textContent=It(i.end_at),s.appendChild(n),Ss(n,i.end_at,e)}else s.textContent=i.ribbon;e.appendChild(s)}if(i.show_countdown&&i.end_at&&!i.ribbon){const s=document.createElement("div");s.className="tournament-ribbon ribbon-urgent";const n=document.createElement("span");n.className="ribbon-countdown",n.textContent=It(i.end_at),s.appendChild(n),e.appendChild(s),Ss(n,i.end_at,e)}if(i.title){const s=document.createElement("div");s.className="tournament-name",s.textContent=i.title,e.appendChild(s)}if(i.body){const s=document.createElement("div");s.className="tournament-info",s.textContent=i.body,e.appendChild(s)}return(i.cta||i.link_url)&&(e.addEventListener("click",()=>za(i)),e.style.cursor="pointer"),e}function za(i){const e=i.cta;if(e?.action==="dismiss"){if(At(i.id,"dismissed"),!i.is_persistent){const t=document.querySelector(`.tournament-card[data-banner-id="${i.id}"]`);t&&t.remove(),bn()}return}if(At(i.id,"clicked"),!e){Xe(i.link_url);return}switch(e.action){case"navigate":{let t=e.payload;if(typeof t=="string")try{t=JSON.parse(t)}catch{}const s=t?.page,n=Da[s];if(n){if(ee()&&(s==="wallet"||s==="shop"||t?.tab==="deposit"))break;const r=t?.tab;C(r?`${n}?tab=${encodeURIComponent(r)}`:n)}break}case"external":{const t=e.payload?.url;t&&/^https?:\/\//.test(t)&&Xe(t);break}case"deeplink":{const t=e.payload?.path;if(t&&t.startsWith("/")){const s=e.payload?.params,n=s?"?"+new URLSearchParams(s).toString():"";C(t+n)}break}case"claim_bonus":{e.payload;break}}}function bn(){const i=document.getElementById("tournament-cards"),e=document.querySelector(".tournaments-preview");if(!i||!e)return;i.querySelector('.tournament-card:not([style*="display: none"])')||(e.style.display="none")}function It(i){const e=new Date(i)-Date.now();if(e<=0)return a("landing.countdown_ended");const t=Math.floor(e/36e5),s=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);return t>0?a("landing.countdown_hours_minutes_seconds",{hours:t,minutes:s,seconds:n}):s>0?a("landing.countdown_minutes_seconds",{minutes:s,seconds:n}):a("landing.countdown_seconds",{seconds:n})}function Ss(i,e,t){const s=setInterval(()=>{const n=It(e);i.textContent=n,n===a("landing.countdown_ended")&&(clearInterval(s),t&&(t.style.display="none"),bn())},1e3);Mt.push(s)}function _n(){ge&&(ge.disconnect(),ge=null),Mt.forEach(i=>clearInterval(i)),Mt=[]}const x={get badge(){return document.querySelector(".limited-offer-badge")},get headline(){return document.querySelector(".promo-headline")},get playBtn(){return document.getElementById("hero-play-btn")},get winAmount(){return document.querySelector(".win-amount")},get bottomNav(){return document.getElementById("bottom-nav")},get scrollFooter(){return document.getElementById("scroll-footer")},get signinSection(){return document.getElementById("signin-section")},get headerSigninBtn(){return document.getElementById("header-signin-btn")},get userProfilePanel(){return document.getElementById("user-profile-panel")},get profileUsername(){return document.getElementById("profile-username")},get profileEmail(){return document.getElementById("profile-email")},get profileBalance(){return document.getElementById("profile-balance")},get balanceAmount(){return document.getElementById("balance-amount")},get headerHomeBtn(){return document.getElementById("header-home-btn")},get ctaText(){return document.getElementById("cta-text")},get ctaPromo(){return document.getElementById("cta-promo")}};function as(){const i=x.headerHomeBtn;if(!i)return null;const e=y.features?.hideLobbyExitControls?null:Ma();return e?(i.setAttribute("href",e),i.setAttribute("target","_top"),i.setAttribute("rel","noopener"),i.setAttribute("aria-label",a("landing.operator_home_label")),i.style.display="",e):(i.style.display="none",i.removeAttribute("href"),null)}function ht(i){const{bottomNav:e,scrollFooter:t,signinSection:s,headerSigninBtn:n,userProfilePanel:r}=x,o=i||y.isTelegram,l=y.features.showGoogleAuth;if(o){if(e&&(e.style.display="flex"),r&&r.classList.add("visible"),t&&t.classList.add("has-bottom-nav"),s&&(s.style.display="none"),n&&(n.style.display="none"),(y.isTelegram||A())&&document.querySelectorAll(".logout-link, #profile-logout-btn, #logout-btn, .payout-logout-btn").forEach(d=>{d.style.display="none"}),A()){e&&(e.style.display="none");const c=document.querySelector(".total-payout-banner");c&&(c.style.display="none")}}else e&&(e.style.display="none"),r&&r.classList.remove("visible"),t&&t.classList.remove("has-bottom-nav"),s&&(s.style.display=l?"flex":"none"),n&&(n.style.display=l?"flex":"none")}function wn(i,e=null){const{badge:t,headline:s,playBtn:n,ctaText:r,ctaPromo:o}=x,l=typeof i=="number"&&!isNaN(i)?Math.max(0,i):0;t&&s&&(e&&e.amount>0?(t.textContent="PENDING CASHOUT",s.textContent="REGISTER TO CLAIM"):l>=2?(t.textContent="NEW YEAR BONUS",s.textContent=`${l} FREE GAMES`):l===1?(t.textContent="NEW YEAR BONUS",s.textContent="1 FREE GAME"):(t.textContent="NEW YEAR BONUS",s.textContent="SIGN IN FOR 2 BONUS GAMES")),r&&(e&&e.amount>0?(r.textContent=a("landing.cta_claim_winnings",{amount:`$${parseFloat(e.amount).toFixed(2)}`}),o&&(o.textContent=a("landing.cta_register_to_cash_out"))):(r.textContent=a("landing.cta_sign_up_to_play"),o&&(o.textContent=a("landing.cta_first_game_free"))))}function Me(i){const{badge:e,headline:t,playBtn:s,ctaText:n,ctaPromo:r}=x,o=i.bonusGamesRemaining||0,l=parseFloat(i.balance)||0;e&&t&&(o>0?(e.textContent="BONUS GAMES",t.textContent=`${o} BONUS ${o===1?"GAME":"GAMES"}`):l>=Ee(Xt)?(e.textContent="READY TO PLAY",t.textContent="GOOD LUCK!"):(e.textContent="FREE PRACTICE",t.textContent="PLAY FOR FREE")),s&&(s.dataset.action="play"),n&&(n.textContent=a("landing.cta_play_now"),r&&(r.textContent=""))}function Ie(i){const{badge:e,headline:t,playBtn:s,ctaText:n,ctaPromo:r}=x,o=i.bonusGamesRemaining||0,l=parseFloat(i.balance)||0;e&&t&&(o>0?(e.textContent="BONUS GAMES",t.textContent=`${o} BONUS ${o===1?"GAME":"GAMES"}`):l>=Ee(Xt)?(e.textContent="TELEGRAM",t.textContent=`WELCOME, ${(i.username||"PLAYER").toUpperCase()}!`):(e.textContent="FREE PRACTICE",t.textContent="PLAY FOR FREE")),s&&(s.dataset.action="play"),n&&(n.textContent=a("landing.cta_play_now"),r&&(r.textContent=""))}function Ga(){const i=document.createElement("div");i.className="embers-container",i.style.cssText="position:fixed; bottom:80px; left:0; width:100%; height:200px; pointer-events:none; z-index:1; overflow:hidden;",document.body.appendChild(i);let e=0;const t=25;return{intervalId:setInterval(()=>{if(e>=t)return;const n=document.createElement("div"),r=Math.random()*2+1,o=Math.random()*100,l=Math.random()*2+2;n.style.cssText=`
      position: absolute;
      bottom: -10px;
      left: ${o}%;
      width: ${r}px;
      height: ${r}px;
      background: #00ff66;
      border-radius: 50%;
      box-shadow: 0 0 4px #00ff66;
      opacity: ${Math.random()*.5+.2};
      animation: rise ${l}s ease-out forwards;
      will-change: transform, opacity;
    `,e++,i.appendChild(n),setTimeout(()=>{n.remove(),e--},l*1e3)},300),container:i}}function ja(){if(document.getElementById("ember-styles"))return;const i=document.createElement("style");i.id="ember-styles",i.textContent=`
    @keyframes rise {
      0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.6; }
      100% { transform: translateY(-150px) translateX(${(Math.random()-.5)*50}px) scale(0); opacity: 0; }
    }
  `,document.head.appendChild(i)}function Wa(i,e){let t=null;return s=>{t||(t=requestAnimationFrame(()=>{const{clientX:n,clientY:r}=s,o=window.innerWidth/2,l=window.innerHeight/2,c=(n-o)/50,d=(r-l)/50;if(i&&(i.style.transform=`translate(${c}px, ${d}px)`),e){const u=50+(n-o)/100,p=30+(r-l)/100;e.style.backgroundPosition=`${u}% ${p}%`}t=null}))}}let be=null,pt=new Map,kn=[];function Ka(){const i=new Map;for(const e of kn)if(e.active&&e.entry_fee){const t=e.entry_fee.toString(),s=e.allow_free_games===!0||e.type==="free";(!i.has(t)||s)&&i.set(t,{fee:t,isFree:s})}return i}async function Ya(i,e=null,t=null){const{serverRegion:s,serverPing:n}=x;try{let r;if(t){const d=t.getAuthState();if(d.type==="registered"||d.authProvider==="telegram")try{r=await t.getServers(),I.debug("Landing","Fetched servers from authenticated endpoint")}catch(u){I.debug("Landing","Auth server fetch failed, falling back to public:",u.message),r=await i.fetchServers({force:!0})}else r=await i.fetchServers({force:!0})}else r=await i.fetchServers({force:!0});kn=r,i.servers=r,n&&(n.textContent=a("landing.ping_measuring"));const o=Date.now();pt=await i.measureAllPings(),y.features?.enableLatencyHints&&ra(pt,o);let l=1/0,c=null;for(const d of r){if(!d.active)continue;const u=pt.get(d.id);typeof u=="number"&&Number.isFinite(u)&&u>0&&u<l&&(l=u,be=d,c=d)}c&&s&&n?(s.textContent=Cs(be),n.textContent=a("landing.ping_value",{ms:Math.round(l)}),n.className="server-ping "+Ja(l)):(r.length>0&&(be=r.find(d=>d.active),be&&s&&n&&(s.textContent=Cs(be))),n&&(n.textContent=a("landing.ping_unavailable"))),e&&e(Ka())}catch(r){I.debug("Landing","Failed to fetch servers:",r),s&&(s.textContent=a("landing.server_offline")),n&&(n.textContent=a("landing.ping_unavailable"))}}function Cs(i){return a("landing.server_region_label",{region:i.geo||a("landing.server_region_fallback")})}function Ja(i){return i<50?"ping-excellent":i<100?"ping-good":i<150?"ping-fair":i<250?"ping-poor":"ping-bad"}function Za(){return Math.floor(Math.random()*151)+200}class Xa{constructor(e){this.lobbyApiUrl=e,this.servers=[],this.lastFetchMs=0,this.cacheDurationMs=3e4,this._fakePlayerCounts=new Map}_getFakePlayerCount(e){return this._fakePlayerCounts.has(e)||this._fakePlayerCounts.set(e,Za()),this._fakePlayerCounts.get(e)}async fetchServers(e={}){const{force:t=!1}=e,s=Date.now();if(!t&&this.servers.length>0&&s-this.lastFetchMs<this.cacheDurationMs)return this.servers;const n=await fetch(`${this.lobbyApiUrl}/public/game-servers`);if(!n.ok)throw new Error(`HTTP ${n.status}`);const r=await n.json();if(!r?.success){const l=r?.error||r?.message,c=new Error(l||"Failed to fetch servers");throw l||(c.code="SERVERS_FETCH_FAILED"),c}const o=Array.isArray(r.servers)?r.servers:[];return this.servers=o.map(l=>({...l,player_count:this._getFakePlayerCount(l.id)})),this.lastFetchMs=s,this.servers}getAllServers(){return this.servers}getActiveServers(){return this.servers.filter(e=>e.active)}getServersByRegion(e){return this.servers.filter(t=>t.geo===e)}getSortedByPopularity(){return[...this.servers].sort((e,t)=>(t.player_count||0)-(e.player_count||0))}getServerById(e){return this.servers.find(t=>t.id===e)}isFull(e){const t=Number(e?.player_count??0),s=Number(e?.capacity??0);return s>0&&t>=s}canAfford(e,t){const s=Number.parseFloat(t??"0"),n=Ee(Number.parseFloat(e?.entry_fee??"0"));return Number.isFinite(s)&&Number.isFinite(n)&&s>=n}async measurePing(e){return oa({url:e})}async measureAllPings(){const t=(Array.isArray(this.servers)?this.servers:[]).filter(s=>s&&s.active&&(s.url||s.ping_url));return la(t)}}function Qa(i){switch(i){case"NA":return{label:a("arenas.region_na"),className:"geo-na"};case"EU":return{label:a("arenas.region_eu"),className:"geo-eu"};case"ASIA":return{label:a("arenas.region_asia"),className:"geo-asia"};default:return null}}function ei(i){const e=!!i?.active,t=Number(i?.player_count??0),s=Number(i?.capacity??0),n=s>0&&t>=s;return e?n?{key:"full",label:a("arenas.server_status_full")}:{key:"available",label:a("arenas.server_status_online")}:{key:"offline",label:a("arenas.server_status_offline")}}function ti(i){const e=Number.parseFloat(i)||0;return e<=0?0:e/10*500}function si(i){return G()?O(i,"receive"):H(i)}class ni{constructor(e,t={}){this.serverManager=e,this.container=null,this.gridEl=null,this.metaEl=null,this.errorEl=null,this.refreshInterval=null,this._ageTicker=null,this.onServerSelect=null,this._servers=[],this._lastUpdatedMs=0,this._serverPings=new Map,this._measuringPing=!1,this.maxServers=t.maxServers||null,this.simplified=t.simplified||!1,this.showOnlyActive=t.showOnlyActive||!1,this.isAnonymous=t.isAnonymous||!1,this.hasFreeGames=t.hasFreeGames||!1,this.state={filterGeo:"ALL",sort:"POPULAR"},t.filterGeo&&["NA","EU","ASIA"].includes(t.filterGeo)&&(this.state.filterGeo=t.filterGeo),this._createElements(),this._stopLocaleListener=q(()=>this._handleLocaleChange())}_createElements(){this.container=document.createElement("div"),this.container.className="server-list-container"+(this.simplified?" simplified":""),this._renderShell()}_renderShell(){if(this.simplified?this.container.innerHTML=`
        <div class="server-grid" data-grid></div>
        <div class="server-list-error" data-error hidden>
          <div class="server-list-error-title">${a("arenas.servers_load_failed")}</div>
          <div class="server-list-error-msg" data-error-msg></div>
          <div class="actions">
            <button class="btn" type="button" data-action="retry">${a("common.retry")}</button>
          </div>
        </div>
      `:this.container.innerHTML=`
        <div class="server-list-header">
          <div class="server-list-title">
            <div class="badge"><span class="dot"></span><span>${a("arenas.server_browser")}</span></div>
            <h2>${a("arenas.choose_a_server")}</h2>
            <p class="server-list-subtitle">${a("arenas.live_counts_hint")}</p>
          </div>

          <div class="server-list-controls">
            <div class="control-group">
              <label class="control-label">${a("arenas.region")}</label>
              <div class="segmented" data-segmented="geo">
                <button class="segmented-btn" data-geo="ALL" type="button">${a("arenas.region_all")}</button>
                <button class="segmented-btn" data-geo="NA" type="button">${a("arenas.region_na")}</button>
                <button class="segmented-btn" data-geo="EU" type="button">${a("arenas.region_eu")}</button>
                <button class="segmented-btn" data-geo="ASIA" type="button">${a("arenas.region_asia")}</button>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">${a("arenas.sort")}</label>
              <select class="control-select" data-select="sort">
                <option value="POPULAR">${a("arenas.sort_most_players")}</option>
                <option value="FEE_LOW">${a("arenas.sort_lowest_fee")}</option>
                <option value="NAME">${a("arenas.sort_name")}</option>
              </select>
            </div>

            <button class="btn server-refresh-btn" type="button" data-action="refresh">${a("arenas.refresh")}</button>
          </div>
        </div>

        <div class="server-list-meta">
          <span data-meta="status">${a("arenas.loading_servers")}</span>
          <span class="meta-sep">•</span>
          <span data-meta="updated">—</span>
        </div>

        <div class="server-list-error" data-error hidden>
          <div class="server-list-error-title">${a("arenas.servers_load_failed")}</div>
          <div class="server-list-error-msg" data-error-msg></div>
          <div class="actions">
            <button class="btn" type="button" data-action="retry">${a("common.retry")}</button>
          </div>
        </div>

        <div class="server-grid" data-grid></div>
      `,this.gridEl=this.container.querySelector("[data-grid]"),this.metaEl=this.container.querySelector('[data-meta="status"]'),this.updatedEl=this.container.querySelector('[data-meta="updated"]'),this.errorEl=this.container.querySelector("[data-error]"),this.errorMsgEl=this.container.querySelector("[data-error-msg]"),!this.simplified){Array.from(this.container.querySelectorAll('[data-segmented="geo"] .segmented-btn')).forEach(r=>{r.addEventListener("click",()=>{this.state.filterGeo=r.dataset.geo,this._syncControls(),this.render(this._servers)}),r.addEventListener("touchstart",()=>{r.style.transform="scale(0.98)"},{passive:!0}),r.addEventListener("touchend",()=>{r.style.transform="scale(1)"})});const s=this.container.querySelector('[data-select="sort"]');s&&s.addEventListener("change",()=>{this.state.sort=s.value,this.render(this._servers)});const n=this.container.querySelector('[data-action="refresh"]');n&&(n.addEventListener("click",()=>this.refresh({force:!0})),n.addEventListener("touchstart",()=>{n.style.transform="scale(0.98)"},{passive:!0}),n.addEventListener("touchend",()=>{n.style.transform="scale(1)"}))}const e=this.container.querySelector('[data-action="retry"]');e&&(e.addEventListener("click",()=>this.refresh({force:!0})),e.addEventListener("touchstart",()=>{e.style.transform="scale(0.98)"},{passive:!0}),e.addEventListener("touchend",()=>{e.style.transform="scale(1)"})),this.simplified||this._syncControls(),this._renderSkeleton()}_handleLocaleChange(){this.container&&(this._renderShell(),this._servers.length&&(this.render(this._servers),this._setMeta(v("arenas.servers_found",this._servers.length))))}destroy(){this.stopAutoRefresh(),this._stopLocaleListener&&(this._stopLocaleListener(),this._stopLocaleListener=null)}_syncControls(){Array.from(this.container.querySelectorAll('[data-segmented="geo"] .segmented-btn')).forEach(s=>{const n=s.dataset.geo===this.state.filterGeo;s.classList.toggle("active",n),s.setAttribute("aria-pressed",n?"true":"false")});const t=this.container.querySelector('[data-select="sort"]');t&&t.value!==this.state.sort&&(t.value=this.state.sort)}_renderSkeleton(e=3){if(!this.gridEl)return;const t=this.maxServers||e;this.gridEl.innerHTML=Array.from({length:t}).map(()=>`
        <div class="server-card skeleton">
          <div class="skeleton-line w-60"></div>
          <div class="skeleton-line w-30"></div>
          <div class="skeleton-line w-80"></div>
          <div class="skeleton-line w-50"></div>
          <div class="skeleton-btn"></div>
        </div>
      `).join("")}async refresh(e={}){const{force:t=!0}=e;this._hideError(),this._servers.length||this._renderSkeleton(),this.metaEl&&this._setMeta(a("arenas.fetching_servers"));try{const s=await this.serverManager.fetchServers({force:t});this._servers=s,this._lastUpdatedMs=Date.now(),this.render(s),this.metaEl&&this._setMeta(v("arenas.servers_found",s.length)),this._startAgeTicker(),this.measurePings()}catch(s){const n=s?.code==="SERVERS_FETCH_FAILED"?a("arenas.servers_fetch_failed"):s?.message||String(s);this._showError(n),this.metaEl&&this._setMeta(a("arenas.server_fetch_failed")),this._stopAgeTicker()}}render(e){if(!this.gridEl)return;let t=Array.isArray(e)?[...e]:[];if(this.showOnlyActive&&(t=t.filter(n=>n.active===!0)),this.state.filterGeo&&this.state.filterGeo!=="ALL"&&(t=t.filter(n=>n.geo===this.state.filterGeo)),this.simplified?t.sort((n,r)=>n.active&&!r.active?-1:!n.active&&r.active?1:(r.player_count||0)-(n.player_count||0)):this.state.sort==="POPULAR"?t.sort((n,r)=>n.active&&!r.active?-1:!n.active&&r.active?1:(r.player_count||0)-(n.player_count||0)):this.state.sort==="FEE_LOW"?t.sort((n,r)=>Number.parseFloat(n.entry_fee||"0")-Number.parseFloat(r.entry_fee||"0")):this.state.sort==="NAME"&&t.sort((n,r)=>String(n.name||"").localeCompare(String(r.name||""))),this.maxServers&&t.length>this.maxServers&&(t=t.slice(0,this.maxServers)),!t.length){this.gridEl.innerHTML=`
        <div class="server-empty">
          <div class="server-empty-title">${a("arenas.no_servers_title")}</div>
          <div class="server-empty-sub">${a("arenas.no_servers_hint")}</div>
        </div>
      `;return}this.gridEl.innerHTML=t.map(n=>{const r=ei(n),o=Qa(n.geo)||{label:f(n.geo||"—"),className:"geo-unknown"},l=Number(n.player_count||0),c=Number(n.capacity||0),d=n.entry_fee??"0",u=ti(d),p=r.key!=="available";let m=r.key==="available"?this.isAnonymous&&this.hasFreeGames?a("arenas.play_free_upper"):a("arenas.play_upper"):r.label;const g=R=>R>=1e3?`${(R/1e3).toFixed(1)}k`:R.toString(),S=this._serverPings.get(n.id),E=typeof S=="number"&&Number.isFinite(S)&&S>0,M=E?this._getPingClass(S):"ping-unknown",te=E?a("arenas.ping_ms_compact",{ms:Math.round(S)}):"—";return`
        <div class="server-card ${r.key}" data-server-card data-server-id="${f(n.id)}">
          <div class="server-card-top">
            <div class="server-name">${f(n.name||a("arenas.server_fallback_name"))}</div>
            <div class="server-badges">
              <div class="geo-badge ${o.className}">${f(o.label)}</div>
              <div class="ping-badge ${M}">${te}</div>
            </div>
          </div>

          <div class="server-stats">
            <div class="stat">
              <div class="stat-label">${a("arenas.entry_fee")}</div>
              <div class="stat-value fee-value">${k(G()?O(parseFloat(d),"pay"):H(d))}</div>
            </div>
            <div class="stat">
              <div class="stat-label">${a("arenas.players")}</div>
              <div class="stat-value">${g(l)}/${g(c)}</div>
            </div>
          </div>

          <div class="server-status">
            <span class="status-dot ${r.key}"></span>
            <span class="status-text">${f(r.label)}</span>
          </div>

          <div class="min-win-highlight">
            <span class="min-win-label">${a("arenas.min_win_label")}</span>
            <span class="min-win-value">${a("arenas.min_win_plus",{amount:k(si(u))})}</span>
          </div>

          <button class="server-play-btn" type="button" data-action="play" data-server-id="${f(n.id)}" ${p?"disabled":""}>
            ${k(m)}
          </button>
        </div>
      `}).join(""),Array.from(this.gridEl.querySelectorAll('[data-action="play"]')).forEach(n=>{n.addEventListener("click",()=>{const r=n.dataset.serverId;if(!r)return;const o=this._servers.find(l=>l.id===r);this.onServerSelect?.(r,o)}),n.addEventListener("touchstart",()=>{n.disabled||(n.style.transform="scale(0.98)")},{passive:!0}),n.addEventListener("touchend",()=>{n.disabled||(n.style.transform="scale(1)")})})}startAutoRefresh(e=1e4){this.stopAutoRefresh(),this.refresh({force:!0}),this.refreshInterval=setInterval(()=>this.refresh({force:!0}),e)}stopAutoRefresh(){this.refreshInterval&&(clearInterval(this.refreshInterval),this.refreshInterval=null),this._stopAgeTicker()}_setMeta(e){this.metaEl&&(this.metaEl.textContent=e)}_startAgeTicker(){this._stopAgeTicker();const e=()=>{if(!this.updatedEl||!this._lastUpdatedMs)return;const t=Math.max(0,Math.floor((Date.now()-this._lastUpdatedMs)/1e3));this.updatedEl.textContent=a("arenas.updated_seconds_ago",{count:t})};e(),this._ageTicker=setInterval(e,1e3)}_stopAgeTicker(){this._ageTicker&&(clearInterval(this._ageTicker),this._ageTicker=null),this.updatedEl&&(this.updatedEl.textContent="—")}_showError(e){this.errorEl&&(this.errorEl.hidden=!1,this.errorMsgEl&&(this.errorMsgEl.textContent=e))}_hideError(){this.errorEl&&(this.errorEl.hidden=!0),this.errorMsgEl&&(this.errorMsgEl.textContent="")}async measurePings(){if(!this._measuringPing){this._measuringPing=!0;try{this._serverPings=await this.serverManager.measureAllPings(),this.render(this._servers)}catch(e){console.error("[SERVER-LIST] Failed to measure pings:",e)}finally{this._measuringPing=!1}}}_getPingClass(e){return e<50?"ping-excellent":e<100?"ping-good":e<150?"ping-fair":e<250?"ping-poor":"ping-bad"}}const is="selected_entry_fee",Qe="selected_server_type",rs="selected_server_id",os="tournament_id";function Sn(i){sessionStorage.removeItem(os),sessionStorage.setItem(rs,i),sessionStorage.removeItem(is),sessionStorage.removeItem(Qe)}function ai(i,e="paid"){sessionStorage.removeItem(os),sessionStorage.setItem(is,i.toFixed(2)),e==="practice"?sessionStorage.setItem(Qe,"practice"):sessionStorage.removeItem(Qe),sessionStorage.removeItem(rs)}function Cn(i){sessionStorage.removeItem(is),sessionStorage.removeItem(Qe),sessionStorage.removeItem(rs),sessionStorage.setItem(os,String(i))}const Tn="vr-session-notice",ii=`
#vr-session-notice{position:fixed;top:0;left:0;right:0;z-index:2147483646;
  display:flex;align-items:center;justify-content:center;gap:8px;
  padding:10px 16px;box-sizing:border-box;
  background:rgba(52,38,10,.96);border-bottom:1px solid rgba(240,180,60,.45);
  color:#f4e2c0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
  font-size:13px;line-height:1.4;text-align:center;}
`;function ri(){if(typeof window>"u")return!1;const i=window.document;if(!i)return!1;$n();const e=i.createElement("style");e.textContent=ii,i.head?.appendChild(e);const t=i.createElement("div");t.id=Tn,t.setAttribute("role","status"),t.setAttribute("aria-live","polite");const s=i.createElement("span");s.setAttribute("aria-hidden","true"),s.textContent="⚠";const n=i.createElement("span");return n.textContent=a("auth.session_unconfirmed_notice"),t.append(s,n),(i.body||i.documentElement).appendChild(t),!0}function $n(){if(typeof window>"u")return;window.document?.getElementById(Tn)?.remove()}function oi(){return y.isTelegram?"/tg/promo":"/standalone/promo"}function li(){return y.isTelegram?"/tg/bonus-games":A()?null:"/standalone/bonus-games"}async function xt(){const i=li();if(!i)return{success:!0,total_bonus_games:0};try{const e=await fetch(`${re()}${i}`,{method:"GET",headers:oe()}),t=await e.json();return e.ok?{success:!0,total_bonus_games:t.total_bonus_games||0}:{success:!1,total_bonus_games:0,error:t.error||`HTTP ${e.status}`}}catch(e){return console.error("[BONUS] Failed to get bonus games:",e),{success:!1,total_bonus_games:0,error:e.message||"Failed to fetch bonus games"}}}async function En(i){try{const e=i?.trim()?.toUpperCase();if(!e)return{success:!1,error:a("promo.error_enter_code")};const t=await fetch(`${re()}${oi()}/redeem`,{method:"POST",headers:oe(),body:JSON.stringify({code:e})}),s=await t.json();return t.ok?{success:!0,message:s.message,reward_type:s.reward_type,reward_value:s.reward_value,promo_code:s.promo_code,promo_description:s.promo_description}:{success:!1,error:s.error||`HTTP ${t.status}`}}catch(e){return console.error("[PROMO] Failed to redeem promo code:",e),{success:!1,error:e.message||a("promo.error_redeem_failed")}}}function Ln(i){const e={"invalid promo code":a("promo.error_invalid_code"),"this promo code is no longer active":a("promo.error_promo_ended"),"this promo code has expired":a("promo.error_code_expired"),"this promo code has reached its maximum uses":a("promo.error_code_unavailable"),"you have already redeemed this promo code":a("promo.error_already_used"),"promo code is required":a("promo.error_code_required")},t=i?.toLowerCase()||"";for(const[s,n]of Object.entries(e))if(t.includes(s))return n;return i||a("common.something_went_wrong")}function Pe(i=""){return y.isTelegram?`${re()}/tasks${i}`:`${re()}/standalone/tasks${i}`}async function ci(){const i=Pe();try{const e=await fetch(i,{method:"GET",headers:oe()});e.status;const t=await e.text();t.substring(0,300);let s;try{s=JSON.parse(t)}catch(n){return console.error("[TASKS] Failed to parse JSON:",n),{success:!1,error:a("tasks.invalid_response",{body:t.substring(0,100)})}}return e.ok?{success:!0,daily:s.daily||[],progressions:s.progressions||[],achievements:s.achievements||[],social:s.social||[],partner:s.partner||[],seasonal:s.seasonal||[],streak:s.streak||{current_streak:0,best_streak:0,last_activity_date:"",streak_freezes_available:0,streak_at_risk:!1,total_days_played:0},summary:s.summary||{total_available:0,total_completed:0,total_claimable:0,daily_completed:0,daily_total:0}}:{success:!1,error:s.error||s.message||a("tasks.http_error",{status:e.status})}}catch(e){return console.error("[TASKS] Failed to fetch tasks:",e),{success:!1,error:e?.message||String(e)||"Failed to fetch tasks"}}}async function di(i){const e=Pe("/claim");try{const t=await fetch(e,{method:"POST",headers:oe(),body:JSON.stringify({task_id:i})});t.status;const s=await t.text();s.substring(0,200);let n;try{n=JSON.parse(s)}catch(r){return console.error("[TASKS] Failed to parse JSON:",r),{success:!1,error:a("tasks.invalid_response",{body:s.substring(0,100)})}}return t.ok?{success:!0,message:n.message||"Rewards claimed successfully",rewards:n.rewards||[]}:{success:!1,error:n.error||n.message||a("tasks.http_error",{status:t.status})}}catch(t){return console.error("[TASKS] Failed to claim task:",t),{success:!1,error:t?.message||String(t)||"Failed to claim task"}}}async function ui(i){const e=Pe("/social/click");try{const t=await fetch(e,{method:"POST",headers:oe(),body:JSON.stringify({task_id:i})});t.status;const s=await t.text();s.substring(0,300);let n;try{n=JSON.parse(s)}catch(r){return console.error("[TASKS] Failed to parse JSON:",r),{success:!1,error:a("tasks.invalid_response",{body:s.substring(0,100)})}}return t.ok?{success:!0,external_url:n.external_url||n.url||"",message:n.message||""}:{success:!1,error:n.error||n.message||a("tasks.http_error",{status:t.status})}}catch(t){return console.error("[TASKS] Failed to click social task:",t),{success:!1,error:t?.message||String(t)}}}async function hi(i){const e=Pe("/social/verify");try{const t=await fetch(e,{method:"POST",headers:oe(),body:JSON.stringify({task_id:i})});t.status,t.statusText;const s=await t.text();let n;try{n=JSON.parse(s)}catch(r){return console.error("[TASKS] Failed to parse JSON:",r),{success:!1,error:a("tasks.invalid_response",{body:s.substring(0,100)})}}return t.ok?n.success===!1?{success:!1,error:n.error||n.message||a("tasks.verification_failed")}:{success:!0,message:n.message||"Task verified successfully"}:{success:!1,error:n.error||n.message||a("tasks.http_error",{status:t.status})}}catch(t){return console.error("[TASKS] Failed to verify task:",t),{success:!1,error:t?.message||String(t)||"Failed to verify task"}}}async function pi(i){const e=Pe("/pwa/installed");try{const t=await fetch(e,{method:"POST",headers:oe(),body:JSON.stringify({device_type:i})});if(!t.ok){const s=await t.json().catch(()=>({}));return t.status,{success:!1,error:s.error||a("tasks.http_error",{status:t.status})}}return{success:!0}}catch(t){return{success:!1,error:t?.message||String(t)}}}function mi(i){if(!i)return{label:a("tasks.reward_generic"),value:"?",iconKey:"default"};const e=i.reward_type||i.reward_type_key,{reward_value:t}=i;if(e)switch(e){case"free_games":return{label:v("tasks.reward_bonus_games",Number(t)),value:String(t),iconKey:"bonusGames"};case"balance_bonus":return{label:v("tasks.reward_bonus",Number(t)),value:`$${t}`,iconKey:"balance"};case"badge_name":return{label:a("tasks.reward_badge"),value:String(t),iconKey:"badge"};case"streak_freezes":return{label:Ts(t),value:String(t),iconKey:"freeze"};case"ticket":{const s=i.reward_config?.entry_fee||i.config?.entry_fee||"",n=parseInt(t)||1,r=n>1?s?`${n}x $${s}`:`${n}x`:s?`$${s}`:String(t);return{label:v("tasks.reward_arena_ticket",n),value:r,iconKey:"ticket"}}default:return{label:String(e),value:String(t||""),iconKey:"default"}}if(i.free_games!==void 0)return{label:v("tasks.reward_bonus_games",Number(i.free_games)),value:String(i.free_games),iconKey:"bonusGames"};if(i.balance_bonus!==void 0)return{label:v("tasks.reward_bonus",Number(i.balance_bonus)),value:`$${i.balance_bonus}`,iconKey:"balance"};if(i.badge_name!==void 0)return{label:a("tasks.reward_badge"),value:String(i.badge_name),iconKey:"badge"};if(i.streak_freezes!==void 0)return{label:Ts(i.streak_freezes),value:String(i.streak_freezes),iconKey:"freeze"};if(i.tickets!=null&&typeof i.tickets=="object"){const{count:s=1,entry_fee:n=""}=i.tickets,r=parseInt(s)||1,o=r>1?n?`${r}x $${n}`:`${r}x`:n?`$${n}`:"1";return{label:v("tasks.reward_arena_ticket",r),value:o,iconKey:"ticket"}}if(i.ticket!==void 0){const s=i.entry_fee||"",n=parseInt(i.ticket)||1,r=n>1?s?`${n}x $${s}`:`${n}x`:s?`$${s}`:String(i.ticket);return{label:v("tasks.reward_arena_ticket",n),value:r,iconKey:"ticket"}}return{label:a("tasks.reward_generic"),value:"?",iconKey:"default"}}function Ts(i){const e=parseInt(i);return v("tasks.reward_streak_freeze",e>1?e:1)}function fi(i){return{not_started:{label:a("tasks.status_not_started"),className:"status-not-started"},in_progress:{label:a("tasks.status_in_progress"),className:"status-in-progress"},completed:{label:a("tasks.status_completed"),className:"status-completed"},claimed:{label:a("tasks.status_claimed"),className:"status-claimed"},expired:{label:a("tasks.status_expired"),className:"status-expired"}}[i]||{label:i,className:"status-unknown"}}const mt="LUXEYA2";class gi{constructor(){this.container=null,this.state="form",this.promoCode="",this.rewardValue=0,this.errorMessage="",this.onClose=null}open(e){this.onClose=e,this.state="form",this.promoCode="",this.errorMessage="",this.render(),this.attachListeners()}close(){this.container&&(this.container.remove(),this.container=null),this.onClose&&this.onClose(this.state==="success")}render(){const e=document.querySelector(".promo-modal");e&&e.remove(),this.container=document.createElement("div"),this.container.className="promo-modal",this.container.innerHTML=this.getHTML(),document.body.appendChild(this.container)}getHTML(){return`
      <div class="promo-modal-overlay"></div>
      <div class="promo-modal-container">
        <button class="promo-modal-close" aria-label="${a("common.close")}">×</button>
        ${this.getContentHTML()}
      </div>
    `}getContentHTML(){switch(this.state){case"loading":return this.getLoadingHTML();case"success":return this.getSuccessHTML();case"error":return this.getErrorHTML();default:return this.getFormHTML()}}getFormHTML(){return`
      <div class="promo-modal-content promo-form-state">
        <div class="promo-header">
          <span class="promo-header-icon">🎮</span>
          <h2 class="promo-title">${a("promo.welcome_title",{appName:a("app.name")})}</h2>
        </div>

        <p class="promo-description">
          ${a("promo.modal_description")}
        </p>
        
        <div class="promo-default-code">
          <button class="promo-code-badge" type="button" data-code="${mt}">
            <span class="badge-icon">🎁</span>
            <span class="badge-code">${mt}</span>
          </button>
          <span class="promo-sponsor">${a("promo.sponsored_by",{sponsor:"Luxeya"})}</span>
        </div>
        
        <div class="promo-input-wrapper">
          <input 
            type="text" 
            class="promo-input" 
            placeholder="${a("promo.enter_promo_code_placeholder")}"
            maxlength="50"
            autocomplete="off"
            autocapitalize="characters"
            value="${this.promoCode}"
          />
        </div>
        
        ${this.errorMessage?`<div class="promo-error-message">${f(this.errorMessage)}</div>`:""}
        
        <button class="promo-claim-btn" type="button" ${this.promoCode.trim()?"":"disabled"}>
          ${a("promo.claim_bonus_games")}
        </button>

        <button class="promo-skip-btn" type="button">
          ${a("promo.skip_for_now")}
        </button>
      </div>
    `}getLoadingHTML(){return`
      <div class="promo-modal-content promo-loading-state">
        <div class="promo-spinner"></div>
        <p class="promo-loading-text">${a("promo.claiming_reward")}</p>
      </div>
    `}getSuccessHTML(){return`
      <div class="promo-modal-content promo-success-state">
        <div class="promo-success-icon">🎉</div>
        <h2 class="promo-success-title">${a("promo.congratulations")}</h2>
        <p class="promo-success-reward">
          ${v("promo.received_bonus_games_html",Number(this.rewardValue)||0)}
        </p>
        <div class="promo-success-details">
          <p>${a("promo.game_entry_worth_html",{amount:"$0.10"})}</p>
          <p>${a("promo.minimum_win_html",{amount:"$5.00"})}</p>
        </div>
        <button class="promo-play-btn" type="button">
          ${a("promo.start_playing")}
        </button>
      </div>
    `}getErrorHTML(){return`
      <div class="promo-modal-content promo-error-state">
        <div class="promo-error-icon">⚠️</div>
        <h2 class="promo-error-title">${a("promo.oops_title")}</h2>
        <p class="promo-error-text">${f(this.errorMessage)}</p>
        <button class="promo-retry-btn" type="button">
          ${a("promo.try_again")}
        </button>
      </div>
    `}attachListeners(){if(!this.container)return;this.container.querySelector(".promo-modal-close")?.addEventListener("click",()=>this.close()),this.container.querySelector(".promo-modal-overlay")?.addEventListener("click",()=>this.close()),this.container.querySelector(".promo-code-badge")?.addEventListener("click",()=>{this.promoCode=mt,this.updateInput()});const n=this.container.querySelector(".promo-input");n?.addEventListener("input",d=>{this.promoCode=d.target.value.toUpperCase(),d.target.value=this.promoCode,this.updateClaimButton()}),n?.addEventListener("keydown",d=>{d.key==="Enter"&&this.promoCode.trim()&&(d.preventDefault(),this.handleClaim())}),this.container.querySelector(".promo-claim-btn")?.addEventListener("click",()=>this.handleClaim()),this.container.querySelector(".promo-skip-btn")?.addEventListener("click",()=>this.close()),this.container.querySelector(".promo-play-btn")?.addEventListener("click",()=>this.close()),this.container.querySelector(".promo-retry-btn")?.addEventListener("click",()=>{this.state="form",this.errorMessage="",this.updateContent()})}updateInput(){const e=this.container?.querySelector(".promo-input");e&&(e.value=this.promoCode,e.focus()),this.updateClaimButton()}updateClaimButton(){const e=this.container?.querySelector(".promo-claim-btn");e&&(e.disabled=!this.promoCode.trim())}updateContent(){const e=this.container?.querySelector(".promo-modal-container");e&&(e.innerHTML=`
        <button class="promo-modal-close" aria-label="${a("common.close")}">×</button>
        ${this.getContentHTML()}
      `,this.attachListeners())}async handleClaim(){if(this.promoCode.trim()){this.state="loading",this.errorMessage="",this.updateContent();try{const e=await En(this.promoCode);e.success?(this.state="success",this.rewardValue=e.reward_value||0,window.dispatchEvent(new CustomEvent("promoRedeemed",{detail:{rewardValue:this.rewardValue}}))):(this.state="form",this.errorMessage=Ln(e.error),e.error),this.updateContent()}catch(e){console.error("[PROMO] Error during redemption:",e),this.state="error",this.errorMessage=a("promo.network_error"),this.updateContent()}}}}const vi=new gi,$s="viper_signin_modal_dismissed";class yi{constructor(){this.container=null,this.onSignIn=null,this.onClose=null}wasDismissed(){try{return sessionStorage.getItem($s)==="true"}catch{return!1}}setDismissed(){try{sessionStorage.setItem($s,"true")}catch{}}open(e,t){this.wasDismissed()||(this._openedAt=Date.now(),L.track("modal_opened","navigation",{modal_name:"signin"}),this.onSignIn=e,this.onClose=t,this.render(),this.attachListeners())}close(){const e=this._openedAt?Date.now()-this._openedAt:0;L.track("modal_closed","navigation",{modal_name:"signin",duration_ms:e}),this.setDismissed(),this.container&&(this.container.remove(),this.container=null),this.onClose&&this.onClose()}handleSignIn(){this.setDismissed(),this.container&&(this.container.remove(),this.container=null),this.onSignIn&&this.onSignIn()}render(){const e=document.querySelector(".promo-modal.signin-modal");e&&e.remove(),this.container=document.createElement("div"),this.container.className="promo-modal signin-modal",this.container.innerHTML=this.getHTML(),document.body.appendChild(this.container)}getHTML(){const e=`<svg class="google-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px; margin-right: 10px;">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>`,t=`<svg viewBox="0 0 20 20" style="width: 18px; height: 18px; flex-shrink: 0;">
      <circle cx="10" cy="10" r="9" fill="rgba(0, 255, 136, 0.15)" stroke="#00ff88" stroke-width="1.5"/>
      <path d="M6 10l3 3 5-6" fill="none" stroke="#00ff88" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;return`
      <style>
        .signin-main-cta {
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 2px;
          background: linear-gradient(135deg, #ffd700 0%, #ffaa00 50%, #ffd700 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: goldShimmer 3s linear infinite;
          text-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
          margin: 8px 0 12px;
        }
        @keyframes goldShimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .signin-urgency {
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(135deg, rgba(0, 255, 136, 0.08) 0%, rgba(153, 69, 255, 0.08) 100%);
          border: 1px solid rgba(0, 255, 136, 0.25);
          border-radius: 12px;
          padding: 14px 16px;
          margin-bottom: 14px;
        }
        .signin-urgency-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #00ff88 0%, #9945FF 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .signin-urgency-icon svg {
          width: 22px;
          height: 22px;
        }
        .signin-urgency-content {
          flex: 1;
        }
        .signin-urgency-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 11px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .signin-urgency-row {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .signin-urgency-number {
          font-size: 22px;
          font-weight: 800;
          background: linear-gradient(135deg, #00ff88 0%, #9945FF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .signin-urgency-total {
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
          font-weight: 500;
        }
        .signin-progress-bar {
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-top: 8px;
        }
        .signin-progress-fill {
          width: 87%;
          height: 100%;
          background: linear-gradient(90deg, #00ff88, #9945FF);
          border-radius: 2px;
        }
        .signin-tagline {
          color: #00ff88;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .signin-features-list {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 14px 16px;
          margin-bottom: 16px;
          text-align: left;
        }
        .signin-feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 6px 0;
          color: rgba(234, 242, 255, 0.85);
          font-size: 14px;
        }
      </style>
      <div class="promo-modal-overlay"></div>
      <div class="promo-modal-container">
        <button class="promo-modal-close" aria-label="${a("common.close")}">×</button>
        <div class="promo-modal-content">
          <div class="promo-header">
            <div class="signin-main-cta">${a("profile.signin_headline",{amount:"$10"})}</div>
          </div>

          <p class="signin-tagline">${a("profile.signin_tagline")}</p>

          <div class="signin-features-list">
            <div class="signin-feature-item">
              ${t}
              <span>${a("profile.signin_feature_practice")}</span>
            </div>
            <div class="signin-feature-item">
              ${t}
              <span>${a("profile.signin_feature_min_win_html",{amount:"$10.00"})}</span>
            </div>
            <div class="signin-feature-item">
              ${t}
              <span>${a("profile.signin_feature_withdraw")}</span>
            </div>
          </div>

          <div class="signin-urgency">
            <div class="signin-urgency-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 9a3 3 0 0 1 3 3v.5a1.5 1.5 0 0 0 3 0V12a3 3 0 0 1 6 0v.5a1.5 1.5 0 0 0 3 0V12a3 3 0 0 1 3-3"/>
                <path d="M2 9V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"/>
                <path d="M2 15v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"/>
                <path d="M2 15a3 3 0 0 0 3-3"/>
                <path d="M22 15a3 3 0 0 1-3-3"/>
              </svg>
            </div>
            <div class="signin-urgency-content">
              <div class="signin-urgency-label">${a("profile.signin_tickets_remaining")}</div>
              <div class="signin-urgency-row">
                <span class="signin-urgency-number">65</span>
                <span class="signin-urgency-total">${a("profile.signin_of_total",{total:500})}</span>
              </div>
              <div class="signin-progress-bar">
                <div class="signin-progress-fill"></div>
              </div>
            </div>
          </div>

          <button class="promo-claim-btn signin-btn" type="button" style="display: flex; align-items: center; justify-content: center;">
            ${e}
            <span>${a("profile.signin_with_google")}</span>
          </button>

          <button class="promo-skip-btn" type="button">
            ${a("profile.maybe_later")}
          </button>
        </div>
      </div>
    `}attachListeners(){if(!this.container)return;this.container.querySelector(".promo-modal-close")?.addEventListener("click",()=>this.close()),this.container.querySelector(".promo-modal-overlay")?.addEventListener("click",()=>this.close()),this.container.querySelector(".signin-btn")?.addEventListener("click",()=>this.handleSignIn()),this.container.querySelector(".promo-skip-btn")?.addEventListener("click",()=>this.close())}}const bi=new yi;function An(){return`
    <div class="privacy-section privacy-header-section">
      <h1>Privacy Policy</h1>
      <p class="privacy-subtitle">Viper Royale</p>
      <p class="privacy-date">Last Updated: January 16, 2025</p>
    </div>

    <div class="privacy-section">
      <h2>1. Introduction</h2>
      <p>Welcome to Viper Royale ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you access or use our skill-based gaming platform, website, mobile application, and related services (collectively, the "Service").</p>
      <p>By accessing or using Viper Royale, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our Service.</p>
    </div>

    <div class="privacy-section">
      <h2>2. Information We Collect</h2>

      <h3>2.1 Information You Provide Directly</h3>
      <p>We collect information you voluntarily provide when you:</p>
      <ul>
        <li><strong>Create an Account:</strong> Username, email address, password, date of birth, and country of residence.</li>
        <li><strong>Complete Identity Verification:</strong> Full legal name, government-issued identification documents, proof of address, and photographs for KYC (Know Your Customer) compliance where required.</li>
        <li><strong>Make Transactions:</strong> Cryptocurrency wallet addresses, transaction history, deposit and withdrawal records.</li>
        <li><strong>Communicate With Us:</strong> Messages, support tickets, feedback, and any other communications.</li>
        <li><strong>Participate in Promotions:</strong> Information required to participate in contests, referral programs, or promotional activities.</li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <p>When you use our Service, we automatically collect:</p>
      <ul>
        <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, browser type, and version.</li>
        <li><strong>Usage Data:</strong> Gameplay statistics, match history, win/loss records, session duration, features accessed, and in-game actions.</li>
        <li><strong>Log Data:</strong> IP address, access times, pages viewed, referring URLs, and clickstream data.</li>
        <li><strong>Location Data:</strong> Approximate geographic location based on IP address to ensure compliance with regional regulations.</li>
      </ul>

      <h3>2.3 Information From Third Parties</h3>
      <p>We may receive information from:</p>
      <ul>
        <li><strong>Wallet Providers:</strong> When you connect a cryptocurrency wallet (e.g., via Privy or similar services), we receive your public wallet address.</li>
        <li><strong>Authentication Services:</strong> If you sign in using third-party services (Telegram, Google, social media accounts), we receive basic profile information as permitted by your privacy settings.</li>
        <li><strong>Analytics Providers:</strong> Aggregated usage and performance data.</li>
      </ul>
    </div>

    <div class="privacy-section">
      <h2>3. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>

      <h3>3.1 Provide and Improve Our Service</h3>
      <ul>
        <li>Create and manage your account</li>
        <li>Process transactions, deposits, and withdrawals</li>
        <li>Facilitate gameplay and matchmaking</li>
        <li>Maintain leaderboards and player statistics</li>
        <li>Improve game performance and user experience</li>
      </ul>

      <h3>3.2 Ensure Security and Compliance</h3>
      <ul>
        <li>Verify your identity and age (18+ requirement)</li>
        <li>Detect and prevent fraud, cheating, collusion, and abuse</li>
        <li>Comply with legal obligations, including anti-money laundering (AML) regulations</li>
        <li>Enforce our Terms of Service and game rules</li>
        <li>Respond to legal requests and prevent harm</li>
      </ul>

      <h3>3.3 Communicate With You</h3>
      <ul>
        <li>Send service-related notifications (account activity, transactions, updates)</li>
        <li>Respond to your inquiries and support requests</li>
        <li>Provide information about new features, promotions, and events (with your consent where required)</li>
      </ul>

      <h3>3.4 Analytics and Research</h3>
      <ul>
        <li>Analyze usage patterns to improve our Service</li>
        <li>Conduct research and development</li>
        <li>Generate aggregated, anonymized statistics</li>
      </ul>
    </div>

    <div class="privacy-section">
      <h2>4. How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share your information in the following circumstances:</p>

      <h3>4.1 Service Providers</h3>
      <p>We engage trusted third-party companies to perform services on our behalf, including:</p>
      <ul>
        <li>Payment and cryptocurrency processing</li>
        <li>Cloud hosting and data storage</li>
        <li>Customer support</li>
        <li>Analytics and performance monitoring</li>
        <li>Identity verification (KYC/AML)</li>
      </ul>
      <p>These providers are contractually obligated to protect your information and use it only for the services they provide to us.</p>

      <h3>4.2 Legal Compliance and Protection</h3>
      <p>We may disclose your information when required to:</p>
      <ul>
        <li>Comply with applicable laws, regulations, or legal processes</li>
        <li>Respond to lawful requests from government authorities</li>
        <li>Protect the rights, property, or safety of Viper Royale, our users, or others</li>
        <li>Investigate potential violations of our Terms of Service</li>
      </ul>

      <h3>4.3 Business Transfers</h3>
      <p>In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.</p>

      <h3>4.4 With Your Consent</h3>
      <p>We may share your information for other purposes with your explicit consent.</p>

      <h3>4.5 Public Information</h3>
      <p>Certain information is publicly visible by design:</p>
      <ul>
        <li>Your username and avatar</li>
        <li>Gameplay statistics and rankings on leaderboards</li>
        <li>Match results</li>
      </ul>
    </div>

    <div class="privacy-section">
      <h2>5. Cryptocurrency and Blockchain Data</h2>

      <h3>5.1 Public Nature of Blockchain</h3>
      <p>Please be aware that cryptocurrency transactions occur on public blockchain networks. Transaction details, including wallet addresses and transaction amounts, are publicly visible on the blockchain and cannot be deleted or modified.</p>

      <h3>5.2 Wallet Information</h3>
      <p>We store your connected wallet address(es) to facilitate deposits and withdrawals. We do not have access to your private keys or seed phrases and will never request them.</p>
    </div>

    <div class="privacy-section">
      <h2>6. Data Security</h2>
      <p>We implement industry-standard security measures to protect your information, including:</p>
      <ul>
        <li>Encryption of data in transit (TLS/SSL) and at rest</li>
        <li>Secure authentication mechanisms</li>
        <li>Regular security assessments and monitoring</li>
        <li>Access controls limiting employee access to personal data</li>
        <li>Secure server infrastructure across multiple regions</li>
      </ul>
      <p>However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.</p>
    </div>

    <div class="privacy-section">
      <h2>7. Data Retention</h2>
      <p>We retain your personal information for as long as:</p>
      <ul>
        <li>Your account is active</li>
        <li>Necessary to provide you with our Service</li>
        <li>Required to comply with legal obligations (including financial record-keeping requirements)</li>
        <li>Needed to resolve disputes and enforce our agreements</li>
      </ul>
      <p>After account deletion, certain information may be retained in anonymized form for analytics purposes or as required by law.</p>
    </div>

    <div class="privacy-section">
      <h2>8. Your Rights and Choices</h2>
      <p>Depending on your location, you may have the following rights:</p>

      <h3>8.1 Access and Portability</h3>
      <p>Request a copy of the personal information we hold about you.</p>

      <h3>8.2 Correction</h3>
      <p>Request correction of inaccurate or incomplete information.</p>

      <h3>8.3 Deletion</h3>
      <p>Request deletion of your personal information, subject to legal retention requirements.</p>

      <h3>8.4 Restriction</h3>
      <p>Request that we limit how we use your information.</p>

      <h3>8.5 Objection</h3>
      <p>Object to certain processing of your information.</p>

      <h3>8.6 Withdrawal of Consent</h3>
      <p>Where processing is based on consent, withdraw that consent at any time.</p>

      <h3>8.7 Communication Preferences</h3>
      <p>Opt out of promotional communications by following the unsubscribe instructions in our emails or adjusting your account settings.</p>

      <p>To exercise these rights, contact us at <a href="mailto:privacy@viperroyale.com">privacy@viperroyale.com</a> or through our in-app support. We will respond to your request within the timeframe required by applicable law.</p>
    </div>

    <div class="privacy-section">
      <h2>9. Age Restrictions</h2>
      <p>Viper Royale is intended solely for users who are 18 years of age or older (or the age of majority in your jurisdiction, whichever is higher). We do not knowingly collect personal information from anyone under this age.</p>
      <p>If we learn that we have collected information from a minor, we will delete that information immediately. If you believe a minor has provided us with personal information, please contact us at <a href="mailto:privacy@viperroyale.com">privacy@viperroyale.com</a>.</p>
    </div>

    <div class="privacy-section">
      <h2>10. Geographic Restrictions</h2>
      <p>Our Service is not available in all jurisdictions. By using Viper Royale, you represent that you are accessing the Service from a location where online skill-based gaming is permitted. We use geolocation technology to restrict access from prohibited regions.</p>
    </div>

    <div class="privacy-section">
      <h2>11. Third-Party Links and Services</h2>
      <p>Our Service may contain links to third-party websites, applications, or services. This Privacy Policy does not apply to those third parties. We encourage you to review the privacy policies of any third-party services you access.</p>
    </div>

    <div class="privacy-section">
      <h2>12. International Data Transfers</h2>
      <p>Your information may be transferred to and processed in countries other than your country of residence, including locations where our servers are hosted (United States, Brazil, and Europe). These countries may have different data protection laws.</p>
      <p>By using our Service, you consent to the transfer of your information to these locations. We take appropriate safeguards to ensure your information remains protected in accordance with this Privacy Policy.</p>
    </div>

    <div class="privacy-section">
      <h2>13. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. When we make material changes, we will:</p>
      <ul>
        <li>Update the "Last Updated" date at the top of this policy</li>
        <li>Notify you through the Service or via email</li>
        <li>Where required by law, obtain your consent to the changes</li>
      </ul>
      <p>Your continued use of the Service after any changes indicates your acceptance of the updated Privacy Policy.</p>
    </div>

    <div class="privacy-section">
      <h2>14. Contact Us</h2>
      <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
      <div class="contact-info">
        <p><strong>Viper Royale</strong></p>
        <p>Email: <a href="mailto:privacy@viperroyale.com">privacy@viperroyale.com</a></p>
        <p>Support: <a href="mailto:support@viperroyale.com">support@viperroyale.com</a></p>
        <p>Telegram: <a href="https://t.me/viper_royale" target="_blank" rel="noopener noreferrer">@viper_royale</a></p>
      </div>
    </div>

    <div class="privacy-section">
      <h2>15. Additional Disclosures for Specific Regions</h2>

      <h3>15.1 European Economic Area (EEA) and United Kingdom</h3>
      <p>If you are located in the EEA or UK, the following additional provisions apply:</p>
      <p><strong>Legal Basis for Processing:</strong> We process your personal data based on:</p>
      <ul>
        <li>Contract performance (to provide our Service)</li>
        <li>Legal obligations (compliance with laws)</li>
        <li>Legitimate interests (security, fraud prevention, service improvement)</li>
        <li>Your consent (marketing communications)</li>
      </ul>
      <p><strong>Data Protection Officer:</strong> For privacy-related inquiries, contact us at <a href="mailto:dpo@viperroyale.com">dpo@viperroyale.com</a>.</p>
      <p><strong>Supervisory Authority:</strong> You have the right to lodge a complaint with your local data protection supervisory authority.</p>

      <h3>15.2 California Residents (CCPA)</h3>
      <p>California residents have additional rights under the California Consumer Privacy Act (CCPA):</p>
      <ul>
        <li><strong>Right to Know:</strong> Request information about the categories and specific pieces of personal information we collect, use, and disclose.</li>
        <li><strong>Right to Delete:</strong> Request deletion of your personal information.</li>
        <li><strong>Right to Opt-Out:</strong> We do not sell personal information.</li>
        <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your rights.</li>
      </ul>
      <p>To exercise your rights, contact us at <a href="mailto:privacy@viperroyale.com">privacy@viperroyale.com</a> or submit a request through our Service.</p>

      <h3>15.3 Brazil (LGPD)</h3>
      <p>If you are located in Brazil, the Lei Geral de Protecao de Dados (LGPD) grants you similar rights regarding access, correction, deletion, and portability of your personal data. Contact us to exercise these rights.</p>
    </div>

    <div class="privacy-section privacy-footer-section">
      <p>This Privacy Policy constitutes the entire agreement between you and Viper Royale regarding the collection and use of your personal information in connection with the Service.</p>
    </div>
  `}class _i{constructor(){this.container=null,this.onCloseCallback=null}open(e){this.onCloseCallback=e,this.render(),this.attachListeners(),document.body.style.overflow="hidden"}close(){this.container&&(this.container.classList.add("closing"),setTimeout(()=>{this.container.remove(),this.container=null,document.body.style.overflow="",this.onCloseCallback&&this.onCloseCallback()},300))}render(){const e=document.querySelector(".privacy-modal");e&&e.remove(),this.container=document.createElement("div"),this.container.className="privacy-modal",this.container.innerHTML=this.getHTML(),document.body.appendChild(this.container)}getHTML(){return`
      <div class="privacy-modal-overlay"></div>
      <div class="privacy-modal-container">
        <div class="privacy-modal-header">
          <h2 class="privacy-modal-title">${a("legal.privacy_title")}</h2>
          <button class="privacy-modal-close" aria-label="${a("common.close")}">&times;</button>
        </div>
        <div class="privacy-modal-content">
          ${he()!=="en"?`<p class="privacy-modal-notice privacy-date">${a("legal.english_only_notice")}</p>`:""}
          ${this.getPrivacyContent()}
        </div>
      </div>
    `}getPrivacyContent(){return An()}attachListeners(){if(!this.container)return;this.container.querySelector(".privacy-modal-close")?.addEventListener("click",()=>this.close()),this.container.querySelector(".privacy-modal-overlay")?.addEventListener("click",()=>this.close()),this.handleEscape=s=>{s.key==="Escape"&&(this.close(),document.removeEventListener("keydown",this.handleEscape))},document.addEventListener("keydown",this.handleEscape)}}const wi=new _i;function Mn(){return`
    <div class="terms-section terms-header-section">
      <h1>Terms of Service</h1>
      <p class="terms-subtitle">Viper Royale</p>
      <p class="terms-date">Last Updated: January 16, 2025</p>
    </div>

    <div class="terms-section">
      <h2>1. Agreement to Terms</h2>
      <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("you," "your," or "Player") and Viper Royale ("we," "us," "our," or "Company") governing your access to and use of the Viper Royale platform, including our website, mobile applications, and all related services (collectively, the "Service").</p>
      <p class="terms-important">BY CREATING AN ACCOUNT, DEPOSITING FUNDS, OR OTHERWISE USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT ACCESS OR USE THE SERVICE.</p>
      <p>We reserve the right to modify these Terms at any time. Material changes will be communicated through the Service or via email. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.</p>
    </div>

    <div class="terms-section">
      <h2>2. Eligibility</h2>

      <h3>2.1 Age Requirement</h3>
      <p>You must be at least 18 years of age (or the age of majority in your jurisdiction, whichever is higher) to use the Service. By using the Service, you represent and warrant that you meet this age requirement.</p>

      <h3>2.2 Geographic Restrictions</h3>
      <p>The Service is only available in jurisdictions where online skill-based gaming for real money is legal. You are solely responsible for determining whether your use of the Service is lawful in your jurisdiction.</p>
      <p>The Service is NOT available to residents of:</p>
      <ul>
        <li>Jurisdictions where online gaming is prohibited by law</li>
        <li>Any region where we have determined that operation is not permitted</li>
        <li>Sanctioned countries or territories</li>
      </ul>
      <p>We use geolocation technology to verify your location. Attempting to circumvent geographic restrictions (e.g., using VPNs) is a violation of these Terms and grounds for immediate account termination and forfeiture of funds.</p>

      <h3>2.3 Restricted Persons</h3>
      <p>You may not use the Service if you:</p>
      <ul>
        <li>Are an employee, contractor, or affiliate of Viper Royale or immediate family member thereof</li>
        <li>Have been previously banned or had an account terminated</li>
        <li>Are a politically exposed person (PEP) in certain jurisdictions</li>
        <li>Are on any government sanctions list</li>
      </ul>

      <h3>2.4 One Account Per Person</h3>
      <p>You may maintain only one (1) account on Viper Royale. Creating multiple accounts ("multi-accounting") is strictly prohibited and will result in termination of all accounts and forfeiture of all balances.</p>
    </div>

    <div class="terms-section">
      <h2>3. Nature of the Service</h2>

      <h3>3.1 Skill-Based Gaming</h3>
      <p>Viper Royale is a skill-based gaming platform where players compete against each other in real-time multiplayer games. The outcome of each match is determined predominantly by the players' skill, strategy, reflexes, and decision-making abilities—not by chance or luck.</p>

      <h3>3.2 Not Gambling</h3>
      <p>We distinguish our Service from gambling as follows:</p>
      <ul>
        <li>Game outcomes are determined by player skill and performance</li>
        <li>Players compete directly against other human players</li>
        <li>There is no "house edge" based on random chance</li>
        <li>Success depends on practice, improvement, and competitive ability</li>
      </ul>
      <p>However, regulatory definitions vary by jurisdiction. You acknowledge that you have verified the legality of participating in skill-based competitions for money in your location.</p>

      <h3>3.3 Real-Money Competition</h3>
      <p>Players may participate in matches for real money (denominated in USDC or other supported currencies/cryptocurrencies). By participating in paid matches, you acknowledge and accept the risk of losing your entry fees.</p>
    </div>

    <div class="terms-section">
      <h2>4. Account Registration and Security</h2>

      <h3>4.1 Account Creation</h3>
      <p>To use certain features of the Service, you must create an account by providing accurate, current, and complete information. You agree to update your information to keep it accurate and current.</p>

      <h3>4.2 Identity Verification (KYC)</h3>
      <p>We may require identity verification at any time, including but not limited to:</p>
      <ul>
        <li>Before processing withdrawals</li>
        <li>When deposits or activity exceed certain thresholds</li>
        <li>When required by law or for fraud prevention</li>
      </ul>
      <p>Verification may include providing government-issued identification, proof of address, source of funds documentation, and photographs. Failure to complete verification may result in account restrictions or termination.</p>

      <h3>4.3 Account Security</h3>
      <p>You are responsible for:</p>
      <ul>
        <li>Maintaining the confidentiality of your login credentials</li>
        <li>All activity that occurs under your account</li>
        <li>Immediately notifying us of any unauthorized access</li>
      </ul>
      <p>We will never ask for your password, private keys, or seed phrases. Do not share this information with anyone.</p>

      <h3>4.4 Account Credentials</h3>
      <p>Your username must not:</p>
      <ul>
        <li>Impersonate another person or entity</li>
        <li>Contain offensive, discriminatory, or inappropriate language</li>
        <li>Infringe on any trademark or intellectual property</li>
        <li>Violate any applicable laws</li>
      </ul>
      <p>We reserve the right to require you to change your username at our discretion.</p>
    </div>

    <div class="terms-section">
      <h2>5. Deposits, Balances, and Withdrawals</h2>

      <h3>5.1 Supported Currencies</h3>
      <p>Viper Royale currently supports the following deposit and withdrawal methods:</p>
      <ul>
        <li>TON and USDT TON on the TON blockchain (available via Telegram)</li>
        <li>USDC and SOL on the Solana blockchain</li>
        <li>Fiat currency via credit and debit card payments in supported currencies</li>
      </ul>
      <p>Additional cryptocurrencies or payment methods may be added from time to time.</p>

      <h3>5.2 Deposits</h3>
      <ul>
        <li>Deposits are credited to your account after the required number of blockchain confirmations</li>
        <li>You are responsible for sending funds to the correct wallet address and network</li>
        <li>Funds sent to incorrect addresses or incompatible networks may be permanently lost and cannot be recovered</li>
        <li>Minimum and maximum deposit limits may apply</li>
      </ul>

      <h3>5.3 Account Balance</h3>
      <p>Your account balance represents funds available for gameplay. Balances are displayed in USD equivalent. We reserve the right to:</p>
      <ul>
        <li>Place holds on suspicious deposits pending verification</li>
        <li>Reverse deposits that fail to clear or are found to be fraudulent</li>
        <li>Adjust balances due to technical errors in our favor or yours</li>
      </ul>

      <h3>5.4 Withdrawals</h3>
      <ul>
        <li>Withdrawals are processed to the cryptocurrency wallet address you provide</li>
        <li>Minimum withdrawal amounts may apply</li>
        <li>Withdrawal requests are typically processed within 24-72 hours, though delays may occur due to verification requirements, security reviews, or technical issues</li>
        <li>You are solely responsible for providing the correct withdrawal address; funds sent to incorrect addresses cannot be recovered</li>
        <li>We reserve the right to request additional verification before processing withdrawals</li>
      </ul>

      <h3>5.5 Wagering Requirement for Fiat Deposits</h3>
      <p>All deposits made via credit card, debit card, or any fiat payment method are subject to a wagering requirement before withdrawal can be requested.</p>
      <p>Before requesting a withdrawal, you must wager an amount equal to 100% (1x) of your total deposited amount. For example, if you deposit $10.00, you must place wagers totalling $10.00 before a withdrawal request will be approved.</p>
      <p>This requirement applies to the total value of each fiat deposit made to your account. Wagering is tracked cumulatively across all games played on the platform. Each entry fee paid to join a game counts in full toward your wagering requirement.</p>
      <p>Withdrawals will remain locked until the wagering requirement is met. You can monitor your wagering progress in your account dashboard at any time.</p>
      <p>This requirement exists to ensure the fair and responsible use of the platform and to prevent misuse of funds. It applies to all users regardless of whether a bonus has been claimed.</p>
      <p>Cryptocurrency deposits are not subject to this wagering requirement.</p>

      <h3>5.6 Wagering Requirement for Non-Depositors</h3>
      <p>Users who have not made any deposit and hold a total account balance of less than $5.00 are subject to a wagering requirement on withdrawals exceeding $5.00.</p>
      <p>Before requesting a withdrawal above $5.00, you must wager an amount equal to 500% (5x) of the requested withdrawal amount. For example, if you wish to withdraw $10.00, you must place wagers totalling $50.00 before the withdrawal request will be approved.</p>
      <p>Only wagers placed using your real bonus balance count toward fulfilling this requirement. Entry fees paid using tickets or any other non-cash promotional credits do not contribute to wagering progress.</p>
      <p>This requirement exists to prevent abuse of promotional offers and to ensure the integrity of the platform's reward systems.</p>

      <h3>5.7 Fees</h3>
      <ul>
        <li><strong>Platform Fee (Rake):</strong> We charge a service fee of up to 15% on match entry fees, deducted from the prize pool</li>
        <li><strong>Withdrawal Fees:</strong> Blockchain network fees (gas fees) are your responsibility and will be deducted from withdrawal amounts or charged separately</li>
        <li><strong>Other Fees:</strong> Additional fees may apply as disclosed in the Service</li>
      </ul>

      <h3>5.8 Taxes</h3>
      <p>You are solely responsible for determining and paying any taxes applicable to your winnings. We may provide transaction history to assist with your tax obligations but do not provide tax advice. Consult a qualified tax professional.</p>
    </div>

    <div class="terms-section">
      <h2>6. Gameplay Rules</h2>

      <h3>6.1 Match Entry</h3>
      <p>By entering a match with an entry fee, you agree to:</p>
      <ul>
        <li>Pay the required entry fee from your available balance</li>
        <li>Abide by all game rules and fair play policies</li>
        <li>Accept the match outcome as determined by our systems</li>
      </ul>
      <p>Entry fees are non-refundable once a match has started, except in cases of verified technical failure on our part.</p>

      <h3>6.2 Match Outcomes</h3>
      <p>Match outcomes are determined by our game servers based on player performance data. All decisions regarding match outcomes are final. In the event of a dispute, our server logs and data are the authoritative record.</p>

      <h3>6.3 Disconnections and Technical Issues</h3>
      <ul>
        <li>If you disconnect during a match, the game will continue; you are responsible for maintaining a stable internet connection</li>
        <li>We are not liable for losses due to your hardware, software, or internet connectivity issues</li>
        <li>In the event of a server-side technical failure affecting match integrity, we may void the match and refund entry fees at our discretion</li>
      </ul>

      <h3>6.4 Matchmaking</h3>
      <p>Our matchmaking system aims to pair players of similar skill levels when possible. However, we do not guarantee evenly matched opponents, and players of varying skill levels may be matched together, especially during periods of lower player activity.</p>

      <h3>6.5 Rake and Prize Distribution</h3>
      <ul>
        <li>Entry fees are collected from all participants</li>
        <li>A platform fee (rake) is deducted from the total prize pool</li>
        <li>The remaining prize pool is distributed to winners according to the match format and payout structure displayed before entry</li>
      </ul>
    </div>

    <div class="terms-section">
      <h2>7. Prohibited Conduct</h2>
      <p>You agree NOT to:</p>

      <h3>7.1 Cheating and Exploitation</h3>
      <ul>
        <li>Use any hacks, bots, scripts, macros, or automated tools</li>
        <li>Exploit bugs, glitches, or vulnerabilities in the game or platform</li>
        <li>Use modified game clients or third-party software that provides unfair advantages</li>
        <li>Engage in any form of cheating or manipulation</li>
      </ul>

      <h3>7.2 Collusion and Match-Fixing</h3>
      <ul>
        <li>Coordinate with other players to manipulate match outcomes</li>
        <li>Engage in "chip dumping" or intentionally losing matches</li>
        <li>Share accounts or allow others to play on your behalf</li>
        <li>Participate in any form of match-fixing</li>
      </ul>

      <h3>7.3 Multi-Accounting and Identity Fraud</h3>
      <ul>
        <li>Create or operate multiple accounts</li>
        <li>Use false identity information</li>
        <li>Access another person's account without authorization</li>
        <li>Circumvent account bans or restrictions</li>
      </ul>

      <h3>7.4 Financial Misconduct</h3>
      <ul>
        <li>Use funds from illegal sources</li>
        <li>Engage in money laundering or structuring</li>
        <li>Initiate chargebacks, payment reversals, or fraud</li>
        <li>Abuse bonuses or promotional offers</li>
      </ul>

      <h3>7.5 Platform Abuse</h3>
      <ul>
        <li>Attempt to hack, disrupt, or interfere with the Service</li>
        <li>Reverse-engineer, decompile, or disassemble any part of the Service</li>
        <li>Scrape data or use automated systems to access the Service</li>
        <li>Harass, threaten, or abuse other players or staff</li>
        <li>Circumvent geographic restrictions</li>
      </ul>

      <h3>7.6 Legal Violations</h3>
      <ul>
        <li>Violate any applicable laws or regulations</li>
        <li>Infringe on intellectual property rights</li>
        <li>Engage in any activity that exposes us to legal liability</li>
      </ul>

      <p class="terms-warning">Violation of these prohibitions may result in immediate account termination, forfeiture of funds, and potential legal action.</p>
    </div>

    <div class="terms-section">
      <h2>8. Fair Play and Anti-Cheat</h2>

      <h3>8.1 Monitoring</h3>
      <p>We employ various systems to detect cheating, collusion, and abuse, including:</p>
      <ul>
        <li>Automated pattern detection</li>
        <li>Statistical analysis of gameplay</li>
        <li>Manual review by security personnel</li>
        <li>Community reports</li>
      </ul>

      <h3>8.2 Investigations</h3>
      <p>We reserve the right to investigate any suspicious activity. During investigations, we may:</p>
      <ul>
        <li>Temporarily suspend your account</li>
        <li>Place holds on your balance</li>
        <li>Request additional information or verification</li>
      </ul>

      <h3>8.3 Penalties</h3>
      <p>Violations may result in:</p>
      <ul>
        <li>Warnings</li>
        <li>Temporary suspension</li>
        <li>Permanent account termination</li>
        <li>Forfeiture of account balance</li>
        <li>Reversal of fraudulent transactions</li>
        <li>Legal action</li>
      </ul>
      <p>All decisions regarding violations are made at our sole discretion and are final.</p>
    </div>

    <div class="terms-section">
      <h2>9. Intellectual Property</h2>

      <h3>9.1 Our Property</h3>
      <p>The Service, including all content, features, functionality, graphics, logos, designs, software, and trademarks, is owned by Viper Royale or our licensors and is protected by intellectual property laws.</p>
      <p>You are granted a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial purposes in accordance with these Terms.</p>

      <h3>9.2 Restrictions</h3>
      <p>You may not:</p>
      <ul>
        <li>Copy, modify, or distribute any part of the Service</li>
        <li>Use our trademarks or branding without written permission</li>
        <li>Create derivative works based on the Service</li>
        <li>Use the Service for any commercial purpose without authorization</li>
      </ul>

      <h3>9.3 User Content</h3>
      <p>By submitting content to the Service (including usernames, avatars, chat messages, and feedback), you grant us a worldwide, royalty-free, perpetual license to use, display, and distribute such content in connection with the Service.</p>
    </div>

    <div class="terms-section">
      <h2>10. Disclaimers</h2>

      <h3>10.1 "As Is" Basis</h3>
      <p class="terms-important">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE.</p>

      <h3>10.2 No Guarantee of Winnings</h3>
      <p>We do not guarantee that you will win any matches or money. Skill-based gaming involves the risk of loss. Only wager amounts you can afford to lose.</p>

      <h3>10.3 Third-Party Services</h3>
      <p>We are not responsible for third-party services, including cryptocurrency networks, wallet providers, or payment processors. Blockchain transactions are irreversible; we are not liable for funds lost due to user error or third-party failures.</p>

      <h3>10.4 Technical Issues</h3>
      <p>We do not guarantee uninterrupted or error-free operation. We are not responsible for losses due to server downtime, technical failures, or maintenance.</p>
    </div>

    <div class="terms-section">
      <h2>11. Limitation of Liability</h2>

      <h3>11.1 Cap on Liability</h3>
      <p class="terms-important">TO THE MAXIMUM EXTENT PERMITTED BY LAW, VIPER ROYALE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, REGARDLESS OF THE CAUSE OF ACTION OR WHETHER WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
      <p>OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATING TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE GREATER OF:</p>
      <ul>
        <li>THE AMOUNT YOU DEPOSITED IN THE 12 MONTHS PRECEDING THE CLAIM, OR</li>
        <li>ONE HUNDRED US DOLLARS ($100)</li>
      </ul>

      <h3>11.2 Essential Purpose</h3>
      <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IN SUCH JURISDICTIONS, OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.</p>
    </div>

    <div class="terms-section">
      <h2>12. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless Viper Royale and its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising from:</p>
      <ul>
        <li>Your use of the Service</li>
        <li>Your violation of these Terms</li>
        <li>Your violation of any third-party rights</li>
        <li>Your violation of any applicable laws</li>
        <li>Any content you submit to the Service</li>
      </ul>
    </div>

    <div class="terms-section">
      <h2>13. Dispute Resolution</h2>

      <h3>13.1 Informal Resolution</h3>
      <p>Before initiating formal dispute resolution, you agree to contact us at <a href="mailto:compliance@viperroyale.com">compliance@viperroyale.com</a> and attempt to resolve any dispute informally for at least 30 days.</p>

      <h3>13.2 Binding Arbitration</h3>
      <p>If informal resolution fails, any dispute, claim, or controversy arising from or relating to these Terms or the Service shall be resolved by binding arbitration rather than in court, except that you may assert claims in small claims court if they qualify.</p>
      <p>Arbitration shall be conducted by a mutually agreed-upon arbitration provider under its applicable rules. The arbitration shall be conducted in English. The arbitrator's decision shall be final and binding.</p>

      <h3>13.3 Class Action Waiver</h3>
      <p class="terms-important">YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. If this class action waiver is found unenforceable, then the entirety of this arbitration provision shall be null and void.</p>

      <h3>13.4 Exceptions</h3>
      <p>This arbitration agreement does not preclude you from bringing issues to the attention of regulatory agencies. Nothing in these Terms prevents either party from seeking injunctive relief in court for intellectual property infringement or other urgent matters.</p>
    </div>

    <div class="terms-section">
      <h2>14. Account Termination</h2>

      <h3>14.1 Termination by You</h3>
      <p>You may close your account at any time by:</p>
      <ul>
        <li>Withdrawing your available balance (subject to verification and wagering requirements)</li>
        <li>Contacting support to request account closure</li>
      </ul>

      <h3>14.2 Termination by Us</h3>
      <p>We may suspend or terminate your account immediately, without notice, for any reason, including but not limited to:</p>
      <ul>
        <li>Violation of these Terms</li>
        <li>Suspected fraud, cheating, or abuse</li>
        <li>Failure to complete identity verification</li>
        <li>Inactivity for an extended period</li>
        <li>Legal or regulatory requirements</li>
        <li>Business reasons at our discretion</li>
      </ul>

      <h3>14.3 Effect of Termination</h3>
      <p>Upon termination:</p>
      <ul>
        <li>Your right to access the Service ceases immediately</li>
        <li>Pending matches may be voided</li>
        <li>If terminated for cause, your balance may be forfeited</li>
        <li>If terminated without cause, you may withdraw your available balance subject to verification</li>
        <li>Provisions of these Terms that by their nature should survive (including disclaimers, limitations of liability, and dispute resolution) shall survive termination</li>
      </ul>

      <h3>14.4 Dormant Accounts</h3>
      <p>Accounts with no login activity for 12 consecutive months may be classified as dormant. We may charge a monthly maintenance fee on dormant accounts until the balance reaches zero, or close the account in accordance with applicable law.</p>
    </div>

    <div class="terms-section">
      <h2>15. Responsible Gaming</h2>

      <h3>15.1 Acknowledgment of Risk</h3>
      <p>You acknowledge that skill-based gaming for real money carries financial risk. You should only participate with funds you can afford to lose.</p>

      <h3>15.2 Self-Exclusion</h3>
      <p>If you feel you need a break from gaming, you may request a temporary or permanent self-exclusion by contacting support. During self-exclusion:</p>
      <ul>
        <li>You will be unable to access your account or participate in matches</li>
        <li>Requests for early removal from self-exclusion will generally not be granted</li>
      </ul>

      <h3>15.3 Deposit Limits</h3>
      <p>You may set personal deposit limits through your account settings. We encourage responsible gaming and may impose limits at our discretion.</p>

      <h3>15.4 Support Resources</h3>
      <p>If you or someone you know has a gaming problem, resources are available:</p>
      <ul>
        <li>National Council on Problem Gambling (US): 1-800-522-4700</li>
        <li>GamCare (UK): 0808-8020-133</li>
        <li>Gamblers Anonymous: <a href="https://www.gamblersanonymous.org" target="_blank" rel="noopener noreferrer">www.gamblersanonymous.org</a></li>
      </ul>
    </div>

    <div class="terms-section">
      <h2>16. Communications</h2>

      <h3>16.1 Electronic Communications</h3>
      <p>By using the Service, you consent to receive electronic communications from us, including:</p>
      <ul>
        <li>Account notifications</li>
        <li>Transaction confirmations</li>
        <li>Service updates and announcements</li>
        <li>Marketing communications (where you have opted in)</li>
      </ul>

      <h3>16.2 Notification Methods</h3>
      <p>We may communicate with you via:</p>
      <ul>
        <li>Email to the address on file</li>
        <li>In-app notifications</li>
        <li>Push notifications (if enabled)</li>
        <li>Announcements on our website or Telegram channels</li>
      </ul>

      <h3>16.3 Your Communications</h3>
      <p>You may contact us through our official support channels. We are not responsible for communications sent to unofficial channels.</p>
    </div>

    <div class="terms-section">
      <h2>17. General Provisions</h2>

      <h3>17.1 Governing Law</h3>
      <p>These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to conflict of law principles.</p>

      <h3>17.2 Severability</h3>
      <p>If any provision of these Terms is found unenforceable, the remaining provisions shall continue in full force and effect.</p>

      <h3>17.3 Entire Agreement</h3>
      <p>These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Viper Royale regarding the Service.</p>

      <h3>17.4 Waiver</h3>
      <p>Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or our right to enforce it later.</p>

      <h3>17.5 Assignment</h3>
      <p>You may not assign or transfer your rights under these Terms. We may assign our rights and obligations without restriction.</p>

      <h3>17.6 Force Majeure</h3>
      <p>We are not liable for any failure to perform due to circumstances beyond our reasonable control, including natural disasters, war, terrorism, labor disputes, government actions, network failures, or blockchain congestion.</p>

      <h3>17.7 Headings</h3>
      <p>Section headings are for convenience only and do not affect interpretation.</p>
    </div>

    <div class="terms-section">
      <h2>18. Contact Information</h2>
      <p>For questions, concerns, or support:</p>
      <div class="contact-info">
        <p><strong>Viper Royale</strong></p>
        <p>General Support: <a href="mailto:support@viperroyale.com">support@viperroyale.com</a></p>
        <p>Compliance & Legal: <a href="mailto:compliance@viperroyale.com">compliance@viperroyale.com</a></p>
        <p>Telegram: <a href="https://t.me/viper_royale" target="_blank" rel="noopener noreferrer">t.me/viper_royale</a></p>
        <p>Website: <a href="https://viperroyale.com" target="_blank" rel="noopener noreferrer">viperroyale.com</a></p>
      </div>
    </div>

    <div class="terms-section">
      <h2>19. Acknowledgment</h2>
      <p class="terms-important">BY USING VIPER ROYALE, YOU ACKNOWLEDGE THAT:</p>
      <ul>
        <li>You have read and understood these Terms of Service</li>
        <li>You meet all eligibility requirements</li>
        <li>Skill-based gaming involves financial risk, and you may lose money</li>
        <li>You are solely responsible for compliance with laws in your jurisdiction</li>
        <li>You agree to be bound by these Terms and all applicable policies</li>
      </ul>
    </div>

    <div class="terms-section terms-footer-section">
      <p>Thank you for choosing Viper Royale. Play skillfully and responsibly.</p>
    </div>
  `}class ki{constructor(){this.container=null,this.onCloseCallback=null}open(e){this.onCloseCallback=e,this.render(),this.attachListeners(),document.body.style.overflow="hidden"}close(){this.container&&(this.container.classList.add("closing"),setTimeout(()=>{this.container.remove(),this.container=null,document.body.style.overflow="",this.onCloseCallback&&this.onCloseCallback()},300))}render(){const e=document.querySelector(".terms-modal");e&&e.remove(),this.container=document.createElement("div"),this.container.className="terms-modal",this.container.innerHTML=this.getHTML(),document.body.appendChild(this.container)}getHTML(){return`
      <div class="terms-modal-overlay"></div>
      <div class="terms-modal-container">
        <div class="terms-modal-header">
          <h2 class="terms-modal-title">${a("legal.terms_title")}</h2>
          <button class="terms-modal-close" aria-label="${a("common.close")}">&times;</button>
        </div>
        <div class="terms-modal-content">
          ${he()!=="en"?`<p class="terms-modal-notice terms-date">${a("legal.english_only_notice")}</p>`:""}
          ${this.getTermsContent()}
        </div>
      </div>
    `}getTermsContent(){return Mn()}attachListeners(){if(!this.container)return;this.container.querySelector(".terms-modal-close")?.addEventListener("click",()=>this.close()),this.container.querySelector(".terms-modal-overlay")?.addEventListener("click",()=>this.close()),this.handleEscape=s=>{s.key==="Escape"&&(this.close(),document.removeEventListener("keydown",this.handleEscape))},document.addEventListener("keydown",this.handleEscape)}}const In=new ki,ce={gamepad:'<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 17.5C20 21 23.9486 18.4151 23 15C21.5753 9.87113 20.8001 7.01556 20.3969 5.50793C20.1597 4.62136 19.3562 4 18.4384 4L5.56155 4C4.64382 4 3.844 4.62481 3.62085 5.515C2.7815 8.86349 2.0326 11.8016 1.14415 15C0.195501 18.4151 4.14415 21 6.64415 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 8.5L18.0111 8.51" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.49 7L16.5011 7.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.49 10L16.5011 10.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 8.5L15.0111 8.51" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 7V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M5.5 8.5H8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16C9.10457 16 10 15.1046 10 14C10 12.8954 9.10457 12 8 12C6.89543 12 6 12.8954 6 14C6 15.1046 6.89543 16 8 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 16C17.1046 16 18 15.1046 18 14C18 12.8954 17.1046 12 16 12C14.8954 12 14 12.8954 14 14C14 15.1046 14.8954 16 16 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',gift:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4 7H2.6C2.26863 7 2 7.26863 2 7.6V11.4C2 11.7314 2.26863 12 2.6 12H21.4C21.7314 12 22 11.7314 22 11.4V7.6C22 7.26863 21.7314 7 21.4 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',trophy:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.74534 4H17.3132C17.3132 4 16.4326 17.2571 12.0293 17.2571C9.87826 17.2571 8.56786 14.0935 7.79011 10.8571C6.97574 7.46844 6.74534 4 6.74534 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.3132 4C17.3132 4 18.2344 3.01733 19 2.99999C20.5 2.96603 20.7773 4 20.7773 4C21.0709 4.60953 21.3057 6.19429 19.8967 7.65715C18.4876 9.12 16.9103 10.4 16.2684 10.8571" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.74527 4.00001C6.74527 4.00001 5.78547 3.00614 4.99995 3.00001C3.49995 2.9883 3.22264 4.00001 3.22264 4.00001C2.92908 4.60953 2.69424 6.19429 4.1033 7.65715C5.51235 9.12001 7.14823 10.4 7.79004 10.8572" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.50662 20C8.50662 18.1714 12.0292 17.2571 12.0292 17.2571C12.0292 17.2571 15.5519 18.1714 15.5519 20H8.50662Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',alertTriangle:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0429 21H3.95705C2.41902 21 1.45658 19.3364 2.22324 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z" stroke="currentColor" stroke-linecap="round"/><path d="M12 9V13" stroke="currentColor" stroke-linecap="round"/><path d="M12 17.01L12.01 16.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',ticket:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7.5V5.5C4 4.94772 4.44772 4.5 5 4.5H19C19.5523 4.5 20 4.94772 20 5.5V7.5M4 7.5C5.38071 7.5 6.5 8.61929 6.5 10C6.5 11.3807 5.38071 12.5 4 12.5M4 7.5H4.5M20 7.5C18.6193 7.5 17.5 8.61929 17.5 10C17.5 11.3807 18.6193 12.5 20 12.5M20 7.5H19.5M4 12.5V14.5C4 15.0523 4.44772 15.5 5 15.5H19C19.5523 15.5 20 15.0523 20 14.5V12.5M4 12.5H4.5M20 12.5H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 8.5V11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'};class Si{constructor(){this.container=null,this.state="loading",this.activeTab="available",this.promos={available:[],claimed:[]},this.promoCode="",this.promoCodeState="idle",this.promoCodeMessage="",this.onClose=null,this.handleEscape=null,this.wasSuccess=!1,this.ticketTimerInterval=null,this.handleLocaleChange=null}open(e){this.container||(this.onClose=e,this.state="loading",this.activeTab="available",this.promoCode="",this.promoCodeState="idle",this.promoCodeMessage="",this.wasSuccess=!1,this.render(),this.attachListeners(),this.fetchPromos(),this.startTicketTimers(),document.body.style.overflow="hidden",this.handleLocaleChange=()=>{this.container&&(this.render(),this.attachListeners())},q(this.handleLocaleChange))}close(){this.container&&(this.stopTicketTimers(),this.handleEscape&&(document.removeEventListener("keydown",this.handleEscape),this.handleEscape=null),this.handleLocaleChange&&(ns(this.handleLocaleChange),this.handleLocaleChange=null),this.container.classList.add("closing"),setTimeout(()=>{this.container&&(this.container.remove(),this.container=null),document.body.style.overflow="",this.onClose&&this.onClose(this.wasSuccess)},300))}async fetchPromos(){this.promos={available:[],claimed:[]},this.state="loaded",this.updateContent()}switchTab(e){e!==this.activeTab&&(this.activeTab=e,this.updateContent())}render(){const e=document.querySelector(".promotions-panel");e&&e.remove(),this.container=document.createElement("div"),this.container.className="promotions-panel",this.container.innerHTML=this.getHTML(),document.body.appendChild(this.container)}getHTML(){return`
      <div class="promotions-panel-overlay"></div>
      <div class="promotions-panel-container">
        ${this.getHeaderHTML()}
        ${this.getTabsHTML()}
        <div class="promotions-panel-content">
          ${this.getContentHTML()}
        </div>
        ${this.getPromoCodeHTML()}
      </div>
    `}getHeaderHTML(){return`
      <div class="promotions-panel-header">
        <button class="promotions-panel-close" aria-label="${a("common.close")}">&times;</button>
        <h2 class="promotions-panel-title">${a("promo.panel_title")}</h2>
        <p class="promotions-panel-subtitle">${a("promo.panel_subtitle")}</p>
      </div>
    `}getTabsHTML(){const e=this.promos.available?.length||0;return`
      <div class="promotions-panel-tabs">
        <button class="promotions-tab ${this.activeTab==="available"?"active":""}" data-tab="available">
          ${e>0?a("promo.tab_available_count",{count:e}):a("promo.tab_available")}
        </button>
        <button class="promotions-tab ${this.activeTab==="claimed"?"active":""}" data-tab="claimed">
          ${a("promo.tab_history")}
        </button>
      </div>
    `}getContentHTML(){if(this.state==="loading")return this.getLoadingHTML();if(this.state==="error")return this.getErrorHTML();const e=this.activeTab==="available"?this.getTicketsHTML():"",t=this.activeTab==="available"?this.promos.available:this.promos.claimed;let s="";return t&&t.length>0&&(s=`
        <div class="promos-section-header">
          <span class="section-icon promo-icon-svg" style="color: rgba(234, 242, 255, 0.5)">${ce.gift}</span>
          <span class="section-title">${a("promo.section_promo_codes")}</span>
        </div>
        <div class="promo-cards-list">
          ${t.map(n=>this.getPromoCardHTML(n)).join("")}
        </div>
      `),!e&&(!t||t.length===0)?this.getEmptyHTML():e+s}getPromoCardHTML(e){const t=this.getIconHTML(e.icon,e.iconColor),s=e.badge?`<span class="promo-card-badge badge-${e.badge.toLowerCase()}">${f(e.badge)}</span>`:"",n=e.expiresIn?`<span class="promo-card-expiry">${a("promo.expires_in",{time:f(e.expiresIn)})}</span>`:e.claimedAt?`<span class="promo-card-expiry">${a("promo.claimed_at",{date:f(e.claimedAt)})}</span>`:"",r=e.ctaText?`<button class="promo-card-cta" data-promo-id="${f(e.id)}">${f(e.ctaText)}</button>`:"";return`
      <div class="promo-card" data-promo-id="${f(e.id)}">
        <div class="promo-card-icon">${t}</div>
        <div class="promo-card-content">
          <div class="promo-card-header">
            <h3 class="promo-card-title">${f(e.title)}</h3>
            ${s}
          </div>
          <p class="promo-card-description">${f(e.description)}</p>
          <div class="promo-card-footer">
            <span class="promo-card-reward">${f(e.reward)}</span>
            ${n}
          </div>
        </div>
        ${r}
      </div>
    `}getIconHTML(e,t){return e?e.trim().startsWith("<svg")?`<span class="promo-icon-svg" ${t?`style="color: ${t}"`:""}>${e}</span>`:e.startsWith("http")||e.startsWith("/")||e.startsWith("data:")?`<img src="${f(e)}" alt="" />`:e:""}getLoadingHTML(){return`
      <div class="promos-loading">
        <div class="promos-spinner"></div>
        <p>${a("promo.loading_promotions")}</p>
      </div>
    `}getEmptyHTML(){const e=this.activeTab==="available"?a("promo.empty_available"):a("promo.empty_history"),t=this.activeTab==="available"?a("promo.empty_available_hint",{code:"LUXEYA2"}):a("promo.empty_history_hint");return`
      <div class="promos-empty">
        <span class="empty-icon promo-icon-svg" style="color: rgba(234, 242, 255, 0.4)">${ce.gift}</span>
        <p>${e}</p>
        <p class="empty-hint">${t}</p>
      </div>
    `}getErrorHTML(){return`
      <div class="promos-error">
        <span class="error-icon promo-icon-svg" style="color: #ffb400">${ce.alertTriangle}</span>
        <p>${a("promo.load_failed")}</p>
        <button class="retry-btn">${a("promo.try_again")}</button>
      </div>
    `}getTicketsHTML(){const e=h.state.tickets,t=h.state.freeEntries||[],s=!!e&&(e.arena&&e.arena.length>0||e.tournament&&e.tournament.length>0),n=t.length>0;if(!s&&!n)return"";const r=(e?.arena||[]).map(c=>this.getTicketCardHTML(c,"arena")).join(""),o=(e?.tournament||[]).map(c=>this.getTicketCardHTML(c,"tournament")).join(""),l=t.map(c=>this.getFreeEntryCardHTML(c)).join("");return`
      <div class="tickets-section">
        <div class="section-header">
          <span class="section-icon promo-icon-svg" style="color: rgba(234, 242, 255, 0.5)">${ce.ticket}</span>
          <span class="section-title">${a("promo.section_your_tickets")}</span>
        </div>
        ${r}
        ${o}
        ${l}
      </div>
      <div class="section-divider"></div>
    `}getTicketCardHTML(e,t){const s=t==="arena",n=s?ce.gamepad:ce.trophy,r=s?a("promo.ticket_arena"):a("promo.ticket_tournament"),o=s?a("promo.play_arena"):a("promo.view_tournaments"),l=s?"/arenas":"/tournaments",c=e.type==="permanent";let d="";if(c)d=`<span class="ticket-permanent-badge">${a("promo.ticket_permanent")}</span>`;else{const u=this.formatTimeRemaining(e.expires_at);d=`<span class="ticket-timer ${this.isTimerUrgent(e.expires_at)?"urgent":""}" data-expires="${e.expires_at}">${u}</span>`}return`
      <div class="ticket-card" data-type="${t}">
        <div class="ticket-card-icon promo-icon-svg">${n}</div>
        <div class="ticket-card-content">
          <div class="ticket-card-header">
            <span class="ticket-type">${r}</span>
            <span class="ticket-fee">${k(G()?O(Number(e.entry_fee),"pay"):H(e.entry_fee))}</span>
          </div>
          <div class="ticket-status">
            ${d}
          </div>
        </div>
        <button class="ticket-card-btn" data-route="${l}">${o}</button>
      </div>
    `}getFreeEntryCardHTML(e){const t=e.count||0;let s;if(e.soonestExpiry==null)s=`<span class="ticket-permanent-badge">${a("promo.ticket_permanent")}</span>`;else{const n=new Date(e.soonestExpiry).toISOString(),r=this.formatTimeRemaining(n);s=`<span class="ticket-timer ${this.isTimerUrgent(n)?"urgent":""}" data-expires="${n}">${r}</span>`}return`
      <div class="ticket-card" data-type="arena">
        <div class="ticket-card-icon promo-icon-svg">${ce.gamepad}</div>
        <div class="ticket-card-content">
          <div class="ticket-card-header">
            <span class="ticket-type">${a("promo.ticket_arena")}</span>
            ${t>1?`<span class="ticket-count">${a("promo.ticket_multiplier",{count:t})}</span>`:""}
            <span class="ticket-fee">${k(G()?O(Number(e.entryFee),"pay"):H(e.entryFee))}</span>
          </div>
          <div class="ticket-status">
            ${s}
          </div>
        </div>
        <button class="ticket-card-btn" data-route="/arenas">${a("promo.play_arena")}</button>
      </div>
    `}isTimerUrgent(e){if(!e)return!1;const t=new Date(e).getTime()-Date.now();return t>0&&t<24*60*60*1e3}formatTimeRemaining(e){if(!e)return"";const t=Date.now(),n=new Date(e).getTime()-t;if(n<=0)return a("promo.expired");const r=Math.floor(n/(1e3*60*60*24)),o=Math.floor(n%(1e3*60*60*24)/(1e3*60*60)),l=Math.floor(n%(1e3*60*60)/(1e3*60)),c=Math.floor(n%(1e3*60)/1e3);return r>0?a("promo.time_days_hours",{days:r,hours:o}):o>0?a("promo.time_hours_minutes",{hours:o,minutes:l}):a("promo.time_minutes_seconds",{minutes:l,seconds:c})}startTicketTimers(){this.stopTicketTimers(),this.ticketTimerInterval=setInterval(()=>{this.container?.querySelectorAll(".ticket-timer[data-expires]")?.forEach(t=>{const s=t.dataset.expires,n=this.formatTimeRemaining(s);t.textContent=n;const r=this.isTimerUrgent(s);t.classList.toggle("urgent",r)})},1e3)}stopTicketTimers(){this.ticketTimerInterval&&(clearInterval(this.ticketTimerInterval),this.ticketTimerInterval=null)}getPromoCodeHTML(){const e=this.promoCodeState==="loading",t=this.promoCodeMessage?`<div class="promo-code-message ${this.promoCodeState}">${f(this.promoCodeMessage)}</div>`:"";return`
      <div class="promo-code-section">
        <p class="promo-code-label">${a("promo.have_promo_code")}</p>
        <form class="promo-code-form">
          <input
            type="text"
            class="promo-code-input"
            placeholder="${a("promo.enter_code_placeholder")}"
            maxlength="50"
            autocapitalize="characters"
            value="${f(this.promoCode)}"
            ${e?"disabled":""}
          />
          <button
            type="submit"
            class="promo-code-submit"
            ${e||!this.promoCode.trim()?"disabled":""}
          >
            ${e?a("promo.apply_loading"):a("promo.apply")}
          </button>
        </form>
        ${t}
      </div>
    `}updateContent(){if(!this.container)return;const e=this.container.querySelector(".promotions-panel-tabs");e&&(e.outerHTML=this.getTabsHTML());const t=this.container.querySelector(".promotions-panel-content");t&&(t.innerHTML=this.getContentHTML()),this.attachListeners()}updatePromoCodeSection(){if(!this.container)return;const e=this.container.querySelector(".promo-code-section");e&&(e.outerHTML=this.getPromoCodeHTML()),this.attachListeners()}async handlePromoAction(e){const t=[...this.promos.available,...this.promos.claimed].find(s=>s.id===e);if(!(!t||!t.ctaAction))switch(t.ctaAction){case"claim_free_game":t.ctaParams,this.wasSuccess=!0,this.promos.available=this.promos.available.filter(s=>s.id!==e),this.updateContent();break;case"deposit":this.close(),C("/wallet");break;case"play_game":this.close(),t.ctaParams;break;default:t.ctaAction}}async handlePromoCodeSubmit(){const e=this.promoCode.trim();if(e){this.promoCodeState="loading",this.promoCodeMessage="",this.updatePromoCodeSection();try{const t=await En(e);t.success?(this.promoCodeState="success",this.promoCodeMessage=v("promo.redeem_success",Number(t.reward_value)||0),this.promoCode="",this.wasSuccess=!0,window.dispatchEvent(new CustomEvent("promoRedeemed",{detail:{rewardValue:t.reward_value}}))):(this.promoCodeState="error",this.promoCodeMessage=Ln(t.error))}catch{this.promoCodeState="error",this.promoCodeMessage=a("promo.network_error")}this.updatePromoCodeSection()}}attachListeners(){if(!this.container)return;this.container.querySelector(".promotions-panel-close")?.addEventListener("click",()=>this.close()),this.container.querySelector(".promotions-panel-overlay")?.addEventListener("click",()=>this.close()),this.container.querySelectorAll(".promotions-tab").forEach(d=>{d.addEventListener("click",()=>{const u=d.dataset.tab;u&&this.switchTab(u)})}),this.container.querySelectorAll(".promo-card-cta").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation();const p=d.dataset.promoId;p&&this.handlePromoAction(p)})}),this.container.querySelectorAll(".ticket-card-btn").forEach(d=>{d.addEventListener("click",u=>{u.stopPropagation();const p=d.dataset.route;p&&(this.close(),C(p))})}),this.container.querySelector(".retry-btn")?.addEventListener("click",()=>{this.state="loading",this.updateContent(),this.fetchPromos()}),this.container.querySelector(".promo-code-form")?.addEventListener("submit",d=>{d.preventDefault(),this.handlePromoCodeSubmit()}),this.container.querySelector(".promo-code-input")?.addEventListener("input",d=>{this.promoCode=d.target.value.toUpperCase(),d.target.value=this.promoCode;const u=this.container.querySelector(".promo-code-submit");u&&(u.disabled=!this.promoCode.trim()||this.promoCodeState==="loading")}),this.handleEscape||(this.handleEscape=d=>{d.key==="Escape"&&this.close()},document.addEventListener("keydown",this.handleEscape))}isOpen(){return this.container!==null}}const it=new Si;let He=null;function et(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function Ci(){if(!et())return 0;const i=navigator.userAgent.match(/OS (\d+)_/);return i?parseInt(i[1],10):0}function Se(){const i=window.matchMedia("(display-mode: standalone)").matches,e=navigator.standalone===!0,t=document.referrer.includes("android-app://");return i||e||t}function Ce(){if(A())return{supported:!1,reason:"Disabled in casino mode"};if(!("serviceWorker"in navigator))return{supported:!1,reason:"Service workers not supported"};if(!("PushManager"in window))return{supported:!1,reason:"PushManager not supported"};if(!("Notification"in window))return{supported:!1,reason:"Notifications not supported"};if(et()){if(Ci()<16)return{supported:!1,reason:"iOS 16.4+ required for push notifications"};if(!Se())return{supported:!1,reason:"Must be installed as PWA on iOS (Add to Home Screen)"}}return{supported:!0}}function rt(){return"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window}function ve(){return"Notification"in window?Notification.permission:"denied"}async function Ti(){if(!rt())return!1;try{return await(await navigator.serviceWorker.ready).pushManager.getSubscription()!==null}catch(i){return console.error("[Push] Error checking subscription:",i),!1}}async function ls(){try{const i=fn();if(!i)return null;const e=await fetch(`${re()}/push/status`,{headers:{Authorization:`Bearer ${i}`}});return e.ok?await e.json():(e.status,null)}catch(i){return console.error("[Push] Status check error:",i),null}}async function $i(){if(He)return He;try{const e=await(await fetch(`${re()}/push/vapid-key`)).json();return He=e.public_key||e.vapidKey||e.key,He}catch(i){return console.error("[Push] Failed to fetch VAPID key:",i),null}}function Ei(i){const e="=".repeat((4-i.length%4)%4),t=(i+e).replace(/-/g,"+").replace(/_/g,"/"),s=window.atob(t),n=new Uint8Array(s.length);for(let r=0;r<s.length;++r)n[r]=s.charCodeAt(r);return n}async function xe({force:i=!1}={}){const e=s=>console.log("[Push]",s);if(e("subscribeToPush called, force: "+i),A())return{success:!1,reason:"casino mode",step:"casino_mode"};if(!rt())return{success:!1,reason:"not supported",step:"support_check"};if(!i&&await Ti())return{success:!0,reason:"Already subscribed",step:"already_subscribed"};e("requesting permission...");let t;try{t=await Notification.requestPermission()}catch(s){return{success:!1,reason:"requestPermission threw: "+s.message,step:"permission_error"}}if(e("permission result: "+t),t!=="granted")return{success:!1,reason:"Permission: "+t,step:"permission_denied"};try{e("fetching VAPID key...");const s=await $i();if(!s)return{success:!1,reason:"VAPID key null — /push/vapid-key failed",step:"vapid_key"};e("VAPID key received"),e("waiting for service worker...");const n=await navigator.serviceWorker.ready;e("SW ready: "+n.scope),e("pushManager.subscribe...");const r=await n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ei(s)});e("push subscription obtained");const o=r.toJSON(),l=o.keys?.p256dh,c=o.keys?.auth;if(!l||!c)return{success:!1,reason:"Missing keys p256dh="+!!l+" auth="+!!c,step:"keys"};const d=fn();if(!d)return{success:!1,reason:"No session token",step:"auth_token"};e("sending to /push/subscribe...");const u=await fetch(`${re()}/push/subscribe`,{method:"POST",headers:{Authorization:`Bearer ${d}`,"Content-Type":"application/json"},body:JSON.stringify({endpoint:r.endpoint,p256dh:l,auth:c})});if(u.ok)return e("subscription saved to backend!"),{success:!0,step:"done"};{const p=await u.text().catch(()=>"");return e("backend error: "+u.status+" "+p),{success:!1,reason:"Backend "+u.status,step:"backend_error"}}}catch(s){return e("exception: "+s.message),{success:!1,reason:s.message,step:"exception"}}}const Li='<svg width="20" height="20" viewBox="0 0 24 24" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5 13L9 17L19 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>';class Ai{constructor(){this.container=null,this.handleEscape=null,this.onTitleTap=null}open({onTitleTap:e=null}={}){typeof document>"u"||(this.onTitleTap=e,!this.container&&(this.render(),this.attachListeners()))}close(){if(!this.container)return;this.handleEscape&&(document.removeEventListener("keydown",this.handleEscape),this.handleEscape=null);const e=this.container;this.container=null,e.classList.add("closing"),setTimeout(()=>e.remove(),200)}isOpen(){return this.container!==null}render(){document.querySelector(".language-picker")?.remove();const e=he(),t=$a.map(({tag:s,label:n,dir:r})=>`
      <li>
        <button type="button" class="language-picker-option${s===e?" selected":""}"
                data-locale="${s}" lang="${s}" dir="${r}"
                aria-pressed="${s===e?"true":"false"}">
          <span class="language-picker-label">${f(n)}</span>
          <span class="language-picker-check">${s===e?Li:""}</span>
        </button>
      </li>`).join("");this.container=document.createElement("div"),this.container.className="language-picker",this.container.innerHTML=`
      <div class="language-picker-overlay"></div>
      <div class="language-picker-sheet" role="dialog" aria-modal="true" aria-labelledby="language-picker-title">
        <div class="language-picker-header">
          <h2 id="language-picker-title">${f(a("app.choose_language"))}</h2>
          <button type="button" class="language-picker-close" aria-label="${f(a("common.close"))}">&times;</button>
        </div>
        <ul class="language-picker-list">${t}</ul>
      </div>
    `,document.body.appendChild(this.container)}attachListeners(){const e=this.container;e&&(e.querySelector(".language-picker-overlay")?.addEventListener("click",()=>this.close()),e.querySelector(".language-picker-close")?.addEventListener("click",()=>this.close()),e.querySelector("#language-picker-title")?.addEventListener("click",()=>{typeof this.onTitleTap=="function"&&this.onTitleTap()}),e.querySelectorAll(".language-picker-option").forEach(t=>{t.addEventListener("click",()=>this.choose(t.dataset.locale))}),this.handleEscape=t=>{t.key==="Escape"&&this.close()},document.addEventListener("keydown",this.handleEscape))}async choose(e){const t=await Ea(e,{source:"picker",persist:!0});return this.close(),t}}const ft=new Ai,_={wallet:'<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V18C21 19.1046 20.1046 20 19 20Z" stroke="currentColor"/><path d="M16.5 14C16.2239 14 16 13.7761 16 13.5C16 13.2239 16.2239 13 16.5 13C16.7761 13 17 13.2239 17 13.5C17 13.7761 16.7761 14 16.5 14Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 7V5.60322C18 4.28916 16.7544 3.33217 15.4847 3.67075L4.48467 6.60409C3.60917 6.83756 3 7.63046 3 8.53656V9" stroke="currentColor"/></svg>',gift:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21.4 7H2.6C2.26863 7 2 7.26863 2 7.6V11.4C2 11.7314 2.26863 12 2.6 12H21.4C21.7314 12 22 11.7314 22 11.4V7.6C22 7.26863 21.7314 7 21.4 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',soundOn:'<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13.8571V10.1429C1 9.03829 1.89543 8.14286 3 8.14286H5.9C6.09569 8.14286 6.28708 8.08544 6.45046 7.97772L12.4495 4.02228C13.1144 3.5839 14 4.06075 14 4.85714V19.1429C14 19.9392 13.1144 20.4161 12.4495 19.9777L6.45046 16.0223C6.28708 15.9146 6.09569 15.8571 5.9 15.8571H3C1.89543 15.8571 1 14.9617 1 13.8571Z" stroke="currentColor"/><path d="M17.5 7.5C17.5 7.5 19 9 19 11.5C19 14 17.5 15.5 17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 4.5C20.5 4.5 23 7 23 11.5C23 16 20.5 18.5 20.5 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',soundOff:'<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 14L20.0005 12M22 10L20.0005 12M20.0005 12L18 10M20.0005 12L22 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 13.8571V10.1429C2 9.03829 2.89543 8.14286 4 8.14286H6.9C7.09569 8.14286 7.28708 8.08544 7.45046 7.97772L13.4495 4.02228C14.1144 3.5839 15 4.06075 15 4.85714V19.1429C15 19.9392 14.1144 20.4161 13.4495 19.9777L7.45046 16.0223C7.28708 15.9146 7.09569 15.8571 6.9 15.8571H4C2.89543 15.8571 2 14.9617 2 13.8571Z" stroke="currentColor"/></svg>',sfxOn:'<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H5.5M10 6.5V17.5M7.5 9V15M12.5 3V21M15 8V16M17.5 5.5V18.5M20 9.5V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',sfxOff:'<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H5.5M10 6.5V17.5M7.5 9V15M12.5 3V21M15 8V16M17.5 5.5V18.5M20 9.5V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" opacity="0.35"/><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',headset:'<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11.4998L3.51493 11.6211C2.62459 11.8437 2 12.6436 2 13.5614V15.4382C2 16.356 2.62459 17.1559 3.51493 17.3785L5.25448 17.8134C5.63317 17.9081 6 17.6217 6 17.2313V11.7683C6 11.3779 5.63317 11.0915 5.25448 11.1862L4 11.4998ZM4 11.4998V11C4 6.58172 7.58172 3 12 3C16.4183 3 20 6.58172 20 11V11.4998M20 11.4998L20.4851 11.6211C21.3754 11.8437 22 12.6436 22 13.5614V15.4382C22 16.356 21.3754 17.1559 20.4851 17.3785L20 17.4998M20 11.4998L18.7455 11.1862C18.3668 11.0915 18 11.3779 18 11.7683V17.2313C18 17.6217 18.3668 17.9081 18.7455 17.8134L20 17.4998M15 20.5H18C19.1046 20.5 20 19.6046 20 18.5V18V17.4998M15 20.5C15 19.6716 14.3284 19 13.5 19H10.5C9.67157 19 9 19.6716 9 20.5C9 21.3284 9.67157 22 10.5 22H13.5C14.3284 22 15 21.3284 15 20.5Z" stroke="currentColor" stroke-width="1.5"/></svg>',checkCircle:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',page:'<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10L16 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 18L16 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 14L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',globe:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 12.5L8 14.5L7 18L8 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 20.5L16.5 18L14 17V13.5L17 12.5L21.5 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 5.5L18.5 7L15 7.5V10.5L17.5 9.5H19.5L21.5 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 10.5L5 8.5L7.5 8L9.5 5L8.5 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',chevronRight:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',bell:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.1336 11C18.7155 16.3755 21 18 21 18H3C3 18 6 15.8667 6 8.4C6 6.70261 6.63214 5.07475 7.75736 3.87452C8.88258 2.67428 10.4087 2 12 2C12.3373 2 12.6717 2.0303 13 2.08949" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',bellOff:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.27 6.5C6.09336 7.08951 6 7.72169 6 8.4C6 15.8667 3 18 3 18H17.5M8.63 3C9.59549 2.35885 10.7516 2 12 2C13.5913 2 15.1174 2.67428 16.2426 3.87452C17.3679 5.07475 18 6.70261 18 8.4C18 9.79278 18.2014 10.9692 18.5049 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',trash:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',replay:'<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>'};class Mi{constructor(){this.container=null,this.handleEscape=null}open(){this.container||(z.play("ui_open"),this.render(),this.attachListeners(),document.body.style.overflow="hidden",this.handleLocaleChange=()=>{this.container&&(this.handleEscape&&document.removeEventListener("keydown",this.handleEscape),this.render(),this.attachListeners(),this.refreshPushStatus())},q(this.handleLocaleChange),this.refreshPushStatus())}close(){this.container&&(z.play("ui_close"),this.handleEscape&&(document.removeEventListener("keydown",this.handleEscape),this.handleEscape=null),this.handleLocaleChange&&(ns(this.handleLocaleChange),this.handleLocaleChange=null),this.container.classList.add("closing"),setTimeout(()=>{this.container&&(this.container.remove(),this.container=null),document.body.style.overflow=""},300))}getData(){const e=h.getAuthState(),t=Ce(),s=ve();return{balance:e.balance||"0.00",currency:e.currency||"USD",bonusGames:e.bonusGamesRemaining||0,ticketsTotal:(e.ticketsTotal||0)+h.getFreeEntriesTotal(),isMuted:ue.getState().isMuted,isSfxMuted:z.getState().isMuted,pushSupported:t.supported,pushReason:t.reason,notificationPermission:s}}getWageringData(){const e=h.state,t=parseFloat(e.wageringRequired)||0,s=parseFloat(e.wageringProgress)||0,n=parseFloat(e.bonusBalance)||0,r=t>0?s/t*100:0;return{bonusBalance:n,wageredAmount:s,wageringRequired:t,progress:Math.min(r,100),hasActiveBonus:e.activeBonusesCount>0}}render(){const e=document.querySelector(".burger-menu");e&&e.remove();const t=this.getData(),s=this.getWageringData();this.container=document.createElement("div"),this.container.className="burger-menu",this.container.innerHTML=`
      <div class="burger-menu-overlay"></div>
      <div class="burger-menu-container">
        ${this.getHeaderHTML()}
        ${this.getMenuItemsHTML(t)}
        ${this.getBalanceSectionHTML(t,s)}
        <button class="burger-menu-close-btn">${a("common.close")}</button>
      </div>
    `,document.body.appendChild(this.container)}getHeaderHTML(){return`
      <div class="burger-menu-header">
        <h2>${a("menu.title")}</h2>
        <button class="burger-menu-close" aria-label="${a("common.close")}">&times;</button>
      </div>
    `}getMenuItemsHTML(e){const t=e.isMuted?_.soundOff:_.soundOn,s=e.isMuted?a("menu.state_off"):a("menu.state_on"),n=e.isMuted?"":"on",r=e.isSfxMuted?_.sfxOff:_.sfxOn,o=e.isSfxMuted?a("menu.state_off"):a("menu.state_on"),l=e.isSfxMuted?"":"on",c=A();return`
      <div class="burger-menu-items">
        ${c?"":`
        <div class="menu-item" data-action="wallet">
          <span class="menu-icon">${_.wallet}</span>
          <span class="menu-label">${a("menu.wallet")}</span>
          <span class="menu-value">${k(D(e.balance,e.currency),e.currency)}</span>
          <span class="menu-chevron">${_.chevronRight}</span>
        </div>`}

        ${c?"":`
        <div class="menu-item" data-action="promo">
          <span class="menu-icon">${_.gift}</span>
          <span class="menu-label">${a("menu.promotions_tickets")}</span>
          ${e.ticketsTotal>0?`<span class="menu-badge">${e.ticketsTotal}</span>`:""}
          <span class="menu-chevron">${_.chevronRight}</span>
        </div>`}

        <div class="menu-item" data-action="music">
          <span class="menu-icon" id="burger-music-icon">${t}</span>
          <span class="menu-label">${a("menu.music")}</span>
          <span class="menu-sound-state ${n}" id="burger-music-state">${s}</span>
        </div>

        <div class="menu-item" data-action="sfx">
          <span class="menu-icon" id="burger-sfx-icon">${r}</span>
          <span class="menu-label">${a("menu.sound_effects")}</span>
          <span class="menu-sound-state ${l}" id="burger-sfx-state">${o}</span>
        </div>

        ${c?"":`
        <div class="menu-item" data-action="support">
          <span class="menu-icon">${_.headset}</span>
          <span class="menu-label">${a("menu.support")}</span>
          <span class="menu-chevron">${_.chevronRight}</span>
        </div>`}

        ${c?"":this.getNotificationItemHTML(e)}

        <div class="menu-item" data-action="replays">
          <span class="menu-icon">${_.replay}</span>
          <span class="menu-label">${a("menu.my_replays")}</span>
          <span class="menu-chevron">${_.chevronRight}</span>
        </div>

        <div class="menu-divider"></div>

        <div class="menu-item" data-action="howtoplay">
          <span class="menu-icon">${_.checkCircle}</span>
          <span class="menu-label">${a("menu.how_to_play")}</span>
          <span class="menu-chevron">${_.chevronRight}</span>
        </div>

        ${c?"":`
        <div class="menu-item" data-action="terms">
          <span class="menu-icon">${_.page}</span>
          <span class="menu-label">${a("menu.terms_policies")}</span>
          <span class="menu-chevron">${_.chevronRight}</span>
        </div>`}

        <div class="menu-item" data-action="language">
          <span class="menu-icon">${_.globe}</span>
          <span class="menu-label">${a("app.language")}</span>
          <span class="menu-sound-state on" lang="${he()}">${f(La(he()))}</span>
          <span class="menu-chevron">${_.chevronRight}</span>
        </div>

        ${c?"":`
        <div class="menu-divider"></div>

        <div class="menu-item menu-item-danger" data-action="delete-account">
          <span class="menu-icon">${_.trash}</span>
          <span class="menu-label">${a("menu.delete_account")}</span>
          <span class="menu-chevron">${_.chevronRight}</span>
        </div>`}
      </div>
    `}getNotificationItemHTML(e){if(!e.pushSupported)return"";const t=e.notificationPermission;return t==="denied"?`
        <div class="menu-item disabled" data-action="notifications-blocked">
          <span class="menu-icon">${_.bellOff}</span>
          <span class="menu-label">${a("menu.notifications")}</span>
          <span class="menu-sound-state">${a("menu.notifications_blocked")}</span>
        </div>
      `:t==="granted"?`
        <div class="menu-item notification-enabled" data-action="notifications" id="burger-notification-item">
          <span class="menu-icon">${_.bell}</span>
          <span class="menu-label">${a("menu.notifications")}</span>
          <span class="menu-sound-state on" id="burger-notification-state">${a("menu.notifications_checking")}</span>
        </div>
      `:`
      <div class="menu-item" data-action="notifications" id="burger-notification-item">
        <span class="menu-icon">${_.bell}</span>
        <span class="menu-label">${a("menu.enable_notifications")}</span>
        <span class="menu-chevron">${_.chevronRight}</span>
      </div>
    `}async refreshPushStatus(){if(!Ce().supported)return;const t=ve();if(t!=="denied")try{const s=await ls(),n=this.container?.querySelector("#burger-notification-item");if(!n)return;const r=s&&s.subscriptions>0;t==="granted"&&r?(n.innerHTML=`
          <span class="menu-icon">${_.bell}</span>
          <span class="menu-label">${a("menu.notifications")}</span>
          <span class="menu-sound-state on">${a("menu.notifications_enabled")}</span>
        `,n.classList.add("notification-enabled")):(n.innerHTML=`
          <span class="menu-icon">${_.bell}</span>
          <span class="menu-label">${a("menu.enable_notifications")}</span>
          <span class="menu-chevron">${_.chevronRight}</span>
        `,n.classList.remove("notification-enabled"),n.dataset.action="notifications")}catch(s){console.error("[BurgerMenu] Push status check failed:",s)}}getBalanceSectionHTML(e,t){const s=t.bonusBalance>0||t.wageringRequired>0;return`
      <div class="burger-menu-balance">
        <div class="balance-title">${a("menu.balances_title")}</div>

        <div class="balance-row">
          <span class="balance-label">${a("menu.cash_balance")}</span>
          <span class="balance-amount">${k(D(e.balance,e.currency),e.currency)}</span>
        </div>

        ${s?`
          <div class="balance-row">
            <span class="balance-label">${a("menu.bonus_balance")}</span>
            <span class="balance-amount bonus">${k(D(t.bonusBalance,e.currency),e.currency)}</span>
          </div>

          ${t.wageringRequired>0?`
            <div class="wagering-section">
              <div class="wagering-header">
                <span class="wagering-label">${a("menu.wagering_progress")}</span>
                <span class="wagering-amount">$${t.wageredAmount.toFixed(0)} / $${t.wageringRequired.toFixed(0)}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${t.progress}%"></div>
              </div>
            </div>
          `:""}
        `:""}

        ${ee()||A()?"":`<button class="burger-deposit-btn">${a("menu.deposit")}</button>`}
      </div>
    `}handleMenuAction(e){switch(e){case"wallet":this.close(),C("/wallet");break;case"promo":this.close(),setTimeout(()=>it.open(),100);break;case"music":this.toggleMusic();break;case"sfx":this.toggleSFX();break;case"support":Xe("https://t.me/viper_royale");break;case"howtoplay":this.close(),ke(async()=>{const{practiceTutorial:t}=await import("./practice-tutorial-CcgFOYuy.js");return{practiceTutorial:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])).then(({practiceTutorial:t})=>t.show()).catch(t=>{this.showToast(a("menu.open_how_to_play_failed"))});break;case"terms":this.close(),setTimeout(()=>In.open(),100);break;case"language":if(A()){ft.open();break}{const t=Date.now();if(this._langTaps=(this._langTaps||[]).filter(s=>t-s<2e3),this._langTaps.push(t),this._langTaps.length>=7)if(this._langTaps=[],window._erudaLoaded)this.showToast("Debug console already active");else{window._erudaLoaded=!0;const s=document.createElement("script");s.src="https://cdn.jsdelivr.net/npm/eruda@3.4.0/eruda.min.js",s.onload=()=>{eruda.init();const n=document.querySelector(".eruda-container, #eruda");n&&(n.style.zIndex="2147483647");try{localStorage.setItem("_eruda","1")}catch{}this.showToast("Debug console enabled")},s.onerror=()=>{window._erudaLoaded=!1,this.showToast("Failed to load debugger")},document.head.appendChild(s)}else this._langTaps.length>=5?(this._langTaps=[],ft.close(),this.close(),ke(async()=>{const{WalletModal:s}=await import("./tournaments-api-l_A1Z-uY.js").then(n=>n.ak);return{WalletModal:s}},__vite__mapDeps([8,2,7,3,1,4,5,6,9,10])).then(({WalletModal:s})=>new s().open({depositMethod:"mobinex"})).catch(s=>{this.showToast(a("menu.open_wallet_failed"))})):ft.open({onTitleTap:()=>this.handleMenuAction("language")})}break;case"notifications":this.handleNotificationEnable();break;case"notifications-blocked":this.showToast(a("menu.notifications_blocked_hint"));break;case"fastoo-deposit":this.close(),ke(async()=>{const{fastooDepositModal:t}=await import("./fastoo-deposit-modal-Bbjf4BhI.js");return{fastooDepositModal:t}},__vite__mapDeps([13,7,3,1,2,4,5,6,8,9,10,14])).then(({fastooDepositModal:t})=>t.open()).catch(t=>{this.showToast(a("menu.open_deposit_failed"))});break;case"replays":this.close(),C("/replays");break;case"delete-account":this.close(),C("/delete-account");break;default:}}toggleMusic(){ue.toggleMute();const e=ue.getState().isMuted,t=document.getElementById("burger-music-icon");t&&(t.innerHTML=e?_.soundOff:_.soundOn);const s=document.getElementById("burger-music-state");s&&(s.textContent=e?a("menu.state_off"):a("menu.state_on"),s.classList.toggle("on",!e));const n=document.getElementById("header-sound-btn");n&&n.classList.toggle("muted",e);const r=document.getElementById("music-toggle-btn");r&&r.classList.toggle("muted",e)}toggleSFX(){z.toggleMute();const e=z.getState().isMuted,t=document.getElementById("burger-sfx-icon");t&&(t.innerHTML=e?_.sfxOff:_.sfxOn);const s=document.getElementById("burger-sfx-state");s&&(s.textContent=e?a("menu.state_off"):a("menu.state_on"),s.classList.toggle("on",!e))}async handleNotificationEnable(){const e=Ce();if(!e.supported){this.showToast(e.reason||a("menu.push_not_supported"));return}const t=ve();this.showToast(t==="granted"?a("menu.notifications_subscribing"):a("menu.notifications_requesting_permission"));try{const s=await xe({force:!0});if(s.success)this.showToast(a("menu.notifications_enabled_toast")),this.updateNotificationMenuItem("granted");else{const n=a("menu.notifications_enable_failed",{step:s.step,reason:s.reason});this.showToast(n),console.error("[BurgerMenu]",n),s.step==="permission_denied"&&this.updateNotificationMenuItem("denied")}}catch(s){console.error("[BurgerMenu] Notification enable error:",s),this.showToast(a("menu.error_with_message",{message:s.message||a("menu.unknown_error")}))}}updateNotificationMenuItem(e){const t=this.container?.querySelector('[data-action="notifications"]');t&&(e==="granted"?(t.innerHTML=`
        <span class="menu-icon">${_.bell}</span>
        <span class="menu-label">${a("menu.notifications")}</span>
        <span class="menu-sound-state on">${a("menu.notifications_enabled")}</span>
      `,t.classList.add("notification-enabled")):e==="denied"&&(t.innerHTML=`
        <span class="menu-icon">${_.bellOff}</span>
        <span class="menu-label">${a("menu.notifications")}</span>
        <span class="menu-sound-state">${a("menu.notifications_blocked")}</span>
      `,t.classList.add("disabled"),t.dataset.action="notifications-blocked"))}showToast(e){const t=document.querySelector(".burger-toast");t&&t.remove();const s=document.createElement("div");s.className="burger-toast",s.textContent=e,s.style.cssText=`
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 24px;
      background: rgba(0, 0, 0, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: #fff;
      font-size: 14px;
      font-weight: 500;
      z-index: 4000;
      opacity: 0;
      transition: opacity 0.3s ease;
    `,document.body.appendChild(s),requestAnimationFrame(()=>{s.style.opacity="1"}),setTimeout(()=>{s.style.opacity="0",setTimeout(()=>s.remove(),300)},2e3)}attachListeners(){if(!this.container)return;this.container.querySelector(".burger-menu-close")?.addEventListener("click",()=>this.close()),this.container.querySelector(".burger-menu-close-btn")?.addEventListener("click",()=>this.close()),this.container.querySelector(".burger-menu-overlay")?.addEventListener("click",()=>this.close()),this.container.querySelectorAll(".menu-item").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.action;l&&!o.classList.contains("disabled")?(z.play("ui_click"),this.handleMenuAction(l)):o.classList.contains("disabled")&&this.showToast(a("common.coming_soon"))})}),this.container.querySelector(".burger-deposit-btn")?.addEventListener("click",()=>this.handleMenuAction("fastoo-deposit")),this.handleEscape=o=>{o.key==="Escape"&&this.close()},document.addEventListener("keydown",this.handleEscape)}isOpen(){return this.container!==null}}const cs=new Mi,Ii=3,xn=16,xi=["admin","support","moderator","mod","staff","official","system","viper","http","www"],Ri=/^ga\d+_/,Pi=/^p[li1]ayer[-_]?[0-9a-f]{6}$/,Bi=64,Ni=6,Fi=2;function Es(i){if(Ri.test(i)||Pi.test(i))return!0;const e=i.split(/[-_]/).filter(Boolean),t=e.join("");return xi.some(s=>s.length>=4?t.includes(s):e.includes(s))}function Hi(i){return i.normalize("NFKD").replace(/[\p{Mn}\p{Mc}\p{Me}]/gu,"").replace(/\u0131/g,"i").replace(/\u0237/g,"j")}function Di(i){return Es(i.toLowerCase())||Es(Hi(i).toLowerCase())}const Oi=["Latin","Cyrillic","Greek","Arabic","Hebrew","Georgian","Armenian","Thai","Devanagari","Bengali","Hangul","Han","Hiragana","Katakana","Tamil","Telugu","Gujarati","Khmer","Lao","Myanmar","Gurmukhi","Kannada","Malayalam","Sinhala","Oriya"].map(i=>[i,new RegExp(`\\p{Script=${i}}`,"u")]),qi={Han:"Jpan",Hiragana:"Jpan",Katakana:"Jpan"};function Ls(i){for(const[e,t]of Oi)if(t.test(i))return qi[e]||e;return null}function Ui(i){let e=null,t=0,s=!1,n=0,r=0;for(const o of i){if(/\p{Default_Ignorable_Code_Point}/u.test(o))return"charset";if(/\p{L}/u.test(o)){t++;const l=Ls(o);if(l&&e&&l!==e)return"mixed_script";e=l||e,s=!0,n=0,r=0}else if(/[\p{Mn}\p{Mc}]/u.test(o)){n++;const l=/\p{Script=Inherited}/u.test(o);if(l&&r++,!s||n>Ni||r>Fi)return"charset";const c=l?null:Ls(o);if(c&&e&&c!==e)return"mixed_script"}else if(/[\p{Nd}_-]/u.test(o))s=!1;else return"charset"}return t===0?"no_letter":null}function Rn(i){const e=String(i??""),t=e.normalize("NFKC").replace(/\p{Cf}/gu,"").trim(),s=[...t];if(new TextEncoder().encode(e).length>Bi)return{ok:!1,value:t,reason:"length"};if(s.length<Ii||s.length>xn)return{ok:!1,value:t,reason:"length"};const n=Ui(s);return n?{ok:!1,value:t,reason:n}:Di(t)?{ok:!1,value:t,reason:"reserved"}:{ok:!0,value:t,reason:null}}async function Vi(i){let e;try{e=await fetch(`${re()}/session/nickname`,{method:"POST",headers:oe(),body:JSON.stringify({nickname:i}),cache:"no-store"})}catch{return{ok:!1,status:0,code:"network",reason:null}}let t=null;try{t=await e.json()}catch{}if(e.ok&&t&&typeof t.nickname=="string")return{ok:!0,status:e.status,nickname:t.nickname,source:t.source||"player",canSet:t.can_set===!0,code:null,reason:null};const s=typeof t?.nickname=="string"&&t.nickname?t.nickname:null;return{ok:!1,status:e.status,nickname:s,...zi(e.status,t)}}function zi(i,e){const t=typeof e?.error=="string"?e.error:"";return i===429?{code:"rate_limited",reason:null}:i===422||t==="invalid"?{code:"invalid",reason:["length","charset","mixed_script","reserved","profanity"].includes(e?.reason)?e.reason:null}:t==="taken"||t==="already_set"||t==="operator_name"?{code:t,reason:null}:i===400?{code:"bad_request",reason:null}:{code:"server",reason:null}}function Gi(i){return!!i&&i.authProvider==="casino"&&i.canSetNickname===!0}const ji=6e4;function Rt({code:i=null,reason:e=null,value:t=""}={}){if(i==="taken")return"arenas.nickname_err_taken";if(i==="rate_limited")return"arenas.nickname_err_rate_limited";if(i==="network")return"arenas.nickname_err_network";if(i==="server"||i==="bad_request")return"arenas.nickname_err_server";switch(e){case"length":return[...String(t)].length<3?"arenas.nickname_err_short":"arenas.nickname_err_long";case"charset":return"arenas.nickname_err_charset";case"no_letter":return"arenas.nickname_err_no_letter";case"mixed_script":return"arenas.nickname_err_mixed_script";case"reserved":return"arenas.nickname_err_reserved";case"profanity":return"arenas.nickname_err_profanity";default:return"arenas.nickname_err_server"}}const je=i=>`<bdi class="nick-name" dir="auto">${f(i)}</bdi>`;function We(i){return i?.nameConfirmed&&i.username||""}function Wi({username:i,offer:e,setThisSession:t,tab:s}){if(!i)return"";const r=a(s==="tournaments"?"arenas.nickname_line_boards_show":"arenas.nickname_line_playing_as",{name:je(i)}),o=t?`<span class="nick-line-badge">${a("arenas.nickname_line_set_badge")}</span>`:e?`<button type="button" class="nick-line-cta" data-nick="open">${a("arenas.nickname_line_cta")}</button>`:"";return`<div class="nick-line${t?" is-set":""}"><span class="nick-line-mark" aria-hidden="true"></span><span class="nick-line-text">${r}</span>${o}</div>`}function Ki(i){if(i.phase==="success"||i.phase==="settled"){const o=i.phase==="success"?a("arenas.nickname_done_title"):i.settledKind==="operator_name"?a("arenas.nickname_settled_operator_title"):i.settledKind==="already_set"?a("arenas.nickname_settled_already_title"):a("arenas.nickname_sheet_title"),l=i.phase==="success"?a("arenas.nickname_done_next_game",{name:je(i.resultName)}):i.resultName?i.settledKind==="operator_name"||i.current?a("arenas.nickname_settled_operator_body",{name:je(i.resultName)}):a("arenas.nickname_settled_already_body",{name:je(i.resultName)}):i.current&&i.offline?a("arenas.nickname_err_network"):"";return As(`
      <div class="nick-done">
        <div class="nick-done-mark" aria-hidden="true"></div>
        <h3 class="nick-title" id="nick-title">${o}</h3>
        ${l?`<p class="nick-sub" role="status">${l}</p>`:""}
      </div>
      <div class="nick-actions"><button type="button" class="nick-primary" data-nick="close">${a("arenas.nickname_btn_done")}</button></div>`)}const e=Pn(i),{msgKey:t,valid:s,submitting:n,disabled:r}=e;return As(`
    <div class="nick-head">
      <h3 class="nick-title" id="nick-title">${a("arenas.nickname_sheet_title")}</h3>
      <button type="button" class="nick-close" data-nick="close" aria-label="${a("common.close")}">×</button>
    </div>
    <p class="nick-sub" id="nick-once"><strong>${a("arenas.nickname_sheet_once")}</strong></p>
    <label class="nick-sr" for="nick-input">${a("arenas.nickname_input_label")}</label>
    <div class="nick-field${t?" is-invalid":s?" is-valid":""}">
      <input id="nick-input" class="nick-input" type="text" dir="auto" maxlength="32" value="${f(i.draft)}"
        placeholder="${a("arenas.nickname_input_placeholder")}" autocomplete="off" autocapitalize="off" autocorrect="off"
        spellcheck="false" enterkeyhint="done" aria-describedby="nick-msg nick-once"${t?' aria-invalid="true"':""}${n?" readonly":""} />
      <span class="nick-count" aria-hidden="true">${e.count}</span>
    </div>
    <p class="nick-msg" id="nick-msg" role="status" aria-live="polite">${e.msgHtml}</p>
    <div class="nick-preview" aria-hidden="true">
      <span class="nick-preview-label">${a("arenas.nickname_preview_label")}</span>
      <div class="nick-preview-row"><span class="nick-rank">1</span>
        <bdi class="nick-preview-name${s?"":" is-placeholder"}" dir="auto">${f(e.previewName)}</bdi>
        <span class="nick-you">${a("arenas.nickname_preview_you")}</span></div>
    </div>
    <div class="nick-actions">
      <button type="button" class="nick-primary" data-nick="submit"${r?" disabled":""}${n?' aria-busy="true"':""}>${e.primaryLabel}</button>
      <button type="button" class="nick-secondary" data-nick="close"${n?" disabled":""}>${a("arenas.nickname_btn_not_now")}</button>
    </div>`)}function Pn(i){const e=Rn(i.draft),t=i.draft.length>0,s=i.phase==="submitting";let n=i.error;!n&&t&&!e.ok&&!(e.reason==="length"&&[...e.value].length<3)&&(n=Rt({reason:e.reason,value:e.value}));const r=t&&e.ok&&!(i.error&&!i.retryable),o=n?`<span class="is-error">${a(n)}</span>`:r?`<span class="is-ok">${a("arenas.nickname_ok_valid")}</span>`:a("arenas.nickname_hint_rules");return{msgKey:n,msgHtml:o,valid:r,submitting:s,disabled:s||i.cooldown||!r,count:`${[...e.value].length}/${xn}`,previewName:e.value||i.currentName||"",primaryLabel:s?`<span class="nick-spin" aria-hidden="true"></span>${a("arenas.nickname_btn_setting")}`:i.cooldown?a("arenas.nickname_btn_wait"):a("arenas.nickname_btn_use")}}function As(i){return`<div class="nick-sheet-scrim" data-nick="scrim"></div>
    <div class="nick-sheet" role="dialog" aria-modal="true" aria-labelledby="nick-title"><div class="nick-card">${i}</div></div>`}class Yi{constructor({authManager:e,setNickname:t=Vi,now:s=()=>Date.now()}){this.auth=e,this.post=t,this.now=s,this.lineHost=null,this.tab="cash",this.setThisSession=!1,this.sheetHost=null,this.s=null,this.cooldownUntil=0,this._openGen=0,this._onClick=n=>this.handleClick(n),this._onInput=n=>{n.target?.id!=="nick-input"||!this.s||(this.s.draft=n.target.value,this.s.error=null,this.s.retryable=!1,n.isComposing||this.patchEditor())},this._onCompositionEnd=n=>{n.target?.id!=="nick-input"||!this.s||(this.s.draft=n.target.value,this.patchEditor())},this._onKey=n=>{this.s&&(n.key==="Escape"&&!n.isComposing&&this.s.phase!=="submitting"&&this.close(),n.key==="Enter"&&n.target?.id==="nick-input"&&!n.isComposing&&this.submit())}}offer(){return Gi(this.auth.getAuthState())}renderLine(e=this.lineHost,t=this.tab){if(this.lineHost=e,this.tab=t,!e)return;const s=this.auth.getAuthState();e.innerHTML=Wi({username:We(s),offer:this.offer(),setThisSession:this.setThisSession,tab:t}),e.onclick=n=>{n.target.closest('[data-nick="open"]')&&this.open()},this.syncProfileSheet()}open(e){this.sheetHost||!this.offer()||this.showSheet(this.editingState(),e)}editingState(){return{phase:"editing",draft:"",currentName:this.auth.getAuthState().username||"",error:null,cooldown:this.cooling(),resultName:"",settledKind:null}}async openFromProfile(e){if(this.sheetHost)return;const t=++this._openGen;if(!(!this.offer()&&!We(this.auth.getAuthState())&&(await this.refresh({force:!1}),t!==this._openGen))){if(this.offer()){this.open(e),this.s&&(this.s.door="profile");return}this.showSheet({phase:"settled",draft:"",error:null,cooldown:!1,...this.profileState(),current:!0,door:"profile"},e)}}profileState(){const e=this.auth.getAuthState(),t=We(e),s=t?e.nicknameSource==="operator"?"operator_name":e.nicknameSource==="player"||e.nicknameSource==="admin"?"already_set":null:null;return{currentName:t,resultName:t,settledKind:s,offline:!t&&e.userInfoAnswered===!1}}syncProfileSheet(){const e=this.s;!this.sheetHost||!e?.current||e.phase!=="settled"||(this.offer()?this.s={...this.editingState(),door:"profile"}:Object.assign(e,this.profileState()),this.renderSheet(),this.focusSheet())}focusSheet(){(this.sheetHost?.querySelector("#nick-input")||this.sheetHost?.querySelector(".nick-primary"))?.focus({preventScroll:!0})}showSheet(e,t){this._openGen++,this._opener=t||(typeof document<"u"?document.activeElement:null),this.s=e,this.sheetHost=document.createElement("div"),this.sheetHost.className="nick-sheet-host is-entering";const s=this.sheetHost;setTimeout(()=>s.classList.remove("is-entering"),250),this.sheetHost.addEventListener("click",this._onClick),this.sheetHost.addEventListener("input",this._onInput),this.sheetHost.addEventListener("compositionend",this._onCompositionEnd),document.addEventListener("keydown",this._onKey),document.body.appendChild(this.sheetHost),this.renderSheet(),this.s.cooldown&&this.wakeAfterCooldown(),this.focusSheet()}close(){if(this._openGen++,!this.sheetHost)return;this.sheetHost.removeEventListener("click",this._onClick),this.sheetHost.removeEventListener("input",this._onInput),this.sheetHost.removeEventListener("compositionend",this._onCompositionEnd),document.removeEventListener("keydown",this._onKey);const e=this.s?.door==="profile";this.sheetHost.remove(),this.sheetHost=null,this.s=null,this.renderLine();const t=e&&this._opener||this.lineHost?.querySelector('[data-nick="open"]')||this._opener;t&&typeof t.focus=="function"&&document.contains(t)&&t.focus({preventScroll:!0})}cooling(){return this.now()<this.cooldownUntil}wakeAfterCooldown(){clearTimeout(this._wake),this._wake=setTimeout(()=>this.patchEditor(),Math.max(0,this.cooldownUntil-this.now())+50)}renderSheet(){!this.sheetHost||!this.s||(this.s.cooldown=this.cooling(),this.sheetHost.innerHTML=Ki(this.s))}patchEditor(){const e=this.sheetHost;if(!e||!this.s)return;this.s.cooldown=this.cooling();const t=e.querySelector("#nick-input");if(!t||this.s.phase==="success"||this.s.phase==="settled"){this.renderSheet();return}const s=Pn(this.s),n=e.querySelector(".nick-field");n&&(n.classList.toggle("is-invalid",!!s.msgKey),n.classList.toggle("is-valid",!s.msgKey&&s.valid)),s.msgKey?t.setAttribute("aria-invalid","true"):t.removeAttribute("aria-invalid"),t.readOnly=s.submitting;const r=e.querySelector(".nick-count");r&&r.textContent!==s.count&&(r.textContent=s.count);const o=e.querySelector("#nick-msg");o&&o.innerHTML!==s.msgHtml&&(o.innerHTML=s.msgHtml);const l=e.querySelector(".nick-preview-name");l&&(l.textContent!==s.previewName&&(l.textContent=s.previewName),l.classList.toggle("is-placeholder",!s.valid));const c=e.querySelector(".nick-primary");c&&(c.disabled=s.disabled,s.submitting?c.setAttribute("aria-busy","true"):c.removeAttribute("aria-busy"),c.innerHTML!==s.primaryLabel&&(c.innerHTML=s.primaryLabel));const d=e.querySelector(".nick-secondary");d&&(d.disabled=s.submitting)}handleClick(e){const t=e.target.closest("[data-nick]");if(!t||t.disabled)return;const s=t.getAttribute("data-nick");s==="submit"?this.submit():(s==="close"||s==="scrim")&&this.s?.phase!=="submitting"&&this.close()}async refresh({force:e=!0}={}){try{await this.auth.getBalance({force:e})}catch{}}async submit(){const e=this.s;if(!e||e.phase!=="editing"||this.cooling())return;const t=Rn(e.draft);if(!t.ok){e.error=Rt({reason:t.reason,value:t.value}),e.retryable=!1,this.patchEditor();return}e.phase="submitting",this.patchEditor();const s=await this.post(t.value);if(s.ok&&this.auth.adoptNickname({nickname:s.nickname,source:s.source,can_set:s.canSet}),this.s===e){if(s.ok){this.succeed(s.nickname);return}if(s.code==="already_set"||s.code==="operator_name"){await this.settle(s.code,s.nickname);return}if(s.code==="network"||s.code==="server"){const n=this.auth.getAuthState().username;if(await this.refresh(),this.s!==e)return;const r=this.auth.getAuthState();if(r.canSetNickname===!1){r.nicknameSource==="player"?this.succeed(r.username||t.value):await this.settle(r.nicknameSource==="operator"?"operator_name":"already_set",r.username!==n?r.username:null,{refreshed:!0});return}}s.code==="rate_limited"&&(this.cooldownUntil=this.now()+ji),e.phase="editing",e.error=Rt({code:s.code==="invalid"?null:s.code,reason:s.reason,value:t.value}),e.retryable=s.code==="network"||s.code==="server"||s.code==="bad_request"||s.code==="rate_limited",this.patchEditor(),s.code==="rate_limited"&&this.wakeAfterCooldown()}}async settle(e,t=null,{refreshed:s=!1}={}){const n=this.s,r=this.auth.getAuthState().username;if(s||this.auth.closeNicknameOffer?.(e==="operator_name"?"operator":"player"),s||await this.refresh(),this.s!==n)return;const o=this.auth.getAuthState().username;n.phase="settled",n.settledKind=e,n.resultName=t||(o!==r?o:""),this.renderSheet(),this.renderLine()}succeed(e){this.setThisSession=!0,this.s.phase="success",this.s.resultName=e,this.renderSheet(),this.renderLine(),this.sheetHost?.querySelector(".nick-primary")?.focus({preventScroll:!0})}destroy(){this.close(),this.lineHost&&(this.lineHost.innerHTML=""),this.lineHost=null}}let De=null;function Bn(i){return(!De||De.auth!==i)&&(De=new Yi({authManager:i})),De}function Ms(){return y.isTelegram?"/tg":"/standalone"}function Ke(i){return i?.authProvider==="casino"}function Ji(i){return(Ke(i)?We(i):i?.gameUsername||i?.username||i?.email||"").charAt(0).toUpperCase()||"?"}function Zi(i){return typeof i=="string"&&/^data:image\/(png|jpeg|gif|webp|svg\+xml|bmp);base64,/.test(i)}class Xi{constructor(e,{openNickname:t}={}){this.authManager=e,this.openNickname=t||(()=>Bn(e).openFromProfile(globalThis.document?.getElementById("header-profile-btn"))),this.container=null,this.onLogout=null,this._checkTimer=null,this._lastCheckedUsername="",this._usernameAvailable=!1}open(e){if(Ke(this.authManager.state)){this.openNickname();return}this._openedAt=Date.now(),L.track("modal_opened","navigation",{modal_name:"profile"}),this.onLogout=e,this.render(),this.attachListeners()}close(){const e=this._openedAt?Date.now()-this._openedAt:0;L.track("modal_closed","navigation",{modal_name:"profile",duration_ms:e}),this._checkTimer&&(clearTimeout(this._checkTimer),this._checkTimer=null),this.container&&(this.container.remove(),this.container=null)}render(){document.querySelector(".profile-modal")?.remove();const e=document.createElement("div");e.className="profile-modal",e.innerHTML=this.getHTML();const t=e.querySelector("#profile-avatar-click");t&&this._setAvatarContent(t,!1),document.body.appendChild(e),this.container=e}_setAvatarContent(e,t){e.innerHTML="";const s=document.createElement("span");s.className=t?"avatar-initial":"avatar-initial-large",t&&(s.id="avatar-initial"),s.textContent=this._getInitial(),e.appendChild(s)}_getInitial(){const e=this.authManager.state;return(e.gameUsername||e.username||e.email||"").charAt(0).toUpperCase()||"?"}getUserIdentity(){const e=this.authManager.state;if(y.isTelegram){const t=y.tgWebApp?.initDataUnsafe?.user;return t?.username?`@${t.username}`:t?.id?a("profile.tg_id",{id:t.id}):e.username||a("profile.telegram_user")}return e.email||a("profile.unknown_identity")}getIdentityLabel(){return y.isTelegram?a("profile.identity_telegram"):a("profile.identity_email")}getHTML(){const e=this.authManager.state,t=e.gameUsername,s=f(e.username||a("profile.default_display_name")),n=!y.isTelegram;return`
      <div class="profile-modal-overlay"></div>
      <div class="profile-modal-container">
        <button class="profile-modal-close">&times;</button>

        <!-- Avatar (populated via DOM in render()) -->
        <div class="profile-avatar-section">
          <div class="profile-avatar-large" id="profile-avatar-click"></div>
          <div class="profile-change-photo" id="profile-change-photo-label">${a("profile.change_photo")}</div>
          <input type="file" accept="image/*" class="profile-avatar-file-input" id="profile-avatar-input">
        </div>

        <!-- User Info -->
        <div class="profile-section">
          <div class="profile-section-title">${a("profile.user_info_title")}</div>
          <div class="profile-info-row">
            <span class="profile-info-label">${this.getIdentityLabel()}</span>
            <span class="profile-info-value">${f(this.getUserIdentity())}</span>
          </div>
          <div class="profile-info-row">
            <span class="profile-info-label">${a("profile.display_name_label")}</span>
            <span class="profile-info-value">${s}</span>
          </div>
        </div>

        <!-- Username -->
        <div class="profile-section">
          <div class="profile-section-title">${a("profile.username_title")}</div>
          ${t?this._getSetUsernameHTML(t):this._getUnsetUsernameHTML()}
        </div>

        <!-- Logout (web only) -->
        ${n?`
        <div class="profile-logout-section">
          <button class="profile-logout-btn" id="profile-modal-logout-btn">${a("profile.log_out")}</button>
        </div>
        `:""}
      </div>
    `}_getSetUsernameHTML(e){return`
      <div class="profile-username-badge">
        <span>@${f(e)}</span>
        <span class="lock-icon">&#128274;</span>
      </div>
    `}_getUnsetUsernameHTML(){return`
      <div class="profile-username-form" id="username-form">
        <div class="profile-username-input-wrapper">
          <input
            type="text"
            class="profile-username-input"
            id="username-input"
            placeholder="${a("profile.username_placeholder")}"
            maxlength="30"
            autocomplete="off"
            spellcheck="false"
          >
          <span class="username-status-icon" id="username-status-icon"></span>
        </div>
        <div class="username-hint" id="username-feedback">${a("profile.username_hint")}</div>
        <button class="profile-set-username-btn" id="set-username-btn" disabled>${a("profile.set_username")}</button>
      </div>
    `}attachListeners(){if(!this.container)return;this.container.querySelector(".profile-modal-overlay")?.addEventListener("click",()=>this.close()),this.container.querySelector(".profile-modal-close")?.addEventListener("click",()=>this.close());const e=this.container.querySelector("#profile-avatar-click"),t=this.container.querySelector("#profile-change-photo-label"),s=this.container.querySelector("#profile-avatar-input"),n=()=>s?.click();e?.addEventListener("click",n),t?.addEventListener("click",n),s?.addEventListener("change",c=>this._handleAvatarChange(c));const r=this.container.querySelector("#username-input");r&&r.addEventListener("input",()=>this._handleUsernameInput(r));const o=this.container.querySelector("#set-username-btn");o&&o.addEventListener("click",()=>this._handleSetUsername());const l=this.container.querySelector("#profile-modal-logout-btn");l&&l.addEventListener("click",()=>{this.onLogout&&this.onLogout(),this.close()})}_handleAvatarChange(e){const t=e.target.files?.[0];if(!t||t.size>2*1024*1024)return;const s=new FileReader;s.onload=n=>{const r=n.target.result;if(!Zi(r))return;try{localStorage.setItem("profile_avatar_data_url",r)}catch(l){l.message;return}const o=this.container?.querySelector("#profile-avatar-click");o&&this._setAvatarContent(o,!1),this._updateHeaderAvatar()},s.readAsDataURL(t)}_updateHeaderAvatar(){const e=document.getElementById("profile-avatar-circle");e&&this._setAvatarContent(e,!0)}_handleUsernameInput(e){const t=e.value.trim(),s=this.container?.querySelector("#username-status-icon"),n=this.container?.querySelector("#username-feedback"),r=this.container?.querySelector("#set-username-btn");this._checkTimer&&(clearTimeout(this._checkTimer),this._checkTimer=null);const o=/^[a-zA-Z0-9_]{3,30}$/.test(t);if(t.length===0){s.textContent="",s.className="username-status-icon",n.textContent=a("profile.username_hint"),n.className="username-hint",r.disabled=!0,this._usernameAvailable=!1;return}if(t.length<3){s.textContent="",s.className="username-status-icon",n.textContent=a("profile.username_too_short"),n.className="username-error",r.disabled=!0,this._usernameAvailable=!1;return}if(!o){s.textContent="✖",s.className="username-status-icon taken",n.textContent=a("profile.username_invalid_chars"),n.className="username-error",r.disabled=!0,this._usernameAvailable=!1;return}s.textContent="●",s.className="username-status-icon checking",n.textContent=a("profile.username_checking"),n.className="username-hint",r.disabled=!0,this._checkTimer=setTimeout(()=>this._checkAvailability(t),400)}async _checkAvailability(e){if(Ke(this.authManager.state))return;const t=this.container?.querySelector("#username-status-icon"),s=this.container?.querySelector("#username-feedback"),n=this.container?.querySelector("#set-username-btn");if(!(!t||!s||!n))try{const r=await ss(`${Ms()}/username/check?username=${encodeURIComponent(e)}`);if(!r.ok)throw new Error(`HTTP ${r.status}`);const o=await r.json();if(this.container?.querySelector("#username-input")?.value.trim()!==e)return;o.available?(t.textContent="✔",t.className="username-status-icon available",s.textContent=a("profile.username_available"),s.className="username-available-msg",n.disabled=!1,this._usernameAvailable=!0,this._lastCheckedUsername=e):(t.textContent="✖",t.className="username-status-icon taken",s.textContent=o.reason||a("profile.username_unavailable"),s.className="username-error",n.disabled=!0,this._usernameAvailable=!1)}catch(r){console.error("[Profile] Username check failed:",r),t.textContent="",t.className="username-status-icon",s.textContent=a("profile.username_check_failed"),s.className="username-error",n.disabled=!0,this._usernameAvailable=!1}}_handleSetUsername(){const t=this.container?.querySelector("#username-input")?.value.trim();if(!(!t||!this._usernameAvailable)){if(t!==this._lastCheckedUsername){const s=this.container?.querySelector("#username-feedback");s&&(s.textContent=a("profile.username_wait_for_check"),s.className="username-error");return}this._showConfirmation(t)}}_showConfirmation(e){document.querySelector(".username-confirm-overlay")?.remove();const t=document.createElement("div");t.className="username-confirm-overlay",t.innerHTML=`
      <div class="username-confirm-box">
        <h3>${a("profile.confirm_username_title")}</h3>
        <p>${a("profile.confirm_username_text")}</p>
        <div class="confirm-username-preview"></div>
        <div class="username-confirm-actions">
          <button class="confirm-no">${a("common.cancel")}</button>
          <button class="confirm-yes">${a("common.confirm")}</button>
        </div>
      </div>
    `,t.querySelector(".confirm-username-preview").textContent=`@${e}`,document.body.appendChild(t);const s=()=>t.remove();t.addEventListener("click",n=>{n.target===t&&s()}),t.querySelector(".confirm-no")?.addEventListener("click",s),t.querySelector(".confirm-yes")?.addEventListener("click",()=>{s(),this._submitUsername(e)})}async _submitUsername(e){if(Ke(this.authManager.state))return;const t=this.container?.querySelector("#set-username-btn"),s=this.container?.querySelector("#username-feedback"),n=this.container?.querySelector("#username-status-icon");t&&(t.disabled=!0,t.textContent=a("profile.username_setting"));try{const r=await Ta(`${Ms()}/username`,{username:e});if(r.ok){const o=await r.json();this.authManager.state.gameUsername=o.username||e;const l=this.container?.querySelector("#username-form");l&&(l.outerHTML=this._getSetUsernameHTML(this.authManager.state.gameUsername)),this._updateHeaderAvatar(),this.authManager.state.gameUsername}else if(r.status===409)n&&(n.textContent="✖",n.className="username-status-icon taken"),s&&(s.textContent=a("profile.username_taken"),s.className="username-error"),t&&(t.textContent=a("profile.set_username"),t.disabled=!0),this._usernameAvailable=!1;else{const o=await r.json().catch(()=>({}));s&&(s.textContent=o.error||a("profile.username_set_failed"),s.className="username-error"),t&&(t.textContent=a("profile.set_username"),t.disabled=!1)}}catch(r){console.error("[Profile] Failed to set username:",r),s&&(s.textContent=a("profile.network_error"),s.className="username-error"),t&&(t.textContent=a("profile.set_username"),t.disabled=!1)}}}class Qi{constructor(){this.container=null,this.handleEscape=null,this.handleClickOutside=null,this.balanceData=null}show(e,t){this.container||(this.balanceData=t,this.render(e),this.attachListeners())}close(){this.container&&(this.handleEscape&&(document.removeEventListener("keydown",this.handleEscape),this.handleEscape=null),this.handleClickOutside&&(document.removeEventListener("click",this.handleClickOutside),this.handleClickOutside=null),this.container.classList.add("closing"),setTimeout(()=>{this.container?.remove(),this.container=null},200))}isOpen(){return this.container!==null}updateBalance(e){if(!this.container)return;this.balanceData=e;const t=this.container.querySelector(".balance-cash-amount"),s=this.container.querySelector(".balance-bonus-amount");t&&(t.innerHTML=k(D(e.cashBalance,e.currency),e.currency)),s&&(s.innerHTML=k(D(e.bonusBalance,e.currency),e.currency))}getCardHTML(){const{cashBalance:e,bonusBalance:t,currency:s}=this.balanceData;return`
      <div class="balance-dropdown-card">
        <div class="balance-dropdown-header">
          <span class="balance-dropdown-title">${a("wallet.balance_title")}</span>
          <button class="balance-dropdown-close" aria-label="${a("common.close")}">&times;</button>
        </div>

        <div class="balance-dropdown-content">
          <div class="balance-dropdown-row">
            <span class="balance-dropdown-label">${a("wallet.cash_balance")}</span>
            <span class="balance-dropdown-amount balance-cash-amount">${k(D(e,s),s)}</span>
          </div>

          <div class="balance-dropdown-row">
            <span class="balance-dropdown-label">${a("wallet.bonus_balance")}</span>
            <span class="balance-dropdown-amount balance-bonus-amount bonus">${k(D(t,s),s)}</span>
          </div>
          <p class="balance-dropdown-subtitle">${a("wallet.bonus_terms_note")}</p>
        </div>

        ${A()?"":`
        <div class="balance-dropdown-actions">
          ${ee()?"":`<button class="balance-dropdown-deposit">${a("wallet.deposit")}</button>`}
          <button class="balance-dropdown-withdraw">${a("wallet.withdraw")}</button>
        </div>`}
      </div>
    `}render(e){this.container=document.createElement("div"),this.container.className="balance-dropdown",this.container.innerHTML=this.getCardHTML();const t=e.getBoundingClientRect();this.container.style.top=`${t.bottom+8}px`,this.container.style.right=`${window.innerWidth-t.right}px`,document.body.appendChild(this.container)}attachListeners(){this.container.querySelector(".balance-dropdown-close")?.addEventListener("click",()=>this.close()),this.container.querySelector(".balance-dropdown-deposit")?.addEventListener("click",()=>{this.close(),C("/wallet")}),this.container.querySelector(".balance-dropdown-withdraw")?.addEventListener("click",()=>{this.close(),C("/wallet")}),this.handleEscape=e=>{e.key==="Escape"&&this.close()},document.addEventListener("keydown",this.handleEscape),setTimeout(()=>{this.handleClickOutside=e=>{!this.container?.contains(e.target)&&!e.target.closest("#header-balance-pill")&&this.close()},document.addEventListener("click",this.handleClickOutside)},10)}}const de=new Qi;class er{constructor(){this.container=null,this.state="loading",this.errorMessage="",this.isVisible=!1,this.referralCode="",this.shareUrl="",this.telegramUrl="",this.dashboardData=null,this.toastTimeout=null,this.handleLocaleChange=null,this.handleInvite=this.handleInvite.bind(this),this.handleCopyCode=this.handleCopyCode.bind(this),this.handleBack=this.handleBack.bind(this)}init(e){this.container=document.createElement("div"),this.container.id="view-friends",this.container.className="friends-page",this.container.style.display="none",this.container.innerHTML=this.getHTML(),e.appendChild(this.container),this.attachHeaderListeners(),this.handleLocaleChange=()=>this.rerender(),q(this.handleLocaleChange)}attachHeaderListeners(){this.container?.querySelector("#friends-back-btn")?.addEventListener("click",this.handleBack)}rerender(){this.container&&(this.container.innerHTML=this.getHTML(),this.attachHeaderListeners(),this.attachContentListeners())}async show(){this.container&&(this.isVisible=!0,this.container.style.display="block",this.state="loading",this.updateContent(),await this.fetchData())}hide(){this.container&&(this.isVisible=!1,this.container.style.display="none",this.toastTimeout&&(clearTimeout(this.toastTimeout),this.toastTimeout=null))}isShowing(){return this.isVisible}async fetchData(){try{const[e,t]=await Promise.all([xa(),Ra()]);if(!e.success)throw new Error(e.error||a("friends.error_fetch_code"));if(!t.success)throw new Error(t.error||a("friends.error_fetch_data"));this.referralCode=e.referral_code||"",this.shareUrl=e.share_url||(this.referralCode?`https://viperroyale.com/?ref=${this.referralCode}`:""),this.telegramUrl=e.telegram_url||(this.referralCode?`https://t.me/ViperRoyaleBot/game?startapp=${this.referralCode}`:""),this.dashboardData=t,this.state="loaded",this.updateContent()}catch(e){console.error("[FRIENDS] Failed to fetch data:",e),this.state="error",this.errorMessage=e.message||a("friends.error_load"),this.updateContent()}}getHTML(){return`
      <div class="friends-page-inner">
        <header class="friends-header">
          <button class="friends-back-btn" id="friends-back-btn" type="button" aria-label="${a("friends.go_back")}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h1 class="friends-title">${a("friends.title")}</h1>
          <p class="friends-description">
            ${a("friends.description_html")}
          </p>
        </header>
        <div class="friends-content" id="friends-content">
          ${this.getContentHTML()}
        </div>
      </div>
      <div class="friends-toast" id="friends-toast"></div>
    `}getContentHTML(){switch(this.state){case"loading":return this.getLoadingHTML();case"error":return this.getErrorHTML();default:return this.getLoadedHTML()}}getLoadingHTML(){return`
      <div class="friends-loading">
        <div class="friends-spinner"></div>
        <p class="friends-loading-text">${a("friends.loading")}</p>
      </div>
    `}getErrorHTML(){return`
      <div class="friends-error">
        <div class="friends-error-icon">⚠️</div>
        <h3 class="friends-error-title">${a("friends.oops_title")}</h3>
        <p class="friends-error-text">${f(this.errorMessage)}</p>
        <button class="friends-retry-btn" type="button">${a("friends.try_again")}</button>
      </div>
    `}getLoadedHTML(){const e=this.dashboardData?.current_tier||{wagering_friends:0,percentage:3,next_tier_at:5,next_percentage:4},t=this.dashboardData?.pending_commission||"0.00",s=this.dashboardData?.referrals||[],n=this.dashboardData?.total_referrals||0;return`
      ${this.getTierSectionHTML(e,t)}
      ${this.getInviteSectionHTML()}
      ${this.getFriendsListHTML(s,n)}
    `}getTierSectionHTML(e,t){const s=e.next_tier_at===null||e.next_tier_at===void 0,n=s?100:this.calculateProgress(e.wagering_friends,e.next_tier_at),r=s?0:e.next_tier_at-e.wagering_friends;return`
      <div class="tier-section">
        <div class="tier-header">
          <div class="tier-badge ${s?"tier-max-badge":""}">
            <span class="tier-badge-icon">${s?"👑":"💎"}</span>
            <span>${a("friends.commission_badge",{percentage:e.percentage})}</span>
          </div>
          <div class="tier-earnings">
            <div class="tier-earnings-label">${a("friends.this_month")}</div>
            <div class="tier-earnings-amount">$${t}</div>
          </div>
        </div>
        
        <div class="tier-progress-container">
          <div class="tier-progress-bar">
            <div class="tier-progress-fill" style="width: ${n}%"></div>
          </div>
          <div class="tier-progress-text">
            <span class="tier-progress-current">${v("friends.active_friends_count",Number(e.wagering_friends)||0)}</span>
            ${s?"":`<span class="tier-progress-goal">${a("friends.tier_goal",{target:e.next_tier_at,percentage:e.next_percentage})}</span>`}
          </div>
        </div>

        ${s?`
          <div class="tier-next-info tier-max-info">
            ${a("friends.tier_max_info_html")}
          </div>
        `:`
          <div class="tier-next-info">
            ${v("friends.tier_next_info_html",Number(r)||0,{percentage:e.next_percentage})}
          </div>
        `}
      </div>
    `}calculateProgress(e,t){if(t<=0)return 100;const s=[0,5,15,30,100];let n=0;for(let l=0;l<s.length;l++)if(s[l]===t){n=l>0?s[l-1]:0;break}const r=t-n,o=e-n;return Math.min(100,Math.max(0,o/r*100))}getInviteSectionHTML(){return`
      <div class="invite-section">
        <div class="invite-buttons">
          <button class="invite-btn invite-btn-primary" id="invite-friend-btn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
            <span>${a("friends.invite_friend")}</span>
          </button>
          <button class="invite-btn invite-btn-secondary" id="copy-code-btn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <span>${a("friends.copy_code")}</span>
          </button>
        </div>
      </div>
    `}getFriendsListHTML(e,t){return`
      <div class="friends-list-section">
        <div class="friends-list-header">
          <h3 class="friends-list-title">${a("friends.invited_friends_title")}</h3>
          <span class="friends-list-count">${v("friends.total_count",Number(t)||0)}</span>
        </div>

        ${e.length===0?`
          <div class="friends-list-empty">
            <div class="friends-list-empty-icon">👥</div>
            <p class="friends-list-empty-text">${a("friends.empty_title")}</p>
            <p class="friends-list-empty-subtext">${a("friends.empty_subtext")}</p>
          </div>
        `:`
          <div class="friends-list">
            ${e.map(s=>this.getFriendItemHTML(s)).join("")}
          </div>
        `}
      </div>
    `}getFriendItemHTML(e){const t=this.getInitials(e.display_name),s=this.getStatusClass(e.current_phase),n=e.current_phase_name||Pa(e.current_phase),r=this.formatDate(e.referred_at),l=e.current_phase===4&&e.total_entry_fees?this.calculateEarnings(e.total_entry_fees):null;return`
      <div class="friend-item">
        <div class="friend-item-main">
          <div class="friend-avatar">${t}</div>
          <div class="friend-info">
            <div class="friend-name">${f(e.display_name||a("friends.anonymous"))}</div>
            <div class="friend-date">${a("friends.joined_date",{date:r})}</div>
          </div>
        </div>
        <div class="friend-item-meta">
          <span class="friend-status ${s}">${n}</span>
          ${l!==null?`<span class="friend-earnings">+$${l}</span>`:""}
        </div>
      </div>
    `}getInitials(e){if(!e)return"?";const t=e.trim().split(/\s+/);return t.length>=2?(t[0][0]+t[t.length-1][0]).toUpperCase():e.slice(0,2).toUpperCase()}getStatusClass(e){return{1:"status-registered",2:"status-played",3:"status-deposited",4:"status-active"}[e]||"status-registered"}formatDate(e){if(!e)return a("friends.date_recently");try{const t=new Date(e),n=Math.floor((new Date-t)/(1e3*60*60*24));return n===0?a("friends.date_today"):n===1?a("friends.date_yesterday"):n<7?v("friends.days_ago",n):n<30?v("friends.weeks_ago",Math.floor(n/7)):t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{return a("friends.date_recently")}}calculateEarnings(e){const t=parseFloat(e)||0,s=this.dashboardData?.current_tier?.percentage||3;return(t*(s/100)).toFixed(2)}updateContent(){const e=this.container?.querySelector("#friends-content");e&&(e.innerHTML=this.getContentHTML(),this.attachContentListeners())}attachContentListeners(){if(!this.container)return;this.container.querySelector("#invite-friend-btn")?.addEventListener("click",this.handleInvite),this.container.querySelector("#copy-code-btn")?.addEventListener("click",this.handleCopyCode),this.container.querySelector(".friends-retry-btn")?.addEventListener("click",()=>{this.state="loading",this.updateContent(),this.fetchData()})}async handleInvite(){L.track("referral_link_shared","engagement",{share_method:y.isTelegram?"telegram":navigator.share?"web_share":"clipboard"});const e=a("friends.share_text",{appName:a("app.name")}),t=y.isTelegram?this.telegramUrl:this.shareUrl;if(y.isTelegram&&window.Telegram?.WebApp)try{const s=`https://t.me/share/url?url=${encodeURIComponent(t)}&text=${encodeURIComponent(e)}`;window.Telegram.WebApp.openTelegramLink(s)}catch(s){console.error("[FRIENDS] Telegram share failed:",s),await this.copyToClipboard(t),this.showToast(a("friends.link_copied_share"))}else if(navigator.share)try{await navigator.share({title:a("friends.share_title",{appName:a("app.name")}),text:e,url:t})}catch(s){s.name!=="AbortError"&&(console.error("[FRIENDS] Web share failed:",s),await this.copyToClipboard(t),this.showToast(a("friends.link_copied")))}else await this.copyToClipboard(t),this.showToast(a("friends.link_copied"))}handleBack(){C("/")}async handleCopyCode(){L.track("referral_link_copied","engagement");const e=y.isTelegram?this.telegramUrl:this.shareUrl;if(!e){this.showToast(a("friends.no_link_available"));return}if(await this.copyToClipboard(e)){const s=this.container?.querySelector("#copy-code-btn");if(s){s.classList.add("copied");const n=s.querySelector("span");n&&(n.textContent=a("common.copied")),setTimeout(()=>{s.classList.remove("copied"),n&&(n.textContent=a("friends.copy_code"))},2e3)}this.showToast(a("friends.link_copied"))}else this.showToast(a("friends.copy_failed"))}async copyToClipboard(e){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(e),!0;{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select();const s=document.execCommand("copy");return document.body.removeChild(t),s}}catch(t){return console.error("[FRIENDS] Copy to clipboard failed:",t),!1}}showToast(e){const t=this.container?.querySelector("#friends-toast");t&&(t.textContent=e,t.classList.add("show"),this.toastTimeout&&clearTimeout(this.toastTimeout),this.toastTimeout=setTimeout(()=>{t.classList.remove("show")},3e3))}destroy(){this.toastTimeout&&(clearTimeout(this.toastTimeout),this.toastTimeout=null),this.handleLocaleChange&&(ns(this.handleLocaleChange),this.handleLocaleChange=null),this.container&&(this.container.remove(),this.container=null)}}const Pt=new er,ds=()=>y.isTelegram&&window.Telegram?.WebApp?.HapticFeedback||null;function F(i="medium"){ds()?.impactOccurred(i)}function W(i){ds()?.notificationOccurred(i)}function Nn(){ds()?.selectionChanged()}const gt=36e5;function ne(i){return i.progress?.status||i.status||i.task?.status||"not_started"}function vt(i){const e=new Date(i)-Date.now();if(e<=0)return null;const t=Math.floor(e/36e5),s=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3),r=o=>o.toString().padStart(2,"0");if(t>24){const o=Math.floor(t/24);return a("tasks.countdown_days",{days:o,hours:t%24,minutes:r(s)})}return t>0?a("tasks.countdown_hours",{hours:t,minutes:r(s),seconds:r(n)}):s>0?a("tasks.countdown_minutes",{minutes:s,seconds:r(n)}):a("tasks.countdown_seconds",{seconds:n})}const Is='<svg class="countdown-clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',Ye=[{key:"all",label:()=>a("tasks.tab_all"),icon:"default",dataKey:null},{key:"daily",label:()=>a("tasks.tab_daily"),icon:"daily",dataKey:"daily"},{key:"achievement",label:()=>a("tasks.tab_achievement"),icon:"achievement",dataKey:"achievements"},{key:"social",label:()=>a("tasks.tab_social"),icon:"social",dataKey:"social",isSocial:!0}],Oe=Ye.filter(i=>i.dataKey),qe={daily:{from:"#166534",to:"#15803d"},social:{from:"#1e3a5f",to:"#1d4ed8"},achievement:{from:"#78350f",to:"#b45309"}},xs={daily:"/assets/tasks/gift-reward.png",social:"/assets/tasks/invite-friend.png",achievement:"/assets/tasks/trophy.png"};class tr{constructor(){this.container=null,this.state="loading",this.errorMessage="",this.isVisible=!1,this.tasksData=null,this.streak=null,this.summary=null,this.activeTab="all",this.partnerTaskStates={},this.toastTimeout=null,this._previousStatuses=new Map,this._countdownInterval=null,this._fetchInProgress=!1,this._stopLocaleChange=null,this.icons={flame:'<path d="M12 2c0 0-1 3.5 3 5.5s4.5 2 4.5 6a7.5 7.5 0 1 1-15 0c0-2.5 1-4.5 2.5-6.5C8.5 4.5 12 2 12 2zM12 22a5 5 0 0 0 5-5c0-1.5-1-2.5-1.5-3.5-.5-1-1-2-1-3.5 0 0-1 1.5-2.5 3s-2 2.5-2 4a5 5 0 0 0 5 5z"/>',games:'<path d="M6 12h4m-2-2v4m4-2a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3-3a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-9-4h10a5 5 0 0 1 5 5v6a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"/>',balance:'<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',badge:'<path d="M12 15l-2 5-2-5-5-2 5-2 2-5 2 5 5 2-5 2zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>',freeze:'<path d="M12 2v20M2 12h20M12 2l2 2-2 2M12 22l-2-2 2-2M2 12l2 2 2-2M22 12l-2-2-2 2M17 7l1.4-1.4M5.6 18.4L7 17M17 17l1.4 1.4M5.6 5.6L7 7"/>',daily:'<path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>',social:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m15-10a4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4m7 10v-2a4 4 0 0 0-3-3.87M23 7a4 4 0 0 0-3-3.87"/>',partner:'<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/><circle cx="12" cy="12" r="3"/>',progression:'<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>',achievement:'<path d="M8 21h8m-4-4v4M7 4h10M5 4v7a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5V4"/>',default:'<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',chevron:'<path d="M15 18l-6-6 6-6"/>',retry:'<path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>',bonusGames:'<path d="M17 4H7a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5z"/><circle cx="8" cy="12" r="2"/><path d="M14 10h4M16 8v4"/>',moneyStack:'<path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',ticket:'<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/>',check:'<polyline points="20 6 9 17 4 12"/>',trophy:'<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6m12 5h1.5a2.5 2.5 0 0 0 0-5H18M9 22h6m-3-4v4M7 4h10v7a5 5 0 0 1-10 0V4z"/>'},this._detailOverlay=null,this._detailEntry=null,this._pendingActions=new Map,this.handleClaim=this.handleClaim.bind(this),this.handleRetry=this.handleRetry.bind(this),this.handleBack=this.handleBack.bind(this),this.handlePartnerPlay=this.handlePartnerPlay.bind(this),this.handlePartnerVerify=this.handlePartnerVerify.bind(this),this.handleInviteFriends=this.handleInviteFriends.bind(this),this.handleTabChange=this.handleTabChange.bind(this),this.handlePwaInstall=this.handlePwaInstall.bind(this)}init(e){this.container||(this.container=document.createElement("div"),this.container.id="tasks-page",this.container.className="tasks-page",this.container.style.display="none",e.appendChild(this.container),this._stopLocaleChange=q(()=>{this.isVisible&&(this.render(),this._detailEntry?this._rebuildTaskDetail():this.hideTaskDetail())}))}show(){this.isVisible=!0,this.container.style.display="block",L.track("task_viewed","engagement"),this.fetchData(),Qt("any")}hide(){this.isVisible=!1,this.container.style.display="none",this._stopCountdown()}async fetchData(){if(!this._fetchInProgress){this._fetchInProgress=!0;try{this.state="loading",this.render();const e=await ci();e.success?(this.tasksData=e,this.streak=e.streak,this.summary=e.summary,this.state="loaded",this._detectAutoClaimed(e),this._ensureValidTab(),this._startCountdown()):(this.state="error",this.errorMessage=e.error||a("tasks.error_uplink")),this.render()}finally{this._fetchInProgress=!1}}}_ensureValidTab(){if(!this.tasksData||this.activeTab==="all")return;const e=Ye.find(t=>t.key===this.activeTab);e&&e.dataKey&&(this.tasksData[e.dataKey]||[]).filter(n=>ne(n)!=="claimed").length>0||(this.activeTab="all")}handleTabChange(e){this.activeTab!==e&&(Nn(),this.activeTab=e,this.container.querySelectorAll(".tasks-tab-btn").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)}),this.renderTabContent())}_paintPending(e,t){e&&(e.classList.add("processing"),e.disabled=!0,e.textContent=t)}_repaintActions(){this.renderTabContent();const e=this._detailEntry,t=e?this._detailOverlay?.querySelector(".task-detail-action"):null;t&&(t.innerHTML=this._renderCardAction(e.item,e.tabConfig),this._attachCardListeners(t))}async handleClaim(e,t){const s=String(e);if(this._pendingActions.has(s))return;F("medium"),this._pendingActions.set(s,"claim"),this._paintPending(t,a("tasks.claiming"));let n;try{n=await di(e)}catch(r){console.error("[TASKS] claim rejected:",r),n={success:!1,error:r?.message||a("tasks.error_uplink")}}finally{this._pendingActions.delete(s)}if(n.success){W("success"),z.play("ui_success");const r=n.rewards.map(o=>{const l=mi(o);return a("tasks.reward_pill",{value:l.value,label:l.label})}).join(", ");this.showToast(a("tasks.toast_access_granted",{rewards:r})),this.hideTaskDetail(),this.fetchData()}else W("error"),z.play("ui_error"),this.showToast(a("tasks.toast_error",{error:n.error})),this._repaintActions()}handleRetry(){this.fetchData()}handleBack(){C("/")}async handlePartnerPlay(e,t){const s=String(e);if(this._pendingActions.has(s))return;F("medium"),this._pendingActions.set(s,"play"),this._paintPending(t,a("tasks.btn_loading"));let n;try{n=await ui(e)}catch(o){console.error("[TASKS] partner click rejected:",o),n={success:!1,error:o?.message||a("tasks.error_uplink")}}finally{this._pendingActions.delete(s)}let r=n.success?n.external_url:null;if(!r){const o=this._currentTabItems?.get(String(e)),l=o?.item?.task||o?.item;r=l?.task_config?.external_url||l?.external_url||""}r?(Xe(r),this.partnerTaskStates[e]="verify",this.hideTaskDetail(),this.renderTabContent()):(W("error"),this.showToast(a("tasks.toast_no_link")),this._repaintActions())}async handlePartnerVerify(e,t){const s=String(e);if(this._pendingActions.has(s))return;F("medium"),this._pendingActions.set(s,"verify"),this._paintPending(t,a("tasks.btn_verifying"));let n;try{n=await hi(e)}catch(r){console.error("[TASKS] verify rejected:",r),n={success:!1,error:r?.message||a("tasks.error_uplink")}}finally{this._pendingActions.delete(s)}n.success?(W("success"),this.partnerTaskStates[e]="claim",this.showToast(a("tasks.toast_task_verified")),this.hideTaskDetail(),this.renderTabContent()):(W("error"),this.showToast(a("tasks.toast_error",{error:n.error})),this._repaintActions())}handleInviteFriends(){F("light"),C("/friends")}async handlePwaInstall(e){if(F("medium"),Se()){this.showToast(a("tasks.toast_already_installed"));return}if(Ba()){const{accepted:t}=await Na();t?(W("success"),this.showToast(a("tasks.toast_installed")),this.fetchData(),this._promptNotificationsAfterInstall()):this.showToast(a("tasks.toast_install_cancelled"));return}this._showInstallGuide()}_showInstallGuide(){this.hideTaskDetail();const e=navigator.userAgent||"",t=et()&&!e.match(/CriOS|FxiOS|OPiOS|EdgiOS/i),s=et()&&!t;let n,r;s?(r=a("tasks.install_subtitle_safari_html"),n=`
        <div class="pwa-install-steps">
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">1</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_copy_url_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">2</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_share_then_add_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </div>
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">3</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_confirm_add_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>`):t?(r=a("tasks.install_subtitle_home_screen"),n=`
        <div class="pwa-install-steps">
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">1</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_share_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
          </div>
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">2</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_scroll_add_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
          </div>
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">3</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_confirm_add_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>`):(r=a("tasks.install_subtitle_home_screen"),n=`
        <div class="pwa-install-steps">
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">1</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_browser_menu_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>
            </svg>
          </div>
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">2</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_install_or_add_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
            </svg>
          </div>
          <div class="pwa-install-step">
            <div class="pwa-install-step-num">3</div>
            <div class="pwa-install-step-label">${a("tasks.install_step_confirm_install_html")}</div>
            <svg class="pwa-install-step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>`);const o=document.createElement("div");o.className="task-detail-overlay",o.innerHTML=`
      <div class="task-detail-backdrop"></div>
      <div class="task-detail-modal">
        <button class="task-detail-close">&times;</button>
        <div class="task-detail-body">
          <div class="pwa-install-header">
            <div class="pwa-install-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </div>
            <div class="pwa-install-title">${a("tasks.install_title",{appName:a("app.name")})}</div>
            <div class="pwa-install-subtitle">${r}</div>
          </div>
          ${n}
          <button class="task-card-action btn-pwa-dismiss">${a("tasks.btn_got_it")}</button>
        </div>
      </div>
    `,document.body.appendChild(o),this._detailOverlay=o,o.offsetHeight,o.classList.add("show"),o.querySelector(".task-detail-backdrop").addEventListener("click",()=>this.hideTaskDetail()),o.querySelector(".task-detail-close").addEventListener("click",()=>this.hideTaskDetail()),o.querySelector(".btn-pwa-dismiss").addEventListener("click",()=>this.hideTaskDetail())}_promptNotificationsAfterInstall(){!rt()||!Ce().supported||ve()!=="denied"&&setTimeout(async()=>{const t=ve();if(t==="denied")return;const s=await ls();if(s&&s.subscriptions>0)return;if(t==="granted"){xe({force:!0}).catch(o=>{});return}const r=o=>`{{${o}}}`;Ae.show({icon:"🔔",title:a("tasks.push_optin_title"),description:a("tasks.push_optin_desc",{starts:r(a("tasks.push_optin_hl_starts")),rewards:r(a("tasks.push_optin_hl_rewards"))}),ctaText:a("tasks.push_optin_title"),dismissable:!0},()=>{xe({force:!0}).then(o=>{})})},2e3)}showToast(e){this.toastTimeout&&clearTimeout(this.toastTimeout);let t=document.querySelector(".task-toast");t||(t=document.createElement("div"),t.className="task-toast",document.body.appendChild(t)),t.textContent=e,t.classList.add("show"),this.toastTimeout=setTimeout(()=>{t.classList.remove("show")},3e3)}showTaskDetail(e,t){F("light"),this.hideTaskDetail();const s=document.createElement("div");s.className="task-detail-overlay",s.innerHTML=this._detailHtml(e,t),document.body.appendChild(s),this._detailOverlay=s,this._detailEntry={item:e,tabConfig:t},s.offsetHeight,s.classList.add("show"),this._attachDetailListeners(s)}_rebuildTaskDetail(){const e=this._detailOverlay,t=this._detailEntry;!e||!t||(e.innerHTML=this._detailHtml(t.item,t.tabConfig),this._attachDetailListeners(e))}_attachDetailListeners(e){e.querySelector(".task-detail-backdrop").addEventListener("click",()=>this.hideTaskDetail()),e.querySelector(".task-detail-close").addEventListener("click",()=>this.hideTaskDetail()),this._attachCardListeners(e.querySelector(".task-detail-action"))}_detailHtml(e,t){const s=e.task||e,n=t.key,r=qe[n]||qe.daily,o=e.icon_url||s.icon_url||s.image_url||s.task_config?.image_url||xs[n]||"",l=f(o),c=s.description||"",d=`<div class="task-detail-visual" style="background: linear-gradient(135deg, ${r.from}, ${r.to});">
         ${o?`<img class="task-detail-image" src="${l}" alt="" onerror="this.style.display='none'" />`:`<div class="task-card-icon-wrap">${this.getIconSvg(t.icon,"task-detail-type-icon")}</div>`}
       </div>`,u=e.expires_at;let p="";if(u){const b=vt(u);b?p=`<div class="task-detail-countdown ${new Date(u)-new Date<gt?"urgent":""}" data-countdown="${f(u)}">${Is}<span class="countdown-label">${a("tasks.resets_in")}</span><span class="countdown-time">${b}</span></div>`:p=`<div class="task-detail-countdown" data-countdown="${f(u)}"><span class="countdown-resetting">${a("tasks.resetting")}</span></div>`}const m=this._renderDetailRewards(e),g=e.progress||{};ne(e);const S=parseFloat(g.current_value)||0,E=parseFloat(g.target_value||s.target_value)||1,M=Math.min(Math.floor(parseFloat(e.progress_percent)||S/E*100),100),R=E>1?`<div class="task-detail-progress">
           <div class="task-detail-progress-bar">
             <div class="task-card-progress-fill" style="width: ${M}%"></div>
           </div>
           <div class="task-detail-progress-text">${S} / ${E} &middot; ${M}%</div>
         </div>`:"",$=this._renderCardAction(e,t);return`
      <div class="task-detail-backdrop"></div>
      <div class="task-detail-modal">
        <button class="task-detail-close">&times;</button>
        ${d}
        <div class="task-detail-body">
          <div class="task-detail-title">${f(s.title)||a("tasks.task_untitled")}</div>
          ${c?`<div class="task-detail-desc">${f(c)}</div>`:""}
          ${p}
          ${m}
          ${R}
          <div class="task-detail-action">
            ${$}
          </div>
        </div>
      </div>
    `}hideTaskDetail(){if(this._detailEntry=null,!this._detailOverlay)return;this._detailOverlay.classList.remove("show");const e=this._detailOverlay;this._detailOverlay=null,setTimeout(()=>e.remove(),200)}_renderDetailRewards(e){const t=e.task?.rewards||e.rewards||[],s=e.reward_preview||{},n=[],r=t.find(m=>m.reward_type_key==="free_games"||m.reward_type==="free_games"),o=parseFloat(r?r.reward_value:s.free_games);o>0&&n.push(`<div class="task-card-reward reward-games">${this.getIconSvg("bonusGames","task-card-reward-icon")}<span>${a("tasks.reward_pill",{value:o,label:v("tasks.reward_bonus_games",o)})}</span></div>`);const l=t.find(m=>m.reward_type_key==="balance_bonus"||m.reward_type==="balance_bonus"),c=parseFloat(l?l.reward_value:s.balance_bonus);c>0&&n.push(`<div class="task-card-reward reward-money">${this.getIconSvg("moneyStack","task-card-reward-icon")}<span>${a("tasks.reward_pill",{value:`$${c}`,label:v("tasks.reward_bonus",c)})}</span></div>`);const d=t.find(m=>m.reward_type_key==="ticket"||m.reward_type==="ticket");if(d){const m=d.reward_config?.entry_fee||d.config?.entry_fee||"",g=parseInt(d.reward_value)||1,S=v("tasks.reward_arena_ticket",g),E=g>1?m?`${g}x $${m}`:`${g}x`:m?`$${m}`:"1";n.push(`<div class="task-card-reward reward-ticket">${this.getIconSvg("ticket","task-card-reward-icon")}<span>${a("tasks.reward_pill",{value:E,label:S})}</span></div>`)}else if(s.tickets!=null&&typeof s.tickets=="object"){const{count:m=1,entry_fee:g=""}=s.tickets,S=parseInt(m)||1,E=v("tasks.reward_arena_ticket",S),M=S>1?g?`${S}x $${g}`:`${S}x`:g?`$${g}`:"1";n.push(`<div class="task-card-reward reward-ticket">${this.getIconSvg("ticket","task-card-reward-icon")}<span>${a("tasks.reward_pill",{value:M,label:E})}</span></div>`)}else s.ticket!=null&&n.push(`<div class="task-card-reward reward-ticket">${this.getIconSvg("ticket","task-card-reward-icon")}<span>${a("tasks.reward_pill",{value:s.ticket,label:v("tasks.reward_arena_ticket",parseInt(s.ticket)||1)})}</span></div>`);const u=t.find(m=>m.reward_type_key==="streak_freezes"||m.reward_type==="streak_freezes"),p=parseFloat(u?u.reward_value:s.streak_freezes);return p>0&&n.push(`<div class="task-card-reward reward-freeze">${this.getIconSvg("freeze","task-card-reward-icon")}<span>${a("tasks.reward_pill",{value:p,label:v("tasks.reward_freeze",p)})}</span></div>`),n.length===0?"":`
      <div class="task-detail-rewards">
        <div class="task-detail-rewards-label">${a("tasks.rewards_heading")}</div>
        <div class="task-detail-rewards-list">${n.join("")}</div>
      </div>
    `}_detectAutoClaimed(e){const t=Oe.flatMap(n=>e[n.dataKey]||[]),s=new Map;for(const n of t){const r=n.task||n,o=r.id;if(!o)continue;const l=n.progress?.status||n.status||r.status||"not_started";s.set(o,{status:l,title:r.title||a("tasks.task_untitled")})}if(this._previousStatuses.size>0){for(const[n,r]of s)if(r.status==="claimed"){const o=this._previousStatuses.get(n);o&&o.status!=="claimed"&&this.showToast(a("tasks.toast_auto_claimed",{title:r.title}))}}this._previousStatuses=s}_startCountdown(){this._stopCountdown(),this.isVisible&&(this._updateCountdowns(),this._countdownInterval=setInterval(()=>{this._updateCountdowns()},1e3))}_stopCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}_updateCountdowns(){const e=this.container.querySelectorAll("[data-countdown]"),t=this._detailOverlay?this._detailOverlay.querySelectorAll("[data-countdown]"):[],s=[...e,...t];if(!s.length)return;let n=!1;for(const r of s){const o=r.dataset.countdown;if(!o)continue;const l=vt(o);if(!l){r.innerHTML=`<span class="countdown-resetting">${a("tasks.resetting")}</span>`,r.classList.remove("urgent"),n=!0;continue}const c=new Date(o)-Date.now();r.classList.toggle("urgent",c<gt);const d=r.querySelector(".countdown-time");d&&(d.textContent=l)}n&&(this._stopCountdown(),this.hideTaskDetail(),this.fetchData())}getIconSvg(e,t=""){const s=this.icons[e]||this.icons.default;return`
      <svg class="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        ${s}
      </svg>
    `}getPrimaryReward(e){const t=e.task?.rewards||e.rewards||[],s=e.reward_preview||{},n=t.find(c=>c.reward_type_key==="free_games"||c.reward_type==="free_games");if(n)return{value:String(parseFloat(n.reward_value)||0),label:v("tasks.reward_bonus_games",parseFloat(n.reward_value)||0),iconKey:"bonusGames",type:"games"};if(s.free_games!=null&&parseFloat(s.free_games)>0)return{value:String(parseFloat(s.free_games)),label:v("tasks.reward_bonus_games",parseFloat(s.free_games)),iconKey:"bonusGames",type:"games"};const r=t.find(c=>c.reward_type_key==="balance_bonus"||c.reward_type==="balance_bonus");if(r){const c=parseFloat(r.reward_value)||0;return{value:`$${c}`,label:v("tasks.reward_bonus",c),iconKey:"moneyStack",type:"money"}}if(s.balance_bonus!=null&&parseFloat(s.balance_bonus)>0){const c=parseFloat(s.balance_bonus);return{value:`$${c}`,label:v("tasks.reward_bonus",c),iconKey:"moneyStack",type:"money"}}const o=t.find(c=>c.reward_type_key==="ticket"||c.reward_type==="ticket");if(o){const c=o.reward_config?.entry_fee||o.config?.entry_fee||"",d=parseInt(o.reward_value)||1,u=v("tasks.reward_arena_ticket",d);return{value:d>1?c?`${d}x $${c}`:`${d}x`:c?`$${c}`:"1",label:u,iconKey:"ticket",type:"ticket"}}if(s.tickets!=null&&typeof s.tickets=="object"){const{count:c=1,entry_fee:d=""}=s.tickets,u=parseInt(c)||1,p=v("tasks.reward_arena_ticket",u);return{value:u>1?d?`${u}x $${d}`:`${u}x`:d?`$${d}`:"1",label:p,iconKey:"ticket",type:"ticket"}}if(s.ticket!=null)return{value:String(s.ticket),label:v("tasks.reward_arena_ticket",parseInt(s.ticket)||1),iconKey:"ticket",type:"ticket"};const l=t.find(c=>c.reward_type_key==="streak_freezes"||c.reward_type==="streak_freezes");if(l){const c=parseFloat(l.reward_value)||1;return{value:String(c),label:v("tasks.reward_freeze",c),iconKey:"freeze",type:"freeze"}}if(s.streak_freezes!=null){const c=parseFloat(s.streak_freezes)||1;return{value:String(s.streak_freezes),label:v("tasks.reward_freeze",c),iconKey:"freeze",type:"freeze"}}return null}render(){if(!this.container)return;if(this.state==="loading"){this.container.innerHTML=`
        <div class="tasks-page-inner">
          <div class="tasks-header">
            <h1>${a("tasks.title")}</h1>
            <p>${a("tasks.loading_subtitle")}</p>
          </div>
          <div class="loading-state">
            <div class="loading-spinner"></div>
            <p style="margin-top: 20px; font-family: monospace; letter-spacing: 2px;">${a("tasks.syncing")}</p>
          </div>
        </div>
      `;return}if(this.state==="error"){this.container.innerHTML=`
        <div class="tasks-page-inner">
          <div class="tasks-header">
            <h1>${a("tasks.error_title")}</h1>
          </div>
          <div class="glass-card error-card" style="padding: 40px 20px; text-align: center;">
            <div style="color: #ff4444; margin-bottom: 20px;">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <p style="color: rgba(255,255,255,0.7); margin-bottom: 30px; font-family: monospace;">${f(this.errorMessage)}</p>
            <button class="task-card-action btn-completed" id="tasks-retry-btn" style="max-width: 200px; margin: 0 auto;">
              ${a("tasks.btn_retry")}
            </button>
          </div>
        </div>
      `,this.container.querySelector("#tasks-retry-btn")?.addEventListener("click",()=>this.handleRetry());return}const e=`
      <div class="tasks-page-inner">
        <div class="tasks-header">
          <h1>${a("tasks.title")}</h1>
          <p>${a("tasks.subtitle_html")}</p>
        </div>

        ${this.renderStreak()}
        ${this.renderTabs()}

        <div id="tasks-tab-content"></div>
      </div>
    `;this.container.innerHTML=e,this.container.querySelectorAll(".tasks-tab-btn").forEach(t=>{t.addEventListener("click",()=>{z.play("ui_click"),this.handleTabChange(t.dataset.tab)})}),this.renderTabContent(),window.tasksPage=this}renderStreak(){return this.streak?`
      <div class="streak-bar ${this.streak.current_streak>=3?"streak-active":""}">
        <div class="streak-bar-main">
          <div class="streak-bar-flame">
            <svg class="streak-flame-svg" viewBox="0 0 24 24" fill="#ff7800">
              ${this.icons.flame}
            </svg>
          </div>
          <div class="streak-bar-count">
            <span class="streak-bar-value">${this.streak.current_streak}</span>
            <span class="streak-bar-label">${a("tasks.day_streak")}</span>
          </div>
        </div>
        <div class="streak-bar-stats">
          <div class="streak-bar-chip">
            <span class="streak-chip-label">${a("tasks.best")}</span>
            <span class="streak-chip-value">${this.streak.best_streak}</span>
          </div>
          <div class="streak-bar-chip">
            <span class="streak-chip-label">${this.getIconSvg("freeze","streak-chip-icon")}</span>
            <span class="streak-chip-value streak-chip-green">${this.streak.streak_freezes_available}</span>
          </div>
        </div>
      </div>
    `:""}renderTabs(){return this.tasksData?`<div class="tasks-tabs">${Ye.filter(t=>t.dataKey?(this.tasksData[t.dataKey]||[]).length>0:!0).map(t=>{let s;t.dataKey?s=(this.tasksData[t.dataKey]||[]).filter(l=>ne(l)!=="claimed").length:s=Oe.reduce((o,l)=>{const c=this.tasksData[l.dataKey]||[];return o+c.filter(d=>ne(d)!=="claimed").length},0);const n=this.activeTab===t.key,r=s>0?`<span class="tasks-tab-badge">${s}</span>`:"";return`<button class="tasks-tab-btn ${n?"active":""}" data-tab="${t.key}">${t.label()}${r}</button>`}).join("")}</div>`:""}renderTabContent(){const e=this.container.querySelector("#tasks-tab-content");if(!e||!this.tasksData)return;let t=[];if(this.activeTab==="all")for(const o of Oe)for(const l of this.tasksData[o.dataKey]||[])t.push({item:l,tabConfig:o});else{const o=Ye.find(l=>l.key===this.activeTab);if(!o)return;for(const l of this.tasksData[o.dataKey]||[])t.push({item:l,tabConfig:o})}const s=t.filter(({item:o})=>ne(o)!=="claimed"),n=t.filter(({item:o})=>ne(o)==="claimed");let r="";if(s.length===0&&n.length===0)r=this.renderEmptyState();else{if(s.length>0)if(this.activeTab==="all"){const o=s.filter(({item:c})=>(c.task||c).is_featured);o.length>0&&(r+=`<div class="tasks-section-header"><span class="tasks-section-label">${a("tasks.featured")}</span><span class="tasks-section-count">${o.length}</span></div>`,r+='<div class="tasks-grid">',r+=o.map(({item:c,tabConfig:d})=>this.renderGridCard(c,d)).join(""),r+="</div>");const l=s.filter(({item:c})=>!(c.task||c).is_featured);for(const c of Oe){const d=l.filter(({tabConfig:u})=>u.key===c.key);d.length!==0&&(r+=`<div class="tasks-section-header"><span class="tasks-section-label">${c.label()}</span><span class="tasks-section-count">${d.length}</span></div>`,r+='<div class="tasks-grid">',r+=d.map(({item:u,tabConfig:p})=>this.renderGridCard(u,p)).join(""),r+="</div>")}}else r+='<div class="tasks-grid">',r+=s.map(({item:o,tabConfig:l})=>this.renderGridCard(o,l)).join(""),r+="</div>";else r+=this.renderEmptyState();n.length>0&&(r+=`
          <div class="tasks-completed-section">
            <div class="tasks-completed-header">
              <svg class="tasks-completed-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>${a("tasks.completed_heading")}</span>
            </div>
            <div class="tasks-completed-grid">
              ${n.map(({item:o})=>this.renderCompletedCard(o)).join("")}
            </div>
          </div>
        `)}e.innerHTML=r,this._currentTabItems=new Map;for(const{item:o,tabConfig:l}of t){const c=o.task||o;c.id&&this._currentTabItems.set(String(c.id),{item:o,tabConfig:l})}this._attachCardListeners(e)}renderEmptyState(){return`
      <div class="tasks-empty-state">
        <svg class="tasks-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${this.icons.trophy}
        </svg>
        <div class="tasks-empty-title">${a("tasks.empty_title")}</div>
        <div class="tasks-empty-subtitle">${a("tasks.empty_subtitle")}</div>
      </div>
    `}renderGridCard(e,t){const s=e.task||e,n=s.id,r=s.is_featured,o=t.key,l=qe[o]||qe.daily,c=e.icon_url||s.icon_url||s.image_url||s.task_config?.image_url||xs[o]||"",d=f(c),u=`<div class="task-card-visual" style="background: linear-gradient(135deg, ${l.from}, ${l.to});">
         ${c?`<img class="task-card-image" src="${d}" alt="" onerror="this.style.display='none'" />`:`<div class="task-card-icon-wrap">${this.getIconSvg(t.icon,"task-card-type-icon")}</div>`}
         ${r?`<span class="task-card-featured">${a("tasks.featured")}</span>`:""}
       </div>`,p=this.getPrimaryReward(e),m=p?`<div class="task-card-reward reward-${p.type}">
           ${this.getIconSvg(p.iconKey,"task-card-reward-icon")}
           <span>${a("tasks.reward_pill",{value:p.value,label:p.label})}</span>
         </div>`:"",g=e.expires_at;let S="";if(g){const Y=vt(g);Y?S=`<div class="task-card-countdown ${new Date(g)-new Date<gt?"urgent":""}" data-countdown="${f(g)}">${Is}<span class="countdown-time">${Y}</span></div>`:S=`<div class="task-card-countdown" data-countdown="${f(g)}"><span class="countdown-resetting">${a("tasks.resetting")}</span></div>`}const E=e.progress||{},M=ne(e),te=parseFloat(E.current_value)||0,R=parseFloat(E.target_value||s.target_value)||1,$=Math.min(Math.floor(parseFloat(e.progress_percent)||te/R*100),100),le=R>1&&M!=="completed"?`<div class="task-card-progress">
           <div class="task-card-progress-fill" style="width: ${$}%"></div>
         </div>
         <div class="task-card-progress-text">${te}/${R}</div>`:"",V=this._renderCardAction(e,t);return`
      <div class="task-grid-card ${r?"is-featured":""}" data-task-id="${f(String(n))}" data-section="${o}">
        ${u}
        <div class="task-card-body">
          <div class="task-card-title">${f(s.title)||a("tasks.task_untitled")}</div>
          ${m}
          ${S}
          ${le}
          ${V}
        </div>
      </div>
    `}_renderPendingAction(e,t){const s=f(String(e));return t==="play"?`<button class="task-card-action btn-partner-play processing" data-task-id="${s}" disabled>${a("tasks.btn_loading")}</button>`:t==="verify"?`<button class="task-card-action btn-partner-verify processing" data-task-id="${s}" disabled>${a("tasks.btn_verifying")}</button>`:`<button class="task-card-action btn-completed processing" data-task-id="${s}" disabled>${a("tasks.claiming")}</button>`}_renderCardAction(e,t){const s=e.task||e,n=s.id,r=ne(e),o=!!(s.task_config?.external_url||s.external_url),l=this._pendingActions.get(String(n));if(l)return this._renderPendingAction(n,l);if(t.isPartner||t.isSocial&&o){let p=this.partnerTaskStates[n]||"start";const m=e.progress?.status;m==="claimed"?p="done":(m==="completed"||e.can_claim)&&(p="claim");const g=t.isSocial?{start:a("tasks.btn_start"),verify:a("tasks.btn_verify"),claim:a("tasks.btn_claim")}:{start:a("tasks.btn_play_now"),verify:a("tasks.btn_completed_it"),claim:a("tasks.btn_claim_reward")};return p==="start"?`<button class="task-card-action btn-partner-play" data-task-id="${f(String(n))}">${g.start}</button>`:p==="verify"?`<button class="task-card-action btn-partner-verify" data-task-id="${f(String(n))}">${g.verify}</button>`:p==="claim"?`<button class="task-card-action btn-completed" data-task-id="${f(String(n))}">${g.claim}</button>`:`<div class="task-card-done">${a("tasks.done_completed")}</div>`}if(t.isSocial&&!o){if(r==="completed")return`<button class="task-card-action btn-completed" data-task-id="${f(String(n))}">${a("tasks.btn_claim")}</button>`;if(r==="claimed")return`<div class="task-card-done">${a("tasks.done_claimed")}</div>`;const p=s.key||s.task_key||"";if(p.includes("refer")||p.includes("invite"))return`<button class="task-card-action btn-invite-action">${a("tasks.btn_invite")}</button>`}if((s.key||s.task_key||"").includes("pwa")&&r!=="claimed")return`<button class="task-card-action btn-pwa-install" data-task-id="${f(String(n))}">${a("tasks.btn_install")}</button>`;if((s.task_type_key||"")==="email"){if(r==="completed")return`<div class="task-card-done">${a("tasks.under_review")}</div>`;const p=s.task_config||{},m=p.email||"";if(!m)return`<button class="task-card-action btn-not-started" disabled>${a("tasks.btn_unavailable")}</button>`;const g=p.subject||"",S=g?`mailto:${m}?subject=${encodeURIComponent(g)}`:`mailto:${m}`,E=r==="claimed"?a("tasks.btn_report_again"):a("tasks.btn_report_bug");return y.isTelegram?`<button class="task-card-action btn-email-task" data-task-id="${f(String(n))}" data-email="${f(m)}" data-subject="${f(g)}">${E}</button>`:`<a href="${f(S)}" class="task-card-action btn-email-task" data-task-id="${f(String(n))}">${E}</a>`}const u=fi(r);return`
      <button class="task-card-action btn-${r.replace(/_/g,"-")}" data-task-id="${f(String(n))}" ${r!=="completed"?"disabled":""}>
        ${u.label}
      </button>
    `}renderCompletedCard(e){const t=e.task||e;return`
      <div class="task-completed-card">
        <div class="task-completed-title">${f(t.title)||a("tasks.task_untitled")}</div>
        <div class="task-completed-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
      </div>
    `}_attachCardListeners(e){e.querySelectorAll(".task-grid-card").forEach(t=>{t.addEventListener("click",s=>{if(s.target.closest(".task-card-action, .task-card-done"))return;const n=t.dataset.taskId,r=this._currentTabItems?.get(String(n));r&&this.showTaskDetail(r.item,r.tabConfig)})}),e.querySelectorAll(".task-card-action:not(.btn-partner-play):not(.btn-partner-verify):not(.btn-invite-action):not(.btn-pwa-install):not(.btn-email-task)").forEach(t=>{t.dataset.taskId&&!t.disabled&&t.addEventListener("click",()=>this.handleClaim(t.dataset.taskId,t))}),e.querySelectorAll(".btn-pwa-install").forEach(t=>{const s=t.dataset.taskId;t.addEventListener("click",()=>this.handlePwaInstall(s))}),e.querySelectorAll(".btn-invite-action").forEach(t=>{t.addEventListener("click",()=>this.handleInviteFriends())}),e.querySelectorAll(".btn-partner-play").forEach(t=>{const s=t.dataset.taskId;t.addEventListener("click",()=>this.handlePartnerPlay(s,t))}),e.querySelectorAll(".btn-partner-verify").forEach(t=>{const s=t.dataset.taskId;t.addEventListener("click",()=>this.handlePartnerVerify(s,t))}),e.querySelectorAll(".btn-email-task").forEach(t=>{t.addEventListener("click",async s=>{if(s.preventDefault(),this.hideTaskDetail(),F("light"),y.isTelegram){const n=t.dataset.email||"",r=t.dataset.subject||"",o=r?a("tasks.email_copy_with_subject",{email:n,subject:r}):n;try{await navigator.clipboard.writeText(o),this.showToast(a("tasks.toast_email_copied"))}catch{this.showToast(a("tasks.toast_send_to",{email:n}))}}else this.showToast(a("tasks.toast_opening_email")),window.location.href=t.href})})}}const Bt=new tr,Rs="tournament-leaderboard-update";class Fn{constructor(){this.container=null,this.state="loading",this.errorMessage="",this.isVisible=!1,this.tournaments={upcoming:[],active:[],completed:[]},this.activeTab="upcoming",this.selectedTournament=null,this.selectedLeaderboard=[],this.selectedUserEntry=null,this.showingDetail=!1,this.featuredIndex=0,this.carouselInterval=null,this.countdownInterval=null,this.waitingRoomInterval=null,this.pollingInterval=null,this.fetchInProgress=!1,this._pendingActions=new Map,this.toastTimeout=null,this._stopLocaleChange=null,this.handleTabChange=this.handleTabChange.bind(this),this.handleCardClick=this.handleCardClick.bind(this),this.handleRegister=this.handleRegister.bind(this),this.handleCancelRegistration=this.handleCancelRegistration.bind(this),this.handleCloseDetail=this.handleCloseDetail.bind(this),this.handleBack=this.handleBack.bind(this),this.handleRetry=this.handleRetry.bind(this),this.handleShare=this.handleShare.bind(this),this.handleLeaderboardUpdate=this.handleLeaderboardUpdate.bind(this),this.handleCarouselDot=this.handleCarouselDot.bind(this)}init(e){this.container||(this.container=document.createElement("div"),this.container.id="tournaments-page",this.container.className="tournaments-page",this.container.style.display="none",e.appendChild(this.container),this._stopLocaleChange=q(()=>{this.isVisible&&(this.render(),this.showingDetail&&this.renderDetailModal())}))}show(){this.isVisible=!0,this.container.style.display="block";const e=new URLSearchParams(window.location.search).get("tab");e&&(e==="upcoming"||e==="active"||e==="history")&&this.handleTabChange(e),this.fetchData(),this.fetchLiveCount(),this.startCountdownUpdates(),this.startPolling(),this.startCarouselRotation(),window.addEventListener(Rs,this.handleLeaderboardUpdate)}hide(){this.isVisible=!1,this.container.style.display="none",this.stopCountdownUpdates(),this.stopWaitingRoomUpdates(),this.stopPolling(),this.stopCarouselRotation(),this.closeDetail(),window.removeEventListener(Rs,this.handleLeaderboardUpdate)}startCarouselRotation(){this.stopCarouselRotation(),this.carouselInterval=setInterval(()=>{if(this.isVisible&&!this.showingDetail){const e=this.getFeaturedTournaments().length;e>1&&(this.featuredIndex=(this.featuredIndex+1)%e,this.updateCarouselDisplay())}},5e3)}stopCarouselRotation(){this.carouselInterval&&(clearInterval(this.carouselInterval),this.carouselInterval=null)}updateCarouselDisplay(){const e=this.container.querySelector(".featured-carousel");if(!e)return;const t=e.querySelectorAll(".featured-wrapper"),s=e.querySelectorAll(".carousel-dot");t.forEach((n,r)=>{n.classList.toggle("active",r===this.featuredIndex)}),s.forEach((n,r)=>{n.classList.toggle("active",r===this.featuredIndex)})}handleCarouselDot(e){this.featuredIndex=e,this.updateCarouselDisplay(),this.startCarouselRotation()}getFeaturedTournaments(){const e=[...this.tournaments.upcoming,...this.tournaments.active],t=e.filter(s=>s.featured);return t.length>0?t:e.slice(0,1)}startCountdownUpdates(){this.stopCountdownUpdates(),this.updateCountdowns(),this.countdownInterval=setInterval(()=>{this.isVisible&&this.updateCountdowns()},1e3)}stopCountdownUpdates(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdowns(){this.container.querySelectorAll("[data-countdown]").forEach(t=>{const s=t.dataset.countdown;if(s){const n=Z(s);if(t.classList.contains("modal-stat-card")){const c=t.querySelector(".modal-stat-value");c&&(c.textContent=n);return}const r=t.querySelector("svg"),l=t.classList.contains("live")?a("tournaments.countdown_left",{time:n}):n;if(r){const c=t.querySelector("span");c?c.textContent=l:(t.innerHTML="",t.appendChild(r),t.appendChild(document.createTextNode(l)))}else t.textContent=l}})}startWaitingRoomUpdates(){this.stopWaitingRoomUpdates(),this.waitingRoomInterval=setInterval(()=>{this.updateWaitingRoomCountdown()},1e3)}stopWaitingRoomUpdates(){this.waitingRoomInterval&&(clearInterval(this.waitingRoomInterval),this.waitingRoomInterval=null)}startPolling(){this.stopPolling(),this.pollingInterval=setInterval(()=>{this.state==="loaded"&&this.activeTab==="active"&&this.fetchData(!0)},15e3)}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}updateWaitingRoomCountdown(){const e=this.container.querySelector(".waiting-room-countdown");if(!e||!this.selectedTournament?.start_time)return;const t=new Date,n=new Date(this.selectedTournament.start_time)-t;if(n<=0){e.textContent=a("tournaments.starting"),this.stopWaitingRoomUpdates(),this.fetchData(),this.selectedTournament?.id&&this.handleCardClick(this.selectedTournament.id);return}const r=Math.floor(n/1e3),o=Math.floor(r/3600),l=Math.floor(r%3600/60),c=r%60;o>0?e.textContent=`${o}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`:e.textContent=`${l}:${c.toString().padStart(2,"0")}`}handleLeaderboardUpdate(e){const{tournamentId:t,leaderboard:s}=e.detail||{};if(!this.showingDetail||!this.selectedTournament||this.selectedTournament.id!==t)return;this.selectedLeaderboard=s||[];const n=this.container.querySelector(".leaderboard");n&&(n.outerHTML=this.renderLeaderboard(this.selectedLeaderboard,this.selectedUserEntry))}async fetchData(e=!1){if(!this.fetchInProgress){this.fetchInProgress=!0,e||(this.state="loading",this.render());try{let t=this.activeTab;const s=await we(t);s.success?(this.activeTab==="active"?this.tournaments.active=s.tournaments.filter(n=>n.status==="active"):this.activeTab==="upcoming"?this.tournaments.upcoming=s.tournaments.filter(n=>n.status==="announced"||n.status==="registration_open"):this.activeTab==="history"&&(this.tournaments.completed=s.tournaments.filter(n=>n.status==="completed"||n.status==="prizes_distributed"||n.status==="cancelled")),this.state="loaded"):e||(this.state="error",this.errorMessage=s.error||a("tournaments.error_load"))}catch(t){e||(this.state="error",this.errorMessage=t?.message||a("tournaments.error_connect"))}finally{this.fetchInProgress=!1}this.render()}}async fetchLiveCount(){try{const e=await we("active");e.success&&(this.tournaments.active=e.tournaments.filter(t=>t.status==="active"),this.updateLiveIndicator())}catch(e){}}updateLiveIndicator(){const e=this.container?.querySelector('[data-tab="active"]');if(!e)return;const t=this.tournaments.active?.length>0,s=e.querySelector(".live-dot");if(t&&!s){const n=document.createElement("span");n.className="live-dot",e.appendChild(n)}else!t&&s&&s.remove()}async handleTabChange(e){e!==this.activeTab&&(Nn(),this.activeTab=e,e==="active"?this.startPolling():this.stopPolling(),this.updateTabsUI(),this.fetchDataForTab())}updateTabsUI(){this.container.querySelectorAll(".tab-btn").forEach(e=>{e.classList.toggle("active",e.dataset.tab===this.activeTab)})}async fetchDataForTab(){const e=this.container.querySelector(".tournament-list-container");e&&(e.innerHTML=`
        <div class="loading-state">
          <div class="loading-spinner"></div>
          <p>${a("tournaments.loading")}</p>
        </div>
      `);try{let t=this.activeTab;const s=await we(t);s.success&&(this.activeTab==="active"?this.tournaments.active=s.tournaments.filter(n=>n.status==="active"):this.activeTab==="upcoming"?this.tournaments.upcoming=s.tournaments.filter(n=>n.status==="announced"||n.status==="registration_open"):this.activeTab==="history"&&(this.tournaments.completed=s.tournaments.filter(n=>n.status==="completed"||n.status==="prizes_distributed"||n.status==="cancelled")))}catch(t){}this.updateTournamentListUI()}updateTournamentListUI(){const e=this.container.querySelector(".tournament-list-container");e&&(e.innerHTML=this.renderTournamentList(),this.attachListEventListeners())}attachListEventListeners(){this.container.querySelectorAll(".tournament-card-simple").forEach(e=>{e.addEventListener("click",t=>{t.target.closest(".simple-btn")||this.handleCardClick(e.dataset.tournamentId)})}),this.container.querySelectorAll(".tournament-list-container .btn-outline[data-tournament-id], .tournament-list-container .btn-outline-green[data-tournament-id]").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),this.handleCardClick(e.dataset.tournamentId)})}),this.container.querySelectorAll(".tournament-list-container .btn-outline-green[data-register-id]").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),this.handleRegister(e.dataset.registerId)})}),this.container.querySelectorAll(".tournament-list-container .btn-play-simple").forEach(e=>{e.addEventListener("click",t=>{t.stopPropagation(),this.handlePlayNow(e.dataset.playId)})})}async handleCardClick(e){F("light");const s=[...this.tournaments.active,...this.tournaments.upcoming,...this.tournaments.completed].find(n=>n.id===e);if(s){this.selectedTournament=s,this.showingDetail=!0,this.renderDetailModal();const[n,r]=await Promise.all([ca(e),da(e)]);n.success&&(this.selectedTournament={...this.selectedTournament,...n.tournament}),r.success&&(this.selectedLeaderboard=r.leaderboard,this.selectedUserEntry=r.userEntry),this.renderDetailModal()}}_pendingFor(e){return this._pendingActions.get(String(e))}_paintPending(e,t){this.container?.querySelectorAll(e).forEach(s=>{s.classList.add("processing"),s.disabled=!0,s.textContent=t})}_pendingButtonHtml(e,t,s,n){return`<button class="${e} processing" ${t}="${s}" disabled>${n}</button>`}_repaintFromState(){this.container&&(this.render(),this.showingDetail&&this.renderDetailModal())}async handleRegister(e){const t=String(e);if(this._pendingActions.has(t))return;F("medium"),this._pendingActions.set(t,"register"),this._paintPending(`[data-register-id="${t}"]`,a("tournaments.cta_registering"));let s;try{s=await ua(e)}catch(n){console.error("[TOURNAMENTS] register rejected:",n),s={success:!1,error:n?.message||a("tournaments.error_connect")}}finally{this._pendingActions.delete(t)}s.success?(W("success"),this.showToast(a("tournaments.toast_registered")),this.selectedTournament?.id===e&&(this.selectedTournament.is_registered=!0,this.selectedTournament.current_entrants=(this.selectedTournament.current_entrants||0)+1),this.fetchData(),this.showingDetail&&this.renderDetailModal(),h.getBalance({force:!0})):(W("error"),this.showToast(a("tournaments.toast_error",{error:s.error})),this._repaintFromState())}async handleCancelRegistration(e){const t=String(e);if(this._pendingActions.has(t))return;F("medium"),this._pendingActions.set(t,"cancel"),this._paintPending(`[data-cancel-id="${t}"]`,a("tournaments.cta_cancelling"));let s;try{s=await ha(e)}catch(n){console.error("[TOURNAMENTS] cancel rejected:",n),s={success:!1,error:n?.message||a("tournaments.error_connect")}}finally{this._pendingActions.delete(t)}s.success?(W("success"),this.showToast(a("tournaments.toast_registration_cancelled")),this.selectedTournament?.id===e&&(this.selectedTournament.is_registered=!1,this.selectedTournament.current_entrants=Math.max(0,(this.selectedTournament.current_entrants||1)-1)),this.fetchData(),this.showingDetail&&this.renderDetailModal(),h.getBalance({force:!0})):(W("error"),this.showToast(a("tournaments.toast_error",{error:s.error})),this._repaintFromState())}handleCloseDetail(){this.closeDetail()}closeDetail(){this.showingDetail=!1,this.selectedTournament=null,this.selectedLeaderboard=[],this.selectedUserEntry=null,this.stopWaitingRoomUpdates();const e=this.container.querySelector(".tournament-detail-modal");e&&(e.classList.remove("visible"),setTimeout(()=>e.remove(),300))}handleBack(){this.showingDetail?this.closeDetail():C("/")}handleRetry(){this.fetchData()}async handleShare(e){if(!e)return;F("light");const t=e.status==="completed"||e.status==="prizes_distributed",s=parseFloat(e.current_prize_pool)||parseFloat(e.prize_pool)||0,n=a("app.name");let r;if(t){const l=this.selectedUserEntry?.rank;l&&l<=3?r=a("tournaments.share_result_podium",{rank:l,name:e.name,appName:n,prizePool:B(s)}):l?r=a("tournaments.share_result_ranked",{rank:l,name:e.name,appName:n}):r=a("tournaments.share_results",{name:e.name,appName:n,prizePool:B(s)})}else{const l=parseFloat(e.entry_fee)||0,c=l===0?a("tournaments.share_entry_free"):a("tournaments.share_entry_fee",{fee:B(l)});r=a("tournaments.share_invite",{name:e.name,appName:n,prizePool:B(s),entry:c})}const o=`${window.location.origin}/tournaments?id=${e.id}`;if(y.isTelegram&&window.Telegram?.WebApp?.openTelegramLink){const l=`https://t.me/share/url?url=${encodeURIComponent(o)}&text=${encodeURIComponent(r)}`;window.Telegram.WebApp.openTelegramLink(l);return}if(navigator.share)try{await navigator.share({title:e.name,text:r,url:o});return}catch(l){if(l.name==="AbortError")return}try{await navigator.clipboard.writeText(`${r}
${o}`),this.showToast(a("tournaments.toast_link_copied"))}catch{this.showToast(a("tournaments.toast_copy_failed"))}}showToast(e){this.toastTimeout&&clearTimeout(this.toastTimeout);let t=document.querySelector(".tournament-toast");t||(t=document.createElement("div"),t.className="tournament-toast",document.body.appendChild(t)),t.textContent=e,t.classList.add("show"),this.toastTimeout=setTimeout(()=>{t.classList.remove("show")},3e3)}render(){if(this.container){if(this.state==="loading"){this.container.innerHTML=`
        <div class="tournaments-page-inner">
          <div class="tournaments-header">
            <button class="back-btn-hud" id="tournaments-back-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <h1>${a("tournaments.title")}</h1>
            <p>${a("tournaments.loading_subtitle")}</p>
          </div>
          ${this.renderTabs()}
          <div class="loading-state">
            <div class="loading-spinner"></div>
            <p>${a("tournaments.loading")}</p>
          </div>
        </div>
      `,this.attachEventListeners();return}if(this.state==="error"){this.container.innerHTML=`
        <div class="tournaments-page-inner">
          <div class="tournaments-header">
            <button class="back-btn-hud" id="tournaments-back-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <h1>${a("tournaments.error_title")}</h1>
          </div>
          <div class="glass-card error-card">
            <div class="error-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <p class="error-message">${this.errorMessage}</p>
            <button class="retry-btn" id="tournaments-retry-btn">${a("tournaments.btn_retry")}</button>
          </div>
        </div>
      `,this.attachEventListeners();return}this.container.innerHTML=`
      <div class="tournaments-page-inner">
        <div class="tournaments-header">
          <button class="back-btn-hud" id="tournaments-back-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <h1>${a("tournaments.title")}</h1>
          <p>${a("tournaments.subtitle_html")}</p>
        </div>
        ${this.renderFeaturedSection()}
        ${this.renderTabs()}
        <div class="tournament-list-container">
          ${this.renderTournamentList()}
        </div>
      </div>
    `,this.attachEventListeners()}}renderTabs(){const e=this.tournaments.active?.length>0;return`
      <div class="tournament-tabs">
        ${[{id:"active",label:a("tournaments.live"),showLiveDot:e},{id:"upcoming",label:a("tournaments.tab_upcoming")},{id:"history",label:a("tournaments.tab_history")}].map(s=>`
          <button
            class="tab-btn ${this.activeTab===s.id?"active":""}"
            data-tab="${s.id}"
          >
            ${s.label}${s.showLiveDot?'<span class="live-dot"></span>':""}
          </button>
        `).join("")}
      </div>
    `}renderFeaturedSection(){const e=this.getFeaturedTournaments();return e.length===0?"":(this.featuredIndex>=e.length&&(this.featuredIndex=0),this.renderFeaturedCarousel(e))}renderTournamentList(){let e=[],t="";return this.activeTab==="active"?(e=this.tournaments.active,t=a("tournaments.empty_live")):this.activeTab==="upcoming"?(e=this.tournaments.upcoming,t=a("tournaments.empty_upcoming")):this.activeTab==="history"&&(e=this.tournaments.completed,t=a("tournaments.empty_history")),e.length===0?`
        <div class="glass-card empty-state">
          <div class="empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
          </div>
          <p>${t}</p>
        </div>
      `:`
      <div class="tournament-list">
        ${e.map(s=>this.renderTournamentCard(s)).join("")}
      </div>
    `}renderFeaturedCarousel(e){return e.length===0?"":`
      <div class="featured-carousel">
        <div class="featured-cards-container">
          ${e.map((t,s)=>this.renderFeaturedCard(t,s)).join("")}
        </div>
        ${e.length>1?`
          <div class="carousel-dots">
            ${e.map((t,s)=>`
              <button class="carousel-dot ${s===this.featuredIndex?"active":""}" data-dot-index="${s}"></button>
            `).join("")}
          </div>
        `:""}
      </div>
    `}renderFeaturedCard(e,t){const s=parseFloat(e.entry_fee)||0,n=parseFloat(e.current_prize_pool)||parseFloat(e.prize_pool)||0,r=e.current_entrants||0,o=e.max_entrants||100,l=e.is_registered;let c="",d="";return(e.status==="announced"||e.status==="registration_open")&&e.start_time?(c=e.start_time,d=`
        <div class="featured-info-pill time" data-countdown="${c}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>${Z(c)}</span>
        </div>
      `):e.status==="active"&&e.end_time&&(c=e.end_time,d=`
        <div class="featured-info-pill time live" data-countdown="${c}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span>${Z(c)}</span>
        </div>
      `),`
      <div class="featured-wrapper ${t===this.featuredIndex?"active":""}" data-tournament-id="${e.id}">
        <div class="featured-ribbon">${a("tournaments.featured_ribbon")}</div>
        <div class="featured-card">
          <div class="featured-card-background"></div>
          <div class="featured-card-content">
            <div class="featured-card-footer">
              ${this.renderFeaturedButton(e,l,s)}
            </div>
          </div>
        </div>
        <div class="featured-info-pills">
          <div class="featured-info-pill prize">
            <span class="pill-label">${a("tournaments.pill_prize")}</span>
            <span class="pill-value">${B(n)}</span>
          </div>
          <div class="featured-info-pill entry">
            <span class="pill-label">${a("tournaments.entry")}</span>
            <span class="pill-value">${s===0?a("tournaments.free"):B(s)}</span>
          </div>
          ${d}
        </div>
        <div class="featured-progress-bar">
          <div class="featured-progress-fill" style="width: ${Math.min(100,r/o*100)}%"></div>
          <span class="featured-progress-text">${v("tournaments.players_progress",o,{current:r})}</span>
        </div>
      </div>
    `}renderFeaturedButton(e,t,s){return e.status==="cancelled"?`<button class="featured-btn btn-cancelled" disabled>${a("tournaments.cta_cancelled")}</button>`:e.status==="completed"||e.status==="prizes_distributed"?`<button class="featured-btn btn-outline" data-tournament-id="${e.id}">${a("tournaments.cta_view_results")}</button>`:e.can_play===!0?`<button class="featured-btn btn-play-featured" data-play-id="${e.id}">${a("tournaments.cta_play_now")}</button>`:e.status==="active"&&!t?`<button class="featured-btn btn-outline" disabled>${a("tournaments.cta_in_progress")}</button>`:t?`<button class="featured-btn btn-registered-featured" data-tournament-id="${e.id}">${a("tournaments.cta_registered")}</button>`:e.can_register===!1?e.status==="announced"?`<button class="featured-btn btn-outline" disabled>${a("tournaments.cta_coming_soon")}</button>`:`<button class="featured-btn btn-outline" disabled>${a("tournaments.cta_closed")}</button>`:(e.current_entrants||0)>=(e.max_entrants||100)?`<button class="featured-btn btn-outline" disabled>${a("tournaments.cta_full")}</button>`:this._pendingFor(e.id)==="register"?this._pendingButtonHtml("featured-btn btn-register-featured","data-register-id",e.id,a("tournaments.cta_registering")):`<button class="featured-btn btn-register-featured" data-register-id="${e.id}">${a("tournaments.cta_register")}</button>`}renderTournamentCard(e){const t=parseFloat(e.entry_fee)||0,s=parseFloat(e.current_prize_pool)||parseFloat(e.prize_pool)||0,n=e.current_entrants||0,r=e.max_entrants||100,o=e.min_entrants||Math.floor(r*.5),l=e.is_registered;let c="";(e.status==="announced"||e.status==="registration_open")&&e.start_time?c=`
        <div class="tournament-countdown-pill ${new Date(e.start_time)-new Date<36e5?"urgent":""}" data-countdown="${e.start_time}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${Z(e.start_time)}
        </div>
      `:e.status==="active"&&e.end_time&&(c=`
        <div class="tournament-countdown-pill live" data-countdown="${e.end_time}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          ${Z(e.end_time)}
        </div>
      `);const d=e.type||e.game_type||a("tournaments.tournament_fallback"),p=n/r*100>=50,m=n>=o;let g="";return e.status!=="completed"&&e.status!=="prizes_distributed"&&(g=`
        <div class="tournament-card-filling">
          ${p?`<span class="filling-indicator"><span class="filling-dot"></span> ${a("tournaments.filling_fast")}</span>`:""}
          <span class="filling-players">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <span class="${m?"reached-min":""}">${n}</span>/${r}
            <span class="min-players ${m?"reached":""}">${a("tournaments.min_players",{count:o})}</span>
          </span>
        </div>
      `),`
      <div class="tournament-card-simple ${e.featured?"is-featured":""}"${e.featured?` data-label="${a("tournaments.featured")}"`:""} data-tournament-id="${e.id}">
        <div class="tournament-card-simple-header">
          <div class="tournament-card-simple-info">
            <h3 class="tournament-card-simple-name">${e.name||a("tournaments.tournament_fallback")}</h3>
            <span class="tournament-card-simple-subtitle">${d}</span>
          </div>
          ${c}
        </div>
        ${g}
        <div class="tournament-card-simple-footer">
          <div class="tournament-card-simple-stats">
            <div class="simple-stat">
              <span class="simple-stat-label">${a("tournaments.card_prize_pool")}</span>
              <span class="simple-stat-value prize">${B(s)}</span>
            </div>
            <div class="simple-stat-divider"></div>
            <div class="simple-stat">
              <span class="simple-stat-label">${a("tournaments.entry")}</span>
              <span class="simple-stat-value">${t===0?a("tournaments.free"):B(t)}</span>
            </div>
          </div>
          ${this.renderCardButton(e,l,t)}
        </div>
      </div>
    `}renderCardButton(e,t,s){return e.status==="cancelled"?`<button class="simple-btn btn-outline-disabled" disabled>${a("tournaments.cancelled")}</button>`:e.status==="completed"||e.status==="prizes_distributed"?`<button class="simple-btn btn-outline" data-tournament-id="${e.id}">${a("tournaments.card_view_results")}</button>`:e.can_play===!0?`<button class="simple-btn btn-play-simple" data-play-id="${e.id}">${a("tournaments.card_play_now")}</button>`:e.status==="active"&&!t?`<button class="simple-btn btn-outline-disabled" disabled>${a("tournaments.card_in_progress")}</button>`:t?`<button class="simple-btn btn-outline-green" data-tournament-id="${e.id}">${a("tournaments.card_registered")}</button>`:e.can_register===!1?(e.current_entrants||0)>=(e.max_entrants||100)?`<button class="simple-btn btn-outline-disabled" disabled>${a("tournaments.card_full")}</button>`:e.status==="announced"?`<button class="simple-btn btn-outline" disabled>${a("tournaments.card_coming_soon")}</button>`:`<button class="simple-btn btn-outline-disabled" disabled>${a("tournaments.card_closed")}</button>`:(e.current_entrants||0)>=(e.max_entrants||100)?`<button class="simple-btn btn-outline-disabled" disabled>${a("tournaments.card_full")}</button>`:this._pendingFor(e.id)==="register"?this._pendingButtonHtml("simple-btn btn-outline-green","data-register-id",e.id,a("tournaments.cta_registering")):`<button class="simple-btn btn-outline-green" data-register-id="${e.id}">${a("tournaments.card_register")}</button>`}renderDetailModal(){const e=this.container.querySelector(".tournament-detail-modal"),t=e&&e.classList.contains("visible");if(e&&e.remove(),!this.selectedTournament)return;const s=this.selectedTournament,n=pa(s.status),r=parseFloat(s.entry_fee)||0,o=parseFloat(s.current_prize_pool)||parseFloat(s.prize_pool)||0,l=s.current_entrants||0,c=s.max_entrants||100,d=s.is_registered,u=this.shouldShowWaitingRoom(s),p=s.status==="announced"||s.status==="registration_open"?s.start_time:s.end_time,m=document.createElement("div");m.className="tournament-detail-modal",m.innerHTML=`
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <button class="modal-share-btn" title="${a("tournaments.share")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        </button>
        <button class="modal-close-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="modal-header">
          <div class="detail-header">
            <span class="status-badge ${n.className}">${n.label}</span>
            <h2 class="detail-title">${s.name||a("tournaments.tournament_fallback")}</h2>
          </div>
        </div>

        <div class="modal-body">
          ${u?this.renderWaitingRoom(s):""}

          <div class="modal-stats-grid">
            <div class="modal-stat-card highlight">
              <div class="modal-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                </svg>
              </div>
              <div class="modal-stat-value">${B(o)}</div>
              <div class="modal-stat-label">${a("tournaments.detail_prize_pool")}</div>
            </div>
            <div class="modal-stat-card">
              <div class="modal-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <div class="modal-stat-value">${r===0?a("tournaments.free"):B(r)}</div>
              <div class="modal-stat-label">${a("tournaments.detail_entry_fee")}</div>
            </div>
            <div class="modal-stat-card" ${p?'data-countdown="'+p+'"':""}>
              <div class="modal-stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div class="modal-stat-value modal-time-value">${this.getTimeDisplay(s)}</div>
              <div class="modal-stat-label">${this.getTimeLabel(s)}</div>
            </div>
          </div>

          <div class="modal-player-progress">
            <div class="modal-progress-header">
              <span class="modal-progress-label">
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
                ${a("tournaments.players")}
              </span>
              <span class="modal-progress-count">${l} <span>/ ${c}</span></span>
            </div>
            <div class="modal-progress-bar">
              <div class="modal-progress-fill" style="width: ${Math.min(100,l/c*100)}%"></div>
            </div>
          </div>

          ${this.renderPrizeTable(s.prizes||s.prize_structure)}

          ${this.renderRulesSection(s.rules)}

          <div class="modal-section">
            <h3 class="modal-section-title">${a("tournaments.leaderboard")}</h3>
            ${this.renderLeaderboard(this.selectedLeaderboard,this.selectedUserEntry)}
          </div>
        </div>

        <div class="modal-footer">
          <div class="detail-actions">
            ${this.renderDetailButton(s,d,r)}
          </div>
        </div>
      </div>
    `,this.container.appendChild(m),t?m.classList.add("visible"):requestAnimationFrame(()=>requestAnimationFrame(()=>m.classList.add("visible"))),u&&this.startWaitingRoomUpdates(),m.querySelector(".modal-close-btn").addEventListener("click",()=>this.handleCloseDetail()),m.querySelector(".modal-overlay").addEventListener("click",()=>this.handleCloseDetail()),m.querySelector(".modal-share-btn").addEventListener("click",()=>this.handleShare(s));const g=m.querySelector("[data-register-id]");g&&g.addEventListener("click",()=>this.handleRegister(g.dataset.registerId));const S=m.querySelector("[data-cancel-id]");S&&S.addEventListener("click",()=>this.handleCancelRegistration(S.dataset.cancelId));const E=m.querySelector("[data-play-id]");E&&E.addEventListener("click",()=>this.handlePlayNow(E.dataset.playId))}renderPrizeTable(e){return!e||e.length===0?"":`
      <div class="detail-section">
        <h3 class="section-title">${a("tournaments.prizes_heading")}</h3>
        <div class="prize-table">
          ${e.map((t,s)=>{const n=t.place||s+1,r=parseFloat(t.prize_amount)||parseFloat(t.amount)||0,o=t.prize_type==="percentage"?parseFloat(t.prize_value):t.percent||t.percentage||null;return`
              <div class="prize-row ${s<3?`prize-top-${s+1}`:""}">
                <span class="prize-place">${this.formatPlace(n)}</span>
                <span class="prize-amount">${B(r)}</span>
                ${o?`<span class="prize-percent">(${o}%)</span>`:""}
              </div>
            `}).join("")}
        </div>
      </div>
    `}formatPlace(e){return e===1?a("tournaments.place_1"):e===2?a("tournaments.place_2"):e===3?a("tournaments.place_3"):a("tournaments.place_nth",{place:e})}getTimeDisplay(e){return(e.status==="announced"||e.status==="registration_open")&&e.start_time?Z(e.start_time):e.status==="active"&&e.end_time?Z(e.end_time):e.status==="completed"||e.status==="prizes_distributed"?a("tournaments.ended"):"--"}getTimeLabel(e){return(e.status==="announced"||e.status==="registration_open")&&e.start_time?a("tournaments.time_starts_in"):e.status==="active"&&e.end_time?a("tournaments.time_left"):e.status==="completed"||e.status==="prizes_distributed"?a("tournaments.time_status"):a("tournaments.time")}renderRulesSection(e){if(!e||Array.isArray(e)&&e.length===0)return"";const t=Array.isArray(e)?e:[e];return`
      <div class="detail-section">
        <h3 class="section-title">${a("tournaments.rules_heading")}</h3>
        <div class="rules-list">
          ${t.map((s,n)=>`
            <div class="rule-item">
              <span class="rule-number">${n+1}</span>
              <span class="rule-text">${s}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `}renderWaitingRoom(e){if(!e)return"";const t=e.current_entrants||0,s=e.max_entrants||100,n=e.is_registered,r=new Date,l=new Date(e.start_time)-r,c=Math.max(0,Math.floor(l/1e3)),d=Math.floor(c/3600),u=Math.floor(c%3600/60),p=c%60;let m;return d>0?m=`${d}:${u.toString().padStart(2,"0")}:${p.toString().padStart(2,"0")}`:m=`${u}:${p.toString().padStart(2,"0")}`,`
      <div class="waiting-room">
        <div class="waiting-room-header">
          <div class="waiting-room-pulse"></div>
          <span class="waiting-room-title">${a("tournaments.waiting_room")}</span>
        </div>
        <div class="waiting-room-countdown-container">
          <span class="waiting-room-label">${a("tournaments.waiting_starts_in")}</span>
          <span class="waiting-room-countdown">${m}</span>
        </div>
        <div class="waiting-room-players">
          <div class="waiting-room-player-count">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span>${v("tournaments.waiting_players",s,{current:t})}</span>
          </div>
          <div class="waiting-room-bar">
            <div class="waiting-room-bar-fill" style="width: ${Math.min(100,t/s*100)}%"></div>
          </div>
        </div>
        ${n?`
          <div class="waiting-room-status registered">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="16" height="16">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>${a("tournaments.waiting_registered")}</span>
          </div>
        `:`
          <div class="waiting-room-status not-registered">
            <span>${a("tournaments.waiting_register_to_join")}</span>
          </div>
        `}
      </div>
    `}shouldShowWaitingRoom(e){if(!e||!e.is_registered||!e.start_time)return!1;const t=new Date,n=new Date(e.start_time)-t,r=5*60*1e3;return n>0&&n<=r&&(e.status==="registration_open"||e.status==="announced")}renderLeaderboard(e,t){if(!e||e.length===0)return`<p class="leaderboard-empty">${a("tournaments.leaderboard_empty")}</p>`;let s='<div class="leaderboard">';return e.forEach((n,r)=>{const o=n.rank||r+1,l=n.is_current_user||t&&n.user_id===t.user_id;s+=this.renderLeaderboardRow(n,o,l)}),t&&!e.find(n=>n.user_id===t.user_id)&&(s+=`<div class="leaderboard-separator">${a("tournaments.leaderboard_you")}</div>`,s+=this.renderLeaderboardRow(t,t.rank,!0)),s+="</div>",s}renderLeaderboardRow(e,t,s){const n=e.username||e.display_name||a("tournaments.player_fallback"),r=parseFloat(e.total_cashouts)||parseFloat(e.score)||0,o=e.games_played||0;return`
      <div class="leaderboard-row ${s?"is-user":""} ${t<=3?`rank-${t}`:""}">
        <span class="lb-rank">#${t}</span>
        <span class="lb-name">${f(n)}</span>
        <span class="lb-score">${B(r)}</span>
        <span class="lb-games">${v("tournaments.games_played",o)}</span>
      </div>
    `}renderDetailButton(e,t,s){if(e.status==="cancelled")return`
        <div class="cancelled-notice">
          <span class="cancelled-badge">${a("tournaments.cta_cancelled")}</span>
          <p>${a("tournaments.cancelled_notice")}</p>
        </div>
      `;if(e.status==="completed"||e.status==="prizes_distributed")return"";if(e.can_play===!0)return`
        <button class="tournament-btn btn-play" data-play-id="${e.id}">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          ${a("tournaments.cta_play_now")}
        </button>
      `;if(e.status==="active"&&!t)return`<button class="tournament-btn btn-disabled" disabled>${a("tournaments.cta_in_progress")}</button>`;if(t)return e.status==="registration_open"?this._pendingFor(e.id)==="cancel"?this._pendingButtonHtml("tournament-btn btn-cancel","data-cancel-id",e.id,a("tournaments.cta_cancelling")):`<button class="tournament-btn btn-cancel" data-cancel-id="${e.id}">${a("tournaments.cta_cancel_registration")}</button>`:`<div class="registered-notice"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="16" height="16"><polyline points="20 6 9 17 4 12"></polyline></svg> ${a("tournaments.detail_registered")}</div>`;if(e.can_register===!1)return(e.current_entrants||0)>=(e.max_entrants||100)?`<button class="tournament-btn btn-full" disabled>${a("tournaments.cta_tournament_full")}</button>`:e.status==="announced"?`<button class="tournament-btn btn-disabled" disabled>${a("tournaments.cta_coming_soon")}</button>`:`<button class="tournament-btn btn-disabled" disabled>${a("tournaments.cta_registration_closed")}</button>`;if((e.current_entrants||0)>=(e.max_entrants||100))return`<button class="tournament-btn btn-full" disabled>${a("tournaments.cta_tournament_full")}</button>`;if(this._pendingFor(e.id)==="register")return this._pendingButtonHtml("tournament-btn btn-register","data-register-id",e.id,a("tournaments.cta_registering"));const r=s===0?a("tournaments.cta_join_free"):a("tournaments.cta_register_fee",{fee:B(s)});return`<button class="tournament-btn btn-register" data-register-id="${e.id}">${r}</button>`}attachEventListeners(){const e=this.container.querySelector("#tournaments-back-btn");e&&e.addEventListener("click",()=>this.handleBack());const t=this.container.querySelector("#tournaments-retry-btn");t&&t.addEventListener("click",()=>this.handleRetry()),this.container.querySelectorAll(".tab-btn").forEach(s=>{s.addEventListener("click",()=>this.handleTabChange(s.dataset.tab))}),this.container.querySelectorAll(".carousel-dot").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation();const r=parseInt(s.dataset.dotIndex,10);this.handleCarouselDot(r)})}),this.container.querySelectorAll(".featured-wrapper").forEach(s=>{s.addEventListener("click",n=>{n.target.closest(".featured-btn")||this.handleCardClick(s.dataset.tournamentId)})}),this.container.querySelectorAll(".btn-register-featured").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.handleRegister(s.dataset.registerId)})}),this.container.querySelectorAll(".btn-play-featured").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.handlePlayNow(s.dataset.playId)})}),this.container.querySelectorAll(".tournament-card-simple").forEach(s=>{s.addEventListener("click",n=>{n.target.closest(".simple-btn")||this.handleCardClick(s.dataset.tournamentId)})}),this.container.querySelectorAll(".btn-outline[data-tournament-id], .btn-outline-green[data-tournament-id]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.handleCardClick(s.dataset.tournamentId)})}),this.container.querySelectorAll(".btn-outline-green[data-register-id]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.handleRegister(s.dataset.registerId)})}),this.container.querySelectorAll(".btn-play-simple").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.handlePlayNow(s.dataset.playId)})})}handlePlayNow(e){const t=this.container.querySelector(`[data-play-id="${e}"]`);if(t?.classList.contains("processing"))return;t&&(t.classList.add("processing"),t.disabled=!0);const s=this.tournaments.active?.find(r=>r.id===e);if(!s){this.showToast(a("tournaments.toast_not_found"));return}if(!s.can_play){s.can_play,s.status,s.is_registered,this.showToast(a("tournaments.toast_cannot_join")),this.fetchData();return}s.name,s.status,s.can_play,s.game_server_id,s.game_server_url,s.is_registered,F("medium"),Cn(e),sessionStorage.removeItem("game_origin");const n=y.isTelegram?"/tg/play/":"/play/";window.location.href=n}}const Nt=new Fn;class sr{constructor(){this.container=null,this.isVisible=!1,this.activeTab="deposit",this.refreshInterval=null,this.isTonMode=y.features?.useTonConnect||!1,this.depositTab=new ma(this),this.withdrawTab=new fa(this),this.depositTab.onBalanceChange=()=>this._fetchAndUpdateBalance({force:!0}),this.withdrawTab.onBalanceChange=()=>this._updateBalanceDisplay(),this._tonStatusHandler=null,this.handleBack=this.handleBack.bind(this),this.handleTabClick=this.handleTabClick.bind(this)}init(e){this.container=document.createElement("div"),this.container.id="view-wallet",this.container.className="wallet-page",this.container.style.display="none",e.appendChild(this.container)}async show(){if(!this.container)return;this.isVisible=!0,this._openedAt=Date.now(),this.container.style.display="block";const e=new URLSearchParams(window.location.search).get("tab");e&&(e==="deposit"||e==="withdraw")&&e!==this.activeTab&&(this.activeTab=e),this.isTonMode=y.features?.useTonConnect||!1,this.depositTab.updateMode(),this.withdrawTab.updateMode&&this.withdrawTab.updateMode(),this.isTonMode&&(await lt.initialize(),this._tonStatusHandler=s=>{this.depositTab.onWalletStatusChange(s)},lt.onStatusChange(this._tonStatusHandler)),this.render(),this._attachEventListeners(),await this._fetchAndUpdateBalance();const t=this.container.querySelector("#wallet-tab-deposit");t&&await this.depositTab.load(t),this.refreshInterval&&clearInterval(this.refreshInterval),this.refreshInterval=setInterval(()=>{if(this._fetchAndUpdateBalance(),this.activeTab==="deposit"){const s=this.container?.querySelector("#wallet-tab-deposit");s&&this.depositTab.refreshHistory(s)}else this.withdrawTab.refreshHistory()},1e4),ie("wallet_page_viewed",{mode:this.isTonMode?"ton":"web"}),L.track("modal_opened","navigation",{modal_name:"wallet"}),L.track("deposit_modal_opened","payment",{source:"wallet_page"}),Qt("any")}hide(){if(!this.container)return;const e=this._openedAt?Date.now()-this._openedAt:0;L.track("modal_closed","navigation",{modal_name:"wallet",duration_ms:e}),this.activeTab==="deposit"&&L.track("deposit_modal_closed","payment",{duration_ms:e,step_reached:"form"});const t=this.container.querySelector('#wallet-tab-deposit input[name="amount"], #wallet-tab-deposit input[type="number"]');t&&t.value&&L.track("form_abandoned","interaction",{form_name:this.activeTab==="deposit"?"deposit":"withdraw",duration_ms:e}),this.isVisible=!1,this.container.style.display="none",this.refreshInterval&&(clearInterval(this.refreshInterval),this.refreshInterval=null),this.withdrawTab.stopStatusPolling(),this._tonStatusHandler&&(lt.onStatusChange(null),this._tonStatusHandler=null)}isShowing(){return this.isVisible}handleBack(){C("/")}async handleTabClick(e){const t=e.target.dataset.tab;if(!(!t||t===this.activeTab)){if(L.track("tab_switched","navigation",{from_tab:this.activeTab,to_tab:t}),t==="withdraw"&&L.track("withdrawal_modal_opened","payment",{source:"wallet_page"}),this.activeTab=t,this.container.querySelectorAll(".wallet-tab-btn").forEach(s=>{s.classList.toggle("active",s.dataset.tab===t)}),this.container.querySelectorAll(".wallet-tab-content").forEach(s=>{s.classList.toggle("active",s.id===`wallet-tab-${t}`)}),t==="deposit"){const s=this.container.querySelector("#wallet-tab-deposit");s&&await this.depositTab.load(s)}else{const s=this.container.querySelector("#wallet-tab-withdraw");s&&await this.withdrawTab.load(s)}ie("wallet_tab_switched",{tab:t})}}render(){if(!this.container)return;const e=ee();e&&(this.activeTab="withdraw");const t=e?"":this.depositTab.getHTML(),s=this.withdrawTab.getHTML(),n=e?"":`<div class="wallet-tabs">
          <button class="wallet-tab-btn${this.activeTab==="deposit"?" active":""}" data-tab="deposit">${a("wallet.deposit")}</button>
          <button class="wallet-tab-btn${this.activeTab==="withdraw"?" active":""}" data-tab="withdraw">${a("wallet.withdraw")}</button>
        </div>`,r=e?"":`<div class="wallet-tab-content${this.activeTab==="deposit"?" active":""}" id="wallet-tab-deposit">
            ${t}
            <div class="deposit-history">
              <h3 class="history-title">${a("wallet.recent_deposits")}</h3>
              <div class="deposit-history-list">
                <div class="history-empty">${a("common.loading")}</div>
              </div>
            </div>
          </div>`;this.container.innerHTML=`
      <div class="wallet-page-inner">
        <!-- Header -->
        <header class="wallet-header">
          <button class="back-btn" id="wallet-back-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div class="wallet-logo">
            <span class="logo-viper">${a("app.logo_first")}</span>
            <span class="logo-royale">${a("app.logo_second")}</span>
          </div>
        </header>

        ${n}

        <!-- Main Content -->
        <main class="wallet-main">
          ${r}

          <!-- Withdraw Tab -->
          <div class="wallet-tab-content${this.activeTab==="withdraw"?" active":""}" id="wallet-tab-withdraw">
            ${s}
          </div>
        </main>
      </div>
    `}_attachEventListeners(){if(!this.container)return;this.container.querySelector("#wallet-back-btn")?.addEventListener("click",this.handleBack),this.container.querySelectorAll(".wallet-tab-btn").forEach(s=>{s.addEventListener("click",this.handleTabClick)});const e=this.container.querySelector("#wallet-tab-deposit"),t=this.container.querySelector("#wallet-tab-withdraw");e&&this.depositTab.attachListeners(e),t&&this.withdrawTab.attachListeners(t)}async _fetchAndUpdateBalance({force:e=!1}={}){try{await h.getBalance({force:e})}catch(s){console.error("[WALLET PAGE] authManager.getBalance() failed:",s)}if((h.state.balance===null||h.state.balance===void 0)&&h.state.token)try{if(h.state.authProvider==="casino")return;const s=h.state.authProvider==="telegram"?"/tg/balance":"/standalone/balance",n=await fetch(`${y.lobbyApiUrl}${s}`,{headers:{Authorization:`Bearer ${h.state.token}`}});if(n.ok){const r=await n.json();let o=r.available_balance??r.balance;if(o!=null){const l=typeof o=="number"?o.toFixed(2):String(o);h.state.balance=l,h.state.balanceFloat=parseFloat(l),h.state.currency=r.currency||"USD"}}}catch(s){console.error("[WALLET PAGE] Direct balance API call failed:",s)}this._updateBalanceDisplay()}_getBalanceDisplay(){let e=h.state.balance;return(e==null||e==="")&&(h.state.balanceFloat!==null&&h.state.balanceFloat!==void 0&&!isNaN(h.state.balanceFloat)?e=h.state.balanceFloat.toFixed(2):e="0.00"),e}_updateBalanceDisplay(){}destroy(){this.hide(),this.withdrawTab.destroy(),this.container&&(this.container.remove(),this.container=null)}}const Ft=new sr,nr=120,ar=220,Ps=9999,ir="—",rr="…",Bs=["ping-good","ping-mid","ping-bad","ping-none"];function us(i){return typeof i=="number"&&Number.isFinite(i)&&i>0}function Ht(i){if(!us(i))return{text:ir,cls:"ping-none",label:a("arenas.ping_aria_not_measured")};const e=Math.round(i),t=e>Ps?a("arenas.ping_ms_capped",{ms:Ps}):a("arenas.ping_ms",{ms:e});return e>=ar?{text:t,cls:"ping-bad",label:a("arenas.ping_aria_high",{ping:t})}:e>=nr?{text:t,cls:"ping-mid",label:a("arenas.ping_aria_moderate",{ping:t})}:{text:t,cls:"ping-good",label:a("arenas.ping_aria_good",{ping:t})}}function Hn(i,e={}){return us(i)?{...Ht(i),state:"measured"}:e?.measuring?{text:rr,cls:"ping-none",label:a("arenas.ping_aria_measuring"),state:"measuring"}:{...Ht(null),state:"none"}}function Dt(i,e){if(!i||typeof i.get!="function"||!Array.isArray(e))return null;let t=null;for(const s of e){const n=i.get(String(s?.id));us(n)&&(t===null||n<t)&&(t=n)}return t}function Ns(i,e={}){const t=Hn(i,e);if(t.state==="none")return{show:!1,text:"",cls:"ping-none",label:"",note:"",state:"none"};if(t.state==="measuring")return{show:!0,text:a("arenas.pay_ping_checking"),cls:"ping-none",label:a("arenas.pay_ping_aria_measuring"),note:"",state:"measuring"};const s=t.cls==="ping-bad"?a("arenas.pay_ping_aria_high",{ping:t.text}):t.cls==="ping-mid"?a("arenas.pay_ping_aria_moderate",{ping:t.text}):a("arenas.pay_ping_aria_good",{ping:t.text});return{show:!0,text:t.text,cls:t.cls,label:s,note:t.cls==="ping-bad"?a("arenas.pay_ping_high_latency"):"",state:"measured"}}function yt(i,e){!i||!e||(i.textContent=e.text,i.classList&&(i.classList.remove(...Bs),Bs.includes(e.cls)&&i.classList.add(e.cls)),typeof i.setAttribute=="function"&&i.setAttribute("aria-label",e.label))}const or="pwa-splash",lr="ready",Fs="viper:loadscreen-dismissed";function Dn(){return typeof document<"u"?document.getElementById(or):null}function cr(){const i=Dn();return i?(typeof window<"u"&&typeof window.__viperSplashReady=="function"?window.__viperSplashReady():i.classList.add(lr),!0):!1}function Hs(){const i=Dn();return!!i&&!i.classList.contains("fade-out")}function dr({pollMs:i=250}={}){return new Promise(e=>{if(!Hs()){e();return}let t=!1;const s=()=>{t||(t=!0,document.removeEventListener(Fs,s),clearInterval(n),e())};document.addEventListener(Fs,s);const n=setInterval(()=>{Hs()||s()},i)})}const Ds="stake-buttons--wrap",ur=11,hr=.5,pr=/^([A-Za-z]{2,})[\s ]*(.*\d.*)$/,mr=/^(.*\d.*?)[\s ]+([A-Za-z]{2,})$/;function fr(i,e){const t=i==null?"":String(i).trim();if(ta(e))return{code:"",amount:t};let s=pr.exec(t);return s?{code:s[1],amount:s[2]}:(s=mr.exec(t),s?{code:s[2],amount:s[1]}:{code:"",amount:t})}function bt(i){const e=[...i.querySelectorAll(".stake-amount")];if(i.style.removeProperty("--stake-fs"),i.classList.remove(Ds),!e.length)return;const t=i.querySelector(".stake-btn"),s=parseFloat(getComputedStyle(t).fontSize)||16,n=()=>e.some(r=>r.scrollWidth>r.clientWidth+.5);for(let r=s;r>=ur;r-=hr)if(r<s&&i.style.setProperty("--stake-fs",`${r}px`),!n())return;i.style.removeProperty("--stake-fs"),i.classList.add(Ds)}function gr(i){if(typeof ResizeObserver!="function")return bt(i),()=>{};let e=-1;const t=new ResizeObserver(s=>{const n=Math.round(s[s.length-1].contentRect.width);n!==e&&(e=n,bt(i))});return t.observe(i),document.fonts?.ready?.then(()=>i.isConnected&&bt(i)),()=>t.disconnect()}const vr=3e4,yr=1e4,br=3e3,_r=5e3,Os=6e4,qs=[1e3,3e3,7e3,15e3],wr=2e4,kr=10,Us=50,Sr=10,Cr=48*3600*1e3,Tr=new Set(["REGISTRATION_CLOSED","REGISTRATION_NOT_YET_OPEN","TOURNAMENT_FULL","ALREADY_REGISTERED","WITHDRAWAL_CLOSED","NOT_REGISTERED","NOT_STARTED","TOURNAMENT_ENDED","PAYMENT_REFUSED","INSUFFICIENT_BALANCE","NETWORK","BAD_RESPONSE","UNKNOWN","WALLET_UNAVAILABLE","SERVER_UNAVAILABLE"]),$r=new Set(["NETWORK","BAD_RESPONSE","UNKNOWN","INTERNAL_ERROR"]),Er=i=>$r.has(i.code)||i.status===0||i.status>=500,Lr=3e3,Ar=new Set(["live","finishing","result"]),Mr=new Set(["registered","confirming","refund_pending"]),Vs=new Set(["won","lost","withdrawn","refunded","failed"]),_t=new Set(["paying","unresolved","withdrawing","refunding"]),Ir=5e3;class xr{constructor({api:e=ga,now:t=()=>Date.now(),isHidden:s=()=>!1,refreshBalance:n=()=>{},freeRoundFor:r=()=>!1,freeRoundsOn:o=()=>!1,onChange:l=()=>{},onUnavailable:c=()=>{}}={}){this.api=e,this.now=t,this.isHidden=s,this.refreshBalance=n,this.freeRoundFor=r,this.freeRoundsOn=o,this.onChange=l,this.onUnavailable=c,this.reset()}reset(){this.status="idle",this.unavailable=!1,this.tournaments=[],this.entries=[],this.hydrated=new Map,this.dropped=new Set,this.notAvailableNote=!1,this.lastEntryStatus=new Map,this.busy=new Map,this.messages=new Map,this.confirmingWithdraw=new Set,this.confirmRegisterId=null,this.confirmFee=null,this.confirmFree=!1,this.freeRoundGone=new Set,this.pendingSince=new Map,this.lastFetch=new Map,this.staleSince=new Map,this.staleTries=new Map,this.clockSuspect=new Set,this.lastStaleView=new Map,this.sheetId=null,this.leaderboard=null,this.lastListAt=0,this.lastSheetAt=0,this._listInFlight=null,this._reads=new Map,this.uncertain=new Map,this.lateClosed=new Set,this._lbGen=0,this.gen=new Map}bump(e){const t=String(e),s=(this.gen.get(t)||0)+1;return this.gen.set(t,s),s}changed(){if(this.confirmRegisterId!=null){const e=this.confirmRegisterId,t=this.byId(e);!t||this.unavailable||this.cardView(t).cta!=="register"?this.confirmRegisterId=null:ct(t)!==this.confirmFee?(this.confirmRegisterId=null,this.messages.set(e,{kind:"err",code:"PRICE_CHANGED",text:""})):this.freeRoundOf(t)!==this.confirmFree&&(this.confirmRegisterId=null,this.messages.set(e,{kind:"err",code:this.confirmFree?"FREE_ROUND_GONE":"FREE_ROUND_ARRIVED",text:""}))}try{this.onChange()}catch(e){console.error("[CasinoTournaments] render failed",e)}}byId(e){return this.tournaments.find(t=>String(t.id)===String(e))||null}freeRoundOf(e){return!e||this.freeRoundGone.has(String(e.id))?!1:this.freeRoundHeld(e)}freeRoundHeld(e){try{return this.freeRoundFor(e.entry_price_usd)===!0}catch{return!1}}freeEntriesChanged(){for(const e of[...this.freeRoundGone]){const t=this.byId(e);(!t||!this.freeRoundHeld(t))&&this.freeRoundGone.delete(e)}this.changed()}stateOf(e,t=this.now()){const s=String(e.id);return va(e,{now:t,lastEntryStatus:this.lastEntryStatus.get(s)||null,lateClosed:this.lateClosed.has(s)})}recordEntry(e){const t=e?.my_entry?.status;t&&this.lastEntryStatus.set(String(e.id),t)}upsert(e){if(!e||e.id==null)return;const t=String(e.id);if(this.dropped.has(t))return;const s=this.tournaments.findIndex(n=>String(n.id)===t);s===-1?this.tournaments.push(e):this.tournaments[s]=e,this.recordEntry(e)}drop(e){const t=String(e);this.dropped.add(t),this.notAvailableNote=!0,this.tournaments=this.tournaments.filter(s=>String(s.id)!==t),this.messages.delete(t),this.sheetId===t&&this.closeSheet()}handleGlobalCode(e,t){if(t.code==="TOURNAMENTS_UNAVAILABLE")return this.unavailable=!0,this.onUnavailable(),!0;if(t.code==="TOURNAMENT_NOT_AVAILABLE")return this.drop(e),!0;if(t.code==="TOURNAMENT_NOT_FOUND"){const s=String(e);return this.tournaments=this.tournaments.filter(n=>String(n.id)!==s),this.sheetId===s&&this.closeSheet(),!0}return!1}load(){if(this._listInFlight)return this._listInFlight;this.status==="idle"&&(this.status="loading"),this.lastListAt=this.now();const e=new Map(this.gen),t=this.now();return this._listInFlight=(async()=>{const[s,n]=await Promise.all([this.api.listTournaments(),this.api.listMyEntries(Us)]);if(!s.ok){s.code==="TOURNAMENTS_UNAVAILABLE"||s.status===404?(this.unavailable=!0,this.onUnavailable()):this.status!=="ready"&&(this.status="error");return}this.unavailable=!1,this.tournaments=s.tournaments.filter(r=>r&&r.id!=null&&!this.dropped.has(String(r.id))).map(r=>{const o=String(r.id);return((this.gen.get(o)||0)!==(e.get(o)||0)||this.busy.has(o))&&this.byId(o)||r});for(const r of this.tournaments)this.recordEntry(r),this.settleUncertain(String(r.id),t,r);n.ok&&(this.entries=n.entries),this.status="ready",await this.hydrateEntries()})().finally(()=>{this._listInFlight=null,this.changed()}),this._listInFlight}async hydrateEntries(){const e=[];for(const s of this.entries){if(e.length>=kr)break;const n=String(s.tournament_id);s.tournament_name||this.hydrated.has(n)||this.byId(n)||e.includes(n)||!Vs.has(s.status)&&!_t.has(s.status)||e.push(n)}if(!e.length)return;(await Promise.all(e.map(s=>this.api.getTournament(s)))).forEach((s,n)=>this.hydrated.set(e[n],s.ok?s.tournament:null))}reloadOne(e,{fresh:t=!1}={}){const s=String(e),n=this._reads.get(s);if(n)return t?(n.followUp||(n.followUp=n.promise.then(()=>this.reloadOne(s))),n.followUp):n.promise;const r=this.bump(s),o=this.now();this.lastFetch.set(s,o);const l={promise:null,followUp:null};return l.promise=(async()=>{try{const c=await this.api.getTournament(s);if(this.gen.get(s)!==r)return;c.ok&&c.tournament?(this.upsert(c.tournament),this.settleUncertain(s,o,c.tournament)):this.handleGlobalCode(s,c)}finally{this._reads.delete(s),this.changed()}})(),this._reads.set(s,l),l.promise}settleUncertain(e,t,s){const n=this.uncertain.get(e);n!=null&&(s?.my_entry||t-n>=Lr)&&(this.uncertain.delete(e),this.messages.delete(e))}async reloadMy(){this._myInFlight=!0,this.lastMyAt=this.now();try{const e=await this.api.listMyEntries(Us);e.ok&&(this.entries=e.entries,await this.hydrateEntries())}finally{this._myInFlight=!1,this.changed()}}async reloadLeaderboard(e){const t=String(e),s=++this._lbGen,n=await this.api.getLeaderboard(t,Sr);s!==this._lbGen||this.sheetId!==t||(n.ok?this.leaderboard={id:t,rows:n.leaderboard,at:this.now()}:this.handleGlobalCode(t,n),this.changed())}requestRegister(e){const t=String(e),s=this.byId(t);if(!(!s||this.busy.has(t)||this.uncertain.has(t)||this.cardView(s).cta!=="register")){if(!ct(s)){this.setError(t,{code:"NO_PRICE",message:""}),this.changed();return}this.messages.delete(t),this.confirmRegisterId=t,this.confirmFee=ct(s),this.confirmFree=this.freeRoundOf(s),this.changed(),this.reloadOne(t),this.confirmFree&&this.refreshBalance()}}cancelRegister(){this.confirmRegisterId!=null&&(this.confirmRegisterId=null,this.changed())}confirmRegister(e){const t=String(e);if(this.confirmRegisterId!==t)return;this.confirmRegisterId=null;const s=this.confirmFree,n=this.byId(t);if(n&&this.freeRoundOf(n)!==s){this.messages.set(t,{kind:"err",code:s?"FREE_ROUND_GONE":"FREE_ROUND_ARRIVED",text:""}),this.changed();return}return this.register(t,{free:s})}async register(e,{free:t=!1}={}){const s=String(e),n=this.byId(s);if(!(!n||this.busy.has(s)||this.uncertain.has(s))&&this.stateOf(n).cta==="register"){this.busy.set(s,"register"),this.messages.delete(s),this.lastEntryStatus.delete(s),this.changed();try{let r;t?r="free_spin":this.freeRoundsOn()===!0&&(r="cash");const o=await this.api.registerForTournament(s,{funding:r});if(o.ok){this.bump(s);const l=o.entry||(o.pending?{status:"paying"}:null);l?.status&&this.lastEntryStatus.set(s,l.status),l&&this.upsert({...n,my_entry:l}),this.refreshBalance()}else Er(o)&&o.code!=="TOURNAMENTS_UNAVAILABLE"?(this.uncertain.set(s,this.now()),this.setError(s,{code:"NETWORK",message:""}),this.refreshBalance()):t&&(o.code==="FREE_SPIN_UNAVAILABLE"||o.code==="PAYMENT_REFUSED")?(this.freeRoundGone.add(s),this.setError(s,{code:"FREE_ROUND_GONE",message:""}),this.refreshBalance()):this.handleGlobalCode(s,o)||(o.code==="REGISTRATION_CLOSED"&&this.lateClosed.add(s),this.setError(s,o));this.byId(s)&&(o.ok||Tr.has(o.code)||this.uncertain.has(s))&&await this.reloadOne(s,{fresh:!0})}finally{this.busy.delete(s),this.changed()}}}requestWithdraw(e){const t=String(e),s=this.byId(t);!s||this.busy.has(t)||this.stateOf(s).cta!=="withdraw"||(this.messages.delete(t),this.confirmingWithdraw.add(t),this.changed())}cancelWithdraw(e){this.confirmingWithdraw.delete(String(e)),this.changed()}async confirmWithdraw(e){const t=String(e),s=this.byId(t);if(!(!s||this.busy.has(t)||!this.confirmingWithdraw.has(t))){if(this.confirmingWithdraw.delete(t),this.stateOf(s).cta!=="withdraw"){this.changed();return}this.busy.set(t,"withdraw"),this.messages.delete(t),this.changed();try{const n=await this.api.withdrawFromTournament(t);if(n.ok){this.bump(t);const r=n.entry?.status?n.entry:{status:"withdrawing"};this.lastEntryStatus.set(t,r.status),this.upsert({...s,my_entry:r}),this.refreshBalance()}else this.handleGlobalCode(t,n)||this.setError(t,n);this.byId(t)&&await this.reloadOne(t,{fresh:!0})}finally{this.busy.delete(t),this.changed()}}}setError(e,t){this.messages.set(String(e),{kind:"err",code:t.code,text:t.message||""})}dismissMessage(e){this.messages.delete(String(e)),this.changed()}openSheet(e){const t=String(e);this.byId(t)&&(this.sheetId=t,this.leaderboard=null,this.lastSheetAt=this.now(),this.changed(),this.reloadOne(t),this.reloadLeaderboard(t))}closeSheet(){this.sheetId=null,this.leaderboard=null,this.changed()}tick(e=this.now()){if(this.isHidden()||this.unavailable)return;let t=!1;!this._listInFlight&&e-this.lastListAt>=vr&&this.load();for(const r of this.tournaments){const o=String(r.id),l=this.stateOf(r,e);if(l.poll||this.uncertain.has(o)){this.pendingSince.has(o)||this.pendingSince.set(o,e);const u=e-this.pendingSince.get(o),p=u>=Os?_r:br;e-(this.lastFetch.get(o)||0)>=p&&this.reloadOne(o),u>=Os&&!this._slowShown?.has(o)&&((this._slowShown||=new Set).add(o),t=!0)}else this.pendingSince.has(o)&&(this.pendingSince.delete(o),this._slowShown?.delete(o));if(this.isWaiting(r,l,e)){const u=this.staleKey(r,l);this.staleSince.has(u)||this.staleSince.set(u,e);const p=this.staleSince.get(u),m=this.staleTries.get(u)||0;m<qs.length&&e-p>=qs[m]&&(this.staleTries.set(u,m+1),this.reloadOne(o)),e-p>=wr&&this.clockSuspect.add(u)}const d=this.isWaiting(r,l,e);this.lastStaleView.get(o)!==d&&(this.lastStaleView.set(o,d),t=!0)}const s=new Set(this.tournaments.map(r=>String(r.id)));if(this.entries.some(r=>_t.has(r.status)&&!s.has(String(r.tournament_id)))&&!this._myInFlight&&e-(this.lastMyAt||0)>=Ir&&this.reloadMy(),this.sheetId){const r=this.byId(this.sheetId);r&&["running","ending","settling"].includes(r.status)&&e-this.lastSheetAt>=yr&&(this.lastSheetAt=e,this.reloadOne(this.sheetId),this.reloadLeaderboard(this.sheetId))}t&&this.changed()}staleKey(e,t){return`${e.id}|${e.status}|${t.countdown?.kind||""}`}isWaiting(e,t,s=this.now()){return t.stale?!this.clockSuspect.has(this.staleKey(e,t)):!1}cardView(e,t=this.now()){const s=String(e.id),n=this.stateOf(e,t),r=this.isWaiting(e,n,t),o=this.busy.get(s)||(this.uncertain.has(s)?"checking":null);return{t:e,id:s,state:n,waiting:r,busy:o,cta:o?null:n.cta,freeRound:n.cta==="register"&&this.freeRoundOf(e),message:this.messages.get(s)||null,confirmingWithdraw:this.confirmingWithdraw.has(s)&&!o,confirmingRegister:this.confirmRegisterId===s,slow:!!this._slowShown?.has(s)}}model(e=this.now()){const t=this.tournaments.map(d=>this.cardView(d,e)),s={now:[],next:[],soon:[]};for(const d of t)Ar.has(d.state.phase)?s.now.push(d):Mr.has(d.state.phase)?s.next.push(d):s.soon.push(d);const n=new Set(this.tournaments.map(d=>String(d.id))),r=[];let o=null;for(const d of this.entries){const u=String(d.tournament_id),p=_t.has(d.status)&&!n.has(u);if(!Vs.has(d.status)&&!p)continue;const m=this.hydrated.get(u)||(n.has(u)?this.byId(u):null),g={entry:d,name:d.tournament_name||m?.name||"",endsAt:d.ends_at||m?.ends_at||null,entrants:m?.entrants??null},S=ya(g.endsAt);p?r.unshift(g):!o&&(d.status==="won"||d.status==="lost")&&Number.isFinite(S)&&e-S<=Cr?o=g:r.push(g)}const l=this.sheetId?this.byId(this.sheetId):null,c=this.confirmRegisterId!=null?this.byId(this.confirmRegisterId):null;return{status:this.status,unavailable:this.unavailable,groups:s,empty:this.status==="ready"&&t.length===0,notAvailableNote:this.notAvailableNote,result:o,history:r,sheet:l?{card:this.cardView(l,e),leaderboard:this.leaderboard?.id===this.sheetId?this.leaderboard.rows:null}:null,confirm:c&&this.cardView(c,e).cta==="register"?this.cardView(c,e):null,hasLive:t.some(d=>d.state.phase==="live")}}}const Ot='<svg class="tn-check" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"/></svg>',zs='<svg class="tn-ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7.5v5.5M12 16.5v.01"/></svg>',j='<span class="tn-spin" aria-hidden="true"></span>',Rr='<span class="tn-usd">USD</span>';function N(i,e="receive"){if(!i||i.amount==null||i.amount===""||!Number.isFinite(Number(i.amount)))return"";const t=i.currency||"USD";return k(Zt(i.amount,t,{direction:e}),t)+(i.usdFallback?Rr:"")}const me=i=>dn(i?.prize_pool,i?.prize_pool_usd),Pr=i=>dn(i?.guarantee,i?.guarantee_usd);function tt(i,e,t="receive"){return Number.isFinite(i)?N({amount:i,currency:e?.currency,usdFallback:e?.usdFallback},t):""}const w=i=>f(i==null?"":String(i)),hs=i=>w(i?.name||a("tournaments.tournament_fallback"));function Br(i,e){return`<b class="tn-digits" data-until="${w(i)}">${w(un(i,e))}</b>`}const Nr={scheduled:"tournaments.casino_status_scheduled",open:"tournaments.casino_status_open",registered:"tournaments.casino_status_registered",live:"tournaments.casino_status_live",late:"tournaments.casino_status_live",in_progress:"tournaments.casino_status_live",confirming:"tournaments.casino_status_confirming",refund_pending:"tournaments.casino_status_refund",refunded:"tournaments.casino_status_open",finishing:"tournaments.casino_status_finishing",result:"tournaments.casino_status_result"},Fr={opens:"tournaments.casino_clock_opens",starts:"tournaments.casino_clock_starts",ends:"tournaments.casino_clock_ends"};function On(i){const{phase:e}=i.state;return e==="scheduled"?"is-scheduled":e==="finishing"||e==="result"?"is-finishing":i.t.status==="running"?"is-running":""}function qn(i,e){const{state:t,waiting:s}=i,n=Nr[t.phase],r=n?a(n):w(i.t.status);let o="";return t.phase==="finishing"?o=`<span class="tn-clock">${a("tournaments.casino_results_soon")}</span>`:s?o=`<span class="tn-clock"><span class="tn-gap">${a("tournaments.casino_clock_any_moment")}</span></span>`:t.countdown&&!t.stale&&(o=`<span class="tn-clock">${a(Fr[t.countdown.kind])} ${Br(t.countdown.at,e)}</span>`),`<div class="tn-marquee"><span class="tn-status"><span class="tn-dot" aria-hidden="true"></span><span>${r}</span></span>${o}</div>`}function Un(i){const e=i.t,{phase:t}=i.state;return t==="scheduled"?a("tournaments.casino_when_opens",{time:w(K(e.registration_opens_at))}):t==="finishing"||t==="result"?a("tournaments.casino_when_ended",{time:w(K(e.ends_at))}):e.status==="running"?a("tournaments.casino_when_ends",{time:w(K(e.ends_at))}):a("tournaments.casino_when_starts",{time:w(K(e.starts_at))})}function pe(i){return!!N(me(i))}function ps(i){return i.pool_sharing==="separate"?a("tournaments.casino_prize_pool_casino"):a("tournaments.casino_prize_pool")}function Vn(i){const e=[];return(Number(i.guarantee_usd)>0||Number(i.guarantee?.amount)>0)&&e.push(`<span class="tn-badge gtd">${a("tournaments.casino_badge_guaranteed")}</span>`),i.pool_mode==="growing"&&e.push(`<span class="tn-badge grow">${a("tournaments.casino_badge_growing")}</span>`),e.length?`<div class="tn-badges">${e.join("")}</div>`:""}const ms=i=>i?.paid?.funding==="free_spin";function Hr(i){const e=N(at(i),"pay");if(!pe(i)&&!e)return"";const t=pe(i)?`
      <div class="tn-pot-main">
        <div class="tn-pot-label">${ps(i)}</div>
        <div class="tn-pot-amount">${N(me(i))}</div>
      </div>`:"",s=ms(i.my_entry)?`
      <div class="tn-pot-entry">
        <div class="tn-pot-label">${a("tournaments.casino_paid_with")}</div>
        <div class="tn-pot-fee free">${a("tournaments.casino_free_round")}</div>
      </div>`:e?`
      <div class="tn-pot-entry">
        <div class="tn-pot-label">${a("tournaments.casino_entry_fee")}</div>
        <div class="tn-pot-fee">${e}</div>
      </div>`:"";return`
    <div class="tn-pot">${t}
      <div class="tn-pot-side">${s}${Vn(i)}</div>
    </div>`}function Dr(i){const e=Number(i.entrants)||0,t=Number(i.max_entrants)||0,s=Number(i.min_entrants)||0,n=t>0?a("tournaments.casino_players_max",{count:e,max:t}):a("tournaments.casino_players",{count:e}),r=s>e&&["scheduled","registration_open"].includes(i.status)?`<div class="tn-crowd-sub need">${v("tournaments.casino_needs_more",s-e)}</div>`:"",o=t>0?`<div class="tn-fill" role="presentation"><i style="width:${Math.min(100,Math.round(e/t*100))}%"></i></div>`:"";return`<div class="tn-crowd"><div class="tn-crowd-text"><div class="tn-crowd-line">${n}</div>${r}${o}</div></div>`}function Or(i){if(!pe(i))return"";const e=me(i),t=es(i.places,e.amount).slice(0,3);return t.length?`<ol class="tn-strip">${t.map(s=>`
    <li class="tn-strip-place p${s.place}">
      <span class="tn-strip-label">${a("tournaments.casino_place",{place:s.place})}</span>
      <span class="tn-strip-amt">${tt(s.amount,e)}</span>
    </li>`).join("")}</ol>`:""}function qr(i){const{message:e,state:t}=i;if(e){const s=Ur[e.code],n=s?a(s):e.text?w(e.text):a(Vr(e.code));return`<div class="tn-msg err" role="alert">${zs}<span>${n}</span></div>`}return t.notice==="payment_not_accepted"?`<div class="tn-msg err" role="status">${zs}<span>${a("tournaments.casino_payment_not_accepted")}</span></div>`:t.notice==="withdrawn"?`<div class="tn-msg ok" role="status">${Ot}<span>${a("tournaments.casino_withdrawn_notice")}</span></div>`:i.slow&&t.phase==="confirming"?`<div class="tn-msg info" role="status"><span>${a("tournaments.casino_still_confirming")}</span></div>`:""}const Ur={INSUFFICIENT_BALANCE:"tournaments.casino_err_balance",PAYMENT_REFUSED:"tournaments.casino_payment_not_accepted",FREE_ROUND_GONE:"tournaments.casino_err_free_round_gone",FREE_ROUND_ARRIVED:"tournaments.casino_err_free_round_arrived"};function Vr(i){return i==="NETWORK"||i==="BAD_RESPONSE"?"tournaments.casino_err_network":i==="SESSION_UNAVAILABLE"?"tournaments.casino_err_session":i==="PRICE_CHANGED"?"tournaments.casino_err_price_changed":"tournaments.casino_err_generic"}const P=(i,e="")=>`<span class="tn-pill ${e}">${i}</span>`;function J(i,e=null){if(e?.freeRound)return`<div class="tn-price free"><span class="tn-price-label">${a("tournaments.casino_entry")}</span><span class="tn-price-amount">${a("tournaments.casino_free_round")}</span></div>`;if(ms(i?.my_entry))return`<div class="tn-price free"><span class="tn-price-label">${a("tournaments.casino_paid_with")}</span><span class="tn-price-amount">${a("tournaments.casino_free_round")}</span></div>`;const t=N(at(i),"pay");return t?`<div class="tn-price"><span class="tn-price-label">${a("tournaments.casino_entry")}</span><span class="tn-price-amount">${t}</span></div>`:'<div class="tn-price"></div>'}function X(i,e,t,s,n=""){return`<button type="button" class="tn-btn ${s}" data-action="${i}" data-id="${w(e)}"${n}>${t}</button>`}function qt(i){const e=i.state.entry||{},t=e.rank!=null&&Number.isFinite(Number(e.rank))?Number(e.rank):null,s=Number(i.t.entrants)>0?`<span class="tn-rank-of">${a("tournaments.casino_rank_of",{count:Number(i.t.entrants)})}</span>`:"",n=Number(e.games_played)||0,r=n===0?a("tournaments.casino_first_game"):[v("tournaments.games_played",n),Number(e.best_cashout)>0?a("tournaments.casino_best",{points:w(Le(e.best_cashout))}):""].filter(Boolean).join(" · ");return`
    <div class="tn-race">
      <div class="tn-rank"><span class="tn-rank-label">${a("tournaments.casino_rank")}</span>
        <span class="tn-rank-num${t==null?" none":""}">${t==null?"…":`#${t}`}</span>${s}</div>
      <div class="tn-score-label">${a("tournaments.casino_your_score")}</div>
      <div class="tn-score">${w(Le(e.score))}</div>
      <div class="tn-score-sub">${r}</div>
    </div>`}function zr(i,e=!1){const{t,id:s,state:n,busy:r,waiting:o,cta:l}=i;if(r==="register")return`<div class="tn-stub-row">${J(t,i)}${X("register",s,`${j}${a("tournaments.casino_confirming")}`,"reg busy",' disabled aria-busy="true"')}</div>`;if(r==="checking")return`<div class="tn-stub-row">${J(t,i)}${P(`${j}${a("tournaments.casino_waiting_update")}`,"wait")}</div>`;if(r==="withdraw")return`<div class="tn-stub-row">${J(t,i)}${P(`${j}${a("tournaments.casino_refund_progress")}`,"wait")}</div>`;if(i.confirmingWithdraw)return`
      <div class="tn-msg info"><span>${a("tournaments.casino_withdraw_question")}</span></div>
      <div class="tn-stub-row">
        ${X("withdraw-cancel",s,a("tournaments.casino_keep_place"),"ghost")}
        ${X("withdraw-confirm",s,a("tournaments.casino_withdraw"),"danger")}
      </div>`;switch(n.phase){case"scheduled":return`<div class="tn-stub-row">${J(t,i)}${P(o?`${j}${a("tournaments.casino_waiting_open")}`:a("tournaments.casino_not_open"),o?"wait":"")}</div>`;case"open":case"refunded":case"late":{let c;if(l==="register"){const u=n.phase==="late"?a("tournaments.casino_join_late"):a("tournaments.casino_register");c=X("register",s,u,"reg")}else o?c=P(`${j}${a("tournaments.casino_waiting_update")}`,"wait"):n.full?c=P(a("tournaments.casino_full")):c=P(a("tournaments.casino_not_open"));return`<div class="tn-stub-row">${(n.phase==="refunded"?P(`${Ot}${a("tournaments.casino_refunded")}`,"ok"):"")||J(t,i)}${c}</div>`}case"registered":return`<div class="tn-stub-row">${P(`${Ot}${a("tournaments.casino_registered")}`,"ok")}${l==="withdraw"?X("withdraw",s,a("tournaments.casino_withdraw"),"ghost"):o?P(`${j}${a("tournaments.casino_waiting_start")}`,"wait"):J(t,i)}</div>`;case"live":return`${e?"":qt(i)}${l==="play"?X("play",s,a("tournaments.casino_play"),"play wide"):P(`${j}${a("tournaments.casino_waiting_update")}`,"wait wide")}`;case"in_progress":return`<div class="tn-stub-row">${J(t,i)}${P(a("tournaments.casino_in_progress"))}</div>`;case"confirming":return`<div class="tn-stub-row">${J(t,i)}${X("register",s,`${j}${a("tournaments.casino_confirming")}`,"reg busy",' disabled aria-busy="true"')}</div>`;case"refund_pending":return`<div class="tn-stub-row">${J(t,i)}${P(`${j}${a("tournaments.casino_refund_progress")}`,"wait")}</div>`;case"finishing":return`${n.entry&&!e?`${qt(i)}<div class="tn-score-note">${a("tournaments.casino_counting")}</div>`:""}${P(`${j}${a("tournaments.casino_finishing")}`,"wait wide")}`;case"result":return P(a("tournaments.casino_result_ready"),"wide");default:return""}}function zn(i,{foot:e=!1}={}){const t=zr(i,e),s=qr(i),n=`tn-stub col${e?" tn-stub-foot":""}${i.busy||i.state.poll?" locked":""}`,r=i.busy||i.state.poll?' aria-busy="true"':"";return`<div class="${n}"${r} aria-live="polite">${s}${t}</div>`}function Gr(i,e){const t=i.t;return`
    <article class="tn-card ${On(i)}${i.waiting?" is-zero":""}" data-card="${w(i.id)}">
      ${qn(i,e)}
      <div class="tn-poster">
        <h3 class="tn-name"><button type="button" class="tn-open" data-action="open" data-id="${w(i.id)}">${hs(t)}</button></h3>
        <p class="tn-when">${Un(i)}</p>
      </div>
      ${Hr(t)}
      ${Dr(t)}
      ${i.state.phase==="finishing"?"":Or(t)}
      ${zn(i)}
    </article>`}function wt(i,e,t,s){return t.length?`<div class="tn-order"><span class="tn-order-word ${e}">${a(i)}</span></div>${t.map(n=>Gr(n,s)).join("")}`:""}function Ut(i){const e=N(i.prize);return e||(Number(i.prize_usd)>0?k(Zt(i.prize_usd,"USD"),"USD"):"")}function jr(i,{celebrate:e}){const t=i.entry,s=t.status==="won",n=Number(t.rank),r=s&&e?`<div class="tn-confetti" aria-hidden="true">${"<i></i>".repeat(10)}</div>`:"",o=Number(i.entrants)>0?`<div class="tn-result-of">${a("tournaments.casino_result_of",{count:Number(i.entrants)})}</div>`:"";let l;return s?Ut(t)?l=`<div class="tn-result-prize"><small>${a("tournaments.casino_result_prize")}</small><b>${Ut(t)}</b></div>`:l=`<div class="tn-result-none">${a("tournaments.casino_prize_pending")}</div>`:l=`<div class="tn-result-none">${a("tournaments.casino_result_no_prize")}</div>`,`
    <article class="tn-result${s?"":" lost"}">
      ${r}
      <div class="tn-result-kicker">${s?a("tournaments.casino_result_won_kicker"):a("tournaments.casino_result_lost_kicker")}</div>
      ${Number.isFinite(n)&&n>0?`<div class="tn-result-place">#${n}</div>`:""}
      ${o}
      ${l}
      <div class="tn-result-stats">
        <span>${a("tournaments.casino_result_score",{points:`<b>${w(Le(t.score))}</b>`})}</span>
        <span>${v("tournaments.games_played",Number(t.games_played)||0)}</span>
      </div>
      <div class="tn-result-name">${i.name?w(i.name):a("tournaments.tournament_fallback")}</div>
    </article>`}function Wr(i){const e=i.entry,t=u=>ms(u)?w(a("tournaments.casino_free_round")):N(u.paid),s=i.name?w(i.name):a("tournaments.tournament_fallback"),n=i.endsAt?w(K(i.endsAt)):"",r=Number(e.rank)>0?`#${Number(e.rank)}`:"",o=[n,r].filter(Boolean).join(" · ");let l="",c="",d="";switch(e.status){case"won":l="won",c=a("tournaments.casino_hist_won"),d=Ut(e)||w(a("tournaments.casino_prize_pending"));break;case"paying":case"unresolved":l="moving",c=a("tournaments.casino_status_confirming"),d=t(e);break;case"withdrawing":case"refunding":l="moving",c=a("tournaments.casino_refund_progress"),d=t(e);break;case"lost":l="lost",c=a("tournaments.casino_hist_no_prize"),d=w(Le(e.score));break;case"withdrawn":case"refunded":l="refunded",c=a("tournaments.casino_refunded"),d=t(e);break;case"failed":l="refunded",c=a("tournaments.casino_hist_failed"),d="";break;default:return""}return`
    <div class="tn-hist-row ${l}">
      <div class="tn-hist-name">${s}</div>
      <div class="tn-hist-sub">${o}</div>
      <div class="tn-hist-right"><div class="tn-hist-state">${c}</div><div class="tn-hist-amt">${d}</div></div>
    </div>`}function Kr(i,{now:e=Date.now(),celebrate:t=!1}={}){if(i.status==="idle"||i.status==="loading")return'<div class="tn-tab"><div class="tn-skel"></div><div class="tn-skel"></div></div>';if(i.status==="error")return`
      <div class="tn-tab"><div class="tn-empty">
        <h3>${a("tournaments.casino_error_load")}</h3>
        <button type="button" class="tn-btn ghost" data-action="retry">${a("tournaments.btn_retry")}</button>
      </div></div>`;const{groups:s}=i,n=[];if(i.notAvailableNote&&n.push(`<div class="tn-note" role="status">${a("tournaments.casino_not_available")}</div>`),n.push(wt("tournaments.casino_now","now",s.now,e)),n.push(wt("tournaments.casino_next","next",s.next,e)),n.push(wt("tournaments.casino_soon","",s.soon,e)),i.empty&&n.push(`
      <div class="tn-empty">
        <div class="tn-empty-art" aria-hidden="true">#1</div>
        <h3>${a("tournaments.casino_empty_title")}</h3>
        <p>${a("tournaments.casino_empty_hint")}</p>
      </div>`),i.result||i.history.length){n.push(`<div class="tn-order"><span class="tn-order-word">${a("tournaments.casino_mine")}</span></div>`),i.result&&n.push(jr(i.result,{celebrate:t}));const r=i.history.map(Wr).filter(Boolean);r.length&&n.push(`<div class="tn-hist">${r.join("")}</div>`)}return`<div class="tn-tab">${n.join("")}</div>`}function Yr(i){const e=[];pe(i)&&e.push([ps(i),`<span class="gold">${N(me(i))}</span>`]);const t=Number(i.entrants)||0,s=Number(i.max_entrants)||0;e.push([a("tournaments.casino_fact_players"),s>0?`${t} / ${s}`:String(t)]);const n=N(at(i),"pay");n&&e.push([a("tournaments.casino_entry_fee"),n]);const r=Pr(i);return r&&Number(r.amount)>0&&e.push([a("tournaments.casino_badge_guaranteed"),N(r)]),`<div class="tn-facts">${e.map(([o,l])=>`<div class="tn-fact"><div class="tn-fact-l">${o}</div><div class="tn-fact-v">${l}</div></div>`).join("")}</div>`}function Jr(i){const e=[["tournaments.casino_sched_reg_opens",i.registration_opens_at],["tournaments.casino_sched_reg_closes",i.registration_closes_at],["tournaments.casino_sched_starts",i.starts_at],["tournaments.casino_sched_ends",i.ends_at]].filter(([,t])=>K(t));return e.length?`<div class="tn-places-rest">${e.map(([t,s])=>`
    <div class="tn-place-row"><span>${a(t)}</span><b><time datetime="${w(s)}">${w(K(s))}</time></b></div>`).join("")}</div>`:""}function Zr(i,e){if(!pe(i))return"";const t=me(i),s=es(i.places,t.amount);if(!s.length)return"";const n=t,r=[2,1,3].map(u=>s.find(p=>p.place===u)).filter(Boolean),o=r.length?`<div class="tn-podium">${r.map(u=>`
    <div class="tn-step p${u.place}${e===u.place?" me":""}">
      <div class="tn-step-amt">${tt(u.amount,n)}</div>
      <div class="tn-step-bar"><b>${u.place}</b><small>${w(u.pct)}%</small></div>
    </div>`).join("")}</div>`:"",l=s.filter(u=>u.place>3),c=l.length?`<div class="tn-places-rest">${l.map(u=>`
    <div class="tn-place-row"><span>${a("tournaments.casino_place",{place:u.place})}</span><b>${tt(u.amount,n)}<small>${w(u.pct)}%</small></b></div>`).join("")}</div>`:"",d=i.pool_mode==="growing"&&["scheduled","registration_open","running"].includes(i.status)?`<p class="tn-foot">${a("tournaments.casino_places_estimate")}</p>`:"";return`<section><h4 class="tn-sec-title">${a("tournaments.casino_sec_places")}</h4>${o}${c}${d}</section>`}function Xr(i){const e=w(K(i.ends_at)),t=[a("tournaments.casino_rule_entry"),a("tournaments.casino_rule_score",{time:e}),a("tournaments.casino_rule_alive"),a("tournaments.casino_rule_prizes"),i.allow_withdrawal?a("tournaments.casino_rule_withdraw_yes"):a("tournaments.casino_rule_withdraw_no")];return Number(i.min_entrants)>0&&t.push(a("tournaments.casino_rule_min_cancel",{count:Number(i.min_entrants)})),i.pool_sharing==="separate"&&t.push(a("tournaments.casino_rule_separate")),`<section><h4 class="tn-sec-title">${a("tournaments.casino_sec_rules")}</h4>
    <ol class="tn-rules">${t.map((s,n)=>`<li class="tn-rule"><i aria-hidden="true">${n+1}</i><span>${s}</span></li>`).join("")}</ol></section>`}function Qr(i,e){if(!pe(i))return"";const t=me(i),s=es(i.places,t.amount).find(n=>n.place===Number(e));return s?tt(s.amount,t):""}function Gs(i,e,t=!1){const s=Number(e.rank),n=[s>=1&&s<=3?`r${s}`:"",t||e.me?"me":""].filter(Boolean).join(" "),r=N(e.prize)||Qr(i,s);return`
    <div class="tn-lb-row ${n}">
      <span class="tn-lb-rank">${Number.isFinite(s)?s:"…"}</span>
      <span class="tn-lb-name"><bdi>${t||e.me?a("tournaments.casino_lb_you"):w(e.username)}</bdi><small>${v("tournaments.games_played",Number(e.games_played)||0)}</small></span>
      <span class="tn-lb-right"><span class="tn-lb-score">${w(Le(e.score))}</span>${r?`<span class="tn-lb-prize">${r}</span>`:""}</span>
    </div>`}function eo(i,e){const t=i.t;if(!["running","ending","settling"].includes(t.status)&&!(e&&e.length))return"";let s;if(e==null)s='<div class="tn-skel tn-skel-row"></div>';else if(!e.length)s=`<p class="tn-foot">${a("tournaments.casino_lb_empty")}</p>`;else{const r=e.map(l=>Gs(t,l)),o=i.state.entry;!e.some(l=>l.me)&&o&&o.status==="paid"&&Number(o.rank)>0&&(r.push('<div class="tn-lb-gap" aria-hidden="true">· · ·</div>'),r.push(Gs(t,{rank:o.rank,score:o.score,games_played:o.games_played},!0))),s=`<div class="tn-lb">${r.join("")}</div>`}const n=t.status==="running"?`<span class="live"><span class="tn-dot" aria-hidden="true"></span>${a("tournaments.casino_status_live")}</span>`:"";return`<section><h4 class="tn-sec-title">${a("tournaments.casino_sec_leaderboard")} ${n}</h4>${s}
    ${t.status==="running"?`<p class="tn-foot">${a("tournaments.casino_lb_updates")}</p>`:""}</section>`}function to(i,{now:e=Date.now()}={}){const{card:t}=i,s=t.t,n=t.state.entry&&["live","finishing"].includes(t.state.phase),r=s.description?`<p class="tn-desc">${w(s.description)}</p>`:"";return`
    <div class="tn-sheet-backdrop" data-action="close"></div>
    <div class="tn-sheet ${On(t)}${t.waiting?" is-zero":""}" role="dialog" aria-modal="true" aria-labelledby="tn-sheet-title" data-card="${w(t.id)}">
      <div class="tn-sheet-grip" aria-hidden="true"></div>
      ${qn(t,e)}
      <div class="tn-sheet-head">
        <h3 class="tn-name" id="tn-sheet-title">${hs(s)}</h3>
        <button type="button" class="tn-x" data-action="close" aria-label="${a("tournaments.casino_close")}">×</button>
      </div>
      <div class="tn-sheet-body">
        <p class="tn-when">${Un(t)}</p>
        ${r}
        ${n?qt(t):""}
        ${n&&t.state.phase==="finishing"?`<div class="tn-score-note">${a("tournaments.casino_counting")}</div>`:""}
        <section><h4 class="tn-sec-title">${a("tournaments.casino_sec_overview")}</h4>${Yr(s)}${Vn(s)}</section>
        ${Zr(s,n?Number(t.state.entry?.rank):null)}
        ${eo(t,i.leaderboard)}
        ${Xr(s)}
        <section><h4 class="tn-sec-title">${a("tournaments.casino_sec_schedule")}</h4>${Jr(s)}</section>
      </div>
      <div class="tn-sheet-foot">${zn(t,{foot:!0})}</div>
    </div>`}function so(i){const e=i.t,t=i.state.phase==="late"||e.status==="running",s=N(at(e),"pay"),n=[];i.freeRound?n.push([a("tournaments.casino_entry_fee"),a("tournaments.casino_free_round"),"fee free"]):s&&n.push([a("tournaments.casino_entry_fee"),s,"fee"]),pe(e)&&n.push([ps(e),N(me(e)),"gold"]);const r=t?e.ends_at:e.starts_at;K(r)&&n.push([a(t?"tournaments.casino_sched_ends":"tournaments.casino_sched_starts"),`<time datetime="${w(r)}">${w(K(r))}</time>`,""]);const o=e.allow_withdrawal&&!t?a("tournaments.casino_rule_withdraw_yes"):a("tournaments.casino_rule_withdraw_no"),l=w(i.id);return`
    <div class="tn-confirm-backdrop" data-action="register-cancel" data-id="${l}"></div>
    <div class="tn-confirm" role="alertdialog" aria-modal="true" aria-labelledby="tn-confirm-title" aria-describedby="tn-confirm-desc" data-card="${l}">
      <h3 class="tn-confirm-title" id="tn-confirm-title">${a("tournaments.casino_confirm_title",{name:`<bdi>${hs(e)}</bdi>`})}</h3>
      <div class="tn-confirm-rows">${n.map(([c,d,u])=>`
        <div class="tn-confirm-row ${u}"><span>${c}</span><b>${d}</b></div>`).join("")}</div>
      <ul class="tn-confirm-notes" id="tn-confirm-desc">
        <li>${i.freeRound?a("tournaments.casino_confirm_free_charge"):a("tournaments.casino_confirm_charge")}</li>
        <li>${o}</li>
      </ul>
      <div class="tn-confirm-actions">
        ${X("register-cancel",i.id,a("common.cancel"),"ghost")}
        ${X("register-confirm",i.id,a("tournaments.casino_confirm_ok"),"reg")}
      </div>
    </div>`}const no=1e3,js=500;class ao{constructor({onPlay:e,onUnavailable:t,refreshBalance:s,freeRoundFor:n,freeRoundsOn:r,onLiveChange:o=()=>{},api:l,now:c=()=>Date.now()}={}){this.now=c,this._askedAt={register:-1/0,withdraw:-1/0},this.onPlay=e,this.onLiveChange=o,this.container=null,this.sheetHost=null,this.confirmHost=null,this.timer=null,this._pendingOpen=null,this._celebrated=new Set,this._lastLive=null,this.controller=new xr({api:l,isHidden:()=>typeof document<"u"&&document.hidden,refreshBalance:s,freeRoundFor:n,freeRoundsOn:r,onUnavailable:()=>{this.closeSheetDom(),this.closeConfirmDom(),t?.()},onChange:()=>this.render()}),this._onClick=d=>this.handleClick(d),this._onKey=d=>{if(d.key==="Tab"&&this.confirmHost){this.trapTab(d);return}d.key==="Escape"&&(this.controller.confirmRegisterId!=null?this.controller.cancelRegister():this.controller.sheetId&&this.controller.closeSheet())},this._onVisibility=()=>{!document.hidden&&this.container&&this.controller.load()}}probe(){return this.controller.load()}mount(e){this.container!==e&&(this.container&&this.unmount(),this.container=e,e.addEventListener("click",this._onClick),document.addEventListener("keydown",this._onKey),document.addEventListener("visibilitychange",this._onVisibility),this.render(),this.controller.load(),this.timer=setInterval(()=>this.heartbeat(),no))}unmount(){this.timer&&clearInterval(this.timer),this.timer=null,this.container&&this.container.removeEventListener("click",this._onClick),document.removeEventListener("keydown",this._onKey),document.removeEventListener("visibilitychange",this._onVisibility),this.container=null,this.controller.sheetId&&(this.controller.sheetId=null),this.controller.confirmRegisterId=null,this.closeSheetDom(),this.closeConfirmDom()}openWhenListed(e){this._pendingOpen=e==null?null:String(e),this.render()}heartbeat(){if(document.hidden)return;const e=Date.now();for(const t of[this.container,this.sheetHost])t?.querySelectorAll("[data-until]").forEach(s=>{const n=un(s.getAttribute("data-until"),e);s.textContent!==n&&(s.textContent=n)});this.controller.tick(e)}render(){const e=this.controller.model();if(e.hasLive!==this._lastLive&&(this._lastLive=e.hasLive,this.onLiveChange(e.hasLive)),!this.container)return;if(this._pendingOpen&&e.status==="ready"){const n=this._pendingOpen;if(this._pendingOpen=null,this.controller.byId(n)){this.controller.openSheet(n);return}}const t=e.result?`${e.result.entry.tournament_id}|${e.result.entry.status}`:null,s=!!t&&!this._celebrated.has(t);this.container.innerHTML=Kr(e,{celebrate:s}),s&&this._celebrated.add(t),this.renderSheetDom(e),this.renderConfirmDom(e)}renderConfirmDom(e){if(!e.confirm){this.closeConfirmDom();return}const t=!this.confirmHost;t&&(this.confirmHost=document.createElement("div"),this.confirmHost.className="tn-sheet-host tn-confirm-host",this.confirmHost.addEventListener("click",this._onClick),document.body.appendChild(this.confirmHost));const s=so(e.confirm);if(s!==this._confirmHtml){const n=this.confirmHost.contains(document.activeElement)?document.activeElement.getAttribute("data-action"):null;this.confirmHost.innerHTML=s,this._confirmHtml=s,n&&this.confirmHost.querySelector(`.tn-btn[data-action="${n}"]`)?.focus({preventScroll:!0})}t&&this.confirmHost.querySelector('[data-action="register-cancel"].tn-btn')?.focus({preventScroll:!0})}trapTab(e){const t=[...this.confirmHost.querySelectorAll(".tn-btn")];if(!t.length)return;const s=t.indexOf(document.activeElement),n=e.shiftKey?s<=0?t.length-1:s-1:s===-1||s===t.length-1?0:s+1;e.preventDefault(),t[n].focus({preventScroll:!0})}restoreOpenerFocus(){const e=this._confirmOpener;if(this._confirmOpener=null,!e)return;const t=e.inSheet?this.sheetHost:this.container,s=`[data-card="${typeof CSS<"u"&&CSS.escape?CSS.escape(e.id):e.id}"]`,n=t?.querySelector(s)||null;(n?.querySelector(".tn-btn:not([disabled])")||n?.querySelector(".tn-open, .tn-x"))?.focus({preventScroll:!0})}closeConfirmDom(){this.confirmHost&&(this.confirmHost.removeEventListener("click",this._onClick),this.confirmHost.remove(),this.confirmHost=null,this._confirmHtml=null,this.restoreOpenerFocus())}renderSheetDom(e){if(!e.sheet){this.closeSheetDom();return}const t=!this.sheetHost;t&&(this.sheetHost=document.createElement("div"),this.sheetHost.className="tn-sheet-host",this.sheetHost.addEventListener("click",this._onClick),document.body.appendChild(this.sheetHost));const s=this.sheetHost.querySelector(".tn-sheet-body"),n=s?s.scrollTop:0;this.sheetHost.innerHTML=to(e.sheet);const r=this.sheetHost.querySelector(".tn-sheet-body");r&&(r.scrollTop=n),t&&(this._returnFocus=document.activeElement,this.sheetHost.querySelector(".tn-x")?.focus({preventScroll:!0}))}closeSheetDom(){if(!this.sheetHost)return;this.sheetHost.removeEventListener("click",this._onClick),this.sheetHost.remove(),this.sheetHost=null;const e=this._returnFocus;this._returnFocus=null,e&&typeof e.focus=="function"&&document.contains(e)&&e.focus({preventScroll:!0})}handleClick(e){const t=e.target.closest("[data-action]"),s=this.controller;if(!t){const r=e.target.closest(".tn-card");r&&!e.target.closest(".tn-stub")&&s.openSheet(r.getAttribute("data-card"));return}if(t.disabled)return;const n=t.getAttribute("data-id");switch(t.getAttribute("data-action")){case"open":s.openSheet(n);break;case"close":s.closeSheet();break;case"retry":s.load();break;case"register":this._confirmOpener={id:String(n),inSheet:!!t.closest?.(".tn-sheet")},this._askedAt.register=this.now(),s.requestRegister(n);break;case"register-cancel":s.cancelRegister();break;case"register-confirm":if(this.now()-this._askedAt.register<js){this._askedAt.register=this.now();return}s.confirmRegister(n);break;case"withdraw":this._askedAt.withdraw=this.now(),s.requestWithdraw(n);break;case"withdraw-cancel":s.cancelWithdraw(n);break;case"withdraw-confirm":if(this.now()-this._askedAt.withdraw<js){this._askedAt.withdraw=this.now();return}s.confirmWithdraw(n);break;case"play":this.play(n,t);break}}play(e,t){const s=this.controller.byId(e);!s||this.controller.cardView(s).cta!=="play"||(t.disabled=!0,this.onPlay(String(e))===!1&&(t.disabled=!1))}freeEntriesChanged(){this.controller.freeEntriesChanged()}destroy(){this.unmount(),this.controller.reset()}}function Je(i,e){return G()?O(i,"pay"):e}function Ze(i,e){return G()?O(i,"receive"):e}const io=1e4,ro=2e4;function oo(){return A()?ro:io}function Ws(){return typeof document>"u"||document.visibilityState!=="hidden"}function lo(i){const{code:e,amount:t}=fr(i,na().currency),s=`<span class="stake-amount">${k(e?t:i)}</span>`;return e?`<span class="stake-code">${f(e)}</span>${s}`:s}function kt(i,e=0){const t=Number(i);return`<span class="play-icon">▶</span><span>${!Number.isFinite(t)||t<=0||e>0?a("arenas.play_free"):a("arenas.play_for_price",{price:k(Je(i,H(t)))})}</span>`}function Ks(i){const e=i.entryFee*Lt;return`
    <dl class="stake-win-summary-prize">
      <dt>
        <svg class="stake-win-summary-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <path d="M7 3h10v5a5 5 0 0 1-10 0V3ZM7 5H3v2a5 5 0 0 0 5 5m9-7h4v2a5 5 0 0 1-5 5M12 13v5m-4 3h8m-6-3h4l2 3H8l2-3Z"/>
          <path d="m12 5 1 2-1 2-1-2 1-2Z" fill="currentColor" stroke="none"/>
        </svg>
        <span>${a("arenas.min_win_label")}</span>
      </dt>
      <dd><bdi>${k(Ze(e,H(e.toFixed(0))))}</bdi></dd>
    </dl>
    <div class="stake-win-summary-multiplier">
      <span class="stake-win-summary-rail stake-win-summary-rail-start" aria-hidden="true"></span>
      <p>${a("arenas.win_multiplier",{multiplier:Lt})}</p>
      <span class="stake-win-summary-rail stake-win-summary-rail-end" aria-hidden="true"></span>
    </div>
  `}function co(i,{pingMap:e=null,serversForFee:t,measuring:s=!1}={}){return Array.isArray(i)?i.map(n=>({stakeId:n?.id,...Hn(Dt(e,t?.(n?.entryFee)),{measuring:s})})):[]}function Ys(){return A()}function uo(i,{pooled:e=!1}={}){const t=Array.isArray(i)?i.filter(Boolean):[];if(!e||t.length<=1)return t;const s=n=>t.reduce((r,o)=>r+(Number(o[n])||0),0);return[{...t[0],current_players:s("current_players"),capacity:s("capacity")}]}function Js(i){return(Array.isArray(i)?i:[]).filter(e=>e&&e.active!==!1&&(e.url||e.ping_url))}function ho(i){const e=new Set,t=[];for(const s of Array.isArray(i)?i:[]){const n=s?.entryFee;if(!Number.isFinite(n)||n<=0)continue;const r=s.serverType||"paid",o=`${n}|${r}`;e.has(o)||(e.add(o),t.push({fee:n,serverType:r}))}return t}function po(i){const e=new Set,t=[];for(const s of Array.isArray(i)?i:[])for(const n of Array.isArray(s)?s:[]){const r=n?.server_id,o=n?.ping_url;if(r==null||typeof o!="string"||o==="")continue;const l=String(r);e.has(l)||(e.add(l),t.push({id:r,ping_url:o}))}return t}const St="tournament_return_id";class mo{constructor(){this.container=null,this.isVisible=!1,this.activeTab="cash",this.currentSlide=0,this.totalSlides=4,this.autoSlideInterval=null,this.countdownInterval=null,this.playerCountInterval=null,this._playerCountInFlight=!1,this._pingRoundInFlight=!1,this._candidateRoundInFlight=!1,this.servers=[],this.practiceServers=[],this.cashTiers=[],this.practiceStats=null,this.loading=!1,this.error=null,this.selectedStake=null,this._preferredStakeFee=null,this.tournamentsFeed=null,this.tournamentsData=null,this.tournamentsLoading=!1,this.tournamentsCountdownInterval=null,this.tournamentsFeedContainer=null,this.casinoTournaments=null,this._tournamentsTabHidden=!1}casinoTab(){return this.casinoTournaments||(this.casinoTournaments=new ao({onPlay:e=>this.navigateToTournamentGame(e),onUnavailable:()=>this.hideTournamentsTab(),refreshBalance:()=>{h.getBalance({force:!0}).catch(()=>{})},freeRoundFor:e=>h.canEnterTournamentWithFreeRound(e),freeRoundsOn:()=>h.tournamentFreeRoundsOn(),onLiveChange:e=>this.setTournamentsLiveDot(e)})),this.casinoTournaments}hideTournamentsTab(){this._tournamentsTabHidden=!0,this.applyTournamentsTabVisibility(),this.activeTab==="tournaments"&&this.switchTab("cash")}applyTournamentsTabVisibility(){if(!this.container)return;const e=this.container.querySelector('.tab-btn[data-tab="tournaments"]');e&&(e.style.display=this._tournamentsTabHidden?"none":"");const t=this.container.querySelector(".arenas-tabs");t&&this._tournamentsTabHidden&&(t.classList.remove("arenas-tabs-3"),t.classList.add("arenas-tabs-2"))}setTournamentsLiveDot(e){this._tournamentsLive=!!e;const t=this.container?.querySelector('.tab-btn[data-tab="tournaments"]');if(!t)return;const s=t.querySelector(".tn-tab-live");if(e&&!s){const n=document.createElement("span");n.className="tn-tab-live",n.setAttribute("aria-hidden","true"),t.appendChild(n)}else!e&&s&&s.remove()}navigateToTournamentGame(e){try{Cn(e)}catch(s){return s.message,!1}try{sessionStorage.setItem(St,String(e)),sessionStorage.setItem("game_origin","arenas")}catch{}const t=y.isTelegram?"/tg/play/":"/play/";return window.location.href=`${t}${window.location.search}`,!0}init(e){this.container=document.createElement("div"),this.container.id="view-arenas",this.container.className="view-container arenas-page",this.container.style.display="none",this.container.innerHTML=this.render(),e.appendChild(this.container),this.attachEventListeners(),this._onNameChange=()=>this.renderNicknameLine(),typeof window<"u"&&window.addEventListener(Et,this._onNameChange),this._stopLocaleListener=q(()=>this.handleLocaleChange())}handleLocaleChange(){this.container&&(this.container.innerHTML=this.render(),this.stopCountdown(),this.attachEventListeners(),this.goToSlide(this.currentSlide),this.applyTesterTabs(),this.applyTournamentsTabVisibility(),this.setTournamentsLiveDot(this._tournamentsLive),this.renderNicknameLine(),this.casinoTournaments?.unmount(),this.isVisible&&this.renderCards())}render(){return`
      <div class="arenas-content">
        <!-- Promo Banner Slider -->
        <div class="promo-slider">
          <div class="promo-slider-track">
            <!-- Slide 1: Practice Banner -->
            <div class="promo-banner promo-slide promo-image-banner">
              <img src="/banners/practice-banner.webp" alt="${a("arenas.banner_alt_practice")}" class="promo-banner-image" />
            </div>

            <!-- Slide 2: Tournament Banner -->
            <div class="promo-banner promo-slide promo-image-banner">
              <img src="/banners/tournament-banner.webp" alt="${a("arenas.banner_alt_tournament")}" class="promo-banner-image" />
            </div>

            <!-- Slide 3: Battle Banner -->
            <div class="promo-banner promo-slide promo-image-banner">
              <img src="/banners/battle-banner.webp" alt="${a("arenas.banner_alt_battle")}" class="promo-banner-image" />
            </div>

            <!-- Slide 4: Winner Banner -->
            <div class="promo-banner promo-slide promo-image-banner">
              <img src="/banners/winner-banner.webp" alt="${a("arenas.banner_alt_winner")}" class="promo-banner-image" />
            </div>
          </div>

          <!-- Slider Dots -->
          <div class="promo-slider-dots">
            <button class="slider-dot active" data-slide="0"></button>
            <button class="slider-dot" data-slide="1"></button>
            <button class="slider-dot" data-slide="2"></button>
            <button class="slider-dot" data-slide="3"></button>
          </div>
        </div>

        <!-- Tabs -->
        <div class="arenas-tabs arenas-tabs-3">
          <button class="tab-btn ${this.activeTab==="practice"?"active":""}" data-tab="practice">${a("arenas.tab_practice")}</button>
          <button class="tab-btn ${this.activeTab==="cash"?"active":""}" data-tab="cash">${a("arenas.tab_cash")}</button>
          <button class="tab-btn ${this.activeTab==="tournaments"?"active":""}" data-tab="tournaments">${a("arenas.tab_tournaments")}</button>
        </div>

        <!-- Arena Cards Container (dynamic) -->
        <div class="arena-cards" id="arena-cards-container">
          ${this.renderLoadingState()}
        </div>

        <!-- Casino nickname offer: under the cards, so Play stays above the fold -->
        <div class="nick-line-host" id="nickname-line"></div>

        <!-- Practice stats; cash prize information lives with the selected stake. -->
        <div class="player-stats-bar" id="player-stats-bar" style="display:none"></div>
      </div>
    `}renderLoadingState(){return`
      <div class="arena-card arena-skeleton">
        <div class="skeleton-image"></div>
        <div class="skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
          <div class="skeleton-line skeleton-progress"></div>
        </div>
        <div class="skeleton-action"></div>
      </div>
      <div class="arena-card arena-skeleton">
        <div class="skeleton-image"></div>
        <div class="skeleton-info">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-subtitle"></div>
          <div class="skeleton-line skeleton-progress"></div>
        </div>
        <div class="skeleton-action"></div>
      </div>
    `}renderErrorState(){return`
      <div class="arena-empty-state">
        <div class="empty-icon">⚠️</div>
        <h3>${a("arenas.load_failed_title")}</h3>
        <p>${this.error||a("arenas.load_failed_fallback")}</p>
        <button class="retry-btn" id="retry-load-btn">${a("common.retry")}</button>
      </div>
    `}renderEmptyState(e){return`
      <div class="arena-empty-state">
        <div class="empty-icon">🎮</div>
        <h3>${e==="practice"?a("arenas.empty_practice"):e==="tournaments"?a("arenas.empty_tournaments"):a("arenas.empty_cash")}</h3>
        <p>${a("arenas.empty_hint")}</p>
      </div>
    `}renderCashArenaCard({tier:e,config:t,server:s}){const n=s.current_players||0,r=s.capacity||100,o=Math.min(n/r*100,100);let l,c;n===0?(l="COLD",c="status-cold"):n<5?(l="WARMING",c="status-warming"):(l="LIVE",c="status-live");const d=parseFloat(s.entry_fee).toFixed(2);return`
      <div class="arena-card arena-${e}" data-server-id="${s.id}" data-tier="${e}">
        <div class="arena-image">
          <img src="${t.image}" alt="${t.name}" />
        </div>
        <div class="arena-info">
          <h3 class="arena-name">${t.name}</h3>
          <p class="arena-prize">${k(Ze(parseFloat(String(t.minWin).replace(/[^\d.]/g,""))||0,t.minWin))} MIN WIN</p>
          <div class="arena-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${o}%"></div>
            </div>
            <div class="progress-row">
              <span class="progress-status"><span class="${c}">${l}</span>${n>0?` - ${n} playing`:" - Be first!"}</span>
              <span class="progress-players">${n}/${r}</span>
            </div>
          </div>
        </div>
        <div class="arena-action">
          <div class="arena-entry">
            <span class="entry-price">${k(Je(parseFloat(s.entry_fee),H(d)))}</span>
            <span class="entry-label">ENTRY</span>
          </div>
          <button class="arena-play-btn" data-server-id="${s.id}">PLAY</button>
        </div>
      </div>
    `}getServerStatus(e){const t=T.getBestServerForEntryFee(e);if(!t)return{online:!1,status:a("arenas.status_offline"),statusClass:"status-offline"};const s=t.current_players||0;let n,r;return s===0?(n=a("arenas.status_cold"),r="status-cold"):s<5?(n=a("arenas.status_warm"),r="status-warm"):(n=a("arenas.status_hot"),r="status-hot"),{online:!0,status:n,statusClass:r,players:s}}getArenaTicketCount(e){return h.getFreePlayCountForFee(e)}refreshFreeEntryBadges(){this.casinoTournaments?.freeEntriesChanged();const e=this.container?.querySelectorAll(".stake-btn");if(!e?.length)return;e.forEach(s=>{const n=parseFloat(s.dataset.entryFee);if(!Number.isFinite(n))return;const r=this.getArenaTicketCount(n);let o=s.querySelector(".stake-ticket-badge");r>0?(o||(o=document.createElement("span"),o.className="stake-ticket-badge",s.insertBefore(o,s.firstChild)),o.textContent=v("arenas.free_badge",r),s.classList.add("has-ticket")):(o?.remove(),s.classList.remove("has-ticket"))});const t=this.container?.querySelector("#cash-play-btn");t&&this.selectedStake&&(t.innerHTML=kt(this.selectedStake.entryFee,this.getArenaTicketCount(this.selectedStake.entryFee)))}renderCashStakeSelector(){if(this.dynamicStakeOptions=T.getCashStakeOptions(),this.dynamicStakeOptions.length===0)return`
        <div class="stake-selector-container">
          <div class="prize-pool-section">
            <span class="prize-pool-label">${a("arenas.cash_arenas")}</span>
            <div class="status-badge status-badge-offline">
              <span class="status-indicator status-offline"></span>
              <span>${a("arenas.status_offline")}</span>
            </div>
            <p style="margin-top:16px;opacity:0.7;font-size:14px;">
              ${a("arenas.cash_offline_notice")}
            </p>
          </div>
        </div>
      `;let e=this.selectedStake&&this.dynamicStakeOptions.find(r=>r.id===this.selectedStake.id);if(!e&&this._preferredStakeFee!=null&&(e=this.dynamicStakeOptions.find(r=>Math.abs(r.entryFee-this._preferredStakeFee)<.001),this._preferredStakeFee=null),!e&&this.selectedStake){const r=parseFloat(this.selectedStake.entryFee||0).toFixed(2);e=this.dynamicStakeOptions.find(o=>parseFloat(o.entryFee).toFixed(2)===r)}e||(e=this.dynamicStakeOptions[0]),this.selectedStake=e;const t=y.features?.enableLatencyHints?new Map(this.stakePingBadgeData().map(r=>[r.stakeId,r])):null,s=y.features?.enableLatencyHints?this.payPingEchoData():null,n=this.getServerStatusFromTier(this.selectedStake);return`
      <div class="stake-selector-container">
        <p class="stake-pick-label" id="stake-pick-label">${a("arenas.select_entry_fee")}</p>

        <!-- Stake Buttons (dynamic from /public/tiers) -->
        <div class="stake-buttons-section">
          <div class="stake-buttons" role="group" aria-labelledby="stake-pick-label">
            ${this.dynamicStakeOptions.map(r=>{const o=this.getArenaTicketCount(r.entryFee),l=t?.get(r.id),c=r.entryFee*Lt;return`
              <button
                class="stake-btn ${r.id===this.selectedStake.id?"active":""}${o>0?" has-ticket":""}"
                data-stake-id="${r.id}"
                data-entry-fee="${r.entryFee}"
              >
                ${o>0?`<span class="stake-ticket-badge">${v("arenas.free_badge",o)}</span>`:""}
                ${lo(r.label)}
                <span class="stake-win">${a("arenas.stake_win",{amount:k(Ze(c,H(c.toFixed(0))))})}</span>
                ${l?`<span class="stake-ping ${l.cls}" data-stake-ping="${r.id}" aria-label="${l.label}">${l.text}</span>`:""}
              </button>
            `}).join("")}
          </div>
        </div>

        <!-- Play Button -->
        <button class="cash-play-btn" id="cash-play-btn">
          ${kt(this.selectedStake.entryFee,this.getArenaTicketCount(this.selectedStake.entryFee))}
        </button>
        ${s?`
        <!-- The selected stake's ping, restated at the payment moment. Deliberately a
             SIBLING of the button, never a child: selectStake() rewrites the button's
             innerHTML wholesale and would wipe a child out. Hidden outright when
             nothing has been measured (the reasoning is in payPingEcho). Note there is
             no aria-live here: #stat-ping below is already a live region carrying this
             same number, and two of them would announce every measurement twice. -->
        <div class="cash-play-ping" id="cash-play-ping"${s.show?"":" hidden"}>
          <span class="cash-play-ping-label" aria-hidden="true">${a("arenas.pay_ping_lead")}</span>
          <span class="cash-play-ping-value ${s.cls}" id="cash-play-ping-value" aria-label="${s.label}">${s.text}</span>
          <span class="cash-play-ping-note" id="cash-play-ping-note"${s.note?"":" hidden"}>${s.note}</span>
        </div>`:""}

        <!-- Live facts, one row under Play. The status badge shows only its dot while
             online (OFFLINE keeps its word); the ping readout here is the same number
             the echo above carries, so the echo shows only its high-latency note. -->
        <div class="live-stats-bar" id="live-stats-bar">
          ${this.statusBadgeHtml(n)}
          <span class="live-stat">
            <span class="live-stat-value" id="stat-active-players">--</span>
            <span class="live-stat-label">${a("arenas.live_playing")}</span>
          </span>
          ${y.features?.enableLatencyHints?`
          <!-- Your latency to the arena this stake routes to (lowest ping in the pool,
               matching the /play join's best-ping routing). Colour-coded; gated off
               when latency hints are disabled (no prewarm → nothing to show). -->
          <span class="live-stat arena-ping" id="arena-ping">
            <svg class="live-stat-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20v-4M12 20v-9M19 20V5"/></svg>
            <span class="arena-ping-label">${a("arenas.ping")}</span>
            <span class="arena-ping-value" id="stat-ping" aria-live="polite" aria-label="${a("arenas.ping_aria_not_measured")}">—</span>
          </span>`:""}
          <span class="live-stat">
            <svg class="live-stat-icon live-stat-icon--win" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8v6a4 4 0 0 1-8 0zM8 5H4v3a4 4 0 0 0 4 4M16 5h4v3a4 4 0 0 1-4 4M12 13v6M8 21h8"/></svg>
            <span class="live-stat-value" id="stat-last-cashout">--</span>
            <span class="live-stat-label" id="stat-last-cashout-label">${a("arenas.last_win")}</span>
          </span>
        </div>

        <div class="stake-win-summary" id="stake-win-summary" role="status" aria-live="polite" aria-atomic="true">
          ${Ks(this.selectedStake)}
        </div>

        <!-- Inline low-funds notice (Safari fallback) -->
        <div id="arena-inline-notice" style="display:none"></div>
      </div>
    `}getServerStatusFromTier(e){const t=e?.tier;if(t){const s=t.current_players||0,n=t.available&&t.servers_online>0;let r,o;if(n)s===0?(r=a("arenas.status_cold"),o="status-cold"):s<10?(r=a("arenas.status_warming"),o="status-warming"):(r=a("arenas.status_live"),o="status-live");else return{online:!1,status:a("arenas.status_offline"),statusClass:"status-offline"};return{online:n,status:r,statusClass:o,players:s}}return this.getServerStatus(e?.entryFee)}statusBadgeHtml(e){const t=e.online&&e.players!==void 0;return`
      <div class="status-badge ${e.online?"status-badge-online":"status-badge-offline"}">
        <span class="status-indicator ${e.statusClass}"></span>
        <span>${e.online?a("arenas.status_online"):a("arenas.status_offline")}</span>
        ${e.online?`<span class="status-separator"></span><span class="${e.statusClass}">${e.status}</span>`:""}
        ${t?`<span class="status-separator"></span><span class="player-count"><svg class="player-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>${e.players}</span>`:""}
      </div>
    `}renderPracticeArenaCard(e){const t=this.practiceStats?.current_level||1;return`
      <div class="practice-card-container" data-server-id="${e.id}" data-type="practice">
        <div class="arena-card arena-practice">
          <div class="arena-ribbon ribbon-practice">${a("arenas.demo_ribbon")}</div>
          <div class="arena-image arena-image-practice">
            <img src="https://s3-viperroyale-crm.s3.eu-north-1.amazonaws.com/FrontAssets/PracticePlay.webp" alt="${a("arenas.practice_arena")}" />
            <div class="practice-level-badge">
              <span class="level-number">${a("arenas.level_badge",{level:t})}</span>
            </div>
          </div>
          <div class="arena-info">
            <h3 class="arena-name">${a("arenas.practice_arena")}</h3>
            <p class="arena-prize arena-prize-exp">${a("arenas.demo_tagline")}</p>
          </div>
          <div class="arena-action">
            <div class="arena-entry arena-entry-free">
              <span class="entry-price">${a("arenas.free")}</span>
            </div>
          </div>
        </div>
        <button class="practice-play-btn" data-server-id="${e.id}">
          <span class="play-icon">▶</span>
          <span>${a("arenas.play_practice")}</span>
        </button>
        <button class="how-to-play-btn" id="how-to-play-btn">
          <span class="how-to-play-icon">?</span>
          <span>${a("arenas.how_to_play")}</span>
        </button>
      </div>
    `}renderCards(){const e=this.container.querySelector("#arena-cards-container");if(!e)return;const t=this.container.querySelector("#player-stats-bar");if(t&&(t.style.display=this.activeTab==="practice"?"":"none"),this.activeTab==="tournaments"&&A()){const s=this.casinoTab();s.container===e?s.render():s.mount(e);return}if(this.loading){e.innerHTML=this.renderLoadingState();return}if(this.error){e.innerHTML=this.renderErrorState(),this.attachRetryListener();return}this.activeTab==="practice"?(this.practiceServers.length===0?e.innerHTML=this.renderEmptyState("practice"):e.innerHTML=uo(this.practiceServers,{pooled:Ys()}).map(s=>this.renderPracticeArenaCard(s)).join(""),this.updatePracticeStats(),this.attachPlayButtonListeners()):this.activeTab==="tournaments"?this.renderTournamentsFeed(e):(e.innerHTML=this.renderCashStakeSelector(),this.updateLiveStats(),this.attachStakeSelectorListeners())}attachPlayButtonListeners(){const e=this.container.querySelectorAll(".arena-play-btn");e.length,e.forEach(n=>{n.addEventListener("click",r=>{n.dataset.serverId;const o=r.target.dataset.serverId;this.handleArenaPlay(o)})});const t=this.container.querySelectorAll(".practice-play-btn");t.length,t.forEach(n=>{n.addEventListener("click",r=>{n.dataset.serverId;const l=r.target.closest(".practice-play-btn")?.dataset.serverId;l&&this.handleArenaPlay(l)})});const s=this.container.querySelector("#how-to-play-btn");s&&s.addEventListener("click",async()=>{const{practiceTutorial:n}=await ke(async()=>{const{practiceTutorial:r}=await import("./practice-tutorial-CcgFOYuy.js");return{practiceTutorial:r}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));n.show()})}attachStakeSelectorListeners(){if(this._stopStakeRowFit?.(),this._stopStakeRowFit=null,!this.dynamicStakeOptions?.length)return;const e=this.container.querySelector(".stake-buttons");e&&(this._stopStakeRowFit=gr(e));const t=this.container.querySelectorAll(".stake-btn");t.length,t.forEach(n=>{n.addEventListener("click",r=>{n.dataset.stakeId;const l=r.target.closest(".stake-btn")?.dataset.stakeId,c=this.dynamicStakeOptions?.find(d=>d.id===l);c&&this.selectStake(c)})});const s=this.container.querySelector("#cash-play-btn");s?s.addEventListener("click",n=>{n.target,n.currentTarget,this.selectedStake,this.handleCashPlay()}):console.error("[ARENAS:DEBUG] ❌ Play button NOT FOUND! Container HTML:",this.container?.innerHTML?.substring(0,500))}async selectStakeByFee(e){const t=Number(e).toFixed(2);if(t==="NaN")return{selected:!1};try{this.activeTab!=="cash"&&await this.switchTab("cash")}catch(r){r?.message}const s=this.dynamicStakeOptions||[],n=s.find(r=>Number(r.entryFee).toFixed(2)===t);if(n){this._preferredStakeFee=null,this.selectStake(n);const r=this.container?.querySelector?.(`.stake-btn[data-stake-id="${n.id}"]`);if(r&&typeof r.scrollIntoView=="function")try{r.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})}catch{}return{selected:!0}}return s.length===0?(this._preferredStakeFee=Number(e),{selected:!1,pending:!0}):(this._preferredStakeFee=null,this.showFreeRoundTierNotice(t),{selected:!1})}showFreeRoundTierNotice(e){const t=this.container?.querySelector?.("#arena-inline-notice");if(!t)return;const s=G()?O(Number(e),"pay"):H(e);t.style.display="block",t.innerHTML=`
      <p style="color:#fbbf24;font-size:14px;font-weight:700;margin:12px 0 6px;text-align:center;">
        ${a("arenas.free_round_tier_unavailable",{price:k(s)})}
      </p>
      <p style="color:rgba(255,255,255,.75);font-size:13px;margin:4px 0 0;text-align:center;">
        ${a("arenas.free_round_tier_retry")}
      </p>
    `}selectStake(e){if(this.selectedStake?.id===e.id)return;this.selectedStake=e,L.track("arena_selected","game",{game_server_id:e.serverId,entry_fee:e.entryFee,server_type:e.serverType}),this.container.querySelectorAll(".stake-btn").forEach(o=>{o.classList.toggle("active",o.dataset.stakeId===e.id)});const t=this.getServerStatusFromTier(e),s=this.container.querySelector(".status-badge");s&&(s.className=`status-badge ${t.online?"status-badge-online":"status-badge-offline"}`,s.innerHTML=`
        <span class="status-indicator ${t.statusClass}"></span>
        <span>${t.online?a("arenas.status_online"):a("arenas.status_offline")}</span>
        ${t.online?`<span class="status-separator"></span><span class="${t.statusClass}">${t.status}</span>`:""}
        ${t.online&&t.players!==void 0?`<span class="status-separator"></span><span class="player-count"><svg class="player-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>${t.players}</span>`:""}
      `);const n=this.container.querySelector("#cash-play-btn");n&&(n.innerHTML=kt(e.entryFee,this.getArenaTicketCount(e.entryFee)));const r=this.container.querySelector("#stake-win-summary");r&&(r.innerHTML=Ks(e)),this.updateLiveStats(t.online)}handleCashPlay(){if(L.trackClick("play","arenas"),this.selectedStake,!this.selectedStake)return;const e=this.selectedStake.entryFee,t=this.selectedStake.serverType||"paid",s=this.selectedStake.tier;if(s&&(!s.available||s.servers_online===0)){this.showNoServerModal(e);return}if(!s&&!T.getBestServerForEntryFee(e)){this.showNoServerModal(e);return}const n=this.getArenaTicketCount(e);if(n===0){const r=h.getAuthState(),o=r.balance||"0",l=parseFloat(o),c=Ee(e);if(ws(r)&&(!Number.isFinite(l)||l<c)){this.showInsufficientBalanceModal({entry_fee:e});return}}this.navigateToGameByFee(e,t)}showNoServerModal(e){const t=document.createElement("div");t.className="arena-prompt-modal",t.innerHTML=`
      <div class="arena-prompt-overlay"></div>
      <div class="arena-prompt-content">
        <h3>${a("arenas.server_unavailable_title")}</h3>
        <p>${a("arenas.server_unavailable_msg",{price:k(Je(e,H(e)))})}</p>
        <p>${a("arenas.server_unavailable_hint")}</p>
        <div class="arena-prompt-actions">
          <button class="dismiss-btn">${a("common.ok")}</button>
        </div>
      </div>
    `,document.body.appendChild(t),requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("visible"))),t.querySelector(".dismiss-btn").addEventListener("click",()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),300)}),t.querySelector(".arena-prompt-overlay").addEventListener("click",()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),300)})}attachRetryListener(){const e=this.container.querySelector("#retry-load-btn");e&&e.addEventListener("click",()=>this.loadServers(!0))}handleArenaPlay(e){const t="background: #ffeb3b; color: #000; font-weight: bold; padding: 4px 8px; font-size: 14px;",s="background: #fff59d; color: #000; padding: 4px 8px; font-size: 12px;";""+e;const n=this.servers.find(c=>c.id===e);if(!n){console.error("[Arenas] Server not found:",e);return}if(""+n.name,""+n.server_type,""+n.url,""+n.entry_fee,""+n.geo,n.server_type==="practice"&&Ys()){this.navigateToGameByFee(0,"practice");return}if(n.server_type==="practice"||n.server_type==="free"){this.navigateToGame(e);return}const r=h.getAuthState(),o=r.balance||"0";if(this.getArenaTicketCount(n.entry_fee)===0&&ws(r)&&!T.canAfford(n,o)){this.showInsufficientBalanceModal(n);return}this.navigateToGame(e)}navigateToGame(e){y.isTelegram;const t="background: #ffeb3b; color: #000; font-weight: bold; padding: 4px 8px; font-size: 14px;",s="background: #fff59d; color: #000; padding: 4px 8px; font-size: 12px;";""+e;try{Sn(e)}catch(o){o.message;return}try{sessionStorage.setItem("game_origin","arenas")}catch{}const r=`${y.isTelegram?"/tg/play/":"/play/"}${window.location.search}`;""+r,window.location.href=r}navigateToGameByFee(e,t="paid"){try{ai(e,t)}catch(r){r.message;return}try{sessionStorage.setItem("game_origin","arenas")}catch{}const n=`${y.isTelegram?"/tg/play/":"/play/"}${window.location.search}`;window.location.href=n}showInsufficientBalanceModal(e){const t=parseFloat(e.entry_fee),s=Je(t,H(Number.isFinite(t)?t:0)),n=h.getAuthState(),r=sa(n.balance||"0");this.showInlineNotice(s,r);const o=A(),l=document.createElement("div");l.className="arena-prompt-modal",l.innerHTML=`
      <div class="arena-prompt-overlay"></div>
      <div class="arena-prompt-content">
        <h3>${a("arenas.insufficient_balance_title")}</h3>
        <p>${a("arenas.need_fee_to_enter",{fee:`<strong>${k(s)}</strong>`})}</p>
        <p>${a("arenas.current_balance",{balance:`<strong>${k(r)}</strong>`})}</p>
        ${o?`<p>${a("arenas.top_up_casino_lobby")}</p>`:""}
        <div class="arena-prompt-actions">
          ${o?"":`<button class="confirm-btn">${a("arenas.add_funds")}</button>`}
          <button class="dismiss-btn">${o?a("common.ok"):a("common.cancel")}</button>
        </div>
      </div>
    `,document.body.appendChild(l),requestAnimationFrame(()=>requestAnimationFrame(()=>l.classList.add("visible")));const c=()=>{l.classList.remove("visible"),setTimeout(()=>l.remove(),300)};l.querySelector(".confirm-btn")?.addEventListener("click",()=>{l.remove(),C("/wallet")}),l.querySelector(".dismiss-btn").addEventListener("click",c),l.querySelector(".arena-prompt-overlay").addEventListener("click",c)}showInlineNotice(e,t){const s=this.container.querySelector("#arena-inline-notice");if(!s)return;const n=A();s.style.display="block",s.innerHTML=`
      <p style="color:#ef4444;font-size:14px;font-weight:700;margin:12px 0 6px;text-align:center;">
        ${a("arenas.need_fee_to_play",{fee:k(e),balance:k(t)})}
      </p>
      ${n?`
      <p style="color:rgba(255,255,255,.75);font-size:13px;margin:4px 0 0;text-align:center;">
        ${a("arenas.top_up_casino_lobby")}
      </p>`:`
      <button id="arena-inline-wallet-btn" style="
        display:block;width:100%;padding:12px;margin-top:4px;
        background:linear-gradient(180deg,#2dd469 0%,#22c55e 30%,#16a34a 100%);
        border:none;border-radius:12px;color:#fff;font-size:15px;font-weight:800;
        cursor:pointer;text-transform:uppercase;letter-spacing:.5px;
        box-shadow:0 4px 15px rgba(34,197,94,.3);
      ">${a("arenas.add_funds")}</button>`}
    `,s.querySelector("#arena-inline-wallet-btn")?.addEventListener("click",()=>{C("/wallet")})}updatePracticeStats(){const e=this.container.querySelector("#player-stats-bar");if(!e||!this.practiceStats)return;const t=this.practiceStats;e.innerHTML=`
      <div class="stat-item">
        <span class="stat-label stat-purple">${a("arenas.stat_level")}</span>
        <span class="stat-value">${t.current_level||1}</span>
      </div>
      <span class="stat-divider">|</span>
      <div class="stat-item">
        <span class="stat-label stat-gold">${a("arenas.stat_total_exp")}</span>
        <span class="stat-value">${t.total_exp||0}</span>
      </div>
      <span class="stat-divider">|</span>
      <div class="stat-item">
        <span class="stat-label stat-green">${a("arenas.stat_games")}</span>
        <span class="stat-value">${t.games_played||0}</span>
      </div>
    `}updatePingDisplay(){const e=this.container?.querySelector("#stat-ping");if(e)try{const t=this.selectedStake?T.getServersByEntryFee(this.selectedStake.entryFee):[];yt(e,Ht(Dt(dt(),t)))}catch{}}stakePingBadgeData(){try{return co(this.dynamicStakeOptions,{pingMap:dt(),serversForFee:e=>T.getServersByEntryFee(e),measuring:this._pingRoundInFlight})}catch{return[]}}renderStakePingBadges(){if(this.container)try{for(const e of this.stakePingBadgeData())yt(this.container.querySelector(`.stake-ping[data-stake-ping="${e.stakeId}"]`),e)}catch{}}payPingEchoData(){try{const e=this.selectedStake?T.getServersByEntryFee(this.selectedStake.entryFee):[];return Ns(Dt(dt(),e),{measuring:this._pingRoundInFlight})}catch{return Ns(null)}}renderPayPingEcho(){if(this.container)try{const e=this.container.querySelector("#cash-play-ping");if(!e)return;const t=this.payPingEchoData();e.hidden=!t.show,yt(this.container.querySelector("#cash-play-ping-value"),t);const s=this.container.querySelector("#cash-play-ping-note");s&&(s.textContent=t.note,s.hidden=!t.note)}catch{}}startPingRound(e){this._pingRoundInFlight||!Array.isArray(e)||e.length===0||(this._pingRoundInFlight=!0,this.renderStakePingBadges(),this.renderPayPingEcho(),Promise.resolve(ba(e)).catch(()=>{}).finally(()=>{this._pingRoundInFlight=!1,this.renderStakePingBadges(),this.renderPayPingEcho(),this.updatePingDisplay()}))}currentServers(){const e=T.servers;return Array.isArray(e)?e:Array.isArray(this.servers)?this.servers:[]}refreshStalePings(){if(y.features?.enableLatencyHints&&!(!this.isVisible||this.activeTab!=="cash")&&!this._pingRoundInFlight)try{const e=this.currentServers(),t=new Set(_a(e).map(String));if(t.size===0)return;const s=Js(e).filter(n=>t.has(String(n.id)));if(s.length===0){this.prewarmFromCandidates();return}this.startPingRound(s)}catch{}}prewarmFromCandidates(){if(y.features?.enableLatencyHints&&!(this._candidateRoundInFlight||this._pingRoundInFlight))try{const e=this.dynamicStakeOptions?.length?this.dynamicStakeOptions:T.getCashStakeOptions?.()||[],t=ho(e);if(t.length===0)return;this._candidateRoundInFlight=!0,Promise.all(t.map(s=>Promise.resolve().then(()=>h.fetchCandidates(s.fee,s.serverType)).catch(()=>[]))).then(s=>{const n=po(s);this._candidateRoundInFlight=!1,n.length>0&&this.startPingRound(n)}).catch(()=>{this._candidateRoundInFlight=!1})}catch{this._candidateRoundInFlight=!1}}updateLiveStats(e=!0){this.updatePingDisplay(),this.renderStakePingBadges(),this.renderPayPingEcho();const t=this.container.querySelector("#stat-active-players"),s=this.container.querySelector("#stat-last-cashout"),n=this.container.querySelector("#stat-last-cashout-label"),r=this.container.querySelector("#stat-largest-snake"),o=this.selectedStake?this.getServerStatusFromTier(this.selectedStake):{online:!1,players:0},l=e&&o.online,d=(this.selectedStake?T.getBestServerForEntryFee(this.selectedStake.entryFee):null)?.server_stats;if(!l){t&&(t.textContent="0"),s&&(s.textContent="--"),n&&(n.textContent=a("arenas.last_win")),r&&(r.textContent="0");return}if(t&&(t.textContent=o.players??0),s){const u=parseFloat(d?.last_cashout||0).toFixed(2);s.innerHTML=u!=="0.00"?k(Ze(parseFloat(u),H(u))):"--"}if(n)if(d?.last_cashout_at){const u=this.formatTimeAgo(d.last_cashout_at);n.textContent=a("arenas.last_win_with_time",{time:u})}else n.textContent=a("arenas.last_win");r&&(r.textContent=d?.largest_snake_now||0)}startPlayerCountPolling(){this.stopPlayerCountPolling();const e=oo();let t=Date.now();const s=()=>{Ws()&&(t=Date.now(),this.refreshPlayerCount(),this.refreshStalePings())};this.playerCountInterval=setInterval(s,e),this._playerCountOnVisible=()=>{Ws()&&Date.now()-t>=e&&s()},document.addEventListener("visibilitychange",this._playerCountOnVisible)}stopPlayerCountPolling(){this.playerCountInterval&&(clearInterval(this.playerCountInterval),this.playerCountInterval=null),this._playerCountOnVisible&&(document.removeEventListener("visibilitychange",this._playerCountOnVisible),this._playerCountOnVisible=null)}async refreshPlayerCount(){if(!this.isVisible||this.activeTab!=="cash"||this._playerCountInFlight)return;this._playerCountInFlight=!0;try{await T.fetchTiers({force:!0}),await T.fetchServers({force:!0})}catch(n){n?.message;return}finally{this._playerCountInFlight=!1}if(!this.isVisible||this.activeTab!=="cash")return;if(!this.loading&&!this.error&&!this.dynamicStakeOptions?.length&&T.getCashStakeOptions().length>0){this.renderCards();return}if(!this.selectedStake)return;const e=T.getCashStakeOptions().find(n=>n.id===this.selectedStake.id);e&&(this.selectedStake=e);const t=this.getServerStatusFromTier(this.selectedStake),s=this.container?.querySelector(".stake-selector-container .status-badge");s&&(s.outerHTML=this.statusBadgeHtml(t).trim()),this.updateLiveStats(t.online)}formatTimeAgo(e){const t=new Date,s=new Date(e),n=Math.floor((t-s)/1e3);if(n<60)return a("arenas.time_ago_just_now");if(n<3600){const o=Math.floor(n/60);return a("arenas.time_ago_minutes",{count:o})}if(n<86400){const o=Math.floor(n/3600);return a("arenas.time_ago_hours",{count:o})}const r=Math.floor(n/86400);return a("arenas.time_ago_days",{count:r})}async loadServers(e=!1){if(this.loading=!0,this.error=null,this.renderCards(),!h.getAuthState().initialized){let s=0;for(;!h.getAuthState().initialized&&s<30;)await new Promise(n=>setTimeout(n,100)),s++;h.getAuthState().initialized,s*100}try{await T.fetchTiers({force:e});const s=await T.fetchServers({force:e});if(this.servers=s,y.features?.enableLatencyHints){const n=Js(this.servers);n.length>0?this.startPingRound(n):this.prewarmFromCandidates()}this.servers.length,T.servers?.length,(!T.servers||T.servers.length===0)&&(T.servers=s),this.practiceServers=T.getPracticeServers(),this.cashTiers=T.getAvailableTiers(),this.practiceServers.length,this.cashTiers.length,this.cashTiers.length===0&&T.getCashServers().length>0&&T.getCashServers().forEach(r=>{r.name,r.entry_fee,r.entry_fee}),this.activeTab==="practice"&&(this.practiceStats=await T.fetchPracticeStats()),this.loading=!1,this.renderCards(),this.updateLiveStats()}catch(s){console.error("[Arenas] Failed to load servers:",s),this.loading=!1,this.error=s.message||a("arenas.load_failed_title"),this.renderCards()}}attachEventListeners(){this.container.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",t=>{const s=t.target.dataset.tab;this.switchTab(s)})}),this.container.querySelectorAll(".slider-dot").forEach(e=>{e.addEventListener("click",t=>{const s=parseInt(t.target.dataset.slide);this.goToSlide(s)})}),this.initSliderSwipe(),this.startAutoSlide(),this.startCountdown()}initSliderSwipe(){const e=this.container.querySelector(".promo-slider");if(!e)return;let t=0,s=!1;e.addEventListener("touchstart",n=>{t=n.touches[0].clientX,s=!0,this.stopAutoSlide()},{passive:!0}),e.addEventListener("touchend",n=>{if(!s)return;s=!1;const r=n.changedTouches[0].clientX,o=t-r;Math.abs(o)>50&&(o>0?this.nextSlide():this.prevSlide()),this.startAutoSlide()},{passive:!0})}goToSlide(e){this.currentSlide=e;const t=this.container.querySelector(".promo-slider-track");t&&(t.style.transform=`translateX(-${e*100}%)`),this.container.querySelectorAll(".slider-dot").forEach((s,n)=>{s.classList.toggle("active",n===e)})}nextSlide(){const e=(this.currentSlide+1)%this.totalSlides;this.goToSlide(e)}prevSlide(){const e=(this.currentSlide-1+this.totalSlides)%this.totalSlides;this.goToSlide(e)}startAutoSlide(){this.stopAutoSlide(),this.autoSlideInterval=setInterval(()=>{this.nextSlide()},5e3)}stopAutoSlide(){this.autoSlideInterval&&(clearInterval(this.autoSlideInterval),this.autoSlideInterval=null)}async switchTab(e){e==="practice"&&ee()||this.activeTab!==e&&(L.track("tab_switched","navigation",{from_tab:this.activeTab,to_tab:e}),this.activeTab==="tournaments"&&(this.stopTournamentsCountdown(),this.tournamentsFeed?.closeDetail(),this.casinoTournaments?.unmount()),this.activeTab=e,this.container.querySelectorAll(".tab-btn").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)}),e==="practice"&&(await this.checkAndShowTutorial(),this.practiceStats||(this.practiceStats=await T.fetchPracticeStats())),this.renderCards(),this.renderNicknameLine())}renderNicknameLine(){if(!this.container||!A())return;const e=this.container.querySelector("#nickname-line");e&&(this.nicknameUI||=Bn(h),this.nicknameUI.renderLine(e,this.activeTab))}async checkAndShowTutorial(){const{practiceTutorial:e}=await ke(async()=>{const{practiceTutorial:t}=await import("./practice-tutorial-CcgFOYuy.js");return{practiceTutorial:t}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));if(e.shouldShow()&&!e.isOpen())return new Promise(t=>{e.show(()=>t())})}startCountdown(){let e=9209;const t=()=>{if(e<=0)return;const s=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60,o=this.container.querySelector("#countdown-hours"),l=this.container.querySelector("#countdown-mins"),c=this.container.querySelector("#countdown-secs");o&&(o.textContent=String(s).padStart(2,"0")),l&&(l.textContent=String(n).padStart(2,"0")),c&&(c.textContent=String(r).padStart(2,"0")),e--};t(),this.stopCountdown(),this.countdownInterval=setInterval(t,1e3)}stopCountdown(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}ensureTournamentsFeed(){this.tournamentsFeed||(this.tournamentsFeed=new Fn,this.tournamentsFeedContainer=document.createElement("div"),this.tournamentsFeedContainer.className="tournaments-feed-modal-host",document.body.appendChild(this.tournamentsFeedContainer),this.tournamentsFeed.container=this.tournamentsFeedContainer)}renderTournamentsFeed(e){if(!this.tournamentsData){e.innerHTML=this.renderLoadingState(),this.loadTournamentsFeed(e);return}const{liveRegistered:t,featured:s,myRegistered:n,upcoming:r}=this.tournamentsData,o=[];t.length>0&&o.push(t.map(l=>this.renderLiveTournamentBanner(l)).join("")),s&&(this.ensureTournamentsFeed(),o.push(`
        <div class="feed-featured-section">
          ${this.tournamentsFeed.renderFeaturedCard(s,0)}
        </div>
      `)),n.length>0&&(this.ensureTournamentsFeed(),o.push(`
        <div class="feed-section">
          <div class="feed-section-title">${a("arenas.my_tournaments")}</div>
          ${n.map(l=>this.tournamentsFeed.renderTournamentCard(l)).join("")}
        </div>
      `)),r.length>0&&(this.ensureTournamentsFeed(),o.push(`
        <div class="feed-section">
          <div class="feed-section-title">${a("arenas.upcoming")}</div>
          ${r.map(l=>this.tournamentsFeed.renderTournamentCard(l)).join("")}
        </div>
      `)),o.length===0&&o.push(`
        <div class="arena-empty-state">
          <div class="empty-icon">🏆</div>
          <h3>${a("arenas.no_tournaments_title")}</h3>
          <p>${a("arenas.no_tournaments_hint")}</p>
        </div>
      `),o.push(`
      <button class="view-all-tournaments-btn">${a("arenas.view_all_tournaments")}</button>
    `),e.innerHTML=`<div class="tournaments-feed">${o.join("")}</div>`,this.attachTournamentsFeedListeners(e),this.startTournamentsCountdown()}async loadTournamentsFeed(e){if(!this.tournamentsLoading){this.tournamentsLoading=!0;try{const[t,s]=await Promise.all([we("active"),we("upcoming")]),n=t.success?t.tournaments.filter(g=>g.status==="active"):[],r=s.success?s.tournaments.filter(g=>g.status==="announced"||g.status==="registration_open"):[],l=[...n,...r].find(g=>g.featured)||r[0]||n[0]||null,c=l?.id,d=n.filter(g=>g.is_registered&&g.can_play&&g.id!==c),u=new Set(d.map(g=>g.id)),p=r.filter(g=>g.is_registered&&g.id!==c&&!u.has(g.id)),m=r.filter(g=>!g.is_registered&&g.id!==c).slice(0,4);this.tournamentsData={liveRegistered:d,featured:l,myRegistered:p,upcoming:m},this.ensureTournamentsFeed(),this.tournamentsFeed.tournaments={active:n,upcoming:r,completed:[]},this.tournamentsFeed.state="loaded"}catch(t){console.error("[Arenas] Failed to load tournaments feed:",t),this.tournamentsData={liveRegistered:[],featured:null,myRegistered:[],upcoming:[]}}finally{this.tournamentsLoading=!1}if(this.activeTab==="tournaments"){const t=e||this.container.querySelector("#arena-cards-container");t&&this.renderTournamentsFeed(t)}}}renderLiveTournamentBanner(e){const t=parseFloat(e.current_prize_pool)||parseFloat(e.prize_pool)||0,s=e.end_time;return`
      <div class="live-tournament-banner" data-tournament-id="${e.id}">
        <div class="live-banner-header">
          <span class="live-dot-indicator"></span>
          <span class="live-banner-label">${a("arenas.live_now")}</span>
          ${s?`<span class="live-banner-countdown" data-countdown="${s}">${a("arenas.countdown_left",{countdown:Z(s)})}</span>`:""}
        </div>
        <div class="live-banner-name">${e.name||a("arenas.tournament_fallback_name")}</div>
        <div class="live-banner-prize">${a("arenas.prize_pool",{amount:B(t)})}</div>
        <button class="live-banner-play-btn" data-play-id="${e.id}">
          <span class="play-icon">▶</span>
          ${a("arenas.play_now")}
        </button>
      </div>
    `}attachTournamentsFeedListeners(e){this.ensureTournamentsFeed(),e.querySelectorAll(".live-banner-play-btn").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.tournamentsFeed.handlePlayNow(s.dataset.playId)})}),e.querySelectorAll(".live-tournament-banner").forEach(s=>{s.addEventListener("click",n=>{n.target.closest(".live-banner-play-btn")||this.handleTournamentCardClick(s.dataset.tournamentId)})}),e.querySelectorAll(".featured-wrapper").forEach(s=>{s.addEventListener("click",n=>{n.target.closest(".featured-btn")||this.handleTournamentCardClick(s.dataset.tournamentId)})}),e.querySelectorAll(".btn-register-featured").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.handleTournamentRegister(s.dataset.registerId)})}),e.querySelectorAll(".btn-play-featured").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.tournamentsFeed.handlePlayNow(s.dataset.playId)})}),e.querySelectorAll(".tournament-card-simple").forEach(s=>{s.addEventListener("click",n=>{n.target.closest(".simple-btn")||this.handleTournamentCardClick(s.dataset.tournamentId)})}),e.querySelectorAll(".btn-outline-green[data-register-id]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.handleTournamentRegister(s.dataset.registerId)})}),e.querySelectorAll(".btn-play-simple").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.tournamentsFeed.handlePlayNow(s.dataset.playId)})}),e.querySelectorAll(".btn-outline[data-tournament-id], .btn-outline-green[data-tournament-id]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),this.handleTournamentCardClick(s.dataset.tournamentId)})});const t=e.querySelector(".view-all-tournaments-btn");t&&t.addEventListener("click",()=>{C(y.isTelegram?"/tg/tournaments":"/tournaments")})}async handleTournamentCardClick(e){this.ensureTournamentsFeed(),await this.tournamentsFeed.handleCardClick(e)}async handleTournamentRegister(e){const s=this.container.querySelector("#arena-cards-container")?.querySelector(`[data-register-id="${e}"]`);if(s?.classList.contains("processing"))return;s&&(s.classList.add("processing"),s.textContent=a("arenas.registering")),this.ensureTournamentsFeed(),await this.tournamentsFeed.handleRegister(e),this.tournamentsData=null;const n=this.container.querySelector("#arena-cards-container");n&&this.activeTab==="tournaments"&&this.renderTournamentsFeed(n)}startTournamentsCountdown(){this.stopTournamentsCountdown(),this.tournamentsCountdownInterval=setInterval(()=>{if(!this.isVisible||this.activeTab!=="tournaments")return;const e=this.container.querySelector("#arena-cards-container");e&&e.querySelectorAll("[data-countdown]").forEach(t=>{const s=t.dataset.countdown;if(!s)return;const n=Z(s);if(t.classList.contains("live-banner-countdown")){t.textContent=a("arenas.countdown_left",{countdown:n});return}const r=t.querySelector("svg"),l=t.classList.contains("live")?a("arenas.countdown_left",{countdown:n}):n;if(r){const c=t.querySelector("span");c?c.textContent=l:(t.innerHTML="",t.appendChild(r),t.appendChild(document.createTextNode(l)))}else t.textContent=l})},1e3)}stopTournamentsCountdown(){this.tournamentsCountdownInterval&&(clearInterval(this.tournamentsCountdownInterval),this.tournamentsCountdownInterval=null)}show(){const e=h.getAuthState();if(!(e.initialized&&(e.type==="registered"||e.authProvider==="telegram"))&&!A()){C("/",!0);return}if(this.container){this.container.style.display="block",this.isVisible=!0,ee()&&(this.applyTesterTabs(),this._testerStakeApplied||(this._testerStakeApplied=!0,this._preferredStakeFee=.2)),L.track("arena_viewed","game",{server_count:T.servers?.length||0});const s=new URLSearchParams(window.location.search),n=s.get("tab");if(n&&(n==="practice"||n==="cash"||n==="tournaments")){this.activeTab!==n&&this.switchTab(n);const r=s.get("fee");if(r&&n==="cash"){const o=parseFloat(r);Number.isFinite(o)&&(this._preferredStakeFee=o)}}else{const r=h.getAuthState(),o=parseFloat(r.balance)||0,l=r.bonusGamesRemaining||0,c=(r.tickets?.arena||[]).length,d=h.getFreeEntriesTotal();o<Ee(Xt)&&l===0&&c===0&&d===0&&this.activeTab!=="practice"&&!ee()&&this.switchTab("practice")}if(this.loadServers(!0),this.renderNicknameLine(),this.startPlayerCountPolling(),this.tournamentsData=null,A()){let r=null;try{r=sessionStorage.getItem(St),sessionStorage.removeItem(St)}catch{}r&&!this._tournamentsTabHidden?(this.casinoTab().openWhenListed(r),this.activeTab!=="tournaments"&&this.switchTab("tournaments")):this.activeTab!=="tournaments"&&this.casinoTab().probe()}A()&&this.autoShowCasinoRules()}}async autoShowCasinoRules(){if(!this._casinoRulesAutoShown){this._casinoRulesAutoShown=!0;try{await dr()}catch(e){e?.message}this.isVisible&&await this.checkAndShowTutorial()}}applyTesterTabs(){if(!ee()||!this.container)return;const e=this.container.querySelector('.tab-btn[data-tab="practice"]');e&&(e.style.display="none");const t=this.container.querySelector(".arenas-tabs");t&&(t.classList.remove("arenas-tabs-3"),t.classList.add("arenas-tabs-2"))}hide(){this.container&&(this.container.style.display="none",this.isVisible=!1,this.stopTournamentsCountdown(),this.tournamentsFeed?.closeDetail(),this.casinoTournaments?.unmount(),this.stopPlayerCountPolling())}destroy(){this._onNameChange&&typeof window<"u"&&window.removeEventListener(Et,this._onNameChange),this.nicknameUI?.destroy(),this.nicknameUI=null,this._stopStakeRowFit?.(),this._stopStakeRowFit=null,this.stopAutoSlide(),this.stopCountdown(),this._stopLocaleListener&&(this._stopLocaleListener(),this._stopLocaleListener=null),this.stopTournamentsCountdown(),this.stopPlayerCountPolling(),this.tournamentsFeed?.closeDetail(),this.casinoTournaments?.destroy(),this.casinoTournaments=null,this.tournamentsFeedContainer&&(this.tournamentsFeedContainer.remove(),this.tournamentsFeedContainer=null)}}const Re=new mo,fo=300;function go(i,e={}){const t=Number(i.roundsRemaining)||0,s=i.roundsRemaining>=i.roundsTotal,n=(e.formatAmount||vo)(i);return{title:s?v("promo.free_rounds_granted_title",t):v("promo.free_rounds_left_title",t),description:v("promo.free_rounds_description",t,{amount:n}),expiry:i.validUntil!=null?a("promo.valid_until",{date:(e.formatDate||yo)(i.validUntil)}):"",play:a("promo.play_now"),reject:a("promo.no_thanks"),confirmTitle:v("promo.give_up_free_rounds_title",t),confirmDescription:a("promo.give_up_free_rounds_text"),keep:a("promo.keep_free_rounds"),confirmReject:a("promo.confirm_reject"),rejecting:a("promo.rejecting")}}function vo(i){const e=Number(i.betAmount);return i.betAmount!==""&&Number.isFinite(e)&&i.currency?Zt(e,i.currency):O(Number(i.entryFee),"pay")}function yo(i){try{return new Date(i).toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return new Date(i).toISOString()}}function bo(i){const{authManager:e,onPlay:t,getDocument:s=()=>globalThis.document,formatAmount:n,formatDate:r,setTimeoutFn:o=($,b)=>setTimeout($,b)}=i||{};if(!e)throw new Error("createFreeRoundPromoDialog: authManager is required");const l=new Set;let c=[],d=null,u=null,p=null,m=!1;function g(){return e.state?.authProvider==="casino"}function S($){c=Array.isArray($)?$.filter(b=>b&&b.promoCode):[],g()&&(d||E())}function E(){const $=c.find(b=>!l.has(b.promoCode));$&&te($)&&l.add($.promoCode)}function M($,b,le,V){const Y=$.createElement(b);return le&&(Y.className=le),V!=null&&(Y.textContent=V),Y}function te($){const b=s();if(!b||!b.body)return!1;u=$,m=!1;let le="offer";const V=go($,{formatAmount:n,formatDate:r});d=M(b,"div","promo-popup free-round-promo"),d.setAttribute("role","dialog"),d.setAttribute("aria-modal","true"),d.setAttribute("aria-labelledby","free-round-promo-title"),d.setAttribute("data-promo-code",$.promoCode),d.setAttribute("data-step",le);const Y=M(b,"div","promo-popup-overlay");Y.addEventListener("click",()=>{m||R()});const se=M(b,"div","promo-popup-card"),ye=M(b,"button","promo-popup-close","×");ye.setAttribute("type","button"),ye.setAttribute("aria-label",a("common.close")),ye.addEventListener("click",()=>{m||R()});const Qn=M(b,"div","promo-popup-icon","🎁"),ys=M(b,"h2","promo-popup-title",V.title);ys.id="free-round-promo-title";const ea=M(b,"p","promo-popup-description",V.description),bs=M(b,"p","free-round-promo-expiry",V.expiry);V.expiry||(bs.style.display="none");const Ne=M(b,"button","promo-popup-cta free-round-promo-primary",V.play);return Ne.setAttribute("type","button"),Ne.setAttribute("data-action","play"),Ne.addEventListener("click",()=>{if(m)return;const Fe=$.entryFee;R();try{typeof t=="function"&&t(Fe,$)}catch(_s){_s?.message}}),se.appendChild(ye),se.appendChild(Qn),se.appendChild(ys),se.appendChild(ea),se.appendChild(bs),se.appendChild(Ne),d.appendChild(Y),d.appendChild(se),b.body.appendChild(d),b.body.style&&(b.body.style.overflow="hidden"),p=Fe=>{Fe&&Fe.key==="Escape"&&!m&&R()},typeof b.addEventListener=="function"&&b.addEventListener("keydown",p),!0}function R(){if(!d)return;const $=s(),b=d;d=null,u=null,m=!1,p&&$&&typeof $.removeEventListener=="function"&&$.removeEventListener("keydown",p),p=null,b.classList&&typeof b.classList.add=="function"&&b.classList.add("closing"),o(()=>{typeof b.remove=="function"?b.remove():b.parentNode&&typeof b.parentNode.removeChild=="function"&&b.parentNode.removeChild(b),d||($?.body?.style&&($.body.style.overflow=""),g()&&E())},fo)}return{offer:S,close:R,isOpen:()=>d!==null,currentPromoCode:()=>u?u.promoCode:null,_resetPresented:()=>l.clear()}}let Te=null;function _o(i){return Te||(Te=bo(i)),Te}function Zs(i){Te&&Te.offer(i)}const wo='<svg width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>';class ko{constructor(){this.container=null,this._stopLocaleChange=null}init(e){this.container=document.createElement("div"),this.container.id="view-privacy",this.container.className="legal-page",this.container.style.display="none",this.render(),e.appendChild(this.container),this._stopLocaleChange=q(()=>this.render())}render(){if(!this.container)return;const e=he()!=="en"?`<p class="privacy-modal-notice privacy-date">${a("legal.english_only_notice")}</p>`:"";this.container.innerHTML=`
      <div class="legal-page-inner">
        <button class="legal-back-btn" id="privacy-back-btn">${wo} ${a("common.back")}</button>
        <div class="privacy-modal-content">
          ${e}
          ${An()}
        </div>
      </div>
    `,this.container.querySelector("#privacy-back-btn")?.addEventListener("click",()=>C("/"))}show(){this.container&&(this.container.style.display="block",this.container.scrollTop=0)}hide(){this.container&&(this.container.style.display="none")}}const Vt=new ko,So='<svg width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>';class Co{constructor(){this.container=null,this._stopLocaleChange=null}init(e){this.container=document.createElement("div"),this.container.id="view-terms",this.container.className="legal-page",this.container.style.display="none",this.render(),e.appendChild(this.container),this._stopLocaleChange=q(()=>this.render())}render(){if(!this.container)return;const e=he()!=="en"?`<p class="terms-modal-notice terms-date">${a("legal.english_only_notice")}</p>`:"";this.container.innerHTML=`
      <div class="legal-page-inner">
        <button class="legal-back-btn" id="terms-back-btn">${So} ${a("common.back")}</button>
        <div class="terms-modal-content">
          ${e}
          ${Mn()}
        </div>
      </div>
    `,this.container.querySelector("#terms-back-btn")?.addEventListener("click",()=>C("/"))}show(){this.container&&(this.container.style.display="block",this.container.scrollTop=0)}hide(){this.container&&(this.container.style.display="none")}}const zt=new Co,To='<svg width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/></svg>',fe="DELETE",Xs="privacy@viperroyale.com",$o="Data Deletion Request";function Qs(){return`${y.isTelegram?"/tg":"/standalone"}/account/delete`}function Eo(i){try{return new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}catch{return i}}class Lo{constructor(){this.container=null,this._busy=!1,this._view="form",this._requestedAt=null,this._typed="",this._result=null,this._stopLocaleChange=null}init(e){this.container=document.createElement("div"),this.container.id="view-delete-account",this.container.className="legal-page",this.container.style.display="none",e.appendChild(this.container)}show(){this.container&&(this._busy=!1,this._view="form",this._requestedAt=null,this._typed="",this._result=null,this.render(),this.container.style.display="block",this.container.scrollTop=0,this._stopLocaleChange?.(),this._stopLocaleChange=q(()=>this.render()))}hide(){this.container&&(this.container.style.display="none"),this._stopLocaleChange?.(),this._stopLocaleChange=null}render(){this.container&&(this.container.innerHTML=`
      <div class="legal-page-inner">
        <button class="legal-back-btn" id="delete-back-btn">${To} ${a("common.back")}</button>
        <div class="delete-account-card">
          <h1>${a("legal.delete_account_title")}</h1>
          <div id="delete-body">
            ${this.getBodyHTML()}
          </div>
        </div>
      </div>
    `,this.container.querySelector("#delete-back-btn")?.addEventListener("click",()=>C("/")),this.attachFormListeners())}renderBody(){const e=this.container?.querySelector("#delete-body");e&&(e.innerHTML=this.getBodyHTML(),this.attachFormListeners())}getBodyHTML(){return h.isAuthenticated?.()??!!h.getAuthState?.()?.userId?this._view==="pending"?this.getPendingHTML(this._requestedAt):this.getRequestFormHTML():this.getUnauthenticatedHTML()}getRequestFormHTML(){const e=this._typed.trim()===fe&&!this._busy;return`
      <div class="delete-warning">
        <p><strong>${a("legal.delete_warning_label")}</strong> ${a("legal.delete_warning_text")}</p>
      </div>
      <p class="delete-instructions">${a("legal.delete_type_to_confirm_html",{word:fe})}</p>
      <div class="delete-input-row">
        <label class="delete-input-label" for="delete-confirm-input">${a("legal.delete_input_label",{word:fe})}</label>
        <input type="text" id="delete-confirm-input" class="delete-input" placeholder="${fe}" autocomplete="off" spellcheck="false" value="${f(this._typed)}" />
      </div>
      <button class="delete-confirm-btn${e?" enabled":""}" id="delete-confirm-btn"${e?"":" disabled"}>${this._busy?a("legal.delete_processing"):a("legal.delete_my_account")}</button>
      <div id="delete-result">${this.getResultHTML()}</div>
    `}getPendingHTML(e){const t=e?Eo(e):"";return`
      <div class="delete-pending-box">
        <p class="delete-pending-title">${a("legal.delete_pending_title")}</p>
        <p class="delete-pending-text">${a("legal.delete_pending_scheduled")}${t?` ${a("legal.delete_pending_requested_on_html",{date:t})}`:""}</p>
        <p class="delete-pending-text">${a("legal.delete_pending_hint")}</p>
      </div>
      <button class="delete-cancel-btn" id="delete-cancel-btn"${this._busy?" disabled":""}>${this._busy?a("legal.delete_cancelling"):a("legal.delete_cancel_request")}</button>
      <div id="delete-result">${this.getResultHTML()}</div>
    `}getUnauthenticatedHTML(){return`
      <div class="delete-warning">
        <p><strong>${a("legal.delete_unauth_title")}</strong></p>
        <p>${a("legal.delete_unauth_text")}</p>
      </div>
      <p class="delete-email-instructions">
        ${a("legal.delete_unauth_email_html",{email:Xs,subject:$o})}
      </p>
    `}getResultHTML(){const e=this._result;return e?e.kind==="error"?`<div class="delete-result error">${a(e.key,{email:Xs})}</div>`:`<div class="delete-result success">${f(e.text||a("legal.delete_cancelled"))}</div>`:""}attachFormListeners(){const e=this.container.querySelector("#delete-confirm-input"),t=this.container.querySelector("#delete-confirm-btn");e&&t&&(e.addEventListener("input",()=>{this._typed=e.value;const n=e.value.trim()===fe&&!this._busy;t.disabled=!n,t.classList.toggle("enabled",n)}),t.addEventListener("click",()=>this.handleDelete()));const s=this.container.querySelector("#delete-cancel-btn");s&&s.addEventListener("click",()=>this.handleCancel())}async handleDelete(){if(!this._busy&&this._typed.trim()===fe){this._busy=!0,this._result=null,this.renderBody();try{const e=await mn(Qs()),t=await e.json();if(!e.ok)throw new Error(t.message||`Server responded with ${e.status}`);this._view="pending",this._requestedAt=t.requested_at,this._typed=""}catch(e){console.error("[DeleteAccount] Request failed:",e),this._result={kind:"error",key:"legal.delete_error_html"}}finally{this._busy=!1,this.renderBody()}}}async handleCancel(){if(!this._busy){this._busy=!0,this._result=null,this.renderBody();try{const e=await gn(Qs()),t=await e.json();if(!e.ok)throw new Error(t.message||`Server responded with ${e.status}`);this._view="form",this._requestedAt=null,this._typed="",this._result={kind:"success",text:t.message||null}}catch(e){console.error("[DeleteAccount] Cancel failed:",e),this._result={kind:"error",key:"legal.delete_cancel_error_html"}}finally{this._busy=!1,this.renderBody()}}}}const Gt=new Lo;async function en(i=1,e=20){try{const t=await ss(`/replay/list?page=${i}&limit=${e}`);if(!t.ok){const n=t.status;return n===401?{success:!1,error:"unauthorized"}:{success:!1,error:a("replay.request_failed",{status:n})}}const s=await t.json();return{success:!0,replays:s.replays||[],total:s.total||0,page:s.page||i,limit:s.limit||e}}catch(t){return console.error("[ReplayAPI] fetchReplays error:",t),{success:!1,error:t.message||a("replay.network_error")}}}async function Ao(i){try{const e=await gn(`/replay/${encodeURIComponent(i)}`);if(!e.ok){const t=e.status;let s=a("replay.delete_failed_status",{status:t});try{const n=await e.json();n.error&&(s=n.error)}catch{}return{success:!1,error:s,status:t}}return{success:!0}}catch(e){return console.error("[ReplayAPI] deleteReplay error:",e),{success:!1,error:e.message||a("replay.network_error")}}}function Mo(i){return!i||i===0?a("replay.file_size_b",{size:0}):i<1024?a("replay.file_size_b",{size:i}):i<1024*1024?a("replay.file_size_kb",{size:(i/1024).toFixed(1)}):a("replay.file_size_mb",{size:(i/(1024*1024)).toFixed(1)})}function Io(i){try{const e=new Date(i);return isNaN(e.getTime())?a("replay.unknown_date"):e.toLocaleDateString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{return a("replay.unknown_date")}}const xo='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="6,3 20,12 6,21" fill="currentColor" stroke="none"/></svg>',Ro='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"/><path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"/><path d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"/><path d="M15.5 6.5L8.5 10.5"/><path d="M8.5 13.5L15.5 17.5"/></svg>',tn='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9"/><path d="M21 6H15.375M3 6H8.625M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6H15.375"/></svg>',Po='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 2L7 22"/><path d="M17 2L17 22"/><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M2 7H7"/><path d="M2 12H22"/><path d="M2 17H7"/><path d="M17 7H22"/><path d="M17 17H22"/></svg>',Bo='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="6,3 20,12 6,21" fill="currentColor" stroke="none" opacity="0.3"/></svg>';class No{constructor(){this.container=null,this.isVisible=!1,this.state="loading",this.replays=[],this.currentPage=1,this.total=0,this.isLoadingMore=!1,this.deletingId=null,this.confirmDeleteId=null,this.errorMessage="",this.toastTimeout=null,this._stopLocaleChange=null,this.handleBack=this.handleBack.bind(this)}init(e){this.container=document.createElement("div"),this.container.id="view-replays",this.container.className="replays-page",this.container.style.display="none",e.appendChild(this.container)}async show(){this.container&&(this.isVisible=!0,this.container.style.display="block",this._stopLocaleChange?.(),this._stopLocaleChange=q(()=>{this.isVisible&&this.render()}),this.state="loading",this.replays=[],this.currentPage=1,this.total=0,this.isLoadingMore=!1,this.render(),await this.loadReplays())}hide(){if(!this.container)return;this.isVisible=!1,this.container.style.display="none",this._stopLocaleChange?.(),this._stopLocaleChange=null,this.cleanupVideos();const e=document.querySelector(".replay-player-overlay");if(e){const n=e.querySelector("video");n&&(n.pause(),n.removeAttribute("src"),n.load()),e.remove()}this.confirmDeleteId=null;const t=document.getElementById("replay-delete-modal");t&&t.remove(),this.toastTimeout&&(clearTimeout(this.toastTimeout),this.toastTimeout=null);const s=document.querySelector(".replays-toast");s&&s.remove()}async loadReplays(){const e=await en(1,20);this.isVisible&&(e.success?(this.replays=e.replays,this.total=e.total,this.currentPage=e.page,this.state="loaded"):(this.state="error",this.errorMessage=e.error==="unauthorized"?a("replay.login_to_view"):e.error||a("replay.load_failed")),this.render())}async loadMore(){if(this.isLoadingMore)return;this.isLoadingMore=!0,this.updateLoadMoreButton();const e=this.currentPage+1,t=await en(e,20);if(!this.isVisible){this.isLoadingMore=!1;return}if(this.isLoadingMore=!1,t.success){const s=t.replays;this.replays=[...this.replays,...s],this.total=t.total,this.currentPage=t.page;const n=this.container?.querySelector(".replays-grid");if(n){const r=document.createDocumentFragment(),o=document.createElement("div");for(o.innerHTML=s.map(l=>this.getCardHTML(l)).join("");o.firstChild;)r.appendChild(o.firstChild);n.appendChild(r),this.updateLoadMoreSection()}else this.render()}else this.showToast(a("replay.load_more_failed")),this.updateLoadMoreButton()}async performDelete(e){this.confirmDeleteId=null,this.deletingId=e;const t=this.container?.querySelector(`[data-replay-id="${CSS.escape(e)}"]`),s=t?.querySelector(".replay-btn-delete");s&&(s.disabled=!0,s.innerHTML='<span class="spinner"></span>');const n=await Ao(e);this.isVisible&&(this.deletingId=null,n.success||n.status===404?(t?(t.classList.add("fade-out"),setTimeout(()=>{this.isVisible&&(t.remove(),this.replays=this.replays.filter(r=>r.id!==e),this.total=Math.max(0,this.total-1),this.replays.length===0&&this.render())},300)):(this.replays=this.replays.filter(r=>r.id!==e),this.total=Math.max(0,this.total-1),this.replays.length===0&&this.render()),this.showToast(n.status===404?a("replay.already_deleted"):a("replay.deleted"))):(s&&(s.disabled=!1,s.innerHTML=tn),n.status===403?this.showToast(a("replay.cannot_delete")):this.showToast(n.error||a("replay.delete_failed"))))}openPlayer(e){const t=document.createElement("div");t.className="replay-player-overlay",t.innerHTML=`
      <button class="replay-player-close">&times;</button>
      <video src="${f(e)}" controls autoplay playsinline></video>
    `;const s=()=>{const n=t.querySelector("video");n&&(n.pause(),n.removeAttribute("src"),n.load()),t.remove()};t.querySelector(".replay-player-close").addEventListener("click",s),t.addEventListener("click",n=>{n.target===t&&s()}),document.body.appendChild(t)}async shareReplay(e){if(y.isTelegram&&window.Telegram?.WebApp?.openTelegramLink){const t=`https://t.me/share/url?url=${encodeURIComponent(e)}&text=${encodeURIComponent(a("replay.share_text",{appName:a("app.name")}))}`;window.Telegram.WebApp.openTelegramLink(t);return}if(navigator.share)try{await navigator.share({url:e});return}catch(t){if(t.name==="AbortError")return}try{await navigator.clipboard.writeText(e),this.showToast(a("replay.link_copied"))}catch{this.showToast(a("replay.copy_failed"))}}render(){if(!this.container)return;let e="";this.state==="loading"?e=this.getLoadingHTML():this.state==="error"?e=this.getErrorHTML():this.replays.length===0?e=this.getEmptyHTML():e=this.getGridHTML(),this.container.innerHTML=`
      ${this.getHeaderHTML()}
      <div class="replays-content">${e}</div>
    `,this.attachListeners()}getHeaderHTML(){return`
      <div class="replays-header">
        <button class="replays-back-btn" id="replays-back-btn">&larr;</button>
        <span class="replays-title">${a("replay.title")}</span>
      </div>
    `}getLoadingHTML(){return`
      <div class="replays-loading">
        <div class="spinner-lg"></div>
        <span>${a("replay.loading_replays")}</span>
      </div>
    `}getErrorHTML(){return`
      <div class="replays-error">
        <span class="replays-error-title">${a("replay.error_title")}</span>
        <span>${f(this.errorMessage)}</span>
        <button class="replays-retry-btn" id="replays-retry-btn">${a("common.retry")}</button>
      </div>
    `}getEmptyHTML(){return`
      <div class="replays-empty">
        ${Po}
        <span class="replays-empty-title">${a("replay.empty_title")}</span>
        <span class="replays-empty-sub">${a("replay.empty_hint")}</span>
      </div>
    `}getGridHTML(){const e=this.replays.map(s=>this.getCardHTML(s)).join(""),t=this.replays.length<this.total;return`
      <div class="replays-grid">${e}</div>
      ${t?`
        <button class="replays-load-more" id="replays-load-more"
          ${this.isLoadingMore?"disabled":""}>
          ${this.isLoadingMore?a("common.loading"):a("replay.load_more")}
        </button>
      `:""}
    `}getCardHTML(e){const t=this.deletingId===e.id,s=e.url||"",n=Io(e.created_at),r=Mo(e.file_size);return`
      <div class="replay-card" data-replay-id="${f(e.id)}">
        <div class="replay-thumbnail">
          ${s?`<video src="${f(s)}" preload="none" muted playsinline></video>`:`<div class="replay-thumbnail-placeholder">${Bo}</div>`}
        </div>
        <div class="replay-info">
          <span>${f(n)}</span>
          <span>${f(r)}</span>
        </div>
        <div class="replay-actions">
          <button class="replay-btn replay-btn-play" data-action="play" data-url="${f(s)}" title="${a("replay.play")}">${xo}</button>
          <button class="replay-btn replay-btn-share" data-action="share" data-url="${f(e.share_url||s)}" title="${a("replay.share")}">${Ro}</button>
          <button class="replay-btn replay-btn-delete" data-action="delete" data-id="${f(e.id)}" title="${a("replay.delete")}"
            ${t?"disabled":""}>
            ${t?'<span class="spinner"></span>':tn}
          </button>
        </div>
      </div>
    `}attachListeners(){if(!this.container)return;this.container.querySelector("#replays-back-btn")?.addEventListener("click",this.handleBack),this.container.querySelector("#replays-retry-btn")?.addEventListener("click",()=>{this.state="loading",this.render(),this.loadReplays()}),this.container.querySelector("#replays-load-more")?.addEventListener("click",()=>this.loadMore()),this.container.querySelector(".replays-grid")?.addEventListener("click",r=>{const o=r.target.closest(".replay-btn");if(!o||o.disabled)return;const l=o.dataset.action;if(l==="play"){const c=o.dataset.url;c&&this.openPlayer(c)}else if(l==="share"){const c=o.dataset.url;c&&this.shareReplay(c)}else if(l==="delete"){const c=o.dataset.id;c&&this.showDeleteConfirm(c)}})}showDeleteConfirm(e){if(this.confirmDeleteId)return;this.confirmDeleteId=e;const t=document.createElement("div");t.className="replay-delete-modal",t.id="replay-delete-modal",t.innerHTML=`
      <div class="replay-delete-modal-box">
        <div class="replay-delete-modal-title">${a("replay.delete_confirm_title")}</div>
        <div class="replay-delete-modal-text">${a("replay.delete_confirm_text")}</div>
        <div class="replay-delete-modal-actions">
          <button class="replay-delete-cancel" id="replay-delete-cancel">${a("common.cancel")}</button>
          <button class="replay-delete-confirm" id="replay-delete-confirm">${a("replay.delete")}</button>
        </div>
      </div>
    `,t.querySelector("#replay-delete-cancel").addEventListener("click",()=>{this.confirmDeleteId=null,t.remove()}),t.querySelector("#replay-delete-confirm").addEventListener("click",()=>{t.remove(),this.performDelete(e)}),t.addEventListener("click",s=>{s.target===t&&(this.confirmDeleteId=null,t.remove())}),document.body.appendChild(t)}handleBack(){C("/")}updateLoadMoreButton(){const e=this.container?.querySelector("#replays-load-more");e&&(e.disabled=this.isLoadingMore,e.textContent=this.isLoadingMore?a("common.loading"):a("replay.load_more"))}updateLoadMoreSection(){const e=this.container?.querySelector("#replays-load-more");if(this.replays.length<this.total)if(e)e.disabled=!1,e.textContent=a("replay.load_more");else{const s=this.container?.querySelector(".replays-content");if(s){const n=document.createElement("button");n.className="replays-load-more",n.id="replays-load-more",n.textContent=a("replay.load_more"),n.addEventListener("click",()=>this.loadMore()),s.appendChild(n)}}else e&&e.remove()}cleanupVideos(){if(!this.container)return;this.container.querySelectorAll("video").forEach(t=>{t.pause(),t.removeAttribute("src"),t.load()})}showToast(e){const t=document.querySelector(".replays-toast");t&&t.remove(),this.toastTimeout&&clearTimeout(this.toastTimeout);const s=document.createElement("div");s.className="replays-toast",s.textContent=e,document.body.appendChild(s),requestAnimationFrame(()=>s.classList.add("visible")),this.toastTimeout=setTimeout(()=>{s.classList.remove("visible"),setTimeout(()=>s.remove(),300)},2e3)}}const jt=new No,Fo="https://s3-viperroyale-crm.s3.eu-north-1.amazonaws.com/FrontAssets/mainpage.mp4";document.body.style.setProperty("--bg-image",`url(${Fa})`);const Be={intervals:[],eventListeners:[],addInterval(i){this.intervals.push(i)},addEventListener(i,e,t,s){i.addEventListener(e,t,s),this.eventListeners.push({element:i,event:e,handler:t,options:s})},cleanup(){this.intervals.forEach(i=>clearInterval(i)),this.eventListeners.forEach(({element:i,event:e,handler:t,options:s})=>{i.removeEventListener(e,t,s)}),this.intervals=[],this.eventListeners=[],I.debug("Landing","Cleanup completed")}};let Ct=null;function Ho(){return Ct||(Ct=new Sa),Ct}let $e=null;const Q=new URLSearchParams(window.location.search);Q.has("token");const Ue=Q.get("ref");function Do(){const i=[localStorage,sessionStorage];for(const e of i)try{const t=e.getItem("pending_referral_code");if(!t)continue;try{const s=JSON.parse(t);return typeof s=="object"&&s.code?s.code:t}catch{return t}}catch{}return null}const sn=Do();new Date().toISOString();window.location.href;window.location.search;y.isTelegram;if(Ue){const i=JSON.stringify({code:Ue.trim().toUpperCase(),timestamp:Date.now()});let e=!1;try{localStorage.setItem("pending_referral_code",i),e=!0}catch(t){t.message}try{sessionStorage.setItem("pending_referral_code",i),e=!0}catch(t){t.message}e||(console.error("%c[REFERRAL DEBUG] FAILED to store referral code in any storage!","color: #ff0000; font-weight: bold;"),I.warn("Landing","Failed to store referral code in any storage"))}const nn=Q.get("source");if(nn){const i=nn.trim().toLowerCase();try{localStorage.setItem("viper_registration_source",i)}catch{}try{sessionStorage.setItem("viper_registration_source",i)}catch{}const e=new URL(window.location.href);e.searchParams.delete("source"),history.replaceState(null,"",e.pathname+e.search+e.hash)}window.testPromoPopup=(i={})=>{const e={icon:"🔔",title:"You've got a hot streak!",description:"Try playing on the $2 free games, where you can bag {{$100}} min win!",ctaText:"Play $2 game",ctaAction:"play_game",ctaParams:{gameType:"free",entryFee:2},secondaryText:"Uses 1 free game"};return Ae.show({...e,...i},(t,s)=>{},()=>{}),"Promo popup shown! Call window.promoPopup.close() to dismiss."};window.promoPopup=Ae;window.testImageBanner=(i={})=>{const e={imageUrl:"https://picsum.photos/340/600",orientation:"vertical"};return hn.show({...e,...i},(t,s)=>{},()=>{}),"Image banner shown! Call window.imageBanner.close() to dismiss."};window.imageBanner=hn;window.testPromotionsPanel=()=>(it.open(i=>{}),"Promotions panel opened! Call window.promotionsPanel.close() to dismiss.");window.promotionsPanel=it;window.testBurgerMenu=()=>(cs.open(),"Burger menu opened! Call window.burgerMenu.close() to dismiss.");window.burgerMenu=cs;window.debugReferral=()=>{const i=l=>{if(!l)return null;try{const c=JSON.parse(l);return typeof c=="object"&&c.code?{code:c.code,timestamp:c.timestamp,age:c.timestamp?Math.round((Date.now()-c.timestamp)/1e3/60)+" minutes":"unknown"}:{code:l,timestamp:null,age:"unknown (old format)"}}catch{return{code:l,timestamp:null,age:"unknown (old format)"}}},e=i(localStorage.getItem("pending_referral_code")),t=i(sessionStorage.getItem("pending_referral_code")),s=e?.code||t?.code||null,r=new URLSearchParams(window.location.search).get("ref"),o=h.getAuthState();return console.group("%c🔗 Referral Debug","font-size: 14px; font-weight: bold; color: #ff6b00;"),window.location.href,y.isTelegram,console.table({localStorage:e?`${e.code} (age: ${e.age})`:"(none)",sessionStorage:t?`${t.code} (age: ${t.age})`:"(none)",effective:s||"(none)"}),console.table({type:o.type,authProvider:o.authProvider,hasToken:!!o.token,userId:o.userId,email:o.email,initialized:o.initialized}),s&&o.type,console.groupEnd(),{urlRefCode:r,pendingRefCode:s,localStorageData:e,sessionStorageData:t,authState:{type:o.type,authProvider:o.authProvider,hasToken:!!o.token,userId:o.userId},isTelegram:y.isTelegram}};window.debugAttribution=()=>{const i=localStorage.getItem("viper_utm"),e=new URLSearchParams(window.location.search);console.group("%c📊 Attribution Debug","font-size: 14px; font-weight: bold; color: #4CAF50;"),i&&console.table(JSON.parse(i));const t={utm_source:e.get("utm_source"),utm_medium:e.get("utm_medium"),utm_campaign:e.get("utm_campaign"),utm_content:e.get("utm_content"),utm_tracking:e.get("utm_tracking")};return Object.values(t).some(n=>n)&&console.table(t),window.location.origin+"",window.location.origin+"",console.groupEnd(),{fingerprint:"(server-side only)",utmData:i?JSON.parse(i):null,urlParams:t}};if(!y.isTelegram){const i={utm_source:Q.get("utm_source"),utm_medium:Q.get("utm_medium"),utm_campaign:Q.get("utm_campaign"),utm_content:Q.get("utm_content"),utm_term:Q.get("utm_term")},e=Q.get("utm_tracking");if(e){const t=e.split("_");t.length>=1&&(i.utm_source=i.utm_source||t[0]),t.length>=2&&(i.utm_medium=i.utm_medium||t[1]),t.length>=3&&(i.utm_campaign=i.utm_campaign||t[2]),t.length>=4&&(i.utm_content=i.utm_content||t[3])}if(Object.values(i).some(t=>t)){try{localStorage.setItem("viper_utm",JSON.stringify(i))}catch(t){I.warn("Landing","Failed to store UTM data:",t)}aa().then(t=>{fetch(`${y.lobbyApiUrl}/public/ad/track-visit`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fingerprint:t,utm_source:i.utm_source||"",utm_medium:i.utm_medium||"",utm_campaign:i.utm_campaign||"",utm_content:i.utm_content||""})}).then(s=>s.json()).then(s=>{s.success&&s.visit_id}).catch(s=>I.warn("Landing","Failed to track visit:",s))}).catch(t=>I.warn("Landing","Failed to generate fingerprint for visit tracking:",t))}}function fs(){try{const i=localStorage.getItem("viper_claim_token"),e=localStorage.getItem("viper_pending_winnings");if(i&&e)return{token:i,amount:parseFloat(e)}}catch(i){I.error("Landing","Failed to read unclaimed winnings:",i)}return null}const U=document.createElement("div");U.className="landing";const Oo=`<svg class="google-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
</svg>`;U.innerHTML=`
  <!-- Top Header Navigation -->
  <header class="top-header" id="top-header">
    <div class="header-container">
      <!-- Left: Burger Menu + Gift -->
      <div class="header-left">
        <button class="header-btn hamburger-btn" id="hamburger-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <!-- Operator lobby exit (casino launches only). Hidden until
             updateOperatorHomeButton (modules/ui-manager.js) resolves a lobby URL
             for THIS launch — that function is the source of truth for href,
             target, rel and aria-label, and re-applies all four every time it
             shows the control. The copies below are only the inert initial state;
             editing them here changes nothing at runtime. -->
        <a class="header-btn home-btn" id="header-home-btn" style="display: none;" aria-label="${a("landing.operator_home_label")}" target="_top" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
        <button class="header-btn profile-btn" id="header-profile-btn" style="display: none;">
          <div class="profile-avatar-circle" id="profile-avatar-circle">
            <span class="avatar-initial" id="avatar-initial">?</span>
          </div>
        </button>
        <button class="header-btn gift-btn" id="header-gift-btn" style="display: none;">
          <span class="gift-emoji">🎁</span>
          <span class="notification-badge" id="gift-badge" style="display: none;">0</span>
        </button>
      </div>

      <!-- Center: Logo -->
      <div class="header-logo-text">
        <span class="logo-viper" data-i18n="app.logo_first">${a("app.logo_first")}</span>
        <span class="logo-royale" data-i18n="app.logo_second">${a("app.logo_second")}</span>
      </div>

      <!-- Right: Balance -->
      <div class="header-right">
        <div class="header-balance" id="header-balance-pill">
          <span class="balance-value" id="header-balance">$0.00</span>
          <svg class="balance-arrow" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
      </div>
    </div>

    <!-- Hidden elements for functionality preservation -->
    <button class="header-btn help-btn" id="help-btn" style="display: none;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    </button>
    <button class="sound-toggle" id="header-sound-btn" style="display: none;">
      <svg class="sound-icon sound-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
      </svg>
      <svg class="sound-icon sound-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
      </svg>
    </button>
  </header>

  <!-- Left Side Action Bar (hidden, replaced by header; never rendered, so its
       labels are not localized) -->
  <div class="side-action-bar" style="display: none;">
    <div class="side-action-item">
      <button class="side-action-btn music-btn" id="hero-music-btn">
        <svg class="music-icon music-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
        <svg class="music-icon music-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle><line x1="2" y1="2" x2="22" y2="22"></line></svg>
      </button>
      <span class="side-action-label">Music</span>
    </div>
    <div class="side-action-item">
      <button class="side-action-btn promo-btn" id="hero-promo-btn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12v10H4V12"></path><path d="M2 7h20v5H2z"></path><path d="M12 22V7"></path><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
      </button>
      <span class="side-action-label">Promo</span>
    </div>
    <div class="side-action-item">
      <a class="side-action-btn support-btn" id="support-btn" href="https://t.me/viper_royale" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </a>
      <span class="side-action-label">Support</span>
    </div>
  </div>
  <div id="view-home" class="view-container">
  <div class="landing-content">
    <!-- Hero Game Card with CTA overlay -->
    <div class="hero-game-card">
      <video class="hero-game-card-video" autoplay loop muted playsinline>
        <source src="${Fo}" type="video/mp4">
      </video>
      <div class="hero-badge-live"><span class="live-dot"></span><span id="live-players-count">52</span> <span data-i18n="landing.live_badge_label">${a("landing.live_badge_label")}</span></div>
      <div class="hero-badge-win" id="hero-win-badge"><span class="win-label" data-i18n="landing.win_badge_label">${a("landing.win_badge_label")}</span> <span class="win-amount">$25</span></div>
      <div class="hero-badge-verified">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
        <span data-i18n="landing.skill_game_badge">${a("landing.skill_game_badge")}</span>
      </div>
      <div class="hero-overlay">
        <h2 class="hero-title" data-i18n="app.name">${a("app.name")}</h2>
        <p class="hero-tagline" data-i18n="landing.hero_tagline">${a("landing.hero_tagline")}</p>
      </div>
      <div class="hero-entry-badge" id="hero-entry-badge">$0.50<span data-i18n="landing.entry_badge_label">${a("landing.entry_badge_label")}</span></div>
      <!-- CTA Button overlaying the card. The two labels are owned by the
           promo-UI updaters (modules/auth-flow.js), so they carry no data-i18n:
           a locale change re-runs the updater instead (applyLocaleToShell). -->
      <button class="cta-play-btn" id="hero-play-btn">
        <span class="play-icon">▶</span>
        <span class="cta-text" id="cta-text">${a("landing.cta_sign_up_to_play")}</span>
        <span class="cta-promo" id="cta-promo">${a("landing.cta_first_game_free")}</span>
      </button>
      <!-- Fair Play Guarantee - Trust micro-copy -->
      <div class="cta-trust-line">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        <span data-i18n="landing.trust_line">${a("landing.trust_line")}</span>
      </div>
    </div>

    <!-- Total Paid Out Banner (Lifetime Trust Metric) -->
    <div class="total-payout-banner">
      <div class="payout-content">
        <span class="payout-label" data-i18n="landing.total_paid_label">${a("landing.total_paid_label")}</span>
        <span class="payout-amount" id="total-payout">$847,293</span>
      </div>
      <div class="payout-verified" id="payout-verified">
        <svg viewBox="0 0 24 24" fill="#34c759">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
        <span data-i18n="landing.verified_badge">${a("landing.verified_badge")}</span>
      </div>
      <div class="payout-user-info" id="payout-user-info" style="display: none;">
        <span class="payout-username" id="payout-username"></span>
        <button class="payout-logout-btn" id="payout-logout-btn" data-i18n="landing.logout">${a("landing.logout")}</button>
      </div>
    </div>

    <!-- Announcements (API-driven banners) -->
    <div class="tournaments-preview" id="banners-section">
      <div class="section-header">
        <span class="section-title" data-i18n="landing.announcements_title">${a("landing.announcements_title")}</span>
      </div>
      <div class="tournament-cards-scroll" id="tournament-cards"></div>
    </div>

    <!-- Recent Winners Feed -->
    <div class="recent-winners-feed" id="recent-winners">
      <div class="winners-header">
        <span class="winners-title" data-i18n="landing.recent_winners_title">${a("landing.recent_winners_title")}</span>
        <span class="winners-live-dot"></span>
      </div>
      <div class="winners-list" id="winners-list">
        <div class="winner-item">
          <div class="winner-avatar">M</div>
          <div class="winner-info">
            <span class="winner-name">Mike***23</span>
            <span class="winner-time" data-mins="2">${v("landing.winner_minutes_ago",2)}</span>
          </div>
          <span class="winner-amount">+$12.50</span>
        </div>
        <div class="winner-item">
          <div class="winner-avatar">S</div>
          <div class="winner-info">
            <span class="winner-name">Sara***91</span>
            <span class="winner-time" data-mins="5">${v("landing.winner_minutes_ago",5)}</span>
          </div>
          <span class="winner-amount">+$8.00</span>
        </div>
        <div class="winner-item">
          <div class="winner-avatar">J</div>
          <div class="winner-info">
            <span class="winner-name">Jake***07</span>
            <span class="winner-time" data-mins="8">${v("landing.winner_minutes_ago",8)}</span>
          </div>
          <span class="winner-amount">+$25.00</span>
        </div>
      </div>
    </div>

    <!-- Hidden elements for backward compatibility with JS. Never rendered
         (display:none wrapper), so nothing inside is localized. -->
    <div style="display: none;">
      <div class="limited-offer-badge" id="limited-offer-badge">NEW YEAR BONUS</div>
      <h2 class="promo-headline" id="promo-headline">2 FREE GAMES</h2>
      <div class="win-display">MINIMUM WIN: <span class="win-amount" id="win-amount">$5.00</span></div>
      <div id="bet-options-container"></div>
      <button class="auth-btn sign-in-btn" id="header-signin-btn">${Oo}<span>Sign In with Google</span></button>
      <div id="signin-section"></div>
      <div class="user-profile-panel" id="user-profile-panel">
        <div class="profile-header">
          <div class="profile-info">
            <div class="profile-username" id="profile-username">User</div>
            <div class="profile-email" id="profile-email">email@example.com</div>
          </div>
          <button class="logout-link" id="profile-logout-btn">Logout</button>
        </div>
        <div class="profile-balance-card"><span class="balance-label">BALANCE</span><span class="balance-amount" id="profile-balance">$0.00</span></div>
      </div>
    </div>
  </div>

  <footer class="scroll-footer" id="scroll-footer">
    <div class="scroll-footer-content">
      <!-- Trust & Security Badges -->
      <div class="trust-badges-row">
        <div class="trust-badge">
          <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M9 12l2 2 4-4"></path>
          </svg>
          <span data-i18n="landing.trust_secure_payments">${a("landing.trust_secure_payments")}</span>
        </div>
        <div class="trust-badge">
          <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span data-i18n="landing.trust_ssl_encrypted">${a("landing.trust_ssl_encrypted")}</span>
        </div>
        <div class="trust-badge">
          <svg class="trust-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <span data-i18n="landing.trust_instant_payouts">${a("landing.trust_instant_payouts")}</span>
        </div>
      </div>

      <!-- Payment Methods -->
      <div class="payment-methods-row">
        <span class="payment-label" data-i18n="landing.payment_accepted_label">${a("landing.payment_accepted_label")}</span>
        <div class="payment-icons">
          <span class="payment-icon payment-icon-svg" title="${a("landing.payment_apple_pay")}" data-i18n-attr="title:landing.payment_apple_pay">
            <svg viewBox="0 0 50 20" fill="currentColor" width="38" height="16">
              <path d="M9.6 4.8c-.5.6-1.3 1.1-2.1 1-.1-.8.3-1.6.7-2.1.5-.6 1.4-1 2-.1.1.8-.2 1.6-.6 2.1zm.6 1.1c-1.2-.1-2.2.7-2.7.7-.6 0-1.4-.6-2.4-.6-1.2 0-2.3.7-2.9 1.8-1.3 2.2-.3 5.4.9 7.2.6.9 1.3 1.8 2.3 1.8.9 0 1.3-.6 2.4-.6 1.1 0 1.4.6 2.4.6.9 0 1.6-.9 2.2-1.8.7-1 1-2 1-2 0 0-1.9-.7-1.9-2.9 0-1.8 1.5-2.7 1.5-2.7-.8-1.2-2.1-1.4-2.5-1.4l-.3-.1zm8.5-1.7v12.5h1.9v-4.3h2.7c2.4 0 4.1-1.7 4.1-4.1s-1.7-4.1-4-4.1h-4.7zm1.9 1.6h2.2c1.7 0 2.6.9 2.6 2.5s-.9 2.5-2.6 2.5h-2.2V5.8zm10.6 11c1.2 0 2.3-.6 2.8-1.6h0v1.5h1.8V9.7c0-1.8-1.4-3-3.6-3-2 0-3.5 1.2-3.5 2.8h1.7c.2-.9.9-1.4 1.8-1.4 1.2 0 1.8.5 1.8 1.5v.7l-2.4.1c-2.2.1-3.4 1.1-3.4 2.7 0 1.7 1.3 2.8 3 2.8zm.5-1.5c-1 0-1.7-.5-1.7-1.3 0-.9.6-1.3 1.8-1.4l2.1-.1v.7c0 1.2-1 2.1-2.2 2.1zm6.5 4.4c1.8 0 2.7-.7 3.5-2.8l3.3-9.4h-2l-2.2 7.2h0l-2.2-7.2h-2l3.2 8.8-.2.5c-.3.9-.8 1.2-1.6 1.2h-.8v1.6l1 .1z"/>
            </svg>
          </span>
          <span class="payment-icon payment-icon-svg" title="${a("landing.payment_google_pay")}" data-i18n-attr="title:landing.payment_google_pay">
            <svg viewBox="0 0 50 20" fill="currentColor" width="38" height="16">
              <path d="M23.8 10v5.8h-1.8V4.2h4.8c1.1 0 2.1.4 2.9 1.1.8.7 1.2 1.7 1.2 2.8 0 1.1-.4 2.1-1.2 2.8-.8.7-1.8 1.1-2.9 1.1h-3zm0-4.2v2.7h3c.6 0 1.2-.2 1.6-.6.4-.4.7-.9.7-1.5 0-.6-.2-1.1-.6-1.5-.4-.4-1-.6-1.6-.6h-3.1zm11.4 1.6c1.3 0 2.4.4 3.2 1.1.8.7 1.2 1.7 1.2 3v6h-1.7v-1.4h-.1c-.8 1.1-1.8 1.7-3 1.7-1 0-1.9-.3-2.6-.9-.7-.6-1-1.4-1-2.3 0-1 .4-1.8 1.1-2.4.7-.6 1.7-.9 2.9-.9.9 0 1.7.2 2.3.5v-.4c0-.6-.3-1.2-.8-1.6-.5-.4-1.1-.6-1.7-.6-.9 0-1.7.4-2.2 1.2l-1.6-1c.8-1.3 2-1.9 3.6-1.9l.4-.1zm-2.4 6.4c0 .5.2.9.6 1.2.4.3.9.5 1.4.5.8 0 1.5-.3 2-.9.6-.6.9-1.2.9-2-.5-.4-1.2-.6-2.1-.6-.7 0-1.3.2-1.7.5-.5.3-.7.8-.7 1.3h-.4zm13.7-6.2l-5.9 13.6h-1.9l2.2-4.7-3.9-8.8h2l2.7 6.6h0l2.6-6.6h2.2v-.1z"/>
              <path fill="#4285F4" d="M11.2 9.7c0-.5 0-1-.1-1.5H5.7v2.8h3.1c-.1.8-.5 1.4-1.1 1.9v1.5h1.8c1.1-.9 1.7-2.4 1.7-4.1v-.6z"/>
              <path fill="#34A853" d="M5.7 15.8c1.5 0 2.7-.5 3.6-1.3l-1.8-1.4c-.5.3-1.1.5-1.8.5-1.4 0-2.6-.9-3-2.2H.9v1.5c.9 1.8 2.8 2.9 4.8 2.9z"/>
              <path fill="#FBBC05" d="M2.7 11.3c-.1-.4-.2-.8-.2-1.2s.1-.8.2-1.2V7.4H.9c-.4.8-.6 1.7-.6 2.6 0 .9.2 1.8.6 2.6l1.8-1.3z"/>
              <path fill="#EA4335" d="M5.7 6.7c.8 0 1.5.3 2 .8l1.5-1.5c-.9-.9-2.1-1.4-3.5-1.4-2 0-3.8 1.1-4.8 2.9l1.8 1.4c.4-1.3 1.6-2.2 3-2.2z"/>
            </svg>
          </span>
          <span class="payment-icon payment-icon-svg" title="${a("landing.payment_solana")}" data-i18n-attr="title:landing.payment_solana">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <defs>
                <linearGradient id="solGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00FFA3"/>
                  <stop offset="100%" style="stop-color:#DC1FFF"/>
                </linearGradient>
              </defs>
              <path fill="url(#solGrad)" d="M4.5 18.4l2.8-2.8c.1-.1.3-.2.5-.2h12.5c.3 0 .5.4.3.6l-2.8 2.8c-.1.1-.3.2-.5.2H4.8c-.3 0-.5-.4-.3-.6zm2.8-6.6c.1-.1.3-.2.5-.2h12.5c.3 0 .5.4.3.6l-2.8 2.8c-.1.1-.3.2-.5.2H4.8c-.3 0-.5-.4-.3-.6l2.8-2.8zm11.9-3c-.1.1-.3.2-.5.2H6.2c-.3 0-.5-.4-.3-.6l2.8-2.8c.1-.1.3-.2.5-.2h12.5c.3 0 .5.4.3.6l-2.8 2.8z"/>
            </svg>
          </span>
          <span class="payment-icon payment-icon-svg" title="${a("landing.payment_usdc")}" data-i18n-attr="title:landing.payment_usdc">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <circle cx="12" cy="12" r="11" fill="#2775CA"/>
              <path fill="#fff" d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.2 11.2c-.8 1.2-2 1.9-3.4 2v1.1h-.8v-1.1c-1.4-.1-2.6-.8-3.2-2l1.2-.7c.4.9 1.2 1.5 2.2 1.6v-3.3l-.4-.1c-1.6-.4-2.5-1.2-2.5-2.6 0-1.5 1.2-2.6 2.9-2.7V6.3h.8v1.1c1.2.1 2.2.7 2.8 1.7l-1.1.7c-.4-.7-1-1.1-1.7-1.3v3.1l.5.1c1.7.4 2.6 1.3 2.6 2.7 0 .6-.2 1.1-.5 1.6l-.4.2zm-3.4-4.3V8.2c-.9.1-1.4.6-1.4 1.3 0 .6.4 1 1.4 1.4zm.8 1.3v2.8c1-.1 1.5-.6 1.5-1.4 0-.7-.5-1.1-1.5-1.4z"/>
            </svg>
          </span>
        </div>
      </div>

      <!-- User Rating Snippet -->
      <div class="user-rating-snippet">
        <div class="rating-stars">
          <span class="star filled">★</span>
          <span class="star filled">★</span>
          <span class="star filled">★</span>
          <span class="star filled">★</span>
          <span class="star half">★</span>
        </div>
        <span class="rating-score">4.8</span>
        <span class="rating-count" data-i18n="landing.rating_player_count">${a("landing.rating_player_count")}</span>
      </div>

      <div class="scroll-footer-badge-row">
        <span class="age-badge" data-i18n="landing.age_badge">${a("landing.age_badge")}</span>
        <span class="footer-divider">|</span>
        <span class="footer-accolade" data-i18n="landing.footer_accolade">${a("landing.footer_accolade")}</span>
      </div>
      <nav class="scroll-footer-links">
        <a href="#" class="scroll-footer-link" data-page="affiliate" data-i18n="landing.footer_affiliate">${a("landing.footer_affiliate")}</a>
        <span class="scroll-footer-divider">•</span>
        <a href="#" class="scroll-footer-link" data-page="faq" data-i18n="landing.footer_faq">${a("landing.footer_faq")}</a>
        <span class="scroll-footer-divider">•</span>
        <a href="#" class="scroll-footer-link" data-page="privacy" data-i18n="landing.footer_privacy">${a("landing.footer_privacy")}</a>
        <span class="scroll-footer-divider">•</span>
        <a href="#" class="scroll-footer-link" data-page="terms" data-i18n="landing.footer_terms">${a("landing.footer_terms")}</a>
        <span class="scroll-footer-divider">•</span>
        <a href="https://t.me/viper_royale" class="scroll-footer-link" target="_blank" rel="noopener noreferrer" data-i18n="landing.footer_support">${a("landing.footer_support")}</a>
      </nav>
      <div class="scroll-footer-brand">
        <!-- Carries a param, so no data-i18n: applyLocaleToShell() re-renders it. -->
        <span class="scroll-footer-copy">${a("landing.copyright",{appName:a("app.name")})}</span>
      </div>
    </div>
  </footer>
  </div>
  <nav class="bottom-nav" id="bottom-nav" style="display: none;">
    <div class="nav-item active" id="nav-home"><div class="nav-icon-wrapper"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div><span class="nav-label" data-i18n="landing.nav_home">${a("landing.nav_home")}</span></div>
    <div class="nav-item" id="nav-tournaments"><div class="nav-icon-wrapper"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg></div><span class="nav-label" data-i18n="landing.nav_tournaments">${a("landing.nav_tournaments")}</span></div>
    <div class="nav-item" id="nav-tasks"><div class="nav-icon-wrapper"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></div><span class="nav-label" data-i18n="landing.nav_tasks">${a("landing.nav_tasks")}</span></div>
    <div class="nav-item" id="nav-friends"><div class="nav-icon-wrapper"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div><span class="nav-label" data-i18n="landing.nav_friends">${a("landing.nav_friends")}</span></div>
    <div class="nav-item" id="nav-wallet"><div class="nav-icon-wrapper"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="18" y1="12" x2="18" y2="12.01"></line><path d="M22 10h-4a2 2 0 0 0 0 4h4"></path></svg></div><span class="nav-label" data-i18n="landing.nav_wallet">${a("landing.nav_wallet")}</span></div>
  </nav>
  <button class="music-toggle-btn" id="music-toggle-btn"><svg class="music-icon music-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg><svg class="music-icon music-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle><line x1="2" y1="2" x2="22" y2="22"></line></svg></button>
  <!-- Never opened (only close handlers exist), so its copy is not localized. -->
  <div class="how-to-play-modal" id="how-to-play-modal" style="display: none;">
    <div class="modal-overlay"></div>
    <div class="modal-content"><button class="modal-close-btn" id="modal-close-btn">×</button><h2 class="modal-title">Game Rules</h2><div class="modal-rules"></div><button class="modal-play-btn" id="modal-play-btn">PLAY NOW</button></div>
  </div>
`;document.body.appendChild(U);as();if(y.isTelegram){const i=document.getElementById("scroll-footer");i&&(i.style.display="none")}Pt.init(U);Bt.init(U);Ft.init(U);Nt.init(U);Re.init(U);Vt.init(U);zt.init(U);Gt.init(U);jt.init(U);const{badge:Sl,headline:Cl,playBtn:Tl,winAmount:$l}=x,qo=document.querySelector(".main-snake-hero"),Uo=document.body;function Gn(i){if(!i)return;const e=i.dataset.isFree==="true",t=parseFloat(i.dataset.amount),s=document.querySelector(".win-display");if(e){const n=G()?O(2,"receive"):"$2.00";s.innerHTML=`MAXIMUM WIN: <span class="win-amount">${n}</span>`}else{const n=G()?O(t*50,"receive"):`$${(t*50).toFixed(2)}`;s.innerHTML=`MINIMUM WIN: <span class="win-amount">${n}</span>`}}function Vo(){const i=document.querySelectorAll(".bet-option");i.forEach(e=>{e.addEventListener("click",()=>{if(e.classList.contains("unavailable")||e.classList.contains("skeleton-btn"))return;i.forEach(s=>s.classList.remove("active")),e.classList.add("active"),Gn(e);const t=parseFloat(e.dataset.amount);ie("select_bet_amount",{amount:t,isFree:e.dataset.isFree==="true"})})})}function zo(i){const e=document.getElementById("bet-options-container");if(!e)return;const t=Array.from(i.values()).sort((r,o)=>r.isFree&&!o.isFree?-1:!r.isFree&&o.isFree?1:parseFloat(r.fee)-parseFloat(o.fee));if(t.length===0){e.innerHTML='<div class="bet-option unavailable">No servers</div>';return}let s=null;try{s=localStorage.getItem("last_entry_fee")}catch{}e.innerHTML=t.map(({fee:r,isFree:o},l)=>{const c=o?"FREE":G()?O(Number(r),"pay"):`$${r}`;return`<div class="bet-option${(s?r===s:l===0)?" active":""}" data-amount="${r}" data-is-free="${o}">${c}</div>`}).join("");const n=e.querySelector(".bet-option.active");n&&Gn(n),Vo(),new Set(t.map(r=>r.fee))}function Go(i){zo(i)}const an=document.getElementById("view-home");let Ve=null;function Wt(i){A()&&i!=="arenas"&&(i="arenas"),Ve!==null&&Ve!==i&&L.track("tab_switched","navigation",{from_tab:Ve,to_tab:i}),Ve=i,an&&(an.style.display=i==="home"?"block":"none"),i==="home"&&(Qt("app_open"),Ua()),i==="tasks"?Bt.show():Bt.hide(),i==="friends"?Pt.show():Pt.hide(),i==="wallet"?Ft.show():Ft.hide(),i==="tournaments"?Nt.show():Nt.hide(),i==="arenas"?Re.show():Re.hide(),i==="privacy"?Vt.show():Vt.hide(),i==="terms"?zt.show():zt.hide(),i==="delete-account"?Gt.show():Gt.hide(),i==="replays"?jt.show():jt.hide(),document.querySelectorAll(".nav-item").forEach(t=>{const s=t.id.replace("nav-","");t.classList.toggle("active",s===i)})}function jo(i){const e=pn(i);Wt(e);const t=ts.getBasePath(),s=i==="/"?t||"/":t+i;ia(s),L.trackPageView(s)}wa(jo);const jn=ts.init(),Wo=pn(jn);let ae=Wo;jn==="/wallet"&&(ae="wallet");A()&&(ae="arenas");const Wn=document.querySelectorAll(".nav-item");Wn.length;Wn.forEach(i=>{i.id,i.addEventListener("click",e=>{z.play("ui_click");const t=i.id.replace("nav-","");t==="home"?C("/"):t==="tournaments"?C("/tournaments"):t==="tasks"?C("/tasks"):t==="friends"?C("/friends"):t==="wallet"&&C("/wallet"),ie("click_nav_item",{page:t})})});const Ko=Wa(qo,Uo);Be.addEventListener(document,"mousemove",Ko);ja();const{intervalId:Yo}=Ga();Be.addInterval(Yo);const ze=document.getElementById("live-players-count");let Tt=52;const Jo=setInterval(()=>{const i=Math.floor(Math.random()*5)-2;Tt=Math.max(35,Math.min(80,Tt+i)),ze&&(ze.textContent=Tt,ze.classList.add("updating"),setTimeout(()=>ze.classList.remove("updating"),300))},8e3);Be.addInterval(Jo);const rn=["Alex","Mike","Sara","Jake","Emma","Chris","Lisa","Tom","Anna","Ryan","Kate","Dan","Mia","Ben","Zoe"],on=[5,8,10,12.5,15,18,20,25,30,35,40,50];function Zo(){const i=document.getElementById("winners-list");if(!i)return;const e=rn[Math.floor(Math.random()*rn.length)],t=String(Math.floor(Math.random()*99)).padStart(2,"0"),s=on[Math.floor(Math.random()*on.length)],n=e.charAt(0),r=document.createElement("div");r.className="winner-item",r.innerHTML=`
    <div class="winner-avatar">${n}</div>
    <div class="winner-info">
      <span class="winner-name">${e}***${t}</span>
      <span class="winner-time" data-mins="0">${a("landing.winner_just_now")}</span>
    </div>
    <span class="winner-amount">+${G()?O(s,"receive"):"$"+s.toFixed(2)}</span>
  `,i.insertBefore(r,i.firstChild),i.children.length>3&&i.removeChild(i.lastChild),i.querySelectorAll(".winner-time").forEach((l,c)=>{if(c===0)return;const d=c*3+Math.floor(Math.random()*2);l.dataset.mins=String(d),l.textContent=Kn(d)})}function Kn(i){return i>0?v("landing.winner_minutes_ago",i):a("landing.winner_just_now")}function Xo(){document.querySelectorAll("#winners-list .winner-time[data-mins]").forEach(i=>{i.textContent=Kn(parseInt(i.dataset.mins,10)||0)})}const Qo=setInterval(Zo,15e3);Be.addInterval(Qo);async function gs(){ie("click_google_signin");try{await Aa()}catch(i){I.error("Auth","Sign-in error:",i)}}function Yn(){ie("click_logout");try{vn(),h.logout(),window.location.reload()}catch(i){I.error("Auth","Logout error:",i)}}document.getElementById("header-signin-btn")?.addEventListener("click",gs);document.getElementById("profile-logout-btn")?.addEventListener("click",Yn);document.getElementById("deposit-btn")?.addEventListener("click",()=>C("/wallet"));function el(){vi.open(i=>{i&&(h.getBalance({force:!0}),ot())})}function Jn(){it.open(i=>{i&&(h.getBalance({force:!0}),ot())})}async function ot(){try{I.debug("Bonus","Fetching bonus games...");const i=await xt();if(i.success){I.debug("Bonus",`User has ${i.total_bonus_games} bonus games`),h.state.bonusGamesRemaining=i.total_bonus_games,st(i.total_bonus_games);const e=h.getAuthState();e.authProvider==="telegram"?Ie(e):e.type==="registered"&&Me(e)}else I.debug("Bonus","Failed to fetch bonus games:",i.error)}catch(i){I.error("Bonus","Failed to fetch bonus games:",i)}}function ln(i=1e4){$e||($e=setInterval(()=>{const e=h.getAuthState();(e.type==="registered"||e.authProvider==="telegram")&&ot()},i),I.debug("Bonus","Started bonus games polling"))}function tl(){$e&&(clearInterval($e),$e=null,I.debug("Bonus","Stopped bonus games polling"))}window.addEventListener("promoRedeemed",i=>{const e=i.detail?.rewardValue||0;I.debug("Promo",`Promo redeemed event received, reward: ${e}`),h.state.bonusGamesRemaining=(h.state.bonusGamesRemaining||0)+e;const t=h.getAuthState();t.authProvider==="telegram"?Ie(t):t.type==="registered"&&Me(t),st(h.state.bonusGamesRemaining||0),h.getBalance(),ot()});const Zn=()=>{const i=document.getElementById("header-tickets-count");i&&(i.textContent=(h.state.ticketsTotal||0)+h.getFreeEntriesTotal())};function cn(){if(!ee())return;const i=document.getElementById("nav-tournaments");i&&(i.style.display="none");const e=document.querySelector(".tournament-section, .tournaments-section");e&&(e.style.display="none");const t=document.getElementById("nav-tasks");t&&t.classList.add("tester-primary");const s=document.querySelector(".header-left");if(s&&!document.getElementById("header-tickets-pill")){const r=document.createElement("div");r.id="header-tickets-pill",r.className="header-tickets",r.innerHTML=`<span class="tickets-icon">🎟</span><span class="tickets-count" id="header-tickets-count">${(h.state.ticketsTotal||0)+h.getFreeEntriesTotal()}</span>`,r.addEventListener("click",()=>Jn()),s.appendChild(r)}h.onTicketsUpdate=Zn;const n=document.querySelector(".header-right");if(!document.getElementById("tester-badge")&&n){const r=document.createElement("div");r.id="tester-badge",r.className="tester-badge",r.textContent="T",n.insertBefore(r,n.firstChild),r.addEventListener("click",()=>{al()})}}async function sl(){await h.initialize();const i=h.getAuthState();if(i.casinoSessionRejected)return i.casinoSessionRejected,Ia(i.casinoSessionRejected),!1;if(i.verifyUnconfirmed?ri():$n(),i.authProvider==="telegram"){ht(!0);try{await h.getBalance()}catch(o){o.message}try{const o=await xt();o.success&&(h.state.bonusGamesRemaining=o.total_bonus_games)}catch(o){o.message}const e=h.getAuthState();Ie(e),nt(!0,Yt(e));const{profileUsername:t,profileBalance:s,profileEmail:n}=x;t&&(t.textContent=Yt(e)),s&&(s.innerHTML=k(D(e.balance||"0.00",e.currency||"USD"),e.currency||"USD")),n&&(n.style.display="none"),document.querySelectorAll(".logout-link, #profile-logout-btn, #logout-btn").forEach(o=>o.style.display="none"),h.onBalanceUpdate=(o,l)=>{const c=k(D(o,l),l);if(x.profileBalance&&(x.profileBalance.innerHTML=c),Ge(o,l),Ie(h.getAuthState()),de.isOpen()){const d=h.getAuthState();de.updateBalance({cashBalance:d.balance||0,bonusBalance:d.bonusBalance||0,currency:d.currency||"USD"})}},Ge(e.balance,e.currency),st(e.bonusGamesRemaining||0),Kt(),cn(),h.startBalancePolling(1e4),ln(1e4)}else if(i.type==="registered"){ht(!0);try{await h.getBalance()}catch(l){l.message}try{const l=await xt();l.success&&(h.state.bonusGamesRemaining=l.total_bonus_games)}catch(l){l.message}const e=h.getAuthState();Me(e),nt(!0,Jt(e));const{profileUsername:t,profileEmail:s,profileBalance:n,balanceAmount:r}=x;t&&(t.textContent=Jt(e)),s&&(s.textContent=e.email||"",s.style.display="block");const o=k(D(e.balance||"0.00",e.currency||"USD"),e.currency||"USD");if(r&&(r.innerHTML=o),n&&(n.innerHTML=o),Ge(e.balance,e.currency),st(e.bonusGamesRemaining||0),Kt(),cn(),h.onBalanceUpdate=(l,c)=>{const d=k(D(l,c),c);if(x.profileBalance&&(x.profileBalance.innerHTML=d),x.balanceAmount&&(x.balanceAmount.innerHTML=d),Ge(l,c),Me(h.getAuthState()),de.isOpen()){const u=h.getAuthState();de.updateBalance({cashBalance:u.balance||0,bonusBalance:u.bonusBalance||0,currency:u.currency||"USD"})}},h.startBalancePolling(1e4),h.onFreeEntriesUpdate=()=>{Zn(),Re.refreshFreeEntryBadges()},h.state.authProvider==="casino"&&!window.__viperCasinoFocusBound&&(window.__viperCasinoFocusBound=!0,document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&h.state.authProvider==="casino"&&I.throttle("userinfo-focus-refresh",8e3,()=>{h.getBalance().catch(()=>{})})})),h.state.authProvider==="casino"&&(_o({authManager:h,onPlay:l=>Re.selectStakeByFee(l)}),h.onFreeRoundPromosUpdate=Zs,Zs(h.state.freeRoundPromos)),ln(1e4),rt()){const l=Ce();if(l.supported){const c=ve();Se(),ls().then(d=>{const u=d&&d.subscriptions>0;if(""+c+u+Se(),c!=="denied"&&!u)if(c==="granted")xe({force:!0}).then(p=>{JSON.stringify(p)});else{const p=()=>{if(Ae.isOpen()){setTimeout(p,1e3);return}Ae.show({icon:"🔔",title:a("landing.push_popup_enable"),description:a("landing.push_popup_description",{tournaments:"{{"+a("landing.push_popup_highlight_tournaments")+"}}",rewards:"{{"+a("landing.push_popup_highlight_rewards")+"}}"}),ctaText:a("landing.push_popup_enable"),dismissable:!0},()=>{xe({force:!0}).then(m=>{})})};setTimeout(p,2e3)}})}else l.reason}}else{ht(!1),wn(i.freeGamesRemaining,fs());const e=document.getElementById("header-signin-btn"),t=document.getElementById("signin-section");e&&(e.style.display=""),t&&(t.style.display=""),setTimeout(()=>{bi.open(()=>gs(),()=>{})},1e4)}if(Ya(Xn,e=>{Go(e)},h),Se()&&!localStorage.getItem("pwa_install_reported")&&i.type!=="anonymous"){const e=/iPhone|iPad/.test(navigator.userAgent)?"ios":/Android/.test(navigator.userAgent)?"android":"desktop";pi(e).then(t=>{t.success&&localStorage.setItem("pwa_install_reported","true")})}}const Xn=new Xa(y.lobbyApiUrl),nl=new ni(Xn,{simplified:!0,maxServers:3});function al(){const i=document.getElementById("tester-welcome-modal");i&&i.remove();const e=document.createElement("div");e.id="tester-welcome-modal",e.className="no-bonus-modal",e.innerHTML=`
    <div class="no-bonus-modal-overlay"></div>
    <div class="no-bonus-modal-content">
      <div class="no-bonus-modal-icon" style="background:rgba(245,158,11,0.15);color:#f59e0b;">
        <span style="font-size:28px;font-weight:800;">T</span>
      </div>
      <h3 class="no-bonus-modal-title">${a("landing.tester_welcome_title")}</h3>
      <p class="no-bonus-modal-message">${a("landing.tester_welcome_message")}</p>
      <p class="no-bonus-modal-hint">${a("landing.tester_welcome_hint")}</p>
      <div class="no-bonus-modal-actions">
        <button class="no-bonus-modal-btn primary" data-action="tasks">${a("landing.tester_go_to_tasks")}</button>
        <button class="no-bonus-modal-btn secondary" data-action="close">${a("landing.tester_got_it")}</button>
      </div>
    </div>
  `,document.body.appendChild(e),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("visible")));const t=()=>{e.classList.remove("visible"),setTimeout(()=>e.remove(),300)};e.querySelector('[data-action="tasks"]').addEventListener("click",()=>{t(),document.getElementById("nav-tasks")?.click()}),e.querySelector('[data-action="close"]').addEventListener("click",t),e.querySelector(".no-bonus-modal-overlay").addEventListener("click",t)}const il=()=>{const i=h.getAuthState();if(fs(),!(i.initialized&&(i.type==="registered"||i.authProvider==="telegram"))){gs();return}C("/arenas?tab=cash&fee=0.2")};x.playBtn?.addEventListener("click",()=>{z.play("ui_click"),il()});nl.onServerSelect=i=>{const e=h.getAuthState();if(!e.initialized||!(e.type==="registered"||e.authProvider==="telegram"))return;ie("click_play");try{Sn(i),sessionStorage.removeItem("game_origin")}catch{}const s=y.isTelegram?"/tg/play/":"/play/";window.location.href=`${s}${window.location.search}`};setTimeout(()=>ue.preload(),1e3);const rl=()=>{const i=document.getElementById("tournament-countdown");if(!i)return;let e=2*3600+15*60+30;const t=()=>{if(e<=0){i.textContent="ENDED";return}const s=Math.floor(e/3600),n=Math.floor(e%3600/60),r=e%60;i.textContent=`${s}h ${n}m ${r}s`,e--};t(),setInterval(t,1e3)};rl();const ol=()=>{const i=ue.getState().isMuted;[document.getElementById("music-toggle-btn"),document.getElementById("hero-music-btn"),document.getElementById("header-sound-btn")].forEach(e=>{e&&e.classList.toggle("muted",i)})};ol();const vs=()=>{ue.toggleMute();const i=ue.getState().isMuted;[document.getElementById("music-toggle-btn"),document.getElementById("hero-music-btn"),document.getElementById("header-sound-btn")].forEach(e=>{e&&e.classList.toggle("muted",i)})};document.getElementById("music-toggle-btn")?.addEventListener("click",vs);document.getElementById("hero-music-btn")?.addEventListener("click",vs);document.getElementById("header-sound-btn")?.addEventListener("click",vs);document.getElementById("hero-promo-btn")?.addEventListener("click",el);document.getElementById("header-gift-btn")?.addEventListener("click",Jn);document.getElementById("hamburger-btn")?.addEventListener("click",()=>cs.open());const ll=new Xi(h);document.getElementById("header-profile-btn")?.addEventListener("click",()=>{ll.open(()=>Yn())});const _e=document.getElementById("how-to-play-modal");if(_e){const i=()=>_e.style.display="none";_e.querySelector(".modal-close-btn")?.addEventListener("click",i),_e.querySelector(".modal-overlay")?.addEventListener("click",i),_e.querySelector(".modal-play-btn")?.addEventListener("click",i)}document.querySelectorAll(".scroll-footer-link[data-page]").forEach(i=>{i.addEventListener("click",e=>{e.preventDefault();const t=i.dataset.page;t==="privacy"?wi.open():t==="terms"&&In.open()})});document.getElementById("view-all-tournaments")?.addEventListener("click",i=>{i.preventDefault(),C("/tournaments"),ie("click_view_all_tournaments")});document.getElementById("header-balance-pill")?.addEventListener("click",i=>{if(!i.target.closest(".sound-toggle"))if(de.isOpen())de.close();else{const e=h.getAuthState();de.show(i.currentTarget,{cashBalance:e.balance||0,bonusBalance:e.bonusBalance||0,currency:e.currency||"USD"})}});window.addEventListener(Et,()=>Kt());function Kt(){const i=document.getElementById("header-profile-btn"),e=document.getElementById("profile-avatar-circle");if(!i||!e)return;const t=h.getAuthState();if(t.type!=="registered"&&t.authProvider!=="telegram")return;i.style.display="",e.innerHTML="";const s=Ji(t),n=document.createElement("span");n.className="avatar-initial",n.id="avatar-initial",n.textContent=s,e.appendChild(n)}function Ge(i,e){const t=document.getElementById("header-balance");t&&(t.innerHTML=k(D(i||"0.00",e||"USD"),e||"USD"))}function st(i){const e=document.getElementById("gift-badge");e&&(i>0?(e.textContent=i,e.style.display="flex"):e.style.display="none")}function nt(i,e){const t=document.getElementById("payout-verified"),s=document.getElementById("payout-user-info"),n=document.getElementById("payout-username"),r=document.getElementById("payout-logout-btn");e?(t&&(t.style.display="none"),s&&(s.style.display="flex"),n&&(n.textContent=e),r&&(r.onclick=()=>{try{vn(),h.logout(),window.location.reload()}catch(o){console.error("Logout error:",o)}})):(t&&(t.style.display="flex"),s&&(s.style.display="none"))}function Yt(i){return i.username||a("landing.telegram_user_fallback")}function Jt(i){return i.username||i.email?.split("@")[0]||a("landing.user_fallback")}function cl(){const i=document.querySelector(".scroll-footer-copy");i&&(i.textContent=a("landing.copyright",{appName:a("app.name")})),Xo(),as();const e=h.getAuthState();e.initialized&&(e.authProvider==="telegram"?(Ie(e),nt(!0,Yt(e))):e.type==="registered"?(Me(e),nt(!0,Jt(e))):wn(e.freeGamesRemaining,fs()))}const dl=q(cl);window.addEventListener("pagehide",()=>{dl(),h.stopBalancePolling(),tl(),_n(),Be.cleanup(),L.destroy()});function $t(){const i=document.getElementById("pwa-splash");i&&(A()&&cr()||(i.classList.add("fade-out"),setTimeout(()=>i.remove(),500)))}sl().then(i=>{if(i===!1){$t();return}as();const e=ka();e&&L.track("utm_landing","navigation",e);const t=ts.getBasePath(),s=ae==="home"?"/":"/"+ae,n=s==="/"?t||"/":t+s;L.trackPageView(n),ae&&Wt(ae),$t();try{sessionStorage.getItem("auto_open_wallet")==="true"&&(sessionStorage.removeItem("auto_open_wallet"),setTimeout(()=>Ho().open(),300))}catch{}}).catch(i=>{console.error("[INIT] Auth initialization failed:",i),ae&&Wt(ae),$t()});
