import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { scrollToTarget } from '../lib/smoothScroll'

export default function FloatingWidgets() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Measure at most once per animation frame so smooth scrolling stays fluid
    let frame = 0;
    const update = () => {
      frame = 0;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, Math.round(currentProgress))));
        setShowScrollTop(window.scrollY > 200);
      }
    };
    const handleScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToTop = () => {
    scrollToTarget(0);
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="floating-widgets-stack">
      {/* Scroll to Top with Gold Radial Indicator */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="floating-btn"
          aria-label="Scroll to top"
          style={{ position: 'relative' }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}
          >
            <circle
              cx="25"
              cy="25"
              r={radius}
              stroke="rgba(166, 43, 43, 0.15)"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="25"
              cy="25"
              r={radius}
              stroke="#A62B2B"
              strokeWidth="3"
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.1s' }}
              fill="transparent"
            />
          </svg>
          <ArrowUp size={18} style={{ color: 'var(--crimson-primary)', zIndex: 1 }} />
        </button>
      )}

    </div>
  )
}
