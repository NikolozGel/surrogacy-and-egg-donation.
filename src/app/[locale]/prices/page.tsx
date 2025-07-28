import { useTranslations } from "next-intl";

export default function PricingPage() {
  const t = useTranslations("prices");

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-24 xl:px-32 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-800 leading-tight">
          {t("pricingHeadline")}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t("pricingDescription")}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Basic Package */}
        <div className="rounded-2xl shadow-md hover:shadow-lg transition-all bg-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[#00AE8A]">
              {t("basicPackageTitle")}
            </h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {t("basicPackagePrice")}
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base">
              <li>{t("basicFeature1")}</li>
              <li>{t("basicFeature2")}</li>
              <li>{t("basicFeature3")}</li>
              <li>{t("basicFeature4")}</li>
              <li>{t("basicFeature5")}</li>
            </ul>
          </div>
        </div>

        {/* Standard Package */}
        <div className="rounded-2xl shadow-md hover:shadow-lg transition-all bg-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[#00AE8A]">
              {t("standardPackageTitle")}
            </h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {t("standardPackagePrice")}
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base">
              <li>{t("standardFeature1")}</li>
              <li>{t("standardFeature2")}</li>
              <li>{t("standardFeature3")}</li>
              <li>{t("standardFeature4")}</li>
              <li>{t("standardFeature5")}</li>
            </ul>
          </div>
        </div>

        {/* VIP Package */}
        <div className="rounded-2xl shadow-md hover:shadow-lg transition-all bg-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-[#00AE8A]">
              {t("vipPackageTitle")}
            </h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {t("vipPackagePrice")}
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-base">
              <li>{t("vipFeature1")}</li>
              <li>{t("vipFeature2")}</li>
              <li>{t("vipFeature3")}</li>
              <li>{t("vipFeature4")}</li>
              <li>{t("vipFeature5")}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="mt-24 bg-white p-10 rounded-3xl shadow-lg max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {t("includedSectionTitle")}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          {t("includedParagraph1")}
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          {t("includedParagraph2")}
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          {t("includedParagraph3")}
        </p>

        {/* Trust Section */}
        <div className="text-center">
          <span className="inline-block text-[#00AE8A] text-lg lg:text-2xl font-medium mb-2">
            {t("trustTagline")}
          </span>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("trustHeadline")}
          </h3>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            {t("trustParagraph")}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {t("ctaHeadline")}
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          {t("ctaParagraph")}
        </p>
        <button className="bg-[#00AE8A] hover:bg-[#009978] text-white px-8 py-3 rounded-lg text-lg font-medium transition">
          {t("ctaButtonLabel")}
        </button>
      </div>
    </section>
  );
}
