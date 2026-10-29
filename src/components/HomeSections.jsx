import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_INTENT, DEFAULT_INTENT } from '../config';
import {
  BOOKING_CARDS, BOOKING_LEAD, CLIENT_GROUPS, JOURNEY, LISTING_FACTS, LISTING_FILTERS, SAMPLE_LISTINGS, STATS, STORY_FEATURES,
  STUDIO_FORMATS, TESTIMONIALS, TRADITIONAL_WAY, WHY_CARDS, WHY_CHECKS, XSPACE_WAY,
} from '../content';
import { useEnquiry } from '../lib/enquiry';
import { WhatsAppLink } from './ContactLinks';
import Icon from './Icon';
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
        <div className="kicker">{kicker}</div>
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
    <section className="hero home-hero dark-zone">
      <div className="hero-media" aria-hidden="true">
        <img className="on" src="/images/hero-house.webp" alt="" fetchPriority="high" />
        <div className="hero-shade" />
      </div>
      <div className="wrap">
        <Reveal as="h1" className="mega">
          Why visit first, when you can <u>know first?</u>
        </Reveal>
        <Reveal as="p" className="tagline">Visit less. Know more.</Reveal>
        <Reveal className="hero-actions">
          <button
            className="btn btn-primary btn-lg"
            onClick={() => openEnquiry(BOOKING_INTENT, { mode: 'Virtual / Zoom call' })}
          >
            Book discovery consultation <Icon name="arrow" />
          </button>
          <a className="btn btn-ghost btn-lg" href="#journey"><Icon name="route" />Explore the 6-step journey</a>
        </Reveal>
      </div>
    </section>
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
        {WHY_CHECKS.map((c) => (
          <li key={c}><Icon name="shield" />{c}<span><Icon name="check" />Checked</span></li>
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

export function WhyXSPACE() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block" id="why">
      <div className="wrap">
        <FeatureHead
          img="/images/mock/why-head.webp" kicker="01. Why choose XSPACE"
          title={<>Know before<br />you visit.</>}
          lead="Checked information, videos and expert advice in one place, so you visit only what fits."
          note={<>Verified properties.<br />Smarter decisions.</>}
        />
        <div className="why-grid">
          {WHY_CARDS.map((c, i) => {
            const go = c.intent
              ? <button className="round-go" aria-label={c.title} onClick={() => openEnquiry(c.intent)}><Icon name="arrow" /></button>
              : c.to.startsWith('#')
                ? <a className="round-go" aria-label={c.title} href={c.to}><Icon name="arrow" /></a>
                : <Link className="round-go" aria-label={c.title} to={c.to}><Icon name="arrow" /></Link>;
            return (
              <Reveal as="article" className="why-card" key={c.title} delay={i * 60}>
                <div className="why-top">
                  <span className="why-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="icon-sq"><Icon name={c.icon} /></span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="why-vis"><WhyVisual card={c} />{go}</div>
              </Reveal>
            );
          })}
        </div>
        <Stats />
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
            <div className="kicker">02. Flexible consultation</div>
            <h2>Book in 3<br />convenient modes</h2>
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
          <div className="kicker">03. The transformation</div>
          <h2>The 6-step<br />client journey</h2>
          <p className="section-lead">From your first search to the deal.</p>
        </Reveal>
        <ol className="steps9">
          {JOURNEY.map((s, i) => (
            <Reveal as="li" className="step9" key={s.title} delay={(i % 3) * 70}>
              <span className="outline-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              {/* Step copy is ours (content.js); <b> marks the key phrase. */}
              <p dangerouslySetInnerHTML={{ __html: s.text }} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function StudioTeaser() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block" id="studio">
      <div className="wrap studio-split">
        <Reveal className="studio-media dark-zone">
          <img src="/images/hero-community.webp" alt="" loading="lazy" />
          <span className="play big"><Icon name="play" /></span>
          <span className="studio-tag">XSPACE Studio · representative image</span>
        </Reveal>
        <div>
          <Reveal>
            <div className="kicker">04. XSPACE Studio</div>
            <h2>Property, told differently.</h2>
            <p className="section-lead">We film projects and areas so you can see them before you go.</p>
          </Reveal>
          <Reveal as="ul" className="studio-list">
            {STUDIO_FORMATS.map((f) => <li key={f.title}><Icon name={f.icon} /><span><b>{f.title}</b>{f.text}</span></li>)}
          </Reveal>
          <Reveal className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => openEnquiry('Video walkthrough')}>Get project content <Icon name="arrow" /></button>
            <Link className="btn btn-ghost btn-lg" to="/studio">Visit the Studio</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function SampleListings() {
  const openEnquiry = useEnquiry();
  const [filter, setFilter] = useState(LISTING_FILTERS[0]);
  const [picked, setPicked] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const table = useRef(null);

  const shown = filter === LISTING_FILTERS[0] ? SAMPLE_LISTINGS : SAMPLE_LISTINGS.filter((l) => l.category === filter);
  const compared = useMemo(() => SAMPLE_LISTINGS.filter((l) => picked.includes(l.id)), [picked]);

  const toggle = (id) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length < 3 ? [...p, id] : p));
  const compare = () => {
    setShowCompare(true);
    requestAnimationFrame(() => table.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return (
    <section className="block" id="listings">
      <div className="wrap">
        <Reveal className="head split">
          <div>
            <div className="kicker">05. Sample listings</div>
            <h2>See what a shortlist looks like.</h2>
            <p className="section-lead">Tick up to three to compare them.</p>
          </div>
          <div className="chips" role="group" aria-label="Filter listings">
            {LISTING_FILTERS.map((f) => (
              <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>
        </Reveal>

        <div className="listings">
          {shown.map((l) => {
            const on = picked.includes(l.id);
            return (
              <article className={'listing' + (on ? ' on' : '')} key={l.id}>
                <div className="listing-img">
                  <img src={l.img} alt="" loading="lazy" />
                  <span className="listing-tag">Sample</span>
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
        <p className="photo-note">Samples only, not live listings. Ask us for current options and prices.</p>

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
          img="/images/mock/about-head.webp" kicker="06. About XSPACE & CO."
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

export function ClientStories() {
  const [group, setGroup] = useState('All');
  const shown = group === 'All' ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.group === group);

  return (
    <section className="block" id="clients">
      <div className="wrap">
        <FeatureHead
          img="/images/mock/clients-head.webp" kicker="07. What our clients say"
          title={<>Real people.<br /><span className="grad">Better decisions.</span></>}
          lead="We share only real reviews from real clients."
          note={<>Informed clients<br />make better decisions.</>}
        >
          {TESTIMONIALS.length > 0 && (
            <div className="chips" role="group" aria-label="Filter reviews">
              {['All', ...CLIENT_GROUPS].map((g) => (
                <button key={g} type="button" className="chip" aria-pressed={group === g} onClick={() => setGroup(g)}>{g}</button>
              ))}
            </div>
          )}
        </FeatureHead>

        {TESTIMONIALS.length > 0 ? (
          <div className="quotes">
            {shown.map((t) => (
              <Reveal as="figure" className="quote" key={t.name + t.quote.slice(0, 20)}>
                <blockquote>{t.quote}</blockquote>
                <figcaption><b>{t.name}</b><span>{t.role} · {t.place}</span></figcaption>
              </Reveal>
            ))}
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
