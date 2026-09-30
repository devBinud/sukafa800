import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingWidgets from './components/FloatingWidgets'
import ScrollReveal from './components/ScrollReveal'
import { initSmoothScroll, scrollToTarget } from './lib/smoothScroll'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MigrationPage from './pages/MigrationPage'
import LegacyPage from './pages/LegacyPage'
import DynastyPage from './pages/DynastyPage'
import HeritageVaultPage from './pages/HeritageVaultPage'
import TributePage from './pages/TributePage'
import VisitPlannerPage from './pages/VisitPlannerPage'
import LegalPage from './pages/LegalPage'
import EventsPage from './pages/EventsPage'
import PastEventsPage from './pages/PastEventsPage'
import CommunitiesPage from './pages/CommunitiesPage'
import SpiritualAxisPage from './pages/SpiritualAxisPage'
import MonumentsPage from './pages/MonumentsPage'
import LivingHeritagePage from './pages/LivingHeritagePage'
import ContactPage from './pages/ContactPage'
import './App.css'

// Scroll to the linked section (e.g. #insights), or to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        scrollToTarget(target);
        return;
      }
    }
    scrollToTarget(0, { immediate: true });
  }, [pathname, hash]);
  return null;
}

function App() {
  // Lenis smooth scrolling
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return (
    <div className="royal-app-container">
      <ScrollToTop />
      <ScrollReveal />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Bor Axom: the composite mosaic */}
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/spiritual-axis" element={<SpiritualAxisPage />} />
          <Route path="/monuments" element={<MonumentsPage />} />
          <Route path="/living-heritage" element={<LivingHeritagePage />} />

          {/* Ahom heritage */}
          <Route path="/migration" element={<MigrationPage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/dynasty" element={<DynastyPage />} />
          <Route path="/vault" element={<HeritageVaultPage />} />

          {/* Secondary pages (footer & in-page links) */}
          <Route path="/tribute" element={<TributePage />} />
          <Route path="/visit" element={<VisitPlannerPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/past" element={<PastEventsPage />} />

          {/* Earlier URLs redirect to their new homes */}
          <Route path="/culture" element={<Navigate to="/legacy" replace />} />
          <Route path="/heritage" element={<Navigate to="/vault" replace />} />
          <Route path="/planner" element={<Navigate to="/visit" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWidgets />
    </div>
  )
}

export default App
