"use client";

import React from "react";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";

function JoWfHero() {
  return (
    <div className="bg-secondary-blue jowfhero-wrapper">
      <section className="jowfhero-container container-width t-b-padding custom-container-max-width">
        <div>
          <motion.h2
            className="pt-[80px] max-w-[300px] lg:max-w-none"
            variants={fadeIn("down", "spring", 0.1, 0.75)}
          >
            <span className="text-primary-blue">Join</span> us. Make a{" "}
            <span className="text-primary-blue">Difference.</span>
          </motion.h2>
          <motion.p
            className="max-w-[300px] lg:max-w-none"
            variants={fadeIn("right", "spring", 0.2, 0.75)}
          >
            Explore collaborative opportunities with a dynamic team, unlock your
            potential, and contribute to impactful projects for positive change.
          </motion.p>
        </div>
        <motion.div variants={fadeIn("left", "spring", 0.3, 0.75)}>
          <img
            src="https://assets-social-brand-managers.netlify.app/Join%20Our%20Workforce/social-brand-manager_SBM_Join%20Our%20Work%20Force.webp"
            alt="Join social brand manager workforce today"
            title="Join social brand manager workforce today"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default SectionWrapper(JoWfHero, "");
