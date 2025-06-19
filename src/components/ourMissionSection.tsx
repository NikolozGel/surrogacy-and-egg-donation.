import Image from "next/image";
import DoneImage from "../../public/assets/images/check-button.png";
import { useTranslations } from "next-intl";

export default function OurMissionSection() {
  const t = useTranslations("ourMission");
  return (
    <section className="my-16 px-5 md:px-10 lg:px-22">
      <div className="mb-10">
        <h2 className="text-2xl font-bold">
          {t("title")} <span className="text-green-600">{t("subtitle")}</span>
        </h2>
        <p className="text-gray-700 mt-3">{t("description")}</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-center">
          <div>
            <div className="flex ">
              <Image src={DoneImage} width={40} height={40} alt="doneImage" />

              <h3 className="ml-4">{t("h3Title")}</h3>
            </div>
            <p className="ml-14">{t("h3Description")}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex ">
              <Image src={DoneImage} width={40} height={40} alt="doneImage" />

              <h3 className="ml-4">{t("h3Title")}</h3>
            </div>
            <p className="ml-14">{t("h3Description")}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex ">
              <Image src={DoneImage} width={40} height={40} alt="doneImage" />

              <h3 className="ml-4">{t("h3Title")}</h3>
            </div>
            <p className="ml-14">{t("h3Description")}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <div className="flex ">
              <Image src={DoneImage} width={40} height={40} alt="doneImage" />

              <h3 className="ml-4">{t("h3Title")}</h3>
            </div>
            <p className="ml-14">{t("h3Description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
