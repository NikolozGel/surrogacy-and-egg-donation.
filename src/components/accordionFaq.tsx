"use client";
import { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import Image from "next/image";
import faqImage from "../../public/assets/logo/FAQ.png";

interface IData {
  id: string;
  question: string;
  answer: string;
}

const data: IData[] = [
  {
    id: "1",
    question:
      "What's the average timeline from day 1 to holding my baby in a surrogacy journey?",
    answer:
      "On average, the entire surrogacy journey takes about 12 to 18 months. This includes matching with a surrogate, medical preparations, legal agreements, the embryo transfer process, and the full pregnancy term.",
  },
  {
    id: "2",
    question: "I'm single can i make this happen?",
    answer:
      "Yes! Single men have options in Georgia. Single women also have options in Georgia.",
  },
  {
    id: "3",
    question: "I'm ready to start my journey what's step one?",
    answer:
      "The first step is to schedule a consultation with our team. We’ll guide you through the process, explain your options, and help you begin your personalized surrogacy or egg donation journey.",
  },
];

export default function AccordionFaq() {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSingleSelection(getCurrentId: string) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  console.log(selected);
  return (
    <div className="flex flex-col">
      {/* Main content */}
      <main className="flex-1 px-4 py-8 flex flex-col items-center">
        {/* Header section */}
        <section className="max-w-4xl text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Do you Have any <span className="text-[#008E8A]">Questions?</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            From IVF to fertility surgery and third-party reproduction, our wide
            range of services ensures we&apos;ve got every aspect of your
            fertility needs covered. Your path to parenthood starts here.
            Contact Fertility Options today, and let&apos;s make your dream of
            becoming a parent a reality.
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
                  <div className="pb-2">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-[#323232] lg:h-[300px] text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center w-full lg:max-w-sm mx-auto">
            <Image src={faqImage} width={100} height={100} alt="faqImage" />
            <h3 className="text-lg font-semibold mt-4">
              You have different questions? Contact us or check FAQ Page
            </h3>
            <div className="flex gap-4 mt-6 flex-col sm:flex-row mb-4">
              <button className="bg-amber-300 text-black font-semibold py-2 px-6 rounded-lg w-full sm:w-auto">
                Contact Us
              </button>
              <button className="border border-amber-300 text-white py-2 px-6 rounded-lg w-full sm:w-auto">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
