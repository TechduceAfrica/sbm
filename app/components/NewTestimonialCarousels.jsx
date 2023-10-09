"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import TestimonialCard from "./TestimonialCard";

export default function NewTestimonialCarousels() {

    

        const testimonial = [
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
    <div>
      <Swiper
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={8000}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        modules={[Autoplay]}
      >
        {testimonial.map((testimonial, index) => (
          <SwiperSlide>
            <TestimonialCard
              key={index}
              imgurl={testimonial.imageUrl}
              clientname={testimonial.clientName}
              testimony={testimonial.testimony}
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide> */}
      </Swiper>
    </div>
  )
};
