(function(){
  'use strict';

  function ensureStyles(){
    if (document.getElementById('sfGuestPopupStyles')) return;

    const style = document.createElement('style');
    style.id = 'sfGuestPopupStyles';
    style.textContent = `
      .sf-guest-bg {
        position: fixed;
        inset: 0;
        display: none;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.82);
        backdrop-filter: blur(4px);
        z-index: 300;
        padding: 20px;
      }
      .sf-guest-bg.on {
        display: flex;
      }
      .sf-guest-modal {
        width: min(440px, 100%);
        background: #000;
        border: 1px solid #6b1f1f;
        position: relative;
        box-shadow: 0 16px 48px rgba(0,0,0,0.5);
        animation: sfGuestSlide .22s ease-out;
      }
      .sf-guest-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 18px;
        border-bottom: 1px solid #6b1f1f;
        background: #050505;
      }
      .sf-guest-brand {
        font-family: 'IBM Plex Mono', ui-monospace, monospace;
        letter-spacing: 0.06em;
        font-size: 13px;
        font-weight: 600;
        color: #fff;
      }
      .sf-guest-brand::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #d92626;
        margin-right: 8px;
        vertical-align: middle;
        box-shadow: 0 0 8px rgba(217,38,38,.7);
      }
      .sf-guest-close {
        border: none;
        background: transparent;
        color: #555;
        cursor: pointer;
        font-size: 18px;
        line-height: 1;
      }
      .sf-guest-close:hover { color: #fff; }
      .sf-guest-body {
        padding: 28px 24px 24px;
        text-align: center;
      }
      .sf-guest-ico {
        font-size: 40px;
        margin-bottom: 16px;
      }
      .sf-guest-title {
        font-family: 'IBM Plex Mono', ui-monospace, monospace;
        font-size: 15px;
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 12px;
      }
      .sf-guest-text {
        font-family: 'IBM Plex Mono', ui-monospace, monospace;
        font-size: 11.5px;
        color: #d4d4d4;
        line-height: 1.7;
        margin-bottom: 10px;
      }
      .sf-guest-sub {
        font-family: 'IBM Plex Mono', ui-monospace, monospace;
        font-size: 10.5px;
        color: #6b6b6b;
        line-height: 1.7;
        margin-bottom: 22px;
      }
      .sf-guest-actions {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
      }
      .sf-guest-btn {
        min-width: 130px;
        padding: 11px 20px;
        font-family: 'IBM Plex Mono', ui-monospace, monospace;
        font-size: 11.5px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        border: 1px solid transparent;
        cursor: pointer;
        transition: background .15s ease, border-color .15s ease, color .15s ease;
      }
      .sf-guest-btn-primary {
        background: #d92626;
        border-color: #d92626;
        color: #fff;
      }
      .sf-guest-btn-primary:hover { background: #a81c1c; border-color: #a81c1c; }
      .sf-guest-btn-ghost {
        background: #0d0d0d;
        border-color: #262626;
        color: #d4d4d4;
      }
      .sf-guest-btn-ghost:hover { background: #161616; border-color: #6b1f1f; color: #fff; }
      .sf-guest-foot {
        padding: 10px 18px;
        border-top: 1px solid #6b1f1f;
        background: #050505;
        font-family: 'IBM Plex Mono', ui-monospace, monospace;
        font-size: 9.5px;
        color: #333;
        text-align: center;
        letter-spacing: 0.06em;
      }
      @keyframes sfGuestSlide {
        from { opacity: 0; transform: translateY(14px) scale(.98); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }
      @media (max-width: 560px) {
        .sf-guest-body { padding: 22px 18px 20px; }
        .sf-guest-ico { font-size: 32px; margin-bottom: 12px; }
        .sf-guest-title { font-size: 13px; margin-bottom: 12px; }
        .sf-guest-text { font-size: 11px; }
        .sf-guest-sub { font-size: 10px; }
        .sf-guest-btn { min-width: 0; flex: 1; padding: 10px 14px; }
      }
    `;
    document.head.appendChild(style);
  }

  function buildPopup(){
    let popup = document.getElementById('sfGuestPopup');
    if (popup) return popup;

    popup = document.createElement('div');
    popup.id = 'sfGuestPopup';
    popup.className = 'sf-guest-bg';
    popup.innerHTML = `
      <div class="sf-guest-modal" role="dialog" aria-modal="true" aria-labelledby="sfGuestTitle">
        <div class="sf-guest-head">
          <div class="sf-guest-brand">SilverFang</div>
          <button type="button" class="sf-guest-close" data-close="true" aria-label="Close">×</button>
        </div>
        <div class="sf-guest-body">
          <div class="sf-guest-ico" data-role="icon">🔒</div>
          <div class="sf-guest-title" id="sfGuestTitle" data-role="title">Login required</div>
          <div class="sf-guest-text" data-role="text">Please sign in to continue.</div>
          <div class="sf-guest-sub" data-role="sub">Members only access.</div>
          <div class="sf-guest-actions">
            <button type="button" class="sf-guest-btn sf-guest-btn-primary" data-action="primary">Login</button>
            <button type="button" class="sf-guest-btn sf-guest-btn-ghost" data-action="secondary">Sign Up</button>
          </div>
        </div>
        <div class="sf-guest-foot">Members-only access</div>
      </div>
    `;

    popup.addEventListener('click', function(event){
      if (event.target === popup) closePopup();
    });
    popup.querySelector('[data-close="true"]').addEventListener('click', closePopup);
    popup.querySelector('[data-action="primary"]').addEventListener('click', function(){
      window.location.href = 'login.html';
    });
    popup.querySelector('[data-action="secondary"]').addEventListener('click', function(){
      window.location.href = 'signup.html';
    });

    document.body.appendChild(popup);
    return popup;
  }

  function openPopup(options){
    ensureStyles();
    const popup = buildPopup();
    const icon = popup.querySelector('[data-role="icon"]');
    const title = popup.querySelector('[data-role="title"]');
    const text = popup.querySelector('[data-role="text"]');
    const sub = popup.querySelector('[data-role="sub"]');
    const primary = popup.querySelector('[data-action="primary"]');
    const secondary = popup.querySelector('[data-action="secondary"]');

    if (icon) icon.textContent = options && options.icon ? options.icon : '🔒';
    if (title) title.textContent = options && options.title ? options.title : 'Login required';
    if (text) text.textContent = options && options.text ? options.text : 'Please sign in to continue.';
    if (sub) sub.textContent = options && options.sub ? options.sub : 'Members only access.';
    if (primary) primary.textContent = options && options.primaryLabel ? options.primaryLabel : 'Login';
    if (secondary) secondary.textContent = options && options.secondaryLabel ? options.secondaryLabel : 'Sign Up';

    popup.classList.add('on');
    document.body.style.overflow = 'hidden';
    return popup;
  }

  function closePopup(){
    const popup = document.getElementById('sfGuestPopup');
    if (!popup) return;
    popup.classList.remove('on');
    document.body.style.overflow = '';
  }

  window.SF_GUEST = {
    open: openPopup,
    close: closePopup,
    buildPopup: buildPopup
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ensureStyles, { once: true });
  } else {
    ensureStyles();
  }
})();
