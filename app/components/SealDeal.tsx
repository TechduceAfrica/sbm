"use client";
import React, { useState } from "react";

const SealDeal = () => {
  const steps = ["", "", ""];
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
  };

  const videos = [
    "https://socialbrandmanagers.com/assets/resized%20images/slider-step-1.mp4",
    "https://socialbrandmanagers.com/assets/resized%20images/slider-step-3.mp4",
    "https://socialbrandmanagers.com/assets/resized%20images/slider-step-1.mp4",
  ];

  return (
    <div className="bg-[#F5FAFF] pt-20 pb-[100px] hidden lg:block">
      <div className="text-center">
        <h2 className="font-semibold text-body-text-colour lg:text-[54px] md:text-[32px] text-[24px]">
          Let's Seal the Deal in just{" "}
          <span className="text-primary-blue">3 easy steps</span>
          <strong className="text-primary-blue">.</strong>
        </h2>
      </div>

      {/* INTERACTION */}
      <div id="progressbarContainer" className="relative ">
        <div className="absolute top-[470px] left-[calc(50%_-_460.5px)] rounded-[50%] bg-[#d4d4d4] [filter:blur(57px)] w-[592px] h-[104px]" />

        <ul className="list-container flex flex-col gap-[150px] absolute right-[338px] top-[0px]">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`step ${index === activeStep ? "active" : ""} ${
                index === 0 ? "line1" : index === 1 ? "line2" : "line3"
              }`}
              onClick={() => handleStepClick(index)}
            >
              <div className="step-inner">{step}</div>
            </li>
          ))}
        </ul>

        <div id="line">
          <div
            id="line-progress"
            style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
        <div className="texts gap-[150px] flex flex-col left-[807px] absolute top-[40px]">
          <p>
            Click the button <br />
            to get started.
          </p>
          <p>
            Simply fill out the basic <br />
            form.
          </p>
          <p>
            Sit back and relax while we <br /> take it from there.
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="absolute progressBarImage bg-transparent border-[20px] border-[#736E6E] top-[100px] left-[100px] w-[601px] h-[394px] rounded-[80px] overflow-hidden">
            {activeStep >= 0 && activeStep < videos.length && (
              <>
                <video
                  width="601"
                  height="394"
                  autoPlay
                  loop
                  controls // Added controls for video playback
                  className="slider-image"
                >
                  <source src={videos[activeStep]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SealDeal;
