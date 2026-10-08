import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, ChevronDown, X } from 'lucide-react'
import Button from './common/Button'
import { getLenis } from '../lib/smoothScroll'
import { SOCIAL_LINKS } from '../data/socialLinks'

// Site navigation. Items with `children` open as a dropdown on desktop
// and as a labelled group in the mobile menu.
const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  {
    label: 'Bor Axom',
    children: [
      { to: '/communities', label: 'Communities' },
      { to: '/spiritual-axis', label: 'Spiritual Axis' },
      { to: '/monuments', label: 'Monuments & Garhs' },
      { to: '/living-heritage', label: 'Living Heritage' },
    ],
  },
  {
    label: 'Ahom Heritage',
    children: [
      { to: '/migration', label: 'The Journey' },
      { to: '/legacy', label: 'The Legacy' },
      { to: '/dynasty', label: 'Ahom Kings' },
      { to: '/vault', label: 'Heritage Vault' },
    ],
  },
  { to: '/events', label: 'Events' },
];

// Flat list for the mobile menu: group labels become non-link headings
const MOBILE_ENTRIES = NAV_ITEMS.flatMap((item) =>
  item.children ? [{ heading: item.label }, ...item.children] : [item]
);

// Mobile drawer motion: panel glides in from the left and settles softly, links follow one by one
const DRAWER_EASE = [0.32, 0.72, 0, 1];
const RISE_EASE = [0.16, 1, 0.3, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const closeMenu = () => setMobileMenuOpen(false);

  // Close the menu whenever the route changes (e.g. browser back/forward)
  const [menuPath, setMenuPath] = useState(location.pathname);
  if (menuPath !== location.pathname) {
    setMenuPath(location.pathname);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }

  // Close an open dropdown with Escape or a click anywhere else
  useEffect(() => {
    if (!openDropdown) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpenDropdown(null); };
    const onClick = (e) => { if (!e.target.closest('.nav-dropdown')) setOpenDropdown(null); };
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [openDropdown]);

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
      <div className="royal-topbar">
        <div className="royal-container royal-topbar-inner">
          {/* Left: contact email */}
          <div className="royal-topbar-links">
            <a href="mailto:contact@sukapha800.org">
              <Mail size={14} strokeWidth={2} aria-hidden="true" />
              contact@sukapha800.org
            </a>
          </div>

          {/* Right: social profiles */}
          <div className="royal-topbar-links">
            <div className="royal-topbar-social">
              {SOCIAL_LINKS.map(({ label, href, path }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <header className={`royal-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Left: The Royal Crest */}
          <Link to="/" className="brand-royal brand-emblem" aria-label="Sukapha 800 Home">
            <span className="brand-emblem-shadow">
              <span className="brand-emblem-frame">
                <img src="/logo.jpeg" alt="Sukapha 800 logo" className="brand-logo-img" />
              </span>
            </span>
          </Link>

          {/* Center: Core Narrative Paths */}
          <ul className="desktop-nav-links">
            {NAV_ITEMS.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) => (isActive ? 'royal-nav-link active' : 'royal-nav-link')}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              }

              const isOpen = openDropdown === item.label;
              const groupActive = item.children.some((c) => location.pathname.startsWith(c.to));
              const menuId = `nav-menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <li
                  key={item.label}
                  className={`nav-dropdown ${isOpen ? 'is-open' : ''}`}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className={`royal-nav-link ${groupActive ? 'active' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={menuId}
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown size={15} className="nav-dropdown-chevron" aria-hidden="true" />
                  </button>
                  <div id={menuId} className="nav-dropdown-menu">
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) => `nav-dropdown-link ${isActive ? 'active' : ''}`}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Right: Immersive Controls & Action */}
          <div className="desktop-action">
            <Button to="/contact" variant="filled" arrow>
              Contact Us
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

      {/* Mobile drawer: slides in from the left over a dimmed backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              key="mobile-menu-backdrop"
              className="mobile-menu-backdrop"
              onClick={closeMenu}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            />
            <motion.aside
              key="mobile-menu"
              id="mobile-menu"
              className="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              data-lenis-prevent
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.55, ease: DRAWER_EASE }}
            >
              <div className="mobile-menu-head">
                <Link to="/" onClick={closeMenu} className="mobile-menu-logo" aria-label="Sukapha 800 Home">
                  <img src="/logo.jpeg" alt="Sukapha 800 logo" />
                </Link>
                <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
                  <X size={20} strokeWidth={2.25} />
                </button>
              </div>

              <nav aria-label="Mobile" className="mobile-menu-nav">
                {MOBILE_ENTRIES.map(({ to, label, end, heading }, idx) => (
                  <motion.div
                    key={to || heading}
                    className={heading ? 'mobile-menu-group' : undefined}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + idx * 0.035, duration: 0.5, ease: RISE_EASE }}
                  >
                    {heading ? (
                      <span className="mobile-menu-heading">{heading}</span>
                    ) : (
                      <NavLink
                        to={to}
                        end={end}
                        onClick={closeMenu}
                        className={({ isActive }) => (isActive ? 'mobile-menu-link active' : 'mobile-menu-link')}
                      >
                        {label}
                      </NavLink>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                className="mobile-menu-foot"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5, ease: RISE_EASE }}
              >
                <Button to="/contact" onClick={closeMenu} variant="filled" arrow size="lg" fullWidth>
                  Contact Us
                </Button>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
