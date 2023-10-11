"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SlidePhoneSingle from "./SlidePhoneSingle";

export default function PhoneMockupCarousel() {

    const PhoneSlides = [
        {
          src: "https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/PerfectScentdesignerperfumes.webp",
          clientName: "Perfect Scents Designer Perfumes",
        },
        {
          src: "https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Bebiscrib%20social%20media%20page%20instagram.webp",
          clientName: "Bebis cribs",
        },
        {
          src: "https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Glamour%20Lounge%20and%20Spa%20social%20media%20page%20Instagram.webp",
          clientName: "Glamour Lounge and Spa",
        },
        {
          src: "https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Montana%20Residence%20Social%20media%20page%20Instagram.webp",
          clientName: "Montana Residence",
        },
        {
          src: "https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Ducecampaign%20Instagram%20page.webp",
          clientName: "Ducecampaign",
        },
        {
          src: "https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Ducehost%20instagram%20page.webp",
          clientName: "Ducehost",
        },
      ];

  return (
    <div className='phonemockupcarousel-phoneslide-wrapper'>
        <Swiper
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
            speed={8000}
            loop={true}
            spaceBetween={30}
            slidesPerView={4}
            modules={[Autoplay]}
        >
            {/* {PhoneSlides.map((slide, index) => (
                <SwiperSlide>
                    <SlidePhoneSingle
                        key={index}
                        src={slide.src}
                        clientname={slide.clientName}
                    />
                </SwiperSlide>
            ))} */}
            <SwiperSlide>
                <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/PerfectScentdesignerperfumes.webp" 
                    alt="Perfect Scent"
                    title='Perfect Scent' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Bebiscrib%20social%20media%20page%20instagram.webp" 
                    alt="Bebis Crib"
                    title='Bebis Crib' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Glamour%20Lounge%20and%20Spa%20social%20media%20page%20Instagram.webp" 
                    alt="Glamour Lounge"
                    title='Glamour Lounge' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Montana%20Residence%20Social%20media%20page%20Instagram.webp" 
                    alt="Montana Residence"
                    title='Montana Residence' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Ducecampaign%20Instagram%20page.webp" 
                    alt="Ducecampaign"
                    title='Ducecampaign' />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Ducehost%20instagram%20page.webp" 
                    alt="Ducehost"
                    title='Ducehost' />
            </SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
        </Swiper>
    </div>
  )
}
