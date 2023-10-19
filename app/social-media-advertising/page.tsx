"use client";
import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import SocialMAdvertHeader from "../components/SocialMAdvertHeader";
import SocialMAdvertCards from "../components/SocialMAdvertCards";

const page = () => {
  return (
    <div className="text-body-text-colour mb-[50px] ">
      <SocialMAdvertHeader />

      {/* CARDS */}

      <SocialMAdvertCards />

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
