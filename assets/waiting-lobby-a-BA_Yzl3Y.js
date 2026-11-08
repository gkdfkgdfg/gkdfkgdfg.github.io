import{p as me}from"./main-D_pl5a8X.js";import{o as we,t as i,a as L}from"./index-BVfXPvtU.js";import{d as ue,f as fe,c as be}from"./auth-manager-Cmpvns0S.js";import{m as oe}from"./tournaments-api-l_A1Z-uY.js";import"./env-C7vzROsb.js";import"./log-gate-B65wJFl9.js";import"./food-fx-DBBOWeAK.js";import"./supabase-client-BHMtNnbv.js";import"./index-DX65wbiK.js";import"./env-BJel9_CM.js";import"./snake-physics-QCI22-RQ.js";import"./casino-gate-hyIVpKVx.js";import"./kyc-service-C_utPXUd.js";import"./utils-DJ8BS0_7.js";const ye="polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",re="polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)",y="http://www.w3.org/2000/svg",se=320,d=se/2,f=120,B=14,ne=25;function le(){return typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}function de(l){const e=l*Math.PI/180;return[d+f*Math.cos(e),d+f*Math.sin(e)]}function ce(l,e){const[a,t]=de(l),[s,n]=de(e),o=e-l>180?1:0;return`M ${a.toFixed(2)} ${t.toFixed(2)} A ${f} ${f} 0 ${o} 1 ${s.toFixed(2)} ${n.toFixed(2)}`}function xe(l){return B/2/f*(180/Math.PI)*2+Math.min(6,Math.max(3,l*.08))}function I(l){const e=Math.max(0,Math.round(l));if(e<60)return i("lobby.eta_seconds",{seconds:e});const a=Math.floor(e/60),t=e%60;return t===0?i("lobby.eta_minutes",{minutes:a}):i("lobby.eta_minutes_seconds",{minutes:a,seconds:t})}function pe(l){const e=Math.max(0,Math.round(l));if(e<60)return L("lobby.eta_speech_seconds",e);const a=Math.floor(e/60),t=e%60;return t===0?L("lobby.eta_speech_minutes",a):L("lobby.eta_speech_minutes_seconds",a,{seconds:t})}function ge(l){const e=Number(l);return!Number.isFinite(e)||e<=0?null:be()?ue(e,"pay"):fe(e)}const he="wl-a-style",ve=`
.wl-a-root {
  --wl-a-cyan: #00e5ff;
  --wl-a-cyan-hi: #7df4ff;
  --wl-a-cyan-seg: #35f1ff;
  --wl-a-green: #00ff88;
  --wl-a-green-hi: #2bff9e;
  --wl-a-gold: #ffd700;
  --wl-a-text: #eaf6ff;
  --wl-a-dim: rgba(199, 226, 255, 0.62);
  --wl-a-faint: rgba(199, 226, 255, 0.38);
  --wl-a-sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --wl-a-mono: ui-monospace, "SF Mono", "Cascadia Mono", "Roboto Mono", Menlo, Consolas, monospace;
  position: fixed;
  inset: 0;
  z-index: 2150;
  display: none;
  pointer-events: auto;
  overflow: hidden;
  font-family: var(--wl-a-sans);
  color: var(--wl-a-text);
  background: radial-gradient(circle at 50% 34%, #262e5c 0%, #171b33 52%, #0b0e1d 100%);
  opacity: 0;
  transition: opacity 0.28s ease;
  -webkit-user-select: none;
  user-select: none;
}
.wl-a-root.wl-a-show { display: block; }
.wl-a-root.wl-a-visible { opacity: 1; }

/* ambient: drifting arena grid ------------------------------------------- */
.wl-a-gridlayer {
  position: absolute;
  inset: -50%;
  background-image:
    linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px);
  background-size: 44px 44px;
  -webkit-mask-image: radial-gradient(circle at 50% 42%, rgba(0,0,0,0.9) 0%, transparent 72%);
  mask-image: radial-gradient(circle at 50% 42%, rgba(0,0,0,0.9) 0%, transparent 72%);
  animation: wl-a-drift 60s linear infinite;
  pointer-events: none;
}
@keyframes wl-a-drift {
  from { transform: translate(0, 0); }
  to   { transform: translate(44px, 44px); }
}

/* ambient: arena food orbs -------------------------------------------------- */
.wl-a-orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  animation: wl-a-float var(--dur, 9s) ease-in-out var(--del, 0s) infinite alternate;
}
@keyframes wl-a-float {
  from { transform: translate(0, 0) scale(1);       opacity: 0.35; }
  to   { transform: translate(var(--dx, 10px), var(--dy, -26px)) scale(1.25); opacity: 0.8; }
}

/* layout -------------------------------------------------------------------- */
.wl-a-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  padding: calc(env(safe-area-inset-top, 0px) + 22px) 22px calc(env(safe-area-inset-bottom, 0px) + 16px);
  text-align: center;
}
.wl-a-mid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
}
.wl-a-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
}

/* header -------------------------------------------------------------------- */
.wl-a-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.34em;
  text-indent: 0.34em; /* balance the tracking */
  color: var(--wl-a-cyan);
  text-transform: uppercase;
}
.wl-a-livedot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--wl-a-cyan);
  box-shadow: 0 0 8px var(--wl-a-cyan);
  animation: wl-a-pulse 2.2s ease-in-out infinite;
}
@keyframes wl-a-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.35; transform: scale(0.75); }
}
.wl-a-title {
  margin-top: 6px;
  font-size: clamp(22px, 6vw, 27px);
  font-weight: 900;
  letter-spacing: 0.14em;
  text-indent: 0.14em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 0 22px rgba(0, 229, 255, 0.35);
}
.wl-a-livebadge {
  display: none;
  margin: 8px auto 0;
  padding: 4px 10px;
  width: max-content;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-indent: 0.22em;
  text-transform: uppercase;
  color: var(--wl-a-gold);
  border: 1px solid rgba(255, 215, 0, 0.55);
  background: rgba(255, 215, 0, 0.08);
  clip-path: ${re};
}
.wl-a-root.wl-a-live .wl-a-livebadge { display: block; }

/* the coil ------------------------------------------------------------------ */
.wl-a-ringwrap {
  position: relative;
  width: min(76vw, 320px);
  aspect-ratio: 1 / 1;
  margin: 4px 0;
}
.wl-a-ring { width: 100%; height: 100%; display: block; overflow: visible; }

.wl-a-underglow {
  fill: none;
  stroke: rgba(0, 229, 255, 0.30);
  stroke-width: 22px;
  stroke-linecap: round;
  filter: blur(9px);
  transition: stroke-dasharray 0.8s cubic-bezier(0.25, 0.9, 0.35, 1), stroke 0.5s ease;
}
.wl-a-root.wl-a-ready .wl-a-underglow { stroke: rgba(0, 255, 136, 0.4); }

.wl-a-seg {
  fill: none;
  stroke: rgba(0, 229, 255, 0.13);
  stroke-width: ${B}px;
  stroke-linecap: round;
  transition: stroke 0.45s ease;
}
.wl-a-seg.wl-a-on { stroke: var(--wl-a-cyan-seg); }
.wl-a-root.wl-a-ready .wl-a-seg.wl-a-on { stroke: var(--wl-a-green-hi); }
.wl-a-seg.wl-a-ignite { animation: wl-a-ignite 0.65s ease-out; }
@keyframes wl-a-ignite {
  0%   { stroke: #ffffff; }
  55%  { stroke: #a5fbff; }
  100% { stroke: var(--wl-a-cyan-seg); }
}
.wl-a-segs { animation: wl-a-breathe 3.6s ease-in-out infinite; }
@keyframes wl-a-breathe {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.88; }
}

/* radar sweep: a soft highlight orbiting the coil */
.wl-a-sweepg {
  transform-box: view-box;
  transform-origin: 50% 50%;
  animation: wl-a-sweep 8s linear infinite;
}
@keyframes wl-a-sweep {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.wl-a-sweeparc {
  fill: none;
  stroke: rgba(255, 255, 255, 0.09);
  stroke-width: ${B}px;
  stroke-linecap: round;
}
.wl-a-root.wl-a-ready .wl-a-sweepg { display: none; }

/* serpent head marker */
.wl-a-headg {
  transform-box: view-box;
  transform-origin: 50% 50%;
  transition: transform 0.9s cubic-bezier(0.34, 1.2, 0.4, 1);
}
.wl-a-headg.wl-a-lap { transition: transform 1.05s cubic-bezier(0.55, 0.02, 0.3, 1); }
.wl-a-head-body { fill: var(--wl-a-cyan-hi); transition: fill 0.45s ease; }
.wl-a-root.wl-a-ready .wl-a-head-body { fill: var(--wl-a-green-hi); }
.wl-a-head-eye { fill: #06202a; }

/* center content -------------------------------------------------------------- */
.wl-a-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.wl-a-neednum {
  font-size: clamp(58px, 18vw, 78px);
  font-weight: 900;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  color: #ffffff;
  text-shadow: 0 0 26px rgba(0, 229, 255, 0.55);
}
.wl-a-neednum.wl-a-pop { animation: wl-a-pop 0.45s cubic-bezier(0.2, 1.6, 0.4, 1); }
@keyframes wl-a-pop {
  0%   { transform: scale(1.28); }
  100% { transform: scale(1); }
}
.wl-a-needlabel {
  margin-top: 4px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.3em;
  text-indent: 0.3em;
  text-transform: uppercase;
  color: var(--wl-a-dim);
}
.wl-a-eta {
  margin-top: 10px;
  font-family: var(--wl-a-mono);
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--wl-a-cyan-hi);
}
.wl-a-eta-label {
  font-size: 10px;
  letter-spacing: 0.18em;
  color: var(--wl-a-faint);
  margin-right: 6px;
}
.wl-a-eta.wl-a-soon { color: var(--wl-a-green); animation: wl-a-soonpulse 1.1s ease-in-out infinite; }
@keyframes wl-a-soonpulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.45; }
}

/* ready payoff ---------------------------------------------------------------- */
.wl-a-readyblock { display: none; flex-direction: column; align-items: center; }
.wl-a-root.wl-a-ready .wl-a-needblock { display: none; }
.wl-a-root.wl-a-ready .wl-a-readyblock { display: flex; }
.wl-a-readytext {
  font-size: clamp(26px, 8vw, 34px);
  font-weight: 900;
  letter-spacing: 0.12em;
  text-indent: 0.12em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0 0 30px rgba(0, 255, 136, 0.8), 0 0 60px rgba(0, 255, 136, 0.4);
  opacity: 0;
}
.wl-a-readytext.wl-a-slam { animation: wl-a-slam 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes wl-a-slam {
  0%   { opacity: 0; transform: scale(1.75); filter: blur(7px); }
  100% { opacity: 1; transform: scale(1); filter: blur(0); }
}
.wl-a-deployline {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  text-transform: uppercase;
  opacity: 0;
}
.wl-a-deploy-sub {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-indent: 0.24em;
  color: rgba(199, 226, 255, 0.55);
}
.wl-a-deploy-main {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.26em;
  text-indent: 0.26em;
  color: var(--wl-a-green);
  text-shadow: 0 0 14px rgba(0, 255, 136, 0.6);
}
.wl-a-deployline.wl-a-rise { animation: wl-a-rise 0.4s ease-out forwards; }
@keyframes wl-a-rise {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.wl-a-chev { animation: wl-a-chev 0.8s ease-in-out infinite; }
.wl-a-chev:nth-child(2) { animation-delay: 0.13s; }
.wl-a-chev:nth-child(3) { animation-delay: 0.26s; }
@keyframes wl-a-chev {
  0%, 100% { opacity: 0.25; }
  40%      { opacity: 1; }
}
.wl-a-shock {
  position: absolute;
  inset: 6%;
  border: 2px solid rgba(0, 255, 136, 0.55);
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}
.wl-a-shock.wl-a-go { animation: wl-a-shock 0.95s cubic-bezier(0.2, 0.7, 0.3, 1) forwards; }
@keyframes wl-a-shock {
  0%   { opacity: 0.8; transform: scale(0.62); }
  100% { opacity: 0;   transform: scale(1.9); }
}
.wl-a-flash {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 42%, rgba(190, 255, 225, 0.5) 0%, transparent 60%);
  opacity: 0;
  pointer-events: none;
}
.wl-a-flash.wl-a-go { animation: wl-a-flash 0.55s ease-out forwards; }
@keyframes wl-a-flash {
  0%   { opacity: 0.9; }
  100% { opacity: 0; }
}

/* roster + copy ----------------------------------------------------------------- */
.wl-a-roster {
  font-family: var(--wl-a-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--wl-a-dim);
  transition: opacity 0.4s ease;
}
.wl-a-roster b { color: var(--wl-a-cyan-hi); font-weight: 700; }
.wl-a-explain {
  max-width: 340px;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 500;
  color: var(--wl-a-dim);
  transition: opacity 0.4s ease;
}

/* stake + trust ------------------------------------------------------------------ */
.wl-a-stakechip {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid rgba(255, 215, 0, 0.55);
  background: rgba(255, 215, 0, 0.07);
  clip-path: ${re};
}
.wl-a-stakechip.wl-a-free {
  border-color: rgba(0, 255, 136, 0.55);
  background: rgba(0, 255, 136, 0.07);
}
.wl-a-stakelabel {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--wl-a-faint);
}
.wl-a-stakeval {
  font-family: var(--wl-a-mono);
  font-size: 16px;
  font-weight: 700;
  color: var(--wl-a-gold);
  text-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
}
.wl-a-stakechip.wl-a-free .wl-a-stakeval {
  color: var(--wl-a-green);
  text-shadow: 0 0 12px rgba(0, 255, 136, 0.4);
}
.wl-a-trust {
  max-width: 320px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--wl-a-faint);
}
.wl-a-trust b { color: var(--wl-a-dim); font-weight: 600; }

/* leave ---------------------------------------------------------------------- */
.wl-a-leave {
  width: min(320px, 100%);
  min-height: 52px;
  padding: 14px 24px;
  background: rgba(10, 10, 10, 0.55);
  border: 1px solid rgba(0, 229, 255, 0.4);
  clip-path: ${ye};
  color: var(--wl-a-text);
  font-family: var(--wl-a-sans);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-indent: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.12s ease, opacity 0.4s ease;
}
.wl-a-leave:hover { background: rgba(0, 229, 255, 0.12); border-color: var(--wl-a-cyan); }
.wl-a-leave:active { transform: scale(0.97); }
.wl-a-leave:focus-visible { outline: 2px solid var(--wl-a-cyan-hi); outline-offset: 3px; }

.wl-a-meta {
  font-family: var(--wl-a-mono);
  font-size: 9px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(199, 226, 255, 0.24);
}

/* entrance ------------------------------------------------------------------- */
.wl-a-anim { opacity: 0; }
.wl-a-root.wl-a-in .wl-a-anim { animation: wl-a-enter 0.55s cubic-bezier(0.2, 0.8, 0.3, 1) forwards; }
.wl-a-root.wl-a-in .wl-a-d1 { animation-delay: 0.05s; }
.wl-a-root.wl-a-in .wl-a-d2 { animation-delay: 0.12s; }
.wl-a-root.wl-a-in .wl-a-d3 { animation-delay: 0.2s; }
.wl-a-root.wl-a-in .wl-a-d4 { animation-delay: 0.28s; }
@keyframes wl-a-enter {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
/* Once the entrance settles, hand opacity control back to the cascade so
   state classes (e.g. the ready-state dim below) can win over the keyframe's
   forwards fill. Order matters: the ready rules follow this one. */
.wl-a-root.wl-a-settled .wl-a-anim { opacity: 1; animation: none; }
.wl-a-root.wl-a-ready .wl-a-explain,
.wl-a-root.wl-a-ready .wl-a-roster { opacity: 0.35; }
.wl-a-root.wl-a-ready .wl-a-leave { opacity: 0.3; pointer-events: none; }

/* a11y helpers ------------------------------------------------------------------ */
.wl-a-announcer {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
}

/* small screens / desktop --------------------------------------------------------- */
@media (max-height: 700px) {
  .wl-a-ringwrap { width: min(58vw, 240px); }
  .wl-a-neednum { font-size: clamp(46px, 14vw, 60px); }
  .wl-a-title { margin-top: 2px; }
}
@media (min-width: 760px) {
  .wl-a-ringwrap { width: 340px; }
  .wl-a-explain { max-width: 400px; }
}

/* reduced motion: calm everything ------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .wl-a-root, .wl-a-root * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .wl-a-root .wl-a-anim, .wl-a-root .wl-a-readytext, .wl-a-root .wl-a-deployline { opacity: 1; }
  .wl-a-root .wl-a-sweepg, .wl-a-root .wl-a-gridlayer, .wl-a-root .wl-a-orb { display: none; }
}
`;function _e(){if(typeof document>"u"||!document.head||document.getElementById(he))return;const l=document.createElement("style");l.id=he,l.textContent=ve,document.head.appendChild(l)}class Ie{constructor({onLeave:e}={}){this.onLeave=typeof e=="function"?e:null,this.root=null,this.refs={},this.segs=[],this.required=0,this.current=0,this.block=null,this.visible=!1,this.readyStarted=!1,this.destroyed=!1,this._timers=new Set,this._etaRaf=0,this._etaShown=-1,this._lastAnnounced="",this._stopLocale=null}show(e){if(this.destroyed||typeof document>"u"||!document.body)return;_e(),this._ensureDom();const a=document.getElementById("wl-a-root");a&&a!==this.root&&a.remove(),this.root.isConnected||document.body.appendChild(this.root),this._stopLocale||(this._stopLocale=we(()=>this._onLocaleChange())),this._resetReadyState(),this.block=e||{},this.required=Math.max(1,Number(this.block.required_count)||1),this.current=Math.min(this.required,Math.max(0,Number(this.block.current_count)||0)),this._buildRing(this.required),this._applyCount(this.current,!1),this._renderCopy(),this._setEta(this._targetEta(),!0),this.visible=!0,this.root.classList.remove("wl-a-settled"),this.root.classList.add("wl-a-show"),this.root.offsetWidth,this.root.classList.add("wl-a-visible","wl-a-in"),this._later(()=>{this.root&&this.root.classList.add("wl-a-settled")},1100);const t=this.required-this.current;this._announce(t<=0?i("lobby.announce_joined_starting"):L("lobby.announce_joined_waiting",t,{eta:pe(t*ne)}))}update(e){if(this.destroyed||!this.visible||!this.root||this.readyStarted||!e)return;const a=this.current,t=this.required-this.current;this.block=e;const s=Math.max(1,Number(e.required_count)||this.required);s!==this.required&&(this.required=s,this._buildRing(s),this._applyCount(Math.min(s,this.current),!1)),this.current=Math.min(this.required,Math.max(0,Number(e.current_count)||0)),this.current!==a&&(this._applyCount(this.current,!0),this._popNumber()),this._renderCopy(),this._setEta(this._targetEta(),!1);const n=this.required-this.current;n!==t&&(n<=0?this._announce(i("lobby.announce_all_in")):n===1?this._announce(i("lobby.announce_one_more")):this._announce(L("lobby.announce_more_needed",n,{eta:pe(n*ne)})))}showReady(e,a={}){if(this.readyStarted)return;this.readyStarted=!0,this._readyHold=!!a.hold;let t=!1;const s=()=>{t||this.destroyed||(t=!0,typeof e=="function"&&e())};if(!this.visible||!this.root){this._later(s,0);return}this._announce(i("lobby.announce_ready"));const n=this.block?.entry_fee??null,o=!(parseFloat(n??"0")>0),r=()=>{if(this.destroyed){s();return}me({fee:n,isFree:o,subLabel:i("lobby.deploying"),hold:this._readyHold,onDone:s})};if(le()){this.root.classList.add("wl-a-ready"),this._fillAll(!1),r();return}this.root.classList.add("wl-a-ready"),this._fillAll(!0),this._headLap(),this._later(r,650)}hide(){if(this._clearTimers(),this._cancelEtaTween(),this._unsubscribeLocale(),this.visible=!1,!this.root)return;this.root.classList.remove("wl-a-visible");const e=this.root,a=setTimeout(()=>{this._timers.delete(a),this.visible||(e.classList.remove("wl-a-show","wl-a-in","wl-a-settled"),this._resetReadyState())},300);this._timers.add(a)}destroy(){this._clearTimers(),this._cancelEtaTween(),this._unsubscribeLocale(),this.destroyed=!0,this.visible=!1,this.root&&(this.root.remove(),this.root=null),this.refs={},this.segs=[],this.block=null}_ensureDom(){if(this.root)return;const e=document.createElement("div");e.id="wl-a-root",e.className="wl-a-root",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true");const a=document.createElement("div");a.className="wl-a-gridlayer",a.setAttribute("aria-hidden","true"),e.appendChild(a);const t=[{x:"12%",y:"18%",s:7,c:"0,229,255",dx:"14px",dy:"-30px",dur:"11s",del:"0s"},{x:"85%",y:"14%",s:5,c:"255,215,0",dx:"-10px",dy:"-22px",dur:"9s",del:"1.2s"},{x:"78%",y:"72%",s:8,c:"0,255,136",dx:"12px",dy:"-34px",dur:"13s",del:"0.6s"},{x:"8%",y:"64%",s:5,c:"0,229,255",dx:"16px",dy:"-20px",dur:"10s",del:"2s"},{x:"90%",y:"42%",s:4,c:"0,229,255",dx:"-12px",dy:"-26px",dur:"12s",del:"0.3s"},{x:"18%",y:"86%",s:6,c:"255,215,0",dx:"10px",dy:"-28px",dur:"10.5s",del:"1.6s"},{x:"55%",y:"92%",s:5,c:"0,255,136",dx:"-14px",dy:"-24px",dur:"9.5s",del:"0.9s"}];for(const m of t){const v=document.createElement("div");v.className="wl-a-orb",v.setAttribute("aria-hidden","true"),v.style.cssText=`left:${m.x};top:${m.y};width:${m.s}px;height:${m.s}px;background:radial-gradient(circle, rgba(${m.c},0.9) 0%, rgba(${m.c},0) 70%);--dx:${m.dx};--dy:${m.dy};--dur:${m.dur};--del:${m.del};`,e.appendChild(v)}const s=document.createElement("div");s.className="wl-a-flash",s.setAttribute("aria-hidden","true"),e.appendChild(s);const n=document.createElement("div");n.className="wl-a-panel";const o=document.createElement("header");o.className="wl-a-anim wl-a-d1";const r=document.createElement("div");r.className="wl-a-eyebrow";const c=document.createElement("span");c.className="wl-a-livedot",c.setAttribute("aria-hidden","true");const b=document.createElement("span");r.appendChild(c),r.appendChild(b);const C=document.createElement("div");C.className="wl-a-title";const p=document.createElement("div");p.className="wl-a-livebadge",o.appendChild(r),o.appendChild(C),o.appendChild(p);const h=document.createElement("div");h.className="wl-a-mid";const x=document.createElement("div");x.className="wl-a-ringwrap wl-a-anim wl-a-d2";const w=document.createElementNS(y,"svg");w.setAttribute("class","wl-a-ring"),w.setAttribute("viewBox",`0 0 ${se} ${se}`),w.setAttribute("aria-hidden","true");const u=document.createElementNS(y,"circle");u.setAttribute("class","wl-a-underglow"),u.setAttribute("cx",d),u.setAttribute("cy",d),u.setAttribute("r",f),u.setAttribute("transform",`rotate(-90 ${d} ${d})`),w.appendChild(u);const _=document.createElementNS(y,"g");_.setAttribute("class","wl-a-sweepg");const N=document.createElementNS(y,"path");N.setAttribute("class","wl-a-sweeparc"),N.setAttribute("d",ce(-90,-58)),_.appendChild(N),w.appendChild(_);const S=document.createElementNS(y,"g");S.setAttribute("class","wl-a-segs"),w.appendChild(S);const k=document.createElementNS(y,"g");k.setAttribute("class","wl-a-headg");const Y=document.createElementNS(y,"path");Y.setAttribute("class","wl-a-head-body");const g=d-f;Y.setAttribute("d",`M ${d-9} ${g-9} Q ${d+6} ${g-10} ${d+13} ${g} Q ${d+6} ${g+10} ${d-9} ${g+9} Q ${d-13} ${g} ${d-9} ${g-9} Z`);const A=document.createElementNS(y,"circle");A.setAttribute("class","wl-a-head-eye"),A.setAttribute("cx",d+2),A.setAttribute("cy",g-4),A.setAttribute("r",2);const M=document.createElementNS(y,"circle");M.setAttribute("class","wl-a-head-eye"),M.setAttribute("cx",d+2),M.setAttribute("cy",g+4),M.setAttribute("r",2),k.appendChild(Y),k.appendChild(A),k.appendChild(M),w.appendChild(k),x.appendChild(w);const H=document.createElement("div");H.className="wl-a-shock",H.setAttribute("aria-hidden","true");const P=document.createElement("div");P.className="wl-a-shock",P.setAttribute("aria-hidden","true"),x.appendChild(H),x.appendChild(P);const G=document.createElement("div");G.className="wl-a-center";const $=document.createElement("div");$.className="wl-a-needblock";const j=document.createElement("div");j.className="wl-a-neednum";const O=document.createElement("div");O.className="wl-a-needlabel";const q=document.createElement("div");q.className="wl-a-eta";const W=document.createElement("span");W.className="wl-a-eta-label";const Q=document.createElement("span");Q.className="wl-a-eta-val",q.appendChild(W),q.appendChild(Q),$.appendChild(j),$.appendChild(O),$.appendChild(q);const D=document.createElement("div");D.className="wl-a-readyblock";const U=document.createElement("div");U.className="wl-a-readytext";const z=document.createElement("div");z.className="wl-a-deployline";const K=document.createElement("span");K.className="wl-a-deploy-sub";const V=document.createElement("span");V.className="wl-a-deploy-main";const ie=document.createElement("span");V.appendChild(ie);for(let m=0;m<3;m++){const v=document.createElement("span");v.className="wl-a-chev",v.setAttribute("aria-hidden","true"),v.textContent="❯",V.appendChild(v)}z.appendChild(K),z.appendChild(V),D.appendChild(U),D.appendChild(z),G.appendChild($),G.appendChild(D),x.appendChild(G);const X=document.createElement("div");X.className="wl-a-roster wl-a-anim wl-a-d2";const Z=document.createElement("p");Z.className="wl-a-explain wl-a-anim wl-a-d3",h.appendChild(x),h.appendChild(X),h.appendChild(Z);const E=document.createElement("div");E.className="wl-a-bottom";const R=document.createElement("div");R.className="wl-a-stakechip wl-a-anim wl-a-d3";const J=document.createElement("span");J.className="wl-a-stakelabel";const ee=document.createElement("span");ee.className="wl-a-stakeval",R.appendChild(J),R.appendChild(ee);const te=document.createElement("p");te.className="wl-a-trust wl-a-anim wl-a-d3";const T=document.createElement("button");T.type="button",T.className="wl-a-leave wl-a-anim wl-a-d4",T.addEventListener("click",()=>{this.onLeave&&!this.readyStarted&&this.onLeave()});const ae=document.createElement("div");ae.className="wl-a-meta wl-a-anim wl-a-d4",E.appendChild(R),E.appendChild(te),E.appendChild(T),E.appendChild(ae),n.appendChild(o),n.appendChild(h),n.appendChild(E),e.appendChild(n);const F=document.createElement("div");F.className="wl-a-announcer",F.setAttribute("role","status"),F.setAttribute("aria-live","polite"),e.appendChild(F),this.root=e,this.refs={segsG:S,headG:k,underglow:u,needNum:j,needLabel:O,etaVal:Q,eta:q,roster:X,explain:Z,stakeChip:R,stakeVal:ee,trust:te,leave:T,meta:ae,liveBadge:p,readyText:U,deployLine:z,shock1:H,shock2:P,flash:s,announcer:F,sweepG:_,eyebrowText:b,title:C,etaLabel:W,deploySub:K,deployWord:ie,stakeLabel:J},this._renderStatic()}_renderStatic(){const{eyebrowText:e,title:a,liveBadge:t,etaLabel:s,readyText:n,deploySub:o,deployWord:r,stakeLabel:c,leave:b}=this.refs;this.root&&(this.root.setAttribute("aria-label",i("lobby.dialog_label")),e.textContent=i("lobby.eyebrow"),a.textContent=i("lobby.title"),t.textContent=i("lobby.live_badge"),s.textContent=i("lobby.eta_label"),n.textContent=i("lobby.ready_title"),o.textContent=i("lobby.all_vipers_in"),r.textContent=i("lobby.deploying"),c.textContent=i("lobby.entry_label"),b.textContent=i("lobby.leave_button"))}_buildRing(e){const{segsG:a}=this.refs;if(!a)return;for(;a.firstChild;)a.removeChild(a.firstChild);this.segs=[];const t=360/e,s=xe(t);for(let n=0;n<e;n++){const o=-90+n*t+s/2,r=-90+(n+1)*t-s/2,c=document.createElementNS(y,"path");c.setAttribute("class","wl-a-seg"),c.setAttribute("d",ce(o,Math.max(o+.5,r))),a.appendChild(c),this.segs.push({el:c,on:!1})}this._segAng=t,this._gap=s}_applyCount(e,a){for(let t=0;t<this.segs.length;t++){const s=this.segs[t],n=t<e;n!==s.on&&(s.on=n,s.el.classList.toggle("wl-a-on",n),n&&a&&(s.el.classList.remove("wl-a-ignite"),s.el.getBoundingClientRect(),s.el.classList.add("wl-a-ignite")))}this._layoutGlowAndHead(e)}_layoutGlowAndHead(e){const{underglow:a,headG:t}=this.refs,s=2*Math.PI*f,n=this.required>0?e/this.required:0;if(a&&a.setAttribute("stroke-dasharray",`${(s*n).toFixed(1)} ${s.toFixed(1)}`),t)if(e<=0)t.style.opacity="0";else{t.style.opacity="1";const o=B/2/f*(180/Math.PI),r=n*360-this._gap/2+o;t.style.transform=`rotate(${r.toFixed(2)}deg)`}}_fillAll(e){const a=[];for(let t=0;t<this.segs.length;t++)this.segs[t].on||a.push(t);if(!e||a.length===0){this._applyCount(this.required,!1);return}a.forEach((t,s)=>{this._later(()=>{const n=this.segs[t];n&&(n.on=!0,n.el.classList.add("wl-a-on","wl-a-ignite"))},s*55)}),this._later(()=>{const{underglow:t}=this.refs;if(!t)return;const s=2*Math.PI*f;t.setAttribute("stroke-dasharray",`${s.toFixed(1)} ${s.toFixed(1)}`)},a.length*55)}_headLap(){const{headG:e}=this.refs;if(!e)return;const a=B/2/f*(180/Math.PI),t=360-this._gap/2+a;e.classList.add("wl-a-lap"),e.style.transform=`rotate(${(t+360).toFixed(2)}deg)`}_targetEta(){return Math.max(0,this.required-this.current)*ne}_renderCopy(){const{needNum:e,needLabel:a,eta:t,etaVal:s,roster:n,explain:o,stakeChip:r,stakeVal:c,trust:b,meta:C}=this.refs,p=this.block||{},h=Math.max(0,this.required-this.current),x=!!p.game_in_progress;this.root.classList.toggle("wl-a-live",x),h===0?(e.textContent=i("lobby.slot_ratio",{current:this.current,required:this.required}),e.style.fontSize="clamp(34px, 11vw, 46px)",a.textContent=i("lobby.all_vipers_in"),t.classList.add("wl-a-soon"),this.refs.etaVal.textContent=i("lobby.eta_locking_in"),t.querySelector(".wl-a-eta-label").style.display="none"):(e.textContent=String(h),e.style.fontSize="",a.textContent=L("lobby.need_label",h),h===1?(t.classList.add("wl-a-soon"),s.textContent=i("lobby.eta_any_second"),t.querySelector(".wl-a-eta-label").style.display="none"):(t.classList.remove("wl-a-soon"),t.querySelector(".wl-a-eta-label").style.display=""));const w=Math.max(0,this.current-1),u={current:this.current,required:this.required};h===0?n.innerHTML=i("lobby.roster_full_html",u):w===0?n.innerHTML=i("lobby.roster_solo_html",u):n.innerHTML=i("lobby.roster_others_html",{...u,others:w}),o.textContent=x?i("lobby.explain_live"):i("lobby.explain_default");const _=ge(p.entry_fee);_===null?(r.classList.add("wl-a-free"),c.textContent=i("lobby.fee_free"),b.innerHTML=i("lobby.trust_free_html")):(r.classList.remove("wl-a-free"),c.innerHTML=oe(_),b.innerHTML=i("lobby.trust_paid_html",{fee:oe(_)}));const N=p.queue_id?String(p.queue_id):"—",S=p.server_id?String(p.server_id):"—";C.textContent=i("lobby.queue_meta",{queueId:N,serverId:S})}_popNumber(){const{needNum:e}=this.refs;e&&(e.classList.remove("wl-a-pop"),e.getBoundingClientRect(),e.classList.add("wl-a-pop"))}_setEta(e,a){if(this._cancelEtaTween(),Math.max(0,this.required-this.current)<=1){this._etaShown=e;return}const{etaVal:s}=this.refs;if(a||le()||this._etaShown<0){this._etaShown=e,s.textContent=I(e);return}const n=this._etaShown;if(n===e){s.textContent=I(e);return}const r=e>n?1300:700,c=performance.now(),b=C=>{const p=Math.min(1,(C-c)/r),h=1-Math.pow(1-p,3);this._etaShown=n+(e-n)*h,s.textContent=I(this._etaShown),p<1?this._etaRaf=requestAnimationFrame(b):(this._etaRaf=0,this._etaShown=e,s.textContent=I(e))};this._etaRaf=requestAnimationFrame(b)}_cancelEtaTween(){this._etaRaf&&(cancelAnimationFrame(this._etaRaf),this._etaRaf=0)}_onLocaleChange(){if(this.destroyed||!this.root||!this.visible)return;this._renderStatic(),this._renderCopy();const{etaVal:e}=this.refs,a=Math.max(0,this.required-this.current);e&&!this._etaRaf&&a>1&&this._etaShown>=0&&(e.textContent=I(this._etaShown))}_unsubscribeLocale(){this._stopLocale&&(this._stopLocale(),this._stopLocale=null)}_announce(e){const{announcer:a}=this.refs;!a||e===this._lastAnnounced||(this._lastAnnounced=e,a.textContent=e)}_later(e,a){const t=setTimeout(()=>{this._timers.delete(t),e()},a);return this._timers.add(t),t}_clearTimers(){for(const e of this._timers)clearTimeout(e);this._timers.clear()}_resetReadyState(){if(this.readyStarted=!1,!this.root)return;this.root.classList.remove("wl-a-ready");const{readyText:e,deployLine:a,shock1:t,shock2:s,flash:n,headG:o}=this.refs;if(e&&e.classList.remove("wl-a-slam"),a&&a.classList.remove("wl-a-rise"),t&&t.classList.remove("wl-a-go"),s&&s.classList.remove("wl-a-go"),n&&n.classList.remove("wl-a-go"),o){o.classList.remove("wl-a-lap");const r=o.style.transition;o.style.transition="none",o.style.transform="rotate(0deg)",o.getBoundingClientRect(),o.style.transition=r}}}export{Ie as WaitingLobbyA};
