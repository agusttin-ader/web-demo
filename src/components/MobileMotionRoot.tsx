"use client";

import { useEffect } from "react";
import { MOBILE_MOTION_MEDIA_QUERY } from "@/lib/motion";
import { initScrollPaceTracking } from "@/lib/scroll-pace";

/** Sets `data-motion` on `<html>` for CSS-only mobile polish (no per-section JS). */
export function MobileMotionRoot() {
  useEffect(() => {
    initScrollPaceTracking();

    const root = document.documentElement;
    const mql = window.matchMedia(MOBILE_MOTION_MEDIA_QUERY);

    const apply = () => {
      root.dataset.motion = mql.matches ? "mobile" : "desktop";
    };

    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  return null;
}
