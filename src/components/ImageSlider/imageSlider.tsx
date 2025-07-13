"use client";
import { useState } from "react";
import SliderHeader from "../ImageSlider/sliderHeader";
import SliderArrows from "../ImageSlider/sliderArrows";
import SliderImage from "../ImageSlider/sliderImage";
import SliderText from "../ImageSlider/sliderText";
import SliderDots from "../ImageSlider/sliderDots";

export type ImageType = {
  url: string;
  title: string;
  subtitle: string;
  description: string;
};

type ImageSliderProps = {
  images: ImageType[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container mx-auto px-4 mb-10 max-w-screen-xl">
      <div className="flex flex-col items-center mt-20">
        <SliderHeader />

        <div className="relative w-full flex flex-col items-center mt-12 sm:mt-16">
          <SliderArrows onPrevious={handlePrevious} onNext={handleNext} />

          <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full items-stretch">
            <SliderImage images={images} currentSlide={currentSlide} />
            <SliderText image={images[currentSlide]} />
          </div>

          <SliderDots
            count={images.length}
            current={currentSlide}
            setCurrent={setCurrentSlide}
          />
        </div>
      </div>
    </div>
  );
}
