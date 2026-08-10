import type { ReactNode } from "react";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  id?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  id,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={`mb-[var(--space-6)] max-w-2xl ${centered ? "mx-auto text-center" : "text-left"} ${className}`.trim()}
    >
      <p className="eyebrow">{label}</p>
      <h2
        id={id}
        className={`mt-[var(--space-2)] font-display text-[length:var(--text-3xl)] font-bold tracking-tight text-[var(--foreground)] ${titleClassName}`.trim()}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-[var(--space-2)] max-w-xl text-[length:var(--text-base)] leading-relaxed text-[var(--foreground-muted)] ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
