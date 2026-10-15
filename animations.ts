import { MotionProps } from 'framer-motion';

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Triggers once the element is a bit past the bottom edge, so content
// appears while scrolling instead of all at once when the section enters.
const revealViewport = { once: true, margin: '0px 0px -12% 0px' };

export const reveal = (delay = 0, y = 32): MotionProps => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: revealViewport,
  transition: { duration: 0.8, delay, ease: easeOutExpo }
});

export const revealLine = (delay = 0): MotionProps => ({
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  viewport: revealViewport,
  transition: { duration: 1.2, delay, ease: easeOutExpo }
});
