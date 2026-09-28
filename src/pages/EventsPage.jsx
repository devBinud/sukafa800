import { useState } from 'react'
import { MapPin, Radio, Users, GraduationCap, ShoppingBag, Newspaper, CheckCircle2 } from 'lucide-react'
import CentenaryCountdown from '../components/CentenaryCountdown'
import { CENTENARY_EVENTS, EVENT_CATEGORIES, PARTICIPANT_TYPES } from '../data/centenaryEvents'
import Button from '../components/common/Button'

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  eventId: CENTENARY_EVENTS[0].id,
  participantType: PARTICIPANT_TYPES[0],
  attendees: 1,
};

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const visibleEvents = activeCategory === 'All'
    ? CENTENARY_EVENTS
    : CENTENARY_EVENTS.filter((ev) => ev.category === activeCategory);
  const broadcasts = CENTENARY_EVENTS.filter((ev) => ev.category === 'Live Broadcasts');

  const updateField = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const startRegistration = (patch) => {
    setFormData({ ...formData, ...patch });
    setSubmitted(false);
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedEvent = CENTENARY_EVENTS.find((ev) => ev.id === formData.eventId);

  return (
    <div className="events-page-view" style={{ paddingTop: '2.5rem' }}>
      <div className="royal-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', marginBottom: '1.25rem' }}>
            SUKAPHA 800 <br />
            <span className="gold-text">1228 – 2028 Celebrations</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            State ceremonies, youth contests, scholarly seminars and live broadcasts marking
            eight hundred years since Chaolung Sukapha reached the Brahmaputra valley.
          </p>
        </div>

        {/* Dashboard summary */}
        <div className="events-dashboard-strip">
          <div>
            <span className="events-strip-kicker">Countdown to Asom Divas · 2 Dec 2028</span>
            <CentenaryCountdown />
          </div>
          <div className="events-strip-stats">
            <div><strong>{CENTENARY_EVENTS.length}</strong><span>Programmes</span></div>
            <div><strong>{EVENT_CATEGORIES.length - 1}</strong><span>Tracks</span></div>
            <div><strong>{broadcasts.length}</strong><span>Live Streams</span></div>
          </div>
        </div>

        {/* Programme filter + cards */}
        <div className="events-filter-row" role="tablist" aria-label="Event categories">
          {EVENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`events-filter-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="events-grid">
          {visibleEvents.map((ev) => (
            <article key={ev.id} className="event-card">
              <div className="event-card-top">
                <span className="event-category">{ev.category}</span>
                {ev.category === 'Live Broadcasts' && (
                  <span className="event-live-badge"><Radio size={12} /> Stream</span>
                )}
              </div>
              <span className="event-date"><CalendarDays size={14} /> {ev.date}</span>
              <h3 className="event-title">{ev.title}</h3>
              <span className="event-venue"><MapPin size={13} /> {ev.venue}</span>
              <p className="event-desc">{ev.desc}</p>
              <button type="button" className="event-register-link" onClick={() => startRegistration({ eventId: ev.id })}>
                Register <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>
        <p className="events-provisional-note">
          Dates and venues are provisional and will be confirmed by the Celebration Committee.
        </p>

        {/* Participation paths */}
        <div className="participation-grid">
          <article id="volunteer" className="participation-card">
            <Users size={22} />
            <h3>Volunteer Portal</h3>
            <p>Guide visitors at Charaideo, assist heritage walks or support festival logistics.</p>
            <button type="button" className="event-register-link" onClick={() => startRegistration({ participantType: 'Volunteer' })}>
              Sign up to volunteer <ArrowRight size={14} />
            </button>
          </article>
          <article id="competitions" className="participation-card">
            <GraduationCap size={22} />
            <h3>School Competitions</h3>
            <p>Quiz, art and debate contests for students across every district of Assam.</p>
            <button
              type="button"
              className="event-register-link"
              onClick={() => startRegistration({ participantType: 'School Group', eventId: 'buranji-quiz' })}
            >
              Enter a school team <ArrowRight size={14} />
            </button>
          </article>
          <article id="souvenirs" className="participation-card">
            <ShoppingBag size={22} />
            <h3>Souvenir Shop</h3>
            <p>Commemorative coins, Muga silk stoles and Jaapi keepsakes. Opens with the festival season.</p>
            <a href="mailto:contact@sukapha800.in?subject=Souvenir%20Shop%20updates" className="event-register-link">
              Notify me <ArrowRight size={14} />
            </a>
          </article>
          <article id="press" className="participation-card">
            <Newspaper size={22} />
            <h3>Media Press Kit</h3>
            <p>Logos, fact sheets and high-resolution imagery for accredited journalists.</p>
            <a href="mailto:contact@sukapha800.in?subject=Press%20Kit%20Request" className="event-register-link">
              Request press kit <ArrowRight size={14} />
            </a>
          </article>
        </div>

        {/* Registration */}
        <section id="register" className="events-register-card">
          <div className="events-register-intro">
            <span className="events-strip-kicker">Register for Events</span>
            <h2>Attend the Festivities</h2>
            <p>
              Reserve your place at a ceremony, contest or seminar. Registration is free; a confirmation
              with venue details will follow by email.
            </p>
          </div>

          {submitted ? (
            <div className="events-register-success" role="status">
              <CheckCircle2 size={36} />
              <h3>Thank you, {formData.name.split(' ')[0]}!</h3>
              <p>
                Your {formData.participantType.toLowerCase()} registration for <strong>{selectedEvent?.title}</strong> ({selectedEvent?.date}) has been received.
                We'll write to {formData.email}.
              </p>
              <Button type="button" variant="outline" onClick={() => { setFormData(EMPTY_FORM); setSubmitted(false); }}>
                Register for another event
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="events-register-form">
              <div className="form-group">
                <label className="form-label" htmlFor="reg-name">Full Name</label>
                <input id="reg-name" className="form-input" required value={formData.name} onChange={updateField('name')} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="reg-email">Email</label>
                <input id="reg-email" type="email" className="form-input" required value={formData.email} onChange={updateField('email')} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="reg-phone">Phone</label>
                <input id="reg-phone" type="tel" className="form-input" value={formData.phone} onChange={updateField('phone')} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="reg-type">Registering as</label>
                <select id="reg-type" className="form-select" value={formData.participantType} onChange={updateField('participantType')}>
                  {PARTICIPANT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="form-group events-form-wide">
                <label className="form-label" htmlFor="reg-event">Event</label>
                <select id="reg-event" className="form-select" value={formData.eventId} onChange={updateField('eventId')}>
                  {CENTENARY_EVENTS.map((ev) => (
                    <option key={ev.id} value={ev.id}>{ev.date} · {ev.title}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="reg-count">Number of attendees</label>
                <input id="reg-count" type="number" min="1" max="200" className="form-input" value={formData.attendees} onChange={updateField('attendees')} />
              </div>
              <div className="form-group events-form-submit">
                <Button type="submit" variant="filled" arrow>
                  Confirm Registration
                </Button>
              </div>
            </form>
          )}
        </section>
      </div>
    </div>
  )
}
