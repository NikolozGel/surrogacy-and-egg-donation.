"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Modal } from "antd";
import ModalRegistrationForm from "./modalRegistrationForm";

export default function SurrogacyAndEggDonationOptions() {
  const t = useTranslations("homePage");

  const [showSurrogateForm, setShowSurrogateForm] = useState(false);
  const [showEggDonorForm, setShowEggDonorForm] = useState(false);
  const [showParentForm, setShowParentForm] = useState(false);

  const toggleParentForm = () => {
    setShowParentForm(!showParentForm);
  };

  const toggleSurrogateForm = () => {
    setShowSurrogateForm(!showSurrogateForm);
  };
  const toggleEggDonorForm = () => {
    setShowEggDonorForm(!showEggDonorForm);
  };

  return (
    <div className="container mx-auto px-5 md:px-12 mt-8 mb-30">
      <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-10">
        <section className="w-full lg:w-[650px]">
          <div className="bg-[#23a39f] py-12 flex flex-col justify-center items-center h-full text-center rounded-md">
            <h3 className="text-white text-3xl font-bold">
              {t("becomeSurrogateBtn")}
            </h3>
            <p className="mt-6 text-white px-5 lg:px-20 text-lg">
              {t("becomeSurrogateText")}
            </p>
            <button
              className="text-white bg-[#17134C] mt-7 p-3 lg:px-6 lg:py-3.5 rounded-full hover:opacity-70 transition duration-300 cursor-pointer"
              onClick={toggleSurrogateForm}
            >
              {t("becomeSurrogateBtn")}
            </button>
          </div>
          <Modal
            footer={false}
            width={700}
            open={showSurrogateForm}
            onOk={() => setShowSurrogateForm(false)}
            onCancel={() => setShowSurrogateForm(false)}
          >
            <ModalRegistrationForm />
          </Modal>
        </section>

        <section className="w-full lg:w-[650px]">
          <div className="bg-[#23a39f] py-12 flex flex-col justify-center items-center h-full text-center rounded-md">
            <h3 className="text-white text-3xl font-bold px-2">
              {t("becomeDonorBtn")}
            </h3>
            <p className="mt-6 text-white px-5 lg:px-20 text-lg">
              {t("becomeEggDonorText")}
            </p>
            <button
              className="text-white bg-[#17134C] mt-7 p-3 lg:px-6 lg:py-3.5 rounded-full  hover:opacity-70 transition duration-300 cursor-pointer"
              onClick={toggleEggDonorForm}
            >
              {t("becomeDonorBtn")}
            </button>
          </div>
          <Modal
            footer={false}
            width={700}
            open={showEggDonorForm}
            onOk={() => setShowEggDonorForm(false)}
            onCancel={() => setShowEggDonorForm(false)}
          >
            <ModalRegistrationForm />
          </Modal>
        </section>

        <section className="w-full lg:w-[650px]">
          <div className="bg-[#23a39f] py-12 flex flex-col justify-center items-center h-full text-center rounded-md">
            <h3 className="text-white text-3xl font-bold px-2">
              {t("becomeParent")}
            </h3>
            <p className="mt-6 text-white px-5 lg:px-20 text-lg">
              {t("becomeParentText")}
            </p>
            <button
              className="text-white bg-[#17134C] mt-7 p-3 lg:px-6 lg:py-3.5 rounded-full  hover:opacity-70 transition duration-300 cursor-pointer"
              onClick={toggleParentForm}
            >
              {t("becomeParentBtn")}
            </button>
          </div>
          <Modal
            footer={false}
            width={700}
            open={showParentForm}
            onOk={() => setShowParentForm(false)}
            onCancel={() => setShowParentForm(false)}
          >
            <ModalRegistrationForm />
          </Modal>
        </section>
      </div>
    </div>
  );
}
