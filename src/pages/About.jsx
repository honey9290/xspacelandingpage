import { FinalCta } from '../components/Closing';
import { PageHeader } from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Cards, Faq, Head } from '../components/Sections';
import { GENERAL_FAQS, PORTAL_MODULES, TRUST } from '../content';
import usePageTitle from '../lib/usePageTitle';

export default function About() {
  usePageTitle('About');
  return (
    <>
      <PageHeader
        kicker="13 — About Xspace"
        title={<>Building a better <span className="grad">property experience.</span></>}
        lead="Xspace & Co. was built around a simple idea: property decisions should be more informed, more transparent and easier to navigate."
      />
      <section className="block tight" id="story">
        <div className="wrap">
          <Reveal className="statement">
            <p>We are building a connected ecosystem where property, people, content and technology work together.</p>
            <p>
              We don't want to simply help people find properties.{' '}
              <span className="grad">We want to help them understand what they're choosing before they commit.</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="block" id="trust">
        <div className="wrap">
          <Head kicker="14 — Trust" title={<>Built around <span className="grad">trust.</span></>} />
          <Cards items={TRUST} cols={5} />
        </div>
      </section>

      <section className="block tight" id="technology">
        <div className="wrap">
          <Head
            kicker="08 — Technology"
            title={<>Technology powering <span className="grad">the experience.</span></>}
            lead="Behind every Xspace client journey is a private technology system built to help our team operate more efficiently. Our internal platform, the private Xspace Portal, connects:"
          />
          <Cards items={PORTAL_MODULES} cols={3} />
          <Reveal as="p" className="closing-line">
            The technology stays behind the scenes. <span className="grad">The experience stays with you.</span>
          </Reveal>
        </div>
      </section>

      <Faq items={GENERAL_FAQS} />
      <FinalCta variant="home" talk />
    </>
  );
}
