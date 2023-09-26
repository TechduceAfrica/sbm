"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";
import Image from "next/image";

const Features = () => {
  return (
    <div className="m-auto p-3 custom-container-max-width">
      {" "}
      <section className="t-b-padding feature-section-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="105"
          height="101"
          viewBox="0 0 105 101"
          fill="none"
        >
          <rect
            x="44"
            y="101"
            width="44"
            height="44"
            transform="rotate(180 44 101)"
            fill="#A45A52"
          />
          <rect
            x="105"
            y="44"
            width="44"
            height="44"
            transform="rotate(180 105 44)"
            fill="#C2DDFF"
          />
          <circle
            cx="22"
            cy="22"
            r="22"
            transform="rotate(180 22 22)"
            fill="#479AFF"
          />
        </svg>
        <div className="feature-section-text">
          <h5 className="font-body-text-2 text-body-text-colour">Features</h5>
          <h3 className="font-semibold text-body-text-colour lg:text-[54px] md:text-[32px] text-[30px]">
            Why Our Clients Can't Stop{" "}
            <span className="pri-color">Loving </span>Us
            <span className="pri-color">.</span>
          </h3>
        </div>
        <div className="feature-section-img">
          <main>
            <div className="feature-hover-container-one">
              <div className="feature-hover feature-hover-one">
                <p>
                  We tailor social media strategies to fit your business,
                  industry, and goals.
                </p>
              </div>
              <div className="feature-hover feature-hover-two">
                <p>
                  We provide performance analytics and reports for data-driven
                  decisions.
                </p>
              </div>
            </div>
            <div className="feature-hover-container-two">
              <div className="feature-hover feature-hover-three">
                <p>
                  We monitor brand mentions, feedback, and industry trends for
                  insights.
                </p>
              </div>
              <div className="feature-hover feature-hover-four">
                <p>
                  We provide Initializing Data for social media, Collecting data
                  and insights.
                </p>
              </div>
            </div>
          </main>
        </div>
        <div className="bottom-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
          >
            <circle
              cx="22"
              cy="22.5"
              r="22"
              transform="rotate(180 22 22.5)"
              fill="#479AFF"
            />
          </svg>
          <svg
            width="44"
            height="45"
            viewBox="0 0 44 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="44"
              y="44.5"
              width="44"
              height="44"
              transform="rotate(180 44 44.5)"
              fill="#EAA29B"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Features;
