import { useEffect, useState } from 'react';
import { FINDER_AREAS, FINDER_NEEDS, FINDER_TYPES, HERO_SLIDES, HERO_STATS, TICKER } from '../content';
import { useEnquiry } from '../lib/enquiry';
import { WhatsAppLink } from './ContactLinks';
import Icon from './Icon';
import Reveal from './Reveal';

const SLIDE_MS = 6500;

function Chips({ label, options, value, onChange, multi }) {
  const isOn = (o) => (multi ? value.includes(o) : value === o);
  const toggle = (o) => {
    if (multi) onChange(isOn(o) ? value.filter((v) => v !== o) : [...value, o]);
    else onChange(isOn(o) ? '' : o);
  };
  return (
    <>
      <p className="field-label">{label}</p>
      <div className="chips" role="group" aria-label={label}>
        {options.map((o) => (
          <button key={o} type="button" className="chip" aria-pressed={isOn(o)} onClick={() => toggle(o)}>
            {o}
          </button>
        ))}
      </div>
    </>
  );
}

function HomeFinder() {
  const openEnquiry = useEnquiry();
  const [area, setArea] = useState('');
  const [type, setType] = useState('');
  const [needs, setNeeds] = useState([]);
  const typeValue = FINDER_TYPES.find((t) => t.label === type)?.value || type;

  return (
    <Reveal className="finder">
      <div className="finder-head">
        <h3>Find your dream home</h3>
        <span className="live">Advisors online</span>
      </div>
      <p className="sub">Tell us a little about your family. We'll send verified homes that fit.</p>
      <Chips label="Where" options={FINDER_AREAS} value={area} onChange={setArea} />
      <Chips label="What kind of home" options={FINDER_TYPES.map((t) => t.label)} value={type} onChange={setType} />
      <Chips label="What matters to your family" options={FINDER_NEEDS} value={needs} onChange={setNeeds} multi />
      <button
        className="btn btn-primary btn-lg"
        onClick={() => openEnquiry('Free 24-hour shortlist', {
          area, type: typeValue, note: needs.length ? `Family priorities: ${needs.join(', ')}` : '',
        })}
      >
        Show me verified homes <Icon name="arrow" />
      </button>
      <p className="fine">Free · No spam · Takes 30 seconds</p>
    </Reveal>
  );
}

/* Cross-fading photo backdrop. Only the first slide loads eagerly. */
function Backdrop() {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % HERO_SLIDES.length), SLIDE_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-media" aria-hidden="true">
      {HERO_SLIDES.map((s, n) => (
        <img
          key={s.src} src={s.src} alt="" className={n === i ? 'on' : ''}
          loading={n === 0 ? 'eager' : 'lazy'} fetchPriority={n === 0 ? 'high' : 'low'}
        />
      ))}
      <div className="hero-shade" />
      <div className="hero-hud">
        <span className="hud-label">{HERO_SLIDES[i].label} · representative image</span>
        <span className="hud-bars">
          {HERO_SLIDES.map((s, n) => <span key={s.src} className={n === i ? 'on' : ''} />)}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const openEnquiry = useEnquiry();
  return (
    <>
      <section className="hero">
        <Backdrop />
        <div className="wrap hero-grid">
          <div>
            <Reveal as="span" className="eyebrow"><span className="dot" />Homes · Offices · Commercial · Land, West Hyderabad</Reveal>
            <Reveal as="h1">Find the home your family <span className="grad">will grow up in.</span></Reveal>
            <Reveal as="p" className="lead">
              Xspace &amp; Co. is the simplest, safest way to find your dream home. Every home is verified before you see
              it and shortlisted around your family's life. You see it on video first, and one advisor stays with you
              until the keys are in your hand. Buying for your business? We find offices and commercial property the
              same way.
            </Reveal>
            <Reveal className="hero-actions">
              <button className="btn btn-primary btn-lg" onClick={() => openEnquiry('Free 24-hour shortlist')}>
                Get my free shortlist <Icon name="arrow" />
              </button>
              <WhatsAppLink className="btn btn-ghost btn-lg"><Icon name="whatsapp" />Chat on WhatsApp</WhatsAppLink>
            </Reveal>
            <Reveal className="proof">
              <div><Icon name="shield" />Verified homes only</div>
              <div><Icon name="doc" />TG RERA registered advisors</div>
              <div><Icon name="heart" />No pressure, ever</div>
            </Reveal>
          </div>
          <HomeFinder />
        </div>
        <div className="wrap">
          <Reveal className="stats">
            {HERO_STATS.map(([big, small]) => (
              <div key={big}><b>{big}</b><span>{small}</span></div>
            ))}
          </Reveal>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
    </>
  );
}
