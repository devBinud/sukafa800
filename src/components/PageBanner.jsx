import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ranggharBg from '../images/bg/rangghar.png'

// Split mono/colour page banner with breadcrumb trail under the title.
// crumbs: [{ label, to? }] — the last crumb is the current page.
// Text sits in .royal-container, so it lines up with the navbar and page content.
export default function PageBanner({ title, subtitle, crumbs = [] }) {
  return (
    <section className="page-banner">
      {/* Same photo twice: greyscale base, colour layer faded in from the right */}
      <div className="page-banner-bg page-banner-bg--mono" style={{ backgroundImage: `url(${ranggharBg})` }} />
      <div className="page-banner-bg page-banner-bg--color" style={{ backgroundImage: `url(${ranggharBg})` }} />
      <div className="page-banner-overlay" />
      <div className="royal-container page-banner-inner">
        <h1 className="page-banner-title">{title}</h1>
        {subtitle && <p className="page-banner-subtitle">{subtitle}</p>}
        <nav className="page-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            {crumbs.map((c, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <li key={c.label}>
                  <ChevronRight size={14} className="page-breadcrumb-sep" aria-hidden="true" />
                  {isLast || !c.to ? (
                    <span aria-current={isLast ? 'page' : undefined}>{c.label}</span>
                  ) : (
                    <Link to={c.to}>{c.label}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  )
}
