/** One shared IntersectionObserver for scroll reveals (mobile). */

const ROOT_MARGIN = "0px 0px -6% 0px";
const THRESHOLD = 0.12;

type Entry = { onVisible: () => void };

const entries = new WeakMap<Element, Entry>();

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (typeof window === "undefined") return null;
  if (!observer) {
    observer = new IntersectionObserver(
      (ioEntries) => {
        for (const record of ioEntries) {
          if (!record.isIntersecting) continue;
          const entry = entries.get(record.target);
          if (entry) {
            entry.onVisible();
            observer?.unobserve(record.target);
            entries.delete(record.target);
          }
        }
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
    );
  }
  return observer;
}

export function observeReveal(el: HTMLElement, onVisible: () => void) {
  const io = getObserver();
  if (!io) {
    onVisible();
    return () => {};
  }

  entries.set(el, { onVisible });
  io.observe(el);

  return () => {
    entries.delete(el);
    io.unobserve(el);
  };
}
