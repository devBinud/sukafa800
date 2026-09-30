import React from 'react'
import Button from './common/Button'
import charaideoMoidamImg from '../images/soraideu_moidam.jpeg'
import talatalGharImg from '../images/visionary_statecraft/talatal_ghar.jpeg'

export default function HeritageTourismSection() {
  return (
    <section className="heritage-tourism-section">
      <div className="royal-container">
        {/* Top Story & Photo Gallery Split */}
        <div className="tourism-showcase-grid">
          {/* Left: Narrative & Highlights */}
          <div className="tourism-narrative-col">
            <h2 className="tourism-heading">
              A Land Blessed with <br />
              <span className="gold-text">Untamed Wonder &amp; Royal History</span>
            </h2>
            <p className="tourism-lead-desc">
              Assam is blessed with timeless natural beauty — from the emerald tea gardens
              and teeming wildlife of Kaziranga, to the limitless stretch of the sacred Brahmaputra
              and the warm, welcoming spirit of its people.
            </p>
            <p className="tourism-body-desc">
              Walk the 800-year royal trail of Chaolung Sukaphaa. Explore the newly inscribed
              UNESCO World Heritage Maidams of Charaideo, Asia's earliest amphitheatre at Rang Ghar,
              and centuries of living Tai-Ahom traditions that still beat at the heart of Greater Assam.
            </p>

            <div className="tourism-cta-actions">
              <Button to="/visit" variant="filled" arrow>
                Plan Heritage Visit
              </Button>
            </div>
          </div>

          {/* Right: two photos side by side */}
          <div className="tourism-photos-mosaic">
            <div className="mosaic-photo-card">
              <img src={charaideoMoidamImg} alt="UNESCO World Heritage Charaideo Maidams" />
            </div>
            <div className="mosaic-photo-card">
              <img src={talatalGharImg} alt="Talatal Ghar, Sivasagar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
