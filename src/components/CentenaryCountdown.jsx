import { useEffect, useState } from 'react'
import { CENTENARY_DATE } from '../data/centenaryEvents'

function getRemaining() {
  const diff = Math.max(0, CENTENARY_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
  };
}

export default function CentenaryCountdown({ dark = false }) {
  const [remaining, setRemaining] = useState(getRemaining);

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining()), 30000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    ['Days', remaining.days],
    ['Hours', remaining.hours],
    ['Minutes', remaining.minutes],
  ];

  return (
    <div className={`centenary-countdown ${dark ? 'dark' : ''}`} aria-label="Countdown to Asom Divas, 2 December 2028">
      {units.map(([label, value]) => (
        <div key={label} className="countdown-unit">
          <span className="countdown-value">{String(value).padStart(2, '0')}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  )
}
