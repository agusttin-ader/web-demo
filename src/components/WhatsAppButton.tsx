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
  magnetic = false,
  showIcon = true,
}: WhatsAppButtonProps) {
  const link = (
    <ExternalLink href={href} showHint={false} className={className}>
      {showIcon ? <IconWhatsApp aria-hidden /> : null}
      {children}
    </ExternalLink>
  );

  if (!magnetic) return link;

  return <Magnetic>{link}</Magnetic>;
}
