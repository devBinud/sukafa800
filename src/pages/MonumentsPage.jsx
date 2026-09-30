import { useState } from 'react'
import { MapPin, ImageIcon } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Button from '../components/common/Button'
import { MONUMENTS, MONUMENT_CATEGORIES, PAIK_ROLES } from '../data/borAxomData'

export default function MonumentsPage() {
  const [category, setCategory] = useState('All');
  const monuments = category === 'All' ? MONUMENTS : MONUMENTS.filter((m) => m.category === category);

  return (
    <div className="bx-page">
      <PageBanner
        title="Monuments & Garhs"
        subtitle="Dols, Maidams, palaces, embankments and great tanks: the architecture of Bor Axom, raised by the shared labour of many communities."
        crumbs={[{ label: 'Monuments & Garhs' }]}
      />

      <section className="bx-section">
        <div className="royal-container">
          <div className="bx-section-head">
            <h2 className="bx-title">
              Built by <span className="gold-text">Many Hands</span>
            </h2>
            <p className="bx-lead">
              From the Kamarupa and Dimasa kingdoms to the Ahom capitals, each monument records the
              skill of the people who built it.
            </p>
          </div>

          <div className="bx-tabs" role="tablist" aria-label="Filter monuments">
            {MONUMENT_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                className={`bx-tab ${category === c ? 'active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c === 'All' ? 'All monuments' : c}
              </button>
            ))}
          </div>

          <div className="bx-grid bx-grid--3">
            {monuments.map((m) => (
              <article key={m.name} className="bx-card">
                {/* Photo, or a placeholder until `image` is set in borAxomData.js */}
                <div className="bx-card-media">
                  {m.image ? (
                    <img src={m.image} alt={m.name} loading="lazy" />
                  ) : (
                    <div className="bx-card-media-placeholder" aria-hidden="true">
                      <ImageIcon size={30} strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <div className="bx-card-body">
                  <span className="bx-kicker">{m.era}</span>
                  <h3 className="bx-card-title">
                    <span lang="as">{m.as}</span> <span className="bx-card-title-en">({m.name})</span>
                  </h3>
                  <span className="bx-card-meta"><MapPin size={14} aria-hidden="true" /> {m.place}</span>
                  <p className="bx-card-desc">{m.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Paik & Khel system */}
      <section className="bx-section bx-section--tint">
        <div className="royal-container">
          <div className="bx-section-head">
            <h2 className="bx-title">
              The Paik &amp; Khel <span className="gold-text">Ecosystem</span>{' '}
              <span className="bx-title-as" lang="as">পাইক প্ৰথা</span>
            </h2>
            <p className="bx-lead">
              Every adult man served the state in turn as a paik, grouped into khels by skill. In
              return he received land to farm rather than a wage, so blacksmiths, masons, boatmen and
              soldiers of every clan built the great tanks and Garhs side by side.
            </p>
          </div>

          <ol className="bx-paik-grid">
            {PAIK_ROLES.map((r, idx) => (
              <li key={r.role} className="bx-paik-item">
                <span className="bx-paik-num">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="bx-paik-role">{r.role}</h3>
                <span className="bx-card-as" lang="as">{r.as}</span>
                <p>{r.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bx-section">
        <div className="royal-container bx-next">
          <div>
            <h2 className="bx-next-title">The crafts behind the monuments live on</h2>
            <p>Silk, bell-metal, masks and more, still made by the communities that created them.</p>
          </div>
          <Button to="/living-heritage" variant="filled" arrow>
            Discover Living Heritage
          </Button>
        </div>
      </section>
    </div>
  )
}
