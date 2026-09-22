"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useMobileMotion } from "@/hooks/useMobileMotion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const mobileMotion = useMobileMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 26,
    restDelta: 0.001,
  });

  if (reduceMotion || !mobileMotion) return null;

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
