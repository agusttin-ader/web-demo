"use client";

import { LOCALES, LOCALE_LABELS, type Locale } from "@/i18n/config";
import { interpolate } from "@/i18n/format";
import { useI18n } from "@/i18n/I18nProvider";

export function LocaleSwitcher({
  compact = false,
  header = false,
}: {
  compact?: boolean;
  header?: boolean;
}) {
  const { locale, t, setLocale, isTranslating } = useI18n();

  const handleSelect = (code: Locale) => {
    if (code === locale || isTranslating) return;
    setLocale(code);
  };

  return (
    <div
      role="group"
      aria-label={t.locale.label}
      className={`ds-locale-switch ${compact ? "ds-locale-switch--compact" : ""} ${header ? "ds-locale-switch--header" : ""}`.trim()}
    >
      {LOCALES.map((code) => {
        const active = code === locale;
        const meta = LOCALE_LABELS[code];

        return (
          <button
            key={code}
            type="button"
            className="ds-locale-switch__btn"
            aria-pressed={active}
            aria-label={interpolate(t.locale.switchTo, { name: meta.name })}
            title={meta.name}
            disabled={isTranslating}
            onClick={() => handleSelect(code)}
          >
            <span className="ds-locale-switch__flag" aria-hidden>{meta.flag}</span>
            {!compact ? <span className="ds-locale-switch__code">{meta.short}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
