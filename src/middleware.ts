import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// ჩვენი კასტომ ლოგიკა root გადამისამართებისთვის
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // თუ მომხმარებელი შედის "/" root-ზე — გადავამისამართოთ "/en"-ზე
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  // ყველა სხვა შემთხვევისთვის გავუშვათ next-intl middleware
  return createMiddleware(routing)(request);
}

export const config = {
  locales: ["en", "ka", "ru", "zh"],
  defaultLocale: "en",
  matcher: ["/", "/(ka|en|ru|zh)/:path*"], // მნიშვნელოვანია რომ "/" იყოს matcher-ში
};
