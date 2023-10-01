import React from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic1.svg",
      clientName: "Data Adie",
      testimony: `As a small business owner, I needed help with social media marketing. Social Brand 
                  Managers connected me with a skilled manager who has increased my brand's visibility.`,
    },
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic2.svg",
      clientName: "Bebis Crib",
      testimony: `Social Brand Managers saved me time and effort in finding the right content creators 
            for my tech company. The results have been outstanding, and I'm grateful for their service.`,
    },
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic1.svg",
      clientName: "Ifeoma Okonkwo",
      testimony: `Thanks to Social Brand Managers, I found an amazing social media manager who 
                  increased my brand's engagement and brought in more customers. Highly recommended!`,
    },
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic1.svg",
      clientName: "Olumide Ogundipe",
      testimony: `The team at Social Brand Managers made the hiring process so smooth. I found a 
          creative content creator who has elevated my brand's online presence beyond my expectations.`,
    },
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic1.svg",
      clientName: "Ngozi Eze",
      testimony:
        `Social Brand Managers is a game-changer! I hired a social media manager who has boosted my 
          restaurant's online following and brought in more customers. Kudos to the team!`,
    },
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic1.svg",
      clientName: "Tolu Adeyemi",
      testimony:
        `I needed a reliable social media manager for my startup, and Social Brand Managers delivered. 
          They matched me with a professional who understands my industry and goals perfectly.`,
    },
  ];
  return (
    <div className="container-width text-body-text-colour">
      <div className=" home-features-text gap-3 pt-[50px] text-center">
        <h5 className="font-body-text-2 text-primary-blue">
          Our Clients’ success stories
        </h5>
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-body-text-colour lg:text-[54px] md:text-[32px] text-[30px]">
          Our clients say a <br />
          lot about our work<strong className="text-primary-blue">.</strong>
        </h3>
      </div>

      <div className="testimonial-cards-wrapper">
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              imgurl={testimonial.imageUrl}
              clientname={testimonial.clientName}
              testimony={testimonial.testimony}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
