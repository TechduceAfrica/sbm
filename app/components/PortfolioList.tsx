import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioProjectsLeft = [
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib is a trusted baby supplies retailer committed to provide parents and other carers high-quality stuff for their little ones. ",
    projectimage:
      "https://assets-social-brand-managers.netlify.app/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
    whatwedid: "We created engaging social media posts showcasing products in stock that drives results. We increased engagement by 30%.",
    projectyear: "2021 - 2022",
    projecthandle: "@bebiscrib",
  },
  {
    title: "Perfect Scents",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets-social-brand-managers.netlify.app/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
    whatwedid: "",
    projectyear: "",
    projecthandle: "@bebiscrib",
  },
];

const PortfolioProjectsRight = [
  {
    title: "Glamour Lounge",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets-social-brand-managers.netlify.app/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
    whatwedid: "",
    projectyear: "",
    projecthandle: "@bebiscrib",
  },
  {
    title: "Montana",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets-social-brand-managers.netlify.app/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
    whatwedid: "",
    projectyear: "",
    projecthandle: "@bebiscrib",
  },
];

export default function PorfolioList() {
  return (
    <div>
      <div className="portifolio-card-list">
        <div>
          {PortfolioProjectsLeft.map((portfolioproject, index) => (
            <PortfolioItem
              key={index}
              sbmprojectname={portfolioproject.title}
              clientname={portfolioproject.clientname}
              projectdescription={portfolioproject.titledescription}
              imageurl={portfolioproject.projectimage}
              url={portfolioproject.projecturl}
              projecthandle={portfolioproject.projecthandle}
            />
          ))}
        </div>
        <div className="project-cards-right">
          {PortfolioProjectsRight.map((portfolioproject, index) => (
            <PortfolioItem
              key={index}
              sbmprojectname={portfolioproject.title}
              clientname={portfolioproject.clientname}
              projectdescription={portfolioproject.titledescription}
              imageurl={portfolioproject.projectimage}
              url={portfolioproject.projecturl}
              projecthandle={portfolioproject.projecthandle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
