import{b as m,a as u,c as p,d as f}from"./kyc-service-C_utPXUd.js";import{a as g,g as h}from"./auth-manager-Cmpvns0S.js";import{i as v}from"./tournaments-api-l_A1Z-uY.js";import{t as e}from"./index-BVfXPvtU.js";import"./env-BJel9_CM.js";import"./env-C7vzROsb.js";import"./supabase-client-BHMtNnbv.js";import"./index-DX65wbiK.js";import"./utils-DJ8BS0_7.js";const y="887744",_=[10,25,50,100];class b{constructor(){this.container=null,this.state="code_entry",this.codeError="",this.limits=null,this.amount="",this.errorMessage=""}open(){v()||g()||(this.state="code_entry",this.codeError="",this.limits=null,this.amount="",this.errorMessage="",this.render(),this.attachListeners())}close(){this.state,this.container&&(this.container.remove(),this.container=null)}render(){const t=document.querySelector(".fastoo-modal");t&&t.remove(),this.container=document.createElement("div"),this.container.className="fastoo-modal",this.container.innerHTML=this.getHTML(),document.body.appendChild(this.container)}getHTML(){return`
      <div class="fastoo-modal-overlay"></div>
      <div class="fastoo-modal-container">
        <button class="fastoo-modal-close" aria-label="${e("common.close")}">&times;</button>
        ${this.getContentHTML()}
      </div>
    `}getContentHTML(){switch(this.state){case"code_entry":return this.getCodeEntryHTML();case"loading_limits":return this.getLoadingHTML(e("deposit.fastoo_loading_options"));case"deposit_form":return this.getDepositFormHTML();case"processing":return this.getLoadingHTML(e("deposit.fastoo_creating_payment"));case"error":return this.getErrorHTML();default:return this.getCodeEntryHTML()}}getCodeEntryHTML(){return`
      <div class="fastoo-modal-content fastoo-code-state">
        <div class="fastoo-header">
          <span class="fastoo-header-icon">💳</span>
          <h2 class="fastoo-title">${e("deposit.fastoo_title")}</h2>
          <p class="fastoo-subtitle">${e("deposit.fastoo_early_access")}</p>
        </div>

        <p class="fastoo-code-description">
          ${e("deposit.fastoo_code_description")}
        </p>

        <div class="fastoo-input-wrapper">
          <input
            type="tel"
            class="fastoo-input"
            id="fastoo-code-input"
            placeholder="${e("deposit.fastoo_code_placeholder")}"
            maxlength="6"
            autocomplete="off"
            inputmode="numeric"
          />
        </div>

        ${this.codeError?`<div class="fastoo-error-inline">${this.codeError}</div>`:""}

        <button class="fastoo-submit-btn" id="fastoo-code-submit" disabled>${e("deposit.submit")}</button>
        <button class="fastoo-cancel-btn" id="fastoo-cancel">${e("common.cancel")}</button>
      </div>
    `}getLoadingHTML(t){return`
      <div class="fastoo-modal-content fastoo-loading-state">
        <div class="fastoo-spinner"></div>
        <p class="fastoo-loading-text">${t}</p>
      </div>
    `}getDepositFormHTML(){const t=this.limits?.min??5,a=this.limits?.max??500,o=parseFloat(this.amount)||0,i=m()+o,l=o>=t&&o<=a;return`
      <div class="fastoo-modal-content fastoo-form-state">
        <div class="fastoo-header">
          <span class="fastoo-header-icon">💳</span>
          <h2 class="fastoo-title">${e("deposit.fastoo_deposit_funds_title")}</h2>
        </div>

        <div class="fastoo-limits-info">
          <div class="fastoo-limit">
            <span class="fastoo-limit-label">${e("deposit.limit_min")}</span>
            <span class="fastoo-limit-value">$${t}</span>
          </div>
          <div class="fastoo-limit">
            <span class="fastoo-limit-label">${e("deposit.limit_max")}</span>
            <span class="fastoo-limit-value">$${a}</span>
          </div>
        </div>

        <div class="fastoo-amount-wrapper">
          <span class="fastoo-amount-prefix">$</span>
          <input
            type="number"
            class="fastoo-amount-input"
            id="fastoo-amount-input"
            placeholder="0.00"
            min="${t}"
            max="${a}"
            step="0.01"
            inputmode="decimal"
            value="${this.amount}"
          />
        </div>

        <div class="fastoo-quick-amounts">
          ${_.map(n=>`
            <button class="fastoo-quick-btn ${o===n?"active":""}" data-amount="${n}">$${n}</button>
          `).join("")}
        </div>

        <div class="fastoo-balance-preview">
          <span class="fastoo-balance-label">${e("deposit.fastoo_new_balance_label")}</span>
          <span class="fastoo-balance-value">${o>0?h(i.toFixed(2),"USD"):"—"}</span>
        </div>

        <button class="fastoo-pay-btn" id="fastoo-pay-btn" ${l?"":"disabled"}>
          ${e("deposit.pay_amount",{amount:`$${o>0?o.toFixed(2):"0.00"}`})}
        </button>

        <div class="fastoo-security">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          ${e("deposit.secure_payment_via",{provider:"Fastoo"})}
        </div>
      </div>
    `}getErrorHTML(){return`
      <div class="fastoo-modal-content fastoo-error-state">
        <div class="fastoo-error-icon">&#9888;&#65039;</div>
        <h2 class="fastoo-error-title">${e("deposit.something_went_wrong_title")}</h2>
        <p class="fastoo-error-text">${this.errorMessage||e("deposit.unexpected_error")}</p>
        <button class="fastoo-retry-btn" id="fastoo-retry">${e("deposit.try_again")}</button>
      </div>
    `}updateContent(){this.state;const t=this.container?.querySelector(".fastoo-modal-container");t&&(t.innerHTML=`
      <button class="fastoo-modal-close" aria-label="${e("common.close")}">&times;</button>
      ${this.getContentHTML()}
    `,this.attachListeners())}attachListeners(){if(!this.container)return;this.container.querySelector(".fastoo-modal-close")?.addEventListener("click",()=>this.close()),this.container.querySelector(".fastoo-modal-overlay")?.addEventListener("click",()=>this.close());const t=this.container.querySelector("#fastoo-code-input"),a=this.container.querySelector("#fastoo-code-submit");t&&(t.focus(),t.addEventListener("input",()=>{a.disabled=t.value.length<6}),t.addEventListener("keydown",s=>{s.key==="Enter"&&t.value.length>=6&&(s.preventDefault(),this.handleCodeSubmit(t.value))})),a?.addEventListener("click",()=>{this.handleCodeSubmit(t?.value||"")}),this.container.querySelector("#fastoo-cancel")?.addEventListener("click",()=>this.close());const o=this.container.querySelector("#fastoo-amount-input");o&&(o.focus(),o.addEventListener("input",()=>{this.amount=o.value,this.refreshDepositForm()}),o.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),this.handlePay())})),this.container.querySelectorAll(".fastoo-quick-btn").forEach(s=>{s.addEventListener("click",()=>{this.amount=s.dataset.amount,o&&(o.value=this.amount),this.refreshDepositForm()})}),this.container.querySelector("#fastoo-pay-btn")?.addEventListener("click",()=>this.handlePay()),this.container.querySelector("#fastoo-retry")?.addEventListener("click",()=>{this.state="deposit_form",this.errorMessage="",this.updateContent()})}refreshDepositForm(){const t=this.limits?.min??5,a=this.limits?.max??500,o=parseFloat(this.amount)||0,s=o>=t&&o<=a,l=m()+o,n=this.container?.querySelector("#fastoo-pay-btn");n&&(n.disabled=!s,n.textContent=e("deposit.pay_amount",{amount:`$${o>0?o.toFixed(2):"0.00"}`}));const c=this.container?.querySelector(".fastoo-balance-value");c&&(c.textContent=o>0?h(l.toFixed(2),"USD"):"—"),this.container?.querySelectorAll(".fastoo-quick-btn").forEach(r=>{r.classList.toggle("active",parseFloat(r.dataset.amount)===o)})}handleCodeSubmit(t){if(t.length,t!==y){this.codeError=e("deposit.fastoo_invalid_code"),this.updateContent();return}this.codeError="",this.state="loading_limits",this.updateContent(),this.fetchLimits()}async fetchLimits(){try{const t=u(),a=p(),o=`${t}${a}/limits`,s=await fetch(o);if(s.status,!s.ok)throw new Error(`HTTP ${s.status}`);const i=await s.json();this.limits={min:i.min??i.min_amount??5,max:i.max??i.max_amount??500},this.limits}catch(t){this.limits={min:5,max:500}}this.state="deposit_form",this.updateContent()}async handlePay(){const t=this.limits?.min??5,a=this.limits?.max??500,o=parseFloat(this.amount)||0;if(!(o<t||o>a)){this.state="processing",this.updateContent();try{const s=p(),i=`${s}/create-order`,l=`${u()}${i}`,n={amount:o},c=await f(i,n);if(c.status,!c.ok){const d=await c.json().catch(()=>({}));throw console.error("[Fastoo] Create order error body:",d),new Error(d.error||d.message||`HTTP ${c.status}`)}const r=await c.json();if(!r.payment_page_url)throw console.error("[Fastoo] Response missing payment_page_url:",r),new Error(e("deposit.no_payment_url"));try{localStorage.removeItem("pending_payment_order_id"),localStorage.removeItem("pending_mobinex_order"),localStorage.setItem("pending_fastoo_order",r.order_id||""),r.order_id}catch{}r.payment_page_url,window.location.href=r.payment_page_url}catch(s){console.error("[Fastoo] Create order failed:",s),this.state="error",this.errorMessage=s.message||e("deposit.fastoo_create_payment_failed"),this.updateContent()}}}}const T=new b;export{b as FastooDepositModal,T as fastooDepositModal};
