import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import AhomCrest from './AhomCrest'
import Button from './common/Button'
import { getLenis } from '../lib/smoothScroll'

// Core narrative paths requested by user
const NARRATIVE_PATHS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/migration', label: 'The Migration' },
  { to: '/legacy', label: 'The Legacy' },
  { to: '/dynasty', label: 'Ahom Kings' },
  { to: '/vault', label: 'Heritage Vault' },
];

// Mobile menu motion: panel wipes down like a curtain, links rise in one by one
const CURTAIN_EASE = [0.77, 0, 0.175, 1];
const RISE_EASE = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMobileMenuOpen(false);

  // Close the menu whenever the route changes (e.g. browser back/forward)
  const [menuPath, setMenuPath] = useState(location.pathname);
  if (menuPath !== location.pathname) {
    setMenuPath(location.pathname);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock page scroll while the menu is open; Escape closes it
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const html = document.documentElement;
    html.style.overflow = 'hidden';
    getLenis()?.stop();
    const onKey = (e) => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      html.style.overflow = '';
      getLenis()?.start();
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`royal-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Left: The Royal Crest */}
          <Link to="/" className="brand-royal" aria-label="Sukapha 800 Home">
            <AhomCrest size={42} />
            <span className="brand-logo-text">
              SUKAPHA <span className="brand-logo-800">800</span>
            </span>
          </Link>

          {/* Center: Core Narrative Paths */}
          <ul className="desktop-nav-links">
            {NARRATIVE_PATHS.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => (isActive ? "royal-nav-link active" : "royal-nav-link")}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: Immersive Controls & Action */}
          <div className="desktop-action">
            <Button to="/tribute" variant="filled" arrow>
              Pay Tribute
            </Button>
          </div>

          {/* One round toggle: list icon when closed, X when open */}
          <button
            type="button"
            className={`hamburger-btn ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {/* Three lines: outer two rotate into an X, middle fades out */}
            <span className="hamburger-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            className="mobile-menu"
            data-lenis-prevent
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: CURTAIN_EASE }}
          >
            <nav aria-label="Mobile" className="mobile-menu-nav">
              {NARRATIVE_PATHS.map(({ to, label, end }, idx) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.06, duration: 0.7, ease: RISE_EASE }}
                >
                  <NavLink
                    to={to}
                    end={end}
                    onClick={closeMenu}
                    className={({ isActive }) => (isActive ? 'mobile-menu-link active' : 'mobile-menu-link')}
                  >
                    <span className="mobile-menu-label">{label}</span>
                    <span className="mobile-menu-arrow" aria-hidden="true">
                      <ArrowUpRight size={16} strokeWidth={2.25} />
                    </span>
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: RISE_EASE }}
            >
              <Button to="/tribute" onClick={closeMenu} variant="filled" arrow size="lg" fullWidth>
                Pay Tribute
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
