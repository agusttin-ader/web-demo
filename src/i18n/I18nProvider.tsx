"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, LOCALE_HTML_LANG, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

const EXIT_MS = 280;
const ENTER_MS = 460;

type TransitionPhase = "idle" | "exiting" | "entering";

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
  isTranslating: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function persistLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
  document.documentElement.lang = LOCALE_HTML_LANG[locale];
}

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Dictionary;
  children: ReactNode;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const pendingLocaleRef = useRef<Locale | null>(null);
  const exitTimerRef = useRef<number | null>(null);
  const enterTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!pendingLocaleRef.current || pendingLocaleRef.current !== locale) return;

    pendingLocaleRef.current = null;
    setPhase("entering");

    if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
    enterTimerRef.current = window.setTimeout(() => setPhase("idle"), ENTER_MS);
  }, [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      if (next === locale || phase !== "idle") return;

      pendingLocaleRef.current = next;
      persistLocale(next);
      setPhase("exiting");

      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
      exitTimerRef.current = window.setTimeout(() => {
        startTransition(() => {
          router.refresh();
        });
      }, EXIT_MS);
    },
    [locale, phase, router]
  );

  const isTranslating = phase !== "idle" || isPending;

  const value = useMemo(
    () => ({ locale, t: messages, setLocale, isPending, isTranslating }),
    [locale, messages, setLocale, isPending, isTranslating]
  );

  const pageClass = [
    "locale-page",
    phase !== "idle" ? `locale-page--${phase}` : "",
    isPending ? "locale-page--loading" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <I18nContext.Provider value={value}>
      <div className={pageClass} aria-busy={isTranslating}>
        <div key={locale} className="locale-page__content">
          {children}
        </div>
      </div>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
