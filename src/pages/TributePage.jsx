import { useState, useEffect } from 'react'
import { Heart, Sparkles, Send, MapPin, Calendar, BookOpen, CheckCircle2, MessageSquare } from 'lucide-react'
import { COMMUNITY_TRIBUTES } from '../data/ahomData'
import Button from '../components/common/Button'

const BADGE_OPTIONS = [
  "Pride of Bor Asom",
  "Jai Aai Asom",
  "Sukapha Divas Tribute",
  "UNESCO Heritage Homage",
  "Historical Scholar"
];

export default function TributePage() {
  const [tributes, setTributes] = useState(() => {
    const saved = localStorage.getItem('ahom_community_tributes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return COMMUNITY_TRIBUTES;
      }
    }
    return COMMUNITY_TRIBUTES;
  });

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    badge: 'Pride of Bor Asom',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('ahom_community_tributes', JSON.stringify(tributes));
  }, [tributes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const newTribute = {
      id: Date.now(),
      name: formData.name.trim(),
      location: formData.location.trim() || 'Assam, India',
      date: 'Today',
      badge: formData.badge,
      text: formData.message.trim(),
    };

    setTributes([newTribute, ...tributes]);
    setFormData({
      name: '',
      location: '',
      badge: 'Pride of Bor Asom',
      message: ''
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="tribute-page-view" style={{ paddingTop: '2.5rem' }}>
      <div className="royal-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', marginBottom: '1.25rem' }}>
            COMMUNITY TRIBUTE WALL <br />
            <span className="gold-text">Honor Chaolung Sukaphaa</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            Join thousands of voices in paying heartfelt respects to the visionary founder 
            of Bor Asom. Leave your message on the royal scroll of honor.
          </p>
        </div>

        {/* Tribute Section Grid */}
        <div className="tribute-section-grid" style={{ marginBottom: '5rem' }}>
          {/* Tribute Form Card */}
          <div className="tribute-form-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
              <Sparkles size={22} style={{ color: 'var(--gold-primary)' }} />
              <h2 style={{ fontSize: '1.45rem', color: 'var(--text-primary)', margin: 0 }}>
                Inscribe Your Tribute
              </h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Write your message of respect, unity, and pride for Chaolung Sukaphaa and the heritage of Assam.
            </p>

            {submitted && (
              <div style={{
                background: 'rgba(34, 197, 94, 0.15)',
                border: '1px solid #22c55e',
                color: '#166534',
                padding: '1rem',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                <CheckCircle2 size={18} />
                <span>Your tribute has been inscribed on the wall of honor!</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bedanta Bora"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your City / Homeland</label>
                <input
                  type="text"
                  placeholder="e.g. Sivasagar, Guwahati, Dibrugarh, London..."
                  className="form-input"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Honor Category Badge</label>
                <select
                  className="form-select"
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                >
                  {BADGE_OPTIONS.map((b, bIdx) => (
                    <option key={bIdx} value={b} style={{ background: '#FFFFFF', color: '#1F0D12' }}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Your Tribute Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Share your thoughts on Chaolung Sukaphaa's legacy, unity in Assam, or the 600-year Ahom kingdom..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" variant="filled" fullWidth icon={<Send size={16} />}>
                Publish Tribute to Wall
              </Button>
            </form>
          </div>

          {/* Tribute Live Feed */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MessageSquare size={20} style={{ color: 'var(--gold-primary)' }} />
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', margin: 0, fontWeight: 400 }}>
                  The Royal Scroll of Homage ({tributes.length})
                </h3>
              </div>
              <span className="gold-badge" style={{ fontSize: '0.75rem' }}>
                Live Stream
              </span>
            </div>

            <div className="tributes-feed">
              {tributes.map((item) => (
                <div key={item.id} className="tribute-feed-card">
                  <div className="tribute-card-header">
                    <div>
                      <div className="tribute-author">{item.name}</div>
                      <div className="tribute-meta">
                        <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} />
                        {item.location} • {item.date}
                      </div>
                    </div>
                    <span className="crimson-badge" style={{ fontSize: '0.72rem', padding: '0.2rem 0.6rem' }}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="tribute-text">"{item.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heritage Visitor Guide to Sivasagar & Charaideo */}
        <div style={{
          background: 'linear-gradient(135deg, #1d1828 0%, #120f18 100%)',
          border: '1.5px solid var(--border-gold)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          marginBottom: '5rem'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
            <span className="gold-badge" style={{ marginBottom: '0.6rem' }}>
              <MapPin size={14} /> Traveler's Pilgrimage
            </span>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.75rem' }}>
              Visiting the Historic Ahom Capitals
            </h2>
            <p style={{ color: '#EAE3D9', fontSize: '1rem', margin: 0 }}>
              Plan an authentic pilgrimage to the sacred land of Charaideo, Sivasagar, and Gargaon.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F5C842', fontWeight: 700, marginBottom: '0.5rem' }}>
                <MapPin size={18} style={{ color: '#F5C842' }} /> How to Reach
              </div>
              <p style={{ fontSize: '0.92rem', color: '#EAE3D9', lineHeight: '1.65', margin: 0 }}>
                Fly into <strong style={{ color: '#FFE082' }}>Dibrugarh Airport (MOH)</strong> or <strong style={{ color: '#FFE082' }}>Jorhat Airport (JRH)</strong>. 
                Regular cabs and trains connect directly to Sivasagar and Charaideo (approx. 1.5 to 2 hours drive).
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F5C842', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Calendar size={18} style={{ color: '#F5C842' }} /> Best Time to Visit
              </div>
              <p style={{ fontSize: '0.92rem', color: '#EAE3D9', lineHeight: '1.65', margin: 0 }}>
                <strong style={{ color: '#FFE082' }}>October to March</strong> offers pleasant autumn and winter weather. 
                Attend <strong style={{ color: '#FFE082' }}>Asom Divas on Dec 2</strong> or <strong style={{ color: '#FFE082' }}>Me-Dam-Me-Phi on Jan 31</strong> 
                for traditional Tai-Ahom rituals at Charaideo.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F5C842', fontWeight: 700, marginBottom: '0.5rem' }}>
                <BookOpen size={18} style={{ color: '#F5C842' }} /> Key Landmarks
              </div>
              <p style={{ fontSize: '0.92rem', color: '#EAE3D9', lineHeight: '1.65', margin: 0 }}>
                Charaideo Maidams (UNESCO), Rang Ghar, Talatal Ghar, Kareng Ghar (Gargaon), 
                Shiva Dol &amp; Borpukhuri, Joysagar, and Namdang Stone Bridge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
