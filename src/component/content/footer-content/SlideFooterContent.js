import React, { useEffect, useState } from "react";
import axios from 'axios'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import sytles from "./css/footerslide.module.css";

// import required modules
import { Autoplay } from "swiper";
import { giaoHangNhanhServices } from "../../../services/ghn.services";

export default function SlideFooterContent() {
  const [logos, setLogo] = useState([])
  useEffect(() => {
   giaoHangNhanhServices.getdataLogo().then(result => setLogo(result.data))
  }, [])
  return (
    <>
      <Swiper
        spaceBetween={8}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          360: {
            slidesPerView: 3,
            spaceBetween: 2
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 8,
          },
        }}
        className="mySwiper"
      >
        {logos.map((logo, index) => {
          return (
            <SwiperSlide key={index} >
              <div className="h-[65px] items-center justify-center flex">
                <a>
                  <picture>
                    <source srcSet={logo.name}></source>
                    <img className={sytles.image} src={logo.name} alt={logo.name}></img>
                  </picture>
                </a>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}
