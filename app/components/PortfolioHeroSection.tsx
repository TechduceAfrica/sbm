"use client";
import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function PortfolioHeroSection() {
  return (
    <div className="bg-secondary-blue t-b-padding portfolio-hero-sec">
      <div className="custom-container-max-width">
        <motion.h2
          className="min-width[589px]"
          variants={fadeIn("up", "spring", 0.1, 0.75)}
        >
          We'll stay mute while our{" "}
          <span className="text-primary-blue">portfolio</span> do the talking
          <strong className="text-primary-blue">.</strong>
        </motion.h2>
      </div>
      <motion.div
        className="hidden lg:block"
        variants={fadeIn("", "", 0.9, 0.75)}
      >
        <svg
          width="272"
          height="132"
          viewBox="0 0 372 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="65.25" width="81.56" height="81.56" fill="#005CCC" />
          <circle cx="330.78" cy="190.78" r="40.78" fill="#E3CCC9" />
          <path d="M223.78 0L259.097 61.17H188.463L223.78 0Z" fill="#A45A52" />
        </svg>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(PortfolioHeroSection, "");
