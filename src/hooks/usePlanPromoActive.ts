"use client";

import { useSyncExternalStore } from "react";
import { isPlanPromoActive, subscribePlanPromo } from "@/data/plans";

export function usePlanPromoActive() {
  return useSyncExternalStore(subscribePlanPromo, isPlanPromoActive, isPlanPromoActive);
}
