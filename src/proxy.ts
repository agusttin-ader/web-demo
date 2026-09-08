import { NextRequest, NextResponse } from "next/server";
import { LOCALE_COOKIE, countryFromHeaders, resolveLocale } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const hasLocaleCookie = request.cookies.has(LOCALE_COOKIE);
  const locale = resolveLocale({
    cookie: request.cookies.get(LOCALE_COOKIE)?.value,
    country: countryFromHeaders(request.headers),
    acceptLanguage: request.headers.get("accept-language"),
  });

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (!hasLocaleCookie) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  // Cabeceras de seguridad
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.append("Vary", "Cookie");
  response.headers.append("Vary", "Accept-Language");
  response.headers.append("Vary", "x-vercel-ip-country");
  // CSP en modo report-only: no bloquea; permite detectar violaciones (incluye 'unsafe-inline' por el script del tema en head)
  response.headers.set(
    "Content-Security-Policy-Report-Only",
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self'"
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
