/**
 * WebView Detection & Browser Redirect
 * Detects social media in-app browsers and prompts users to open in native browser.
 * Android: uses intent:// to launch native browser directly.
 * iOS: no programmatic escape — shows Copy Link + instructions for "Open in Safari".
 */
(function() {
  var ua = navigator.userAgent || '';
  var webviews = {
    'Instagram': /Instagram/i,
    'Facebook':  /FBAN|FBAV/i,
    'TikTok':    /BytedanceWebview|TikTok/i,
    'Snapchat':  /Snapchat/i,
    'Twitter':   /Twitter/i,
    'LinkedIn':  /LinkedInApp/i,
    'Pinterest': /Pinterest/i,
  };
  var source = null;
  for (var key in webviews) {
    if (webviews[key].test(ua)) { source = key; break; }
  }
  if (!source) return;

  // Don't show again this session if user dismissed
  try { if (sessionStorage.getItem('webview_dismissed')) return; } catch(e) {}

  var url = window.location.href;
  var isAndroid = /android/i.test(ua);

  // Inject styles
  var style = document.createElement('style');
  style.textContent =
    '#webview-overlay{position:fixed;inset:0;z-index:999999;background:rgba(0,0,0,.92);display:flex;align-items:center;justify-content:center;padding:24px;font-family:Arial,Helvetica,sans-serif}' +
    '.wv-card{background:#1a1a1a;border:1px solid #2a2a2a;border-radius:16px;padding:32px 24px;text-align:center;max-width:360px;width:100%}' +
    '.wv-logo{width:72px;height:72px;border-radius:16px;margin-bottom:16px}' +
    '.wv-title{color:#fff;font-size:20px;margin:0 0 8px}' +
    '.wv-desc{color:#9ca3af;font-size:14px;line-height:1.5;margin:0 0 20px}' +
    '.wv-desc strong{color:#fff}' +
    '.wv-btn{display:block;width:100%;padding:14px;background:#00ff66;color:#000;font-size:16px;font-weight:700;border:none;border-radius:10px;cursor:pointer;margin-bottom:10px}' +
    '.wv-btn:active{opacity:.8}' +
    '.wv-copy-btn{display:block;width:100%;padding:12px;background:#2a2a2a;color:#fff;font-size:14px;font-weight:600;border:none;border-radius:10px;cursor:pointer}' +
    '.wv-copy-btn:active{opacity:.8}' +
    '.wv-dismiss{display:block;width:100%;padding:12px;background:none;border:none;color:#6b7280;font-size:13px;cursor:pointer;margin-top:8px}' +
    '.wv-steps{color:#9ca3af;font-size:13px;line-height:1.6;margin-top:16px;padding:12px;background:#111;border-radius:8px;text-align:left}' +
    '.wv-steps strong{color:#fff}' +
    '.wv-copied{color:#00ff66;font-size:12px;margin-top:6px;display:none}';
  (document.head || document.documentElement).appendChild(style);

  // Build overlay
  var overlay = document.createElement('div');
  overlay.id = 'webview-overlay';

  if (isAndroid) {
    // Android: intent:// works, show simple button
    overlay.innerHTML =
      '<div class="wv-card">' +
        '<img src="/icons/web-app-manifest-192x192.png" class="wv-logo" alt="Viper Royale">' +
        '<h2 class="wv-title">Open in Browser</h2>' +
        '<p class="wv-desc">You\'re viewing this inside <strong>' + source + '</strong>. For the best experience, open in your browser.</p>' +
        '<button class="wv-btn" data-action="open">Open in Browser</button>' +
        '<button class="wv-dismiss" data-action="dismiss">Continue anyway</button>' +
      '</div>';
  } else {
    // iOS: no programmatic way to escape, show copy link + instructions
    overlay.innerHTML =
      '<div class="wv-card">' +
        '<img src="/icons/web-app-manifest-192x192.png" class="wv-logo" alt="Viper Royale">' +
        '<h2 class="wv-title">Open in Safari</h2>' +
        '<p class="wv-desc">You\'re viewing this inside <strong>' + source + '</strong>. For sign-up and the best experience, open in Safari.</p>' +
        '<button class="wv-btn" data-action="copy">Copy Link</button>' +
        '<p class="wv-copied" data-el="copied-msg">Link copied! Now paste in Safari.</p>' +
        '<div class="wv-steps">' +
          '<strong>Or open directly:</strong><br>' +
          '1. Tap the <strong>\u22EF</strong> menu at the top right<br>' +
          '2. Choose <strong>\u201COpen in Safari\u201D</strong>' +
        '</div>' +
        '<button class="wv-dismiss" data-action="dismiss">Continue anyway</button>' +
      '</div>';
  }

  // Event delegation
  overlay.addEventListener('click', function(e) {
    var action = e.target.getAttribute('data-action');
    if (action === 'open') {
      // Android intent
      window.location.href = 'intent://' + url.replace(/^https?:\/\//, '') + '#Intent;scheme=https;end';
    } else if (action === 'copy') {
      // Copy URL to clipboard
      var clean = url.split('?')[0]; // strip tracking params
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(clean).then(function() {
          var msg = overlay.querySelector('[data-el="copied-msg"]');
          if (msg) msg.style.display = 'block';
        });
      } else {
        // Fallback for older WebViews
        var ta = document.createElement('textarea');
        ta.value = clean;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        var msg = overlay.querySelector('[data-el="copied-msg"]');
        if (msg) msg.style.display = 'block';
      }
    } else if (action === 'dismiss') {
      overlay.remove();
      try { sessionStorage.setItem('webview_dismissed', '1'); } catch(e) {}
    }
  });

  // Show overlay after a short delay so the page loads first
  function insertOverlay() {
    overlay.style.display = 'none';
    document.body.insertBefore(overlay, document.body.firstChild);
    setTimeout(function() {
      overlay.style.display = '';
    }, 4000);
  }

  if (document.body) {
    insertOverlay();
  } else {
    document.addEventListener('DOMContentLoaded', insertOverlay);
  }
})();
