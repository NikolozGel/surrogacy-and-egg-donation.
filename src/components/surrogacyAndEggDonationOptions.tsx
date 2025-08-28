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
    <div className="px-5 md:px-20 absolute bottom-10 md:bottom-30 lg:bottom-40 left-0  md:left-10 lg:left-20 max-w-7xl mx-auto ">
      <div className="flex flex-col gap-5">
        <h2 className="text-md lg:text-4xl font-bold text-white bg-black/20 p-4">
          {t("title")}
        </h2>
        <div>
          <button
            className="p-2 sm:p-3.5 rounded-xl bg-[#00AE8A] hover:opacity-65 text-white cursor-pointer text-md lg:text-2xl font-semibold"
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
