import { useState } from 'react'
import { MapPin } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Button from '../components/common/Button'
import { SPIRITUAL_TRADITIONS, SACRED_SITES } from '../data/borAxomData'

const FILTERS = ['All', ...SPIRITUAL_TRADITIONS.map((t) => t.name)];

export default function SpiritualAxisPage() {
  const [filter, setFilter] = useState('All');
  const sites = filter === 'All' ? SACRED_SITES : SACRED_SITES.filter((s) => s.tradition === filter);

  return (
    <div className="bx-page">
      <PageBanner
        title="The Spiritual Axis"
        subtitle="Dewalaya, Satra, Deo-shal and Dargah: faith traditions that worked not as separate sects but as shared anchors of village and kingdom life."
        crumbs={[{ label: 'Spiritual Axis' }]}
      />

      {/* Four traditions */}
      <section className="bx-section">
        <div className="royal-container">
          <div className="bx-section-head">
            <h2 className="bx-title">
              Four Traditions, <span className="gold-text">One Valley</span>
            </h2>
            <p className="bx-lead">
              Royal patrons and local communities supported these institutions together, and people
              of every clan gathered at them.
            </p>
          </div>

          <div className="bx-grid bx-grid--2">
            {SPIRITUAL_TRADITIONS.map((t) => (
              <article key={t.id} className="bx-card bx-card--text">
                <span className="bx-card-as" lang="as">{t.as}</span>
                <h3 className="bx-card-title">{t.name}</h3>
                <p className="bx-card-desc">{t.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred geography */}
      <section className="bx-section bx-section--tint">
        <div className="royal-container">
          <div className="bx-section-head">
            <h2 className="bx-title">
              Sacred Geography of <span className="gold-text">Bor Axom</span>
            </h2>
            <p className="bx-lead">Shrines across Upper, Central and Lower Assam.</p>
          </div>

          <div className="bx-tabs" role="tablist" aria-label="Filter by tradition">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                className={`bx-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'All' ? 'All traditions' : f}
              </button>
            ))}
          </div>

          <div className="bx-grid bx-grid--3">
            {sites.map((s) => (
              <article key={s.name} className="bx-card bx-card--text">
                <span className="bx-kicker">{s.tradition} · {s.region}</span>
                <h3 className="bx-card-title">
                  <span lang="as">{s.as}</span> <span className="bx-card-title-en">({s.name})</span>
                </h3>
                <span className="bx-card-meta"><MapPin size={14} aria-hidden="true" /> {s.place}</span>
                <p className="bx-card-desc">{s.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bx-section">
        <div className="royal-container bx-next">
          <div>
            <h2 className="bx-next-title">Know a Than or Dol that belongs here?</h2>
            <p>Share photographs, songs and stories of lesser-known shrines in your village.</p>
          </div>
          <Button to="/living-heritage#contribute" variant="filled" arrow>
            Contribute to the Archive
          </Button>
        </div>
      </section>
    </div>
  )
}
