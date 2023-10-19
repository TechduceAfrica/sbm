"use client";
import React from "react";
import AboutPageHeroSection from "../components/AboutPageHeroSection";
import AboutMissionSection from "../components/AboutMissionSection";
import AboutPageWorkspaceSection from "../components/AboutPageWorkspaceSection";
import CtaComponent from "../components/CtaComponent";

const About = () => {
  return (
    <div className="text-body-text-colour mb-[50px]">
      <AboutPageHeroSection />
      <AboutMissionSection />
      <AboutPageWorkspaceSection />
      <div className="container-width">
        <CtaComponent />
      </div>
    </div>
  );
};

export default About;
