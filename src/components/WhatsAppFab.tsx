"use client";

import { useReducedMotion } from "framer-motion";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { whatsappUrl } from "@/lib/constants";
import { useMobileMotion } from "@/hooks/useMobileMotion";

export function WhatsAppFab() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const mobileMotion = useMobileMotion();
  const href = whatsappUrl(t.whatsapp.defaultMessage);

  const enterClass = mobileMotion && !reduceMotion ? " whatsapp-fab--enter" : "";

  return (
    <div className={`whatsapp-fab${enterClass}`}>
      <ExternalLink href={href} aria-label={t.whatsapp.fabAria} showHint={false}>
        <IconWhatsApp aria-hidden />
      </ExternalLink>
    </div>
  );
}
