import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "../[locale]/globals.css";
import { Raleway } from "next/font/google";
import { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import ScrollToTopButton from "@/components/scrollUpButton";

const dmSans = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Surrogacy and Egg Donation in Georgia | IVFertility",
    template: "%s | IVFertility",
  },
  description:
    "Explore trusted surrogacy and egg donation programs in Georgia. IVFertility offers ethical, legally secure, and fully supported paths to parenthood for international intended parents. სუროგაცია საქართველოში უცხოელი მშობლებისთვის — სრული მხარდაჭერა, სამართლებრივი გარანტია და გამოცდილება.",
  openGraph: {
    title: "Surrogacy and Egg Donation in Georgia | IVFertility",
    description:
      "Ethical and guaranteed surrogacy programs in Georgia. Full support and legal safety for international parents.",
    url: "https://yourdomain.com",
    siteName: "IVFertility",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Surrogacy in Georgia - IVFertility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Surrogacy and Egg Donation in Georgia | IVFertility",
    description:
      "International surrogacy programs in Georgia with full legal and medical support. Begin your journey with IVFertility.",
    images: ["https://yourdomain.com/og-image.jpg"],
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
