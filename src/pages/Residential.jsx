import BudgetPlanner from '../components/BudgetPlanner';
import { FinalCta } from '../components/Closing';
import Families from '../components/Families';
import Finder from '../components/Finder';
import PageHero from '../components/PageHero';
import { Faq, PropertyGrid } from '../components/Sections';
import { RES_FAQS, RES_FINDER, RES_SLIDES, RES_TYPES } from '../content';
import usePageTitle from '../lib/usePageTitle';

export default function Residential() {
  usePageTitle('Residential');
  return (
    <>
      <PageHero
        slides={RES_SLIDES}
        eyebrow="Residential · For families buying in West Hyderabad"
        title={<>Find the home your family <span className="grad">will grow up in.</span></>}
        lead="Apartments, villas and independent houses, verified before you see them and shortlisted around your family's life: schools, commute, parks and space for parents."
        aside={(
          <Finder
            title="Find your dream home"
            sub="Tell us a little about your family. We'll send verified homes that fit."
            groups={RES_FINDER}
            cta="Show me verified homes"
          />
        )}
      />
      <Families />
      <PropertyGrid
        kicker="Homes we deal in"
        title={<>Whatever home you picture, <span className="grad">we'll find it.</span></>}
        lead="Pick the kind of home you picture your family in. An advisor who specialises in it will call you."
        types={RES_TYPES}
      />
      <BudgetPlanner />
      <Faq items={RES_FAQS} title="Questions home buyers ask us." />
      <FinalCta variant="residential" />
    </>
  );
}
