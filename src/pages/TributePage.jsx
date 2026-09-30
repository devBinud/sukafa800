import { useState, useEffect } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import Button from '../components/common/Button'
import PageBanner from '../components/PageBanner'
import portraitImg from '../images/hero_right_cutout.webp'

// Tributes are kept in this browser only: there is no server to share them yet
const STORAGE_KEY = 'bx800_tributes';
const MAX_MESSAGE = 300;
const EMPTY_FORM = { name: '', location: '', message: '' };

const loadTributes = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
};

export default function TributePage() {
  const [tributes, setTributes] = useState(loadTributes);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tributes));
    } catch {
      // Storage can be blocked (private mode); tributes then last for this visit only
    }
  }, [tributes]);

  const updateField = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setTributes([
      {
        id: Date.now(),
        name: formData.name.trim(),
        location: formData.location.trim(),
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        text: formData.message.trim(),
      },
      ...tributes,
    ]);
    setFormData(EMPTY_FORM);
    setSubmitted(true);
  };

  return (
    <div className="bx-page">
      <PageBanner
        title="Pay Tribute"
        subtitle="Offer your respects to Chaolung Sukapha and to every community that built Bor Axom over eight hundred years."
        crumbs={[{ label: 'Pay Tribute' }]}
      />

      <section className="bx-section">
        <div className="royal-container tribute-layout">
          {/* Left: dedication panel */}
          <div className="tribute-intro">
            <span className="tribute-intro-as" lang="as" aria-hidden="true">শ্ৰদ্ধাঞ্জলি</span>
            <h2 className="tribute-intro-title">A tribute for 800 years</h2>
            <p className="tribute-intro-text">
              In 1228, Sukapha chose alliance over conquest. Your words honour that choice and the
              Axomiya Mahajati it gave rise to.
            </p>
            <ul className="tribute-intro-list">
              <li>Remember Sukapha on Asom Divas, 2 December</li>
              <li>Honour the communities who built Bor Axom together</li>
              <li>Pass the story on to the next generation</li>
            </ul>
            <img src={portraitImg} alt="" aria-hidden="true" className="tribute-intro-portrait" loading="lazy" />
          </div>

          {/* Right: tribute form */}
          <div className="tribute-form">
            {submitted ? (
              <div className="tribute-success" role="status">
                <CheckCircle2 size={40} aria-hidden="true" />
                <h2>Thank you for your tribute</h2>
                <p>Your message has been added to your tributes below.</p>
                <Button type="button" variant="outline" onClick={() => setSubmitted(false)}>
                  Write another tribute
                </Button>
              </div>
            ) : (
              <>
                <h2 className="tribute-form-title">Write your tribute</h2>
                <p className="tribute-form-lead">A few words of respect, gratitude or pride.</p>

                <form onSubmit={handleSubmit}>
                  <div className="tribute-form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="tribute-name">Your name</label>
                      <input
                        id="tribute-name"
                        type="text"
                        required
                        className="form-input"
                        value={formData.name}
                        onChange={updateField('name')}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="tribute-location">City or village</label>
                      <input
                        id="tribute-location"
                        type="text"
                        className="form-input"
                        value={formData.location}
                        onChange={updateField('location')}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="tribute-message">Your tribute</label>
                    <textarea
                      id="tribute-message"
                      rows="5"
                      required
                      maxLength={MAX_MESSAGE}
                      className="form-textarea"
                      value={formData.message}
                      onChange={updateField('message')}
                    />
                    <span className="tribute-count">{formData.message.length} / {MAX_MESSAGE}</span>
                  </div>

                  <Button type="submit" variant="filled" fullWidth icon={<Send size={16} />}>
                    Offer Tribute
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Tributes written in this browser */}
      {tributes.length > 0 && (
        <section className="bx-section bx-section--tint">
          <div className="royal-container">
            <div className="bx-section-head">
              <h2 className="bx-title">Your <span className="gold-text">Tributes</span></h2>
              <p className="bx-lead">Saved on this device.</p>
            </div>
            <div className="bx-grid bx-grid--3">
              {tributes.map((t) => (
                <figure key={t.id} className="tribute-item">
                  <blockquote>“{t.text}”</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{[t.location, t.date].filter(Boolean).join(' · ')}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
