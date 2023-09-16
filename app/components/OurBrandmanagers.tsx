import React from "react";
import BrandManagerList from "./BrandManagerList";
import brandmanagers from "../constants";

export default function OurBrandmanagers() {
  return (
    <div className="bg-secondary-blue obm-container">
      <section className="container-width t-b-padding">
        <div className="obm-wrapper">
          <h3>Our Brand Managers</h3>
          <p>
            Meet our <span className="text-primary-blue">frontliners, </span>
            driving brand <span className="text-primary-blue">success </span>
            through social media.
          </p>
        </div>
        <div className="brandmanagerlist-wrapper">
          {brandmanagers.map((brandmanager, index) => (
            <BrandManagerList
              key={index}
              profileimg={brandmanager.profileimg}
              username={brandmanager.username}
              userprofilelink={brandmanager.userprofilelink}
              userportfoliolink={brandmanager.userportfoliolink}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
