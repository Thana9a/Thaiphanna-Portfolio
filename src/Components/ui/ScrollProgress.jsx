// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";

/**
 * Thin animated bar fixed at the very top of the page.
 * Fills left-to-right as the user scrolls down.
 */
export default function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="
        fixed top-0 left-0 right-0
        h-[2px] z-[9999]
        bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400
        origin-left
        pointer-events-none
      "
    />
  );
}
