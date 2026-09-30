import { useState } from 'react'
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { ASSOCIATION_FORMED, PAST_EVENTS } from '../data/pastEvents'

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

const yearOf = (iso) => iso.slice(0, 4);

// Newest first, then grouped by year
const SORTED_EVENTS = [...PAST_EVENTS].sort((a, b) => b.date.localeCompare(a.date));
const YEARS = [...new Set(SORTED_EVENTS.map((ev) => yearOf(ev.date)))];
const PLACES = new Set(PAST_EVENTS.map((ev) => ev.venue.split(',').pop().trim()));

export default function PastEventsPage() {
  const [activeYear, setActiveYear] = useState('All');
  const visibleYears = activeYear === 'All' ? YEARS : [activeYear];

  return (
    <div className="past-events-page-view">
      <PageBanner
        title="Past Events"
        subtitle={`Every programme the Sukapha 800 Celebration Committee has carried out since it was formed in ${yearOf(ASSOCIATION_FORMED.date)}.`}
        crumbs={[{ label: 'Events', to: '/events' }, { label: 'Past Events' }]}
      />

      <div className="royal-container past-events-body">
        {/* Summary */}
        <div className="past-events-summary">
          <div>
            <strong>{formatDate(ASSOCIATION_FORMED.date)}</strong>
            <span>Formed at {ASSOCIATION_FORMED.place}</span>
          </div>
          <div>
            <strong>{PAST_EVENTS.length}</strong>
            <span>Events held</span>
          </div>
          <div>
            <strong>{YEARS.length}</strong>
            <span>Years of work</span>
          </div>
          <div>
            <strong>{PLACES.size}</strong>
            <span>Places reached</span>
          </div>
        </div>

        {/* Year filter */}
        <div className="past-events-years" role="tablist" aria-label="Filter by year">
          {['All', ...YEARS].map((year) => (
            <button
              key={year}
              type="button"
              role="tab"
              aria-selected={activeYear === year}
              className={`past-events-year-tab ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year === 'All' ? 'All years' : year}
            </button>
          ))}
        </div>

        {/* Timeline, one block per year */}
        <div className="past-events-timeline">
          {visibleYears.map((year) => (
            <section key={year} className="past-events-year-block" aria-labelledby={`year-${year}`}>
              <h2 id={`year-${year}`} className="past-events-year-label">{year}</h2>
              <ol className="past-events-list">
                {SORTED_EVENTS.filter((ev) => yearOf(ev.date) === year).map((ev) => (
                  <li key={ev.id} className="past-event-item">
                    <span className="past-event-dot" aria-hidden="true" />
                    <span className="past-event-category">{ev.category}</span>
                    <h3 className="past-event-title">{ev.title}</h3>
                    <div className="past-event-meta">
                      <span><CalendarDays size={14} aria-hidden="true" /> {formatDate(ev.date)}</span>
                      <span><MapPin size={14} aria-hidden="true" /> {ev.venue}</span>
                    </div>
                    <p className="past-event-desc">{ev.desc}</p>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>

        <div className="past-events-footer">
          <p>Want to be part of what comes next?</p>
          <Link to="/events" className="event-register-link">
            See upcoming events <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  )
}
