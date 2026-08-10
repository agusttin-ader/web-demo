import type { ReactNode } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { Magnetic } from "@/components/Magnetic";
import { WHATSAPP_URL } from "@/lib/constants";

type WhatsAppButtonProps = {
  children?: ReactNode;
  href?: string;
  className?: string;
  magnetic?: boolean;
  strength?: number;
  variant?: "primary" | "ghost";
  showIcon?: boolean;
};

export function WhatsAppButton({
  children = "Escribirme por WhatsApp",
  href = WHATSAPP_URL,
  className = "",
  magnetic = true,
  strength = 0.2,
  variant = "primary",
  showIcon = true,
}: WhatsAppButtonProps) {
  const btnClass = variant === "primary" ? "btn-primary" : "btn-ghost";
  const link = (
    <ExternalLink href={href} className={`${btnClass} focus-ring ${className}`.trim()}>
      {showIcon ? (
        <IconWhatsApp
          className={`h-4 w-4 ${variant === "ghost" ? "text-[#25D366]" : ""}`.trim()}
          aria-hidden
        />
      ) : null}
      {children}
    </ExternalLink>
  );

  if (!magnetic) return link;

  return (
    <Magnetic className="w-full sm:w-auto" strength={strength}>
      {link}
    </Magnetic>
  );
}
