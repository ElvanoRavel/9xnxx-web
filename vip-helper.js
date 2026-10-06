(function(){
  'use strict';

  // ============================================================
  //  CUSTOM SVG EMOJIS (replaces OS emoji characters)
  // ============================================================
  const EMOJI_CHARS = {
    none: '',

    skull: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7.6 2 4 5.3 4 9.8v2.8c0 1.3.7 2.4 1.8 3l.2 2.4h1v2.5c0 .4.3.7.7.7h.8c.4 0 .7-.3.7-.7V18h3.6v2.5c0 .4.3.7.7.7h.8c.4 0 .7-.3.7-.7V18h1l.2-2.4c1.1-.6 1.8-1.7 1.8-3V9.8C20 5.3 16.4 2 12 2z" fill="#e8e8e8"/><circle cx="9" cy="10" r="1.9" fill="#d92626"/><circle cx="15" cy="10" r="1.9" fill="#d92626"/><path d="M10.6 13.5l1.4-1 1.4 1v2h-2.8z" fill="#1a1a1a"/><line x1="8" y1="16" x2="8" y2="17.2" stroke="#888" stroke-width=".5"/><line x1="16" y1="16" x2="16" y2="17.2" stroke="#888" stroke-width=".5"/></svg>',

    crossbones: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke="#e8e8e8" stroke-width="1.9" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></g><circle cx="6" cy="6" r="2" fill="#e8e8e8"/><circle cx="18" cy="6" r="2" fill="#e8e8e8"/><circle cx="6" cy="18" r="2" fill="#e8e8e8"/><circle cx="18" cy="18" r="2" fill="#e8e8e8"/><circle cx="5" cy="5" r=".8" fill="#1a1a1a"/><circle cx="19" cy="5" r=".8" fill="#1a1a1a"/><circle cx="5" cy="19" r=".8" fill="#1a1a1a"/><circle cx="19" cy="19" r=".8" fill="#1a1a1a"/></svg>',

    fire: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1.5c.6 3 3.5 5 3.5 9 0 2-1 3-1.5 3.8.6.3 1.5.7 1.5 2.7 0 3-2 5.5-3.5 6-1.5-.5-3.5-3-3.5-6 0-2 .9-2.4 1.5-2.7-.5-.8-1.5-1.8-1.5-3.8 0-2 1.5-3.5 2-5 .4 1.2 1 2.2 1.5 2.5.2-1.5-.3-3.5 0-6.5z" fill="#ff5a00"/><path d="M12 8.5c.3 1.2 1.5 2.2 1.5 4 0 2.5-1.5 4.5-1.5 4.5s-1.5-2-1.5-4.5c0-1.8 1.2-2.8 1.5-4z" fill="#ffd23d"/></svg>',

    lightning: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 1.5L4 13.5h6.5L9 22.5l10-12h-6.5z" fill="#ffd23d" stroke="#ff9500" stroke-width=".6" stroke-linejoin="round"/></svg>',

    dagger: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.2 10-2.2 1.2L9.8 12z" fill="#d0d0d8" stroke="#8a8a95" stroke-width=".4" stroke-linejoin="round"/><rect x="10" y="13.2" width="4" height="1.6" rx=".3" fill="#8a6f1a" stroke="#5a4020" stroke-width=".3"/><rect x="11.3" y="14.8" width="1.4" height="5" fill="#5a4020"/><circle cx="12" cy="21" r="1.8" fill="#d0d0d8" stroke="#8a8a95" stroke-width=".4"/></svg>',

    swords: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke="#d0d0d8" stroke-width="1.6" stroke-linecap="round"><line x1="5" y1="4" x2="17" y2="16"/><line x1="19" y1="4" x2="7" y2="16"/></g><circle cx="5" cy="4" r="1.4" fill="#8a6f1a"/><circle cx="19" cy="4" r="1.4" fill="#8a6f1a"/><line x1="4" y1="18" x2="8" y2="22" stroke="#8a6f1a" stroke-width="2" stroke-linecap="round"/><line x1="20" y1="18" x2="16" y2="22" stroke="#8a6f1a" stroke-width="2" stroke-linecap="round"/></svg>',

    spider: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke="#1a1a1a" stroke-width="1.3" stroke-linecap="round" fill="none"><path d="M8.5 11 L3 8.5"/><path d="M8.5 14 L2.5 14"/><path d="M8.5 16.5 L3.5 19.5"/><path d="M9 18 L5 22"/><path d="M15.5 11 L21 8.5"/><path d="M15.5 14 L21.5 14"/><path d="M15.5 16.5 L20.5 19.5"/><path d="M15 18 L19 22"/></g><ellipse cx="12" cy="15" rx="3" ry="4" fill="#2a2a2a"/><ellipse cx="12" cy="15" rx="1.5" ry="2.5" fill="#d92626" opacity=".6"/><circle cx="12" cy="9.5" r="2" fill="#1a1a1a"/><circle cx="11.3" cy="9" r=".5" fill="#d92626"/><circle cx="12.7" cy="9" r=".5" fill="#d92626"/></svg>',

    scorpion: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 9 Q5 11 5 14 Q5 19 10 19 L13 19 Q15 19 15.5 17 L17 13 Q18 10 16 8.5" stroke="#c9a227" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="16" cy="8" r="1.2" fill="#c9a227"/><line x1="17.5" y1="6.5" x2="19.5" y2="5.5" stroke="#c9a227" stroke-width="1.2" stroke-linecap="round"/><line x1="17.5" y1="8.5" x2="19.5" y2="9.5" stroke="#c9a227" stroke-width="1.2" stroke-linecap="round"/><path d="M7 9 L5.5 7 M7 9 L6 10.5" stroke="#c9a227" stroke-width="1.2" stroke-linecap="round"/><circle cx="5.5" cy="6.5" r=".8" fill="#c9a227"/><circle cx="5.5" cy="11" r=".8" fill="#c9a227"/></svg>',

    snake: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 4 Q6 7 10 7 L14 7 Q18 7 18 10 Q18 13 14 13 L10 13 Q6 13 6 16 Q6 19 10 19 L15 19" stroke="#4a9e4a" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="15" cy="19" r="1.5" fill="#4a9e4a"/><circle cx="15.3" cy="18.6" r=".4" fill="#d92626"/><path d="M16.2 19 L18 19.5" stroke="#d92626" stroke-width=".6" stroke-linecap="round"/></svg>',

    eagle: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4 L4 8 L6 9 L4 12 L8 11 L8 14 L12 12 L16 14 L16 11 L20 12 L18 9 L20 8 Z" fill="#c8a060"/><path d="M11 13 L12 20 L13 13 Z" fill="#8a6f1a"/><circle cx="12" cy="10" r=".6" fill="#1a1a1a"/><path d="M12 10 L14 10.5 L12 11 Z" fill="#ff9500"/></svg>',

    wolf: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5 L7 9 L12 8 L17 9 L19 5 L18 11 Q19 15 16 18 L12 19 L8 18 Q5 15 6 11 Z" fill="#555" stroke="#3a3a3a" stroke-width=".5" stroke-linejoin="round"/><path d="M5 5 L7 9 L4 7 Z" fill="#555"/><path d="M19 5 L17 9 L20 7 Z" fill="#555"/><circle cx="10" cy="12" r="1" fill="#d92626"/><circle cx="14" cy="12" r="1" fill="#d92626"/><path d="M11 15 L12 15.5 L13 15 Z" fill="#1a1a1a"/><path d="M10.5 15 L10 16.5 M13.5 15 L14 16.5" stroke="#fff" stroke-width=".5"/></svg>',

    bat: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8 Q10 6 6 6 Q3 6 2 8 Q4 9 5 11 Q6 13 8 12 Q9 13 12 14 Q15 13 16 12 Q18 13 19 11 Q20 9 22 8 Q21 6 18 6 Q14 6 12 8 Z" fill="#1a1a1a"/><circle cx="10.5" cy="9.5" r=".6" fill="#d92626"/><circle cx="13.5" cy="9.5" r=".6" fill="#d92626"/><path d="M11 10.5 L12 11.5 L13 10.5" stroke="#fff" stroke-width=".4" fill="none"/></svg>',

    eye: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12 Q6 6 12 6 Q18 6 22 12 Q18 18 12 18 Q6 18 2 12 Z" fill="#e8e8e8"/><circle cx="12" cy="12" r="4" fill="#4aa8ff"/><circle cx="12" cy="12" r="2" fill="#1a1a1a"/><circle cx="13" cy="11" r=".6" fill="#fff"/><line x1="2" y1="12" x2="0" y2="12" stroke="#8a8a95" stroke-width=".8"/><line x1="22" y1="12" x2="24" y2="12" stroke="#8a8a95" stroke-width=".8"/></svg>',

    diamond: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8 L12 2 L18 8 L12 22 Z" fill="#88ddff"/><path d="M6 8 L12 8 L12 2 Z" fill="#aaeeff"/><path d="M18 8 L12 8 L12 2 Z" fill="#66ccff"/><path d="M6 8 L12 8 L12 22 Z" fill="#44aaff" opacity=".8"/><path d="M18 8 L12 8 L12 22 Z" fill="#88ddff" opacity=".7"/><line x1="6" y1="8" x2="18" y2="8" stroke="#fff" stroke-width=".4" opacity=".6"/></svg>',

    chains: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="6" cy="12" rx="3" ry="2" fill="none" stroke="#8a8a95" stroke-width="1.8"/><ellipse cx="12" cy="12" rx="3" ry="2" fill="none" stroke="#c8c8d0" stroke-width="1.8"/><ellipse cx="18" cy="12" rx="3" ry="2" fill="none" stroke="#8a8a95" stroke-width="1.8"/></svg>',

    web: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke="#c8c8d0" stroke-width=".8" fill="none"><path d="M12 2 L12 22 M2 12 L22 12 M4 4 L20 20 M20 4 L4 20"/><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="9"/></g></svg>',

    radioactive: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#1a1a1a"/><circle cx="12" cy="12" r="2.5" fill="#c9a227"/><path d="M12 9.5 L12 2 A10 10 0 0 1 20.66 14 Z" fill="#c9a227"/><path d="M10.5 13.5 L4.5 20.5 A10 10 0 0 1 3.5 9 Z" fill="#c9a227"/><path d="M13.5 13.5 L20 20 A10 10 0 0 1 8 21 Z" fill="#c9a227"/></svg>',

    biohazard: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#1a1a1a"/><circle cx="12" cy="12" r="1.8" fill="#e0e0e0"/><path d="M12 10.5 Q9 10.5 8 13 Q7 15.5 8.5 17 Q10 18.5 12 17.5" fill="none" stroke="#e0e0e0" stroke-width="1.5"/><path d="M12 10.5 Q15 10.5 16 13 Q17 15.5 15.5 17 Q14 18.5 12 17.5" fill="none" stroke="#e0e0e0" stroke-width="1.5"/><circle cx="12" cy="8" r="2" fill="none" stroke="#e0e0e0" stroke-width="1.5"/></svg>',

    alarm: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 15 Q4 6 12 6 Q20 6 20 15 Z" fill="#d92626"/><path d="M4 15 L20 15 L21 18 L3 18 Z" fill="#8a0000"/><circle cx="12" cy="11" r="2.5" fill="#ff6666" opacity=".7"/><rect x="10" y="18" width="4" height="3" fill="#5a0000"/></svg>',

    trident: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2 L12 20" stroke="#c9a227" stroke-width="1.6" stroke-linecap="round"/><path d="M6 6 L6 10 Q6 14 12 14 Q18 14 18 10 L18 6" stroke="#c9a227" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M6 6 L4.5 4 M6 6 L7.5 4" stroke="#c9a227" stroke-width="1.3" stroke-linecap="round"/><path d="M18 6 L16.5 4 M18 6 L19.5 4" stroke="#c9a227" stroke-width="1.3" stroke-linecap="round"/><path d="M12 2 L10.5 4 M12 2 L13.5 4" stroke="#c9a227" stroke-width="1.3" stroke-linecap="round"/><path d="M10 20 L14 20" stroke="#c9a227" stroke-width="1.6" stroke-linecap="round"/></svg>'
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
