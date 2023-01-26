import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Carousel from './Carousel';
const Media1 = () => {
  return (
    <>
        <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                   <Carousel />
                </SwiperSlide>
                <SwiperSlide>
                  <Carousel />
                </SwiperSlide>
                <SwiperSlide>
                   <Carousel />
                </SwiperSlide>
            </Swiper>
    </>
  )
}

export default Media1