"use client";
import React from "react";
import CtaComponent from "../components/CtaComponent";
import ServicesList from "../components/ServicesList";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import ServiceHeader from "../components/ServiceHeader";
import Modalpage from "../components/Modalpage";

const Services = () => {
  return (
    <div className="bg-secondary-blue text-body-text-colour">
      <div className="container-width p-5 sbm-service-container">
        <ServiceHeader />
        <section>
          <ServicesList />
        </section>
        <CtaComponent />
      </div>
    </div>
  );
};

export default Services;
