import { useTranslations } from "next-intl";

export default function FooterCTA() {
  const t = useTranslations("aboutPage");
  return (
    <div className="flex flex-col items-center text-center px-4 mb-12 max-w-2xl mx-auto mt-20">
      <h3 className="font-bold text-2xl text-gray-700 sm:text-3xl mb-3">
        {t("wayTitle")} {t("wayHighlight")}
      </h3>
      <p className="text-gray-700 text-sm sm:text-base md:text-lg">
        {t("wayText")}
      </p>
    </div>
  );
}
