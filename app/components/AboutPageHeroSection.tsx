import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutPageHeroSection = () => {
  return (
    <div>
      {" "}
      <div className="bg-ghostwhite">
        {" "}
        <div className="container-width about-page-hero-section ">
          <div className="about-first-print">
            <div>
              <motion.h3
                className="text-center lg:text-left leading-8 lg:leading-[50px]"
                variants={fadeIn("", "", 0.7, 1)}
              >
                Our <span className="text-primary-blue">success</span> story has
                a roadmap
                <span className="text-primary-blue">.</span>
              </motion.h3>
            </div>
            <div className="about-pulse">
              <div className="circle-pulse-one"></div>
              <div className="circle-pulse-two"></div>
              <div className="circle-pulse-three"></div>
              <div className="circle-pulse-four"></div>
            </div>
          </div>
          <div>
            <p className="text-center lg:text-left">
              SBM is Techduce Africa's service aiding businesses <br /> in
              enhancing online presence and engagement via <br /> social media
              with customized solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutPageHeroSection, "");
