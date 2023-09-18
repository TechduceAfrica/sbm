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
      testimony:
        "SBM has never failed me once, my business sales is top notch.",
    },
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic2.svg",
      clientName: "Bebis Crib",
      testimony:
        "These guys are one of a kind, they gave me more than what i wanted.",
    },
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic1.svg",
      clientName: "Data Adie",
      testimony:
        "SBM has never failed me once, my business sales is top notch.",
    },
    {
      imageUrl:
        "https://assets-social-brand-managers.netlify.app/resized%20images/client-pic1.svg",
      clientName: "Data Adie",
      testimony:
        "SBM has never failed me once, my business sales is top notch.",
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
        <h2 className="font-semibold text-body-text-colour lg:text-[54px] md:text-[32px] text-[24px]">
          Our clients say a <br />
          lot about our work
        </h2>
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
