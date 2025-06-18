"use client";
import React from "react";

const StatsBanner = () => {
  const stats = [
    { count: "1k", label: "Successfull treatment" },
    { count: "98%", label: "Positive Feedback" },
    { count: "20+", label: "Years of Experience" },
  ];
  //   bg - [#A5D761];
  return (
    <div className="bg-[#1db963] px-4 sm:px-10 py-3 mt-20">
      <div className="flex justify-between items-center gap-4 sm:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center flex-1 min-w-0">
            <p className="text-white text-base sm:text-xl lg:text-2xl font-bold leading-tight">
              {stat.count}
            </p>
            <p className="text-white text-xs sm:text-sm lg:text-base font-medium leading-snug">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
