// import reproductiveSystem2 from "../../../public/assets/images/reproductive-system-2.png";
import { useTranslations } from "next-intl";
export default function FeatureBlocks() {
  const t = useTranslations("aboutPage");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <h3 className="font-semibold text-gray-700 text-lg mt-5">
          {t("feature1Title")}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-5">
          {t("feature1Description")}
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <h3 className="font-semibold text-gray-700 text-lg mt-5">
          {t("feature2Title")}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          {t("feature2Description")}
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <h3 className="font-semibold text-gray-700 text-lg mt-5">
          {t("feature3Title")}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          {t("feature3Description")}
        </p>
      </div>

      <div className="px-5 flex flex-col items-center gap-4 bg-[#bce1f062] rounded-2xl text-center">
        <h3 className="font-semibold text-gray-700 text-lg mt-5">
          {t("feature4Title")}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-5 md:text-lg">
          {t("feature4Description")}
        </p>
      </div>
    </div>
  );
}
