import { Mail, MapPin, Send } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { SOCIAL_LINKS } from '../data/socialLinks'

const CONTACT_EMAIL = 'contact@sukapha800.org';

export default function ContactPage() {
  return (
    <div className="bx-page">
      <PageBanner
        title="Contact Us"
        subtitle="Questions, ideas, stories to share or ways to take part in Bor Axom 800: we would like to hear from you."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="bx-section">
        <div className="royal-container bx-grid bx-grid--3">
          <article className="bx-card bx-card--text">
            <span className="contact-icon" aria-hidden="true"><MapPin size={20} /></span>
            <h2 className="bx-card-title">Head Office</h2>
            <p className="bx-card-desc">
              <span lang="as">চাওলুং ছ্যুকাফাৰ অসমীয়া মহাজাতি গঠন আৰু বৰঅসম প্ৰতিষ্ঠাৰ আঠশ বছৰীয়া জয়ন্তী উদযাপন সমিতি</span><br />
              Girls College, Sivasagar,<br />Dist. Sivasagar 785650
            </p>
          </article>

          <article className="bx-card bx-card--text">
            <span className="contact-icon" aria-hidden="true"><Mail size={20} /></span>
            <h2 className="bx-card-title">Email</h2>
            <p className="bx-card-desc">For general questions, partnerships, press and volunteering.</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-email">{CONTACT_EMAIL}</a>
          </article>

          <article className="bx-card bx-card--text">
            <span className="contact-icon" aria-hidden="true"><Send size={20} /></span>
            <h2 className="bx-card-title">Follow Us</h2>
            <p className="bx-card-desc">News, events and stories from across Assam.</p>
            <div className="contact-social">
              {SOCIAL_LINKS.map(({ label, href, path }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
