import { useTranslations } from "next-intl";

export default function OurMissionSection() {
  const t = useTranslations("ourMission");

  return (
    <section className="my-16 px-6 lg:px-24 xl:px-32">
      <h1 className="text-lg md:text-2xl leading-relaxed lg:text-3xl font-bold text-gray-700 mb-6 text-center lg:text-left">
        {t("title-2")}
      </h1>
      <p className="text-gray-600 lg:text-xl leading-relaxed mb-10 text-justify">
        {t("welcomeIVFertilityGeorgia")}
      </p>
    </section>
  );
}
