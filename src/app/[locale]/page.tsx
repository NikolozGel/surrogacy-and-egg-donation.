import Slider from "@/components/Slider";
import SurrogacyIntroSection from "@/components/surrogacyIntroSection";
import SurrogacyAndEggDonationOptions from "@/components/surrogacyAndEggDonationOptions";
import OurMissionSection from "@/components/ourMissionSection";
import ImageSlider from "@/components/ImageSlider/imageSlider";
import AccordionFaq from "@/components/accordionFaq";
import ContactCallToAction from "@/components/contactCallToAction";

const images = [
  {
    url: "/assets/clinic/zizi.JPG",
    title: "title",
    subtitle: "subtitle",
    description: "description",
  },
  {
    url: "/assets/doctors/laliko.jpg",
    title: "title-2",
    subtitle: "subtitle-2",
    description: "description-2",
  },
];

export default function HomePage() {
  return (
    <main className="bg-gray-50">
      <Slider />
      <div className="relative">
        <SurrogacyAndEggDonationOptions />
      </div>
      <div className="lg:px-8">
        <SurrogacyIntroSection />
        <OurMissionSection />
      </div>
      <ImageSlider images={images} />
      <div className="px-5">
        <AccordionFaq />
      </div>
      <ContactCallToAction />
    </main>
  );
}
