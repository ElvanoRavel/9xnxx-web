(function(){
  'use strict';

  const EMOJI_CHARS = {
    none: '',
    skull: '💀',
    crossbones: '☠️',
    fire: '🔥',
    lightning: '⚡',
    dagger: '🗡️',
    swords: '⚔️',
    spider: '🕷️',
    scorpion: '🦂',
    snake: '🐍',
    eagle: '🦅',
    wolf: '🐺',
    bat: '🦇',
    eye: '👁️',
    diamond: '💎',
    chains: '⛓️',
    web: '🕸️',
    radioactive: '☢️',
    biohazard: '☣️',
    alarm: '🚨',
    trident: '🔱'
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
