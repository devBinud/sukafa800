import { Link } from 'react-router-dom'
import { Landmark, Compass, MapPin, Mail, Building2, Route } from 'lucide-react'
import AhomCrest from './AhomCrest'

const HERITAGE_CHANNELS = [
  { href: 'https://whc.unesco.org/en/list/1711', label: 'UNESCO: Moidams of the Ahom Dynasty', icon: Landmark },
  { href: 'https://tourism.assam.gov.in/', label: 'Assam Tourism', icon: Compass },
  { href: 'https://charaideo.assam.gov.in/', label: 'Charaideo District Heritage', icon: MapPin },
];

const DISCOVER_LINKS = [
  { to: '/vault', label: 'Charaideo Maidams' },
  { to: '/dynasty', label: 'Historical Archives' },
  { to: '/legacy#insights', label: 'Research Papers' },
  { to: '/vault#catalog', label: 'Photo & Video Assets' },
];

const DYNASTY_HERITAGE_LINKS = [
  { to: '/dynasty', label: 'Forty Swargadeos' },
  { to: '/tribute', label: 'Pay Royal Tribute' },
  { to: '/visit', label: 'Plan Heritage Visit' },
  { to: '/migration#route', label: 'Patkai Route Map' },
];

export default function Footer() {
  return (
    <footer className="royal-footer">
      <div className="royal-container">
        <div className="footer-grid">
          {/* Col 1: Heritage Trust */}
          <div>
            <div className="brand-royal" style={{ marginBottom: '0.85rem' }}>
              <AhomCrest size={40} />
              <span className="brand-logo-text" style={{ fontSize: '1.35rem' }}>
                SUKAPHA <span className="brand-logo-800">800</span>
              </span>
            </div>
            <p className="footer-brand-desc">
              Celebrating eight centuries since 1228 AD, when Chaolung Sukapha crossed the Patkai hills
              and founded a kingdom built on kinship, inclusive governance and the enduring idea of Bor Asom.
            </p>
            <div className="footer-social-row">
              {HERITAGE_CHANNELS.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label={label}
                  title={label}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Discover More */}
          <div>
            <h4 className="footer-col-title">Discover More</h4>
            <ul className="footer-links-list">
              {DISCOVER_LINKS.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Royal Heritage */}
          <div>
            <h4 className="footer-col-title">Royal Heritage</h4>
            <ul className="footer-links-list">
              {DYNASTY_HERITAGE_LINKS.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect & Visit */}
          <div>
            <h4 className="footer-col-title">Connect &amp; Visit</h4>
            <div className="footer-contact-block">
              <span className="footer-contact-label">
                <Building2 size={15} /> Secretariat
              </span>
              <p>Cultural Affairs Dept,<br />Dispur, Guwahati,<br />Assam.</p>
            </div>
            <div className="footer-contact-block">
              <span className="footer-contact-label">
                <Mail size={15} /> Helpdesk
              </span>
              <a href="mailto:contact@sukapha800.in" className="footer-link">contact@sukapha800.in</a>
            </div>
            <div className="footer-contact-block">
              <span className="footer-contact-label">
                <Route size={15} /> Visit
              </span>
              <Link to="/visit" className="footer-link">Plan a Heritage Visit</Link>
            </div>
          </div>
        </div>

        {/* Bottom-most Copyright & Compliance Bar */}
        <div className="footer-bottom-bar">
          <span>Copyright © 2028 Celebration Committee. All Rights Reserved.</span>
          <nav className="footer-legal-links" aria-label="Compliance">
            <Link to="/legal#privacy">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link to="/legal#terms">Terms of Commemoration Platform Use</Link>
            <span aria-hidden="true">|</span>
            <Link to="/legal#accessibility">Website Accessibility Guidelines</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
