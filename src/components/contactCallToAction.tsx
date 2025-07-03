"use client";

import { Modal } from "antd";
import { useState } from "react";
import ModalRegistrationForm from "./modalRegistrationForm";

export default function ContactCallToAction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="bg-[#008E8A] px-5 sm:px-10 py-8 text-center">
      <h3 className="font-bold text-lg sm:text-xl md:text-2xl text-white mb-4 leading-snug">
        If You Have Any Questions, Do Not Hesitate to Contact Us and Share Your
        Problems
      </h3>
      <p className="text-white text-sm sm:text-base md:text-lg mb-6 max-w-3xl mx-auto">
        We understand that the road to parenthood can be filled with
        uncertainties and challenges, but it is also one of hope and
        possibilities. Arrange your initial consultation we&apos;re here for
        you.
      </p>
      <button
        className="bg-[#13c26a] hover:bg-[#10a85a] transition-colors duration-200 px-6 py-3 text-white rounded-xl text-sm sm:text-base font-semibold cursor-pointer"
        onClick={toggleModal}
      >
        Book a Consultation
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
