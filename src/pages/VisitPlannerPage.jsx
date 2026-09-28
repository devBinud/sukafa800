import { useState } from 'react'
import { CheckCircle2, Sparkles } from 'lucide-react'
import Button from '../components/common/Button'

export default function VisitPlannerPage() {
  const [plannerData, setPlannerData] = useState({
    name: '',
    email: '',
    phone: '',
    travelDate: '',
    monuments: ['Charaideo Maidams (UNESCO)', 'Rang Ghar'],
    groupSize: '2-4 People',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const monumentOptions = [
    'Charaideo Maidams (UNESCO World Heritage)',
    'Rang Ghar (Royal Amphitheatre)',
    'Talatal Ghar & Kareng Ghar (Palaces)',
    'Shiva Dol & Borpukhuri Reservoir',
    'Namdang Stone Bridge',
    'Joysagar & Joy Dol'
  ];

  const handleCheckbox = (item) => {
    if (plannerData.monuments.includes(item)) {
      setPlannerData({
        ...plannerData,
        monuments: plannerData.monuments.filter(m => m !== item)
      });
    } else {
      setPlannerData({
        ...plannerData,
        monuments: [...plannerData.monuments, item]
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="visit-planner-page-view" style={{ paddingTop: '2.5rem' }}>
      <div className="royal-container">
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem' }}>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', marginBottom: '1.25rem' }}>
            HERITAGE TOUR <br />
            <span className="gold-text">PILGRIMAGE PLANNER</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
            Plan your cultural journey across the historical landmarks, sacred Maidams, 
            and royal subterranean palaces of the Ahom Kingdom in Upper Assam.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto 5rem' }}>
          <div className="tribute-form-card" style={{ padding: '3rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={56} style={{ color: 'var(--gold-primary)', margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Pilgrimage Itinerary Generated!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                  Thank you, <strong>{plannerData.name}</strong>. Your customized historical trail to 
                  <strong> {plannerData.monuments.join(', ')}</strong> has been prepared. 
                  Enjoy exploring the living history of Bor Asom!
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Modify Plan
                  </Button>
                  <Button to="/vault" variant="filled">
                    View Monument Gallery
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  <Sparkles size={22} style={{ color: 'var(--gold-primary)' }} />
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>
                    Customize Your Heritage Trail
                  </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kaushik Baruah"
                      className="form-input"
                      value={plannerData.name}
                      onChange={(e) => setPlannerData({ ...plannerData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Phone or WhatsApp</label>
                    <input
                      type="text"
                      placeholder="e.g. +91 98765 43210"
                      className="form-input"
                      value={plannerData.phone}
                      onChange={(e) => setPlannerData({ ...plannerData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Estimated Travel Date</label>
                    <input
                      type="date"
                      required
                      className="form-input"
                      value={plannerData.travelDate}
                      onChange={(e) => setPlannerData({ ...plannerData, travelDate: e.target.value })}
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">Travel Group Size</label>
                    <select
                      className="form-select"
                      value={plannerData.groupSize}
                      onChange={(e) => setPlannerData({ ...plannerData, groupSize: e.target.value })}
                    >
                      <option value="Solo Traveler" style={{ background: '#FFFFFF', color: '#1F0D12' }}>Solo Traveler</option>
                      <option value="2-4 People (Family/Friends)" style={{ background: '#FFFFFF', color: '#1F0D12' }}>2-4 People (Family/Friends)</option>
                      <option value="5-10 People (Tour Group)" style={{ background: '#FFFFFF', color: '#1F0D12' }}>5-10 People (Tour Group)</option>
                      <option value="Student / Educational Excursion" style={{ background: '#FFFFFF', color: '#1F0D12' }}>Student / Educational Excursion</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Landmarks to Include</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem' }}>
                    {monumentOptions.map((opt, oIdx) => {
                      const isChecked = plannerData.monuments.includes(opt);
                      return (
                        <label
                          key={oIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            padding: '0.65rem 0.85rem',
                            borderRadius: 'var(--radius-sm)',
                            background: isChecked ? 'rgba(212, 175, 55, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                            border: `1px solid ${isChecked ? 'var(--gold-primary)' : 'var(--border-gold-subtle)'}`,
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            color: isChecked ? 'var(--gold-light)' : 'var(--text-secondary)'
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckbox(opt)}
                            style={{ accentColor: 'var(--gold-primary)' }}
                          />
                          <span>{opt}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Specific Interests or Inquiries</label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Interested in UNESCO archaeological excavations, photography permits, or Tai-Ahom rituals during Me-Dam-Me-Phi..."
                    className="form-textarea"
                    value={plannerData.notes}
                    onChange={(e) => setPlannerData({ ...plannerData, notes: e.target.value })}
                  />
                </div>

                <Button type="submit" variant="filled" fullWidth arrow>
                  Generate Heritage Itinerary
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
