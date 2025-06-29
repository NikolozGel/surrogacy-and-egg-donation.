import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../[locale]/globals.css";

import { Raleway } from "next/font/google";
import { Metadata } from "next";
// import TopHeader from "@/components/topHeader";

const dmSans = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title:
    "surrogacy and egg donation georgia, სუროგაცია და დონაცია საქართველოში",
  description: "სუროგაცია და დონაცია",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${dmSans.className}`}>
        <NextIntlClientProvider>
          {/* <TopHeader /> */}
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
