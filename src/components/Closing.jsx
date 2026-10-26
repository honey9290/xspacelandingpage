import { Link } from 'react-router-dom';
import { BOOKING_INTENT, CONFIG } from '../config';
import { CTA, FOOTER_AUDIENCES, NAV_LINKS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import Chat from './Chat';
import { CallLink, phoneLabel, WhatsAppLink } from './ContactLinks';
import EnquiryForm from './EnquiryForm';
import Icon from './Icon';
import { Brand } from './Nav';
import Reveal from './Reveal';

/* The closing form, worded for the page it sits on (CTA in content.js).
   `talk` swaps "Call now" for the brief's "Talk to Xspace". */
export function FinalCta({ variant = 'home', kicker, tight, talk }) {
  const c = CTA[variant];
  return (
    <section className={'block' + (tight ? ' tight' : '')} id="contact">
      <div className="wrap">
        <Reveal className="cta-panel">
          <div className="cta-copy">
            <div className="kicker">{kicker || c.kicker || 'Start here'}</div>
            <h2>{c.title[0]}<span className="grad">{c.title[1]}</span></h2>
            {c.lead && <p className="section-lead">{c.lead}</p>}
            <ul>
              {c.points.map(([b, rest]) => (
                <li key={b}><Icon name="check" /><span><b>{b}</b>{rest}</span></li>
              ))}
            </ul>
            <div className="direct">
              <CallLink className="btn btn-ghost"><Icon name="phone" />{talk ? 'Talk to Xspace' : 'Call now'}</CallLink>
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

const SOCIAL = [
  ['instagram', 'Instagram'],
  ['youtube', 'YouTube'],
  ['linkedin', 'LinkedIn'],
].filter(([key]) => CONFIG.social[key]);

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <Brand />
          <p className="motto">Know Before You Own.</p>
          <p className="about">
            Xspace doesn&apos;t just show you property. Xspace helps you understand it, verify it, experience it and
            make a better decision.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4>For</h4>
          <ul>
            {FOOTER_AUDIENCES.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><CallLink className="plain">{phoneLabel}</CallLink></li>
            <li><WhatsAppLink className="plain">WhatsApp</WhatsAppLink></li>
            {CONFIG.email && <li><a href={'mailto:' + CONFIG.email}>{CONFIG.email}</a></li>}
          </ul>
          {SOCIAL.length > 0 && (
            <ul className="social">
              {SOCIAL.map(([key, label]) => (
                <li key={key}><a href={CONFIG.social[key]} target="_blank" rel="noopener noreferrer">{label}</a></li>
              ))}
            </ul>
          )}
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} Xspace &amp; Co. All Rights Reserved.</span>
          {CONFIG.reraAgentNo && <span>TG RERA Agent Reg. No. {CONFIG.reraAgentNo}</span>}
          <span>Photos are representative stock images (Unsplash), not specific listings.</span>
        </div>
      </div>
    </footer>
  );
}

/* The chat box, fixed to the screen on every size; plus a Call /
   WhatsApp / Book dock on phones. */
export function StickyContact() {
  const openEnquiry = useEnquiry();
  return (
    <>
      <Chat />
      <div className="mbar">
        <CallLink className="btn btn-ghost"><Icon name="phone" />Call</CallLink>
        <WhatsAppLink className="btn wa"><Icon name="whatsapp" />WhatsApp</WhatsAppLink>
        <button className="btn btn-primary" onClick={() => openEnquiry(BOOKING_INTENT)}>Book</button>
      </div>
    </>
  );
}
