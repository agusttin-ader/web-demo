"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/** False during SSR and the hydration pass; true immediately after. */
export function useIsClientHydrated() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
