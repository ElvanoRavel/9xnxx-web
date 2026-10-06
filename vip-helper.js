(function(){
  'use strict';

  // ============================================================
  //  CUSTOM SVG OCCULT SYMBOLS (no Unicode dependency)
  // ============================================================
  const EMOJI_CHARS = {
    none: '',

    // 1. SKULL — white realistic skull, red glowing eyes
    skull:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 2C7.6 2 4 5.3 4 9.8v2.8c0 1.3.7 2.4 1.8 3l.2 2.4h1v2.5c0 .4.3.7.7.7h.8c.4 0 .7-.3.7-.7V18h3.6v2.5c0 .4.3.7.7.7h.8c.4 0 .7-.3.7-.7V18h1l.2-2.4c1.1-.6 1.8-1.7 1.8-3V9.8C20 5.3 16.4 2 12 2z" fill="#d8d8e0" stroke="#5a5a65" stroke-width="0.4" stroke-linejoin="round"/>' +
        '<circle cx="9" cy="10" r="2" fill="#0a0a0a"/>' +
        '<circle cx="15" cy="10" r="2" fill="#0a0a0a"/>' +
        '<circle cx="9" cy="10" r="0.9" fill="#d92626"/>' +
        '<circle cx="15" cy="10" r="0.9" fill="#d92626"/>' +
        '<path d="M10.6 13.5l1.4-1 1.4 1v2h-2.8z" fill="#0a0a0a"/>' +
        '<line x1="8.5" y1="16" x2="8.5" y2="17.2" stroke="#5a5a65" stroke-width="0.5"/>' +
        '<line x1="15.5" y1="16" x2="15.5" y2="17.2" stroke="#5a5a65" stroke-width="0.5"/>' +
      '</svg>',

    // 2. PENTAGRAM — 5-pointed star, red
    pentagram:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="12" cy="12" r="10.5" fill="none" stroke="#8a0000" stroke-width="1"/>' +
        '<path d="M12 2 L17.88 20.09 L2.49 8.91 L21.51 8.91 L6.12 20.09 Z" fill="none" stroke="#d92626" stroke-width="1.5" stroke-linejoin="miter"/>' +
        '<circle cx="12" cy="12" r="0.9" fill="#d92626"/>' +
      '</svg>',

    // 3. BAPHOMET — goat head in inverted pentagram (gold)
    baphomet:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="12" cy="12" r="10.5" fill="none" stroke="#8a6f1a" stroke-width="1"/>' +
        '<path d="M8 3 L8 8 L3.5 15.5 Z" fill="none" stroke="#c9a227" stroke-width="0.7"/>' +
        '<path d="M16 3 L16 8 L20.5 15.5 Z" fill="none" stroke="#c9a227" stroke-width="0.7"/>' +
        '<path d="M9 20 L12 22 L15 20" fill="none" stroke="#c9a227" stroke-width="0.7"/>' +
        '<path d="M12 5 Q8 5 7 8 Q7 11 9 12 L8 16 L10 15 L10 18 L12 20 L14 18 L14 15 L16 16 L15 12 Q17 11 17 8 Q16 5 12 5 Z" fill="#c9a227" stroke="#8a6f1a" stroke-width="0.4" stroke-linejoin="round"/>' +
        '<circle cx="10" cy="10" r="0.7" fill="#0a0a0a"/>' +
        '<circle cx="14" cy="10" r="0.7" fill="#0a0a0a"/>' +
        '<path d="M11 13 L12 13.5 L13 13" fill="none" stroke="#0a0a0a" stroke-width="0.4"/>' +
      '</svg>',

    // 4. OUROBOROS — serpent eating tail (emerald)
    ouroboros:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 2 A10 10 0 1 1 4 19.5" fill="none" stroke="#3d8a3d" stroke-width="2.2" stroke-linecap="round"/>' +
        '<path d="M12 2 A10 10 0 0 0 4 19.5" fill="none" stroke="#5aad5a" stroke-width="1.2" stroke-dasharray="1.5 1.5" stroke-linecap="round" opacity="0.5"/>' +
        '<circle cx="4" cy="19.5" r="2" fill="#3d8a3d" stroke="#2a6a2a" stroke-width="0.4"/>' +
        '<circle cx="3.3" cy="19" r="0.5" fill="#d92626"/>' +
        '<circle cx="12" cy="22" r="0.5" fill="#5aad5a" opacity="0.7"/>' +
        '<circle cx="22" cy="12" r="0.5" fill="#5aad5a" opacity="0.7"/>' +
      '</svg>',

    // 5. EYE OF PROVIDENCE — eye in triangle (blue)
    providence:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 2 L22 20 L2 20 Z" fill="none" stroke="#4aa8ff" stroke-width="1.4" stroke-linejoin="round"/>' +
        '<ellipse cx="12" cy="14.5" rx="5" ry="3" fill="#0d0d1a" stroke="#4aa8ff" stroke-width="0.6"/>' +
        '<circle cx="12" cy="14.5" r="1.8" fill="#4aa8ff"/>' +
        '<circle cx="12" cy="14.5" r="0.8" fill="#0a0a0a"/>' +
        '<circle cx="12.5" cy="14" r="0.4" fill="#fff"/>' +
        '<g stroke="#4aa8ff" stroke-width="0.5" stroke-linecap="round" opacity="0.7">' +
          '<line x1="12" y1="0.5" x2="12" y2="1.5"/>' +
          '<line x1="21" y1="20" x2="22.5" y2="21"/>' +
          '<line x1="3" y1="20" x2="1.5" y2="21"/>' +
        '</g>' +
      '</svg>',

    // 6. ALCHEMICAL FIRE — up-pointing triangle (orange)
    fire:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 3 L21.5 20 L2.5 20 Z" fill="#ff5a00" stroke="#ff9500" stroke-width="0.8" stroke-linejoin="round"/>' +
        '<path d="M12 8 L18.5 20 L5.5 20 Z" fill="#ff9500" opacity="0.6"/>' +
        '<path d="M12 13 L15.5 20 L8.5 20 Z" fill="#ffd23d" opacity="0.85"/>' +
      '</svg>',

    // 7. MERCURY — alchemical Mercury symbol (silver-blue)
    mercury:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="12" cy="6" r="2.7" fill="none" stroke="#c8d4e8" stroke-width="1.3"/>' +
        '<line x1="12" y1="8.7" x2="12" y2="21" stroke="#c8d4e8" stroke-width="1.4" stroke-linecap="round"/>' +
        '<path d="M9 11.5 Q12 9.5 12 12 Q12 9.5 15 11.5" fill="none" stroke="#c8d4e8" stroke-width="1.3" stroke-linecap="round"/>' +
        '<line x1="8.5" y1="17" x2="15.5" y2="17" stroke="#c8d4e8" stroke-width="1.3" stroke-linecap="round"/>' +
        '<line x1="12" y1="14.5" x2="12" y2="19.5" stroke="#c8d4e8" stroke-width="1.3" stroke-linecap="round"/>' +
      '</svg>',

    // 8. SULPHUR / LEVIATHAN CROSS (dark red)
    sulphur:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="12" y1="2" x2="12" y2="13" stroke="#a81c1c" stroke-width="1.7" stroke-linecap="round"/>' +
        '<line x1="5" y1="6" x2="19" y2="6" stroke="#a81c1c" stroke-width="1.7" stroke-linecap="round"/>' +
        '<line x1="5" y1="10" x2="19" y2="10" stroke="#a81c1c" stroke-width="1.7" stroke-linecap="round"/>' +
        '<path d="M8 17 C8 14 11 14 12 17 C13 20 16 20 16 17 C16 14 13 14 12 17 C11 20 8 20 8 17 Z" fill="none" stroke="#d92626" stroke-width="1.5" stroke-linejoin="round"/>' +
      '</svg>',

    // 9. TRIDENT — three-pronged (cyan)
    trident:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="12" y1="3" x2="12" y2="21" stroke="#4aa8ff" stroke-width="1.8" stroke-linecap="round"/>' +
        '<path d="M5 6 L5 10 Q5 14 12 14 Q19 14 19 10 L19 6" fill="none" stroke="#4aa8ff" stroke-width="1.6" stroke-linecap="round"/>' +
        '<path d="M5 6 L3 3 M5 6 L7 3" stroke="#4aa8ff" stroke-width="1.4" stroke-linecap="round" fill="none"/>' +
        '<path d="M19 6 L17 3 M19 6 L21 3" stroke="#4aa8ff" stroke-width="1.4" stroke-linecap="round" fill="none"/>' +
        '<path d="M12 3 L10 1 M12 3 L14 1" stroke="#4aa8ff" stroke-width="1.4" stroke-linecap="round" fill="none"/>' +
        '<line x1="9" y1="21" x2="15" y2="21" stroke="#4aa8ff" stroke-width="1.5" stroke-linecap="round"/>' +
      '</svg>',

    // 10. ANKH — Egyptian cross of life (gold)
    ankh:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<ellipse cx="12" cy="6" rx="3.5" ry="4.5" fill="none" stroke="#e6c34d" stroke-width="1.6"/>' +
        '<line x1="12" y1="10.5" x2="12" y2="22" stroke="#e6c34d" stroke-width="1.7" stroke-linecap="round"/>' +
        '<line x1="6" y1="14.5" x2="18" y2="14.5" stroke="#e6c34d" stroke-width="1.7" stroke-linecap="round"/>' +
      '</svg>',

    // 11. ROD OF ASCLEPIUS — staff with serpent (green)
    asclepius:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="12" y1="3" x2="12" y2="22" stroke="#3d8a3d" stroke-width="1.7" stroke-linecap="round"/>' +
        '<circle cx="12" cy="2" r="1.3" fill="#3d8a3d"/>' +
        '<path d="M7 5 Q12 7 17 5 M7 8 Q12 10 17 8 M7 11 Q12 13 17 11 M7 14 Q12 16 17 14 M7 17 Q12 19 17 17" stroke="#7dff50" stroke-width="1.3" fill="none" stroke-linecap="round" opacity="0.9"/>' +
      '</svg>',

    // 12. ANARCHY — A in circle (white)
    anarchy:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<circle cx="12" cy="12" r="10" fill="none" stroke="#e0e0e0" stroke-width="1.6"/>' +
        '<path d="M7 20 L12 3 L17 20 M9.5 13 L14.5 13" fill="none" stroke="#e0e0e0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<line x1="4" y1="4" x2="20" y2="20" stroke="#e0e0e0" stroke-width="1.6" stroke-linecap="round"/>' +
      '</svg>',

    // 13. CHAOS STAR — 8-pointed arrow star (purple)
    chaos:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<g stroke="#c084fc" stroke-width="1.5" stroke-linecap="round" fill="none">' +
          '<line x1="12" y1="1.5" x2="12" y2="22.5"/>' +
          '<line x1="1.5" y1="12" x2="22.5" y2="12"/>' +
          '<line x1="4.6" y1="4.6" x2="19.4" y2="19.4"/>' +
          '<line x1="19.4" y1="4.6" x2="4.6" y2="19.4"/>' +
        '</g>' +
        '<circle cx="12" cy="12" r="1.8" fill="#c084fc"/>' +
        '<circle cx="12" cy="12" r="0.7" fill="#1a1a1a"/>' +
      '</svg>',

    // 14. HEXAGRAM — 6-pointed star (blue)
    hexagram:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 2 L21 17 L3 17 Z" fill="none" stroke="#4aa8ff" stroke-width="1.5" stroke-linejoin="round"/>' +
        '<path d="M12 22 L3 7 L21 7 Z" fill="none" stroke="#4aa8ff" stroke-width="1.5" stroke-linejoin="round"/>' +
        '<circle cx="12" cy="12" r="3.5" fill="none" stroke="#4aa8ff" stroke-width="0.7" opacity="0.6"/>' +
      '</svg>',

    // 15. LEVIATHAN CROSS — cross with infinity (purple)
    leviathan:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="12" y1="2" x2="12" y2="12.5" stroke="#a855f7" stroke-width="1.7" stroke-linecap="round"/>' +
        '<line x1="5" y1="6" x2="19" y2="6" stroke="#a855f7" stroke-width="1.7" stroke-linecap="round"/>' +
        '<line x1="5" y1="10" x2="19" y2="10" stroke="#a855f7" stroke-width="1.7" stroke-linecap="round"/>' +
        '<path d="M8 17.5 C8 14.5 11 14.5 12 17.5 C13 20.5 16 20.5 16 17.5 C16 14.5 13 14.5 12 17.5 C11 20.5 8 20.5 8 17.5 Z" fill="none" stroke="#a855f7" stroke-width="1.4" stroke-linejoin="round"/>' +
      '</svg>',

    // 16. DEATH'S HEAD — skull with crossbones (bone white)
    deathshead:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<g stroke="#b8b8c0" stroke-width="1.6" stroke-linecap="round">' +
          '<line x1="5.5" y1="13.5" x2="18.5" y2="22"/>' +
          '<line x1="18.5" y1="13.5" x2="5.5" y2="22"/>' +
        '</g>' +
        '<circle cx="5.5" cy="13.5" r="1.1" fill="#b8b8c0"/>' +
        '<circle cx="18.5" cy="13.5" r="1.1" fill="#b8b8c0"/>' +
        '<circle cx="5.5" cy="22" r="1.1" fill="#b8b8c0"/>' +
        '<circle cx="18.5" cy="22" r="1.1" fill="#b8b8c0"/>' +
        '<path d="M12 1C9.2 1 7.2 3 7.2 5.4v1.8c0 .7.4 1.3 1 1.7l.2 1.4h.8v1.3c0 .3.2.5.5.5h.5c.3 0 .5-.2.5-.5V10h2.6v1.6c0 .3.2.5.5.5h.5c.3 0 .5-.2.5-.5V9.3h.8l.2-1.4c.6-.4 1-1 1-1.7V5.4C16.8 3 14.8 1 12 1z" fill="#e0e0e8" stroke="#5a5a65" stroke-width="0.4" stroke-linejoin="round"/>' +
        '<circle cx="10" cy="5" r="1.2" fill="#0a0a0a"/>' +
        '<circle cx="14" cy="5" r="1.2" fill="#0a0a0a"/>' +
        '<circle cx="10" cy="5" r="0.45" fill="#d92626"/>' +
        '<circle cx="14" cy="5" r="0.45" fill="#d92626"/>' +
        '<path d="M11.2 7.2 L12 6.8 L12.8 7.2 L12.8 8.3 L11.2 8.3 Z" fill="#0a0a0a"/>' +
      '</svg>',

    // 17. ALL-SEEING SUN — sun with eye (amber)
    sun:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<g stroke="#ffb347" stroke-width="1.2" stroke-linecap="round">' +
          '<line x1="12" y1="0.5" x2="12" y2="3"/>' +
          '<line x1="12" y1="21" x2="12" y2="23.5"/>' +
          '<line x1="0.5" y1="12" x2="3" y2="12"/>' +
          '<line x1="21" y1="12" x2="23.5" y2="12"/>' +
          '<line x1="3.5" y1="3.5" x2="5.5" y2="5.5"/>' +
          '<line x1="18.5" y1="18.5" x2="20.5" y2="20.5"/>' +
          '<line x1="20.5" y1="3.5" x2="18.5" y2="5.5"/>' +
          '<line x1="5.5" y1="18.5" x2="3.5" y2="20.5"/>' +
        '</g>' +
        '<circle cx="12" cy="12" r="7" fill="#8a4a1a" stroke="#c9a227" stroke-width="1"/>' +
        '<ellipse cx="12" cy="12" rx="4" ry="2.4" fill="#fff8dc"/>' +
        '<circle cx="12" cy="12" r="1.6" fill="#c9a227"/>' +
        '<circle cx="12" cy="12" r="0.7" fill="#0a0a0a"/>' +
        '<circle cx="12.4" cy="11.6" r="0.3" fill="#fff"/>' +
      '</svg>',

    // 18. SIGIL OF LUCIFER — stylized (crimson)
    lucifer:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<path d="M12 3 L12 21" stroke="#a81c1c" stroke-width="1.5" stroke-linecap="round" fill="none"/>' +
        '<path d="M4.5 7 L12 12.5 L19.5 7" fill="none" stroke="#a81c1c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<path d="M4.5 17 L12 11.5 L19.5 17" fill="none" stroke="#a81c1c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<circle cx="12" cy="12" r="0.9" fill="#d92626"/>' +
      '</svg>',

    // 19. YGGDRASIL — world tree (green)
    yggdrasil:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="12" y1="5" x2="12" y2="21.5" stroke="#5a3a1a" stroke-width="2" stroke-linecap="round"/>' +
        '<path d="M12 21.5 Q8 20 5.5 21.5 M12 21.5 Q16 20 18.5 21.5" stroke="#5a3a1a" stroke-width="1.3" fill="none" stroke-linecap="round"/>' +
        '<path d="M12 8 Q7 6.5 4 4.5 M12 8 Q17 6.5 20 4.5 M12 11.5 Q8 10.5 5 11.5 M12 11.5 Q16 10.5 19 11.5 M12 5.5 Q10 3.5 8 2.5 M12 5.5 Q14 3.5 16 2.5" stroke="#4a9e4a" stroke-width="1.3" fill="none" stroke-linecap="round"/>' +
        '<circle cx="12" cy="4.5" r="3" fill="#3d8a3d" opacity="0.75"/>' +
        '<circle cx="6" cy="5.5" r="2.2" fill="#4a9e4a" opacity="0.75"/>' +
        '<circle cx="18" cy="5.5" r="2.2" fill="#4a9e4a" opacity="0.75"/>' +
        '<circle cx="3.5" cy="3.5" r="1.8" fill="#3d8a3d" opacity="0.65"/>' +
        '<circle cx="20.5" cy="3.5" r="1.8" fill="#3d8a3d" opacity="0.65"/>' +
      '</svg>',

    // 20. MALEFICIUM — X with dot star (red)
    maleficium:
      '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
        '<g stroke="#d92626" stroke-width="1.5" stroke-linecap="round">' +
          '<line x1="4.5" y1="4.5" x2="19.5" y2="19.5"/>' +
          '<line x1="19.5" y1="4.5" x2="4.5" y2="19.5"/>' +
        '</g>' +
        '<circle cx="12" cy="12" r="2.2" fill="#a81c1c" stroke="#d92626" stroke-width="0.5"/>' +
        '<circle cx="12" cy="12" r="0.8" fill="#1a1a1a"/>' +
        '<circle cx="12" cy="1.5" r="0.9" fill="#a81c1c"/>' +
        '<circle cx="12" cy="22.5" r="0.9" fill="#a81c1c"/>' +
        '<circle cx="1.5" cy="12" r="0.9" fill="#a81c1c"/>' +
        '<circle cx="22.5" cy="12" r="0.9" fill="#a81c1c"/>' +
      '</svg>'
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
