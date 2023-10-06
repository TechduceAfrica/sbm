"use client";
import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import Content2CHeader from "../components/Content2CHeader";
import Content2CCards from "../components/Content2CCards";

const page = () => {
  return (
    <div className="text-body-text-colour  ">
      <Content2CHeader />

      {/* CARDS */}

      <Content2CCards />

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
