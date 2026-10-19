import { FinalCta } from '../components/Closing';
import { PageHeader } from '../components/PageHero';
import { AreaGrid, AreasMap } from '../components/Sections';
import usePageTitle from '../lib/usePageTitle';

export default function Projects() {
  usePageTitle('Projects');
  return (
    <>
      <PageHeader
        kicker="06 — West Hyderabad"
        title={<>Explore projects across <span className="grad">West Hyderabad.</span></>}
        lead="Our initial property ecosystem focuses on key growth corridors across West Hyderabad. Tap a pin or a card and tell us what you're looking for there."
        aside={<AreasMap />}
      />
      <AreaGrid />
      <FinalCta variant="property" />
    </>
  );
}
