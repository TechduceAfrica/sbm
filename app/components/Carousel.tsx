"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Carousel() {

  return (
    <div>
      <div className="overflow-hidden w-full">
        <div>
          <Swiper
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            loop={true}
            spaceBetween={30}
            slidesPerView={4}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/PerfectScentdesignerperfumes.webp" 
                    alt="Perfect Scents Designer Perfumes" 
                    title="Perfect Scents Designer Perfumes" 
                    className="object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Bebiscrib%20social%20media%20page%20instagram.webp" 
                    alt="Bebis cribs" 
                    title="Bebis cribs" 
                    className="object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Glamour%20Lounge%20and%20Spa%20social%20media%20page%20Instagram.webp" 
                    alt="Glamour Lounge and Spa" 
                    title="Glamour Lounge and Spa" 
                    className="object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Montana%20Residence%20Social%20media%20page%20Instagram.webp" 
                    alt="Montana Residence" 
                    title="Montana Residence" 
                    className="object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Ducecampaign%20Instagram%20page.webp" 
                    alt="Ducecampaign" 
                    title="Ducecampaign" 
                    className="object-cover"/>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://assets-social-brand-managers.netlify.app/home%20page/Client%20Social%20Media%20Page/Ducehost%20instagram%20page.webp" 
                    alt="Ducehost" 
                    title="Ducehost" 
                    className="object-cover"/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
