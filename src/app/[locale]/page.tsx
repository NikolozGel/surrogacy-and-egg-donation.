"use client";
import { useTranslations } from "next-intl";
import Slider from "@/components/Slider";
import { useState } from "react";
import SurrogacyIntroSection from "@/components/surrogacyIntroSection";
import SurrogacyAndEggDonationOptions from "@/components/surrogacyAndEggDonationOptions";

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);

  const t = useTranslations("homePage");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <main>
      <Slider />
      <div className="flex items-center justify-center ">
        <button
          className="bg-[#17134C] text-white px-10 py-4 rounded-full mt-8 hover:opacity-70 transition duration-300 cursor-pointer"
          onClick={toggleForm}
        >
          {t("registrationBtn")}
        </button>
      </div>

      <div className="bg-white px-4 py-12 sm:px-6 lg:px-16 text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#222222] mb-6">
            {t("main_title")}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {t("main_text")}
          </p>
        </div>
      </div>

      <SurrogacyAndEggDonationOptions />

      <SurrogacyIntroSection />
    </main>
  );
}
