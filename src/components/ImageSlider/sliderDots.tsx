export default function SliderDots({
  count,
  current,
  setCurrent,
}: {
  count: number;
  current: number;
  setCurrent: (index: number) => void;
}) {
  return (
    <div className="flex justify-center mt-5 gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrent(index)}
          className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition cursor-pointer ${
            current === index ? "bg-[#A6D761]" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
