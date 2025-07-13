import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function SliderArrows({
  onPrevious,
  onNext,
}: {
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <div className="absolute -top-12 right-4 sm:right-6 flex gap-4 z-20">
      <BsArrowLeftCircleFill
        onClick={onPrevious}
        className="text-3xl sm:text-4xl text-white drop-shadow cursor-pointer hover:text-[#A5D761]"
      />
      <BsArrowRightCircleFill
        onClick={onNext}
        className="text-3xl sm:text-4xl text-white drop-shadow cursor-pointer hover:text-[#A5D761]"
      />
    </div>
  );
}
