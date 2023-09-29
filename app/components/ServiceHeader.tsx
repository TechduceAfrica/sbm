import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
const ServiceHeader = () => {
  return (
    <div>
      <div className="sbm-service-title-box custom-container-max-width">
        <motion.h2 variants={fadeIn("right", "spring", 0.5, 0.75)}>
          Our <span className="text-primary-blue">strategic-driven </span>
          method will help your business exceed your expectations
          <strong className="text-primary-blue">.</strong>
        </motion.h2>
      </div>
      <div className="services-svg-bg ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="110"
          height="102"
          viewBox="0 0 110 102"
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

export default SectionWrapper(ServiceHeader, "");
