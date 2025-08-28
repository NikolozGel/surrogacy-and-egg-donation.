import { useTranslations } from "next-intl";
import { ImageType } from "./imageSlider";

export default function SliderText({ image }: { image?: ImageType }) {
  const t = useTranslations("aboutPage");

  if (!image) return null;

  return (
    <div className="w-full md:w-1/2 lg:w-2/3 bg-[#323232] text-white p-6 rounded-2xl flex flex-col break-words">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
        <h3 className="font-semibold text-xl sm:text-3xl md:text-5xl break-words">
          {t(image.title)}
        </h3>
        <p className="text-[#A6D761] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
          {t("successStory")}
        </p>
      </div>
      <h4 className="mt-2 text-[#A6D761] text-sm font-bold sm:text-base lg:text-2xl break-words">
        {t(image.subtitle)}
      </h4>
      <p className="mt-3 text-gray-300 text-sm sm:text-base lg:text-xl break-words">
        {t(image.description)}
      </p>
    </div>
  );
}
