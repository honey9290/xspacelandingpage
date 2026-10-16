import BudgetPlanner from './components/BudgetPlanner';
import Business from './components/Business';
import { FinalCta, Footer, StickyContact } from './components/Closing';
import EnquiryProvider from './components/EnquiryProvider';
import { DreamBanner, Families } from './components/Families';
import Hero from './components/Hero';
import Nav from './components/Nav';
import { Areas, Compare, Faq, Offers, Process, Pledges, PropertyTypes } from './components/Sections';

export default function App() {
  return (
    <EnquiryProvider>
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow a" aria-hidden="true" />
      <div className="bg-glow b" aria-hidden="true" />
      <Nav />
      <main id="top">
        <Hero />
        <Families />
        <Offers />
        <PropertyTypes />
        <Business />
        <Process />
        <Areas />
        <BudgetPlanner />
        <Compare />
        <Pledges />
        <Faq />
        <DreamBanner />
        <FinalCta />
      </main>
      <Footer />
      <StickyContact />
    </EnquiryProvider>
  );
}
