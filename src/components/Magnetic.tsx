"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, PointerEvent } from "react";
import { useRef, useState } from "react";
import { useMobileMotion } from "@/hooks/useMobileMotion";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({ children, className, strength = 0.22 }: MagneticProps) {
  const reduceMotion = useReducedMotion();
  const mobileMotion = useMobileMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  if (reduceMotion || mobileMotion) {
    return className ? <div className={className}>{children}</div> : <>{children}</>;
  }

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
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
