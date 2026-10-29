import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_INTENT, DEFAULT_INTENT } from '../config';
import {
  BOOKING_CARDS, BOOKING_LEAD, FOUNDER, JOURNEY, LISTING_FACTS, SAMPLE_LISTINGS, STATS, STORY_FEATURES,
  STUDIO_FORMATS, TESTIMONIALS, TRADITIONAL_WAY, WHY_CHECKS, XSPACE_WAY,
} from '../content';
import { useEnquiry } from '../lib/enquiry';
import { WhatsAppLink } from './ContactLinks';
import Icon from './Icon';
import StepFigure from './StepFigures';
import TypeIn from './TypeIn';
import Reveal from './Reveal';

/* The sections of the home page, top to bottom. Copy lives in content.js. */

/* Full-width header used by Why, About and Clients: copy on the left, a
   handwritten note on the right, over an optional photo. Always dark,
   whatever the theme. */
function FeatureHead({ img, kicker, title, lead, note, children }) {
  return (
    <Reveal className="feature-head dark-zone">
      {img && <img src={img} alt="" loading="lazy" />}
      <div className="feature-copy">
        {kicker && <div className="kicker">{kicker}</div>}
        <h2>{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
        {children}
      </div>
      {note && <p className="script-note" aria-hidden="true">{note}</p>}
    </Reveal>
  );
}

export function HomeHero() {
  const openEnquiry = useEnquiry();
  return (
    <>
      <section className="hero home-hero dark-zone">
        <div className="hero-media" aria-hidden="true">
          <img className="on" src="/images/hero-house.webp" alt="" fetchPriority="high" />
          <div className="hero-shade" />
        </div>
        <div className="wrap hero-copy">
          <TypeIn className="mega" parts={['Why visit first, when you can ', 'know first?']} underline={[1]} />
          <Reveal as="p" className="tagline">Visit less. Know more.</Reveal>
          <Reveal className="hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => openEnquiry(BOOKING_INTENT, { mode: 'Virtual / Zoom call' })}
            >
              Book consultation <Icon name="arrow" />
            </button>
          </Reveal>
        </div>
      </section>
      {/* Facts about the service, just below the hero. */}
      <section className="hero-facts">
        <div className="wrap"><Stats /></div>
      </section>
    </>
  );
}

export function Stats() {
  return (
    <Reveal className="stat-strip">
      {STATS.map(([b, t]) => <div key={t}><b>{b}</b><span>{t}</span></div>)}
      <div className="stat-map"><Icon name="pin" /><span>Focused on Hyderabad&apos;s western growth corridors</span></div>
    </Reveal>
  );
}

function WhyVisual({ card }) {
  if (card.visual === 'checks') {
    return (
      <ul className="why-checks">
        {(card.checks || WHY_CHECKS).map((c) => (
          <li key={c}><Icon name="shield" />{c}<span><Icon name="check" />{card.checkLabel || 'Checked'}</span></li>
        ))}
      </ul>
    );
  }
  if (card.visual === 'table') {
    const rows = ['Price', 'Location', 'RERA', 'Amenities', 'Possession'];
    return (
      <div className="why-table" aria-hidden="true">
        <span />{['A', 'B', 'C'].map((p) => <span key={p} className="th">Project {p}</span>)}
        {rows.map((r) => [<span key={r}>{r}</span>, ...[0, 1, 2].map((n) => <Icon key={r + n} name="check" />)])}
      </div>
    );
  }
  return (
    <div className="why-photo">
      <img src={card.img} alt="" loading="lazy" />
    </div>
  );
}

/* Shows the company name in the text colour, so it stands out in muted copy. */
const BRAND = 'XSPACE & CO.';
const withBrand = (text) => text.split(BRAND).flatMap((part, i) => (i ? [<b key={i} className="brand-word">{BRAND}</b>, part] : [part]));

/* About us: the founder's story beside his photo (or a placeholder until there is one). */
export function Founder() {
  return (
    <div className="founder">
      <Reveal className="founder-copy">
        <div className="kicker">About us</div>
        <h2>{FOUNDER.title}</h2>
        {FOUNDER.story.map((p) => <p key={p}>{withBrand(p)}</p>)}
        <p className="founder-highlight">{withBrand(FOUNDER.highlight)}</p>
        {FOUNDER.vision.map((p) => <p key={p}>{withBrand(p)}</p>)}
      </Reveal>
      <Reveal className="founder-photo" delay={120}>
        {FOUNDER.photo ? (
          <img src={FOUNDER.photo} alt={`${FOUNDER.name}, ${FOUNDER.role}`} loading="lazy" />
        ) : (
          <div className="founder-ph" role="img" aria-label={`Photo of ${FOUNDER.name} coming soon`}>
            <Icon name="users" size={40} />
            <span>Photo of {FOUNDER.name}</span>
          </div>
        )}
        <blockquote className="founder-quote">
          <cite><b>{FOUNDER.name}</b>{withBrand(FOUNDER.role)}</cite>
          “{FOUNDER.quote}”
        </blockquote>
      </Reveal>
    </div>
  );
}

export function AboutUs() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <Founder />
      </div>
    </section>
  );
}

export function BookingModes() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block" id="booking">
      <div className="wrap">
        <Reveal className="head split">
          <div>
            <h2>Connect in 3<br />convenient modes</h2>
            <p className="section-lead">{BOOKING_LEAD}</p>
          </div>
          <button className="btn btn-ghost" onClick={() => openEnquiry(BOOKING_INTENT)}>Schedule your session</button>
        </Reveal>
        <div className="modes">
          {BOOKING_CARDS.map((m, i) => (
            <Reveal as="article" className={'mode' + (m.featured ? ' featured' : '')} key={m.mode} delay={i * 80}>
              <span className="icon-sq lg"><Icon name={m.icon} /></span>
              <span className="mode-n">Mode {String(i + 1).padStart(2, '0')}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <button
                className={'btn ' + (m.featured ? 'btn-primary' : 'btn-ghost')}
                onClick={() => openEnquiry(BOOKING_INTENT, { mode: m.mode })}
              >
                {m.cta}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySteps() {
  return (
    <section className="block" id="journey">
      <div className="wrap">
        <Reveal className="center-head">
          <h2>The 6-step<br />client journey</h2>
        </Reveal>
        {/* The cards appear one after another once the grid scrolls into view. */}
        <Reveal as="ol" className="steps9">
          {JOURNEY.map((s, i) => (
            <li className="step9" key={s.title} style={{ '--i': i }} tabIndex={0}>
              {/* Shows the step's character; turns over on hover or focus (tap on
                  touch) to the details. */}
              <div className="step9-inner">
                <div className="step9-face step9-fig">
                  <StepFigure index={i} />
                  <h3><span className="step9-num">{String(i + 1).padStart(2, '0')}</span>{s.title}</h3>
                </div>
                <div className="step9-face step9-back why-card">
                  <div className="why-top">
                    <span className="why-n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="icon-sq"><Icon name={s.icon} /></span>
                  </div>
                  <h3>{s.title}</h3>
                  {/* Step copy is ours (content.js); <b> marks the key phrase. */}
                  <p dangerouslySetInnerHTML={{ __html: s.text }} />
                  <div className="why-vis"><WhyVisual card={s} /></div>
                </div>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function SampleListings() {
  const openEnquiry = useEnquiry();
  const [picked, setPicked] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const table = useRef(null);

  const compared = useMemo(() => SAMPLE_LISTINGS.filter((l) => picked.includes(l.id)), [picked]);

  const toggle = (id) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length < 3 ? [...p, id] : p));
  const compare = () => {
    setShowCompare(true);
    requestAnimationFrame(() => table.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return (
    <section className="block" id="listings">
      <div className="wrap">
        <Reveal className="center-head listings-head">
          <h2>See what a shortlist looks like.</h2>
        </Reveal>

        <div className="listings">
          {SAMPLE_LISTINGS.map((l) => {
            const on = picked.includes(l.id);
            return (
              <article className={'listing' + (on ? ' on' : '')} key={l.id}>
                <div className="listing-img">
                  <img src={l.img} alt="" loading="lazy" />
                </div>
                <div className="listing-body">
                  <span className="listing-area"><Icon name="pin" />{l.area} · {l.facts[3]}</span>
                  <h3>{l.title}</h3>
                  <ul className="listing-facts">
                    <li>{l.facts[2]}</li><li>{l.facts[4]}</li><li>{l.facts[5]}</li>
                  </ul>
                  <div className="listing-actions">
                    <label className="cmp">
                      <input
                        type="checkbox" checked={on} disabled={!on && picked.length >= 3} onChange={() => toggle(l.id)}
                      />
                      Compare
                    </label>
                    <button
                      className="link-btn"
                      onClick={() => openEnquiry(DEFAULT_INTENT, { type: l.type, area: l.area, note: 'Asked about sample listing: ' + l.title })}
                    >
                      Ask for options like this <Icon name="arrow" size={14} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {picked.length > 0 && (
          <div className="compare-bar" role="status">
            <span>{picked.length} of 3 selected</span>
            <button className="btn btn-ghost" onClick={() => { setPicked([]); setShowCompare(false); }}>Clear</button>
            <button className="btn btn-primary" disabled={picked.length < 2} onClick={compare}>
              Compare {picked.length > 1 ? picked.length : ''} <Icon name="bars" />
            </button>
          </div>
        )}

        {showCompare && compared.length > 1 && (
          <div className="cmp-table" ref={table}>
            <table>
              <thead>
                <tr><th scope="col">Compare</th>{compared.map((l) => <th scope="col" key={l.id}>{l.title}</th>)}</tr>
              </thead>
              <tbody>
                {LISTING_FACTS.map((f, i) => (
                  <tr key={f}><th scope="row">{f}</th>{compared.map((l) => <td key={l.id}>{l.facts[i]}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

function WayRow({ items }) {
  return (
    <ol className="way-row">
      {items.map((w) => (
        <li key={w.title}>
          <img src={w.img} alt="" loading="lazy" />
          <div>
            <Icon name={w.icon} />
            <b>{w.title}</b>
            <span>{w.text}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function AboutStory() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <FeatureHead
          img="/images/mock/about-head.webp"
          title={<>Let&apos;s reimagine<br /><span className="grad">buying property.</span></>}
          lead="Buying property often means many visits, weeks of effort and still some doubt. We make it simpler."
          note={<>Better information.<br />Better decisions.</>}
        />
        <div className="ways">
          <Reveal className="way old">
            <div className="kicker">The traditional way</div>
            <h3>Time consuming. Confusing.</h3>
            <WayRow items={TRADITIONAL_WAY} />
          </Reveal>
          <Reveal className="way new" delay={80}>
            <div className="kicker">The XSPACE way</div>
            <h3>Know first. Visit later.</h3>
            <WayRow items={XSPACE_WAY} />
          </Reveal>
        </div>
        <Reveal className="story">
          <div className="story-img dark-zone">
            <img src="/images/mock/story.webp" alt="" loading="lazy" />
            <p>Property<br />Technology<br />Content<br />Trust</p>
          </div>
          <div className="story-copy">
            <div className="kicker">Our story</div>
            <h3>A more informed way forward.</h3>
            <p>
              XSPACE &amp; CO. started with one idea: you should know a property before you visit it. So we bring
              checked information, videos and expert advice together in one place.
            </p>
          </div>
          <ul className="story-feats">
            {STORY_FEATURES.map((f) => (
              <li key={f.title}><span className="icon-sq"><Icon name={f.icon} /></span><div><b>{f.title}</b><span>{f.text}</span></div></li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

const PER_PAGE = 3;

export function ClientStories() {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(TESTIMONIALS.length / PER_PAGE));
  const visible = TESTIMONIALS.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="block" id="clients">
      <div className="wrap">
        <Reveal className="center-head">
          <h2>What our clients say</h2>
        </Reveal>
        {TESTIMONIALS.length > 0 ? (
          <div className="quotes-slider">
            <div className="quotes" aria-live="polite">
              {visible.map((t) => (
                <figure className="quote" key={t.name + t.quote.slice(0, 20)}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><b>{t.name}</b><span>{t.role} · {t.place}</span></figcaption>
                </figure>
              ))}
            </div>
            <div className="quotes-nav">
         
              {pages > 1 && (
                <>
                  <button type="button" className="quotes-arrow prev" aria-label="Previous reviews" disabled={page === 0} onClick={() => setPage(page - 1)}>
                    <Icon name="arrow" />
                  </button>
                  <span className="quotes-count">{page + 1} / {pages}</span>
                  <button type="button" className="quotes-arrow" aria-label="Next reviews" disabled={page === pages - 1} onClick={() => setPage(page + 1)}>
                    <Icon name="arrow" />
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <Reveal className="quotes-empty">
            <Icon name="chat" size={28} />
            <div>
              <h3>Client stories are on their way.</h3>
              <p>Bought or explored with XSPACE? Tell us how it went.</p>
            </div>
            <WhatsAppLink className="btn btn-ghost">Share your experience <Icon name="arrow" /></WhatsAppLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
