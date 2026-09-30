import { Shield } from 'lucide-react'
import { SUKAPHA_INFO } from '../data/ahomData'
import MigrationTimeline from '../components/MigrationTimeline'
import Button from '../components/common/Button'
import PageBanner from '../components/PageBanner'
import sukaphaPortrait from '../images/hero_right_cutout.webp'

export default function MigrationPage() {
  return (
    <div className="migration-page-view">
      <PageBanner
        title="The Migration"
        subtitle="The visionary Tai-Ahom prince whose 13-year trek across the Patkai mountains laid the bedrock of a 600-year sovereign kingdom and forged a timeless identity of harmony among Assam's indigenous peoples."
        crumbs={[{ label: 'The Migration' }]}
      />

      <div className="royal-container" style={{ paddingTop: '4rem' }}>
        {/* Interactive multi-stage journey */}
        <MigrationTimeline />

        {/* Hero Split Card */}
        <div className="unesco-feature-card" style={{ marginBottom: '5rem' }}>
          <div 
            className="unesco-img-wrap" 
            style={{ 
              background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.18) 0%, rgba(122, 28, 44, 0.08) 60%, #FAF8F5 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              overflow: 'hidden'
            }}
          >
            <img 
              src={sukaphaPortrait} 
              alt="Chaolung Sukaphaa, Founder of Bor Axom" 
              className="unesco-img"
              style={{
                objectFit: 'contain',
                maxHeight: '440px',
                filter: 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.2))'
              }}
            />
            <div className="unesco-img-overlay" />
          </div>

          <div className="unesco-details">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="gold-badge">Reign: 1228 - 1268 CE</span>
            </div>
            <h2 className="unesco-title" style={{ fontSize: '2rem' }}>
              {SUKAPHA_INFO.assameseName}
            </h2>
            <p className="unesco-desc">
              Born into the royal house of Mong Mao (Mao-Shan), Sukaphaa possessed exceptional 
              leadership, statesmanship, and military acumen. Accompanied by two veteran generals, 
              three high priests, and 9,000 disciplined companions, he departed his ancestral 
              homeland in 1215 CE to build an empire of brotherhood in the fertile plains of the Brahmaputra.
            </p>

            <blockquote style={{ 
              background: 'rgba(212, 175, 55, 0.08)',
              padding: '1rem 1.25rem',
              fontFamily: 'var(--font-cursive)',
              fontStyle: 'italic',
              color: 'var(--gold-light)',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              fontSize: '1rem'
            }}>
              "{SUKAPHA_INFO.quote}"
            </blockquote>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/tribute" variant="filled">
                Pay Homage
              </Button>
              <Button to="/vault" variant="outline">
                Visit Charaideo
              </Button>
            </div>
          </div>
        </div>

        {/* Narrative Chapters */}
        <div style={{ marginBottom: '5rem' }}>
          {/* Chapter 1 */}
          <div className="pillar-card" style={{ marginBottom: '2.5rem', padding: '2.5rem' }}>
            <span className="gold-badge" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              Chapter I
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              The Departure from Mong Mao (1215 CE)
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
              In the early 13th century, Sukaphaa, prince of Mong Mao (located on the modern borders 
              of Yunnan and Myanmar's Shan State), resolved to establish an independent kingdom in the west. 
              Rather than a nomadic horde, his expedition was an organized civil society on the move: 
              accompanied by warriors, farmers, artisans, blacksmiths, and cattle.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              Guiding them were two trusted generals, <strong>Thaomung Klinglun</strong> and <strong>Thaomung Kangngan</strong>, 
              alongside spiritual philosophers <strong>Mohung</strong>, <strong>Moham</strong>, and <strong>Bailung</strong>. 
              With 9,000 disciplined men and women, 2 royal elephants, and 300 horses, the epic journey began.
            </p>
          </div>

          {/* Chapter 2 */}
          <div className="pillar-card" style={{ marginBottom: '2.5rem', padding: '2.5rem' }}>
            <span className="gold-badge" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              Chapter II
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              The 13-Year Odyssey across the Patkai Range
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
              For thirteen arduous years (1215-1228 CE), Sukaphaa's people carved their way across the dense 
              rainforests of the Hukawng valley, encountering independent hill tribes and testing weather. 
              Navigating through the historic Pangsau Pass in the Patkai range, Sukaphaa maintained morale 
              through deep personal discipline and democratic consultation with his companions.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              On December 2, 1228 CE, the expedition descended along the Burhidihing river into Namrup. 
              This monumental day is celebrated throughout Assam as <strong>Asom Divas</strong> (Sukapha Divas), 
              marking the beginning of six centuries of unified history.
            </p>
          </div>

          {/* Chapter 3 */}
          <div className="pillar-card" style={{ marginBottom: '2.5rem', padding: '2.5rem' }}>
            <span className="gold-badge" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              Chapter III
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              The Statesmanship of Inclusivity: Morans &amp; Borahis
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
              Upon entering the plains, Sukaphaa encountered indigenous kingdoms ruled by the Morans 
              under King <strong>Badaucha</strong> and the Borahis under King <strong>Thakumtha</strong>. 
              While other medieval conquerors subjugated native populations with bloodshed, Sukaphaa adopted 
              a revolutionary policy of kinship.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
              He invited the Moran and Borahi rulers to joint banquets, addressed them as elder brothers, 
              learned their spoken dialects, and encouraged his followers to marry into local families. 
              Borahi leaders were appointed as royal storekeepers and cooks, while Moran chiefs were granted 
              high governance roles.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              This foundational policy of mutual respect birthed <strong>Bor Asom</strong> (Greater Assam) - 
              a composite society where diverse streams blended harmoniously into a singular cultural ocean.
            </p>
          </div>

          {/* Chapter 4 */}
          <div className="pillar-card" style={{ padding: '2.5rem' }}>
            <span className="gold-badge" style={{ width: 'fit-content', marginBottom: '0.75rem' }}>
              Chapter IV
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Founding Charaideo (1253 CE) &amp; Immortal Resting Place
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1rem' }}>
              In 1253 CE, Sukaphaa selected the sacred foothills of <strong>Charaideo</strong> 
              (Che-Rai-Doi, meaning "Shining City on the Hills") as his permanent capital. 
              Here he installed the ancestral shrine of the sacred deity Chumpha and governed 
              wisely until his passing in 1268 CE at the age of 79.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
              His mortal remains were laid to rest in the sacred earthen Maidam tumulus at Charaideo. 
              Even after the capital shifted to Gargaon, Rangpur, and Jorhat, every subsequent Ahom king 
              returned to Charaideo for coronation and burial. In 2024, Charaideo was inscribed as a 
              <strong>UNESCO World Heritage Site</strong>, enshrining Sukaphaa's legacy for all humanity.
            </p>
          </div>
        </div>

        {/* Quick Route Explorer */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
            Trace the 600-Year Dynasty
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem' }}>
            Discover how Sukaphaa's successors defended Assam against 17 Mughal invasions.
          </p>
          <Button to="/dynasty" variant="filled" icon={<Shield size={18} />}>
            Explore the 600-Year Dynasty &amp; Kings
          </Button>
        </div>
      </div>
    </div>
  )
}
