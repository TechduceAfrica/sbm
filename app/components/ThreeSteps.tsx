"use client";
import React from "react";
import ThreeStepsSlider from "./ThreeStepsSlider";
import Button from "./Button";

export default function ThreeSteps() {
  return (
    <div className="t-b-padding bg-[#f5faff]">
      <section className="custom-container-max-width">
        <div className="home-threeslide-heading">
          <h3>
            Let's seal the deal in just <br />
            <span className="text-primary-blue">3 easy steps.</span>
          </h3>
        </div>
        <div>
          <ThreeStepsSlider />
        </div>
        <div className="flex justify-center">
          <a href="/form">
            <Button title="Get Started" />
          </a>
        </div>
      </section>
    </div>
  );
}
