"use client";
import { useState } from "react";
import HeadingSection from "@/components/contactPage/headingSection";
import Accordion from "@/components/contactPage/accordion";
import CircleImage from "@/components/contactPage/circleImage";
import BookConsultation from "@/components/contactPage/bookConsultation";
import ContactForm from "@/components/contactPage/contactForm";
import ContactInfo from "@/components/contactPage/contactInfo";
import { useTranslations } from "next-intl";
// import dynamic from "next/dynamic";

interface IData {
  id: string;
  question: string;
  answer: string;
}

// const SimpleMap = dynamic(() => import("@/components/map"), {
//   ssr: false,
// });

// const data: IData[] = [
//   {
//     id: "1",
//     question: "Visit Our Clinic",
//     answer:
//       "You have an open invitation to visit us and meet our dedicated team! During your visit, you'll have a chance to tour our modern facilities, consult with our experts, and discover all the ways we can support your journey to parenthood",
//   },
//   {
//     id: "2",
//     question: "Online inquiry",
//     answer:
//       "If you prefer to start your journey from the comfort of your home, you can fill out our online inquiry form. This allows you to share your details and questions with us, and our team will get back to you promptly to discuss how we can assist you.",
//   },
// ];

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);

  function handleSingleSelection(getCurrentId: string) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  const t = useTranslations("clinic");

  const data: IData[] = [
    {
      id: "clinic-visit",
      question: t("visitTitle"),
      answer: t("visitText"),
    },
    {
      id: "clinic-online",
      question: t("onlineTitle"),
      answer: t("onlineText"),
    },
  ];

  return (
    <div className="my-10 px-4 md:px-10 bg-gray-50">
      <div className="w-full px-4 my-14 md:px-35 h-[400px]">
        <div className="flex flex-col lg:flex-row gap-16 justify-center pt-10">
          <div>
            <HeadingSection />
            <Accordion
              data={data}
              selected={selected}
              onSelect={handleSingleSelection}
            />
          </div>

          {/* Right Image */}
          <CircleImage />
        </div>
      </div>

      {/* Book Consultation */}
      <BookConsultation />

      <div className="w-full mt-10 mb-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <ContactForm />
          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
      {/* <SimpleMap /> */}
    </div>
  );
}
