import { useTranslations } from "next-intl";

export default function SurrogacyIntroSection() {
  const t = useTranslations("introSection");
  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:block mb-12">
          <h3 className="text-3xl text-gray-700 font-bold text-center mb-5">
            {t("title")} {t("subtitle")}
          </h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className=" text-gray-700 py-5 rounded-lg">
            <h3 className="text-xl font-bold ml-5 mb-4">{t("secTitle")} </h3>
            <p className="px-5">{t("description2")}</p>
          </div>

          <div className=" text-gray-700 py-5 rounded-lg">
            <h3 className="text-xl font-bold ml-5 mb-4">{t("thirdTitle")}</h3>
            <p className="px-5">{t("thirdDescription")}</p>
          </div>

          <div className=" text-gray-700 py-5 rounded-lg">
            <h3 className="text-xl font-bold ml-5 mb-4">{t("fourthTitle")}</h3>
            <p className="px-5">{t("fourthDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
