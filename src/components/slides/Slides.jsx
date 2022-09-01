import React from 'react'
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import s from "./Slides.module.css"
import { Autoplay, Navigation } from "swiper";
import fetch from "../../hooks/useFetch"
import {Link} from "react-router-dom"

function Slides() {
    const {data: {data}} = fetch("/products")
  return (
    <div className={s.slides}>
          <Swiper
       slidesPerView={1}
        breakpoints={{
            500: {
                slidesPerView: 1,
              },
            640: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        spaceBetween={1}
        loop={true}
        navigation={false}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        {data && data?.slice(0,6).map(({title, urls, stars , brand, _id}, inx)=> <SwiperSlide key={inx} className={s.swiper_item}>
                <img src={urls[0]} alt="" />
                <p className={s.slides_brand}>{brand}</p>
                <div className={s.swiper_wrapper}>
                    <p>{title.length > 15 ? title.slice(0,15)+"...": title}</p>
                    {new Array(stars).fill("").map((_, inx)=><AiFillStar key={inx}/>)} 
                    {new Array(5 - stars).fill("").map((_,inx)=><AiOutlineStar key={inx}/>)}
                    <Link to={`/products/${_id}`} className={s.slides_btn}>Ko'rish</Link>
                </div>
            </SwiperSlide>)}
      </Swiper>
    </div>
  )
}

export default Slides