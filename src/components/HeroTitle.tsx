"use client";

import { useIsClientHydrated } from "@/hooks/useIsClientHydrated";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { CSSProperties } from "react";

export type HeroTitleLine = {
  text: string;
  variant: "default" | "accent" | "muted";
};

type HeroTitleProps = {
  id: string;
  lines: HeroTitleLine[];
};

export function HeroTitle({ id, lines }: HeroTitleProps) {
  const hydrated = useIsClientHydrated();
  const reduceMotion = usePrefersReducedMotion();
  const animate = hydrated && !reduceMotion;

  return (
    <h1 id={id} className={`hero__title${animate ? " hero__title--animate" : ""}`}>
      {lines.map((line, index) => {
        const fromRight = index % 2 === 1;
        const variantClass =
          line.variant === "accent"
            ? "text-accent"
            : line.variant === "muted"
              ? "hero__title-muted"
              : "";

        return (
          <span
            key={`${line.text}-${index}`}
            className={[
              "hero__title-line",
              variantClass,
              animate && fromRight ? "hero__title-line--from-right" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={animate ? ({ "--line-i": index } as CSSProperties) : undefined}
          >
            {line.text}
          </span>
        );
      })}
    </h1>
  );
}
