"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type MotionVariant = "up" | "fade" | "left" | "right" | "scale";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: MotionVariant;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
};

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const variants: Record<MotionVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 16 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function MotionReveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration = 0.4,
  once = true,
  amount = 0.12,
}: MotionRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants[variant]}
      transition={{
        duration,
        delay: delay / 1000,
        ease: EASE,
      }}
    >
      {children}
    </motion.div>
  );
}
