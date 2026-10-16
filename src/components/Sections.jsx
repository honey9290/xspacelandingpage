import { AREAS, COMPARE, FAQS, OFFERS, PLEDGES, PROPERTY_TYPES, STEPS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import { WhatsAppLink } from './ContactLinks';
import CorridorMap from './CorridorMap';
import Icon from './Icon';
import Reveal from './Reveal';

/* The content sections between the hero and the closing form. Each is a
   layout over a list in content.js. */

function Head({ kicker, title, lead, split, aside, children }) {
  return (
    <Reveal className={'head' + (split ? ' split' : '')}>
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {aside}
      {children}
    </Reveal>
  );
}

export function Offers() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block" id="offers">
      <div className="wrap">
        <Head
          kicker="What you get, free"
          title={<>Buying a home is a big decision. <span className="grad">We do the checking first.</span></>}
          lead="These four things are free for every buyer, with no booking amount and no commitment."
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

export function PropertyTypes() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block tight" id="types">
      <div className="wrap">
        <Head
          kicker="Everything real estate" title={<>Every kind of property. <span className="grad">One trusted team.</span></>}
          lead="Homes for your family, offices for your business, land for your future. Pick one and an advisor who specialises in it will call you."
        />
        <div className="types">
          {PROPERTY_TYPES.map((t, i) => (
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

export function Areas() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block tight" id="areas">
      <div className="wrap">
        <Head
          split kicker="Where we work"
          title={<>We know West Hyderabad <span className="grad">street by street.</span></>}
          lead="Our area partners live and work in these neighbourhoods. They know which school bus comes by, where the parks are, and about new launches before the listing portals do."
          aside={<div className="areas-map"><CorridorMap onPick={(area) => openEnquiry(area)} /></div>}
        />
        <div className="areas">
          {AREAS.map((a, i) => (
            <Reveal as="article" className="area" key={a.name} delay={(i % 3) * 70}>
              <div>
                <span className="coord">{a.coord}</span>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
                <div className="tags">{a.tags.map((t) => <span key={t}>{t}</span>)}</div>
              </div>
              <button onClick={() => openEnquiry(a.name)}>{a.cta || `See verified homes in ${a.name}`} →</button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
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
    <section className="block tight" id="promise">
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

export function Faq() {
  return (
    <section className="block tight" id="faq">
      <div className="wrap faq">
        <Reveal>
          <div className="kicker">FAQ</div>
          <h2>Questions buyers ask us.</h2>
          <p className="section-lead">Have a question that isn't here? Ask us on WhatsApp. A real person replies.</p>
          <div className="faq-cta">
            <WhatsAppLink className="btn btn-ghost"><Icon name="whatsapp" />Ask on WhatsApp</WhatsAppLink>
          </div>
        </Reveal>
        <Reveal>
          {FAQS.map(([q, a]) => (
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
