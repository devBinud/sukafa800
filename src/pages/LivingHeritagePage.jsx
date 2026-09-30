import { MapPin, Users, ImageIcon, Mail } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { CRAFTS } from '../data/borAxomData'

const CONTRIBUTE_EMAIL = 'contact@sukapha800.org';

export default function LivingHeritagePage() {
  return (
    <div className="bx-page">
      <PageBanner
        title="Living Heritage"
        subtitle="Textiles, metal, bamboo and clay: crafts that carry the skill of Assam's communities into the present day."
        crumbs={[{ label: 'Living Heritage' }]}
      />

      <section className="bx-section">
        <div className="royal-container">
          <div className="bx-section-head">
            <h2 className="bx-title">
              Crafts of <span className="gold-text">Bor Axom</span>
            </h2>
            <p className="bx-lead">Each craft belongs to a place and a people. Many are still made by hand today.</p>
          </div>

          <div className="bx-grid bx-grid--4">
            {CRAFTS.map((c) => (
              <article key={c.name} className="bx-card">
                {/* Photo, or a placeholder until `image` is set in borAxomData.js */}
                <div className="bx-card-media">
                  {c.image ? (
                    <img src={c.image} alt={c.name} loading="lazy" />
                  ) : (
                    <div className="bx-card-media-placeholder" aria-hidden="true">
                      <ImageIcon size={30} strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <div className="bx-card-body">
                  <h3 className="bx-card-title">
                    <span lang="as">{c.as}</span> <span className="bx-card-title-en">({c.name})</span>
                  </h3>
                  <span className="bx-card-meta"><Users size={14} aria-hidden="true" /> {c.community}</span>
                  <span className="bx-card-meta"><MapPin size={14} aria-hidden="true" /> {c.place}</span>
                  <p className="bx-card-desc">{c.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community submissions, as recommended in the blueprint */}
      <section id="contribute" className="bx-section bx-section--tint">
        <div className="royal-container bx-split">
          <div>
            <h2 className="bx-title">
              Help Us Build the <span className="gold-text">People's Archive</span>
            </h2>
            <p className="bx-lead">
              Historians, researchers and village elders hold stories no book has recorded. Send us
              folklore, oral songs and photographs of lesser-known Thans, Dols, Namghars and crafts
              from your area, and we will add them to the archive with full credit.
            </p>
          </div>

          <div className="bx-contribute-card">
            <h3>What you can share</h3>
            <ul className="bx-dot-list">
              <li>Photographs of local Thans, Dols and Namghars</li>
              <li>Recordings of folk songs, chants and harvest blessings</li>
              <li>Family and village stories, with names and places</li>
              <li>Craft techniques passed down in your community</li>
            </ul>
            <a
              href={`mailto:${CONTRIBUTE_EMAIL}?subject=Contribution%20to%20the%20Bor%20Axom%20800%20archive`}
              className="bx-contribute-link"
            >
              <Mail size={16} aria-hidden="true" /> Send to {CONTRIBUTE_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
