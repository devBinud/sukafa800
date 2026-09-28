import { Link } from 'react-router-dom'
import { Sword, ArrowRight } from 'lucide-react'
import { DYNASTY_RULERS } from '../data/ahomData'
import lachitImg from '../images/lachit.png'
import Button from '../components/common/Button'

export default function DynastyPage() {
  return (
    <div className="dynasty-page-view" style={{ paddingTop: '2.5rem' }}>
      <div className="royal-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', marginBottom: '1.25rem' }}>
            THE 600-YEAR <br />
            <span className="gold-text">AHOM DYNASTY</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            Spanning forty consecutive Swargadeos, the Ahom Kingdom created an extraordinary 
            tradition of military resilience, administrative brilliance, and enduring monuments 
            that defeated 17 Mughal invasions and preserved Assam's independent identity.
          </p>
        </div>

        {/* Saraighat Spotlight Box with Lachit Borphukan */}
        <div className="saraighat-spotlight-card">
          <div className="saraighat-spotlight-content">
            <div className="saraighat-spotlight-kicker">
              <Sword size={16} />
              <span>1671 CE · Battle of Saraighat</span>
            </div>

            <h2 className="saraighat-spotlight-title">
              Lachit Borphukan
            </h2>

            <p className="saraighat-spotlight-lead">
              The supreme Ahom Commander-in-Chief who routed the imperial Mughal armada on the Brahmaputra River, safeguarding Assam's six-century sovereignty.
            </p>

            <blockquote className="saraighat-spotlight-quote">
              “My maternal uncle is not greater than my motherland.”
              <span>— দেশতকৈ মোমাই ডাঙৰ নহয়</span>
            </blockquote>

            <div className="saraighat-spotlight-badges">
              <span className="saraighat-badge gold">17 Invasions Repelled</span>
              <span className="saraighat-badge crimson">Brahmaputra Naval Mastery</span>
              <span className="saraighat-badge gold">Lachit Divas · 24 Nov</span>
            </div>
          </div>

          <div className="saraighat-spotlight-img-wrap">
            <img 
              src={lachitImg} 
              alt="General Lachit Borphukan" 
              className="saraighat-spotlight-img" 
            />
          </div>
        </div>

        {/* Rulers Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Swargadeos &amp; National Heroes</h2>
        </div>

        {/* Rulers Grid */}
        <div className="rulers-grid" style={{ marginBottom: '5rem' }}>
          {DYNASTY_RULERS.map((ruler, idx) => (
            <div key={idx} className="ruler-card">
              <span className="ruler-epoch-badge">{ruler.epoch}</span>
              <div className="ruler-body">
                <span className="ruler-reign">{ruler.reign}</span>
                <h3 className="ruler-name">{ruler.name}</h3>
                <span className="ruler-title">{ruler.title}</span>
                <p className="ruler-achievements">{ruler.achievements}</p>
                <blockquote className="ruler-quote-box">
                  "{ruler.keyQuote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Joymoti Tribute Box */}
        <div style={{
          background: '#FFFFFF',
          border: '1.5px solid rgba(166, 43, 43, 0.2)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.75rem',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '5rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <span className="crimson-badge" style={{ marginBottom: '0.85rem' }}>
              Jerenga Pathar (1679 CE)
            </span>
            <h3 style={{ fontSize: '1.85rem', color: '#1F0D12', marginBottom: '0.5rem', fontWeight: 400 }}>
              Queen Joymoti Kunwari
            </h3>
            <p style={{ color: 'var(--crimson-primary)', fontSize: '0.95rem', fontWeight: 700, letterSpacing: '0.02em' }}>
              The Supreme Martyr of Assam's Sovereignty
            </p>
          </div>
          <div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1rem' }}>
              When the cruel puppet boy-king Sulikphaa (Lora Roja) launched a purge against all able-bodied 
              royal princes, Prince Gadapani went underground. His noble wife, Princess Joymoti, was 
              captured and subjected to 14 grueling days of continuous torture strapped to thorny trees 
              at Jerenga Pathar. Refusing to whisper a single word that could jeopardize her husband and 
              the future of Bor Asom, Joymoti breathed her last in silent glory, paving the way for 
              Gadadhar Singha's ascension and the complete expulsion of Mughal invaders at Itakhuli (1682).
            </p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Button to="/vault" variant="filled" arrow size="lg">
            Explore Royal Palaces &amp; UNESCO Maidams
          </Button>
        </div>
      </div>
    </div>
  )
}
