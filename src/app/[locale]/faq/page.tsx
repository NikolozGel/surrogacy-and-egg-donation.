import ContactCallToAction from "@/components/contactCallToAction";
import Accordion from "@/components/contactPage/accordion";
import Image from "next/image";
import coverPhoto from "../../../../public/assets/images/servicePage-bg.png";
import { useTranslations } from "next-intl";
import FaqIntro from "@/components/faqIntro";

interface IData {
  id: string;
  question: string;
  answer: string;
}

export default function Page() {
  const t = useTranslations("faq");

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

  return (
    <div className="bg-gray-50">
      <div className="relative w-full h-[37vh] sm:h-[60vh] lg:h-[73vh] overflow-hidden">
        <Image
          src={coverPhoto}
          alt="coverImage"
          fill
          quality={100}
          className="object-cover"
          sizes="100vw"
          priority={true}
          unoptimized
        />
      </div>
      <FaqIntro />
      <Accordion data={data} />

      <ContactCallToAction />
    </div>
  );
}
