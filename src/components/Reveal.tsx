"use client";

import { useEffect, useRef, useState } from "react";

export type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  initialVisible?: boolean;
  variant?: RevealVariant;
  /** Stagger delay in ms */
  delay?: number;
};

let sharedObserver: IntersectionObserver | null = null;
const observed = new WeakMap<Element, () => void>();

function getObserver() {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const done = observed.get(entry.target);
        if (done) {
          done();
          sharedObserver?.unobserve(entry.target);
          observed.delete(entry.target);
        }
      }
    },
    { threshold: 0.14, rootMargin: "0px 0px -48px 0px" }
  );

  return sharedObserver;
}

export function Reveal({
  children,
  className = "",
  initialVisible = false,
  variant = "up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    if (initialVisible) return;
    const el = ref.current;
    if (!el) return;

    // Visual fallback lives in CSS; skip observer work when motion is reduced.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = getObserver();
    if (!observer) return;

    observed.set(el, () => setVisible(true));
    observer.observe(el);

    return () => {
      observer.unobserve(el);
      observed.delete(el);
    };
  }, [initialVisible]);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "visible" : ""} ${className}`.trim()}
      style={delay ? ({ ["--reveal-delay" as string]: `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
