import { useTranslations } from "next-intl";

export default function IntroSection() {
  const t = useTranslations("aboutPage");
  return (
    <div className="mb-20 text-center">
      <h2 className="font-bold text-xl text-gray-700 sm:text-2xl lg:text-3xl mb-4">
        {t("title-3")} {t("highlight")}
      </h2>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4">
        {t("paragraph1")}
      </p>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg">
        {t("paragraph2")}
      </p>
    </div>
  );
}
