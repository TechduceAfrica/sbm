import React from "react";
import PortfolioHeroSection from "../components/PortfolioHeroSection";
import PortfolioList from "../components/PortfolioList";

export default function Portfolio() {
  return (
    <div className="bg-secondary-blue text-body-text-colour mb-[50px] ">
      <div className="container-width portfolio-sec custom-container-max-width">
        <div>
          <PortfolioHeroSection />
        </div>
        <div>
          <PortfolioList />
        </div>
      </div>
    </div>
  );
}
