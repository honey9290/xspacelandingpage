import Business from '../components/Business';
import { FinalCta } from '../components/Closing';
import Finder from '../components/Finder';
import PageHero from '../components/PageHero';
import { Faq, PropertyGrid } from '../components/Sections';
import { COM_FAQS, COM_FINDER, COM_SLIDES, COM_TYPES } from '../content';
import usePageTitle from '../lib/usePageTitle';

export default function Commercial() {
  usePageTitle('Commercial');
  return (
    <>
      <PageHero
        slides={COM_SLIDES}
        eyebrow="Commercial · Offices, buildings, retail, warehouses, land"
        title={<>Offices and commercial property, <span className="grad">checked like a home.</span></>}
        lead="Your next office, a whole commercial building, a showroom or a warehouse, with title, approvals and commercial-use permissions verified before you visit."
        aside={(
          <Finder
            title="Find space for your business"
            sub="Three taps. We'll send verified options that fit your brief."
            groups={COM_FINDER}
            intent="Business space"
            cta="Show me verified spaces"
          />
        )}
      />
      <PropertyGrid
        kicker="Commercial property"
        title={<>Every kind of business space, <span className="grad">one trusted team.</span></>}
        lead="Pick what you need. An advisor who specialises in it will call you."
        types={COM_TYPES}
      />
      <Business />
      <Faq items={COM_FAQS} title="Questions businesses ask us." />
      <FinalCta variant="commercial" />
    </>
  );
}
