"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { whatsappUrl } from "@/lib/constants";

export function WhatsAppFab() {
  const { t } = useI18n();
  const href = whatsappUrl(t.whatsapp.defaultMessage);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.remove("whatsapp-fab--enter");
    }
  }, []);

  return (
    <div ref={ref} className="whatsapp-fab whatsapp-fab--enter">
      <ExternalLink href={href} aria-label={t.whatsapp.fabAria} showHint={false}>
        <IconWhatsApp aria-hidden />
      </ExternalLink>
    </div>
  );
}
