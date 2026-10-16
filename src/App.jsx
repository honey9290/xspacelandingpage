import { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { Footer, StickyContact } from './components/Closing';
import EnquiryProvider from './components/EnquiryProvider';
import Nav from './components/Nav';
import Commercial from './pages/Commercial';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Residential from './pages/Residential';
import WhyXspace from './pages/WhyXspace';

/* Each page starts at the top, like a normal website. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
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
        <Route path="residential" element={<Residential />} />
        <Route path="commercial" element={<Commercial />} />
        <Route path="locations" element={<Locations />} />
        <Route path="why-xspace" element={<WhyXspace />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
