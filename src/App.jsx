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

          {/* Core narrative paths (navbar) */}
          <Route path="/migration" element={<MigrationPage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/dynasty" element={<DynastyPage />} />
          <Route path="/vault" element={<HeritageVaultPage />} />

          {/* Secondary pages (footer & in-page links) */}
          <Route path="/tribute" element={<TributePage />} />
          <Route path="/visit" element={<VisitPlannerPage />} />
          <Route path="/legal" element={<LegalPage />} />

          {/* Earlier URLs redirect to their new homes */}
          <Route path="/events" element={<Navigate to="/dynasty" replace />} />
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
