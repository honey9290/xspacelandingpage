import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Footer, StickyContact } from './components/Closing';
import EnquiryProvider from './components/EnquiryProvider';
import Nav from './components/Nav';
import About from './pages/About';
import Commercial from './pages/Commercial';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Partners from './pages/Partners';
import Projects from './pages/Projects';
import Property from './pages/Property';
import Residential from './pages/Residential';
import Studio from './pages/Studio';
import Verification from './pages/Verification';

/* Each page starts at the top, like a normal website, unless the link
   points at a section (/partners#creators). */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return null;
}

function Layout() {
  return (
    <EnquiryProvider>
      <ScrollToTop />
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow a" aria-hidden="true" />
      <div className="bg-glow b" aria-hidden="true" />
      <Nav />
      <main id="top"><Outlet /></main>
      <Footer />
      <StickyContact />
    </EnquiryProvider>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="property" element={<Property />} />
        <Route path="residential" element={<Residential />} />
        <Route path="commercial" element={<Commercial />} />
        <Route path="projects" element={<Projects />} />
        <Route path="verification" element={<Verification />} />
        <Route path="studio" element={<Studio />} />
        <Route path="partners" element={<Partners />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* Older addresses, kept so shared links still land somewhere sensible */}
        <Route path="locations" element={<Navigate to="/projects" replace />} />
        <Route path="why-xspace" element={<Navigate to="/about" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
