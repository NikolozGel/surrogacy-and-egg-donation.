"use client";
import { useState } from "react";
// import { useTranslations } from "next-intl";
import { Modal } from "antd";
import ModalRegistrationForm from "./modalRegistrationForm";

export default function SurrogacyAndEggDonationOptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const t = useTranslations("homePage");

  return (
    <div className="px-5 md:px-20 mt-8 mb-30 lg:absolute lg:bottom-0 lg:left-16 lg:w-full lg:max-w-7xl lg:mx-auto ">
      <div className="flex flex-col gap-5">
        {/* <div className="flex">
          <p className="bg-[#A5D761] p-1 rounded-lg">Power of the choice</p>
        </div> */}
        <h2 className="text-3xl font-bold lg:text-white">
          Empowering Your path to Parenthood
        </h2>
        <p className="text-gray-700 lg:text-white  lg:mr-30">
          At fertility Options, we belive in the power of choice. The journey to
          parenthood is deeply personal and unique for every individual or
          couple, which is why we are committed to offering a range of tailored
          solutions. we ephasize the importance of providing diverse and
          flexible pathways to help you achive your dream of having a family.
        </p>
        <div>
          <button
            className="p-3 rounded-xl bg-blue-400 text-white cursor-pointer hover:bg-blue-500 transition duration-300 text-lg font-semibold"
            onClick={toggleModal}
          >
            Book an appointment
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
