import { FinalCta } from '../components/Closing';
import { PageHeader } from '../components/PageHero';
import { Compare, Faq, Pledges } from '../components/Sections';
import { GENERAL_FAQS } from '../content';
import usePageTitle from '../lib/usePageTitle';

export default function WhyXspace() {
  usePageTitle('Why Xspace');
  return (
    <>
      <PageHeader
        kicker="Why Xspace & Co."
        title={<>Trust isn't a slogan. <span className="grad">It's how we work.</span></>}
        lead="Buying a home or an office is one of the biggest decisions you'll make. Here's what we do differently, and the rules every Xspace advisor signs before they speak to a client."
      />
      <Compare />
      <Pledges />
      <Faq items={GENERAL_FAQS} />
      <FinalCta variant="home" />
    </>
  );
}
