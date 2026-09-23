"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { useMobileMotion } from "@/hooks/useMobileMotion";
import { observeReveal } from "@/lib/reveal-observer";

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
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(initialVisible);

  const motionOn = mobileMotion && !reduceMotion;

  useEffect(() => {
    if (!motionOn) return;

    if (initialVisible) {
      setRevealed(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    return observeReveal(node, () => setRevealed(true));
  }, [motionOn, initialVisible]);

  if (!motionOn) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  const style = {
    "--m-reveal-delay": `${Math.min(delay, 280)}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={className}
      data-m-reveal={variant}
      data-m-reveal-in={revealed ? "" : undefined}
      style={style}
    >
      {children}
    </div>
  );
}
