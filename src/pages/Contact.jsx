import { CONFIG } from '../config';
import { FinalCta } from '../components/Closing';
import { CallLink, WhatsAppLink } from '../components/ContactLinks';
import Icon from '../components/Icon';
import { PageHeader } from '../components/PageHero';
import Reveal from '../components/Reveal';
import usePageTitle from '../lib/usePageTitle';

export default function Contact() {
  usePageTitle('Contact');
  return (
    <>
      <PageHeader
        kicker="Contact"
        title={<>Talk to a real person. <span className="grad">Today.</span></>}
        lead="Call, WhatsApp or leave your details. An advisor gets back to you, and your number is never shared."
      />
      <section className="block tight contact-top">
        <div className="wrap contact-cards">
          <Reveal>
            <CallLink className="contact-card">
              <span className="icon"><Icon name="phone" /></span>
              <b>Call us</b><span>{CONFIG.phone || 'Request a call back'}</span>
            </CallLink>
          </Reveal>
          <Reveal delay={70}>
            <WhatsAppLink className="contact-card">
              <span className="icon"><Icon name="whatsapp" /></span>
              <b>WhatsApp</b><span>Chat with an advisor</span>
            </WhatsAppLink>
          </Reveal>
          <Reveal delay={140}>
            <div className="contact-card">
              <span className="icon"><Icon name="home" /></span>
              <b>Visit our office</b><span>{CONFIG.office}</span>
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCta variant="home" kicker="Send an enquiry" tight />
    </>
  );
}
