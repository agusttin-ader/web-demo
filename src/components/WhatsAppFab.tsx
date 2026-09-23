"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { whatsappUrl } from "@/lib/constants";
export function WhatsAppFab() {
  const { t } = useI18n();
  const reduceMotion = usePrefersReducedMotion();
  const href = whatsappUrl(t.whatsapp.defaultMessage);

  const enterClass = !reduceMotion ? " whatsapp-fab--enter" : "";

  return (
    <div className={`whatsapp-fab${enterClass}`}>
      <ExternalLink href={href} aria-label={t.whatsapp.fabAria} showHint={false}>
        <IconWhatsApp aria-hidden />
      </ExternalLink>
    </div>
  );
}
