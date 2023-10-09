"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const AnalyticsHeader = () => {
  return (
    <div className="relative custom-container-max-width flex  gap-8 items-center  t-b-padding   pt-0 lg:pt-[150px] ">
      <div className="analytics-container analytics-hero-text">
        <motion.h3 className=" " variants={fadeIn("right", "spring", 0, 0.75)}>
          Empower Your Brand With Actionable Insights with SBM’s {""}
          <span className="text-primary-blue">
            Analytics and Reports Service<strong>.</strong>
          </span>
        </motion.h3>

        <motion.p
          className=" my-5"
          variants={fadeIn("right", "spring", 0.2, 0.75)}
        >
          Don’t navigate the digital space blindly, let us illuminate your path
          to success.
        </motion.p>
      </div>
      <motion.div
        className="anlytics-image rounded-[20px]  analytics-container flex justify-end"
        variants={fadeIn("left", "spring", 0.3, 0.75)}
      >
        <img
          alt="Analytics and Report Image"
          src="https://assets-social-brand-managers.netlify.app/resized%20images/servicepagepic2.png"
          className="rounded-[20px] shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]"
        />
      </motion.div>

      <div className="absolute top-3 right-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="103"
          viewBox="0 0 110 103"
          fill="none"
        >
          <motion.rect
            x="66"
            y="58"
            width="44"
            height="44"
            fill="#1F84FF"
            variants={fadeIn("left", "spring", 0.5, 0.75)}
          />
          <motion.rect
            y="58"
            width="44"
            height="44"
            fill="#A45A52"
            variants={fadeIn("right", "spring", 0.5, 0.75)}
          />
          <motion.rect
            x="66"
            width="44"
            height="44"
            fill="#E3CCC9"
            variants={fadeIn("down", "spring", 0.5, 0.75)}
          />
        </svg>
      </div>
    </div>
  );
};

export default SectionWrapper(AnalyticsHeader, "about");
