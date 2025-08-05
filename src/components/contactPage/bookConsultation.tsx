import { useTranslations } from "next-intl";

export default function BookConsultation() {
  const t = useTranslations("contactPage");
  return (
    <div className="w-full max-w-3xl mt-35 md:mt-30 mx-auto text-center">
      <h2 className="text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold mb-3">
        {t("consultationTitlePart1")} {t("consultationTitlePart2")}{" "}
        {t("consultationTitlePart3")}
      </h2>
      <p className="text-gray-800 text-sm sm:text-base">
        {t("consultationDescription")}
      </p>
    </div>
  );
}
