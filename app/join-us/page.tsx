import React from "react";
import EligibilityCriteria from "../components/EligibilityCriteria";
import JoWfHero from "../components/JoWfHero";
import OurBrandmanagers from "../components/OurBrandmanagers";
import CtaComponent from "../components/CtaComponent";

export default function JoinOurWorkForce() {
  return (
    <>
      <div className="bg-white">
        <JoWfHero />
        <EligibilityCriteria />
        <OurBrandmanagers />
      </div>
      <div className="container-width">
        <CtaComponent />
      </div>
    </>
  );
}
