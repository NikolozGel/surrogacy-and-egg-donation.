import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "surrogatePage",
  });

  const baseUrl = "https://ivfertilitygeorgia.com";
  const url = `${baseUrl}/${locale}/become-a-surrogate`;

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
          url: `${baseUrl}/og/become-a-surrogate.jpg`,
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
      locale:
        locale === "ka"
          ? "ka_GE"
          : locale === "ru"
          ? "ru_RU"
          : locale === "zh"
          ? "zh_CN"
          : "en_US",
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${baseUrl}/en/become-a-surrogate`,
        ka: `${baseUrl}/ka/become-a-surrogate`,
        ru: `${baseUrl}/ru/become-a-surrogate`,
        zh: `${baseUrl}/zh/become-a-surrogate`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function SurrogateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
