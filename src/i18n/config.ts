export const LOCALES = ["es", "en", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export const LOCALE_COOKIE = "locale";

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  es: "es-AR",
  en: "en",
  pt: "pt-BR",
};

export const LOCALE_LABELS: Record<Locale, { short: string; name: string; flag: string; country: string }> = {
  es: { short: "ES", name: "Español", flag: "🇦🇷", country: "Argentina" },
  en: { short: "EN", name: "English", flag: "🇺🇸", country: "USA" },
  pt: { short: "PT", name: "Português", flag: "🇧🇷", country: "Brasil" },
};

/** ISO country → locale for first visit (cookie always wins after a manual pick). */
export const COUNTRY_LOCALE: Record<string, Locale> = {
  US: "en",
  BR: "pt",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function localeFromCountry(country: string | null | undefined): Locale | null {
  if (!country) return null;
  const code = country.trim().toUpperCase();
  if (code === "XX" || code === "T1") return null;
  return COUNTRY_LOCALE[code] ?? null;
}

export function countryFromHeaders(headers: { get(name: string): string | null }): string | null {
  const raw =
    headers.get("x-vercel-ip-country") ||
    headers.get("cf-ipcountry") ||
    headers.get("cloudfront-viewer-country") ||
    headers.get("x-country-code") ||
    headers.get("x-geo-country");

  if (!raw) return null;
  const code = raw.trim().toUpperCase();
  if (!code || code === "XX" || code === "T1") return null;
  return code;
}

export function negotiateLocale(acceptLanguage: string | null | undefined): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: (tag ?? "").toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    if (tag.startsWith("pt")) return "pt";
    if (tag.startsWith("en")) return "en";
    if (tag.startsWith("es")) return "es";
  }

  return DEFAULT_LOCALE;
}

export function resolveLocale({
  cookie,
  country,
  acceptLanguage,
}: {
  cookie?: string | null;
  country?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  if (isLocale(cookie)) return cookie;

  const fromCountry = localeFromCountry(country);
  if (fromCountry) return fromCountry;

  return negotiateLocale(acceptLanguage);
}

