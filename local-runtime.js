// Shared by the native game HUD, canvas labels and the lobby.
(() => {
  const formats = new Map();
  const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const config = c => c && c.currency ? {...(window.__VIPER_LOCAL_CONFIG__||{}),...c} : (window.__VIPER_LOCAL_CONFIG__ || c || {});
  const number = (value, c) => {
    const locale = window.ViperI18n?.locale(config(c).language) || 'ru-RU';
    if (!formats.has(locale)) formats.set(locale, new Intl.NumberFormat(locale, {maximumFractionDigits:3}));
    return formats.get(locale).format(Number(value) || 0);
  };
  const icon = c => {
    c = config(c);
    return c.currencyDisplay !== 'amount' && !c.hideCurrency && !c.hideAmounts && ['BTC','SOL','USDT'].includes(c.currencyIcon)
      ? `<img class="viper-currency-icon" src="/icons/currency-${c.currencyIcon.toLowerCase()}.svg" alt="" width="15" height="15" style="display:inline-block;width:1em;height:1em;vertical-align:-.13em;margin-left:.28em">` : '';
  };
  const text = (value, c) => {
    c = config(c);
    if (c.currencyDisplay === 'hidden' || c.hideAmounts) return '•••';
    const amount = number(value,c);
    const rawCurrency = String(c.currency || 'DIN').trim();
    // A dollar is shown only when the player explicitly includes it in the
    // currency field (for example "$" or "$ DIN"). It is never injected
    // into ordinary currencies such as DIN, BTC, SOL or USDT.
    const explicitDollar = rawCurrency.includes('$');
    const currency = rawCurrency.replace(/\$/g, '').trim();
    const prefix = explicitDollar ? '$' : '';
    if (c.currencyDisplay === 'amount' || c.hideCurrency) return amount;
    if (!currency) return prefix + amount;
    return prefix + amount + ' ' + currency;
  };
  const decorate = (value,c) => {
    const escaped = escape(value), image = icon(c), currency = config(c).currency;
    if (!image || !currency) return escaped;
    return escaped.split(currency).join(currency + image);
  };
  const renderMoney = (element,value,c) => {
    if (!element) return;
    const html = decorate(text(value,c),c);
    if (element._viperMoney === html && element.innerHTML === html) return;
    element.innerHTML = html;
    element._viperMoney = html;
  };
  // Growth and starting body size are independent of the value of each pellet.
  const value = (food,economics) => {
    const e = economics || {}, price = Number(e.pelletPrice) || 1;
    return Math.max(0, Number(e.entryFee || 0) + (Number(food || 0) - Number(e.initialFood ?? 50)) * price);
  };
  window.ViperLocal = {escape, number, text, decorate, renderMoney, value, icon};
})();
