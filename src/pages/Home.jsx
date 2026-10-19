import { Link } from 'react-router-dom';
import { FinalCta } from '../components/Closing';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Cards, Chain, Head, Journey, Paths } from '../components/Sections';
import { DIFFERENCE_CHAIN, HOME_SLIDES, PILLARS, SERVICES } from '../content';
import usePageTitle from '../lib/usePageTitle';

export default function Home() {
  usePageTitle();
  return (
    <>
      <PageHero
        slides={HOME_SLIDES}
        eyebrow="Xspace & Co. · West Hyderabad"
        title={<>Know before<br /><span className="grad">you own.</span></>}
        tagline="Discover. Verify. Experience. Decide."
        lead="Xspace & Co. brings property discovery, project information, verification, content and expert guidance together to create a smarter, more informed property journey."
        actions={(
          <>
            <Link className="btn btn-primary btn-lg" to="/property">Find your property <Icon name="arrow" /></Link>
            <a className="btn btn-ghost btn-lg" href="#why">Explore Xspace</a>
          </>
        )}
        aside={<Paths />}
      />

      <section className="block" id="why">
        <div className="wrap">
          <Head
            kicker="01 — Why Xspace?"
            title={<>Property decisions deserve <span className="grad">more than a listing.</span></>}
            lead="Buying or investing in property is a major decision. Xspace brings together the information, people, technology and experience you need to make that decision with greater clarity."
          />
          <Cards items={PILLARS} cols={5} numbered />
        </div>
      </section>

      <section className="block tight" id="what-we-do">
        <div className="wrap">
          <Head
            kicker="02 — What we do"
            title={<>We connect the <span className="grad">property journey.</span></>}
            lead="Xspace works across every important part of the property experience."
          />
          <Cards items={SERVICES} cols={4} />
        </div>
      </section>

      <section className="block tight" id="difference">
        <div className="wrap">
          <Reveal className="difference">
            <div>
              <div className="kicker">03 — The Xspace difference</div>
              <h2>Not just finding property. <span className="grad">Understanding it.</span></h2>
              <p className="section-lead">
                Traditional property search can leave you with hundreds of listings, scattered information and endless
                follow-ups. Xspace brings the journey together.
              </p>
            </div>
            <div className="difference-flow">
              <Chain steps={DIFFERENCE_CHAIN} label="The Xspace journey" />
              <h3>One connected experience</h3>
              <p>From your first requirement to the final decision, Xspace coordinates the journey around you.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Journey />
      <FinalCta variant="home" talk />
    </>
  );
}
