"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import Button from "../components/Button";

const Blog = () => {
  return (
    <div className="h-[75vh] w-[100vw] blog-content relative z-0 custom-container-width ">
      {/* <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
      <div className="w-full h-full  z-0 ">
        <motion.h1
          className="text-center text-primary-blue mb-[10px] text-[2em] lg:text-[3em]"
          variants={fadeIn("right", "spring", 0.5, 0.75)}
        >
          Coming Soon!
        </motion.h1>

        <motion.h3
          className="text-center text-body-text-colour mb-[60px] max-w-[810px] text-[24px] lg:text-[32px] m-3"
          variants={fadeIn("up", "spring", 1, 0.75)}
        >
          We are working to bring you the best tech news and opportunities
          accross Africa and the Globe.
        </motion.h3>
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "");
