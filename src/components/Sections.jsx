import { Link } from 'react-router-dom';
import { DEFAULT_INTENT } from '../config';
import { AREAS, JOURNEY, PATHS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import CorridorMap from './CorridorMap';
import Icon from './Icon';
import Reveal from './Reveal';

/* Sections shared across pages. Each is a layout over a list in
   content.js; the pages decide which ones they show. */

export function Head({ kicker, title, lead, split, aside }) {
  return (
    <Reveal className={'head' + (split ? ' split' : '')}>
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {aside}
    </Reveal>
  );
}

/* Residential and Commercial: one photo card per side of the business. */
export function Paths({ row }) {
  return (
    <div className={'paths' + (row ? ' paths-row' : '')}>
      {PATHS.map((p, i) => (
        <Reveal key={p.to} delay={i * 90}>
          <Link to={p.to} className="path">
            <img src={p.img} alt="" />
            <span className="path-body">
              <span className="path-kicker">{p.kicker}</span>
              <span className="path-title">{p.title} <Icon name="arrowUpRight" /></span>
              <span className="path-text">{p.text}</span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* A grid of icon cards. An item with `to` links to a page (or a #section
   on this one); with `intent` it opens the enquiry form. */
export function Cards({ items, cols = 3, numbered }) {
  const openEnquiry = useEnquiry();
  return (
    <div className="cards" style={{ '--cols': cols }}>
      {items.map((c, i) => (
        <Reveal as="article" className="card" key={c.title} delay={(i % cols) * 70}>
          <div className="card-top">
            <div className="icon"><Icon name={c.icon} /></div>
            {numbered && <span className="card-n">{String(i + 1).padStart(2, '0')}</span>}
          </div>
          <h3>{c.title}</h3>
          <p>{c.text}</p>
          {c.cta && c.to && <Link className="link" to={c.to}>{c.cta} <Icon name="arrow" size={14} /></Link>}
          {c.cta && c.intent && (
            <button className="link" onClick={() => openEnquiry(c.intent)}>{c.cta} <Icon name="arrow" size={14} /></button>
          )}
        </Reveal>
      ))}
    </div>
  );
}

/* A row of stages joined by arrows: DISCOVER → SHORTLIST → … */
export function Chain({ steps, label }) {
  return (
    <ol className="chain" aria-label={label}>
      {steps.map((s, i) => (
        <li key={s}>
          <span>{s}</span>
          {i < steps.length - 1 && <Icon name="arrow" />}
        </li>
      ))}
    </ol>
  );
}

/* 05: Your property journey, eight numbered stages. */
export function Journey() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block" id="journey">
      <div className="wrap">
        <Head
          split kicker="05 — Your property journey" title={<>From discovery <span className="grad">to ownership.</span></>}
          aside={(
            <button className="btn btn-ghost" onClick={() => openEnquiry(DEFAULT_INTENT)}>
              Start with step one <Icon name="arrow" />
            </button>
          )}
        />
        <Reveal as="ol" className="journey">
          {JOURNEY.map((s, i) => (
            <li className="step" key={s.title}>
              <div className="n">{String(i + 1).padStart(2, '0')} — {s.title}</div>
              <p>{s.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* Ticked list in a grid, e.g. what you can explore about a project. */
export function Checklist({ items }) {
  return (
    <Reveal as="ul" className="checklist">
      {items.map((t) => <li key={t}><Icon name="check" />{t}</li>)}
    </Reveal>
  );
}

/* Photo cards for a set of property types. */
export function PropertyGrid({ kicker, title, lead, types }) {
  const openEnquiry = useEnquiry();
  return (
    <section className="block" id="types">
      <div className="wrap">
        <Head kicker={kicker} title={title} lead={lead} />
        <div className="types">
          {types.map((t, i) => (
            <Reveal as="button" className="type" key={t.title} delay={(i % 4) * 70} onClick={() => openEnquiry(t.intent)}>
              <img src={t.img} alt="" loading="lazy" />
              <span className="type-body">
                <span className="t">{t.title} <Icon name="arrowUpRight" /></span>
                <span className="d">{t.text}</span>
              </span>
            </Reveal>
          ))}
        </div>
        <p className="photo-note">Photos are representative and do not show specific listings.</p>
      </div>
    </section>
  );
}

export function AreaGrid() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block tight" id="areas">
      <div className="wrap">
        <div className="areas">
          {AREAS.map((a, i) => (
            <Reveal as="article" className="area" key={a.name} delay={(i % 3) * 70}>
              <div>
                <span className="coord">{String(i + 1).padStart(2, '0')} · West Hyderabad</span>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
                <div className="tags">{a.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
              <button onClick={() => openEnquiry(a.name)}>Explore projects in {a.name} →</button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AreasMap() {
  const openEnquiry = useEnquiry();
  return <div className="areas-map"><CorridorMap onPick={(area) => openEnquiry(area)} /></div>;
}

export function Faq({ items, title = 'Questions people ask us.' }) {
  return (
    <section className="block" id="faq">
      <div className="wrap faq">
        <Reveal>
          <div className="kicker">FAQ</div>
          <h2>{title}</h2>
          <p className="section-lead">Have a question that isn't here? Ask us on WhatsApp. A real person replies.</p>
        </Reveal>
        <Reveal>
          {items.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
