"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Modal } from "antd";
import ModalRegistrationForm from "./modalRegistrationForm";

export default function SurrogacyAndEggDonationOptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const t = useTranslations("surrogacyOptions");

  return (
    <div className="px-5 md:px-20 mt-8 lg:mt-0 mb-30 lg:absolute lg:bottom-0 lg:left-20 lg:max-w-7xl lg:mx-auto ">
      <div className="flex flex-col gap-5">
        <h2 className="text-3xl font-bold lg:text-white">{t("title")}</h2>
        <p className="text-gray-700 lg:text-white  lg:mr-30">
          {t("description")}
        </p>
        <div>
          <button
            className="p-2 sm:p-3 rounded-xl bg-[#10B981] hover:opacity-70  text-white cursor-pointer text-lg font-semibold"
            onClick={toggleModal}
          >
            {t("button")}
          </button>

          <Modal
            footer={false}
            width={700}
            open={isModalOpen}
            onOk={() => setIsModalOpen(false)}
            onCancel={() => setIsModalOpen(false)}
          >
            <ModalRegistrationForm />
          </Modal>
        </div>
      </div>
    </div>
  );
}
