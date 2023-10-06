import React from "react";
import ServiceNextPageCTA from "../components/ServiceNextPageCTA";

import AnalyticsCards from "../components/AnalyticsCards";
import AnalyticsHeader from "../components/AnalyticsHeader";

const page = () => {
  return (
    <div className="text-body-text-colour  ">
      <AnalyticsHeader />
      {/* CARDS */}

      <AnalyticsCards />

      <ServiceNextPageCTA />
    </div>
  );
};

export default page;
