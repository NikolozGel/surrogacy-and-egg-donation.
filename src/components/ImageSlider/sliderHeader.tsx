import { useTranslations } from "next-intl";

export default function SliderHeader() {
  const t = useTranslations("aboutPage");
  return (
    <section className="mb-8 text-center">
      <h2 className="text-2xl text-gray-700 sm:text-3xl font-bold">
        {t("heading_line1")}
        <br />
        {t("heading_highlight")}
      </h2>
      <p className="mt-4 text-gray-600 text-md  md:text-lg max-w-2xl mx-auto">
        {t("paragraph")}
      </p>
    </section>
  );
}
