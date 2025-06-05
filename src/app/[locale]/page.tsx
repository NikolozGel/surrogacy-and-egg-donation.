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
            <div className="bg-[#17134C] py-12 flex flex-col justify-center items-center h-full text-center ">
              <h3 className="text-white text-3xl font-bold">
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
    </main>
  );
}
