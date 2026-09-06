import { MARQUEE_ITEMS } from "@/data/site-content";

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-section border-y border-[var(--section-divider)] py-5 sm:py-6" aria-hidden>
      <div className="marquee-viewport overflow-x-clip">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item">
              {item}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
