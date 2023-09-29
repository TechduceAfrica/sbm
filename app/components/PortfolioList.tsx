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
      "Perfect Scent is a well-known perfume company known for its luxurious and delicate scents. They are an expression of uniqueness and classic beauty.",
    projectimage:
      "https://assets-social-brand-managers.netlify.app/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
    whatwedid: "We increased engagement and followership by 40%. Our main focus on user satisfaction led to higher engagement and conversions.",
    projectyear: "2022 - Till date",
    projecthandle: "@bebiscrib",
  },
];

const PortfolioProjectsRight = [
  {
    title: "Glamour Lounge",
    clientname: "Ademola Joshua",
    titledescription:
      "Glamour lounge is a Salon and Spa company dedicated to providing an unforgettable experience in an environment of unparalleled relaxation and sophistication.",
    projectimage:
      "https://assets-social-brand-managers.netlify.app/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
    whatwedid: "We increased engagement by 35%. Our focus on user satisfaction led to higher engagement and conversions.",
    projectyear: "2020 - Till date",
    projecthandle: "@bebiscrib",
  },
  {
    title: "Montana",
    clientname: "Ademola Joshua",
    titledescription:
      "Montana Residence is a luxurious and exquisite hotel. With its stunning architecture, world-class amenities and unparalleled hospitality, Montana Residence has become a haven for travelers seeking a truly exceptional getaway.",
    projectimage:
      "https://assets-social-brand-managers.netlify.app/Portfolio%20Page/portfolioImg.webp",
    projecturl: "/",
    whatwedid: "We increased engagement and followership by 40%. Our main focus on user satisfaction led to higher engagement and conversions.",
    projectyear: "2023 - Till date",
    projecthandle: "@montana",
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
              whatwedid={portfolioproject.whatwedid}
              projectyear={portfolioproject.projectyear}
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
