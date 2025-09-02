import { useTranslations } from "next-intl";

export default function IntroSection() {
  const t = useTranslations("aboutPage");
  return (
    <div className="mb-20 text-center">
      <h2 className="font-bold mb-4 text-3xl lg:text-4xl text-gray-700">
        {t("title-3")} {t("highlight")}
      </h2>

      <p className="text-gray-700 lg:text-xl mb-4">{t("paragraph1")}</p>

      <p className="text-gray-700 lg:text-xl">{t("paragraph2")}</p>
    </div>
  );
}
