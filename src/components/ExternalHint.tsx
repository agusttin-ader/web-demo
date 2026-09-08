"use client";

import { useI18n } from "@/i18n/I18nProvider";

/** Announces new-tab links to screen readers without visual clutter. */
export function ExternalHint() {
  const { t } = useI18n();
  return <span className="sr-only"> {t.common.externalNewTab}</span>;
}
