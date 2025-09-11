"use client";
import ModalRegistrationForm from "@/components/modalRegistrationForm";
import { Modal } from "antd";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function PricingPage() {
  const t = useTranslations("prices");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="w-full bg-gray-50 text-gray-800 px-4 py-16 sm:px-6 lg:px-24 xl:px-32">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
          {t("pricingHeadline")}
        </h1>
        <p className="text-lg text-gray-600">{t("pricingDescription")}</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card */}
        {["basic", "standard", "vip"].map((type) => (
          <div
            key={type}
            className="rounded-2xl bg-gray-50 border border-gray-200 hover:shadow-lg transition-all p-6 flex flex-col"
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#00AE8A]">
              {t(`${type}PackageTitle`)}
            </h2>
            <p className="text-3xl font-bold text-gray-800 mb-4">
              {t(`${type}PackagePrice`)}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-base text-gray-700">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index}>{t(`${type}Feature${index + 1}`)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Included Section */}
      <div className="mt-24 max-w-5xl mx-auto bg-gray-50 rounded-3xl p-10 border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6">
          {t("includedSectionTitle")}
        </h2>
        <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
          <p>{t("includedParagraph1")}</p>
          <p>{t("includedParagraph2")}</p>
          <p>{t("includedParagraph3")}</p>
        </div>

        {/* Trust Section */}
        <div className="text-center mt-12">
          <span className="block text-[#00AE8A] text-lg lg:text-2xl font-medium mb-2">
            {t("trustTagline")}
          </span>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {t("trustHeadline")}
          </h3>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            {t("trustParagraph")}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("ctaHeadline")}</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          {t("ctaParagraph")}
        </p>
        <button
          className="bg-[#00AE8A] hover:bg-[#009978] text-white px-8 py-3 rounded-xl text-lg font-medium transition cursor-pointer"
          onClick={toggleModal}
        >
          {t("ctaButtonLabel")}
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
    </section>
  );
}
