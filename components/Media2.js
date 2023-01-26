import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Media from './Media';
const Media2 = () => {
  return (
    <>

<Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Media />
                </SwiperSlide>
                <SwiperSlide>
                    <Media />
                </SwiperSlide>
                <SwiperSlide>
                  <Media />
                </SwiperSlide>
            </Swiper>

    </>
  )
}

export default Media2