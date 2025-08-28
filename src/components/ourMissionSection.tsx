import Image from "next/image";
// import DoneImage from "../../public/assets/images/check-button.png";
import { useTranslations } from "next-intl";

export default function OurMissionSection() {
  const t = useTranslations("ourMission");

  const blocks = [
    {
      title: t("h3Title"),
      description: t("h3Description"),
    },
    {
      title: t("h4"),
      description: t("h4Description"),
    },
    {
      title: t("h5"),
      description: t("h5Description"),
    },
    {
      title: t("h6"),
      description: t("h6Description"),
    },
  ];

  return (
    <section className="my-16 px-4 sm:px-6 lg:px-24 xl:px-32">
      <div className="flex justify-center items-center gap-18">
        {/* Text Section */}
        <div className="flex flex-col gap-8">
          {blocks.map((block, index) => (
            <div className="flex items-start gap-4" key={index}>
              {/* <Image
                src={DoneImage}
                width={30}
                height={30}
                alt="Check icon"
                className="mt-1 shrink-0"
              /> */}
              <div>
                <h3 className="text-lg lg:text-3xl font-bold text-gray-700">
                  {block.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-xl sm:text-base xl:max-w-[570px] mt-2">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full max-w-xl xl:max-w-[500px] hidden xl:block h-full">
          <Image
            className="rounded-xl object-cover"
            src="/assets/clinic/clinic-2.JPG"
            width={320}
            height={100}
            alt="Clinic Image"
          />
        </div>
      </div>
    </section>
  );
}
