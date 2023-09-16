import React from "react";

export default function PortfolioItem(props: any) {
  return (
    <div className="portfolio-card">
      <h4>{props.sbmprojectname}</h4>
      <div className="portfolio-card-name">
        <h5>{props.clientname}</h5>
        <p>Client</p>
      </div>
      <div className="portfolio-card-data">
        <p className="portfolio-card-dec">{props.projectdescription}</p>
        <a href={props.url}>See More</a>
      </div>
      <div className="portfolio-card-img">
        <img src={props.imageurl} alt={props.sbmprojectname} />
      </div>
    </div>
  );
}
