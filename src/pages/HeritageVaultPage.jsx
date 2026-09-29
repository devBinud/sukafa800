import { MapPin, CheckCircle2, Shield, Layers } from 'lucide-react'
import { AHOM_MONUMENTS } from '../data/ahomData'
import Button from '../components/common/Button'
import PageBanner from '../components/PageBanner'
import charaideoMoidamImg from '../images/soraideu_moidam.jpeg'

export default function HeritageVaultPage() {
  return (
    <div className="vault-page-view">
      <PageBanner
        title="Heritage Vault"
        subtitle="From the newly inscribed UNESCO World Heritage Charaideo Maidams to Asia's earliest royal amphitheatre Rang Ghar, explore the indomitable architecture of the Ahom Kingdom."
        crumbs={[{ label: 'Heritage Vault' }]}
      />

      <div className="royal-container" style={{ paddingTop: '4rem' }}>
        {/* Charaideo World Heritage Hero Box */}
        <div className="unesco-feature-card" style={{ marginBottom: '4.5rem' }}>
          <div className="unesco-img-wrap">
            <img
              src={charaideoMoidamImg}
              alt="Charaideo Maidams, UNESCO World Heritage Site"
              className="unesco-img"
            />
            <div className="unesco-img-overlay" />
          </div>

          <div className="unesco-details">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="gold-badge">UNESCO Inscribed: 2024</span>
            </div>
            <h2 className="unesco-title" style={{ fontSize: '2rem' }}>
              Moidams - The Sacred Burial Mounds of the Ahom Dynasty
            </h2>
            <p className="unesco-desc">
              Situated in the foothills of the Patkai range, the <strong>Charaideo Maidams</strong> represent 
              over 600 years of Tai-Ahom mortuary traditions. Each Maidam contains an octagonal or vaulted 
              chamber housing royal relics, surrounded by massive hemispherical mounds of earth and grass, 
              mirroring the landscape of Bor Asom.
            </p>

            <ul className="unesco-specs-list">
              <li className="unesco-spec-item">
                <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>90+ Well-preserved Tumuli</span>
              </li>
              <li className="unesco-spec-item">
                <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Foundational Capital of Sukaphaa (1253)</span>
              </li>
              <li className="unesco-spec-item">
                <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>First Cultural UNESCO Site of NE India</span>
              </li>
              <li className="unesco-spec-item">
                <CheckCircle2 size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Center of Me-Dam-Me-Phi Ceremonies</span>
              </li>
            </ul>

            <div>
              <Button to="/tribute" variant="filled" arrow>
                Plan a Heritage Pilgrimage
              </Button>
            </div>
          </div>
        </div>

        {/* Architectural Secrets Strip */}
        <div style={{
          background: 'var(--royal-surface-card)',
          border: '1px solid var(--border-gold-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          marginBottom: '4.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Layers size={22} style={{ color: 'var(--gold-primary)' }} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>
              The Secret Mortar: <span className="gold-text">Karpat &amp; Bora Rice</span>
            </h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
            How have Ahom monuments survived devastating Assam earthquakes for centuries without cement? 
            Ahom master masons developed a miraculous organic mortar called <em>Karpat</em>, prepared by boiling 
            glutinous <strong>Bora rice</strong>, <strong>duck eggs</strong>, <strong>snail lime (Chun)</strong>, 
            black gram (Mati Mah), molasses (Gur), and the sticky sap of Bor-thekera trees. This bio-mortar created an 
            indestructible, elastic bond that flexes during seismic tremors without snapping.
          </p>
        </div>

        {/* Monuments Grid */}
        <div id="catalog" style={{ textAlign: 'center', marginBottom: '2.5rem', scrollMarginTop: '6rem' }}>
          <h2 className="section-title">The Royal Architectural Catalog</h2>
        </div>

        <div className="monuments-grid" style={{ marginBottom: '5rem' }}>
          {AHOM_MONUMENTS.map((monument, idx) => (
            <div key={idx} className="monument-card">
              <div className="monument-img-wrap">
                <img src={monument.image} alt={monument.name} className="monument-img" />
                <span className="gold-badge monument-category-badge">{monument.category}</span>
              </div>
              <div className="monument-info">
                <div className="monument-location">
                  <MapPin size={14} />
                  <span>{monument.location}</span>
                </div>
                <h3 className="monument-name">{monument.name}</h3>
                <span className="monument-era">{monument.era}</span>
                <p className="monument-desc">{monument.description}</p>
                <ul className="monument-specs">
                  {monument.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="monument-spec-item">
                      <CheckCircle2 size={14} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Button to="/legacy" variant="filled" icon={<Shield size={18} />}>
            Discover Ahom Culture
          </Button>
        </div>
      </div>
    </div>
  )
}
