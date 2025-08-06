import Slider from "@/components/Slider";
import SurrogacyIntroSection from "@/components/surrogacyIntroSection";
import SurrogacyAndEggDonationOptions from "@/components/surrogacyAndEggDonationOptions";
import OurMissionSection from "@/components/ourMissionSection";
import ImageSlider from "@/components/ImageSlider/imageSlider";
import AccordionFaq from "@/components/accordionFaq";
import ContactCallToAction from "@/components/contactCallToAction";
import { getTranslations } from "next-intl/server";

// ✅ 1. ლოკალიზებული Metadata-ის გენერაცია
export async function generateMetadata(
  props: {
    params: Promise<{ locale: string }>;
  }
) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: "homePage",
  });

  const baseUrl = "https://ivfertilitygeorgia.com";
  const url = `${baseUrl}/${params.locale}`;

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
          url: `${baseUrl}/og/home.jpg`,
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
        en: `${baseUrl}/en`,
        ka: `${baseUrl}/ka`,
        ru: `${baseUrl}/ru`,
        zh: `${baseUrl}/zh`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ 2. გვერდის კომპონენტი უცვლელი რჩება
const images = [
  {
    url: "/assets/doctors/laliko.jpg",
    title: "title-2",
    subtitle: "subtitle-2",
    description: "description-2",
  },
  {
    url: "/assets/clinic/zizi.JPG",
    title: "title",
    subtitle: "subtitle",
    description: "description",
  },
];

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      <Slider />
      <div className="relative">
        <SurrogacyAndEggDonationOptions />
      </div>
      <div className="lg:px-8">
        <SurrogacyIntroSection />
        <OurMissionSection />
      </div>
      <ImageSlider images={images} />
      <div className="px-5">
        <AccordionFaq />
      </div>
      <ContactCallToAction />
    </main>
  );
}
