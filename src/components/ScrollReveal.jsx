import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/smoothScroll'

// Blocks that fade + rise into view as you scroll (GSAP ScrollTrigger).
const REVEAL_SELECTORS = [
  'main section h2',
  '.page-banner-inner > *',
  '.triple-card',
  '.heritage-site-card',
  '.ba-slider',
  '.centenary-cta',
  '.kingdom-map-figure',
  '.kingdom-map-facts > div',
  '.about-story-block',
  '.vm-card',
  '.unesco-feature-card',
  '.unesco-home-banner',
  '.culture-card',
  '.monument-card',
  '.pillar-card',
  '.saraighat-spotlight-card',
  '.ruler-card',
  '.joymoti-feature',
  '.legal-section',
  '.tribute-form-card',
  '.quiz-container',
  '.tourism-narrative-col > *',
  '.mosaic-photo-card',
  '.manifesto-flow-title',
].join(', ');

// Home hero plays its own intro on arrival
const HERO_INTRO = '.bento-hero-content > *';

export default function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let ctx;
    const run = () => {
      ctx = gsap.context(() => {
        const hero = gsap.utils.toArray(HERO_INTRO);
        if (hero.length) {
          gsap.fromTo('.bento-hero-bg-img', { scale: 1.12 }, { scale: 1, duration: 1.8, ease: 'power3.out' });
          gsap.fromTo(hero,
            { autoAlpha: 0, y: 48, filter: 'blur(8px)' },
            { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'expo.out', stagger: 0.12, delay: 0.1 });
        }

        const targets = gsap.utils.toArray(REVEAL_SELECTORS)
          // Hero has its own intro; the milestones journey always stays static
          .filter((el) => !el.closest('.bento-hero-section, .modern-milestones-section'));
        if (!targets.length) return;

        gsap.set(targets, { autoAlpha: 0, y: 48 });
        ScrollTrigger.batch(targets, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) => gsap.to(batch, {
            autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, overwrite: true,
          }),
        });
        ScrollTrigger.refresh();
      });
    };

    // Start right after this render
    const raf = requestAnimationFrame(run);

    // Late-loading images change page height; re-measure trigger points
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
