"use client";
import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import BrandManagementHeader from "../components/BrandManagementHeader";
import BrandManagementCards from "../components/BrandManagementCards";

const page = () => {
  return (
    <div className="text-body-text-colour  ">
      <BrandManagementHeader />

      {/* CARDS */}

      <div className="bg-white t-b-padding">
        <div className="m-auto text-center w-[80%] pb-[80px]">
          <h3 className=" inline-block">
            Why Choose SBM for{" "}
            <span className="text-primary-blue">
              Brand Management Services{" "}
              <strong className="text-primary-blue">.</strong>
            </span>
          </h3>
        </div>
        <BrandManagementCards />
      </div>

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
