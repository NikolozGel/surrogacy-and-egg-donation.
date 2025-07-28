import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "./localSwitcher";

export default function DesktopNavigationMenu() {
  const locale = useLocale();
  const t = useTranslations("pages");
  return (
    <ul className="hidden lg:flex gap-4">
      <li className="relative">
        <Link
          href={`/${locale}/`}
          className="block w-full h-full p-2 text-xl text-gray-700 font-medium transition duration-200"
        >
          {t("home")}
        </Link>
      </li>
      <li className="relative">
        <Link
          href={`/${locale}/about`}
          className="block w-full h-full p-2 text-xl text-gray-700 font-medium transition duration-200"
        >
          {t("about")}
        </Link>
      </li>
      <li className="relative">
        <Link
          href={`/${locale}/contact`}
          className="block w-full h-full p-2 text-xl text-gray-700 font-medium transition duration-200"
        >
          {t("contact")}
        </Link>
      </li>
      <li className="relative">
        <Link
          href={`/${locale}/prices`}
          className="block w-full h-full p-2 text-xl text-gray-700 font-medium transition duration-200"
        >
          {t("prices")}
        </Link>
      </li>
      <li className="relative">
        <Link
          href={`/${locale}/faq`}
          className="block w-full h-full p-2 text-xl text-gray-700 font-medium transition duration-200"
        >
          {t("faq")}
        </Link>
      </li>
      <li className="relative z-50">
        <LocalSwitcher />
      </li>
    </ul>
  );
}
