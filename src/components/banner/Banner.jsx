import React from 'react'
import s from "./Banner.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/bg1.webp"
import img2 from "../../assets/bg2.webp"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Mousewheel, Keyboard } from "swiper";

function Banner() {
  return (
    <div className={s.banner}>
        <Swiper
        cssMode={true}
        pagination={{
            clickable: true,
          }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner