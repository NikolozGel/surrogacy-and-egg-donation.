import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  locales: ["en", "ka", "ru", "zh"],
  defaultLocale: "en",
  matcher: ["/", "/(ka|en|ru|zh)/:path*"],
};
