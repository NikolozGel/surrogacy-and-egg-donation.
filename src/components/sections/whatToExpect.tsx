import Image from "next/image";

import mother1 from "../../../public/assets/images/mother-1.jpg";
import mother2 from "../../../public/assets/images/mother-2.jpg";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
export default function WhatToExpect() {
  const locale = useLocale();
  const t = useTranslations("aboutPage");
  return (
    <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto py-16">
      <div className="lg:flex lg:items-center lg:justify-between gap-10">
        {/* Left Image Column */}
        <div className="hidden lg:flex flex-col gap-10 relative w-1/2">
          {/* Top Image */}
          <div className="relative w-75 h-60 mx-auto">
            <div className="absolute inset-0 bg-[#d4f3e4] rounded-[50%] blur-3xl -z-10" />
            <Image
              src={mother1}
              alt="Mother with baby"
              fill
              className="object-cover rounded-[30%]"
            />
          </div>

          {/* Bottom Image */}
          <div className="relative w-75 h-60 mx-auto">
            <div className="absolute inset-0 bg-[#f7f3d1] rounded-[50%] blur-3xl -z-10" />
            <Image
              src={mother2}
              alt="Pregnant woman"
              fill
              className="object-cover rounded-[30%]"
            />
          </div>
        </div>

        {/* Right Text Column */}
        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h2 className=" text-gray-700 text-3xl lg:text-4xl font-bold mb-4">
            {t("expectTitle")} {t("expectHighlight")}
          </h2>
          <p className="text-gray-700 lg:text-xl mb-6">{t("expectText")}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-10">
            <Link href={`/${locale}/become-a-parent`}>
              <button className="bg-[#00AE8A] hover:opacity-65 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base shadow  cursor-pointer">
                {t("btnParent")}
              </button>
            </Link>
            <Link href={`/${locale}/become-a-surrogate`}>
              <button className="bg-[#00AE8A] hover:opacity-65 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base shadow  cursor-pointer">
                {t("btnSurrogate")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
