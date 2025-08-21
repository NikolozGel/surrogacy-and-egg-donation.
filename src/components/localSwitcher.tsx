import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Image from "next/image";
// import georgianLogo from "../../public/assets/language-logos/georgian-logo.png";
import englishLogo from "../../public/assets/language-logos/en.svg";
import russianLogo from "../../public/assets/language-logos/ru.svg";
import chineseLogo from "../../public/assets/language-logos/zh-CN.svg";

const localeLogos = [
  { locale: "en", logo: englishLogo, name: "EN" },
  // { locale: "ka", logo: georgianLogo, name: "KA" },
  { locale: "ru", logo: russianLogo, name: "RU" },
  { locale: "zh", logo: chineseLogo, name: "CN" },
];

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const localActive = useLocale();

  const activeLocale =
    localeLogos.find((item) => item.locale === localActive) || localeLogos[0];

  const handleSelect = (locale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(
        `/${locale}/${window.location.pathname.split("/").slice(2).join("/")}`
      );
    });
  };

  // ფილტრავს ლოგოებს ისე, რომ არ გამოჩნდეს აქტიური ენა
  const availableLocales = localeLogos.filter(
    (item) => item.locale !== localActive
  );

  return (
    <div className="w-48 relative mb-3 ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex gap-2 items-center w-full border-none rounded px-4 py-2 cursor-pointer"
        disabled={isPending}
      >
        <div className="flex gap-2">
          <Image
            src={activeLocale.logo}
            alt={activeLocale.name}
            width={20}
            height={20}
          />
          <span>{activeLocale.name}</span>
        </div>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute px-5 py-2 border-none rounded shadow-lg bg-white">
          {availableLocales.map((item) => (
            <div
              key={item.locale}
              onClick={() => handleSelect(item.locale)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <Image src={item.logo} alt={item.name} width={20} height={20} />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
