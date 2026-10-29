import Icon from '../components/Icon';
import { PageHeader } from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Cards, Chain, Checklist } from '../components/Sections';
import {
  CREATOR_FORMATS, DEVELOPER_SERVICES, ECOSYSTEM, EDITOR_WORK, REALTOR_CHAIN, REALTOR_FOCUS,
} from '../content';
import { useEnquiry } from '../lib/enquiry';
import usePageTitle from '../lib/usePageTitle';

/* One partner group: copy on the left, what they do on the right. */
function PartnerSection({ id, kicker, title, lead, intent, cta, children }) {
  const openEnquiry = useEnquiry();
  return (
    <section className="block tight" id={id}>
      <div className="wrap">
        <Reveal className="partner">
          <div>
            {kicker && <div className="kicker">{kicker}</div>}
            <h2>{title}</h2>
            {lead && <p className="section-lead">{lead}</p>}
            <button className="btn btn-primary btn-lg" onClick={() => openEnquiry(intent)}>{cta} <Icon name="arrow" /></button>
          </div>
          <div>{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Partners() {
  usePageTitle('Partners');
  return (
    <>
      <PageHeader
        title={<>Property is connected <span className="grad">by people.</span></>}
        lead="XSPACE brings together different parts of the property ecosystem."
      />
      <section className="block tight" id="ecosystem">
        <div className="wrap"><Cards items={ECOSYSTEM.map((e) => ({ ...e, cta: 'Learn more' }))} cols={3} /></div>
      </section>

      <PartnerSection
        id="developers"
        title={<>Bring your project into <span className="grad">the XSPACE ecosystem.</span></>}
        lead="We help developers and property owners connect their projects with customers through:"
        intent="Partner with XSPACE" cta="Partner with XSPACE"
      >
        <Checklist items={DEVELOPER_SERVICES} />
      </PartnerSection>

      <PartnerSection
        id="realtors"
        title={<>You bring the property experience. <span className="grad">XSPACE builds the system around it.</span></>}
        intent="Become a Realtor Partner" cta="Become a Realtor Partner"
      >
        <p className="field-label">Our Realtor Partners focus on</p>
        <div className="focus">
          {REALTOR_FOCUS.map((f) => (
            <div className="focus-item" key={f.title}>
              <div className="icon"><Icon name={f.icon} /></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
        <p className="field-label">XSPACE manages the broader customer journey</p>
        <Chain steps={REALTOR_CHAIN} label="The customer journey XSPACE manages" />
      </PartnerSection>

      <PartnerSection
        id="creators"
        title={<>Create. Connect. <span className="grad">Grow.</span></>}
        lead="Bring property and location stories to your audience through the XSPACE ecosystem, and generate meaningful property enquiries through your content."
        intent="Become a Creator Partner" cta="Become a Creator Partner"
      >
        <p className="field-label">Create</p>
        <Checklist items={CREATOR_FORMATS} />
      </PartnerSection>

      <PartnerSection
        id="editors"
        title={<>Edit. Shape. <span className="grad">Tell the story.</span></>}
        lead="Join the XSPACE Studio team and turn site footage into the walkthroughs and films buyers watch before they visit."
        intent="Join as a Studio Editor" cta="Join as a Studio Editor"
      >
        <p className="field-label">Work on</p>
        <Checklist items={EDITOR_WORK} />
      </PartnerSection>
    </>
  );
}
