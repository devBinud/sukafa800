import { ShieldCheck, FileText, Accessibility } from 'lucide-react'
import PageBanner from '../components/PageBanner'

export default function LegalPage() {
  return (
    <div className="legal-page-view">
      <PageBanner
        title="Platform Policies"
        subtitle="How the Sukapha 800 commemoration platform handles your information, how it may be used, and our commitment to making it usable by everyone."
        crumbs={[{ label: 'Policies' }]}
      />

      <div className="royal-container" style={{ paddingTop: '4rem' }}>
        <section id="privacy" className="legal-section">
          <h2><ShieldCheck size={22} /> Privacy Policy</h2>
          <p>
            Details you share when posting a tribute or contacting the initiative are used only to
            support the Sukapha 800 commemoration platform. They are not sold or shared
            with third parties for marketing.
          </p>
          <p>
            You may ask for your details to be corrected or removed at any time by writing to{' '}
            <a href="mailto:contact@sukapha800.in">contact@sukapha800.in</a>.
          </p>
        </section>

        <section id="terms" className="legal-section">
          <h2><FileText size={22} /> Terms of Commemoration Platform Use</h2>
          <p>
            This platform exists to honour Chaolung Sukapha and the shared heritage of Assam. Tributes and
            submissions must be respectful of every community, language and faith of the region.
          </p>
          <p>
            Images and texts in the Heritage Vault may be shared for education and non-commercial purposes
            with credit to the Sukapha 800 Celebration Committee. Commercial use requires written permission.
          </p>
        </section>

        <section id="accessibility" className="legal-section">
          <h2><Accessibility size={22} /> Website Accessibility Guidelines</h2>
          <p>
            We aim to meet WCAG 2.2 AA. Pages support keyboard navigation, provide text alternatives for
            and keep text readable at every screen size.
          </p>
          <p>
            If any part of the site is difficult to use, please tell us at{' '}
            <a href="mailto:contact@sukapha800.in">contact@sukapha800.in</a> and we will respond within five working days.
          </p>
        </section>
      </div>
    </div>
  )
}
