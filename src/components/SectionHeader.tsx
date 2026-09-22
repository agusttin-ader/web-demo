import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { DS_CLASS } from "@/lib/design-system";

type SectionHeaderProps = {
  label: string;
  title: string;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  id?: string;
  eyebrowMuted?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  id,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "ds-section-header--center" : "";

  return (
    <Reveal variant="up">
      <header className={`ds-section-header ${alignClass} ${className}`.trim()}>
        <p className={DS_CLASS.eyebrow}>
          <span className={DS_CLASS.eyebrowDot} aria-hidden />
          {label}
        </p>
        <h2 id={id}>{title}</h2>
        {description ? <p className={`ds-section-header__desc ${DS_CLASS.proseMuted}`}>{description}</p> : null}
      </header>
    </Reveal>
  );
}
