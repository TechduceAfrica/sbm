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

      <div className="bg-white t-b-padding">
        <div className="m-auto text-center w-[80%] pb-[80px]">
          <h3 className=" inline-block">
            Why Choose SBM for{" "}
            <span className="text-primary-blue">
              Content Creation and Curation
              <strong className="text-primary-blue">.</strong>
            </span>
          </h3>
        </div>
        <Content2CCards />
      </div>

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
