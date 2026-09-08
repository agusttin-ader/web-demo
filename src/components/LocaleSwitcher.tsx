"use client";

import { type CSSProperties } from "react";
import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";
import { interpolate } from "@/i18n/format";
import { useI18n } from "@/i18n/I18nProvider";

export function LocaleSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, t, setLocale, isTranslating } = useI18n();
  const activeIndex = LOCALES.indexOf(locale);

  const handleSelect = (code: Locale) => {
    if (code === locale || isTranslating) return;
    setLocale(code);
  };

  return (
    <div
      className={`locale-switch ${compact ? "locale-switch--compact" : ""}`}
      role="group"
      aria-label={t.locale.label}
      data-active={locale}
      style={{ "--locale-index": activeIndex } as CSSProperties}
    >
      <span className="locale-switch-indicator" aria-hidden />

      {LOCALES.map((code) => {
        const active = code === locale;
        const meta = LOCALE_LABELS[code];

        return (
          <button
            key={code}
            type="button"
            className={`locale-switch-btn focus-ring ${active ? "is-active" : ""}`}
            aria-pressed={active}
            aria-label={interpolate(t.locale.switchTo, { name: meta.name })}
            title={meta.name}
            disabled={isTranslating}
            onClick={() => handleSelect(code)}
          >
            <span className="locale-switch-flag" aria-hidden>{meta.flag}</span>
            {!compact ? <span className="locale-switch-code">{meta.short}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
