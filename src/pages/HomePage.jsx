import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Crown, Award,
  ArrowLeft, ArrowRight,
  CheckCircle2, XCircle, RotateCcw,
  Info,
  HeartHandshake,
  Compass, Mountain, Flag, MapPin, Landmark, Sprout
} from 'lucide-react'
import {
  AHOM_QUIZ
} from '../data/ahomData'
import Button from '../components/common/Button'
import unescoBannerImg from '../images/unesco_banner.png'
import HeritageTourismSection from '../components/HeritageTourismSection'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import CentenaryCTA from '../components/CentenaryCTA'
import ahomMapImg from '../images/ahom_map.jpg'
import rangGharImg from '../images/visionary_statecraft/rang_ghar.jpg'
import talatalGharImg from '../images/visionary_statecraft/talatal_ghar.jpeg'
import karengGharImg from '../images/visionary_statecraft/kareng_ghar.jpeg'
import golaGharImg from '../images/visionary_statecraft/gola_ghor.jpeg'
import joysagarTankImg from '../images/visionary_statecraft/joysagar_tank.jpeg'
import deviGharImg from '../images/visionary_statecraft/Devighar_Jaysagar.jpg'
import ranganathDolImg from '../images/visionary_statecraft/Ronganath_Doul.jpg'
import haraGauriDolImg from '../images/visionary_statecraft/Hara_Gauri_Doul.jpg'
import baidyanathShivaDolImg from '../images/visionary_statecraft/Badyanath_Shivadol.jpg'

const AHOM_HERITAGE_SITES = [
  { name: 'Rang Ghar', place: 'Sivasagar · Royal Amphitheatre', image: rangGharImg },
  { name: 'Talatal Ghar', place: 'Sivasagar · Royal Palace', image: talatalGharImg },
  { name: 'Kareng Ghar', place: 'Garhgaon · Royal Palace', image: karengGharImg },
  { name: 'Gola Ghar', place: 'Garhgaon · Royal Armoury', image: golaGharImg },
  { name: 'Joysagar Tank', place: 'Rangpur · Largest Ahom Tank', image: joysagarTankImg },
  { name: 'Devi Ghar', place: 'Joysagar · Ahom Temple', image: deviGharImg },
  { name: 'Ranganath Dol', place: 'Joysagar · Ahom Temple', image: ranganathDolImg },
  { name: 'Hara Gauri Dol', place: 'Sivasagar · Ahom Temple', image: haraGauriDolImg },
  { name: 'Baidyanath Shiva Dol', place: 'Sivasagar · Ahom Temple', image: baidyanathShivaDolImg },
];

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

  // Milestone journey carousel: arrows scroll by one card
  const journeyRef = useRef(null);
  const [journeyEdge, setJourneyEdge] = useState({ start: true, end: false });

  const updateJourneyEdge = () => {
    const el = journeyRef.current;
    if (!el) return;
    setJourneyEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };

  const scrollJourney = (dir) => {
    const el = journeyRef.current;
    if (!el) return;
    const card = el.querySelector('.journey-item');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  useEffect(() => {
    updateJourneyEdge();
    window.addEventListener('resize', updateJourneyEdge);
    return () => window.removeEventListener('resize', updateJourneyEdge);
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
          <div className="bento-hero-content">
            <h1 className="bento-hero-title">
              Honouring Sukaphaa.<br />
              Uniting Bor Asom.<br />
              Celebrating <span className="bento-hero-accent">798 Years</span><br />
              of Ahom Heritage.
            </h1>
            <p className="bento-hero-lead">
              In 1228 CE, the visionary Tai prince united the diverse peoples of the Brahmaputra valley
              into an indomitable commonwealth of freedom and brotherhood.
            </p>
            <div className="bento-hero-actions">
              <Button to="/migration" variant="filled" arrow size="lg">
                Explore Sukaphaa's Saga
              </Button>
              <Button to="/tribute" variant="outline" onDark size="lg">
                Pay Tribute
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================
          BEFORE / AFTER 1228 COMPARISON
          ========================================================= */}
      <section className="ba-section">
        <div className="royal-container">
          <div className="ba-head">
            <h2 className="ba-title">
              The Valley, <span className="gold-text">Before &amp; After 1228</span>
            </h2>
            <p className="ba-desc">
              How Sukaphaa's arrival turned scattered river villages into the Ahom kingdom.
            </p>
          </div>
          <BeforeAfterSlider />
          <p className="ba-disclaimer">
            <Info size={15} aria-hidden="true" />
            <span>
              <strong>Disclaimer:</strong> These are AI-generated artistic impressions of the valley,
              not historical photographs.
            </span>
          </p>
        </div>
      </section>

      {/* =========================================================
          MODERN ROYAL CHRONICLE MILESTONES SECTION
          ========================================================= */}
      <section className="modern-milestones-section">
        <div className="royal-container">
          <div className="journey-head">
            <div>
              <h2 className="milestones-title">
                Foundational Milestones of the <span className="gold-text">Ahom Genesis</span>
              </h2>
              <p className="milestones-subtitle">
                Trace Chaolung Sukaphaa's transformative 53-year odyssey from the peaks of Patkai to the sacred capital of Charaideo.
              </p>
            </div>
            <div className="journey-controls">
              <button
                type="button"
                className="journey-arrow"
                onClick={() => scrollJourney(-1)}
                disabled={journeyEdge.start}
                aria-label="Previous milestones"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                className="journey-arrow"
                onClick={() => scrollJourney(1)}
                disabled={journeyEdge.end}
                aria-label="Next milestones"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Horizontal journey: connector line runs through the step nodes */}
          <ol className="journey-track" ref={journeyRef} onScroll={updateJourneyEdge}>
            {AHOM_MILESTONES.map((m) => {
              const IconComp = m.icon;
              return (
                <li key={m.year} className="journey-item">
                  <div className="journey-node">
                    <span className="journey-node-dot">
                      <IconComp size={18} />
                    </span>
                  </div>
                  <article className="journey-card">
                    <span className="journey-year">{m.year}</span>
                    <h3 className="journey-title">{m.title}</h3>
                    <p className="journey-location">
                      <MapPin size={14} /> {m.location}
                    </p>
                    <p className="journey-desc">{m.desc}</p>
                  </article>
                </li>
              );
            })}
          </ol>

          <div className="journey-footer">
            <Button to="/migration" variant="filled" arrow>
              Explore the Full Journey
            </Button>
          </div>
        </div>
      </section>

      {/* =========================================================
          AHOM KINGDOM MAP
          ========================================================= */}
      <section className="kingdom-map-section">
        <div className="royal-container kingdom-map-layout">
          <div className="kingdom-map-text">
            <h2 className="kingdom-map-title">
              The Reach of the <span className="gold-text">Ahom Kingdom</span>
            </h2>
            <p className="kingdom-map-desc">
              From a small band of pioneers at Charaideo, the kingdom grew to span the Brahmaputra
              valley and held it for six centuries.
            </p>

            <dl className="kingdom-map-facts">
              <div>
                <dt>1228 – 1826</dt>
                <dd>Nearly six centuries of rule</dd>
              </div>
              <div>
                <dt>Charaideo · Garhgaon · Rangpur · Jorhat</dt>
                <dd>Successive royal capitals</dd>
              </div>
              <div>
                <dt>Manas River</dt>
                <dd>Western frontier after the victory at Itakhuli, 1682</dd>
              </div>
            </dl>
          </div>

          <figure className="kingdom-map-figure">
            <img
              src={ahomMapImg}
              alt="Map of the Ahom kingdom across the Brahmaputra valley, with Guwahati, Jorhat and Bengmara marked"
              loading="lazy"
            />
            <figcaption>Illustrative map of the Ahom kingdom at its height</figcaption>
          </figure>
        </div>
      </section>

      {/* =========================================================
          THEMED THREE-PILLARS SECTION (Ahom Foundation & Statecraft)
          ========================================================= */}
      <section className="themed-pillars-section">
        <div className="royal-container">
          <div className="heritage-grid">
            <div className="heritage-grid-intro">
              <h2 className="themed-pillars-title">
                Visionary statecraft that built an <span className="gold-text">enduring empire</span>.
              </h2>
            </div>

            {AHOM_HERITAGE_SITES.map((site) => (
              <Link key={site.name} to="/vault" className="heritage-site-card">
                <div className="heritage-site-thumb">
                  <img
                    src={site.image}
                    alt={site.name}
                    loading="lazy"
                  />
                </div>
                <div className="heritage-site-body">
                  <h3 className="heritage-site-name">{site.name}</h3>
                  <p className="heritage-site-place">{site.place}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* =========================================================
          INTERACTIVE AHOM WISDOM & TRIVIA QUIZ
          ========================================================= */}
      <section className="section-wrapper royal-light-tint" style={{ padding: '4rem 0' }}>
        <div className="royal-container">
          <div className="section-head">
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
          UNESCO WORLD HERITAGE BANNER (Charaideo Maidams)
          ========================================================= */}
      <section className="unesco-home-section">
        <div className="royal-container">
          <Link to="/vault" className="unesco-home-banner">
            <img
              src={unescoBannerImg}
              alt="Charaideo Maidams, UNESCO World Heritage Site"
              loading="lazy"
            />
          </Link>
        </div>
      </section>

      {/* =========================================================
          HERITAGE TOURISM & SCENIC PRE-FOOTER SHOWCASE
          ========================================================= */}
      <HeritageTourismSection />

      {/* =========================================================
          PRE-FOOTER: 800TH ASOM DIVAS COUNTDOWN CARD
          ========================================================= */}
      <CentenaryCTA />
    </div>
  )
}
