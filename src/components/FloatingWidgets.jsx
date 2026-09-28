import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function FloatingWidgets() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, Math.round(currentProgress))));
        setShowScrollTop(window.scrollY > 200);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          title={`Return to Crest (${scrollProgress}%)`}
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
              stroke="rgba(212, 175, 55, 0.2)"
              strokeWidth="3"
              fill="transparent"
            />
            <circle
              cx="25"
              cy="25"
              r={radius}
              stroke="#D4AF37"
              strokeWidth="3"
              strokeDasharray={`${circumference} ${circumference}`}
              style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.1s' }}
              fill="transparent"
            />
          </svg>
          <ArrowUp size={18} style={{ color: 'var(--gold-light)', zIndex: 1 }} />
        </button>
      )}

    </div>
  )
}
