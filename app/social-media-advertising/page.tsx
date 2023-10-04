"use client";
import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import SocialMAdvertHeader from "../components/SocialMAdvertHeader";
import SocialMAdvertCards from "../components/SocialMAdvertCards";

const page = () => {
  return (
    <div className="text-body-text-colour  ">
      <SocialMAdvertHeader />

      {/* CARDS */}

      <div className="bg-white t-b-padding">
        <div className="m-auto text-center w-[80%] pb-[80px]">
          <h3 className=" inline-block">
            Why Choose SBM for{" "}
            <span className="text-primary-blue">
              Social Media Advertising Service
              <strong className="text-primary-blue">.</strong>
            </span>
          </h3>
        </div>
        <SocialMAdvertCards />
      </div>

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
