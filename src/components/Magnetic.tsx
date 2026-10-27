"use client";

import { motion } from "framer-motion";
import type { ReactNode, PointerEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { MOBILE_MOTION_MEDIA_QUERY } from "@/lib/motion";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMotion = window.matchMedia(MOBILE_MOTION_MEDIA_QUERY);

    const sync = () => {
      setEnabled(!reduceMotion.matches && !mobileMotion.matches);
      if (reduceMotion.matches || mobileMotion.matches) {
        setOffset({ x: 0, y: 0 });
      }
    };

    sync();
    reduceMotion.addEventListener("change", sync);
    mobileMotion.addEventListener("change", sync);
    return () => {
      reduceMotion.removeEventListener("change", sync);
      mobileMotion.removeEventListener("change", sync);
    };
  }, []);

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    setOffset({ x, y });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={onMove}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.div
        animate={{ x: offset.x, y: offset.y }}
        transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
