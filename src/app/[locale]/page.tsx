"use client";
import { useTranslations } from "next-intl";
import Slider from "@/components/Slider";
import ModalRegistrationForm from "@/components/modalRegistrationForm";
import { Modal } from "antd";
import { useState } from "react";

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);
  const [showSurrogateForm, setShowSurrogateForm] = useState(false);
  const [showEggDonorForm, setShowEggDonorForm] = useState(false);

  const t = useTranslations("homePage");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleSurrogateForm = () => {
    setShowSurrogateForm(!showSurrogateForm);
  };
  const toggleEggDonorForm = () => {
    setShowEggDonorForm(!showEggDonorForm);
  };
  return (
    <main>
      <Slider />
      <div className="flex items-center justify-center ">
        <button
          className="bg-[#17134C] text-white px-10 py-4 rounded-full mt-8 hover:opacity-70 transition duration-300 cursor-pointer"
          onClick={toggleForm}
        >
          {t("registrationBtn")}
        </button>
      </div>
      <Modal
        footer={false}
        width={700}
        open={showForm}
        onOk={() => setShowForm(false)}
        onCancel={() => setShowForm(false)}
      >
        <ModalRegistrationForm />
      </Modal>
      <div className="bg-white px-4 py-12 sm:px-6 lg:px-16 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
            {t("main_title")}
          </h2>
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
                {t("becomeSurrogateBtn")}
              </h3>
              <p className="mt-6 text-[#353334] px-5 lg:px-20 text-lg">
                {t("becomeSurrogateText")}
              </p>
              <button
                className="text-white bg-[#17134C] mt-7 p-3 lg:px-6 lg:py-3.5 rounded-full hover:opacity-70 transition duration-300 cursor-pointer"
                onClick={toggleSurrogateForm}
              >
                {t("becomeSurrogateBtn")}
              </button>
            </div>
          </section>
          <Modal
            footer={false}
            width={700}
            open={showSurrogateForm}
            onOk={() => setShowSurrogateForm(false)}
            onCancel={() => setShowSurrogateForm(false)}
          >
            <ModalRegistrationForm />
          </Modal>

          <section className="w-full lg:w-[650px]">
            <div className="bg-[#17134C] py-12 flex flex-col justify-center items-center h-full text-center">
              <h3 className="text-white text-3xl font-bold px-2">
                {t("becomeDonorBtn")}
              </h3>
              <p className="mt-6 text-white px-5 lg:px-20 text-lg">
                {t("becomeEggDonorText")}
              </p>
              <button
                className="text-white bg-[#FFBF9E] mt-7 p-3 lg:px-6 lg:py-3.5 rounded-full  hover:opacity-70 transition duration-300 cursor-pointer"
                onClick={toggleEggDonorForm}
              >
                {t("becomeDonorBtn")}
              </button>
            </div>
          </section>
          <Modal
            footer={false}
            width={700}
            open={showEggDonorForm}
            onOk={() => setShowEggDonorForm(false)}
            onCancel={() => setShowEggDonorForm(false)}
          >
            <ModalRegistrationForm />
          </Modal>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-12 mt-8 mb-30">
        <div className="text-gray-600">
          <h3 className="text-[2.1rem]">Surrogacy and Egg Donation</h3>
          <p className="text-[1.2rem] mt-2">
            The path to parenthood isn’t always simple — but with today’s
            reproductive technologies, new possibilities have opened for those
            who face infertility or other challenges. Surrogacy and reproductive
            donation offer real hope to individuals and couples for whom natural
            conception isn’t an option. These methods make it possible to build
            the family you&apos;ve dreamed of, with the support of dedicated
            professionals every step of the way. At our center in Georgia, we
            care deeply about helping people on this personal journey. We guide
            intended parents through each stage of the process with clarity,
            confidentiality, and compassion — offering trusted solutions for
            those who long to experience the joy of having a child.
          </p>
        </div>

        <ul>
          <li>sadsa</li>
        </ul>
        <div className="mt-10 text-gray-600">
          <p>Third-party reproductive options may be the right choice for:</p>
          <ul className="list-disc list-inside mt-4">
            <li>
              Individuals or couples facing infertility and unable to conceive
              with their own eggs or sperm
            </li>
            <li>Women who are medically unable to carry a pregnancy</li>
            <li>
              Women who are beyond natural reproductive age or going through
              menopause
            </li>
            <li>Single parents who wish to raise a child on their own</li>
            <li>
              LGBTQ+ individuals or couples who need reproductive support to
              grow their family
            </li>
            <li>
              Those who carry a high risk of passing on genetic conditions and
              seek a safer alternative
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
