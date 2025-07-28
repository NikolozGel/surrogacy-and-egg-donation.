import { useTranslations } from "next-intl";

export default function BookConsultation() {
  const t = useTranslations("contactPage");
  return (
    <div className="w-full max-w-3xl mt-35 md:mt-30 mx-auto text-center">
      <h2 className="text-[#00AE8A] text-xl sm:text-2xl md:text-3xl font-bold mb-3">
        {t("consultationTitlePart1")}{" "}
        <span className="text-[#323232]"> {t("consultationTitlePart2")}</span>
        <span className="text-[#FCCB40]"> {t("consultationTitlePart3")}</span>
      </h2>
      <p className="text-gray-800 text-sm sm:text-base">
        {t("consultationDescription")}
      </p>
    </div>
  );
}
