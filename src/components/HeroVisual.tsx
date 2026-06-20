const CYAN = "#5eead4";
const AMBER = "#f5a524";
 
export default function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse 94% 94% at 56% 50%, #000 76%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse 94% 94% at 56% 50%, #000 76%, transparent 100%)",
      }}
    >
      <defs>
        <radialGradient id="hvGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={CYAN} stopOpacity="0.5" />
          <stop offset="1" stopColor={CYAN} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hvGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.06" />
          <stop offset="1" stopColor={CYAN} stopOpacity="0.015" />
        </linearGradient>
        <filter id="hvSoft" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
 
      <style>{`
        .hvSpinA, .hvSpinB, .hvSpinC, .hvCore {
          transform-box: view-box; transform-origin: 430px 300px;
        }
        .hvSpinA { animation: hvRot 42s linear infinite; }
        .hvSpinB { animation: hvRotR 58s linear infinite; }
        .hvSpinC { animation: hvRot 34s linear infinite; }
        .hvCore  { animation: hvBreathe 4.2s ease-in-out infinite; }
        .hvGlow  { animation: hvPulse 4.2s ease-in-out infinite; }
        .hvFlow  { animation: hvDash 3s linear infinite; }
        @keyframes hvRot    { to { transform: rotate(360deg); } }
        @keyframes hvRotR   { to { transform: rotate(-360deg); } }
        @keyframes hvPulse  { 0%,100% { opacity:.65 } 50% { opacity:1 } }
        @keyframes hvBreathe{ 0%,100% { transform: scale(1) } 50% { transform: scale(1.04) } }
        @keyframes hvDash   { to { stroke-dashoffset: -36; } }
        @media (prefers-reduced-motion: reduce) {
          .hvSpinA,.hvSpinB,.hvSpinC,.hvCore,.hvGlow,.hvFlow { animation: none !important; }
        }
      `}</style>
 
      {/* orbit rings */}
      <g fill="none" stroke={CYAN} strokeOpacity="0.12">
        <circle cx="430" cy="300" r="110" />
        <circle cx="430" cy="300" r="162" />
        <circle cx="430" cy="300" r="210" />
      </g>
 
      {/* flowing connection lines: core -> fragments */}
      <g className="hvFlow" stroke={CYAN} strokeOpacity="0.32" strokeWidth="1" fill="none" strokeDasharray="4 8">
        <line x1="430" y1="300" x2="250" y2="190" />
        <line x1="430" y1="300" x2="225" y2="408" />
        <line x1="430" y1="300" x2="592" y2="405" />
        <line x1="430" y1="300" x2="595" y2="185" />
      </g>
 
      {/* orbiting nodes */}
      <g className="hvSpinA" fill={CYAN} filter="url(#hvSoft)">
        <circle cx="540" cy="300" r="4" />
      </g>
      <g className="hvSpinB" fill={CYAN} filter="url(#hvSoft)">
        <circle cx="430" cy="138" r="3.4" fillOpacity="0.85" />
      </g>
      <g className="hvSpinC" filter="url(#hvSoft)">
        <circle cx="320" cy="300" r="3.6" fill={AMBER} />
      </g>
 
      {/* terminal fragment */}
      <g transform="translate(200,168)">
        <rect x="-14" y="-16" width="150" height="78" rx="10" fill="url(#hvGlass)" stroke={CYAN} strokeOpacity="0.13" />
        <text x="2" y="4" fontFamily="monospace" fontSize="11" fill={CYAN} fillOpacity="0.75">{">_"}</text>
        <rect x="20" y="-3" width="58" height="5" rx="2.5" fill={CYAN} fillOpacity="0.7" />
        <rect x="84" y="-3" width="30" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.2" />
        <rect x="2" y="14" width="44" height="5" rx="2.5" fill={AMBER} fillOpacity="0.6" />
        <rect x="52" y="14" width="62" height="5" rx="2.5" fill={CYAN} fillOpacity="0.4" />
        <rect x="2" y="31" width="80" height="5" rx="2.5" fill={CYAN} fillOpacity="0.55" />
        <rect x="2" y="48" width="50" height="5" rx="2.5" fill="#ffffff" fillOpacity="0.18" />
      </g>
 
      {/* metrics fragment */}
      <g transform="translate(150,388)">
        <rect x="-8" y="-18" width="150" height="74" rx="10" fill="url(#hvGlass)" stroke={CYAN} strokeOpacity="0.13" />
        <polyline points="6,8 26,-6 46,2 66,-12 86,-4 110,-16" fill="none" stroke={CYAN} strokeOpacity="0.65" strokeWidth="1.6" />
        <rect x="8" y="22" width="13" height="18" rx="2.5" fill={CYAN} fillOpacity="0.55" />
        <rect x="28" y="14" width="13" height="26" rx="2.5" fill={CYAN} fillOpacity="0.75" />
        <rect x="48" y="24" width="13" height="16" rx="2.5" fill={AMBER} fillOpacity="0.8" />
        <rect x="68" y="10" width="13" height="30" rx="2.5" fill={CYAN} fillOpacity="0.6" />
      </g>
 
      {/* status / mini donut fragment */}
      <g transform="translate(592,405)">
        <circle cx="0" cy="0" r="22" fill="none" stroke={CYAN} strokeOpacity="0.16" strokeWidth="7" />
        <path d="M 0 -22 A 22 22 0 0 1 19 11" fill="none" stroke={CYAN} strokeWidth="7" strokeLinecap="round" />
        <path d="M 19 11 A 22 22 0 0 1 -14 17" fill="none" stroke={AMBER} strokeOpacity="0.9" strokeWidth="7" strokeLinecap="round" />
        <circle cx="0" cy="0" r="3" fill={CYAN} />
      </g>
 
      {/* mini architecture cluster */}
      <g transform="translate(595,185)">
        <g stroke={CYAN} strokeOpacity="0.3" strokeWidth="1" fill="none">
          <line x1="0" y1="0" x2="-26" y2="-18" /><line x1="0" y1="0" x2="24" y2="-14" />
          <line x1="0" y1="0" x2="-16" y2="22" /><line x1="0" y1="0" x2="22" y2="20" />
        </g>
        <g fill={CYAN}>
          <circle cx="0" cy="0" r="3.5" />
          <circle cx="-26" cy="-18" r="2.6" fillOpacity="0.8" /><circle cx="24" cy="-14" r="2.6" fill={AMBER} />
          <circle cx="-16" cy="22" r="2.6" fillOpacity="0.75" /><circle cx="22" cy="20" r="2.6" fillOpacity="0.75" />
        </g>
      </g>
 
      {/* core glow + A */}
      <circle className="hvGlow" cx="430" cy="300" r="66" fill="url(#hvGlow)" />
      <g className="hvCore" filter="url(#hvSoft)">
        <polygon points="430,266 460,283 460,317 430,334 400,317 400,283" fill="url(#hvGlass)" stroke={CYAN} strokeOpacity="0.75" strokeWidth="1.5" />
        <path d="M 419 314 L 430 282 L 441 314" fill="none" stroke={CYAN} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="423" y1="303" x2="437" y2="303" stroke={CYAN} strokeWidth="2.6" strokeLinecap="round" />
        <circle cx="430" cy="282" r="2.6" fill={AMBER} />
      </g>
    </svg>
  );
}