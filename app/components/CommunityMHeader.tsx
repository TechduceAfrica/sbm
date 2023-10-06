"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const SocialMStrategyHeader = () => {
  return (
    <div className="relative flex flex-wrap justify-between items-center analytics-container t-b-padding px-[20px] lg:px-[80px]  pt-0 lg:pt-[150px] ">
      <div className="analytics-hero-text flex-col gap-5 flex">
        <motion.h3
          className="flex flex-wrap  max-w-[500px]"
          variants={fadeIn("right", "spring", 0, 0.75)}
        >
          Cultivate Your Brand’s Community With SBM’s
          <span className="text-primary-blue">
            Community Management Service<strong>.</strong>
          </span>
        </motion.h3>

        <motion.p
          className="flex flex-wrap max-w-[500px] mb-5"
          variants={fadeIn("right", "spring", 0.2, 0.75)}
        >
          Unlock your full potential of community management and watch your
          brand flourish.
        </motion.p>
      </div>
      <motion.div
        className="anlytics-image border-white border-[14px] shadow-[0px_4px_24px_rgba(0,_0,_0,_0.05)]"
        variants={fadeIn("left", "spring", 0.3, 0.75)}
      >
        <Image
          alt="Analytics and Report Image"
          src="https://assets-social-brand-managers.netlify.app/resized%20images/servicepagepic3.png"
          width={450}
          height={300}
        />
      </motion.div>
      <div className="absolute top-3 right-[52px] hidden lg:block">
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

export default SectionWrapper(SocialMStrategyHeader, "about");
