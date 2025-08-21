"use client";

import { Modal } from "antd";
import { useState } from "react";
import ModalRegistrationForm from "./modalRegistrationForm";
import { useTranslations } from "next-intl";

export default function ContactCallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("contactCallToAction");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="bg-[#eee] px-5 sm:px-10 py-8 text-center mt-20">
      <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 leading-snug">
        {t("title")}
      </h3>
      <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto">
        {t("description")}
      </p>
      <button
        className="bg-[#00AE8A] hover:opacity-65 transition-colors duration-200 px-6 py-3 text-white rounded-xl text-sm sm:text-base font-semibold cursor-pointer"
        onClick={toggleModal}
      >
        {t("btn")}
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
  );
}
