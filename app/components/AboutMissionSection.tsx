import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AboutMissionSection = () => {
  return (
    <div className="bg-secondary-blue t-b-padding">
      <div className="container-width">
        <section className="abt-mission-sec">
          <div>
            <div>
              <motion.h3
                className="text-center lg:text-left"
                variants={fadeIn("", "", 0.7, 1)}
              >
                Our Mission
              </motion.h3>
            </div>
            <div>
              <p className="text-center lg:text-left">
                Our mission is to harness the power of technology to transform
                the way business operate. We ultimately aim to build a legacy of
                wealth and impact through our passion for technology and a
                commitment to helping others.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://socialbrandmanagers.com/assets/AboutPage%20Images/our%20mission%20images_SBM.png"
              alt="social brand manager mission"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMissionSection, "");
