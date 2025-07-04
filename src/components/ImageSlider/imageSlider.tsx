"use client";
import { useEffect, useState } from "react";
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
    if (url) fetchImages(url);
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
