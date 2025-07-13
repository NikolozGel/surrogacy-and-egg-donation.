import { useTranslations } from "next-intl";

export default function SliderHeader() {
  const t = useTranslations("aboutPage");
  return (
    <section className="mb-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        {t("heading_line1")}
        <br />
        <span className="text-[#FCCB40]"> {t("heading_highlight")}</span>
      </h2>
      <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
        {t("paragraph")}
      </p>
    </section>
  );
}
