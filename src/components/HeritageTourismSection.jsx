import React from 'react'
import Button from './common/Button'
import AhomCrest from './AhomCrest'
import beforeFooterImg from '../images/before_footer.png'

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
              <Button to="/vault" variant="outline">
                Explore Monument Vault
              </Button>
            </div>
          </div>

          {/* Right: Asymmetric Photo Mosaic */}
          <div className="tourism-photos-mosaic">
            <div className="mosaic-photo-card mosaic-photo--1">
              <img src="/images/patkai-odyssey.jpg" alt="Patkai hills and lush green landscapes of Assam" />
              <div className="mosaic-badge">Emerald Landscapes</div>
            </div>
            <div className="mosaic-photo-card mosaic-photo--2">
              <img src="/images/charaideo-maidams.jpg" alt="UNESCO World Heritage Charaideo Maidams" />
              <div className="mosaic-badge">UNESCO Charaideo</div>
            </div>
            <div className="mosaic-photo-card mosaic-photo--3">
              <img src="/images/ahom-monuments.jpg" alt="Royal Ahom Amphitheatre Rang Ghar" />
              <div className="mosaic-badge">Royal Architecture</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scenic Landscape Strip with before_footer.png */}
      <div 
        className="tourism-scenic-landscape" 
        style={{ backgroundImage: `url(${beforeFooterImg})` }}
      >
        <div className="scenic-emblem-wrap">
          <div className="scenic-crest-glow">
            <AhomCrest size={48} />
          </div>
          <h3 className="scenic-emblem-title">
            BOR ASOM <span className="gold-text">HERITAGE TRAILS</span>
          </h3>
          <p className="scenic-emblem-subtitle">
            Department of Cultural Affairs &amp; Royal Ahom Historical Trust · 1228 – 2028
          </p>
        </div>
      </div>
    </section>
  );
}
