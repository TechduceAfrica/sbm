import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import SocialMStrategyCards from "../components/SocialMStrategyCards";
import SocialMStrategyHeader from "../components/SocialMStrategyHeader";

const page = () => {
  return (
    <div className="text-body-text-colour  ">
      <SocialMStrategyHeader />

      {/* CARDS */}

      <div className="bg-white t-b-padding">
        <div className="m-auto text-center w-[80%] pb-[80px]">
          <h3 className=" inline-block">
            Why Choose SBM for{" "}
            <span className="text-primary-blue">
              Social Media Strategy Development
              <strong className="text-primary-blue">.</strong>
            </span>
          </h3>
        </div>

        <SocialMStrategyCards />
      </div>

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
