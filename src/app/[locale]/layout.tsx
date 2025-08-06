import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../[locale]/globals.css";
import { Raleway } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import ScrollToTopButton from "@/components/scrollUpButton";
import { getTranslations } from "next-intl/server";

const dmSans = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

// ✅ დინამიური SEO metadata ყველა ენაზე
export async function generateMetadata(
  input: Promise<{ params: { locale: string } }>
) {
  const { params } = await input;
  console.log("es aris params locale", params.locale);

  const t = await getTranslations({
    locale: params.locale,
    namespace: "homePage",
  });

  const baseUrl = "https://ivfertilitygeorgia.com";
  const url = `${baseUrl}/${params.locale}`;

  return {
    title: {
      default: t("seoTitle"),
      template: "%s | IVFertilityGeorgia",
    },
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${dmSans.className}`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Link
            href="https://wa.me/+995511106081"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="fixed bottom-5 p-2 right-20 z-50 rounded-full bg-[#00AE8A] hover:bg-green-400 transition-all duration-300">
              <FaWhatsapp className="h-13 w-13 lg:w-18 lg:h-18" color="white" />
            </div>
          </Link>
          <ScrollToTopButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
