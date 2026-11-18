// =====================================================================
//  art.js — one original illustration per question (inline SVG, no internet needed)
//  ART[0] goes with question 1, ART[1] with question 2, etc.
//  None of them give away the answer.
// =====================================================================
(function () {
  const G = "#d4af37", C = "#f7f1e3", R = "#b5152b", D = "#0d3b2e", G2 = "#a8862a", S = "#1f7a5a";
  const svg = (body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" class="art-svg">${body}</svg>`;
  const q = (x, y, s) => `<text x="${x}" y="${y}" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="${s}" fill="${G}" text-anchor="middle">?</text>`;
  const horse = (tx, ty, sc, fill) => `<g transform="translate(${tx},${ty}) scale(${sc})"><path fill="${fill}" d="M60 210 L88 128 C78 102 86 66 112 48 L118 18 L132 42 L140 14 L150 46 C182 56 214 86 232 122 L244 148 C247 164 236 172 224 166 L190 148 C178 150 170 162 168 178 C166 196 172 210 180 222 Z"/><circle cx="168" cy="82" r="6" fill="${D}"/></g>`;
  const shoe = (tx, ty, sc, col) => `<g transform="translate(${tx},${ty}) scale(${sc})" fill="none" stroke="${col}"><path d="M30 120 L30 70 A50 50 0 0 1 130 70 L130 120" stroke-width="26" stroke-linecap="butt"/>${[[30,110],[30,82],[44,40],[116,40],[130,82],[130,110]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="4" fill="${D}" stroke="none"/>`).join("")}</g>`;
  const star = (x, y, r, col) => { let p = ""; for (let i = 0; i < 10; i++) { const a = Math.PI / 5 * i - Math.PI / 2, rr = i % 2 ? r * 0.45 : r; p += (i ? "L" : "M") + (x + rr * Math.cos(a)).toFixed(1) + " " + (y + rr * Math.sin(a)).toFixed(1); } return `<path d="${p}Z" fill="${col}"/>`; };
  const rose = (x, y, s) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M0 0 C-4 40 4 80 0 120" stroke="${S}" stroke-width="6" fill="none"/><path d="M0 60 C20 50 34 56 40 66 C24 72 10 70 0 60Z" fill="${S}"/><path d="M0 84 C-20 74 -34 80 -40 90 C-24 96 -10 94 0 84Z" fill="${S}"/><circle cx="0" cy="-8" r="26" fill="${R}"/><path d="M-26 -8 C-18 18 18 18 26 -8" fill="#8f0f21"/><path d="M-12 -14 C-6 -26 10 -24 12 -12 C6 -4 -6 -4 -12 -14Z" fill="#e0384f"/><path d="M-18 -4 C-10 8 10 8 18 -4" stroke="#8f0f21" stroke-width="3" fill="none"/></g>`;

  window.ART = [
    // 1  first Derby year — vintage tear-off calendar
    svg(`<rect x="110" y="40" width="180" height="210" rx="14" fill="${C}"/><rect x="110" y="40" width="180" height="62" rx="14" fill="${R}"/><rect x="110" y="86" width="180" height="16" fill="${R}"/>
      <circle cx="150" cy="40" r="9" fill="${G}"/><circle cx="250" cy="40" r="9" fill="${G}"/>
      <text x="200" y="84" font-family="Montserrat,Arial" font-weight="800" font-size="30" fill="${C}" text-anchor="middle" letter-spacing="6">MAY</text>
      <text x="200" y="200" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="96" fill="${D}" text-anchor="middle">17</text>
      <text x="200" y="236" font-family="Montserrat,Arial" font-weight="700" font-size="22" fill="${R}" text-anchor="middle">? ? ? ?</text>`),
    // 2  first winner — saddle cloth #1 with a winner's rosette
    svg(`<path d="M90 70 H250 C262 70 270 80 270 92 V230 C270 244 260 252 246 252 H110 C96 252 86 244 86 230 V92Z" fill="${C}"/>
      <path d="M86 92 C86 80 96 70 108 70 H250 C262 70 270 80 270 92 V110 H86Z" fill="${R}"/><rect x="86" y="236" width="184" height="10" fill="${G}"/>
      <text x="178" y="210" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="120" fill="${D}" text-anchor="middle">1</text>
      <circle cx="300" cy="110" r="44" fill="${R}"/><circle cx="300" cy="110" r="32" fill="${G}"/>
      <path d="M282 150 L270 210 L290 196 L300 214 L304 152Z" fill="${R}"/><path d="M318 150 L330 208 L312 196 L302 214 L298 152Z" fill="#8f0f21"/>
      ${q(300, 126, 44).replace(G, D)}`),
    // 3  the Churchill name — signpost
    svg(`<rect x="192" y="60" width="16" height="200" fill="${G2}"/><path d="M90 80 H290 L320 110 L290 140 H90Z" fill="${C}"/><path d="M310 160 H110 L80 190 L110 220 H310Z" fill="${C}"/>
      <text x="200" y="120" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="30" fill="${D}" text-anchor="middle">CHURCHILL</text>
      <text x="200" y="200" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="30" fill="${R}" text-anchor="middle">DOWNS</text>
      <ellipse cx="200" cy="262" rx="70" ry="8" fill="#082820"/>${q(345, 80, 56)}`),
    // 4  founder's grandfather — family tree
    svg(`<path d="M200 270 V150 M200 190 L120 120 M200 175 L280 110 M200 150 L200 90" stroke="${G2}" stroke-width="12" stroke-linecap="round" fill="none"/>
      ${[[120,110],[280,100],[200,70]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="36" fill="${S}"/><circle cx="${x}" cy="${y}" r="30" fill="${C}"/>`).join("")}
      <circle cx="120" cy="104" r="10" fill="${D}"/><path d="M104 128 C106 114 134 114 136 128Z" fill="${D}"/>
      <circle cx="280" cy="94" r="10" fill="${D}"/><path d="M264 118 C266 104 294 104 296 118Z" fill="${D}"/>
      ${q(200, 92, 52)}<ellipse cx="200" cy="272" rx="80" ry="8" fill="#082820"/>`),
    // 5  the Twin Spires
    svg(`<rect x="60" y="200" width="280" height="70" fill="${C}"/>${[80,120,160,200,240,280,320].map(x=>`<rect x="${x-10}" y="216" width="20" height="40" rx="10" fill="${D}"/>`).join("")}
      ${[130,270].map(x=>`<rect x="${x-26}" y="140" width="52" height="62" fill="${C}"/><rect x="${x-8}" y="156" width="16" height="30" rx="8" fill="${D}"/><path d="M${x-30} 142 L${x} 30 L${x+30} 142Z" fill="${C}"/><path d="M${x} 30 L${x} 142" stroke="#d9cfb5" stroke-width="3"/><circle cx="${x}" cy="24" r="6" fill="${G}"/>`).join("")}
      <rect x="50" y="192" width="300" height="12" fill="${G}"/>`),
    // 6  Derby distance — oval track + finish post
    svg(`<ellipse cx="200" cy="160" rx="170" ry="100" fill="${S}"/><ellipse cx="200" cy="160" rx="140" ry="72" fill="${D}"/><ellipse cx="200" cy="160" rx="155" ry="86" fill="none" stroke="${C}" stroke-width="3" stroke-dasharray="10 8"/>
      <rect x="196" y="232" width="8" height="40" fill="${C}"/><rect x="186" y="232" width="28" height="10" fill="${R}"/>
      <path d="M200 74 m-40 0 a40 40 0 1 0 1 0" fill="none"/><text x="200" y="176" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="54" fill="${G}" text-anchor="middle">? mi</text>`),
    // 7  rose garland
    svg(`${rose(130, 110, 1)}${rose(200, 80, 1.15)}${rose(270, 110, 1)}`),
    // 8  official drink — drinks menu card
    svg(`<rect x="120" y="30" width="160" height="240" rx="10" fill="${C}"/><rect x="132" y="42" width="136" height="216" rx="6" fill="none" stroke="${G}" stroke-width="3"/>
      <text x="200" y="82" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="26" fill="${R}" text-anchor="middle">Derby</text>
      <text x="200" y="106" font-family="Montserrat,Arial" font-weight="700" font-size="12" fill="${D}" text-anchor="middle" letter-spacing="2">OFFICIAL DRINK</text>
      <line x1="150" y1="120" x2="250" y2="120" stroke="${G}" stroke-width="2"/>${q(200, 222, 110).replace(G, D)}`),
    // 9  song — musical notes
    svg(`<path d="M60 230 Q200 170 340 230" stroke="${G2}" stroke-width="3" fill="none"/>
      <g fill="${C}"><ellipse cx="130" cy="200" rx="24" ry="17" transform="rotate(-20 130 200)"/><rect x="149" y="80" width="8" height="118"/>
      <ellipse cx="230" cy="180" rx="24" ry="17" transform="rotate(-20 230 180)"/><rect x="249" y="60" width="8" height="118"/><path d="M153 80 L253 60 L253 84 L153 104Z"/></g>
      <g fill="${G}"><ellipse cx="320" cy="130" rx="16" ry="11" transform="rotate(-20 320 130)"/><rect x="333" y="60" width="5" height="70"/><path d="M338 60 C350 72 360 76 356 96 C352 84 346 80 338 78Z"/></g>${q(70, 110, 70)}`),
    // 10 record time — stopwatch
    svg(`<rect x="186" y="28" width="28" height="22" rx="4" fill="${G}"/><circle cx="200" cy="160" r="110" fill="${G}"/><circle cx="200" cy="160" r="96" fill="${C}"/>
      ${Array.from({length:12},(_,i)=>{const a=i*Math.PI/6;return `<line x1="${200+80*Math.sin(a)}" y1="${160-80*Math.cos(a)}" x2="${200+90*Math.sin(a)}" y2="${160-90*Math.cos(a)}" stroke="${D}" stroke-width="4"/>`}).join("")}
      <line x1="200" y1="160" x2="196" y2="80" stroke="${R}" stroke-width="5" stroke-linecap="round"/><circle cx="200" cy="160" r="8" fill="${R}"/>
      <text x="200" y="215" font-family="Montserrat,Arial" font-weight="800" font-size="32" fill="${D}" text-anchor="middle">1:59.40</text>`),
    // 11 long shot — odds board
    svg(`<rect x="70" y="50" width="260" height="190" rx="12" fill="#111"/><rect x="82" y="62" width="236" height="166" rx="6" fill="#1b1b1b"/>
      <text x="200" y="98" font-family="Montserrat,Arial" font-weight="800" font-size="20" fill="${G}" text-anchor="middle" letter-spacing="4">ODDS</text>
      <text x="200" y="185" font-family="Courier New,monospace" font-weight="700" font-size="78" fill="#ffb347" text-anchor="middle">91-1</text>
      <rect x="100" y="240" width="16" height="40" fill="#333"/><rect x="284" y="240" width="16" height="40" fill="#333"/>`),
    // 12 fillies — horseshoe and a bow
    svg(`${shoe(60, 60, 1.25, C)}<g transform="translate(300,130)"><path d="M0 0 L-50 -28 L-50 28Z" fill="${R}"/><path d="M0 0 L50 -28 L50 28Z" fill="${R}"/><circle r="13" fill="#8f0f21"/><path d="M-6 10 L-22 70 M6 10 L22 70" stroke="${R}" stroke-width="10"/></g>${q(160, 150, 76)}`),
    // 13 jockey record — helmet + five stars
    svg(`<path d="M110 190 C110 110 160 70 220 70 C280 70 310 120 310 170 L310 190Z" fill="${R}"/><path d="M200 72 C190 110 192 150 200 190" stroke="${G}" stroke-width="14" fill="none"/>
      <path d="M100 190 H330 C330 204 320 210 300 210 H100Z" fill="#8f0f21"/><circle cx="220" cy="70" r="10" fill="${G}"/>
      ${[80,140,200,260,320].map(x=>star(x, 255, 20, G)).join("")}`),
    // 14 Oaks garland — wreath with a question mark
    svg(`${Array.from({length:14},(_,i)=>{const a=Math.PI*0.15+i*(Math.PI*1.7/13);const x=200+100*Math.cos(a+Math.PI/2),y=150+100*Math.sin(a+Math.PI/2);return `<ellipse cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" rx="24" ry="12" fill="${S}" transform="rotate(${(a*180/Math.PI+90).toFixed(0)} ${x.toFixed(1)} ${y.toFixed(1)})"/>`}).join("")}
      ${Array.from({length:7},(_,i)=>{const a=Math.PI*0.25+i*(Math.PI*1.5/6);return `<circle cx="${(200+100*Math.cos(a+Math.PI/2)).toFixed(1)}" cy="${(150+100*Math.sin(a+Math.PI/2)).toFixed(1)}" r="12" fill="${C}"/>`}).join("")}${q(200, 182, 100)}`),
    // 15 2026 Derby — trophy with "152"
    svg(`<path d="M130 50 H270 V100 C270 150 240 176 200 176 C160 176 130 150 130 100Z" fill="${G}"/>
      <path d="M130 70 C90 70 90 130 140 140 M270 70 C310 70 310 130 260 140" stroke="${G}" stroke-width="12" fill="none"/>
      <rect x="188" y="176" width="24" height="40" fill="${G2}"/><rect x="150" y="216" width="100" height="22" rx="4" fill="${G}"/><rect x="134" y="238" width="132" height="30" rx="4" fill="${G2}"/>
      <text x="200" y="124" font-family="Playfair Display,Georgia,serif" font-weight="900" font-size="46" fill="${D}" text-anchor="middle">152</text>`)
  ];
})();
