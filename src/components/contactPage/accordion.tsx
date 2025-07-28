import { FaArrowDown } from "react-icons/fa6";

interface IData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  data: IData[];
  selected: string | null;
  onSelect: (id: string) => void;
}

export default function Accordion({
  data,
  selected,
  onSelect,
}: AccordionProps) {
  const mid = Math.ceil(data.length / 2);
  const leftSide = data.slice(0, mid);
  const rightSide = data.slice(mid);

  return (
    <div className="flex flex-col sm:h-[950px] md:h-[850px] lg:h-[650px] lg:flex-row gap-6 mt-5 px-2  md:px-10 lg:px-32">
      {[leftSide, rightSide].map((half, index) => (
        <div key={index} className="flex flex-col gap-3 w-full ">
          {half.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full border border-gray-200 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                selected === item.id ? "bg-[#008E8A] text-white" : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-sm sm:text-base lg:text-lg">
                  {item.question}
                </h3>
                <FaArrowDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    selected === item.id
                      ? "rotate-180 text-white"
                      : "text-gray-500"
                  }`}
                />
              </div>
              <div
                className={`overflow-hidden mt-1 text-sm sm:text-base leading-relaxed ${
                  selected === item.id ? "" : "max-h-0"
                }`}
              >
                <div className="pb-2">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
