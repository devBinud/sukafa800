import { useState } from 'react'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { MIGRATION_JOURNEY } from '../data/ahomData'

// Multi-stage journey from Mong Mao across the Patkai hills to Charaideo.
// Desktop: horizontal stage track + detail panel. Phones: vertical swipe deck.
export default function MigrationTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stage = MIGRATION_JOURNEY[activeIdx];
  const lastIdx = MIGRATION_JOURNEY.length - 1;
  const progress = (activeIdx / lastIdx) * 100;

  const handleKeyDown = (e) => {
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step) return;
    const next = Math.min(lastIdx, Math.max(0, activeIdx + step));
    setActiveIdx(next);
    e.currentTarget.querySelectorAll('[role="tab"]')[next]?.focus();
  };

  return (
    <div className="mig-timeline">
      {/* Desktop: horizontal landscape track */}
      <div className="mig-horizontal">
        <div className="mig-track" role="tablist" aria-label="Migration stages" onKeyDown={handleKeyDown}>
          <div className="mig-track-line" aria-hidden="true">
            <span className="mig-track-progress" style={{ width: `${progress}%` }} />
          </div>
          {MIGRATION_JOURNEY.map((item, idx) => (
            <button
              key={item.year}
              type="button"
              role="tab"
              aria-selected={idx === activeIdx}
              tabIndex={idx === activeIdx ? 0 : -1}
              className={`mig-node ${idx === activeIdx ? 'active' : ''} ${idx < activeIdx ? 'passed' : ''}`}
              onClick={() => setActiveIdx(idx)}
            >
              <span className="mig-node-dot">{idx + 1}</span>
              <span className="mig-node-year">{item.year}</span>
              <span className="mig-node-place">{item.location.split(' (')[0]}</span>
            </button>
          ))}
        </div>

        <article className="mig-detail" role="tabpanel" key={stage.year}>
          <div className="mig-detail-head">
            <span className="mig-act">Act {toRoman(activeIdx + 1)} · {stage.badge}</span>
            <span className="mig-location"><MapPin size={14} /> {stage.location}</span>
          </div>
          <h3 className="mig-title">{stage.title}</h3>
          <p className="mig-desc">{stage.desc}</p>
          <div className="mig-controls">
            <button type="button" className="mig-arrow" onClick={() => setActiveIdx(activeIdx - 1)} disabled={activeIdx === 0} aria-label="Previous stage">
              <ArrowLeft size={18} />
            </button>
            <span className="mig-counter">{activeIdx + 1} / {MIGRATION_JOURNEY.length}</span>
            <button type="button" className="mig-arrow" onClick={() => setActiveIdx(activeIdx + 1)} disabled={activeIdx === lastIdx} aria-label="Next stage">
              <ArrowRight size={18} />
            </button>
          </div>
        </article>
      </div>

      {/* Phones: vertical drag-and-swipe flow */}
      <ol className="mig-vertical" aria-label="Migration stages">
        {MIGRATION_JOURNEY.map((item, idx) => (
          <li key={item.year} className="mig-swipe-card">
            <span className="mig-act">Act {toRoman(idx + 1)} · {item.badge}</span>
            <span className="mig-swipe-year">{item.year}</span>
            <h3 className="mig-title">{item.title}</h3>
            <span className="mig-location"><MapPin size={13} /> {item.location}</span>
            <p className="mig-desc">{item.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function toRoman(n) {
  return ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n - 1] || String(n);
}
