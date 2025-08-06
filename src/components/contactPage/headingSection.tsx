import { useTranslations } from "next-intl";

export default function HeadingSection() {
  const t = useTranslations("contactPage");
  return (
    <div className="flex flex-col mx-6 sm:mx-10 lg:mx-20 xl:mx-30">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-gray-700">
        {t("journeyTitlePart1")} {t("journeyTitlePart2")}
      </h2>
      <p className="text-gray-800 text-sm sm:text-base lg:text-lg max-w-xl md:max-w-3xl">
        {t("journeyDescription")}
      </p>
    </div>
  );
}
