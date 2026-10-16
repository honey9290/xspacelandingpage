import { useEffect, useState } from 'react';
import { useEnquiry } from '../lib/enquiry';
import { CallLink, phoneLabel } from './ContactLinks';
import Icon, { Logo } from './Icon';

const LINKS = [
  ['#offers', 'Why us'],
  ['#types', 'Properties'],
  ['#business', 'Commercial'],
  ['#areas', 'Locations'],
  ['#faq', 'FAQ'],
];

export function Brand() {
  return (
    <a href="#top" className="brand" aria-label="Xspace & Co. home">
      <span className="mark"><Logo /></span>
      Xspace &amp; Co.
    </a>
  );
}

export default function Nav() {
  const openEnquiry = useEnquiry();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'nav' + (scrolled ? ' scrolled' : '')}>
      <div className="wrap">
        <Brand />
        <nav className="nav-links" aria-label="Sections">
          {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-cta">
          <CallLink className="btn btn-ghost call-btn"><Icon name="phone" />{phoneLabel}</CallLink>
          <button className="btn btn-primary" onClick={() => openEnquiry('Book a site visit')}>Book a free visit</button>
        </div>
      </div>
    </header>
  );
}
