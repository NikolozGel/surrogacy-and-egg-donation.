"use client";
import { Modal } from "antd";
import ModalRegistrationForm from "../modalRegistrationForm";
import { useState } from "react";

export default function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {/* Final CTA */}
      <section className="bg-gray-50 text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">
          Ready to Begin Your Family Journey?
        </h2>
        <p className="text-gray-700 mb-6">
          Let us be your guide. Together, we’ll take the first steps toward
          building the family you’ve been dreaming of.
        </p>
        <button
          onClick={toggleModal}
          className="inline-block bg-[#00AE8A] hover:opacity-65 cursor-pointer text-white font-medium px-6 py-3 rounded-md  transition"
        >
          Contact Us
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
      </section>
    </>
  );
}
