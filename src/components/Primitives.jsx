export const CompassSquare = ({ size = 80, stroke = 'currentColor', strokeWidth = 1.25 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="50" cy="50" r="46" opacity="0.25"/>
    <circle cx="50" cy="20" r="2.2" fill={stroke} />
    <path d="M50 20 L26 82" />
    <path d="M50 20 L74 82" />
    <path d="M34 66 Q50 74 66 66" />
    <path d="M22 74 L50 46 L78 74" opacity="0.55" />
    <text x="50" y="58" fontFamily="Cormorant Garamond, serif" fontSize="18" textAnchor="middle" fill={stroke} stroke="none" fontStyle="italic">G</text>
  </svg>
)

export const Triangle = ({ size = 40, stroke = 'currentColor', strokeWidth = 1, fill = 'none' }) => (
  <svg viewBox="0 0 40 36" width={size} height={size * 0.9} fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
    <path d="M20 3 L37 33 L3 33 Z" />
  </svg>
)

export const Sun = ({ size = 32, stroke = 'currentColor' }) => (
  <svg viewBox="0 0 40 40" width={size} height={size} fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="round">
    <circle cx="20" cy="20" r="7" />
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i * Math.PI) / 6
      const x1 = 20 + Math.cos(a) * 11
      const y1 = 20 + Math.sin(a) * 11
      const x2 = 20 + Math.cos(a) * 16
      const y2 = 20 + Math.sin(a) * 16
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
    })}
  </svg>
)

export const Star = ({ size = 14, stroke = 'currentColor', strokeWidth = 0.8 }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="none" stroke={stroke} strokeWidth={strokeWidth}>
    <path d="M10 1 L12 8 L19 8 L13.5 12 L15.5 19 L10 15 L4.5 19 L6.5 12 L1 8 L8 8 Z" />
  </svg>
)

export const AllSeeingEye = ({ size = 60, stroke = 'currentColor' }) => (
  <svg viewBox="0 0 80 70" width={size} height={size * 0.87} fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="round">
    <path d="M40 6 L72 62 L8 62 Z" />
    <ellipse cx="40" cy="40" rx="12" ry="7" />
    <circle cx="40" cy="40" r="3" fill={stroke} />
    {Array.from({ length: 9 }).map((_, i) => {
      const a = (-Math.PI / 2) + (i - 4) * 0.22
      return <line key={i} x1={40 + Math.cos(a) * 18} y1={6 + Math.sin(a) * 0 - 4} x2={40 + Math.cos(a) * 28} y2={Math.sin(a) * 10 - 10} strokeWidth="0.6" />
    })}
  </svg>
)

export const AcaciaBranch = ({ size = 60, stroke = 'currentColor' }) => (
  <svg viewBox="0 0 60 80" width={size * 0.75} height={size} fill="none" stroke={stroke} strokeWidth="0.9" strokeLinecap="round">
    <path d="M30 78 Q30 40 30 6" />
    {Array.from({ length: 7 }).map((_, i) => {
      const y = 12 + i * 9
      const dir = i % 2 === 0 ? 1 : -1
      return (
        <g key={i}>
          <path d={`M30 ${y} Q${30 + dir * 8} ${y - 4} ${30 + dir * 14} ${y - 2}`} />
          <ellipse cx={30 + dir * 14} cy={y - 2} rx="3" ry="1.5" transform={`rotate(${dir * 25} ${30 + dir * 14} ${y - 2})`} />
        </g>
      )
    })}
  </svg>
)

export const Eyebrow = ({ children, style }) => (
  <div className="eyebrow" style={style}>
    <span className="eyebrow-dot" />
    <span>{children}</span>
  </div>
)

export const AssetImage = ({ src, alt, caption, aspect = '4/5', className = '', tint = false }) => (
  <figure className={`asset ${className}`}>
    <div className="asset-frame" style={{ aspectRatio: aspect }}>
      <img src={src} alt={alt} className={tint ? 'tinted' : ''} loading="lazy" />
    </div>
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
)
