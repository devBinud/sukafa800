import { Users, Flame, Eye, Target } from 'lucide-react'
import Button from '../components/common/Button'
import PageBanner from '../components/PageBanner'

export default function AboutPage() {
  return (
    <div className="about-page-view">
      <PageBanner
        title="About Us"
        subtitle="A commemoration platform marking eight hundred years since Chaolung Sukaphaa crossed the Patkai hills in 1228 CE and laid the foundation of Bor Asom."
        crumbs={[{ label: 'About Us' }]}
      />

      <div className="royal-container" style={{ paddingTop: '4rem' }}>

        {/* Who We Are & Why */}
        <div className="about-story-grid">
          <div className="about-story-block">
            <div className="pillar-icon-badge">
              <Users size={24} />
            </div>
            <h2 className="about-story-title">Who We Are</h2>
            <p className="about-story-text">
              We are the Sukapha 800 Celebration Committee: historians, educators, artists and
              volunteers from across Assam who share one belief. The story of the Ahom kingdom belongs
              to every community of the Brahmaputra valley, and it deserves to be told well.
            </p>
            <p className="about-story-text">
              This platform brings that story together in one place: the migration, the Swargadeos,
              the Buranjis, the monuments and the living traditions that still shape Assamese life.
            </p>
          </div>

          <div className="about-story-block">
            <div className="pillar-icon-badge">
              <Flame size={24} />
            </div>
            <h2 className="about-story-title">Why We Are Doing This</h2>
            <p className="about-story-text">
              On 2 December 2028, Asom Divas will mark eight centuries since Sukaphaa entered the valley.
              A milestone like this comes once in a lifetime, and we want it remembered as more than a
              date on the calendar.
            </p>
            <p className="about-story-text">
              Sukaphaa built a kingdom through kinship rather than conquest. In a time of division, that
              legacy of unity, inclusive governance and respect for every clan is worth passing on to
              the next generation.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="vm-grid">
          <div className="vm-card vm-card--vision">
            <Eye size={180} strokeWidth={1} className="vm-card-watermark" aria-hidden="true" />
            <div className="vm-card-icon">
              <Eye size={26} />
            </div>
            <h3 className="vm-card-title">Our Vision</h3>
            <p className="vm-card-desc">
              An Assam where every young person knows the story of Bor Asom, takes pride in its
              shared heritage, and carries forward the spirit of brotherhood that founded it.
            </p>
          </div>

          <div className="vm-card vm-card--mission">
            <Target size={180} strokeWidth={1} className="vm-card-watermark" aria-hidden="true" />
            <div className="vm-card-icon">
              <Target size={26} />
            </div>
            <h3 className="vm-card-title">Our Mission</h3>
            <p className="vm-card-desc">
              To preserve and share Ahom history through open learning resources, heritage journeys,
              youth contests and public celebrations leading up to the 800th Asom Divas in 2028.
            </p>
          </div>
        </div>
      </div>

      {/* Manifesto */}
      <section className="manifesto-interactive-section about-manifesto">
        <div className="royal-container">
          <div className="manifesto-interactive-wrap">
            <h2 className="manifesto-flow-title">
              <span className="manifesto-primary-text">
                We forge an indomitable commonwealth with our brotherly clans and visionary leaders.{' '}
              </span>
              <span className="manifesto-muted-text">
                And unite eight centuries of heritage into the timeless spirit of Bor Asom.
              </span>
            </h2>
            <div style={{ marginTop: '2.25rem', display: 'flex', justifyContent: 'center' }}>
              <Button to="/tribute" variant="filled" arrow size="lg">
                Pay Tribute
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
