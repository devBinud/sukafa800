import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Radio, Users, GraduationCap, ShoppingBag, Newspaper, CalendarDays, ArrowRight, ImageIcon } from 'lucide-react'
import { CENTENARY_EVENTS, EVENT_CATEGORIES } from '../data/centenaryEvents'
import PageBanner from '../components/PageBanner'

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Show at most one row of four cards
  const visibleEvents = (activeCategory === 'All'
    ? CENTENARY_EVENTS
    : CENTENARY_EVENTS.filter((ev) => ev.category === activeCategory)
  ).slice(0, 4);

  return (
    <div className="events-page-view">
      <PageBanner
        title="Sukapha 800 Celebrations"
        subtitle="State ceremonies, youth contests, scholarly seminars and live broadcasts marking eight hundred years since Chaolung Sukapha reached the Brahmaputra valley."
        crumbs={[{ label: 'Events' }]}
      />

      <div className="royal-container" style={{ paddingTop: '4rem' }}>
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
              {/* Event photo; a placeholder shows until `image` is set in centenaryEvents.js */}
              <div className="event-card-media">
                {ev.image ? (
                  <img src={ev.image} alt={ev.title} loading="lazy" />
                ) : (
                  <div className="event-card-media-placeholder" aria-hidden="true">
                    <ImageIcon size={30} strokeWidth={1.5} />
                  </div>
                )}
              </div>
              <div className="event-card-body">
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
              </div>
            </article>
          ))}
        </div>
        <p className="events-provisional-note">
          Dates and venues are provisional and will be confirmed by the Celebration Committee.
        </p>

        {/* Link to the committee's record of past events */}
        <div className="past-events-footer events-past-link">
          <p>See everything the committee has organised since it was formed.</p>
          <Link to="/events/past" className="event-register-link">
            View past events <ArrowRight size={14} />
          </Link>
        </div>

        {/* Participation paths */}
        <div className="participation-grid">
          <article id="volunteer" className="participation-card">
            <Users size={22} />
            <h3>Volunteer Portal</h3>
            <p>Guide visitors at Charaideo, assist heritage walks or support festival logistics.</p>
            <a href="mailto:contact@sukapha800.in?subject=Volunteer%20sign-up" className="event-register-link">
              Sign up to volunteer <ArrowRight size={14} />
            </a>
          </article>
          <article id="competitions" className="participation-card">
            <GraduationCap size={22} />
            <h3>School Competitions</h3>
            <p>Quiz, art and debate contests for students across every district of Assam.</p>
            <a href="mailto:contact@sukapha800.in?subject=School%20team%20entry" className="event-register-link">
              Enter a school team <ArrowRight size={14} />
            </a>
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
      </div>
    </div>
  )
}
