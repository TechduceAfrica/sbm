import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import SocialMStrategyCards from "../components/SocialMStrategyCards";
import SocialMStrategyHeader from "../components/SocialMStrategyHeader";

const page = () => {
  return (
    <div className="text-body-text-colour mb-[50px] ">
      <SocialMStrategyHeader />

      {/* CARDS */}

      <SocialMStrategyCards />

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
