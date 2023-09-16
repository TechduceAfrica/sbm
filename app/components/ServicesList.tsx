"use client";
import React from "react";
import Service from "./Service";
import { sbmServices } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ServicesList = () => {
  return (
    <div>
      <div>
        {sbmServices.map((sbmService, index) => (
          <Service
            key={index}
            image={sbmService.image}
            title={sbmService.title}
            text={sbmService.text}
            url={sbmService.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ServicesList, "");
