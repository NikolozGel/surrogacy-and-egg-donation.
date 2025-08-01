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
    <div className="bg-[#008E8A] px-5 sm:px-10 py-8 text-center mt-10">
      <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-4 leading-snug">
        {t("title")}
      </h3>
      <p className="text-white text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto">
        {t("description")}
      </p>
      <button
        className="bg-[#13c26a] hover:bg-[#10a85a] transition-colors duration-200 px-6 py-3 text-white rounded-xl text-sm sm:text-base font-semibold cursor-pointer"
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
