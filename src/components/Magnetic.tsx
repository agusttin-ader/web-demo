"use client";

import { useEffect, useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  /** 0–1 pull toward cursor. Keep low for a premium feel. */
  strength?: number;
};

/**
 * Subtle magnetic pull for primary CTAs. Disabled on touch / reduced-motion.
 */
export function Magnetic({ children, className = "", strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let active = false;

    const tick = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (
        Math.abs(targetX - currentX) > 0.08 ||
        Math.abs(targetY - currentY) > 0.08 ||
        active
      ) {
        frame = window.requestAnimationFrame(tick);
      } else {
        frame = 0;
        el.style.transform = "translate3d(0, 0, 0)";
      }
    };

    const start = () => {
      if (!frame) frame = window.requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetX = (event.clientX - cx) * strength;
      targetY = (event.clientY - cy) * strength;
      active = true;
      start();
    };

    const onLeave = () => {
      targetX = 0;
      targetY = 0;
      active = false;
      start();
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerup", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerup", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
      el.style.transform = "";
    };
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic ${className}`.trim()}>
      {children}
    </div>
  );
}
