(function(){
  'use strict';

  // ============================================================
  //  OCCULT / HACKER-UNDERGROUND GLYPHS
  // ============================================================
  const EMOJI_CHARS = {
    none: '',

    skull:       '\u2620',      // ☠
    biohazard:   '\u2623',      // ☣
    radioactive: '\u2622',      // ☢
    fire:        '\u{1F702}',   // 🜂
    swords:      '\u2694',      // ⚔
    flag:        '\u2691',      // ⚑
    psi:         '\u03A8',      // Ψ
    omega:       '\u03A9',      // Ω
    delta:       '\u2206',      // ∆
    sigma:       '\u03A3',      // Σ
    dagger:      '\u2020',      // †
    mercury:     '\u263F',      // ☿
    benzene:     '\u232C',      // ⌬
    escape:      '\u238B',      // ⎋
    crosshair:   '\u2316',      // ⌖
    maltese:     '\u2720',      // ✠
    asclepius:   '\u2695',      // ⚕
    neptune:     '\u2646',      // ♆
    ankh:        '\u2625',      // ☥
    lightning:   '\u26A1'       // ⚡
  };

  const VALID_EFFECTS = [
    'neon','fire','ice','toxic','blood','glitch',
    'chrome','pulse','hologram','matrix','plasma','void',
    'shock','crimson','gold'
  ];

  function escapeHtml(str){
    if (str == null) return '';
    return String(str)
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;')
      .replace(/'/g,'&#39;');
  }

  function renderUsername(username, effect, emojiId){
    let html = '';
    const hasEffect = effect && effect !== 'none' && VALID_EFFECTS.indexOf(effect) !== -1;

    if (hasEffect){
      html += '<span class="ue-' + effect + '">' + escapeHtml(username) + '</span>';
    } else {
      html += escapeHtml(username);
    }

    if (emojiId && emojiId !== 'none' && EMOJI_CHARS[emojiId]){
      html += '<span class="uemoji uei-' + emojiId + '">' + EMOJI_CHARS[emojiId] + '</span>';
    }

    return html;
  }

  window.SF_VIP = {
    EMOJI_CHARS: EMOJI_CHARS,
    VALID_EFFECTS: VALID_EFFECTS,
    renderUsername: renderUsername,
    escapeHtml: escapeHtml
  };
})();
