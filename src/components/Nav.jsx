import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../content';
import { CallLink, phoneLabel } from './ContactLinks';
import Icon, { Logo } from './Icon';

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Xspace & Co. home">
      <span className="mark"><Logo /></span>
      Xspace &amp; Co.
    </Link>
  );
}

export default function Nav() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState({ open: false, at: pathname });

  // A menu opened on another page is closed: navigating closes it.
  const open = menu.open && menu.at === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'nav' + (scrolled || open ? ' scrolled' : '') + (open ? ' menu-open' : '')}>
      <div className="wrap">
        <Brand />
        <nav className="nav-links" aria-label="Main">
          {NAV_LINKS.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
        <div className="nav-cta">
          <CallLink className="btn btn-ghost call-btn"><Icon name="phone" />{phoneLabel}</CallLink>
          <Link className="btn btn-primary" to="/property">Find your property</Link>
        </div>
        <button
          className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
          onClick={() => setMenu({ open: !open, at: pathname })}
        >
          <span /><span />
        </button>
      </div>
      {open && (
        <nav className="mobile-menu" aria-label="Main">
          {NAV_LINKS.map(([to, label]) => (
            <NavLink key={to} to={to}>{label}<Icon name="arrow" /></NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
