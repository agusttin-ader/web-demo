"use client";

import { useEffect, useRef } from "react";

export type HeroTitleLine = {
  text: string;
  variant: "default" | "accent" | "muted";
};

type HeroTitleProps = {
  id: string;
  lines: HeroTitleLine[];
};

export function HeroTitle({ id, lines }: HeroTitleProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.classList.add("hero__title--animate");
    node.querySelectorAll<HTMLElement>(".hero__title-line").forEach((el, index) => {
      if (index % 2 === 1) el.classList.add("hero__title-line--from-right");
      el.style.setProperty("--line-i", String(index));
    });
  }, [lines]);

  return (
    <h1 ref={ref} id={id} className="hero__title">
      {lines.map((line, index) => {
        const variantClass =
          line.variant === "accent"
            ? "text-accent"
            : line.variant === "muted"
              ? "hero__title-muted"
              : "";

        return (
          <span
            key={`${line.text}-${index}`}
            className={["hero__title-line", variantClass].filter(Boolean).join(" ")}
          >
            {line.text}
          </span>
        );
      })}
    </h1>
  );
}
