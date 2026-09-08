import { cache } from "react";
import { cookies, headers } from "next/headers";
import { LOCALE_COOKIE, countryFromHeaders, resolveLocale, type Locale } from "@/i18n/config";
import es from "@/i18n/messages/es.json";
import en from "@/i18n/messages/en.json";
import pt from "@/i18n/messages/pt.json";

export type Dictionary = typeof es;
export type PortfolioCopy = Dictionary["portfolio"];
export type ProjectCopy = Dictionary["projects"][keyof Dictionary["projects"]];

const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
  pt,
};

export const getLocale = cache(async (): Promise<Locale> => {
  const cookieStore = await cookies();
  const headerStore = await headers();

  return resolveLocale({
    cookie: cookieStore.get(LOCALE_COOKIE)?.value,
    country: countryFromHeaders(headerStore),
    acceptLanguage: headerStore.get("accept-language"),
  });
});

export const getDictionary = cache(async (locale?: Locale): Promise<Dictionary> => {
  const resolved = locale ?? (await getLocale());
  return dictionaries[resolved];
});

export function getProjectCopy(t: Dictionary, id: string): ProjectCopy {
  return t.projects[id as keyof Dictionary["projects"]];
}
