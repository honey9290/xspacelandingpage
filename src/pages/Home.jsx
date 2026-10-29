import { FinalCta } from '../components/Closing';
import {
  BookingModes, ClientStories, HomeHero, JourneySteps, SampleListings, AboutUs,
} from '../components/HomeSections';
import usePageTitle from '../lib/usePageTitle';

/* One long page; the header links jump between its sections. */
export default function Home() {
  usePageTitle();
  return (
    <>
      <HomeHero />
      <JourneySteps />
      <SampleListings />
      <BookingModes />
      <AboutUs />
      <ClientStories />
      <FinalCta variant="home" talk />
    </>
  );
}
