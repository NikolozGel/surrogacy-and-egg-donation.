import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function SliderArrows({
  onPrevious,
  onNext,
}: {
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="absolute -top-15 right-6 sm:right-6 flex gap-4 z-20">
      <BsArrowLeftCircleFill
        size={50}
        onClick={onPrevious}
        className="text-3xl sm:text-4xl text-white drop-shadow cursor-pointer hover:text-[#A5D761]"
      />
      <BsArrowRightCircleFill
        size={50}
        onClick={onNext}
        className="text-3xl sm:text-4xl text-white drop-shadow cursor-pointer hover:text-[#A5D761]"
      />
    </div>
  );
}
