import { FinalCta } from '../components/Closing';
import {
  AboutStory, BookingModes, ClientStories, HomeHero, NineSteps, SampleListings, StudioTeaser, WhyXspace,
} from '../components/HomeSections';
import usePageTitle from '../lib/usePageTitle';

/* One long page; the header links jump between its sections. */
export default function Home() {
  usePageTitle();
  return (
    <>
      <HomeHero />
      <WhyXspace />
      <BookingModes />
      <NineSteps />
      <StudioTeaser />
      <SampleListings />
      <AboutStory />
      <ClientStories />
      <FinalCta variant="home" talk />
    </>
  );
}
