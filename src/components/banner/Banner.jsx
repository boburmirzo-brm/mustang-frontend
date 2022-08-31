import React from 'react'
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import s from './Banner.module.css'
import { Autoplay, Pagination } from "swiper";
import img1 from "../../assets/italian-man-style.webp"
import img2 from "../../assets/bg1.webp"
import img3 from "../../assets/banner-img1.jpg"

function Banner() {
  return (
    <Swiper
    centeredSlides={true}
    autoplay={{
      delay: 25000,
      disableOnInteraction: false,
    }}
    loop={true}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay, Pagination]}
    className={s.mySwiper}
    >
      <SwiperSlide className={s.swiper_slider}>
      <img src={img3} alt="Banner image 4." />
      </SwiperSlide>
      <SwiperSlide className={s.swiper_slider}>
        <img src={img2} alt="Banner image 3." />
      </SwiperSlide>
      <SwiperSlide className={s.swiper_slider}>
      <img src={img1} />
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner