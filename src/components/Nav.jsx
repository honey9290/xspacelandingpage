import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BOOKING_INTENT } from '../config';
import { NAV_LINKS, SECTION_LINKS } from '../content';
import { useEnquiry } from '../lib/enquiry';
import Icon from './Icon';

/* How many of SECTION_LINKS fit in the header; the drawer lists them all. */
const HEADER_LINKS = 5;

/* The company name on its own, no mark. */
export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Xspace & Co. home">Xspace &amp; Co.</Link>
  );
}

/* index.html sets data-theme before first paint; this keeps it and the
   visitor's choice in step. */
function readTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);
  const pick = (t) => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('xs_theme', t); } catch { /* private mode */ }
  };
  return (
    <div className="theme-toggle" role="group" aria-label="Colour theme">
      <button type="button" aria-label="Light theme" aria-pressed={theme === 'light'} onClick={() => pick('light')}>
        <Icon name="sun" />
      </button>
      <button type="button" aria-label="Dark theme" aria-pressed={theme === 'dark'} onClick={() => pick('dark')}>
        <Icon name="moon" />
      </button>
    </div>
  );
}

/* On the home page, which section is in the middle of the screen. */
function useActiveSection(enabled) {
  const [active, setActive] = useState('');
  useEffect(() => {
    if (!enabled) return undefined;
    const els = SECTION_LINKS.map(([id]) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [enabled]);
  return enabled ? active : '';
}

export default function Nav() {
  const { pathname } = useLocation();
  const openEnquiry = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState({ open: false, at: pathname });
  const active = useActiveSection(pathname === '/');

  // A menu opened on another page is closed: navigating closes it.
  const open = menu.open && menu.at === pathname;
  const close = () => setMenu({ open: false, at: pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setMenu({ open: false, at: pathname }); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, pathname]);

  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="wrap">
          <button
            className="menu-btn" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}
            onClick={() => setMenu({ open: !open, at: pathname })}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
          <Brand />
          <nav className="nav-links" aria-label="Sections">
            {SECTION_LINKS.slice(0, HEADER_LINKS).map(([id, label]) => (
              <Link key={id} to={'/#' + id} className={active === id ? 'active' : ''}>{label}</Link>
            ))}
          </nav>
          <div className="nav-cta">
            <button className="btn btn-primary book-btn" onClick={() => openEnquiry(BOOKING_INTENT)}>
              Book appointment <Icon name="calendar" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className={'drawer-scrim' + (open ? ' open' : '')} onClick={close} aria-hidden="true" />
      <aside className={'drawer' + (open ? ' open' : '')} aria-label="Menu" aria-hidden={!open} inert={!open}>
        <p className="field-label">On this page</p>
        <nav aria-label="Home sections">
          {SECTION_LINKS.map(([id, label]) => (
            <Link key={id} to={'/#' + id} onClick={close}>{label}<Icon name="arrow" /></Link>
          ))}
        </nav>
        <p className="field-label">Pages</p>
        <nav aria-label="Pages">
          {NAV_LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={close}>{label}<Icon name="arrow" /></NavLink>
          ))}
        </nav>
        <button className="btn btn-primary btn-lg" onClick={() => { close(); openEnquiry(BOOKING_INTENT); }}>
          Book appointment <Icon name="calendar" />
        </button>
      </aside>
    </>
  );
}
