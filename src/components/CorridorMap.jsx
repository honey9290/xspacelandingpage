import { MAP_PINS } from '../content';

/* Schematic of the west corridor (not to scale). Each pin calls onPick(area). */
export default function CorridorMap({ active, onPick }) {
  return (
    <div className="map">
      <svg viewBox="0 0 400 190" role="group" aria-label="Areas we cover">
        <defs>
          <linearGradient id="road" x1="0" x2="1">
            <stop offset="0" stopColor="#5ef0d0" stopOpacity=".1" />
            <stop offset=".5" stopColor="#5ef0d0" stopOpacity=".6" />
            <stop offset="1" stopColor="#8ab4ff" stopOpacity=".1" />
          </linearGradient>
        </defs>
        <path stroke="rgba(255,255,255,.06)" d="M0 38H400M0 76H400M0 114H400M0 152H400M50 0V190M100 0V190M150 0V190M200 0V190M250 0V190M300 0V190M350 0V190" />
        <path d="M20 90 C 60 20, 150 14, 220 16 S 330 30, 372 80 S 384 160, 372 186" fill="none" stroke="url(#road)" strokeWidth="2" strokeDasharray="4 6" />
        <text x="14" y="182" className="map-caption">WEST HYDERABAD · SCHEMATIC</text>
        {MAP_PINS.map((p, i) => (
          <g
            key={p.area} className={'node' + (active === p.area ? ' on' : '')} role="button" tabIndex={0}
            aria-label={p.area} onClick={() => onPick(p.area)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(p.area); } }}
          >
            <circle className="ring" cx={p.x} cy={p.y} r="5" style={{ animationDelay: `${i * 0.5}s` }} />
            <circle className="core" cx={p.x} cy={p.y} r="4" />
            <text x={p.lx} y={p.ly}>{p.area}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}
