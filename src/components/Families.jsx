import { FAMILY_NEEDS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import Icon from './Icon';
import Reveal from './Reveal';

/* "Made for families": a light section, so the page breathes between the
   dark, technical parts. */
export function Families() {
  const openEnquiry = useEnquiry();
  return (
    <section className="light-band" id="families">
      <div className="wrap families">
        <Reveal className="collage">
          <img className="c-main" src="/images/family-together.webp" alt="A family of five sitting together outdoors, smiling" loading="lazy" />
          <img className="c-side" src="/images/interior-living.webp" alt="A bright, modern living room" loading="lazy" />
          <img className="c-small" src="/images/family-dad.webp" alt="A father holding his two young children" loading="lazy" />
          <div className="c-badge"><Icon name="shield" /><span><b>Verified</b> before you visit</span></div>
        </Reveal>
        <div>
          <Reveal>
            <div className="kicker">Made for families</div>
            <h2>We shortlist around your family's life, <span className="grad">not just your budget.</span></h2>
            <p className="section-lead">
              A dream home is more than square feet. It's the school run, the evening walk, the park downstairs and a room
              for grandparents. Tell us what matters, and every home on your shortlist is chosen with it in mind.
            </p>
          </Reveal>
          <div className="needs">
            {FAMILY_NEEDS.map((n, i) => (
              <Reveal className="need" key={n.title} delay={(i % 2) * 70}>
                <div className="icon"><Icon name={n.icon} /></div>
                <div><h3>{n.title}</h3><p>{n.text}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <button className="btn btn-primary btn-lg" onClick={() => openEnquiry('Free 24-hour shortlist', { note: 'Buying for the family' })}>
              Tell us what your family needs <Icon name="arrow" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* Full-bleed emotional close before the final form. */
export function DreamBanner() {
  const openEnquiry = useEnquiry();
  return (
    <section className="dream">
      <img src="/images/family-sunset.webp" alt="" aria-hidden="true" loading="lazy" />
      <div className="dream-shade" />
      <div className="wrap">
        <Reveal className="dream-copy">
          <Icon name="home" className="dream-icon" />
          <h2>Every family deserves a home <span className="grad">they're sure about.</span></h2>
          <p>
            No guesswork, no pressure, no surprises at registration. Just verified homes, honest advice and a team that
            stays with you until you're home.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => openEnquiry('Free 24-hour shortlist')}>
              Start finding my dream home <Icon name="arrow" />
            </button>
            <button className="btn btn-ghost btn-lg" onClick={() => openEnquiry('Book a site visit')}>Book a free site visit</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
