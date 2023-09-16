import React, { useState } from "react";

function Test() {
  const steps = [
    "HOME WORK",
    "RESPONSIVE PART",
    "Creative CREATIONS",
    "TESTIMONIALS PART",
    "OUR LOCATIONS",
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (stepIndex: any) => {
    setActiveStep(stepIndex);
  };

  return (
    <div className="App">
      <h1>Our Process</h1>
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            {steps.map((step, index) => (
              <li
                key={index}
                className={`step ${index === activeStep ? "active" : ""}`}
                onClick={() => handleStepClick(index)}
              >
                <div className="step-inner">{step}</div>
              </li>
            ))}
          </ul>
          <div id="line">
            <div
              id="line-progress"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        <div id="progress-content-section">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`section-content ${
                index === activeStep ? "active" : ""
              }`}
            >
              <h2>{step}</h2>
              <p>{/* Your content goes here */}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Test;
