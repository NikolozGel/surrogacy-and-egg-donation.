import Slider from "@/components/Slider";
import SurrogacyIntroSection from "@/components/surrogacyIntroSection";
import SurrogacyAndEggDonationOptions from "@/components/surrogacyAndEggDonationOptions";
import OurMissionSection from "@/components/ourMissionSection";
export default function HomePage() {
  return (
    <main>
      <Slider />
      <div className="relative">
        <SurrogacyAndEggDonationOptions />
      </div>
      <div className="px-8">
        <SurrogacyIntroSection />
        <OurMissionSection />
      </div>
    </main>
  );
}
