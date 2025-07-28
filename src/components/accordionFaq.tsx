"use client";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import Image from "next/image";
import faqImage from "../../public/assets/logo/FAQ.png";
import { Modal } from "antd";
import ModalRegistrationForm from "./modalRegistrationForm";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

interface IData {
  id: string;
  question: string;
  answer: string;
}

export default function AccordionFaq() {
  const [selected, setSelected] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations("homeAccordionFaq");
  const router = useRouter();
  const locale = useLocale();

  const handleClick = () => {
    router.push(`/${locale}/faq`);
  };

  function handleSingleSelection(getCurrentId: string) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const data: IData[] = [
    {
      id: "1",
      question: t("q1.question"),
      answer: t("q1.answer"),
    },
    {
      id: "2",
      question: t("q2.question"),
      answer: t("q2.answer"),
    },
    {
      id: "3",
      question: t("q3.question"),
      answer: t("q3.answer"),
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Main content */}
      <main className="flex-1 px-4 py-8 flex flex-col items-center">
        {/* Header section */}
        <section className="max-w-4xl text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t("title")}
            <span className="text-[#008E8A]"> {t("title-highlight")}</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            {t("description")}
          </p>
        </section>

        {/* FAQ & CTA Section */}
        <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
          {/* Accordion (scrollable) */}
          <div className="flex-1 flex flex-col gap-4 h-[400px] overflow-y-auto pr-1">
            {data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSingleSelection(item.id)}
                className={`w-full border border-gray-200 rounded-lg p-4 transition-all duration-300 cursor-pointer ${
                  selected === item.id ? "bg-[#008E8A] text-white" : "bg-white"
                }`}
                style={{ minHeight: "80px" }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
                    {item.question}
                  </h3>
                  <FaArrowDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      selected === item.id
                        ? "rotate-180 text-white"
                        : "text-gray-500"
                    }`}
                  />
                </div>

                {/* Smooth answer */}
                <div
                  className={`overflow-hidden mt-4 text-sm sm:text-base leading-relaxed ${
                    selected === item.id ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="pb-5">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-[#323232] lg:h-[300px] text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center w-full lg:max-w-sm mx-auto">
            <Image src={faqImage} width={100} height={100} alt="faqImage" />
            <h3 className="text-lg font-semibold mt-4">{t("fAQTitle")}</h3>
            <div className="flex gap-4 mt-6 flex-col sm:flex-row mb-4">
              <button
                className="bg-amber-300 text-black font-semibold py-2 px-6 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-amber-500"
                onClick={toggleModal}
              >
                {t("FAQContactBtn")}
              </button>
              <button
                className="border border-amber-300 text-white py-2 px-6 rounded-lg w-full sm:w-auto cursor-pointer hover:bg-gray-500"
                onClick={handleClick}
              >
                {t("FAQPageBtn")}
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
      </main>
    </div>
  );
}
