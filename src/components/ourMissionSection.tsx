import Image from "next/image";
import DoneImage from "../../public/assets/images/check-button.png";
import { useTranslations } from "next-intl";
// import surrogacy from "../../public/assets/doctors/pregnant.jpg";

export default function OurMissionSection() {
  const t = useTranslations("ourMission");

  return (
    <section className="my-16 px-4 sm:px-6 lg:px-24 xl:px-32">
      {/* Main Content Area */}
      <div className="flex justify-center gap-18">
        {/* Text Section */}
        <div className="flex flex-col gap-8">
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
        <div className="w-full max-w-xl xl:max-w-[500px] hidden xl:block h-full">
          <Image
            className="rounded-xl object-cover"
            src={"/assets/clinic/clinic-2.JPG"}
            width={400}
            height={300}
            alt="Surrogacy"
          />
        </div>
      </div>
    </section>
  );
}
