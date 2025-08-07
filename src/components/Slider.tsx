"use client";
import { Carousel } from "antd";
import Image from "next/image";

const images = [
  {
    src: "/assets/carousel/baby-child.jpg",
    alt: "Description of happy-parents",
  },
  {
    src: "/assets/carousel/baby-2416718_1280.jpg",
    alt: "Description of family-play",
  },
];

// autoplaySpeed={3000}
// autoplay
// infinite
export default function Slider() {
  return (
    <>
      <Carousel
        className="custom-carousel bg-[#F1F5F9]"
        arrows
        speed={1500}
        touchMove
        effect="fade"
        waitForAnimate
      >
        {images.map((image, index) => (
          <div
            className="relative w-full aspect-[16/9] max-h-[65vh]"
            key={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="100vw"
              priority={true}
              unoptimized
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
