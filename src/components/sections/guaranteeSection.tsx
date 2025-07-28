import { useTranslations } from "next-intl";
import family from "../../../public/assets/images/family-1.jpg";

import Image from "next/image";
export default function GuaranteeSection() {
  const t = useTranslations("aboutPage");
  return (
    <div className="flex mt-2 mb-16 lg:gap-8">
      <div>
        <div className="mb-5">
          <h3 className="font-bold text-xl">
            {t("guaranteeTitle")}{" "}
            <span className="text-orange-300">{t("guaranteeHighlighted")}</span>
          </h3>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 lg:w-[730px]">
            {t("guaranteeDescription")}
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row xl:flex-col">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 sm:items-center">
              <div className="bg-[#00AE8A] w-4 h-4 sm:w-5 sm:h-5 rounded-full mt-1 sm:mt-0" />
              <p className="text-sm sm:text-base font-medium">
                {t("benefitEggDonation")}
              </p>
            </div>
            <div className="flex items-start gap-3 sm:items-center">
              <div className="bg-[#A5D761] w-4 h-4 sm:w-5 sm:h-5 rounded-full mt-1 sm:mt-0" />
              <p className="text-sm sm:text-base font-medium">
                {t("benefitEmbryoTransfers")}
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3 sm:items-center">
              <div className="bg-[#FCCB40] w-4 h-4 sm:w-5 sm:h-5 rounded-full mt-1 sm:mt-0" />
              <p className="text-sm sm:text-base font-medium">
                {t("benefitSurrogatePairings")}
              </p>
            </div>
            <div className="flex items-start gap-3 sm:items-center">
              <div className="bg-[#8fd322] w-4 h-4 sm:w-5 sm:h-5 rounded-full mt-1 sm:mt-0" />
              <p className="text-sm sm:text-base font-medium">
                {t("benefitPregnancyCare")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-[600px]">
        <Image
          src={family}
          width={600}
          height={500}
          alt="family"
          className="rounded-lg hidden xl:block"
        />
      </div>
    </div>
  );
}
