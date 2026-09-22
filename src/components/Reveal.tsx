"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useMobileMotion } from "@/hooks/useMobileMotion";
import {
  MOBILE_MOTION_DURATION,
  MOBILE_MOTION_EASE,
  MOBILE_MOTION_VIEWPORT,
  MOBILE_REVEAL_VARIANTS,
} from "@/lib/motion";

export type RevealVariant = "up" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  initialVisible?: boolean;
  variant?: RevealVariant;
  /** Delay in milliseconds */
  delay?: number;
};

export function Reveal({
  children,
  className,
  initialVisible = false,
  variant = "up",
  delay = 0,
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const mobileMotion = useMobileMotion();

  if (reduceMotion || !mobileMotion) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  const variants = MOBILE_REVEAL_VARIANTS[variant] as Variants;

  const transition = {
    duration: MOBILE_MOTION_DURATION,
    ease: MOBILE_MOTION_EASE,
    delay: delay / 1000,
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={transition}
      {...(initialVisible
        ? { initial: "hidden", animate: "visible" }
        : {
            initial: "hidden",
            whileInView: "visible",
            viewport: MOBILE_MOTION_VIEWPORT,
          })}
    >
      {children}
    </motion.div>
  );
}
