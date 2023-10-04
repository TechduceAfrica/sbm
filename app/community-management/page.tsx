"use client";
import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import SectionWrapper from "../hoc/SectionWrapper";
import CommunityMHeader from "../components/CommunityMHeader";
import CommunityMCard from "../components/CommunityMCard";

const page = () => {
  return (
    <div className="text-body-text-colour  ">
      <CommunityMHeader />

      {/* CARDS */}

      <div className="bg-white t-b-padding">
        <div className="m-auto text-center w-[80%] pb-[80px]">
          <h3 className=" inline-block">
            Why Choose SBM for {""}
            <span className="text-primary-blue">
              Community Management Service
              <strong className="text-primary-blue">.</strong>
            </span>
          </h3>
        </div>
        <CommunityMCard />
      </div>

      <ServiceNextPageCTA />
    </div>
  );
};

export default SectionWrapper(page, "");
