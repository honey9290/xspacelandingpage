import { Link } from 'react-router-dom';
import { AREAS, COMPARE, OFFERS, PATHS, PLEDGES, STEPS } from '../content';
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

/* Home hero aside: one card per side of the business. */
export function Paths() {
  return (
    <div className="paths">
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

export function Offers() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block" id="offers">
      <div className="wrap">
        <Head
          kicker="What you get, free"
          title={<>A big decision deserves a team <span className="grad">that checks first.</span></>}
          lead="Whether it's a home or an office, these four things are free, with no booking amount and no commitment."
        />
        <div className="offers">
          {OFFERS.map((o, i) => (
            <Reveal as="article" className="offer" key={o.title} delay={i * 70}>
              <span className="free">FREE</span>
              <div className="icon"><Icon name={o.icon} /></div>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
              <button className="link" onClick={() => openEnquiry(o.intent)}>{o.cta} <Icon name="arrow" size={14} /></button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block tight" id="process">
      <div className="wrap">
        <Head
          split kicker="How it works" title="From first call to keys, in four steps."
          aside={(
            <button className="btn btn-ghost" onClick={() => openEnquiry('Request a call back')}>
              Start with a 10-minute call <Icon name="arrow" />
            </button>
          )}
        />
        <Reveal className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="n">{String(i + 1).padStart(2, '0')}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="when">{s.when}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
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
                <span className="coord">{a.coord}</span>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
                <div className="tags">{a.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
              <button onClick={() => openEnquiry(a.name)}>{a.cta || `See verified property in ${a.name}`} →</button>
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

export function Compare() {
  return (
    <section className="block tight" id="compare">
      <div className="wrap">
        <Head kicker="The difference" title="Not another listing site." />
        <Reveal className="compare" role="table" aria-label="Typical broker compared with Xspace & Co.">
          <div className="row hd" role="row">
            <div role="columnheader">&nbsp;</div>
            <div role="columnheader">Typical listing / broker</div>
            <div role="columnheader">Xspace &amp; Co.</div>
          </div>
          {COMPARE.map(([what, them, us]) => (
            <div className="row" role="row" key={what}>
              <div role="rowheader">{what}</div>
              <div role="cell"><Icon name="close" className="x" />{them}</div>
              <div role="cell"><Icon name="check" className="ok" />{us}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Pledges() {
  return (
    <section className="block" id="promise">
      <div className="wrap">
        <Head
          kicker="Our promise" title="Rules we hold ourselves to."
          lead="Every Xspace advisor signs these before they can work with a client."
        />
        <div className="promise">
          {PLEDGES.map((p, i) => (
            <Reveal className="pledge" key={p.title} delay={i * 70}>
              <div className="icon"><Icon name={p.icon} /></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
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
