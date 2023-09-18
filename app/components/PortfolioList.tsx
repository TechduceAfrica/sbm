import React from "react";
import PortfolioItem from "./PortfolioItem";

const PortfolioProjectsLeft = [
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets.socialbrandmanagers.com/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
  },
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets.socialbrandmanagers.com/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
  },
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets.socialbrandmanagers.com/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
  },
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets.socialbrandmanagers.com/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
  },
];

const PortfolioProjectsRight = [
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets.socialbrandmanagers.com/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
  },
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets.socialbrandmanagers.com/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
  },
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets.socialbrandmanagers.com/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
  },
  {
    title: "Bebis Crib",
    clientname: "Ademola Joshua",
    titledescription:
      "Bebis Crib sure has all the gear to give the Once upon a child experience.",
    projectimage:
      "https://assets.socialbrandmanagers.com/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
