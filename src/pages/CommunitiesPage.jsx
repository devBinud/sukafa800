import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import Button from '../components/common/Button'
import { COMMUNITIES, FIRST_PACTS, UNITY_STATEMENT } from '../data/borAxomData'

export default function CommunitiesPage() {
  // ?community=<id> (from the home page cards) opens that community first
  const [searchParams] = useSearchParams();
  const requested = searchParams.get('community');
  const [activeId, setActiveId] = useState(
    COMMUNITIES.some((c) => c.id === requested) ? requested : COMMUNITIES[0].id
  );
  const active = COMMUNITIES.find((c) => c.id === activeId);

  return (
    <div className="bx-page">
      <PageBanner
        title="Mahajati Roots"
        subtitle="Bor Axom was not built by one dynasty. Meet the communities whose land, skills, faiths and kinship came together as the Axomiya Mahajati."
        crumbs={[{ label: 'Communities' }]}
      />

      {/* How Sukapha united the valley */}
      <section className="bx-section">
        <div className="royal-container">
          <div className="bx-principle">
            <p>{UNITY_STATEMENT}</p>
            <span className="bx-principle-label">How Sukapha united Bor Axom</span>
          </div>
        </div>
      </section>

      {/* Mosaic wall: pick a community to read its contribution */}
      <section className="bx-section bx-section--tint">
        <div className="royal-container">
          <div className="bx-section-head">
            <h2 className="bx-title">
              Who Built <span className="gold-text">Bor Axom?</span>
            </h2>
            <p className="bx-lead">Select a community to see what it gave to the shared home of the Brahmaputra valley.</p>
          </div>

          <div className="bx-mosaic">
            <div className="bx-mosaic-wall" role="tablist" aria-label="Communities">
              {COMMUNITIES.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  id={`community-tab-${c.id}`}
                  aria-selected={activeId === c.id}
                  aria-controls="community-panel"
                  className={`bx-mosaic-tile ${activeId === c.id ? 'active' : ''}`}
                  onClick={() => setActiveId(c.id)}
                >
                  <span className="bx-mosaic-tile-as" lang="as">{c.as}</span>
                  <span className="bx-mosaic-tile-name">{c.name}</span>
                </button>
              ))}
            </div>

            <article
              id="community-panel"
              role="tabpanel"
              aria-labelledby={`community-tab-${active.id}`}
              className="bx-mosaic-panel"
            >
              <span className="bx-kicker">{active.theme}</span>
              <h3 className="bx-mosaic-panel-title">
                {active.name} <span lang="as">{active.as}</span>
              </h3>
              <p className="bx-mosaic-panel-text">{active.contribution}</p>
              <ul className="bx-dot-list">
                {active.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* The first pacts of 1228 */}
      <section className="bx-section">
        <div className="royal-container bx-split">
          <div>
            <h2 className="bx-title">
              The First Pacts of <span className="gold-text">1228</span>
            </h2>
            <p className="bx-lead">
              When Sukapha reached the valley, he met the Moran and Borahi peoples. What followed
              was not a conquest but an alliance, and it set the pattern for everything after.
            </p>
          </div>

          <div className="bx-accordion">
            {FIRST_PACTS.map((pact, idx) => (
              <details key={pact.title} className="bx-accordion-item" open={idx === 0}>
                <summary>
                  <span>{pact.title}</span>
                  <ChevronDown size={18} aria-hidden="true" />
                </summary>
                <p>{pact.body}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bx-section bx-section--tint">
        <div className="royal-container bx-next">
          <div>
            <h2 className="bx-next-title">Faith brought these communities together too</h2>
            <p>Temples, Satras, sacred groves and dargahs that anchored a shared life.</p>
          </div>
          <Button to="/spiritual-axis" variant="filled" arrow>
            Explore the Spiritual Axis
          </Button>
        </div>
      </section>
    </div>
  )
}
