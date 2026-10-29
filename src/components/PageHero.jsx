import { useEffect, useState } from 'react';
import Reveal from './Reveal';

const SLIDE_MS = 6500;

/* Cross-fading photo backdrop. Only the first slide loads eagerly. */
function Backdrop({ slides }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (slides.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), SLIDE_MS);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="hero-media" aria-hidden="true">
      {slides.map((s, n) => (
        <img
          key={s.src} src={s.src} alt="" className={n === i ? 'on' : ''}
          loading={n === 0 ? 'eager' : 'lazy'} fetchPriority={n === 0 ? 'high' : 'low'}
        />
      ))}
      <div className="hero-shade" />
      <div className="hero-hud">
        <span className="hud-label">{slides[i].label} · representative image</span>
        {slides.length > 1 && (
          <span className="hud-bars">
            {slides.map((s, n) => <span key={s.src} className={n === i ? 'on' : ''} />)}
          </span>
        )}
      </div>
    </div>
  );
}

/* Full-bleed photo hero shared by the Home, Residential and Commercial
   pages: copy on the left, `aside` (finder or path cards) on the right. */
export default function PageHero({ slides, eyebrow, title, tagline, lead, actions, aside }) {
  return (
    <section className="hero dark-zone">
      <Backdrop slides={slides} />
      <div className="wrap hero-grid">
        <div>
          {eyebrow && <Reveal as="span" className="eyebrow"><span className="dot" />{eyebrow}</Reveal>}
          <Reveal as="h1">{title}</Reveal>
          {tagline && <Reveal as="p" className="tagline">{tagline}</Reveal>}
          <Reveal as="p" className="lead">{lead}</Reveal>
          {actions && <Reveal className="hero-actions">{actions}</Reveal>}
        </div>
        {aside}
      </div>
    </section>
  );
}

/* Text-led header for the other pages. */
export function PageHeader({ kicker, title, lead, aside }) {
  return (
    <section className="page-head">
      <div className={'wrap' + (aside ? ' page-head-grid' : '')}>
        <div>
          {kicker && <Reveal className="kicker">{kicker}</Reveal>}
          <Reveal as="h1">{title}</Reveal>
          {lead && <Reveal as="p" className="lead">{lead}</Reveal>}
        </div>
        {aside && <Reveal>{aside}</Reveal>}
      </div>
    </section>
  );
}
