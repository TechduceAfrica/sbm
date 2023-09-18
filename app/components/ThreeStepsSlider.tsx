"use client";
import React, { useState, useEffect } from "react";

const ThreeStepsSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide % 3) + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleNavigatorHover = (slideNumber: number) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className={`slide ${activeSlide === 1 ? "active" : ""} ${
            activeSlide === 3 ? "next" : ""
          }`}
        >
          <video autoPlay loop>
            <source
              src="https://socialbrandmanagers.com/assets/home%20page/STEP1.gif.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div
          className={`slide ${activeSlide === 2 ? "active" : ""} ${
            activeSlide === 1 ? "next" : ""
          }`}
        >
          <video autoPlay loop>
            <source
              src="https://socialbrandmanagers.com/assets/home%20page/SBM-STEP2.gif"
              type="video/mp4"
            />
          </video>
        </div>

        <div
          className={`slide ${activeSlide === 3 ? "active" : ""} ${
            activeSlide === 2 ? "next" : ""
          }`}
        >
          <video autoPlay loop>
            <source
              src="https://socialbrandmanagers.com/assets/home%20page/Social-brand-manager-STEP3.gif"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="slider-navigation">
        <div
          className={`navigator on ${activeSlide >= 1 ? "active" : ""} ${
            activeSlide === 2 ? "onflow" : ""
          } ${activeSlide === 3 ? "onflow" : ""}`}
          onMouseEnter={() => handleNavigatorHover(1)}
        >
          <div className="navigator-number num-flow">
            <span>1</span>
          </div>
          <div className="navigator-text">
            <p>Click the button to get started</p>
          </div>
        </div>

        <div
          className={`navigator nav-num-2 ${
            activeSlide === 2 ? "active" : ""
          } ${activeSlide === 3 ? "onflow on" : ""}`}
          onMouseEnter={() => handleNavigatorHover(2)}
        >
          <div className="navigator-number num-flow">
            <span>2</span>
          </div>
          <div className="navigator-text">
            <p>Simply fill the basic form</p>
          </div>
        </div>

        <div
          className={`navigator ${activeSlide === 3 ? "active" : ""}`}
          onMouseEnter={() => handleNavigatorHover(3)}
        >
          <div className="navigator-number">
            <span>3</span>
          </div>
          <div className="navigator-text">
            <p>Sit and relax while we take it up</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeStepsSlider;
