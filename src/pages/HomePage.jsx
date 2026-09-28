import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Crown, Award,
  ArrowRight, ArrowUpRight, BookOpen,
  CheckCircle2, XCircle, RotateCcw,
  Heart,
  HeartHandshake, ShieldCheck,
  Compass, Mountain, Flag, MapPin, Landmark, Sprout
} from 'lucide-react'
import {
  AHOM_QUIZ
} from '../data/ahomData'
import Button from '../components/common/Button'
import ranggharImg from '../images/rangghar.png'
import HeritageTourismSection from '../components/HeritageTourismSection'

const AHOM_MILESTONES = [
  {
    year: "1215 CE",
    kicker: "The Great Exodus",
    title: "Departure from Mong Mao",
    location: "Mao-Shan Kingdom (Upper Myanmar / Yunnan border)",
    desc: "Prince Sukaphaa sets forth westward with 2 seasoned generals, 3 royal high priests, and 9,000 disciplined pioneers to establish a sovereign commonwealth of brotherhood.",
    tag: "9,000 Pioneers & Scholars",
    icon: Compass,
    accent: "#A62B2B",
    badgeBg: "#FEE2E2",
    badgeColor: "#991B1B"
  },
  {
    year: "1215–1228 CE",
    kicker: "Mountain Passage",
    title: "Crossing the Rugged Patkai",
    location: "Pangsau Pass & Hukawng Valley",
    desc: "A grueling 13-year expedition traversing treacherous mountain crests and dense rain forests, sustained by extraordinary civic order, medical resourcefulness, and mutual resolve.",
    tag: "13-Year Mountain Trek",
    icon: Mountain,
    accent: "#A62B2B",
    badgeBg: "#FEE2E2",
    badgeColor: "#991B1B"
  },
  {
    year: "1228 CE",
    kicker: "Historic Arrival",
    title: "Descent into Namrup",
    location: "Burhidihing River Basin, Upper Assam",
    desc: "On December 2, 1228 CE, Sukaphaa reaches the fertile banks of Burhidihing, inaugurating the Ahom era — celebrated across Assam as Asom Divas.",
    tag: "Genesis of Bor Asom",
    icon: Flag,
    accent: "#A62B2B",
    badgeBg: "#FEE2E2",
    badgeColor: "#991B1B"
  },
  {
    year: "1235 CE",
    kicker: "Agrarian Marvel",
    title: "Wet-Rice Agriculture in Habung",
    location: "Habung (Dhemaji) & Tipam",
    desc: "Sukaphaa pioneers extensive Sali wet-rice cultivation, engineering innovative flood dikes, embankments, and community irrigation that transformed wetlands into granaries of prosperity.",
    tag: "Agricultural Revolution",
    icon: Sprout,
    accent: "#A62B2B",
    badgeBg: "#FEE2E2",
    badgeColor: "#991B1B"
  },
  {
    year: "1248 CE",
    kicker: "Diplomatic Synthesis",
    title: "Brotherhood with Moran & Borahi",
    location: "Dikhowmukh & Upper Assam",
    desc: "Refusing conquest through blood, Sukaphaa embraced indigenous kings Badaucha and Thakumtha with banquets and matrimonial unions, weaving diverse valley tribes into one family.",
    tag: "Egalitarian Integration",
    icon: HeartHandshake,
    accent: "#A62B2B",
    badgeBg: "#FEE2E2",
    badgeColor: "#991B1B"
  },
  {
    year: "1253 CE",
    kicker: "Permanent Capital",
    title: "Founding the Capital at Charaideo",
    location: "Charaideo (Che-Rai-Doi — Dazzling Hill)",
    desc: "Sukaphaa consecrates the permanent imperial capital and sacred royal necropolis at the foothills of Charaideo — honored today as India's 43rd UNESCO World Heritage site.",
    tag: "UNESCO World Heritage Site",
    icon: Landmark,
    accent: "#A62B2B",
    badgeBg: "#FEE2E2",
    badgeColor: "#991B1B"
  },
  {
    year: "1268 CE",
    kicker: "Immortal Dynasty",
    title: "Legacy of the First Swargadeo",
    location: "Charaideo Sacred Maidams",
    desc: "After 40 years of enlightened rule, Sukaphaa is laid to rest. He leaves behind an invincible federal ethos and the Paik citizen army that defeated 17 Mughal imperial incursions.",
    tag: "600-Year Unbroken Rule",
    icon: Crown,
    accent: "#A62B2B",
    badgeBg: "#FEE2E2",
    badgeColor: "#991B1B"
  }
];

export default function HomePage() {
  // Quiz State
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelectOption = (idx) => {
    if (selectedOption !== null) return;
    setSelectedOption(idx);
    if (idx === AHOM_QUIZ[currentQuizIdx].answerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (currentQuizIdx < AHOM_QUIZ.length - 1) {
      setCurrentQuizIdx(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
  };

  // Active milestone tracking on scroll
  const rowRefs = useRef([]);
  const [activeMilestones, setActiveMilestones] = useState(new Set([0]));

  useEffect(() => {
    const handleMilestoneScroll = () => {
      const triggerY = window.innerHeight * 0.55;
      const activeSet = new Set([0]);
      rowRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rowRect = el.getBoundingClientRect();
        if (rowRect.top <= triggerY) {
          activeSet.add(idx);
        }
      });
      setActiveMilestones(activeSet);
    };

    window.addEventListener('scroll', handleMilestoneScroll, { passive: true });
    handleMilestoneScroll();

    return () => {
      window.removeEventListener('scroll', handleMilestoneScroll);
    };
  }, []);

  return (
    <div className="home-page-view">
      {/* =========================================================
          1. FULL-WIDTH HERO BANNER
          ========================================================= */}
      <section className="bento-hero-section">
        {/* Full-bleed background image with dark vignette */}
        <img
          src="/images/patkai-odyssey.jpg"
          alt="Chaolung Sukaphaa crossing the Patkai mountains"
          className="bento-hero-bg-img"
        />
        <div className="bento-hero-overlay" />

        <div className="royal-container bento-hero-inner">
          <div className="bento-hero-bottom">
            {/* Left: Big Typography */}
            <div className="bento-hero-headline-wrap">
              <span className="bento-hero-location">
                PATKAI PASS TO CHARAIDEO • EIGHT CENTURIES OF BOR ASOM
              </span>
              <h1 className="bento-hero-title">
                CHAOLUNG SUKAPHAA <br />
                <span>&amp; The Ahom Kingdom</span>
              </h1>
            </div>

            {/* Right: Lead & White Pill Button */}
            <div className="bento-hero-cta-wrap">
              <p className="bento-hero-lead">
                In 1228 CE, the visionary Tai prince united the diverse peoples of the Brahmaputra valley into an indomitable commonwealth of freedom and brotherhood.
              </p>
              <Button to="/migration" variant="filled" onDark arrow size="lg">
                Explore Sukaphaa's Saga
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. THE GENESIS & VISION (Inline Badges & Avatars - Reference Design)
          ========================================================= */}
      <section className="manifesto-interactive-section">
        <div className="royal-container">
          <div className="manifesto-interactive-wrap">
            <h2 className="manifesto-flow-title">
              <span className="manifesto-primary-text">
                We forge an indomitable commonwealth with our brotherly clans and visionary leaders.{' '}
              </span>
              <span className="manifesto-muted-text">
                And unite eight centuries of heritage into the timeless spirit of Bor Asom.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================
          MODERN ROYAL CHRONICLE MILESTONES SECTION
          ========================================================= */}
      <section className="modern-milestones-section">
        <div className="royal-container">
          <div className="milestones-head">
            <span className="milestones-kicker">
              Chronology of Bor Asom
            </span>
            <h2 className="milestones-title">
              Foundational Milestones of the <span className="gold-text">Ahom Genesis</span>
            </h2>
            <p className="milestones-subtitle">
              Trace Chaolung Sukaphaa's transformative 53-year odyssey from the peaks of Patkai to the sacred capital of Charaideo.
            </p>
          </div>

          <div className="chronicle-stream">
            {AHOM_MILESTONES.map((m, idx) => {
              const IconComp = m.icon;
              const isActive = activeMilestones.has(idx);

              return (
                <div
                  key={idx}
                  ref={el => rowRefs.current[idx] = el}
                  className={`chronicle-row ${isActive ? 'is-active' : ''}`}
                >
                  {/* Left Column: Continuous Timeline Node */}
                  <div className="chronicle-spine-col">
                    <div className="chronicle-emblem-node">
                      {IconComp ? (
                        <IconComp size={18} className="node-icon" />
                      ) : (
                        <span className="node-dot" />
                      )}
                    </div>
                  </div>

                  {/* Right Column: Unified Story Card */}
                  <div className="chronicle-story-card">
                    <div className="chronicle-card-meta">
                      <span className="chronicle-year-text">{m.year}</span>
                      <span className="chronicle-location-text">{m.location}</span>
                    </div>

                    <h3 className="chronicle-card-title">{m.title}</h3>
                    <p className="chronicle-card-desc">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          THEMED THREE-PILLARS SECTION (Ahom Foundation & Statecraft)
          ========================================================= */}
      <section className="themed-pillars-section">
        <div className="royal-container">
          <div className="themed-pillars-header">
            <h2 className="themed-pillars-title">
              Visionary statecraft that built an <span className="gold-text">enduring empire</span>.
            </h2>
            <p className="themed-pillars-desc">
              Chaolung Sukaphaa established Bor Asom through mutual respect, egalitarian assimilation, and civic discipline. By honoring indigenous clans while introducing advanced agriculture and structured governance, the Ahom kingdom flourished as an unbroken six-century commonwealth.
            </p>
          </div>

          <div className="themed-pillars-grid">
            {/* Pillar 1 */}
            <div className="themed-pillar-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-badge">
                  <HeartHandshake size={24} />
                </div>
              </div>
              <h3 className="pillar-card-title">Inclusive Assimilation</h3>
              <p className="pillar-card-desc">
                Sukaphaa unified diverse indigenous clans through mutual respect and intermarriage — forging Bor Asom without subjugation or cultural erasure.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="themed-pillar-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-badge">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <h3 className="pillar-card-title">Unbroken Sovereignty</h3>
              <p className="pillar-card-desc">
                Defended the Brahmaputra Valley against 17 imperial Mughal invasions through mastery of river terrain, mud ramparts (Gors), and decisive naval tactics.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="themed-pillar-card">
              <div className="pillar-header-row">
                <div className="pillar-icon-badge">
                  <BookOpen size={24} />
                </div>
              </div>
              <h3 className="pillar-card-title">Living Buranjis</h3>
              <p className="pillar-card-desc">
                Instituted secular factual historiography across six unbroken centuries, chronicling wars, eclipses, and royal edicts on cured Sanchi bark manuscripts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. MORE THAN A DYNASTY: LIVING HERITAGE (Matching Reference Image Block 4)
          ========================================================= */}
      <section className="bento-triple-section">
        <div className="royal-container">
          <div className="triple-head">
            <h2 className="triple-title">
              More Than A Dynasty: The Living Soul of Bor Asom
            </h2>
          </div>

          <div className="triple-cards-grid">
            {/* Card 1 */}
            <div className="triple-card">
              <img src="/images/charaideo-maidams.jpg" alt="UNESCO Charaideo Maidams" className="triple-card-bg-img" />
              <div className="triple-card-overlay" />
              <Link to="/vault" className="triple-card-arrow-btn" aria-label="Explore Charaideo">
                <ArrowUpRight size={18} />
              </Link>
              <div className="triple-card-content">
                <h3 className="triple-card-title">UNESCO Charaideo Maidams</h3>
                <p className="triple-card-desc">
                  The sacred earthen pyramid barrows of Tai-Ahom Swargadeos, inscribed as India's 43rd UNESCO World Heritage site.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="triple-card">
              <img src="/images/ahom-buranji.jpg" alt="The Buranjis and Statecraft" className="triple-card-bg-img" />
              <div className="triple-card-overlay" />
              <Link to="/legacy" className="triple-card-arrow-btn" aria-label="Explore Buranjis">
                <ArrowUpRight size={18} />
              </Link>
              <div className="triple-card-content">
                <h3 className="triple-card-title">The Buranjis &amp; Statecraft</h3>
                <p className="triple-card-desc">
                  A pioneering system of written state chronicles, organic bio-mortar masonry, and disciplined citizen army mobilisation.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="triple-card">
              <img src="/images/ahom-monuments.jpg" alt="Living Traditions and Culture" className="triple-card-bg-img" />
              <div className="triple-card-overlay" />
              <Link to="/legacy" className="triple-card-arrow-btn" aria-label="Explore Traditions">
                <ArrowUpRight size={18} />
              </Link>
              <div className="triple-card-content">
                <h3 className="triple-card-title">Living Traditions &amp; Culture</h3>
                <p className="triple-card-desc">
                  Me-Dam-Me-Phi ancestor veneration, golden Muga silk weaving, and the enduring commonwealth spirit of Bor Asom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================================
          INTERACTIVE AHOM WISDOM & TRIVIA QUIZ
          ========================================================= */}
      <section className="section-wrapper royal-light-tint" style={{ padding: '4rem 0' }}>
        <div className="royal-container">
          <div className="section-head">
            <span className="section-subtitle">Interactive Learning</span>
            <h2 className="section-title">
              Test Your Knowledge of <span className="gold-text">Ahom History</span>
            </h2>
            <p className="section-desc">
              How well do you know Chaolung Sukaphaa, the Battle of Saraighat, and the Paik system?
              Test yourself with our interactive historical quiz!
            </p>
          </div>

          <div className="quiz-container">
            {!quizFinished ? (
              <>
                <div className="quiz-header">
                  <span className="quiz-step-count">
                    Question {currentQuizIdx + 1} of {AHOM_QUIZ.length}
                  </span>
                  <span className="quiz-score-badge">
                    Current Score: {score}/{currentQuizIdx}
                  </span>
                </div>

                <h3 className="quiz-question-text">
                  {AHOM_QUIZ[currentQuizIdx].question}
                </h3>

                <div className="quiz-options-list">
                  {AHOM_QUIZ[currentQuizIdx].options.map((option, optIdx) => {
                    const isSelected = selectedOption === optIdx;
                    const isCorrect = optIdx === AHOM_QUIZ[currentQuizIdx].answerIndex;
                    let optionClass = "quiz-option-btn";

                    if (selectedOption !== null) {
                      if (isCorrect) optionClass += " selected-correct";
                      else if (isSelected) optionClass += " selected-wrong";
                    }

                    return (
                      <button
                        key={optIdx}
                        className={optionClass}
                        onClick={() => handleSelectOption(optIdx)}
                        disabled={selectedOption !== null}
                      >
                        <span>{option}</span>
                        {selectedOption !== null && isCorrect && (
                          <CheckCircle2 size={18} style={{ color: '#22c55e' }} />
                        )}
                        {selectedOption !== null && isSelected && !isCorrect && (
                          <XCircle size={18} style={{ color: '#ef4444' }} />
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedOption !== null && (
                  <div className="quiz-explanation-box">
                    <strong style={{ color: 'var(--gold-dark)', display: 'block', marginBottom: '0.35rem' }}>
                      Historical Context:
                    </strong>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      {AHOM_QUIZ[currentQuizIdx].explanation}
                    </p>
                    <Button onClick={handleNextQuiz} variant="filled" arrow style={{ marginTop: '1.25rem' }}>
                      {currentQuizIdx < AHOM_QUIZ.length - 1 ? 'Next Question' : 'View Final Score'}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="quiz-result-card">
                <Award size={64} style={{ color: 'var(--gold-primary)', margin: '0 auto 1.25rem' }} />
                <h3 className="quiz-result-title">Quiz Completed!</h3>
                <p className="quiz-result-score gold-text">
                  You scored {score} out of {AHOM_QUIZ.length}
                </p>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
                  {score === AHOM_QUIZ.length
                    ? 'Magnificent! You possess the supreme historical knowledge of a Royal Buranji Chronicler!'
                    : score >= 3
                      ? 'Well done! You have a respectable understanding of the 600-year Ahom Kingdom.'
                      : 'Good attempt! Explore our Dynasty and Culture sagas to discover more about Bor Asom.'}
                </p>
                <Button onClick={handleResetQuiz} variant="filled" icon={<RotateCcw size={16} />} style={{ margin: '0 auto' }}>
                  Retake Historical Quiz
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          CALL TO ACTION / HOMAGE PROMPT
          ========================================================= */}
      <section className="section-wrapper" style={{ paddingBottom: '3.5rem' }}>
        <div className="royal-container">
          <div className="homage-cta-banner">
            <div 
              className="homage-cta-bg-layer" 
              style={{ backgroundImage: `url(${ranggharImg})` }} 
            />
            <div className="homage-cta-overlay" />
            <div className="homage-cta-content">
              <h2 className="homage-cta-title">
                Keep the Legacy of <span className="homage-gold-highlight">Bor Asom</span> Alive
              </h2>
              <p className="homage-cta-desc">
                Chaolung Sukaphaa's immortal message of inclusivity, harmony, and unyielding defense
                of self-respect remains the beating heart of Assam. Share your tribute on the community wall.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button to="/tribute" variant="filled" onDark arrow>
                  Write a Tribute to Sukaphaa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HERITAGE TOURISM & SCENIC PRE-FOOTER SHOWCASE
          ========================================================= */}
      <HeritageTourismSection />
    </div>
  )
}
