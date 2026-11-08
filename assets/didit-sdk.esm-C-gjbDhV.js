/**
 * Didit SDK for Web v0.1.8
 * (c) 2026 Didit
 * @license MIT
 */const r={zIndex:9999,showCloseButton:!0,showExitConfirmation:!0,loggingEnabled:!1},t={overlay:"didit-modal-overlay",container:"didit-modal-container",iframe:"didit-verification-iframe",closeButton:"didit-close-button",loading:"didit-loading",confirmOverlay:"didit-confirm-overlay",confirmBox:"didit-confirm-box",embedded:"didit-embedded"},d=["ar","bg","bn","ca","cnr","cs","da","de","el","en","es","et","fa","fi","fr","he","hi","hr","hu","hy","id","it","ja","ka","ko","lt","lv","mk","ms","nl","no","pl","pt-BR","pt","ro","ru","sk","sl","so","sr","sv","th","tr","uk","uz","vi","zh-CN","zh-TW","zh"];class a{static get isEnabled(){return this._enabled}static set isEnabled(e){this._enabled=e}static log(...e){this._enabled&&[...e]}static warn(...e){this._enabled&&[...e]}static error(...e){this._enabled&&console.error("[DiditSDK]",...e)}}a._enabled=!1;function m(){return`didit-modal-${Date.now()}-${Math.random().toString(36).substr(2,9)}`}function f(s){try{return new URL(s).hostname.endsWith(".didit.me")}catch{return!1}}function c(s,e){return{type:s,message:e||{sessionExpired:"Your verification session has expired.",networkError:"A network error occurred. Please try again.",cameraAccessDenied:"Camera access is required for verification.",unknown:e||"An unknown error occurred."}[s]}}function g(s){try{const{pathname:n}=new URL(s),l=n.split("/").filter(Boolean)[0];if(l&&d.includes(l))return l}catch{}const e=navigator.language;if(d.includes(e))return e;const i=e.split("-")[0];return d.includes(i)?i:"en"}const h={exitTitle:"Exit verification?",exitMessage:"Exiting will end your verification process. Are you sure?",continueButton:"Continue",exitButton:"Exit",ariaLabelModal:"Didit Verification",ariaLabelClose:"Close verification"},b={ar:{exitTitle:"الخروج من التحقق؟",exitMessage:"سيؤدي الخروج إلى إنهاء عملية التحقق الخاصة بك. هل أنت متأكد؟",continueButton:"متابعة",exitButton:"خروج",ariaLabelModal:"التحقق من Didit",ariaLabelClose:"إغلاق التحقق"},bg:{exitTitle:"Излизане от верификацията?",exitMessage:"Излизането ще прекрати процеса на верификация. Сигурни ли сте?",continueButton:"Продължи",exitButton:"Изход",ariaLabelModal:"Верификация Didit",ariaLabelClose:"Затваряне на верификацията"},bn:{exitTitle:"যাচাইকরণ থেকে বের হবেন?",exitMessage:"বের হলে আপনার যাচাইকরণ প্রক্রিয়া শেষ হয়ে যাবে। আপনি কি নিশ্চিত?",continueButton:"চালিয়ে যান",exitButton:"বের হন",ariaLabelModal:"Didit যাচাইকরণ",ariaLabelClose:"যাচাইকরণ বন্ধ করুন"},ca:{exitTitle:"Sortir de la verificació?",exitMessage:"Sortir finalitzarà el procés de verificació. N'esteu segur?",continueButton:"Continua",exitButton:"Sortir",ariaLabelModal:"Verificació Didit",ariaLabelClose:"Tancar verificació"},cnr:{exitTitle:"Izaći iz verifikacije?",exitMessage:"Izlaskom ćete prekinuti proces verifikacije. Jeste li sigurni?",continueButton:"Nastavi",exitButton:"Izađi",ariaLabelModal:"Didit verifikacija",ariaLabelClose:"Zatvori verifikaciju"},cs:{exitTitle:"Opustit ověření?",exitMessage:"Odchodem ukončíte proces ověření. Jste si jisti?",continueButton:"Pokračovat",exitButton:"Odejít",ariaLabelModal:"Ověření Didit",ariaLabelClose:"Zavřít ověření"},da:{exitTitle:"Forlad verifikation?",exitMessage:"Hvis du forlader, afsluttes din verifikationsproces. Er du sikker?",continueButton:"Fortsæt",exitButton:"Forlad",ariaLabelModal:"Didit-verifikation",ariaLabelClose:"Luk verifikation"},de:{exitTitle:"Verifizierung verlassen?",exitMessage:"Das Verlassen beendet Ihren Verifizierungsprozess. Sind Sie sicher?",continueButton:"Fortfahren",exitButton:"Verlassen",ariaLabelModal:"Didit-Verifizierung",ariaLabelClose:"Verifizierung schließen"},el:{exitTitle:"Έξοδος από την επαλήθευση;",exitMessage:"Η έξοδος θα τερματίσει τη διαδικασία επαλήθευσης. Είστε σίγουροι;",continueButton:"Συνέχεια",exitButton:"Έξοδος",ariaLabelModal:"Επαλήθευση Didit",ariaLabelClose:"Κλείσιμο επαλήθευσης"},en:h,es:{exitTitle:"¿Salir de la verificación?",exitMessage:"Salir terminará tu proceso de verificación. ¿Estás seguro?",continueButton:"Continuar",exitButton:"Salir",ariaLabelModal:"Verificación Didit",ariaLabelClose:"Cerrar verificación"},et:{exitTitle:"Lahkuda kinnitamisest?",exitMessage:"Lahkumine lõpetab teie kinnitamisprotsessi. Kas olete kindel?",continueButton:"Jätka",exitButton:"Lahku",ariaLabelModal:"Didit kinnitus",ariaLabelClose:"Sulge kinnitus"},fa:{exitTitle:"خروج از تأیید هویت؟",exitMessage:"خروج باعث پایان فرآیند تأیید هویت شما می‌شود. آیا مطمئن هستید؟",continueButton:"ادامه",exitButton:"خروج",ariaLabelModal:"تأیید هویت Didit",ariaLabelClose:"بستن تأیید هویت"},fi:{exitTitle:"Poistu vahvistuksesta?",exitMessage:"Poistuminen päättää vahvistusprosessisi. Oletko varma?",continueButton:"Jatka",exitButton:"Poistu",ariaLabelModal:"Didit-vahvistus",ariaLabelClose:"Sulje vahvistus"},fr:{exitTitle:"Quitter la vérification ?",exitMessage:"Quitter mettra fin à votre processus de vérification. Êtes-vous sûr ?",continueButton:"Continuer",exitButton:"Quitter",ariaLabelModal:"Vérification Didit",ariaLabelClose:"Fermer la vérification"},he:{exitTitle:"לצאת מהאימות?",exitMessage:"יציאה תסיים את תהליך האימות שלך. האם אתה בטוח?",continueButton:"המשך",exitButton:"יציאה",ariaLabelModal:"אימות Didit",ariaLabelClose:"סגירת אימות"},hi:{exitTitle:"सत्यापन से बाहर निकलें?",exitMessage:"बाहर निकलने से आपकी सत्यापन प्रक्रिया समाप्त हो जाएगी। क्या आप सुनिश्चित हैं?",continueButton:"जारी रखें",exitButton:"बाहर निकलें",ariaLabelModal:"Didit सत्यापन",ariaLabelClose:"सत्यापन बंद करें"},hr:{exitTitle:"Izaći iz verifikacije?",exitMessage:"Izlaskom ćete prekinuti proces verifikacije. Jeste li sigurni?",continueButton:"Nastavi",exitButton:"Izađi",ariaLabelModal:"Didit verifikacija",ariaLabelClose:"Zatvori verifikaciju"},hu:{exitTitle:"Kilépés az ellenőrzésből?",exitMessage:"A kilépés befejezi az ellenőrzési folyamatot. Biztos benne?",continueButton:"Folytatás",exitButton:"Kilépés",ariaLabelModal:"Didit ellenőrzés",ariaLabelClose:"Ellenőrzés bezárása"},hy:{exitTitle:"Դուրս գա՞լ ստուգումից",exitMessage:"Դուրս գալը կավարտի ձեր ստուգման գործընթացը։ Համոզված ե՞ք?",continueButton:"Շարունակել",exitButton:"Դուրս գալ",ariaLabelModal:"Didit ստուգում",ariaLabelClose:"Փակել ստուգումը"},id:{exitTitle:"Keluar dari verifikasi?",exitMessage:"Keluar akan mengakhiri proses verifikasi Anda. Apakah Anda yakin?",continueButton:"Lanjutkan",exitButton:"Keluar",ariaLabelModal:"Verifikasi Didit",ariaLabelClose:"Tutup verifikasi"},it:{exitTitle:"Uscire dalla verifica?",exitMessage:"L'uscita terminerà il processo di verifica. Sei sicuro?",continueButton:"Continua",exitButton:"Esci",ariaLabelModal:"Verifica Didit",ariaLabelClose:"Chiudi verifica"},ja:{exitTitle:"認証を終了しますか？",exitMessage:"終了すると認証プロセスが中断されます。よろしいですか？",continueButton:"続ける",exitButton:"終了",ariaLabelModal:"Didit 認証",ariaLabelClose:"認証を閉じる"},ka:{exitTitle:"გამოსვლა შემოწმებიდან?",exitMessage:"გამოსვლა დაასრულებს თქვენს შემოწმების პროცესს. დარწმუნებული ხართ?",continueButton:"გაგრძელება",exitButton:"გამოსვლა",ariaLabelModal:"Didit შემოწმება",ariaLabelClose:"შემოწმების დახურვა"},ko:{exitTitle:"인증을 종료하시겠습니까?",exitMessage:"종료하면 인증 절차가 중단됩니다. 확실하십니까?",continueButton:"계속",exitButton:"종료",ariaLabelModal:"Didit 인증",ariaLabelClose:"인증 닫기"},lt:{exitTitle:"Išeiti iš patvirtinimo?",exitMessage:"Išėjimas nutrauks jūsų patvirtinimo procesą. Ar esate tikri?",continueButton:"Tęsti",exitButton:"Išeiti",ariaLabelModal:"Didit patvirtinimas",ariaLabelClose:"Uždaryti patvirtinimą"},lv:{exitTitle:"Iziet no verifikācijas?",exitMessage:"Iziešana pārtrauks jūsu verifikācijas procesu. Vai esat pārliecināts?",continueButton:"Turpināt",exitButton:"Iziet",ariaLabelModal:"Didit verifikācija",ariaLabelClose:"Aizvērt verifikāciju"},mk:{exitTitle:"Излези од верификацијата?",exitMessage:"Излегувањето ќе го прекине процесот на верификација. Дали сте сигурни?",continueButton:"Продолжи",exitButton:"Излези",ariaLabelModal:"Верификација Didit",ariaLabelClose:"Затвори верификација"},ms:{exitTitle:"Keluar dari pengesahan?",exitMessage:"Keluar akan menamatkan proses pengesahan anda. Adakah anda pasti?",continueButton:"Teruskan",exitButton:"Keluar",ariaLabelModal:"Pengesahan Didit",ariaLabelClose:"Tutup pengesahan"},nl:{exitTitle:"Verificatie verlaten?",exitMessage:"Verlaten beëindigt uw verificatieproces. Weet u het zeker?",continueButton:"Doorgaan",exitButton:"Verlaten",ariaLabelModal:"Didit-verificatie",ariaLabelClose:"Verificatie sluiten"},no:{exitTitle:"Forlat verifisering?",exitMessage:"Å forlate vil avslutte verifiseringsprosessen. Er du sikker?",continueButton:"Fortsett",exitButton:"Forlat",ariaLabelModal:"Didit-verifisering",ariaLabelClose:"Lukk verifisering"},pl:{exitTitle:"Czy wyjść z weryfikacji?",exitMessage:"Wyjście zakończy proces weryfikacji. Czy na pewno?",continueButton:"Kontynuuj",exitButton:"Wyjdź",ariaLabelModal:"Weryfikacja Didit",ariaLabelClose:"Zamknij weryfikację"},"pt-BR":{exitTitle:"Sair da verificação?",exitMessage:"Sair encerrará seu processo de verificação. Tem certeza?",continueButton:"Continuar",exitButton:"Sair",ariaLabelModal:"Verificação Didit",ariaLabelClose:"Fechar verificação"},pt:{exitTitle:"Sair da verificação?",exitMessage:"Sair terminará o seu processo de verificação. Tem a certeza?",continueButton:"Continuar",exitButton:"Sair",ariaLabelModal:"Verificação Didit",ariaLabelClose:"Fechar verificação"},ro:{exitTitle:"Ieși din verificare?",exitMessage:"Ieșirea va încheia procesul de verificare. Ești sigur?",continueButton:"Continuă",exitButton:"Ieși",ariaLabelModal:"Verificare Didit",ariaLabelClose:"Închide verificarea"},ru:{exitTitle:"Выйти из верификации?",exitMessage:"Выход завершит процесс верификации. Вы уверены?",continueButton:"Продолжить",exitButton:"Выйти",ariaLabelModal:"Верификация Didit",ariaLabelClose:"Закрыть верификацию"},sk:{exitTitle:"Opustiť overenie?",exitMessage:"Odchodom ukončíte proces overenia. Ste si istí?",continueButton:"Pokračovať",exitButton:"Odísť",ariaLabelModal:"Overenie Didit",ariaLabelClose:"Zavrieť overenie"},sl:{exitTitle:"Zapustiti preverjanje?",exitMessage:"Izhod bo prekinil postopek preverjanja. Ali ste prepričani?",continueButton:"Nadaljuj",exitButton:"Izhod",ariaLabelModal:"Preverjanje Didit",ariaLabelClose:"Zapri preverjanje"},so:{exitTitle:"Ka baxdo xaqiijinta?",exitMessage:"Ka bixitaanku wuxuu dhammayn doonaa habka xaqiijintaada. Ma hubtaa?",continueButton:"Sii wad",exitButton:"Ka bax",ariaLabelModal:"Xaqiijinta Didit",ariaLabelClose:"Xir xaqiijinta"},sr:{exitTitle:"Изаћи из верификације?",exitMessage:"Изласком ћете прекинути процес верификације. Да ли сте сигурни?",continueButton:"Настави",exitButton:"Изађи",ariaLabelModal:"Верификација Didit",ariaLabelClose:"Затвори верификацију"},sv:{exitTitle:"Lämna verifiering?",exitMessage:"Att lämna avslutar din verifieringsprocess. Är du säker?",continueButton:"Fortsätt",exitButton:"Lämna",ariaLabelModal:"Didit-verifiering",ariaLabelClose:"Stäng verifiering"},th:{exitTitle:"ออกจากการยืนยันตัวตน?",exitMessage:"การออกจะสิ้นสุดกระบวนการยืนยันตัวตนของคุณ คุณแน่ใจหรือไม่?",continueButton:"ดำเนินการต่อ",exitButton:"ออก",ariaLabelModal:"การยืนยันตัวตน Didit",ariaLabelClose:"ปิดการยืนยันตัวตน"},tr:{exitTitle:"Doğrulamadan çıkmak istiyor musunuz?",exitMessage:"Çıkış, doğrulama sürecinizi sonlandıracak. Emin misiniz?",continueButton:"Devam et",exitButton:"Çıkış",ariaLabelModal:"Didit doğrulama",ariaLabelClose:"Doğrulamayı kapat"},uk:{exitTitle:"Вийти з верифікації?",exitMessage:"Вихід завершить процес верифікації. Ви впевнені?",continueButton:"Продовжити",exitButton:"Вийти",ariaLabelModal:"Верифікація Didit",ariaLabelClose:"Закрити верифікацію"},uz:{exitTitle:"Tekshiruvdan chiqasizmi?",exitMessage:"Chiqish tekshiruv jarayonini tugatadi. Ishonchingiz komilmi?",continueButton:"Davom etish",exitButton:"Chiqish",ariaLabelModal:"Didit tekshiruvi",ariaLabelClose:"Tekshiruvni yopish"},vi:{exitTitle:"Thoát khỏi xác minh?",exitMessage:"Thoát sẽ kết thúc quá trình xác minh của bạn. Bạn có chắc không?",continueButton:"Tiếp tục",exitButton:"Thoát",ariaLabelModal:"Xác minh Didit",ariaLabelClose:"Đóng xác minh"},"zh-CN":{exitTitle:"退出验证？",exitMessage:"退出将结束您的验证流程。确定要退出吗？",continueButton:"继续",exitButton:"退出",ariaLabelModal:"Didit 验证",ariaLabelClose:"关闭验证"},"zh-TW":{exitTitle:"退出驗證？",exitMessage:"退出將結束您的驗證流程。確定要退出嗎？",continueButton:"繼續",exitButton:"退出",ariaLabelModal:"Didit 驗證",ariaLabelClose:"關閉驗證"},zh:{exitTitle:"退出验证？",exitMessage:"退出将结束您的验证流程。确定要退出吗？",continueButton:"继续",exitButton:"退出",ariaLabelModal:"Didit 验证",ariaLabelClose:"关闭验证"}};function u(s){return b[s]??h}class p{constructor(e,i){this.state={isOpen:!1,isLoading:!0,showConfirmation:!1},this.overlay=null,this.container=null,this.iframe=null,this.loadingEl=null,this.confirmOverlay=null,this.boundHandleMessage=null,this.boundHandleKeydown=null,this.embedded=!1,this.embeddedContainer=null,this.language="en",this.modalId=m(),this.config={zIndex:e?.zIndex??r.zIndex,showCloseButton:e?.showCloseButton??r.showCloseButton,showExitConfirmation:e?.showExitConfirmation??r.showExitConfirmation},this.callbacks=i,this.containerElement=e?.containerElement??document.body,this.embedded=e?.embedded??!1,this.embedded&&e?.embeddedContainerId&&(this.embeddedContainer=document.getElementById(e.embeddedContainerId))}injectStyles(){const e="didit-sdk-styles";if(document.getElementById(e))return;const i=document.createElement("style");i.id=e,i.textContent=`
      .${t.overlay} {
        display: none;
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: ${this.config.zIndex};
        justify-content: center;
        align-items: center;
        padding: 1rem;
        opacity: 0;
        transition: opacity 0.2s ease-out;
      }

      .${t.overlay}.active {
        display: flex;
        opacity: 1;
      }

      .${t.container} {
        position: relative;
        width: 100%;
        max-width: 500px;
        max-height: 90dvh;
        border-radius: 16px;
        overflow: hidden;
        background: transparent;
      }

      .${t.overlay}.active .${t.container} {
        transform: scale(1);
      }

      .${t.iframe} {
        width: 100%;
        height: 700px;
        border: none;
        display: block;
      }

      .${t.closeButton} {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 24px;
        height: 24px;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
        outline: none;
      }

      .${t.closeButton}:hover,
      .${t.closeButton}:focus {
        background: transparent;
        opacity: 0.5;
      }

      .${t.closeButton} svg {
        stroke: #666;
        stroke-width: 2;
        stroke-linecap: round;
      }

      .${t.loading} {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fafafa;
        z-index: 5;
      }

      .${t.loading}.hidden {
        display: none;
      }

      .${t.loading} svg {
        width: 4rem;
        height: 4rem;
        animation: didit-spin 1s linear infinite;
      }

      .${t.loading} circle {
        stroke: #e5e5e5;
        stroke-width: 2.5;
        fill: none;
      }

      .${t.loading} path {
        stroke: #525252;
        stroke-width: 2.5;
        stroke-linecap: round;
        fill: none;
      }

      @keyframes didit-spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .${t.confirmOverlay} {
        display: none;
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 20;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.15s ease-out;
      }

      .${t.confirmOverlay}.active {
        display: flex;
        opacity: 1;
      }

      .${t.confirmBox} {
        background: #fff;
        border-radius: 12px;
        padding: 1.5rem;
        text-align: center;
        max-width: 300px;
        margin: 1rem;
        transform: scale(0.95);
        transition: transform 0.15s ease-out;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      }

      .${t.confirmOverlay}.active .${t.confirmBox} {
        transform: scale(1);
      }

      .${t.confirmBox} h3 {
        color: #1a1a2e;
        margin: 0 0 0.5rem 0;
        font-size: 1.125rem;
        font-weight: 600;
      }

      .${t.confirmBox} p {
        color: #666;
        font-size: 0.875rem;
        margin: 0 0 1.25rem 0;
        line-height: 1.5;
      }

      .didit-confirm-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }

      .didit-confirm-actions button {
        background: #2563eb;
        color: #fff;
        border: none;
        padding: 0.625rem 1.25rem;
        border-radius: 8px;
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.15s ease;
      }

      .didit-confirm-actions button:hover {
        background: #1d4ed8;
      }

      .didit-confirm-actions span {
        color: #666;
        font-size: 0.875rem;
        cursor: pointer;
        padding: 0.625rem;
        transition: color 0.15s ease;
      }

      .didit-confirm-actions span:hover {
        color: #1a1a2e;
      }

      @media (max-width: 540px) {
        .${t.overlay} {
          padding: 0;
        }

        .${t.container} {
          max-width: 100%;
          max-height: 100dvh;
          border-radius: 0;
        }

        .${t.iframe} {
          height: 100dvh;
        }
      }

      .${t.embedded} {
        position: relative;
        width: 100%;
        height: 100%;
      }

      .${t.embedded} .${t.iframe} {
        width: 100%;
        height: 100%;
      }

      .${t.embedded} .${t.loading} {
        border-radius: 0;
      }
    `,document.head.appendChild(i)}createDOM(){if(this.injectStyles(),this.embedded&&this.embeddedContainer){this.createEmbeddedDOM();return}const e=u(this.language);if(this.overlay=document.createElement("div"),this.overlay.id=this.modalId,this.overlay.className=t.overlay,this.overlay.setAttribute("role","dialog"),this.overlay.setAttribute("aria-modal","true"),this.overlay.setAttribute("aria-label",e.ariaLabelModal),this.container=document.createElement("div"),this.container.className=t.container,this.loadingEl=document.createElement("div"),this.loadingEl.className=t.loading,this.loadingEl.innerHTML=`
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 10 10" />
      </svg>
    `,this.config.showCloseButton){const i=document.createElement("button");i.className=t.closeButton,i.setAttribute("aria-label",e.ariaLabelClose),i.innerHTML=`
        <svg width="14" height="14" viewBox="0 0 14 14">
          <line x1="1" y1="1" x2="13" y2="13" />
          <line x1="13" y1="1" x2="1" y2="13" />
        </svg>
      `,i.addEventListener("click",()=>this.handleCloseRequest()),this.container.appendChild(i)}this.iframe=document.createElement("iframe"),this.iframe.className=t.iframe,this.iframe.setAttribute("allow","camera; microphone; fullscreen; autoplay; encrypted-media; geolocation"),this.iframe.setAttribute("title",e.ariaLabelModal),this.iframe.addEventListener("load",()=>this.handleIframeLoad()),this.confirmOverlay=document.createElement("div"),this.confirmOverlay.className=t.confirmOverlay,this.confirmOverlay.innerHTML=`
      <div class="${t.confirmBox}">
        <h3>${e.exitTitle}</h3>
        <p>${e.exitMessage}</p>
        <div class="didit-confirm-actions">
          <button type="button" data-action="continue">${e.continueButton}</button>
          <span data-action="exit">${e.exitButton}</span>
        </div>
      </div>
    `,this.confirmOverlay.querySelector('[data-action="continue"]')?.addEventListener("click",()=>{this.hideConfirmation()}),this.confirmOverlay.querySelector('[data-action="exit"]')?.addEventListener("click",()=>{this.confirmExit()}),this.container.appendChild(this.loadingEl),this.container.appendChild(this.iframe),this.container.appendChild(this.confirmOverlay),this.overlay.appendChild(this.container),this.overlay.addEventListener("click",i=>{i.target===this.overlay&&this.handleCloseRequest()}),this.containerElement.appendChild(this.overlay)}createEmbeddedDOM(){this.embeddedContainer&&(this.container=document.createElement("div"),this.container.id=this.modalId,this.container.className=t.embedded,this.loadingEl=document.createElement("div"),this.loadingEl.className=t.loading,this.loadingEl.innerHTML=`
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 1 10 10" />
      </svg>
    `,this.iframe=document.createElement("iframe"),this.iframe.className=t.iframe,this.iframe.setAttribute("allow","camera; microphone; fullscreen; autoplay; encrypted-media; geolocation"),this.iframe.setAttribute("title",u(this.language).ariaLabelModal),this.iframe.addEventListener("load",()=>this.handleIframeLoad()),this.container.appendChild(this.loadingEl),this.container.appendChild(this.iframe),this.embeddedContainer.appendChild(this.container))}setupEventListeners(){this.boundHandleMessage=this.handleMessage.bind(this),window.addEventListener("message",this.boundHandleMessage),this.boundHandleKeydown=this.handleKeydown.bind(this),document.addEventListener("keydown",this.boundHandleKeydown)}removeEventListeners(){this.boundHandleMessage&&(window.removeEventListener("message",this.boundHandleMessage),this.boundHandleMessage=null),this.boundHandleKeydown&&(document.removeEventListener("keydown",this.boundHandleKeydown),this.boundHandleKeydown=null)}handleMessage(e){if(!f(e.origin))return;a.log("Received postMessage:",e.data);let i;try{typeof e.data=="string"?i=JSON.parse(e.data):i=e.data}catch{a.warn("Failed to parse postMessage:",e.data);return}if(i.type==="didit:close_request"){this.handleCloseRequest();return}this.callbacks.onMessage(i)}handleKeydown(e){this.state.isOpen&&e.key==="Escape"&&(e.preventDefault(),this.state.showConfirmation?this.hideConfirmation():this.handleCloseRequest())}handleIframeLoad(){this.iframe?.src&&this.iframe.src!=="about:blank"&&(this.state.isLoading=!1,this.loadingEl?.classList.add("hidden"),this.callbacks.onIframeLoad())}handleCloseRequest(){this.config.showExitConfirmation?this.showConfirmation():this.callbacks.onCloseConfirmed()}showConfirmation(){this.state.showConfirmation=!0,this.confirmOverlay?.classList.add("active"),this.callbacks.onClose()}hideConfirmation(){this.state.showConfirmation=!1,this.confirmOverlay?.classList.remove("active")}confirmExit(){this.hideConfirmation(),this.callbacks.onCloseConfirmed()}open(e){this.language=g(e),!this.overlay&&!this.container&&(this.createDOM(),this.setupEventListeners()),a.log("Opening with URL:",e),this.state.isLoading=!0,this.state.showConfirmation=!1,this.loadingEl?.classList.remove("hidden"),this.confirmOverlay?.classList.remove("active"),this.iframe&&(this.iframe.src=e),this.state.isOpen=!0,!this.embedded&&(this.overlay?.classList.add("active"),document.body.style.overflow="hidden")}close(){a.log("Closing"),this.state.isOpen=!1,this.state.isLoading=!0,this.state.showConfirmation=!1,this.iframe&&(this.iframe.src="about:blank"),!this.embedded&&(this.overlay?.classList.remove("active"),document.body.style.overflow="")}destroy(){a.log("Destroying"),this.close(),this.removeEventListeners(),this.embedded&&this.container&&this.container.parentNode?this.container.parentNode.removeChild(this.container):this.overlay&&this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay),this.overlay=null,this.container=null,this.iframe=null,this.loadingEl=null,this.confirmOverlay=null}isOpen(){return this.state.isOpen}isLoading(){return this.state.isLoading}}class o{static get shared(){return o._instance||(o._instance=new o),o._instance}static reset(){o._instance&&(o._instance.destroy(),o._instance=null)}get state(){return this._state}get configuration(){return this._configuration}get isPresented(){return this._modal?.isOpen()??!1}get errorMessage(){return this._errorMessage}constructor(){this._state="idle",this._modal=null,a.log("DiditSdk initialized")}async startVerification(e){const i=e.configuration;this._configuration=i,a.isEnabled=i?.loggingEnabled??r.loggingEnabled,a.log("Starting verification with options:",e),this._modal&&(this._modal.destroy(),this._modal=null),this._modal=new p(i,{onClose:()=>this.handleModalClose(),onCloseConfirmed:()=>this.handleModalCloseConfirmed(),onMessage:n=>this.handleVerificationEvent(n),onIframeLoad:()=>this.handleIframeLoad()});try{const{url:n}=e;if(!n||typeof n!="string")throw new Error("Invalid options: url is required");this._url=n,this.setState("loading"),this.emitInternalEvent("didit:started",{}),this._modal?.open(this._url)}catch(n){this.handleError(n)}}close(){a.log("Closing verification programmatically"),this.handleModalCloseConfirmed()}destroy(){a.log("Destroying SDK instance"),this._modal?.destroy(),this._modal=null,this.reset()}handleModalClose(){a.log("Modal close requested")}handleModalCloseConfirmed(){a.log("Modal close confirmed");const e=this.buildSessionData();this._modal?.close(),this.reset();const i={type:"cancelled",session:e};this.onComplete?.(i)}handleIframeLoad(){a.log("Iframe loaded")}emitInternalEvent(e,i){const n={type:e,data:i,timestamp:Date.now()};a.log("Emitting internal event:",n),this.onEvent?.(n)}handleVerificationEvent(e){switch(a.log("Verification event:",e),this.onEvent?.(e),e.type){case"didit:ready":a.log("Verification iframe ready");break;case"didit:started":a.log("User started verification");break;case"didit:step_started":a.log("Step started:",e.data?.step);break;case"didit:step_completed":a.log("Step completed:",e.data?.step,"-> next:",e.data?.nextStep);break;case"didit:media_started":a.log("Media started:",e.data?.mediaType,"for step:",e.data?.step);break;case"didit:media_captured":a.log("Media captured for step:",e.data?.step,"isAuto:",e.data?.isAuto);break;case"didit:document_selected":a.log("Document selected:",e.data?.documentType,"country:",e.data?.country);break;case"didit:verification_submitted":a.log("Verification submitted for step:",e.data?.step);break;case"didit:code_sent":a.log("Code sent via:",e.data?.channel,"codeSize:",e.data?.codeSize);break;case"didit:code_verified":a.log("Code verified via:",e.data?.channel);break;case"didit:status_updated":a.log("Status updated:",e.data?.status,"step:",e.data?.step);break;case"didit:completed":this.handleVerificationCompleted(e);break;case"didit:cancelled":this.handleVerificationCancelled(e);break;case"didit:error":this.handleVerificationError(e);break;case"didit:step_changed":a.log("Step changed:",e.data?.step);break}}handleVerificationCompleted(e){a.log("Verification completed:",e.data);const i=this.buildSessionData(e.data);this._configuration?.closeModalOnComplete&&(this._modal?.close(),this.reset());const n={type:"completed",session:i};this.onComplete?.(n)}handleVerificationCancelled(e){a.log("Verification cancelled:",e.data);const i=this.buildSessionData(e.data);this._modal?.close(),this.reset();const n={type:"cancelled",session:i};this.onComplete?.(n)}handleVerificationError(e){a.log("Verification error:",e.data)}handleError(e){a.error("SDK error:",e);let i;e instanceof Error?i=c("unknown",e.message):i=c("unknown","An unknown error occurred"),this._errorMessage=i.message,this.setState("error"),this._modal?.close(),this.reset();const n={type:"failed",error:i};this.onComplete?.(n)}setState(e){const i=this._state;this._state=e,i!==e&&(a.log("State changed:",i,"->",e),this.onStateChange?.(e,this._errorMessage))}reset(){this._state="idle",this._sessionId=void 0,this._url=void 0,this._errorMessage=void 0,this._configuration=void 0}buildSessionData(e){const i=e?.sessionId||this._sessionId;if(i)return{sessionId:i,status:e?.status||"Pending"}}}o._instance=null;export{o as DiditSdk,o as default};
