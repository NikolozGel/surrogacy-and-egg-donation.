import Image from "next/image";
import reproductiveSurgery from "../../public/assets/images/reproductive-surgery.png";
import fertilityPreservation from "../../public/assets/images/fertility-preservation.png";
import surrogacyServices from "../../public/assets/images/surrogacy-services.png";

import { useTranslations } from "next-intl";

export default function SurrogacyIntroSection() {
  const t = useTranslations("introSection");
  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:block mb-12">
          <h3 className="text-3xl font-bold text-center mb-5">
            {t("title")} <span className="text-amber-400">{t("subtitle")}</span>
          </h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="md:hidden bg-white px-6 py-5 rounded-lg shadow-md hover:bg-[#1db963] active:bg-[#1db963] transition duration-300 cursor-pointer hover:text-white active:text-white">
            <h3 className="text-2xl font-bold text-center mb-4">
              {t("title")}{" "}
              <span className="text-amber-400">{t("subtitle")}</span>
            </h3>
            <p className="text-center">{t("description")}</p>
          </div>

          <div className="bg-white py-5 rounded-lg hover:bg-[#1db963] active:bg-[#1db963] transition duration-300 cursor-pointer shadow-md hover:text-white active:text-white">
            <Image
              className="rounded-full mb-4 ml-5"
              src={reproductiveSurgery}
              width={70}
              height={70}
              alt="reproductive image"
            />
            <h3 className="text-xl font-bold ml-5 mb-4">{t("secTitle")} </h3>
            <p className="px-5">{t("description2")}</p>
          </div>

          <div className="bg-white py-5 rounded-lg hover:bg-[#1db963] active:bg-[#1db963] transition duration-300 cursor-pointer shadow-md hover:text-white active:text-white">
            <Image
              className="rounded-full mb-4 ml-5"
              src={fertilityPreservation}
              width={70}
              height={70}
              alt="reproductive image"
            />
            <h3 className="text-xl font-bold ml-5 mb-4">{t("thirdTitle")}</h3>
            <p className="px-5">{t("thirdDescription")}</p>
          </div>

          <div className="bg-white py-5 rounded-lg hover:bg-[#1db963] active:bg-[#1db963] transition duration-300 cursor-pointer shadow-md hover:text-white active:text-white">
            <Image
              className="rounded-full mb-4 ml-5"
              src={surrogacyServices}
              width={70}
              height={70}
              alt="reproductive image"
            />
            <h3 className="text-xl font-bold ml-5 mb-4">{t("fourthTitle")}</h3>
            <p className="px-5">{t("fourthDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
