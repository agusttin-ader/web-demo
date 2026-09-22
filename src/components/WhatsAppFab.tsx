"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { whatsappUrl } from "@/lib/constants";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

export function WhatsAppFab() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const href = whatsappUrl(t.whatsapp.defaultMessage);

  return (
    <motion.div
      className="whatsapp-fab"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
      animate={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: MOTION_DURATION, ease: MOTION_EASE, delay: 0.35 }}
    >
      <ExternalLink href={href} aria-label={t.whatsapp.fabAria} showHint={false}>
        <IconWhatsApp aria-hidden />
      </ExternalLink>
    </motion.div>
  );
}
