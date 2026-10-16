import { BUSINESS_CHECKS, BUSINESS_HELP } from '../content';
import { useEnquiry } from '../lib/enquiry';
import Icon from './Icon';
import Reveal from './Reveal';

/* How we help businesses and investors, plus what we check. */
export default function Business() {
  const openEnquiry = useEnquiry();
  return (
    <section className="block tight" id="business">
      <div className="wrap business">
        <Reveal className="biz-media">
          <img className="biz-main" src="/images/biz-office.webp" alt="A bright, modern open-plan office" loading="lazy" />
          <img className="biz-side" src="/images/type-building.webp" alt="A glass-fronted commercial office building" loading="lazy" />
          <div className="biz-chip"><span className="live">Offices · Buildings · Retail · Warehouses</span></div>
        </Reveal>
        <div>
          <Reveal>
            <div className="kicker">For business &amp; investors</div>
            <h2>Business property, <span className="grad">without the guesswork.</span></h2>
            <p className="section-lead">
              We find, verify and negotiate commercial property with the same care we take for families, so your next
              office, showroom or warehouse comes with clean paperwork.
            </p>
          </Reveal>
          <div className="biz-grid">
            {BUSINESS_HELP.map((b, i) => (
              <Reveal className="biz-item" key={b.title} delay={(i % 2) * 70}>
                <div className="icon"><Icon name={b.icon} /></div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="biz-checks">
            <span>Every business property is checked for</span>
            <ul>{BUSINESS_CHECKS.map((c) => <li key={c}><Icon name="check" />{c}</li>)}</ul>
          </Reveal>
          <Reveal>
            <button className="btn btn-primary btn-lg" onClick={() => openEnquiry('Business space', { type: 'Office Space' })}>
              Find space for my business <Icon name="arrow" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
