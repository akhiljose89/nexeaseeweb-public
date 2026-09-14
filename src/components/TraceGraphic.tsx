/**
 * Hero illustration: a supply-chain "trace" — participants linked by a
 * flowing line, ending in a verified product. Pure SVG, animated via CSS.
 */
export function TraceGraphic() {
  const nodes = [
    { x: 70, y: 250, label: 'Producer' },
    { x: 200, y: 120, label: 'Regulator' },
    { x: 330, y: 250, label: 'Distributor' },
    { x: 460, y: 120, label: 'Retailer' },
  ]
  const path = 'M70 250 C 130 250, 140 120, 200 120 S 270 250, 330 250 S 400 120, 460 120 S 540 210, 560 220'

  return (
    <svg className="trace-art" viewBox="0 0 640 380" role="img" aria-label="Illustration of a traced supply chain from producer to verified product">
      <defs>
        <linearGradient id="tg-line" x1="0" x2="1">
          <stop offset="0" stopColor="#0f6e8c" />
          <stop offset="1" stopColor="#19c37d" />
        </linearGradient>
        <linearGradient id="tg-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16324c" />
          <stop offset="1" stopColor="#10263c" />
        </linearGradient>
      </defs>

      {/* Card backdrop */}
      <rect x="10" y="10" width="620" height="360" rx="26" fill="url(#tg-card)" stroke="rgba(255,255,255,0.08)" />

      {/* Base path + animated flow */}
      <path d={path} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="6" strokeLinecap="round" />
      <path d={path} className="flow" fill="none" stroke="url(#tg-line)" strokeWidth="3" strokeLinecap="round" />

      {/* Participant nodes */}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle className="pulse" cx={n.x} cy={n.y} r="22" fill="#19c37d" opacity="0.35" />
          <circle cx={n.x} cy={n.y} r="22" fill="#0b1b2b" stroke="#19c37d" strokeWidth="2" />
          <circle cx={n.x} cy={n.y} r="6" fill="#19c37d" />
          <text x={n.x} y={n.y + 44} textAnchor="middle" fontFamily="Manrope, system-ui, sans-serif" fontSize="13" fontWeight="700" fill="#c8d5e2">
            {n.label}
          </text>
        </g>
      ))}

      {/* Verified badge */}
      <g transform="translate(560 220)">
        <circle r="34" fill="#19c37d" opacity="0.18" />
        <circle r="26" fill="#19c37d" />
        <path d="M-10 0 l7 7 l14 -14" fill="none" stroke="#0b1b2b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text y="58" textAnchor="middle" fontFamily="Manrope, system-ui, sans-serif" fontSize="13" fontWeight="800" fill="#19c37d">
          VERIFIED
        </text>
      </g>

      {/* Event ticket cards */}
      <g fontFamily="Inter, system-ui, sans-serif" fontSize="11" fill="#9db0c4">
        <rect x="40" y="300" width="170" height="44" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" />
        <text x="54" y="319" fontWeight="600" fill="#e8eef5">Batch registered</text>
        <text x="54" y="335">signed · chained · 2 of 6 events</text>

        <rect x="235" y="40" width="170" height="44" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" />
        <text x="249" y="59" fontWeight="600" fill="#e8eef5">Licence verified</text>
        <text x="249" y="75">issued by regulator · valid</text>

        <rect x="360" y="300" width="170" height="44" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.10)" />
        <text x="374" y="319" fontWeight="600" fill="#e8eef5">Custody transferred</text>
        <text x="374" y="335">accepted · cold chain OK</text>
      </g>
    </svg>
  )
}
