"use client";
import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import BrandManagementHeader from "../components/BrandManagementHeader";
import BrandManagementCards from "../components/BrandManagementCards";

const page = () => {
  return (
    <div className="text-body-text-colour mb-[50px] ">
      <BrandManagementHeader />

      {/* CARDS */}

      <BrandManagementCards />

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
