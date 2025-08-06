import ClientSlider from "@/components/clientSlider";
import HeroImage from "@/components/sections/heroImage";
import IntroSection from "@/components/sections/introSection";
import WhatToExpect from "@/components/sections/whatToExpect";
import FooterCTA from "@/components/sections/footerCTA";
import FeatureBlocks from "@/components/sections/featureBlocks";
import GuaranteeSection from "@/components/sections/guaranteeSection";

// ✅ SEO metadata გენერაცია

// ✅ კომპონენტური გვერდი
export default function Page() {
  return (
    <div className="bg-gray-50">
      {/* Responsive Hero Image */}
      <HeroImage />

      {/* Content Section */}
      <div className="mt-6 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
        <IntroSection />

        {/* What to Expect Section */}
        <WhatToExpect />
        {/* Footer CTA */}
        <FooterCTA />
        {/* Four Feature Blocks */}
        <FeatureBlocks />

        {/* Guarantee Section */}
        <GuaranteeSection />

        <ClientSlider />
        {/* Guarantee Items */}
      </div>
    </div>
  );
}
