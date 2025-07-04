import Image from "next/image";
import { ImageType } from "./imageSlider";

export default function SliderImage({
  images,
  currentSlide,
}: {
  images: ImageType[];
  currentSlide: number;
}) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 rounded-2xl overflow-hidden flex">
      <div className="relative w-full aspect-[4/5]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={image.url}
              alt={`Slide ${index + 1}`}
              fill
              quality={90}
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
