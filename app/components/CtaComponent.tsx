"use client";
import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const CtaComponent = () => {
  return (
    <div className="bg-secondary-blue t-b-padding full-width-sbm-cta">
      <div className=" sbm-cta-container custom-container-max-width">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="166" height="44" viewBox="0 0 166 44" fill="none">
            <rect x="166" y="44" width="44" height="44" transform="rotate(-180 166 44)" fill="#006EF5"/>
            <rect x="105" y="44" width="44" height="44" transform="rotate(-180 105 44)" fill="#D6ADA7"/>
            <circle cx="22" cy="22" r="22" transform="rotate(-180 22 22)" fill="#479AFF"/>
          </svg>
        </div>
        <div>
          <motion.h3 variants={fadeIn("", "", 0.7, 1)}>
            Not convinced yet<strong className="text-primary-blue">?</strong>
          </motion.h3>
          <p>See what we've done</p>
          <a href="/portfolio" title="goto SBM portfolio page">
            <div className="btn-container-ani">
              View portfolio <span className="btn-icon-ani">→</span>
            </div>
          </a>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="212" height="185" viewBox="0 0 212 185" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M103.384 0.0605255C133.621 -0.889493 163.59 9.32429 183.455 32.1111C204.393 56.129 219.955 90.2743 207.634 119.646C196.305 146.655 158.76 143.277 131.9 155.02C107.324 165.764 86.8768 190.873 61.0154 183.747C31.296 175.557 8.02054 149.199 1.53563 119.099C-4.87055 89.3633 9.60532 60.0755 29.3899 36.9516C48.2311 14.9304 74.3945 0.971321 103.384 0.0605255Z" fill="#E3CCC9"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(CtaComponent, "");
