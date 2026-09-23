"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useEffect, useRef } from "react";
import { useMobileMotion } from "@/hooks/useMobileMotion";

export function ScrollProgress() {
  const reduceMotion = usePrefersReducedMotion();
  const mobileMotion = useMobileMotion();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion || !mobileMotion) return;

    const bar = barRef.current;
    if (!bar) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [reduceMotion, mobileMotion]);

  if (reduceMotion || !mobileMotion) return null;

  return <div ref={barRef} className="scroll-progress" style={{ transform: "scaleX(0)" }} aria-hidden />;
}
