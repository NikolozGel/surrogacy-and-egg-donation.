import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../[locale]/globals.css";
import { Titillium_Web } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import ScrollToTopButton from "@/components/scrollUpButton";
import type { Metadata } from "next";
// import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "IVFertilityGeorgia",
    template: "%s | IVFertilityGeorgia",
  },
  description:
    "Helping you become a parent with compassion, care, and science.",
  openGraph: {
    title: "IVFertilityGeorgia",
    description:
      "Helping you become a parent with compassion, care, and science.",
    url: "https://ivfertilitygeorgia.com",
    siteName: "IVFertilityGeorgia",
    images: [
      {
        url: "https://ivfertilitygeorgia.com/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Happy family after surrogacy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ivfertilitygeorgia.com" },
};

const dmSans = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal"],
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string }; // ✅ აღარ არის Promise
}) {
  const { locale } = await params; // ✅ აღარ ველოდებით await-ს
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale}>
      <body className={dmSans.className}>
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
