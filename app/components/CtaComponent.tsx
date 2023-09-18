"use client";
import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const CtaComponent = () => {
  return (
    <div className="bg-secondary-blue t-b-padding full-width-sbm-cta">
      <div className=" sbm-cta-container custom-container-max-width">
        <motion.h3 variants={fadeIn("", "", 0.7, 1)}>
          Not convinced yet<strong className="text-primary-blue">?</strong>
        </motion.h3>
        <p>See what we've done</p>
        <a href="/">
          <div className="btn-container-ani">
            View portfolio <span className="btn-icon-ani">→</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(CtaComponent, "");
