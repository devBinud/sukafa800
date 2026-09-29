import { Link } from 'react-router-dom'
import { DYNASTY_RULERS } from '../data/ahomData'
import lachitImg from '../images/lachit.png'
import joymotiImg from '../images/joymoti_kuwori.jpg'
import Button from '../components/common/Button'
import PageBanner from '../components/PageBanner'

export default function DynastyPage() {
  return (
    <div className="dynasty-page-view">
      <PageBanner
        title="Ahom Kings"
        subtitle="Spanning forty consecutive Swargadeos, the Ahom Kingdom created an extraordinary tradition of military resilience, administrative brilliance, and enduring monuments that defeated 17 Mughal invasions and preserved Assam's independent identity."
        crumbs={[{ label: 'Ahom Kings' }]}
      />

      <div className="royal-container" style={{ paddingTop: '4rem' }}>
        {/* Saraighat Spotlight Box with Lachit Borphukan */}
        <div className="saraighat-spotlight-card">
          <div className="saraighat-spotlight-content">
            <h2 className="saraighat-spotlight-title">Lachit Borphukan</h2>
            <p className="saraighat-spotlight-lead">
              Victor of the Battle of Saraighat, 1671.
            </p>

            <blockquote className="saraighat-spotlight-quote">
              <p>“My maternal uncle is not greater than my motherland.”</p>
              <span lang="as">দেশতকৈ মোমাই ডাঙৰ নহয়</span>
            </blockquote>
          </div>

          <div className="saraighat-spotlight-img-wrap">
            <img
              src={lachitImg}
              alt="Statue of General Lachit Borphukan leading his soldiers"
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
              </div>
              <blockquote className="ruler-quote-box">
                "{ruler.keyQuote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Joymoti Tribute Box */}
        <div className="joymoti-feature">
          <div className="joymoti-portrait">
            <img src={joymotiImg} alt="Queen Joymoti Kunwari at Jerenga Pathar" loading="lazy" />
          </div>
          <div className="joymoti-body">
            <span className="crimson-badge" style={{ marginBottom: '0.85rem' }}>
              Jerenga Pathar (1679 CE)
            </span>
            <h3 className="joymoti-name">Queen Joymoti Kunwari</h3>
            <p className="joymoti-title">The Supreme Martyr of Assam's Sovereignty</p>
            <p className="joymoti-story">
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
            Explore Royal Palaces
          </Button>
        </div>
      </div>
    </div>
  )
}
