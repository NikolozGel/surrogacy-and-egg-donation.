import ClientSlider from "@/components/clientSlider";
import HeroImage from "@/components/sections/heroImage";
import IntroSection from "@/components/sections/introSection";
import WhatToExpect from "@/components/sections/whatToExpect";
import FooterCTA from "@/components/sections/footerCTA";
import FeatureBlocks from "@/components/sections/featureBlocks";
import GuaranteeSection from "@/components/sections/guaranteeSection";
import { getTranslations } from "next-intl/server";

// ✅ SEO metadata გენერაცია
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "aboutPage",
  });

  const baseUrl = "https://ivfertilitygeorgia.com";
  const url = `${baseUrl}/${params.locale}/about`;

  return {
    title: t("seoTitle"),
    description: t("seoDescription"),
    openGraph: {
      title: t("seoTitle"),
      description: t("seoDescription"),
      url,
      siteName: "IVFertilityGeorgia",
      images: [
        {
          url: `${baseUrl}/og/about.jpg`,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      locale:
        params.locale === "ka"
          ? "ka_GE"
          : params.locale === "ru"
          ? "ru_RU"
          : params.locale === "zh"
          ? "zh_CN"
          : "en_US",
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/about`,
        ka: `${baseUrl}/ka/about`,
        ru: `${baseUrl}/ru/about`,
        zh: `${baseUrl}/zh/about`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ კომპონენტური გვერდი
export default function Page() {
  return (
    <div className="bg-gray-50">
      {/* Responsive Hero Image */}
      <HeroImage />

      {/* Content Section */}
      <div className="mt-6 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <IntroSection />

        {/* What to Expect Section */}
        <WhatToExpect />
        {/* Footer CTA */}
        <FooterCTA />
        {/* Four Feature Blocks */}
        <FeatureBlocks />

        {/* Guarantee Section */}
        <GuaranteeSection />

        <ClientSlider />
        {/* Guarantee Items */}
      </div>
    </div>
  );
}
