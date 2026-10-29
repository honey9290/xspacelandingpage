import { Link } from 'react-router-dom';
import { FinalCta } from '../components/Closing';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { Cards, Head } from '../components/Sections';
import { STUDIO_FORMATS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import usePageTitle from '../lib/usePageTitle';

const STUDIO_SLIDES = [
  { src: '/images/interior-living.webp', label: 'Interiors' },
  { src: '/images/hero-community.webp', label: 'Projects & locations' },
];

export default function Studio() {
  usePageTitle('XSPACE Studio');
  const openEnquiry = useEnquiry();
  return (
    <>
      <PageHero
        slides={STUDIO_SLIDES}
        title={<>Property, <span className="grad">told differently.</span></>}
        lead="Understanding a property shouldn't begin and end with a brochure. XSPACE Studio creates visual experiences that bring projects and locations closer to you."
        actions={(
          <>
            <button className="btn btn-primary btn-lg" onClick={() => openEnquiry('Video walkthrough')}>
              Get project content <Icon name="arrow" />
            </button>
            <Link className="btn btn-ghost btn-lg" to="/partners#creators">For creators</Link>
          </>
        )}
      />
      <section className="block" id="formats">
        <div className="wrap">
          <Head kicker="What we create" title={<>See more. Understand more. <span className="grad">Visit with purpose.</span></>} />
          <Cards items={STUDIO_FORMATS} cols={3} />
        </div>
      </section>
      <section className="block tight">
        <div className="wrap">
          <Reveal className="band">
            <div>
              <h2>Made with our Creator Partners.</h2>
              <p className="section-lead">
                Alongside our in-house Studio, Creator Partners bring property and location stories to their own audiences.
              </p>
            </div>
            <Link className="btn btn-ghost btn-lg" to="/partners#creators">Become a Creator Partner <Icon name="arrow" /></Link>
          </Reveal>
        </div>
      </section>
      <FinalCta variant="property" />
    </>
  );
}
