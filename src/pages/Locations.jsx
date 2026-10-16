import { FinalCta } from '../components/Closing';
import { PageHeader } from '../components/PageHero';
import { AreaGrid, AreasMap } from '../components/Sections';
import usePageTitle from '../lib/usePageTitle';

export default function Locations() {
  usePageTitle('Locations');
  return (
    <>
      <PageHeader
        kicker="Where we work"
        title={<>We know West Hyderabad <span className="grad">street by street.</span></>}
        lead="Our area partners live and work in these neighbourhoods. They know where the school bus stops, which towers are coming up, and about new launches before the listing portals do. Tap a pin or a card to see verified property there."
        aside={<AreasMap />}
      />
      <AreaGrid />
      <FinalCta variant="home" />
    </>
  );
}
