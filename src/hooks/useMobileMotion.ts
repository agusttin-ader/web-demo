"use client";

import { useSyncExternalStore } from "react";
import { MOBILE_MOTION_MEDIA_QUERY } from "@/lib/motion";

function subscribe(onStoreChange: () => void) {
  const mql = window.matchMedia(MOBILE_MOTION_MEDIA_QUERY);
  mql.addEventListener("change", onStoreChange);
  return () => mql.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(MOBILE_MOTION_MEDIA_QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/** True when viewport is mobile/tablet and premium motion should run. */
export function useMobileMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
