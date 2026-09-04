"use client";

import { motion, useReducedMotion } from "framer-motion";

type SplitTextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  wordClassName?: string;
};

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function SplitTextReveal({
  text,
  className = "",
  delay = 0,
  wordClassName = "",
}: SplitTextRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className={`inline-block ${wordClassName}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: delay + i * 0.03,
            ease: EASE,
          }}
          aria-hidden={i < words.length ? undefined : true}
        >
          {word}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
