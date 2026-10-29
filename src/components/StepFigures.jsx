/* The journey character: an original doodle-style figure, drawn here so it
   is ours to use. Thick ink outlines over a paper fill; both are theme
   colours (--ink / --paper on .stepfig), so it works in light and dark.
   One scene per JOURNEY step, in order. Animations run only while a card
   is turned over (see .stepfig in styles.css).

   The character is built in its own space: feet at y = 0, centred on x = 0,
   about 150 units tall, facing right. Scenes place it with a translate. */

const INK = 'var(--ink)';
const PAPER = 'var(--paper)';

/* A limb: an ink stroke with a narrower paper stroke on top reads as an
   outlined tube, which gives the hand-drawn look. */
function Tube({ d, w = 15 }) {
  return (
    <>
      <path d={d} stroke={INK} strokeWidth={w} />
      <path d={d} stroke={PAPER} strokeWidth={w - 7} />
    </>
  );
}

const Hand = ({ x, y, r = 6.5 }) => <circle cx={x} cy={y} r={r} fill={PAPER} />;

function Shoe({ x }) {
  return <path d={`M${x - 8} -1 q0 -10 9 -10 q10 0 13 8 q1 3 -3 3 z`} fill={INK} />;
}

function Leg({ hip, foot, walk, phase }) {
  return (
    <g className={walk ? `fg-leg ${phase}` : undefined}>
      <Tube d={`M${hip} -58 L${foot} -9`} w={17} />
      <Shoe x={foot} />
    </g>
  );
}

function Head({ hair, cls }) {
  return (
    <g transform="translate(0 -131)">
      <g className={cls}>
        {hair === 'curly' && (
          <g fill={INK}>
            <circle cx="-15" cy="-8" r="8" />
            <circle cx="-8" cy="-16" r="8" />
            <circle cx="2" cy="-19" r="8" />
            <circle cx="12" cy="-15" r="8" />
            <circle cx="17" cy="-6" r="6.5" />
            <circle cx="-18" cy="2" r="6" />
          </g>
        )}
        {hair === 'bun' && <circle cx="-6" cy="-21" r="8.5" fill={INK} />}
        <circle cx="15" cy="4" r="4.5" fill={PAPER} />
        <ellipse cx="0" cy="2" rx="15" ry="17" fill={PAPER} />
        {hair === 'curly' && (
          <g fill={INK}>
            <circle cx="-9" cy="-12" r="6" />
            <circle cx="0" cy="-14" r="6" />
            <circle cx="9" cy="-12" r="5.5" />
          </g>
        )}
        {hair === 'bun' && <path d="M-15 0 Q-17 -17 0 -16 Q15 -16 15 -3 Q6 -10 -2 -9 Q-10 -8 -15 0 Z" fill={INK} />}
        <circle cx="-5" cy="3" r="2.2" fill={INK} stroke="none" />
        <circle cx="7" cy="3" r="2.2" fill={INK} stroke="none" />
        <path d="M-5 9 Q1 16 7 9 Z" fill={INK} strokeWidth="2.5" />
      </g>
    </g>
  );
}

function Torso({ stripes }) {
  return (
    <>
      <path d="M0 -118 V-104" strokeWidth="11" stroke={INK} />
      <path d="M0 -118 V-104" strokeWidth="5" stroke={PAPER} />
      <path d="M-17 -104 Q-21 -80 -16 -50 L16 -50 Q21 -80 17 -104 Q0 -110 -17 -104 Z" fill={PAPER} />
      {stripes ? (
        <path d="M-17 -90 H17 M-18 -78 H18 M-17 -66 H17" strokeWidth="2.5" />
      ) : (
        <path d="M-8 -108 L0 -96 L8 -108" strokeWidth="2.5" />
      )}
      <path d="M-16 -56 H16" strokeWidth="2.5" />
    </>
  );
}

/* backArm / frontArm: { d, hand: [x, y], cls } in character space.
   Drawn back arm → body → head → front arm, so the front arm overlaps;
   armsInFront draws both over the body, for crossed arms. */
function Person({ x, flip, walk, hair = 'curly', stripes = true, headCls, backArm, frontArm, armsInFront, children }) {
  const arm = (a) => a && (
    <g className={a.cls}>
      <Tube d={a.d} />
      {a.hand && <Hand x={a.hand[0]} y={a.hand[1]} />}
    </g>
  );
  return (
    <g transform={`translate(${x} 170)${flip ? ' scale(-1 1)' : ''}`}>
      <ellipse cx="0" cy="1" rx="30" ry="4.5" fill={INK} stroke="none" opacity=".18" />
      <Leg hip={-8} foot={walk ? -16 : -11} walk={walk} phase="a" />
      <Leg hip={8} foot={walk ? 16 : 11} walk={walk} phase="b" />
      {!armsInFront && arm(backArm)}
      <Torso stripes={stripes} />
      <Head hair={hair} cls={headCls} />
      {armsInFront && arm(backArm)}
      {arm(frontArm)}
      {children}
    </g>
  );
}

const HANG = { d: 'M-15 -98 Q-23 -76 -20 -58', hand: [-20, -55] };

function House({ x, base, w = 46, h = 34, cls }) {
  const l = x - w / 2;
  const r = x + w / 2;
  return (
    <g className={cls}>
      <path d={`M${l} ${base} V${base - h} H${r} V${base} Z`} fill={PAPER} />
      <path d={`M${l - 6} ${base - h + 2} L${x} ${base - h - 22} L${r + 6} ${base - h + 2} Z`} fill={INK} />
      <path d={`M${x - 6} ${base} V${base - 16} H${x + 6} V${base}`} fill={PAPER} />
      <rect x={l + 6} y={base - h + 8} width="9" height="9" rx="1.5" fill={PAPER} strokeWidth="2.5" />
      <rect x={r - 15} y={base - h + 8} width="9" height="9" rx="1.5" fill={PAPER} strokeWidth="2.5" />
    </g>
  );
}

/* A high-rise with a low wing; a few windows light up in turn. */
function Tower() {
  const cols = [176, 192, 208];
  const rows = [46, 62, 78, 94, 110, 126];
  return (
    <g>
      <rect x="146" y="112" width="26" height="58" rx="2" fill={PAPER} />
      <path d="M152 124 H166 M152 136 H166 M152 148 H166" strokeWidth="2.5" />
      <rect x="168" y="34" width="56" height="136" rx="3" fill={PAPER} />
      <path d="M164 34 H228 M196 34 V20" />
      {rows.map((y, r) => cols.map((x, c) => (
        <rect
          key={`${x}-${y}`} x={x - 5} y={y} width="10" height="9" rx="1.5" fill={PAPER} strokeWidth="2.5"
          className={(r + c) % 3 === 0 ? `fg-light l${(r * 3 + c) % 4}` : undefined}
        />
      )))}
      <path d="M188 170 V150 H204 V170" fill={PAPER} />
    </g>
  );
}

const Pin = ({ x, y, cls }) => (
  <g transform={`translate(${x} ${y})`}>
    <g className={cls}>
      <path d="M0 0 C-9 -11 -9 -24 0 -24 C9 -24 9 -11 0 0 Z" fill={PAPER} />
      <circle cx="0" cy="-15" r="3.5" fill={INK} />
    </g>
  </g>
);

const Spark = ({ x, y, cls }) => (
  <path className={cls} d={`M${x} ${y - 7} V${y + 7} M${x - 7} ${y} H${x + 7}`} strokeWidth="3" />
);

const SCENES = [
  /* 01 Discover: out searching with a magnifying glass */
  <>
    <path className="fg-ground" d="M8 171 H232" />
    <Pin x={36} y={74} cls="fg-pop" />
    <Pin x={206} y={58} cls="fg-pop late" />
    <g className="fg-wander">
      <Person
        x={104} walk
        backArm={{ ...HANG, cls: 'fg-arm' }}
        frontArm={{ d: 'M15 -98 Q36 -96 40 -112', hand: [41, -114] }}
      >
        <g className="fg-scan">
          <path d="M45 -119 L52 -127" strokeWidth="6" />
          <circle cx="60" cy="-137" r="13" fill={PAPER} strokeWidth="4" />
          <path d="M53 -140 A8 8 0 0 1 60 -146" strokeWidth="2.5" />
        </g>
      </Person>
    </g>
  </>,

  /* 02 Explore: watching a project video */
  <>
    <rect x="122" y="28" width="108" height="76" rx="8" fill={PAPER} />
    <path d="M122 44 H230" strokeWidth="3" />
    <g fill={INK} stroke="none">
      <circle cx="132" cy="36" r="2.4" /><circle cx="140" cy="36" r="2.4" /><circle cx="148" cy="36" r="2.4" />
    </g>
    <circle cx="176" cy="70" r="15" fill={PAPER} />
    <path className="fg-pulse" d="M171 62 L184 70 L171 78 Z" fill={INK} strokeWidth="2" />
    <path d="M132 95 H220" strokeWidth="2" opacity=".35" />
    <path className="fg-progress" d="M132 95 H220" strokeWidth="3" />
    <path d="M176 104 V128 M158 130 H194" strokeWidth="4" />
    <Person
      x={70} headCls="fg-nod"
      backArm={{ d: 'M-15 -98 Q-36 -80 -20 -64' }}
      frontArm={{ d: 'M15 -98 Q40 -104 50 -120', hand: [52, -122], cls: 'fg-point' }}
    />
  </>,

  /* 03 Verify: stamping the document as checked */
  <>
    <path d="M118 40 H164 L176 52 V124 H118 Z" fill={PAPER} />
    <path d="M164 40 V52 H176" strokeWidth="3" />
    <path d="M126 56 H156 M126 66 H166 M126 76 H160 M126 86 H140" strokeWidth="2.5" />
    <g className="fg-seal">
      <circle cx="150" cy="99" r="13" fill={PAPER} strokeWidth="3" />
      <path d="M144 99 l4 5 l8 -10" strokeWidth="3.5" />
    </g>
    <Person x={96} backArm={HANG} />
    {/* The stamping arm sits in scene space so it can swing from the shoulder. */}
    <g className="fg-press">
      <Tube d="M111 72 Q130 58 148 58" />
      <rect x="144" y="62" width="10" height="12" rx="2" fill={PAPER} strokeWidth="3" />
      <rect x="136" y="73" width="26" height="9" rx="2" fill={INK} />
      <Hand x={149} y={58} />
    </g>
  </>,

  /* 04 Compare: weighing up two homes */
  <>
    <House x={34} base={152} cls="fg-blink a" />
    <House x={206} base={152} cls="fg-blink b" />
    <g fill={INK} stroke="none">
      <circle className="fg-think t0" cx="146" cy="40" r="3" />
      <circle className="fg-think t1" cx="155" cy="30" r="4" />
      <circle className="fg-think t2" cx="167" cy="19" r="5.5" />
    </g>
    <Person
      x={120} headCls="fg-turn" armsInFront
      backArm={{ d: 'M-15 -98 Q-8 -72 14 -80', hand: [15, -80] }}
      frontArm={{ d: 'M15 -98 Q32 -82 12 -110', hand: [10, -111] }}
    />
  </>,

  /* 05 Experience: walking up to the building for the site visit */
  <>
    <path className="fg-ground" d="M8 171 H232" />
    <Tower />
    <g className="fg-stroll">
      <Person
        x={40} walk
        backArm={{ ...HANG, cls: 'fg-arm' }}
        frontArm={{ d: 'M15 -98 Q23 -76 20 -58', hand: [20, -55], cls: 'fg-arm b' }}
      />
    </g>
  </>,

  /* 06 Deal: the handshake */
  <>
    <Spark x={120} y={24} cls="fg-spark" />
    <Spark x={104} y={10} cls="fg-spark late" />
    <Spark x={136} y={10} cls="fg-spark later" />
    <Person
      x={80}
      backArm={HANG}
      frontArm={{ d: 'M15 -98 Q32 -82 40 -84' }}
    />
    <Person
      x={160} flip hair="bun" stripes={false}
      backArm={HANG}
      frontArm={{ d: 'M15 -98 Q32 -82 40 -84' }}
    />
    <g className="fg-shake">
      <ellipse cx="120" cy="86" rx="10" ry="7.5" fill={PAPER} />
      <path d="M114 83 H124 M114 88 H123" strokeWidth="2" />
    </g>
  </>,
];

export default function StepFigure({ index }) {
  const scene = SCENES[index];
  if (!scene) return null;
  return (
    <svg
      className="stepfig" viewBox="0 0 240 180" aria-hidden="true"
      fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
    >
      {scene}
    </svg>
  );
}
