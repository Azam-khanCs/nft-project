import React, { useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import SwiperCore,{Autoplay} from 'swiper';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Carousel = () => {
  const [display, setDisplay] = useState("");
  // SwiperCore.use([Autoplay]);
  function show() {}
  return (
    <div className="py-5">
      {/* <div className="flex justify-center ">
        <div className="flex justify-center">
          <div className="space-y-12">
            <p className="font-bold text-[48px] text-center">
              Simple, easy pricing plans <br /> for the application
            </p>
            <p className="font-normal text-[16px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros
              <br /> dolor interdum nulla, ut .
            </p>
          </div>
        </div>
      </div> */}

      <div className="py-12 relative ">
        {/* <div className='flex justify-center'>
   <div><img src='../group45.svg' className='w-[302.03px]'/></div> 
   <div><img src='../group91.svg'  className='w-[381.03px]'/></div> 
   <div><img src='../group45.svg'  className='w-[302.03px]' /></div> 
</div> */}

        {/* <Swiper
      spaceBetween={50}
      modules={[Pagination]}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      slidesPerView={3}
      autoplay={{delay:2000}}
    >
      <SwiperSlide><img src='../group45.svg'  className='w-[302.03px]' /></SwiperSlide>
      <SwiperSlide><img src='../group91.svg'  className='w-[381.03px]'/></SwiperSlide>
      <SwiperSlide><img src='../group45.svg'  className='w-[302.03px]' /></SwiperSlide>
     
      ...
    </Swiper> */}

        {/* <div className='py-9  flex justify-center space-x-6 relative' style={{background:`url('e79.png')`,backgroundSize:'800px',backgroundRepeat:'no-repeat',backgroundPosition:'center',zIndex:'1'}} >

    <div><img src='../aro2.png' onClick={show}/></div>
    <div><img src='../aro1.png'/></div>
</div> */} 

<div className="h-[50vh] mb-9">
  <div className="flex justify-center"><p className="font-bold md:text-[48px] text-[35px] w-[500px] md:w-[676px] text-center">Simple, easy pricing plans for the application</p></div>
<div className="flex justify-center"><p className="font-normal text-[16px] text-center w-[600px] px-2 md:px-1  md:w-[733px] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut .</p></div>
</div>
        <div>

        <div className="relative  bottom-20  flex justify-center ">
          <div className=" absolute  flex justify-center ">
            <div>
              <img src="../group45.svg" className="w-[300px] md:block hidden " />
            </div>
            <div>
              <img src="../group91.svg" className="md:w-[250px] w-[200px]  " />
            </div>
            <div>
              <img src="../group45.svg" className="w-[300px] md:block hidden" />
            </div>
          </div>
        </div>
        <div className="flex justify-center  pt-[100px]">
          <img src="../e79.png" className=" pb-0 md:w-[80%] w-[100%] md:h-auto h-[50vh]" style={{width:"80%"  , overflow:"hidden"}}  />
        </div>


          <div className="absolute flex bottom-20 md:left-[43.5%] left-[30%] space-x-12">
            <div>
              <img src="../aro2.png" className="" />
            </div>
            <div>
              <img src="../aro1.png" className="" />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;
