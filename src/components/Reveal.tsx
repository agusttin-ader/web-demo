"use client";

import { useEffect, useId, useMemo, useRef, type ReactNode } from "react";
import { observeReveal } from "@/lib/reveal-observer";
import { applyScrollPaceToElement } from "@/lib/scroll-pace";

export type RevealVariant = "up" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  initialVisible?: boolean;
  variant?: RevealVariant;
  /** Delay in milliseconds */
  delay?: number;
};

function revealDirectionFromId(id: string): "left" | "right" {
  let sum = 0;
  for (let i = 0; i < id.length; i++) {
    sum += id.charCodeAt(i);
  }
  return sum % 2 === 0 ? "left" : "right";
}

function markRevealed(node: HTMLDivElement, delay: number) {
  applyScrollPaceToElement(node, delay);
  node.setAttribute("data-m-reveal-in", "");
}

export function Reveal({
  children,
  className,
  initialVisible = false,
  variant = "up",
  delay = 0,
}: RevealProps) {
  const reactId = useId();
  const from = useMemo(() => revealDirectionFromId(reactId), [reactId]);
  const ref = useRef<HTMLDivElement>(null);
  const motionVariant = variant === "fade" ? "fade" : "up";

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.setAttribute("data-m-reveal", motionVariant);
    node.setAttribute("data-m-reveal-from", from);
    node.style.setProperty("--m-reveal-delay", `${Math.min(delay, 640)}ms`);

    if (initialVisible) {
      markRevealed(node, delay);
      return;
    }

    return observeReveal(node, () => markRevealed(node, delay));
  }, [delay, from, initialVisible, motionVariant]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
