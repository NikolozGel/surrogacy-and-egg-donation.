import { useTranslations } from "next-intl";

export default function HeadingSection() {
  const t = useTranslations("contactPage");
  return (
    <div className="flex flex-col">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-[#A5D761]">
        {t("journeyTitlePart1")}
        <span className="text-gray-800"> {t("journeyTitlePart2")}</span>
      </h2>
      <p className="text-gray-800 text-sm sm:text-base lg:text-lg max-w-xl md:max-w-3xl">
        {t("journeyDescription")}
      </p>
    </div>
  );
}
