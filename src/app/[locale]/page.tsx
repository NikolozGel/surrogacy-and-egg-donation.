import Slider from "@/components/Slider";
import SurrogacyIntroSection from "@/components/surrogacyIntroSection";
import SurrogacyAndEggDonationOptions from "@/components/surrogacyAndEggDonationOptions";
import StatsBanner from "@/components/statsBanner";
import OurMissionSection from "@/components/ourMissionSection";
export default function HomePage() {
  return (
    <main>
      <Slider />
      <div className="relative">
        <SurrogacyAndEggDonationOptions />
      </div>

      <SurrogacyIntroSection />

      <StatsBanner />
      <OurMissionSection />
    </main>
  );
}
