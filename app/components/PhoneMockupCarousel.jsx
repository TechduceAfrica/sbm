"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import {PhoneSlides} from '../constants';

export default function PhoneMockupCarousel() {
  return (
    <div>
        <Swiper
            autoplay={{
            delay: 0,
            disableOnInteraction: false,
            }}
            speed={8000}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Autoplay]}
        >
            {PhoneSlides.map((slide, index) => (
                <SwiperSlide>
                    <img key={index} src={slide.src} alt={slide.alt} title={slide.alt}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}
