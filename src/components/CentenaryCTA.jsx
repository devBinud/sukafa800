import CentenaryCountdown from './CentenaryCountdown'
import Button from './common/Button'

// Pre-footer card: live countdown to the 800th Asom Divas plus the main calls to action
export default function CentenaryCTA() {
  return (
    <section className="centenary-cta-section">
      <div className="royal-container">
        <div className="centenary-cta">
          <div className="centenary-cta-text">
            <h2 className="centenary-cta-title">
              Be part of the <span className="centenary-cta-accent">800th Asom Divas</span>
            </h2>
            <p className="centenary-cta-desc">
              On 2 December 2028, Assam marks eight centuries since Chaolung Sukaphaa crossed the
              Patkai. Add your voice to the tribute wall before the day arrives.
            </p>
            <div className="centenary-cta-actions">
              <Button to="/tribute" variant="filled" onDark arrow size="lg">
                Pay Tribute
              </Button>
              <Button to="/visit" variant="outline" onDark size="lg">
                Plan a Visit
              </Button>
            </div>
          </div>

          <div className="centenary-cta-countdown">
            <p className="centenary-cta-countdown-label">Countdown to 2 December 2028</p>
            <CentenaryCountdown />
          </div>
        </div>
      </div>
    </section>
  )
}
