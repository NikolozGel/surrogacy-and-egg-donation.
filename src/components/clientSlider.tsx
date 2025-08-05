"use client";
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SliderDots from "./ImageSlider/sliderDots";
import leftImage from "../../public/assets/images/SliderLeft.png";

const images = [
  {
    url: "/assets/images/women.jpg",
    title: "title",
    subtitle: "subtitle",
    description: "description",
    rating: 5,
  },
  {
    url: "/assets/images/women-2.jpg",
    title: "title",
    subtitle: "subtitle",
    description: "description",
    rating: 4,
  },
];

export default function ClientSlider() {
  const [currentImage, setCurrentImage] = useState(0);
  const t = useTranslations("sliderImage");

  function handlePrevious() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:gap-50">
      <Image
        src={leftImage}
        width={400}
        height={400}
        alt="ImageLEft"
        className="hidden lg:block"
      />
      <div>
        <h2 className="font-bold text-xl text-gray-700 sm:text-3xl lg:text-3xl mb-4">
          What Our Client Says
        </h2>

        <div className="bg-[#d5f5ec] rounded-lg mb-5 pb-3">
          <div className="flex items-center gap-3 pt-6 pl-6">
            <div className="relative w-[70px] h-[70px] rounded-full flex items-center justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    currentImage === index
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    fill
                    quality={100}
                    priority={index === 0}
                    className="rounded-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-lg font-bold">
                {t(images[currentImage].title)}
              </p>
              <p className="text-[15px]">{t(images[currentImage].subtitle)}</p>
            </div>
          </div>
          <div className="px-6 mt-3 text-md lg:text-lg">
            <p>{t(images[currentImage].description)}</p>
          </div>
          <div className="px-6 pb-4 mt-3 flex gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <FaStar
                key={index}
                size={26}
                color={
                  index < images[currentImage].rating ? "orange" : "#e0e0e0"
                }
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mb-20">
          <BsArrowLeftCircleFill
            onClick={handlePrevious}
            size={30}
            color="#008E8A"
            className="mt-5 cursor-pointer"
          />
          <SliderDots
            count={images.length}
            current={currentImage}
            setCurrent={setCurrentImage}
          />
          <BsArrowRightCircleFill
            onClick={handleNext}
            size={30}
            color="#008E8A"
            className="mt-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
