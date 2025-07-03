"use client";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Image from "next/image";

type ImageType = {
  url: string;
  title: string;
  subtitle: string;
  description: string;
};

export default function ImageSlider({
  url = "/api/photos",
  limit = 5,
  page = 1,
}) {
  const [images, setImages] = useState<ImageType[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl: string) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      setImages(data);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setErrorMsg(e.message);
      }
    } finally {
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading)
    return <div className="text-center py-8">Loading, please wait...</div>;
  if (errorMsg)
    return (
      <div className="text-center text-red-500 py-8">Error: {errorMsg}</div>
    );

  return (
    <div className="container mx-auto px-4 mb-10 max-w-screen-xl">
      <div className="flex flex-col items-center mt-24">
        {/* Header */}
        <section className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            We know what{" "}
            <span className="text-[#FCCB40]">You&apos;re going through</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            At Fertility Options, our achievements are reflected in the lives we
            help transform...
          </p>
        </section>

        {/* Slider Container */}
        <div className="relative w-full flex flex-col items-center mt-16">
          {/* Arrows */}
          <div className="absolute top-[-70px] right-4 flex gap-4 md:top-[-50px] md:right-6">
            <BsArrowLeftCircleFill
              onClick={handlePrevious}
              className="text-4xl text-white drop-shadow cursor-pointer hover:text-[#A5D761]"
            />
            <BsArrowRightCircleFill
              onClick={handleNext}
              className="text-4xl text-white drop-shadow cursor-pointer hover:text-[#A5D761]"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-stretch md:gap-12 w-full">
            {/* Image */}
            <div className="relative w-full md:w-1/4 rounded-2xl">
              {/* ვაძლევთ კონკრეტულ სიმაღლეს */}
              <div className="relative h-[400px]">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      currentSlide === index
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={`Slide ${index + 1}`}
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Text Block */}
            <div className="w-full md:w-1/2 xl:w-[65%] bg-[#323232] text-white p-6 rounded-2xl mt-6 md:mt-0 flex flex-col justify-around">
              {images[currentSlide] && (
                <>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg md:text-3xl">
                      {images[currentSlide].title}
                    </h3>
                    <p className="text-[#A6D761] font-bold md:text-xl">
                      Success Story
                    </p>
                  </div>
                  <h4 className="mt-1 text-gray-300 ">
                    {images[currentSlide].subtitle}
                  </h4>
                  <p className="mt-3 text-gray-300">
                    {images[currentSlide].description}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-5 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition cursor-pointer ${
                  currentSlide === index ? "bg-[#A6D761]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
