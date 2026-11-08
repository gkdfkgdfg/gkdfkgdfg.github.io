import"./env-C7vzROsb.js";import{c as h}from"./env-BJel9_CM.js";import{b as o,t as c}from"./auth-manager-Cmpvns0S.js";import{i as u,a as m,j as l,d as p,k as y}from"./kyc-service-C_utPXUd.js";import{g as v,f as w}from"./utils-DJ8BS0_7.js";import{i as b,t as a}from"./index-BVfXPvtU.js";/* empty css             */import"./supabase-client-BHMtNnbv.js";import"./index-DX65wbiK.js";u(h,o);const g={min_amount:5,max_amount:1e4};class f{constructor(){this.activeTab="deposit",this.activeMethod="card",this.limits=g,this.selectedAmount=null,this.isLoading=!1,this.refreshInterval=null}async init(){if(await b(),await o.initialize(),!o.state.token||o.state.type==="anonymous"){window.location.href="/?login=1";return}this.render(),this.attachListeners(),await this.loadData(),document.querySelector(".wallet-loading")?.remove(),this.refreshInterval=setInterval(()=>this.refreshHistory(),15e3),c("wallet_page_viewed",{method:this.activeMethod})}render(){const e=document.getElementById("wallet-app");if(!e)return;const t=o.state.balance||"0.00";e.innerHTML=`
      <div class="wallet-page">
        <!-- Header -->
        <header class="wallet-header">
          <button class="back-btn" id="back-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <h1 class="wallet-title">${a("wallet.title")}</h1>
          <div class="balance-display">
            <span class="balance-amount" id="balance-display">$${t}</span>
          </div>
        </header>

        <!-- Main Content -->
        <main class="wallet-main">
          <!-- Tab Pills -->
          <div class="tab-pills">
            <button class="tab-pill active" data-tab="deposit">${a("wallet.deposit")}</button>
            <button class="tab-pill" data-tab="withdraw">${a("wallet.withdraw")}</button>
          </div>

          <!-- Deposit Tab -->
          <div class="tab-content active" id="tab-deposit">
            <!-- Method Toggle -->
            <div class="method-toggle">
              <button class="method-btn active" data-method="card">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                <span>${a("wallet.card")}</span>
              </button>
              <button class="method-btn" data-method="crypto">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M14.5 9h-5l-.5 3h5l-.5 3h-5"></path>
                </svg>
                <span>${a("wallet.crypto")}</span>
              </button>
            </div>

            <!-- Card Deposit Content -->
            <div class="deposit-content" id="card-content">
              <!-- Amount Section -->
              <div class="amount-section">
                <label class="amount-label">${a("wallet.enter_amount_usd")}</label>
                <div class="amount-input-wrapper">
                  <span class="currency-prefix">$</span>
                  <input 
                    type="number" 
                    id="amount-input" 
                    class="amount-input"
                    placeholder="0.00" 
                    step="1" 
                    min="0.01"
                    max="10000"
                    inputmode="decimal"
                    autocomplete="off"
                  />
                </div>
                <div class="amount-limits">
                  ${a("wallet.max_limit_html",{amount:"$10,000"})}
                </div>
              </div>

              <!-- Quick Amounts -->
              <div class="quick-amounts">
                <button class="quick-btn" data-amount="10">$10</button>
                <button class="quick-btn" data-amount="25">$25</button>
                <button class="quick-btn" data-amount="50">$50</button>
                <button class="quick-btn" data-amount="100">$100</button>
                <button class="quick-btn" data-amount="250">$250</button>
              </div>

              <!-- Error Message -->
              <div class="error-message" id="error-message"></div>

              <!-- Pay Button -->
              <button class="pay-btn" id="pay-btn">
                <span class="pay-btn-text">${a("wallet.pay_with_card")}</span>
                <div class="pay-btn-spinner"></div>
              </button>

              <!-- Security Notice -->
              <div class="security-notice">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <span>${a("wallet.secure_payment_notice")}</span>
              </div>

              <!-- Info Cards -->
              <div class="info-cards">
                <div class="info-card">
                  <span class="info-label">${a("wallet.rate_label")}</span>
                  <span class="info-value">1:1</span>
                </div>
                <div class="info-card">
                  <span class="info-label">${a("wallet.processing_label")}</span>
                  <span class="info-value">${a("wallet.processing_instant")}</span>
                </div>
              </div>
            </div>

            <!-- Crypto Content (placeholder) -->
            <div class="deposit-content hidden" id="crypto-content">
              <div class="crypto-placeholder">
                <p>${a("wallet.crypto_coming_soon")}</p>
              </div>
            </div>

            <!-- Divider -->
            <div class="section-divider"></div>

            <!-- History Section -->
            <div class="history-section">
              <h3 class="history-title">${a("wallet.recent_deposits")}</h3>
              <div class="history-list" id="deposit-history">
                <div class="history-loading">${a("common.loading")}</div>
              </div>
            </div>
          </div>

          <!-- Withdraw Tab -->
          <div class="tab-content" id="tab-withdraw">
            <div class="withdraw-placeholder">
              <p>${a("wallet.withdraw_placeholder")}</p>
              <p class="withdraw-note">${a("wallet.coming_soon")}</p>
            </div>
          </div>
        </main>
      </div>
    `}attachListeners(){document.getElementById("back-btn")?.addEventListener("click",()=>{window.location.href="/"}),document.querySelectorAll(".tab-pill").forEach(t=>{t.addEventListener("click",s=>this.switchTab(s.target.dataset.tab))}),document.querySelectorAll(".method-btn").forEach(t=>{t.addEventListener("click",s=>this.switchMethod(s.currentTarget.dataset.method))});const e=document.getElementById("amount-input");e&&(e.addEventListener("input",()=>this.handleAmountInput()),e.addEventListener("keydown",t=>{t.key==="Enter"&&(t.preventDefault(),this.handlePay())})),document.querySelectorAll(".quick-btn").forEach(t=>{t.addEventListener("click",s=>this.selectQuickAmount(s.currentTarget))}),document.getElementById("pay-btn")?.addEventListener("click",()=>this.handlePay())}async loadData(){await this.refreshBalance(),await this.fetchLimits(),await this.refreshHistory()}async refreshBalance(){try{await o.getBalance(),this.updateBalanceDisplay()}catch(e){console.error("[WALLET] Failed to refresh balance:",e)}}updateBalanceDisplay(){const e=document.getElementById("balance-display");if(e){const t=o.state.balance||"0.00";e.textContent=`$${t}`}}async fetchLimits(){try{const s=await fetch(`${m()}${l()}/limits`);if(s.ok){const i=await s.json();this.limits=i.limits||i}}catch(s){}const e=document.getElementById("min-limit"),t=document.getElementById("max-limit");e&&(e.textContent=`$${this.limits.min_amount}`),t&&(t.textContent=`$${this.limits.max_amount?.toLocaleString()||"10,000"}`)}switchTab(e){e!==this.activeTab&&(this.activeTab=e,document.querySelectorAll(".tab-pill").forEach(t=>{t.classList.toggle("active",t.dataset.tab===e)}),document.querySelectorAll(".tab-content").forEach(t=>{t.classList.toggle("active",t.id===`tab-${e}`)}))}switchMethod(e){e!==this.activeMethod&&(this.activeMethod=e,document.querySelectorAll(".method-btn").forEach(t=>{t.classList.toggle("active",t.dataset.method===e)}),document.getElementById("card-content")?.classList.toggle("hidden",e!=="card"),document.getElementById("crypto-content")?.classList.toggle("hidden",e!=="crypto"))}handleAmountInput(){const e=document.getElementById("amount-input"),t=document.getElementById("pay-btn");this.selectedAmount=null,document.querySelectorAll(".quick-btn").forEach(i=>i.classList.remove("selected"));const s=parseFloat(e?.value);if(t){const i=t.querySelector(".pay-btn-text");i&&(!isNaN(s)&&s>0?i.textContent=a("wallet.pay_amount",{amount:`$${s.toFixed(2)}`}):i.textContent=a("wallet.pay_with_card"))}this.hideError()}selectQuickAmount(e){const t=e.dataset.amount;if(!t)return;this.selectedAmount=parseFloat(t),document.querySelectorAll(".quick-btn").forEach(n=>n.classList.remove("selected")),e.classList.add("selected");const s=document.getElementById("amount-input");s&&(s.value=t);const i=document.getElementById("pay-btn");if(i){const n=i.querySelector(".pay-btn-text");n&&(n.textContent=a("wallet.pay_amount",{amount:`$${parseFloat(t).toFixed(2)}`}))}this.hideError()}async handlePay(){if(this.isLoading)return;const e=document.getElementById("amount-input"),t=parseFloat(e?.value);if(isNaN(t)||t<=0){this.showError(a("wallet.invalid_amount_error"));return}if(t<this.limits.min_amount){this.showError(a("wallet.min_deposit_error",{amount:`$${this.limits.min_amount}`}));return}if(t>this.limits.max_amount){this.showError(a("wallet.max_deposit_error",{amount:`$${this.limits.max_amount.toLocaleString()}`}));return}this.setLoading(!0);try{const s=await p(`${l()}/create-order`,{amount:t});if(!s.ok){const n=await s.json().catch(()=>({}));throw new Error(n.error||a("wallet.payment_failed_status",{status:s.status}))}const i=await s.json();if(!i.checkout_url)throw new Error(i.error||a("wallet.create_order_failed"));try{localStorage.setItem("pending_payment_order_id",i.order_id)}catch(n){}c("payment_initiated",{amount:t,method:"card"}),window.location.href=i.checkout_url}catch(s){console.error("[WALLET] Payment failed:",s),this.showError(s.message||a("wallet.payment_failed_retry")),this.setLoading(!1)}}setLoading(e){this.isLoading=e;const t=document.getElementById("pay-btn");t&&(t.classList.toggle("loading",e),t.disabled=e)}showError(e){const t=document.getElementById("error-message");t&&(t.textContent=e,t.classList.add("visible"),setTimeout(()=>this.hideError(),5e3))}hideError(){const e=document.getElementById("error-message");e&&e.classList.remove("visible")}async refreshHistory(){const e=document.getElementById("deposit-history");if(e)try{const t=await y(`${l()}/history?limit=10`);if(!t.ok){if(t.status===401){e.innerHTML=`<div class="history-empty">${a("wallet.sign_in_to_view_history")}</div>`;return}throw new Error(`Failed to load history (${t.status})`)}const s=await t.json(),i=s.payments||(Array.isArray(s)?s:null);i&&i.length>0?e.innerHTML=i.map(n=>{const r=v(n.status,"deposit");return`
            <div class="history-item">
              <div class="history-left">
                <span class="history-amount">+$${n.amount}</span>
                <span class="history-method">${a("wallet.card")}</span>
              </div>
              <div class="history-right">
                <span class="history-status ${r.colorClass}">${r.label}</span>
                <span class="history-time">${w(n.completed_at||n.created_at)}</span>
              </div>
            </div>
          `}).join(""):e.innerHTML=`<div class="history-empty">${a("wallet.no_deposits_yet")}</div>`}catch(t){console.error("[WALLET] Error loading history:",t),e.innerHTML=`<div class="history-empty">${a("wallet.no_deposits_yet")}</div>`}}destroy(){this.refreshInterval&&clearInterval(this.refreshInterval)}}const d=new f;d.init().catch(console.error);window.addEventListener("beforeunload",()=>d.destroy());
