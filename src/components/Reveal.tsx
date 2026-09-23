"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useIsClientHydrated } from "@/hooks/useIsClientHydrated";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
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
  const hydrated = useIsClientHydrated();
  const reduceMotion = usePrefersReducedMotion();
  const reactId = useId();
  const from = useMemo(() => revealDirectionFromId(reactId), [reactId]);
  const ref = useRef<HTMLDivElement>(null);

  const motionActive = hydrated && !reduceMotion;
  const motionVariant = variant === "fade" ? "fade" : "up";

  const runReveal = useCallback(
    (node: HTMLDivElement) => {
      markRevealed(node, delay);
    },
    [delay]
  );

  useEffect(() => {
    if (!motionActive) return;

    const node = ref.current;
    if (!node) return;

    if (initialVisible) {
      runReveal(node);
      return;
    }

    return observeReveal(node, () => runReveal(node));
  }, [motionActive, initialVisible, runReveal]);

  const style = motionActive
    ? ({ "--m-reveal-delay": `${Math.min(delay, 640)}ms` } as CSSProperties)
    : undefined;

  if (!motionActive) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={className}
      data-m-reveal={motionVariant}
      data-m-reveal-from={from}
      style={style}
    >
      {children}
    </div>
  );
}
