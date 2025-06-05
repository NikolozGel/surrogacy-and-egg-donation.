import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LocalSwitcher from "./localSwitcher";

export default function DavigationMenu() {
  const locale = useLocale();
  const t = useTranslations("pages");
  return (
    <ul className="pl-6 block lg:hidden">
      <li className="relative">
        <Link
          href={`/${locale}/`}
          className="block w-full h-full p-2 text-xl text-[#222222] font-medium transition duration-200"
        >
          {t("home")}
        </Link>
      </li>
      <li className="relative">
        <Link
          href={`/${locale}/about`}
          className="block w-full h-full p-2 text-xl text-[#222222] font-medium transition duration-200"
        >
          {t("about")}
        </Link>
      </li>
      <li className="relative">
        <Link
          href={`/${locale}/contact`}
          className="block w-full h-full p-2 text-xl text-[#222222] font-medium transition duration-200"
        >
          {t("contact")}
        </Link>
      </li>
      <li className="relative">
        <Link
          href={`/${locale}/prices`}
          className="block w-full h-full p-2 text-xl text-[#222222] font-medium transition duration-200"
        >
          {t("prices")}
        </Link>
      </li>
      <li className="relative">
        <Link
          href={`/${locale}/services`}
          className="block w-full h-full p-2 text-xl text-[#222222] font-medium transition duration-200"
        >
          {t("services")}
        </Link>
      </li>
      <li className="relative z-50">
        <LocalSwitcher />
      </li>
    </ul>
  );
}
