import Slider from "@/components/Slider";
import SurrogacyIntroSection from "@/components/surrogacyIntroSection";
import SurrogacyAndEggDonationOptions from "@/components/surrogacyAndEggDonationOptions";
import OurMissionSection from "@/components/ourMissionSection";
import ImageSlider from "@/components/imageSlider";
import AccordionFaq from "@/components/accordionFaq";

export default function HomePage() {
  return (
    <main>
      <Slider />
      <div className="relative">
        <SurrogacyAndEggDonationOptions />
      </div>
      <div className="lg:px-8">
        <SurrogacyIntroSection />
        <OurMissionSection />
      </div>
      <ImageSlider />
      <AccordionFaq />
    </main>
  );
}
