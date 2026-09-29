import { useState } from 'react'
import { BookOpen, Flame, Shield, Users, Sword, Compass, ChevronDown, ChevronUp } from 'lucide-react'
import { AHOM_CULTURE } from '../data/ahomData'
import Button from '../components/common/Button'
import PageBanner from '../components/PageBanner'

const AHOM_FAQS = [
  {
    q: "Who was Chaolung Sukaphaa, and why is he called the Architect of Bor Asom?",
    a: "Chaolung Sukaphaa was a 13th-century Tai prince from Mong Mao who crossed the Patkai mountains in 1228 CE to found the Ahom Kingdom. He earned the title 'Architect of Bor Asom' (Greater Assam) because he united disparate indigenous groups - including Morans, Borahis, Kacharis, and Nagas - through friendship, intermarriage, and inclusive governance rather than destruction.",
  },
  {
    q: "Why is December 2nd celebrated as Asom Divas across Assam?",
    a: "December 2nd marks the historic date in 1228 CE when Chaolung Sukaphaa crossed the Patkai range and entered the Brahmaputra Valley at Namrup. The Government of Assam officially commemorates December 2nd as Asom Divas (Sukapha Divas) to honor his foundational role in shaping Assamese identity.",
  },
  {
    q: "What was the Paik System, and why was it so effective?",
    a: "The Paik system organized all able-bodied adult males into small cooperative units (Gots) of 3 or 4 individuals. One member served the state in rotation (either in military campaigns or public engineering works like dykes and highways), while his fellow Paiks cultivated his agricultural land back home. This allowed Assam to mobilize massive citizen armies without bankrupting the royal treasury.",
  },
  {
    q: "What makes the Ahom Buranjis unique in Indian history?",
    a: "Unlike many ancient empires whose histories were preserved primarily through mythologized poetry, Ahom kings commanded that every war, diplomatic embassy, eclipse, and royal edict be chronicled factually with exact dates by state scribes. Written on specially cured Sanchi bark (Aquilaria agallocha), the Buranjis provide an unbroken, secular historical record over six centuries.",
  },
  {
    q: "What is Me-Dam-Me-Phi, and what do its words mean?",
    a: "'Me-Dam-Me-Phi' is the sacred ancestral remembrance ritual celebrated on January 31st each year. In the Tai-Ahom language, 'Me' means offerings, 'Dam' means ancestors, and 'Phi' means deities. It is an occasion where communities pay homage to their forebears and deities (Chao-Phi) to pray for peace, communal harmony, and prosperous harvests.",
  },
  {
    q: "Why were the Mughals unable to conquer Assam despite 17 invasions?",
    a: "The Ahoms mastered the unique topography of Assam. Instead of open plain battles against Mughal heavy cavalry, the Ahoms utilized guerrilla warfare, dense forest defenses, mud ramparts (Gors), and peerless naval warfare on the Brahmaputra River. At the Battle of Saraighat (1671), General Lachit Borphukan outmaneuvered the Mughal armada with swift war boats and decisive river tactics.",
  },
];

export default function LegacyPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <div className="legacy-page-view">
      <PageBanner
        title="The Legacy"
        subtitle="Sukapha won the valley through kinship, not conquest. Through social synthesis, shared councils and inclusive governance, his heirs shaped the Buranjis, the Paik system and Me-Dam-Me-Phi: the enduring cultural soul of Greater Assam."
        crumbs={[{ label: 'The Legacy' }]}
      />

      <div className="royal-container" style={{ paddingTop: '4rem' }}>
        {/* Culture Cards Grid */}
        <div className="culture-grid" style={{ marginBottom: '5rem' }}>
          {AHOM_CULTURE.map((item, idx) => (
            <div key={idx} className="culture-card">
              <div className="culture-icon-wrap">
                {item.icon === 'Flame' && <Flame size={24} />}
                {item.icon === 'BookOpen' && <BookOpen size={24} />}
                {item.icon === 'Sword' && <Sword size={24} />}
                {item.icon === 'Shield' && <Shield size={24} />}
                {item.icon === 'Users' && <Users size={24} />}
                {item.icon === 'Compass' && <Compass size={24} />}
              </div>
              <span className="culture-date-tag">{item.date}</span>
              <h3 className="culture-card-title">{item.title}</h3>
              <span className="culture-card-subtitle">{item.subtitle}</span>
              <p className="culture-card-text">{item.text}</p>
            </div>
          ))}
        </div>

        {/* The Council of Three Gohains Spotlight */}
        <div style={{
          background: 'linear-gradient(135deg, #30080d 0%, #15111d 60%, #0d0a12 100%)',
          border: '1.5px solid rgba(212, 175, 55, 0.45)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          boxShadow: '0 16px 40px -10px rgba(77, 10, 18, 0.35), 0 0 0 1px rgba(212, 175, 55, 0.2)',
          marginBottom: '5rem',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)', color: '#FFFFFF', fontWeight: 400, marginBottom: '1.25rem' }}>
            The Council of Gohains: Checks &amp; Balances in Medieval Asia
          </h2>
          <p style={{ color: '#F0EAE1', fontSize: '1.08rem', lineHeight: '1.8', maxWidth: '1000px', marginBottom: '1.75rem' }}>
            While monarchs in other medieval empires held unconstrained tyrannical authority, the Ahom Swargadeo 
            reigned within a constitutional framework governed by the <strong style={{ color: '#FFE082' }}>Dangarias</strong> (High Council). 
            Initially instituted by Chaolung Sukaphaa with the <strong style={{ color: '#FFE082' }}>Burhagohain</strong> and <strong style={{ color: '#FFE082' }}>Borgohain</strong>, 
            and later expanded with the <strong style={{ color: '#FFE082' }}>Borpatragohain</strong>, these hereditary ministers held independent 
            armies and veto powers. No king could declare war, negotiate peace treaties, or ascend the throne 
            without the unanimous concurrence of the Council.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(212, 175, 55, 0.18)',
              border: '1.5px solid rgba(212, 175, 55, 0.5)',
              color: '#FFE8A3',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              Burhagohain (Prime Minister)
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(212, 175, 55, 0.18)',
              border: '1.5px solid rgba(212, 175, 55, 0.5)',
              color: '#FFE8A3',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              Borgohain (Commander)
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(212, 175, 55, 0.18)',
              border: '1.5px solid rgba(212, 175, 55, 0.5)',
              color: '#FFE8A3',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}>
              Borpatragohain (Third Pillar)
            </span>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div id="insights" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 className="section-title">Ahom History &amp; Legacy Insights</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {AHOM_FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: 'var(--royal-surface-card)',
                    border: `1.5px solid ${isOpen ? 'var(--gold-primary)' : 'var(--border-gold-subtle)'}`,
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      background: isOpen ? 'rgba(212, 175, 55, 0.05)' : 'transparent',
                      border: 'none',
                      padding: '1.4rem 1.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: isOpen ? 'var(--crimson-primary)' : '#1F0D12',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.08rem',
                      fontWeight: 400,
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                    ) : (
                      <ChevronDown size={20} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                    )}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 1.6rem 1.4rem', borderTop: '1px dashed rgba(212, 175, 55, 0.25)' }}>
                      <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.75', fontSize: '0.98rem', paddingTop: '1rem' }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <Button to="/tribute" variant="filled" arrow size="lg">
            Leave a Tribute on the Community Wall
          </Button>
        </div>
      </div>
    </div>
  )
}
