import { useState, useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react'
import { MIGRATION_JOURNEY } from '../data/ahomData'

// Multi-stage journey from Mong Mao across the Patkai hills to Charaideo.
// Desktop: horizontal stage track + detail panel. Phones: vertical line that
// fills as the reader scrolls past each step.
export default function MigrationTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stage = MIGRATION_JOURNEY[activeIdx];
  const lastIdx = MIGRATION_JOURNEY.length - 1;
  const progress = (activeIdx / lastIdx) * 100;

  // Phone view: how far down the list the reader is (0–1) and how many
  // steps' markers have been passed, measured against a line 60% down the screen
  const verticalRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reachedCount, setReachedCount] = useState(1);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const list = verticalRef.current;
      if (!list || !list.offsetHeight) return;
      const trigger = window.innerHeight * 0.6;
      const rect = list.getBoundingClientRect();
      setScrollProgress(Math.min(1, Math.max(0, (trigger - rect.top) / rect.height)));
      const markers = list.querySelectorAll('.mig-step-marker');
      let count = 0;
      markers.forEach((m) => { if (m.getBoundingClientRect().top <= trigger) count += 1; });
      setReachedCount(Math.max(1, count));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

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

      {/* Phones: vertical line that fills crimson as you scroll */}
      <ol
        ref={verticalRef}
        className="mig-vertical"
        aria-label="Migration stages"
        style={{ '--mv-progress': scrollProgress }}
      >
        {MIGRATION_JOURNEY.map((item, idx) => (
          <li key={item.year} className={`mig-step ${idx < reachedCount ? 'is-reached' : ''}`}>
            <span className="mig-step-marker" aria-hidden="true" />
            <h3 className="mig-step-title">{item.title}</h3>
            <p className="mig-step-meta">{item.year} · {item.location.split(' (')[0]}</p>
            <p className="mig-step-desc">{item.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function toRoman(n) {
  return ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n - 1] || String(n);
}
