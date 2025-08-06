import HeadingSection from "@/components/contactPage/headingSection";
import Accordion from "@/components/contactPage/accordion";
import CircleImage from "@/components/contactPage/circleImage";
import BookConsultation from "@/components/contactPage/bookConsultation";
import ContactForm from "@/components/contactPage/contactForm";
import ContactInfo from "@/components/contactPage/contactInfo";
import { useTranslations } from "next-intl";

interface IData {
  id: string;
  question: string;
  answer: string;
}

export default function Page() {
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
    <div className="my-10 bg-gray-50 px-5 md:px-12 lg:px-19">
      <div className="w-full ">
        <div className="flex flex-col lg:flex-row  pt-10">
          <div className="lg:w-[1200px]">
            <HeadingSection />
            <Accordion data={data} />
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
