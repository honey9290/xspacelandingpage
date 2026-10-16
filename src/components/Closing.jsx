import { Link } from 'react-router-dom';
import { CONFIG } from '../config';
import { AREAS, CTA, NAV_LINKS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import { CallLink, phoneLabel, WhatsAppLink } from './ContactLinks';
import EnquiryForm from './EnquiryForm';
import Icon from './Icon';
import { Brand } from './Nav';
import Reveal from './Reveal';

/* The closing form, worded for the page it sits on (CTA in content.js). */
export function FinalCta({ variant = 'home', kicker = 'Start here', tight }) {
  const c = CTA[variant];
  return (
    <section className={'block' + (tight ? ' tight' : '')} id="contact">
      <div className="wrap">
        <Reveal className="cta-panel">
          <div className="cta-copy">
            <div className="kicker">{kicker}</div>
            <h2>{c.title[0]}<span className="grad">{c.title[1]}</span></h2>
            <ul>
              {c.points.map(([b, rest]) => (
                <li key={b}><Icon name="check" /><span><b>{b}</b>{rest}</span></li>
              ))}
            </ul>
            <div className="direct">
              <CallLink className="btn btn-ghost"><Icon name="phone" />Call now</CallLink>
              <WhatsAppLink className="btn btn-ghost"><Icon name="whatsapp" />WhatsApp</WhatsAppLink>
            </div>
          </div>
          <div className="form-card">
            <EnquiryForm idPrefix="cta" intent={c.intent} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <Brand />
          <p className="about">
            Verified real estate across West Hyderabad. Homes for families, offices and commercial property for
            businesses, and land, with documents and RERA checked first.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            {NAV_LINKS.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4>Locations</h4>
          <ul>
            {AREAS.slice(0, 5).map((a) => <li key={a.name}><Link to="/locations">{a.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><CallLink className="plain">{phoneLabel}</CallLink></li>
            <li><WhatsAppLink className="plain">WhatsApp</WhatsAppLink></li>
            {CONFIG.email && <li><a href={'mailto:' + CONFIG.email}>{CONFIG.email}</a></li>}
            <li>{CONFIG.office}</li>
          </ul>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} Xspace &amp; Co. All rights reserved.</span>
          {CONFIG.reraAgentNo && <span>TG RERA Agent Reg. No. {CONFIG.reraAgentNo}</span>}
          <span>Photos are representative stock images (Unsplash), not specific listings.</span>
        </div>
      </div>
    </footer>
  );
}

/* WhatsApp bubble on desktop; Call / WhatsApp / Book dock on phones. */
export function StickyContact() {
  const openEnquiry = useEnquiry();
  return (
    <>
      <WhatsAppLink className="wa-float" aria-label="Chat on WhatsApp">
        <span className="tip">Questions? Chat with us</span><Icon name="whatsapp" />
      </WhatsAppLink>
      <div className="mbar">
        <CallLink className="btn btn-ghost"><Icon name="phone" />Call</CallLink>
        <WhatsAppLink className="btn wa"><Icon name="whatsapp" />WhatsApp</WhatsAppLink>
        <button className="btn btn-primary" onClick={() => openEnquiry('Book a site visit')}>Book visit</button>
      </div>
    </>
  );
}
