import React from "react";
import Button from "./Button";

const ServiceNextPageCTA = () => {
  return (
    <div className="bg-secondary-blue t-b-padding full-width-snp-cta relative">
      <div className=" snp-cta-container custom-container-max-width ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="166"
            height="44"
            viewBox="0 0 166 44"
            fill="none"
          >
            <rect
              x="166"
              y="44"
              width="44"
              height="44"
              transform="rotate(-180 166 44)"
              fill="#006EF5"
            />
            <rect
              x="105"
              y="44"
              width="44"
              height="44"
              transform="rotate(-180 105 44)"
              fill="#D6ADA7"
            />
            <circle
              cx="22"
              cy="22"
              r="22"
              transform="rotate(-180 22 22)"
              fill="#479AFF"
            />
          </svg>
        </div>

        <div className="justify-center items-center flex flex-col gap-5 mt-5">
          <h3 className="inline-block text-center">
            Your Brand Story{" "}
            <span className="text-primary-blue">Starts Here</span> With{" "}
            <span className="text-primary-blue">SBM</span>
          </h3>
          <p className="text-body-text-colour inline-block text-center">
            Let us embark on a journey of digital success together
          </p>
          <Button title="Get Started" />
        </div>

        <div className="absolute bottom-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="185"
            viewBox="0 0 212 185"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clip-rule="evenodd"
              d="M103.384 0.0605255C133.621 -0.889493 163.59 9.32429 183.455 32.1111C204.393 56.129 219.955 90.2743 207.634 119.646C196.305 146.655 158.76 143.277 131.9 155.02C107.324 165.764 86.8768 190.873 61.0154 183.747C31.296 175.557 8.02054 149.199 1.53563 119.099C-4.87055 89.3633 9.60532 60.0755 29.3899 36.9516C48.2311 14.9304 74.3945 0.971321 103.384 0.0605255Z"
              fill="#E3CCC9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceNextPageCTA;
