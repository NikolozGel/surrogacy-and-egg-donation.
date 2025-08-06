// app/[locale]/become-a-parent/layout.tsx

import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "parentPage", // აქ სწორად დაარქვი namespace
  });

  const baseUrl = "https://ivfertilitygeorgia.com";
  const url = `${baseUrl}/${params.locale}/become-a-parent`;

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
          url: `${baseUrl}/og/become-a-parent.jpg`,
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
        en: `${baseUrl}/en/become-a-parent`,
        ka: `${baseUrl}/ka/become-a-parent`,
        ru: `${baseUrl}/ru/become-a-parent`,
        zh: `${baseUrl}/zh/become-a-parent`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ⛳ ეს აუცილებელია layout.tsx-ში
export default function ParentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // თუ გინდა, აქ შეგიძლია დაამატო wrapper div, სტილები და სხვ.
}
