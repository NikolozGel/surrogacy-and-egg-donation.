import { useTranslations } from "next-intl";

export default function FaqIntro() {
  const t = useTranslations("services");
  return (
    <div className="px-6 sm:px-10 lg:px-32 mt-10">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-gray-800">
        {t("title1")} <span className="text-[#A5D761]">{t("title2")}</span>
      </h2>
      <p className="text-gray-600 mt-2 text-sm sm:text-base lg:text-lg max-w-3xl">
        {t("paragraph")}
      </p>
    </div>
  );
}
