import { useScroll, useSpring } from "framer-motion";

/**
 * Returns a spring-smoothed scrollYProgress value (0–1).
 * Used by ScrollProgress component.
 */
export function useScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });
  return smoothProgress;
}
