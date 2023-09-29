"use client";
// import { useEffect, useState } from "react";
import { PhoneSlides } from "../constants";

function Carousel() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const autoSlideInterval = setInterval(nextSlide, 15000); // Change slide every 15 seconds

  //   return () => {
  //     clearInterval(autoSlideInterval);
  //   };
  // }, []);

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? PhoneSlides.length - 1 : prevIndex - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === PhoneSlides.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const slideStyle = {
  //   transform: `translateX(-${currentIndex * 100}%)`,
  //   transition: "transform 15s ease-out",
  // };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        {/* <div className="flex" style={slideStyle}> */}
        <div className="flex">
          {PhoneSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              title={slide.alt}
              className="w-full h-full object-cover"
            />
          ))}
          {PhoneSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.src}
              alt={slide.alt}
              title={slide.alt}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
      {/* <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full opacity-70 hover:opacity-100"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded-full opacity-70 hover:opacity-100"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button> */}
    </div>
  );
}

export default Carousel;
