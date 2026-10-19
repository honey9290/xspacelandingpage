import { FinalCta } from '../components/Closing';
import Icon from '../components/Icon';
import { PageHeader } from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Checklist, Faq, Head } from '../components/Sections';
import { EXPLORE_LIST, VERIFICATION_FAQS, VERIFICATION_NOTE } from '../content';
import { useEnquiry } from '../lib/enquiry';
import usePageTitle from '../lib/usePageTitle';

export default function Verification() {
  usePageTitle('Verification');
  const openEnquiry = useEnquiry();
  return (
    <>
      <PageHeader
        kicker="04 — Know before you own"
        title={<>Know the property <span className="grad">before you see it.</span></>}
        lead="Before spending your time visiting a project, understand what you're looking at."
      />
      <section className="block tight" id="explore">
        <div className="wrap">
          <Head kicker="Explore" title="Everything in one place." />
          <Checklist items={EXPLORE_LIST} />
        </div>
      </section>
      <section className="block tight" id="verify">
        <div className="wrap">
          <Reveal className="verify-panel">
            <div className="icon"><Icon name="shield" /></div>
            <div>
              <h2>Verify before <span className="grad">you visit.</span></h2>
              <p className="section-lead">
                Where applicable, Xspace reviews relevant information against official sources and records the
                verification status and date.
              </p>
              <button className="btn btn-primary btn-lg" onClick={() => openEnquiry('View verification')}>
                View verification <Icon name="arrow" />
              </button>
              <p className="disclaimer">{VERIFICATION_NOTE}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <Faq items={VERIFICATION_FAQS} title="Questions about verification." />
      <FinalCta variant="verification" />
    </>
  );
}
