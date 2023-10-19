"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

const Blog = () => {
  return (
    <div className="h-[50vh] w-[100vw] blog-content relative z-0 ">
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
          className="text-center text-primary-blue"
          variants={fadeIn("right", "spring", 0.5, 0.75)}
        >
          Coming Soon!
        </motion.h1>
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "");
