 import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

 
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='mt-33 h-[50em]'>
     <div className="relative w-full h-[300px] overflow-hidden">

        {/* Left gradient */}
        <div className="absolute left-0 top-0 z-10 h-full w-20 
          bg-gradient-to-r from-[#cecfd8] to-transparent 
          pointer-events-none">
        </div>
     
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  "
      >
        <SwiperSlide><img src='Yemac-Ready-To-Wear.png' alt='Yemac Ready-To-Wear Beautiful Ankara Dress'    className="w-full h-full object-cover object-contain"/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
       <div className="absolute right-0 top-0 z-10 h-full w-20 
          bg-gradient-to-l from-[#dbdeeb] to-transparent 
          pointer-events-none">
        </div>

     </div>   
     
    </div>
  );
}
