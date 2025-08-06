import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "surrogatePage",
  });

  const baseUrl = "https://ivfertilitygeorgia.com";
  const url = `${baseUrl}/${params.locale}/become-a-surrogate`;

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
