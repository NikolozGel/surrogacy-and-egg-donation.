import Image from "next/image";

import mother1 from "../../../public/assets/images/mother-1.jpg";
import mother2 from "../../../public/assets/images/mother-2.jpg";
export default function WhatToExpect() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto py-16">
      <div className="lg:flex lg:items-center lg:justify-between gap-10">
        {/* Left Image Column */}
        <div className="hidden lg:flex flex-col gap-10 relative w-1/2">
          {/* Top Image */}
          <div className="relative w-75 h-60 mx-auto">
            <div className="absolute inset-0 bg-[#d4f3e4] rounded-[50%] blur-3xl -z-10" />
            <Image
              src={mother1}
              alt="Mother with baby"
              fill
              className="object-cover rounded-[30%]"
            />
          </div>

          {/* Bottom Image */}
          <div className="relative w-75 h-60 mx-auto">
            <div className="absolute inset-0 bg-[#f7f3d1] rounded-[50%] blur-3xl -z-10" />
            <Image
              src={mother2}
              alt="Pregnant woman"
              fill
              className="object-cover rounded-[30%]"
            />
          </div>
        </div>

        {/* Right Text Column */}
        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            What to <span className="text-[#88C040]">Expect</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-6">
            Starting a surrogacy journey can feel like stepping into the
            unknown, but at Fertility Options, we’re here to simplify the
            process and support you through every phase. Surrogacy is a journey
            that requires patience, but with our expert guidance, it&apos;s
            smoother and more streamlined. We handle everything from pairing you
            with the perfect surrogate partner and selecting the ideal egg donor
            to navigating the legalities and connecting with top-notch fertility
            clinics. We&apos;ve got you covered. Our all-inclusive service means
            you have everything you need in one place, with a team that’s got
            your back from start to finish—and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="bg-[#FFEFBD] text-[#1F5673] font-semibold px-6 py-3 rounded-full text-sm sm:text-base shadow hover:bg-[#ffe29b] cursor-pointer">
              Become a Parent
            </button>
            <button className="bg-[#DFF5E1] text-[#237A57] font-semibold px-6 py-3 rounded-full text-sm sm:text-base shadow hover:bg-[#c8eacb] cursor-pointer">
              Become a Surrogate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
