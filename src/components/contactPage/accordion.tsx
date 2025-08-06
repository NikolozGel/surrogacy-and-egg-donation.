"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface IData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  data: IData[];
}

export default function Accordion({ data }: AccordionProps) {
  const mid = Math.ceil(data.length / 2);
  const leftSide = data.slice(0, mid);
  const rightSide = data.slice(mid);

  const [selected, setSelected] = useState<string | null>(null);

  function handleSingleSelection(getCurrentId: string) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-5 px-6 sm:px-10 lg:px-20 xl:px-30">
      {[leftSide, rightSide].map((half, index) => (
        <div key={index} className="flex flex-col gap-3 w-full">
          {half.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSingleSelection(item.id)}
              className={`w-full border border-gray-200 rounded-lg p-3.5 cursor-pointer transition-all duration-300 ${
                selected === item.id ? "bg-[#fff] text-gray-700" : "bg-white"
              }`}
            >
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-700 text-sm sm:text-base lg:text-lg">
                  {item.question}
                </h3>
                <IoIosArrowDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    selected === item.id
                      ? "rotate-180 text-gray-700"
                      : "text-gray-700"
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden mt-1 text-sm sm:text-base leading-relaxed ${
                  selected === item.id ? "" : "max-h-0"
                }`}
              >
                <div className="mt-4">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
