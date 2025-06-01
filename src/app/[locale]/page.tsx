import { useTranslations } from "next-intl";
import Slider from "@/components/Slider";

export default function HomePage() {
  const t = useTranslations("homePage");
  return (
    <main>
      <Slider />

      {/* <div>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <Link href="/about">{t("about")}</Link>
      </div> */}
      <div className="flex items-center justify-center ">
        <button className="bg-[#17134C] text-white px-10 py-4 rounded-full mt-8 hover:opacity-70 transition duration-300 cursor-pointer">
          {t("registrationBtn")}
        </button>
      </div>
      <div className="bg-white px-4 py-12 sm:px-6 lg:px-16 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
            {t("main_title")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {t("main_text")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-12 mt-8 mb-30">
        <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-10">
          <section className="w-full lg:w-[650px]">
            <div className="bg-[#FFBF9E] py-12 flex flex-col justify-center items-center h-full text-center">
              <h3 className="text-[#353334] text-3xl font-bold">
                Become A Surrogate
              </h3>
              <p className="mt-6 text-[#353334] px-5 lg:px-20 text-lg">
                Surrogacy is a beautiful journey that helps families grow. If
                you are considering becoming a surrogate, we are here to support
                you every step of the way.
              </p>
              <button className="text-white bg-[#17134C] mt-7 p-3 lg:px-6 lg:py-3.5 rounded-full hover:opacity-70 transition duration-300 cursor-pointer">
                Become a Surrogate
              </button>
            </div>
          </section>

          <section className="w-full lg:w-[650px]">
            <div className="bg-[#17134C] py-12 flex flex-col justify-center items-center h-full text-center ">
              <h3 className="text-white text-3xl font-bold">
                Find a Surrogate
              </h3>
              <p className="mt-6 text-white px-5 lg:px-20 text-lg">
                Finding the right surrogate is crucial for a successful journey.
                We are here to help you connect with compassionate and dedicated
                surrogates who are ready to support your family-building dreams.
              </p>
              <button className="text-white bg-[#FFBF9E] mt-7 p-3 lg:px-6 lg:py-3.5 rounded-full  hover:opacity-70 transition duration-300 cursor-pointer">
                Find a Surrogate
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
