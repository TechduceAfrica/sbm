import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import AnalyticsCards from "../components/AnalyticsCards";
import AnalyticsHeader from "../components/AnalyticsHeader";

const page = () => {
  return (
    <div className="text-body-text-colour  ">
      <AnalyticsHeader />
      {/* CARDS */}
      <div className="bg-white py-[80px]">
        <div className="m-auto text-center w-[80%] pb-[80px]">
          <h3 className=" inline-block">
            Why Choose SBM for &nbsp;
            <span className="text-primary-blue">
              Analytics and Reports Service
              <strong className="text-primary-blue">.</strong>
            </span>
          </h3>
        </div>
        <AnalyticsCards />
      </div>
      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
