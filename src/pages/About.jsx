import { FinalCta } from '../components/Closing';
import { AboutStory, Founder } from '../components/HomeSections';
import Reveal from '../components/Reveal';
import { Cards, Faq, Head } from '../components/Sections';
import { GENERAL_FAQS, PORTAL_MODULES, TRUST } from '../content';
import usePageTitle from '../lib/usePageTitle';

export default function About() {
  usePageTitle('About');
  return (
    <>
      <section className="block">
        <div className="wrap"><Founder /></div>
      </section>
      <AboutStory />

      <section className="block" id="trust">
        <div className="wrap">
          <Head title={<>Built around <span className="grad">trust.</span></>} />
          <Cards items={TRUST} cols={5} />
        </div>
      </section>

      <section className="block tight" id="technology">
        <div className="wrap">
          <Head
            title={<>Technology powering <span className="grad">the experience.</span></>}
            lead="Behind every XSPACE client journey is a private technology system built to help our team operate more efficiently. Our internal platform, the private XSPACE Portal, connects:"
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
