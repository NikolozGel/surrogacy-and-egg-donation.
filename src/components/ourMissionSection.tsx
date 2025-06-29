import Image from "next/image";
import DoneImage from "../../public/assets/images/check-button.png";
import { useTranslations } from "next-intl";
import surrogacy from "../../public/assets/pregnant-photos/pregnant.jpg";

export default function OurMissionSection() {
  const t = useTranslations("ourMission");

  return (
    <section className="my-16 px-4 sm:px-6 lg:px-24 xl:px-32">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          {t("title")} <span className="text-green-600">{t("subtitle")}</span>
        </h2>
        <p className="text-gray-700 mt-4 text-base sm:text-lg max-w-3xl">
          {t("description")}
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10">
        {/* Text Section */}
        <div className="flex flex-col gap-8 flex-1">
          {[
            t("h3Description"),
            t("h4Description"),
            t("h5Description"),
            t("h6Description"),
          ].map((desc, index) => (
            <div className="flex items-start gap-4" key={index}>
              <Image
                src={DoneImage}
                width={40}
                height={40}
                alt="Check icon"
                className="mt-1 shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {t("h3Title")}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base xl:max-w-[570px]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xl xl:max-w-[500px] hidden xl:block">
          <Image
            className="rounded-xl w-full h-auto object-cover"
            src={surrogacy}
            alt="Surrogacy"
          />
        </div>
      </div>
    </section>
  );
}
