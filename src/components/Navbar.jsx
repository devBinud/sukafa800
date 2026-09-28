import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Home, Route, Users, Crown, Landmark, ArrowUpRight } from 'lucide-react'
import AhomCrest from './AhomCrest'
import Button from './common/Button'

// Core narrative paths requested by user
const NARRATIVE_PATHS = [
  { to: '/', label: 'Home', tag: 'Bor Asom', icon: Home, end: true },
  { to: '/migration', label: 'The Migration', tag: 'Chronicles', icon: Route },
  { to: '/legacy', label: 'The Legacy', tag: 'Assimilation', icon: Users },
  { to: '/dynasty', label: 'Ahom Kings', tag: '40 Swargadeos', icon: Crown },
  { to: '/vault', label: 'Heritage Vault', tag: 'UNESCO Vault', icon: Landmark },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`mobile-overlay ${mobileMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Off-Canvas Mobile Drawer */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <div className="brand-royal">
            <AhomCrest size={34} />
            <span className="brand-logo-text" style={{ fontSize: '1.3rem' }}>
              SUKAPHA <span className="brand-logo-800">800</span>
            </span>
          </div>
          <button
            onClick={closeMenu}
            aria-label="Close Navigation"
            style={{ background: 'transparent', border: 'none', color: 'var(--crimson-primary)', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>
        </div>

        <ul className="drawer-nav-list">
          {NARRATIVE_PATHS.map(({ to, label, icon: Icon, end }) => (
            <li key={to}>
              <NavLink 
                to={to} 
                end={end}
                onClick={closeMenu} 
                className={({ isActive }) => (isActive ? "drawer-nav-link active" : "drawer-nav-link")}
              >
                <span className="drawer-nav-label">{label}</span>
                <Icon size={18} className="drawer-nav-icon" />
              </NavLink>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid var(--border-gold-subtle)' }}>
          <Button to="/tribute" onClick={closeMenu} variant="filled" fullWidth arrow>
            Pay Tribute
          </Button>
        </div>
      </aside>
    </>
  )
}
