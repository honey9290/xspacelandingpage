import { FinalCta } from '../components/Closing';
import Finder from '../components/Finder';
import PageHero from '../components/PageHero';
import { Head, Paths } from '../components/Sections';
import { HOME_SLIDES, PROPERTY_FINDER } from '../content';
import usePageTitle from '../lib/usePageTitle';

export default function Property() {
  usePageTitle('Find your property');
  return (
    <>
      <PageHero
        slides={HOME_SLIDES}
        title={<>Find what <span className="grad">fits you.</span></>}
        lead="Explore our growing collection of projects and properties across West Hyderabad. Pick what matters to you and we'll come back with the options that fit."
        aside={(
          <Finder
            title="Filter by"
            sub="Choose as many or as few as you like."
            groups={PROPERTY_FINDER}
            intent="Find your property"
            cta="Find my property"
          />
        )}
      />
      <section className="block tight" id="paths">
        <div className="wrap">
          <Head
            kicker="Two ways in"
            title={<>A home for your family, <span className="grad">or space for your business.</span></>}
          />
          <Paths row />
        </div>
      </section>
      <FinalCta variant="property" />
    </>
  );
}
