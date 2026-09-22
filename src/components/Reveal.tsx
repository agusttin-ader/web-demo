"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { MOTION_DURATION, MOTION_EASE, MOTION_VIEWPORT } from "@/lib/motion";

export type RevealVariant = "up" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  initialVisible?: boolean;
  variant?: RevealVariant;
  /** Delay in milliseconds */
  delay?: number;
};

const VARIANTS: Record<RevealVariant, Variants> = {
  up: {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function Reveal({
  children,
  className,
  initialVisible = false,
  variant = "up",
  delay = 0,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  const transition = {
    duration: MOTION_DURATION,
    ease: MOTION_EASE,
    delay: delay / 1000,
  };

  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      transition={transition}
      {...(initialVisible
        ? { initial: "hidden", animate: "visible" }
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: MOTION_VIEWPORT,
          })}
    >
      {children}
    </motion.div>
  );
}
