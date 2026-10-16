import { FinalCta } from '../components/Closing';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';
import { Offers, Paths, Process } from '../components/Sections';
import { HOME_SLIDES } from '../content';
import { useEnquiry } from '../lib/enquiry';
import usePageTitle from '../lib/usePageTitle';

export default function Home() {
  usePageTitle();
  const openEnquiry = useEnquiry();
  return (
    <>
      <PageHero
        slides={HOME_SLIDES}
        eyebrow="Homes · Offices · Commercial · Land, West Hyderabad"
        title={<>Your dream home. Your next office. <span className="grad">Verified first.</span></>}
        lead="Xspace & Co. is the simplest, safest way to buy property in West Hyderabad. Every property is checked before you see it, you watch it on video first, and one advisor stays with you until the keys are in your hand."
        actions={(
          <button className="btn btn-primary btn-lg" onClick={() => openEnquiry('Free 24-hour shortlist')}>
            Get my free shortlist <Icon name="arrow" />
          </button>
        )}
        aside={<Paths />}
        stats
      />
      <Offers />
      <Process />
      <FinalCta variant="home" />
    </>
  );
}
