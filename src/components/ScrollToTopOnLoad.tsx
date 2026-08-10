"use client";

import { useEffect } from "react";

/** On load/refresh, land at the top (hero) instead of restoring scroll or hash. */
export function ScrollToTopOnLoad() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const toTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Drop hash so the browser does not jump to a section after refresh.
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    toTop();
    const frame = window.requestAnimationFrame(toTop);
    const timer = window.setTimeout(toTop, 0);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  return null;
}
