import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "faqPage",
  });

  const baseUrl = "https://ivfertilitygeorgia.com";
  const url = `${baseUrl}/${params.locale}/faq`;

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
          url: `${baseUrl}/og/faq.jpg`,
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
        en: `${baseUrl}/en/faq`,
        ka: `${baseUrl}/ka/faq`,
        ru: `${baseUrl}/ru/faq`,
        zh: `${baseUrl}/zh/faq`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
