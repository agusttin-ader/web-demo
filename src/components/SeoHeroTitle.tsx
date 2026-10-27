"use client";

import { useEffect, useRef } from "react";

const WEAK_ENDINGS = new Set([
  "a",
  "con",
  "de",
  "del",
  "el",
  "en",
  "la",
  "las",
  "los",
  "para",
  "por",
  "que",
  "un",
  "una",
  "y",
]);

function splitTitle(text: string): string[] {
  const words = text.trim().split(/\s+/);
  if (words.length <= 4) return [text];

  let mid = Math.ceil(words.length * 0.48);
  while (mid > 2 && WEAK_ENDINGS.has(words[mid - 1].replace(/,$/, "").toLowerCase())) {
    mid -= 1;
  }
  if (mid < 2 || mid >= words.length - 1) {
    mid = Math.max(2, Math.min(words.length - 2, Math.ceil(words.length / 2)));
  }

  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export function SeoHeroTitle({ id, text }: { id: string; text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const lines = splitTitle(text);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.classList.add("seo-page__title--animate");
    node.querySelectorAll<HTMLElement>(".seo-page__title-line").forEach((el, index) => {
      if (index % 2 === 1) el.classList.add("seo-page__title-line--from-right");
      el.style.setProperty("--line-i", String(index));
    });
  }, [text]);

  return (
    <h1 ref={ref} id={id} className="seo-page__title">
      {lines.map((line, index) => (
        <span
          key={`${line}-${index}`}
          className={
            index === lines.length - 1 && lines.length > 1
              ? "seo-page__title-line seo-page__title-line--muted"
              : "seo-page__title-line"
          }
        >
          {line}
        </span>
      ))}
    </h1>
  );
}
