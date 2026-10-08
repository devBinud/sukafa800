import { Link } from 'react-router-dom'
import { SOCIAL_LINKS } from '../data/socialLinks'

const BOR_AXOM_LINKS = [
  { to: '/communities', label: 'Communities' },
  { to: '/spiritual-axis', label: 'Spiritual Axis' },
  { to: '/monuments', label: 'Monuments & Garhs' },
  { to: '/living-heritage', label: 'Living Heritage' },
];

const DYNASTY_HERITAGE_LINKS = [
  { to: '/migration', label: 'The Journey' },
  { to: '/dynasty', label: 'Ahom Kings' },
  { to: '/vault', label: 'Heritage Vault' },
  { to: '/tribute', label: 'Pay Tribute' },
];

export default function Footer() {
  return (
    <footer className="royal-footer">
      <div className="royal-container">
        <div className="footer-grid">
          {/* Col 1: Heritage Trust */}
          <div>
            <Link to="/" className="footer-logo" aria-label="Sukapha 800 Home">
              <img src="/logo.jpeg" alt="Sukapha 800 logo" />
            </Link>
            <p className="footer-brand-desc">
              Celebrating 800 years of the Axomiya Mahajati: the many communities, faiths and crafts
              that came together, from Chaolung Sukapha's arrival in 1228, to build Bor Axom.
            </p>
            <div className="footer-social-row">
              {SOCIAL_LINKS.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label={label}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Bor Axom */}
          <div>
            <h4 className="footer-col-title">Bor Axom</h4>
            <ul className="footer-links-list">
              {BOR_AXOM_LINKS.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Royal Heritage */}
          <div>
            <h4 className="footer-col-title">Ahom Heritage</h4>
            <ul className="footer-links-list">
              {DYNASTY_HERITAGE_LINKS.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-block">
              <span className="footer-contact-label">
                Head Office
              </span>
              <p className="footer-org-name" lang="as">চাওলুং ছ্যুকাফাৰ অসমীয়া মহাজাতি গঠন আৰু বৰঅসম প্ৰতিষ্ঠাৰ আঠশ বছৰীয়া জয়ন্তী উদযাপন সমিতি</p>
              <p>Girls College, Sivasagar,<br />Dist. Sivasagar 785650</p>
            </div>
            <div className="footer-contact-block">
              <span className="footer-contact-label">
                Helpdesk
              </span>
              <a href="mailto:contact@sukapha800.org" className="footer-link">contact@sukapha800.org</a>
            </div>
          </div>
        </div>

        {/* Bottom-most Copyright & Compliance Bar */}
        <div className="footer-bottom-bar">
          <span>© 2028 <span lang="as">চাওলুং ছ্যুকাফাৰ অসমীয়া মহাজাতি গঠন আৰু বৰঅসম প্ৰতিষ্ঠাৰ আঠশ বছৰীয়া জয়ন্তী উদযাপন সমিতি</span>. All Rights Reserved.</span>
          <span className="footer-credit">
            Designed &amp; Developed by <strong>Binud Panging</strong>
          </span>
        </div>
      </div>
    </footer>
  )
}
