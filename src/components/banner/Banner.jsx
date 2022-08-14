import React from 'react'
import img from '../../assets/banner.png'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import s from './Banner.module.css'

import { Autoplay, Pagination } from "swiper";

function Banner() {
  return (
    <Swiper
    centeredSlides={true}
    autoplay={{
      delay: 5000,
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
        <img src={img} alt="Banner image 1." />
      </SwiperSlide>
      <SwiperSlide className={s.swiper_slider}>
        <img src="https://images.theconversation.com/files/303798/original/file-20191126-112499-1j4wq8y.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip" alt="Banner image 2." />
      </SwiperSlide>
      <SwiperSlide className={s.swiper_slider}>
        <img src="https://cdn.shopify.com/s/files/1/0468/9441/files/luccamonkhoneyfloral.jpg?v=1627659977&width=2000" alt="Banner image 3." />
      </SwiperSlide>
      <SwiperSlide className={s.swiper_slider}>
        <img src="https://biliboltv.uz/wp-content/uploads/2019/12/products.13333.1.b-1-2.jpg" alt="Banner image 4." />
      </SwiperSlide>
      <SwiperSlide className={s.swiper_slider}>
        <img src="https://manofmany.com/wp-content/uploads/2015/03/Santoni-WIlson-Leather-Oxford.jpg" alt="Banner image 5." />
      </SwiperSlide>
    </Swiper>
  )
}

export default Banner