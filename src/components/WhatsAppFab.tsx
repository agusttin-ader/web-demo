"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink } from "@/components/ExternalLink";
import { IconWhatsApp } from "@/components/icons";
import { useI18n } from "@/i18n/I18nProvider";
import { whatsappUrl } from "@/lib/constants";
import { useMobileMotion } from "@/hooks/useMobileMotion";
import { MOBILE_MOTION_DURATION, MOBILE_MOTION_EASE } from "@/lib/motion";

export function WhatsAppFab() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();
  const mobileMotion = useMobileMotion();
  const href = whatsappUrl(t.whatsapp.defaultMessage);

  const motionOn = mobileMotion && !reduceMotion;

  return (
    <motion.div
      className="whatsapp-fab"
      initial={motionOn ? { opacity: 0, scale: 0.9, y: 16 } : false}
      animate={motionOn ? { opacity: 1, scale: 1, y: 0 } : undefined}
      transition={{ duration: MOBILE_MOTION_DURATION, ease: MOBILE_MOTION_EASE, delay: 0.4 }}
    >
      <ExternalLink href={href} aria-label={t.whatsapp.fabAria} showHint={false}>
        <IconWhatsApp aria-hidden />
      </ExternalLink>
    </motion.div>
  );
}
