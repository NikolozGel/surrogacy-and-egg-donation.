"use client";
import { Modal } from "antd";
import { useState } from "react";
import ModalRegistrationForm from "../modalRegistrationForm";

export default function RegisterBtn() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <div className="mt-10 text-center">
        <button
          onClick={toggleModal}
          className="px-6 py-3 bg-[#00AE8A] cursor-pointer hover:opacity-65 text-white font-semibold rounded-full"
        >
          Start Your Surrogacy Journey
        </button>
      </div>
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
