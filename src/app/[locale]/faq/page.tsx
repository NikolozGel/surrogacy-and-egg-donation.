"use client";
import ContactCallToAction from "@/components/contactCallToAction";
import Accordion from "@/components/contactPage/accordion";
import Image from "next/image";
import { useState } from "react";
import coverPhoto from "../../../../public/assets/images/servicePage-bg.png";
import { useTranslations } from "next-intl";
import FaqIntro from "@/components/faqIntro";

interface IData {
  id: string;
  question: string;
  answer: string;
}

export default function Page() {
  const [selected, setSelected] = useState<string | null>(null);
  const t = useTranslations("FAQ");

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
    {
      id: "4",
      question: t("q4.question"),
      answer: t("q4.answer"),
    },
    {
      id: "5",
      question: t("q5.question"),
      answer: t("q5.answer"),
    },
    {
      id: "6",
      question: t("q6.question"),
      answer: t("q6.answer"),
    },
    {
      id: "7",
      question: t("q7.question"),
      answer: t("q7.answer"),
    },
    {
      id: "8",
      question: t("q8.question"),
      answer: t("q8.answer"),
    },
    {
      id: "9",
      question: t("q9.question"),
      answer: t("q9.answer"),
    },
    {
      id: "10",
      question: t("q10.question"),
      answer: t("q10.answer"),
    },
    {
      id: "11",
      question: t("q11.question"),
      answer: t("q11.answer"),
    },
    {
      id: "12",
      question: t("q12.question"),
      answer: t("q12.answer"),
    },
  ];

  function handleSingleSelection(getCurrentId: string) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  return (
    <div>
      <div className="relative w-full aspect-[16/5] max-h-[80vh]">
        <Image
          src={coverPhoto}
          alt="coverImage"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          unoptimized
        />
      </div>
      <FaqIntro />
      <Accordion
        data={data}
        selected={selected}
        onSelect={handleSingleSelection}
      />

      <div className="mt-50">
        <ContactCallToAction />
      </div>
    </div>
  );
}
