"use client";
import React from "react";
import ThreeStepsSlider from "./ThreeStepsSlider";

export default function ThreeSteps() {
  return (
    <div className="t-b-padding">
      <section className="custom-container-max-width">
        <div className="home-threeslide-heading">
          <h3>
            Let's seal the deal in just{" "}
            <span className="text-primary-blue">3 easy steps.</span>
          </h3>
        </div>
        <div>
          <ThreeStepsSlider />
        </div>
      </section>
    </div>
  );
}
