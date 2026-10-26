import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_INTENT, DEFAULT_INTENT } from '../config';
import {
  BOOKING_CARDS, BOOKING_LEAD, CLIENT_GROUPS, JOURNEY, LISTING_FACTS, LISTING_FILTERS, SAMPLE_LISTINGS, STATS, STORY_FEATURES,
  STUDIO_FORMATS, TESTIMONIALS, TRADITIONAL_WAY, WHY_CARDS, WHY_CHECKS, XSPACE_WAY,
} from '../content';
import { useEnquiry } from '../lib/enquiry';
import { waLink, waNumber } from '../lib/format';
import Icon from './Icon';
import Reveal from './Reveal';

/* The sections of the home page, top to bottom. Copy lives in content.js. */

/* Full-width photo header used by Why, About and Clients: copy on the left,
   a handwritten note on the right. Always dark, whatever the theme. */
function FeatureHead({ img, kicker, title, lead, note, children }) {
  return (
    <Reveal className="feature-head dark-zone">
      <img src={img} alt="" loading="lazy" />
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
        <Reveal as="p" className="eyebrow-line">
          <span>Real estate discovery</span><span>Decision platform</span><span>Hyderabad</span>
        </Reveal>
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
          <a className="btn btn-ghost btn-lg" href="#journey"><Icon name="route" />Explore the 9-step journey</a>
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
      {card.visual === 'video' && <span className="play"><Icon name="play" /></span>}
    </div>
  );
}

export function WhyXspace() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block" id="why">
      <div className="wrap">
        <FeatureHead
          img="/images/interior-living.webp" kicker="01. Why choose Xspace"
          title={<>Know before<br />you visit.</>}
          lead="A real-estate discovery and decision platform that brings verified information, immersive content and expert guidance together, so you can make confident decisions and visit only what truly matters."
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

export function NineSteps() {
  return (
    <section className="block" id="journey">
      <div className="wrap">
        <Reveal className="center-head">
          <div className="kicker">03. The transformation</div>
          <h2>The 9-step<br />client journey</h2>
          <p className="section-lead">How Xspace turns weeks of chaotic site visits into a precise, digital-first decision process.</p>
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
          <span className="studio-tag">Xspace Studio · representative image</span>
        </Reveal>
        <div>
          <Reveal>
            <div className="kicker">04. Xspace Studio</div>
            <h2>Property, told differently.</h2>
            <p className="section-lead">
              Our in-house Studio films projects and neighbourhoods so you can understand a property long before you
              drive to it.
            </p>
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
            <p className="section-lead">
              Each option comes with its content and the checks we run. Tick up to three to compare them side by side.
            </p>
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
        <p className="photo-note">
          Sample listings show the format of an Xspace shortlist. They are not live inventory, and photos are
          representative. Ask us for current options and prices.
        </p>

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
          img="/images/hero-commercial.webp" kicker="06. About Xspace & Co."
          title={<>Let&apos;s reimagine<br /><span className="grad">buying property.</span></>}
          lead="Buying a property is one of the most important decisions in life. But today, it often means visiting dozens of properties, spending weeks, and still being unsure about documentation, approvals and the real value."
          note={<>Better information.<br />Better decisions.</>}
        />
        <div className="ways">
          <Reveal className="way old">
            <div className="kicker">The traditional way</div>
            <h3>Time consuming. Confusing.</h3>
            <WayRow items={TRADITIONAL_WAY} />
          </Reveal>
          <Reveal className="way new" delay={80}>
            <div className="kicker">The Xspace way</div>
            <h3>Know first. Visit later.</h3>
            <WayRow items={XSPACE_WAY} />
          </Reveal>
        </div>
        <Reveal className="story">
          <div className="story-img dark-zone">
            <img src="/images/hero-community.webp" alt="" loading="lazy" />
            <p>Property<br />Technology<br />Content<br />Trust</p>
          </div>
          <div className="story-copy">
            <div className="kicker">Our story</div>
            <h3>A more informed way forward.</h3>
            <p>
              Xspace &amp; Co. was founded with a simple idea: bring transparency, technology and expert guidance
              together, so you can know the property before you visit it.
            </p>
            <p>
              We combine verified information, immersive content and real-estate expertise to help you make confident
              decisions and focus only on properties that truly fit your needs.
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
  const openEnquiry = useEnquiry();
  const [group, setGroup] = useState('All');
  const shown = group === 'All' ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.group === group);
  const share = waNumber
    ? { as: 'a', props: { href: waLink("Hi Xspace & Co., I'd like to share my experience."), target: '_blank', rel: 'noopener noreferrer' } }
    : { as: 'button', props: { onClick: () => openEnquiry('Talk to Xspace', { note: 'Wants to share feedback' }) } };
  const Share = share.as;

  return (
    <section className="block" id="clients">
      <div className="wrap">
        <FeatureHead
          img="/images/interior-living.webp" kicker="07. What our clients say"
          title={<>Real people.<br /><span className="grad">Better decisions.</span></>}
          lead="From first-time home buyers to experienced investors, we want every client to leave with clarity, verified information and a smarter way to explore real estate in Hyderabad."
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
              <p>
                We publish only real reviews, shared with the client&apos;s permission. Bought or explored with Xspace?
                We&apos;d love to hear how it went.
              </p>
            </div>
            <Share className="btn btn-ghost" {...share.props}>Share your experience <Icon name="arrow" /></Share>
          </Reveal>
        )}

        <Stats />

        <Reveal className="ready dark-zone">
          <img src="/images/interior-living.webp" alt="" loading="lazy" />
          <div>
            <div className="kicker">Ready to experience it yourself?</div>
            <h2>Let&apos;s help you make a better decision.</h2>
          </div>
          <div className="ready-cta">
            <button className="btn btn-primary btn-lg" onClick={() => openEnquiry(BOOKING_INTENT)}>
              Book a consultation <Icon name="arrow" />
            </button>
            <p>Talk to our team and explore the right properties with verified information and expert guidance.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
