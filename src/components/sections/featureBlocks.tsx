// import reproductiveSystem2 from "../../../public/assets/images/reproductive-system-2.png";
import { useTranslations } from "next-intl";
import reproductiveSystem from "../../../public/assets/images/reproductive-system.png";
import reproductiveSystem2 from "../../../public/assets/images/reproductive-surgery-2.png";
import reproductiveSystem3 from "../../../public/assets/images/reproductive-surgery-3.png";
import reproductiveSystem4 from "../../../public/assets/images/reproductive-surgery-4.png";
import Image from "next/image";
export default function FeatureBlocks() {
  const t = useTranslations("aboutPage");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <Image
          src={reproductiveSystem}
          width={50}
          height={50}
          alt="Holistic Fertility Care"
          className="rounded-full mt-7"
        />
        <h3 className="font-semibold text-lg">{t("feature1Title")}</h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-5">
          {t("feature1Description")}
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <Image
          src={reproductiveSystem2}
          width={50}
          height={50}
          alt="Supportive Space"
          className="rounded-full mt-7"
        />
        <h3 className="font-semibold text-lg">{t("feature2Title")}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          {t("feature2Description")}
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <Image
          src={reproductiveSystem3}
          width={50}
          height={50}
          alt="Personalized Treatment Plans"
          className="rounded-full mt-7"
        />
        <h3 className="font-semibold text-lg">{t("feature3Title")}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          {t("feature3Description")}
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <Image
          src={reproductiveSystem4}
          width={50}
          height={50}
          alt="State-of-the-Art Technology"
          className="rounded-full mt-7"
        />
        <h3 className="font-semibold text-lg">{t("feature4Title")}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          {t("feature4Description")}
        </p>
      </div>
    </div>
  );
}
