"use client";
import { useRef } from "react";
import Image from "next/image";
import { ImageType } from "./imageSlider";

export default function SliderImage({
  images,
  currentSlide,
  setCurrentSlide, // ✅ მოითხოვე setCurrentSlide prop, რომ სლაიდი შეიცვალოს swipe-ისას
}: {
  images: ImageType[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 👉 Touch Start
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // 👉 Touch Move
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // 👉 Touch End
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        // 👉 swipe left – next image
        setCurrentSlide((currentSlide + 1) % images.length);
      } else {
        // 👉 swipe right – previous image
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
      }
    }

    // Reset refs
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 rounded-2xl overflow-hidden flex">
      <div
        className="relative w-full aspect-[4/5]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
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
              sizes="50"
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
