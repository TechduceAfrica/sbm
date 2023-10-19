"use client";
import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import SectionWrapper from "../hoc/SectionWrapper";
import CommunityMHeader from "../components/CommunityMHeader";
import CommunityMCard from "../components/CommunityMCard";

const page = () => {
  return (
    <div className="text-body-text-colour mb-[50px] ">
      <CommunityMHeader />

      {/* CARDS */}

      <CommunityMCard />

      <ServiceNextPageCTA />
    </div>
  );
};

export default SectionWrapper(page, "");
