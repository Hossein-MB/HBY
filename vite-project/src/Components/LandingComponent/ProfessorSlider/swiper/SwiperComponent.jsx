import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import Slide_image_1 from './../../../../../public/profesore/Rectangle-1.png';
import Slide_image_2 from '../../../../../src/assets/profesore/Rectangle-1.png';
import Slide_image_3 from '../../../../../src/assets/profesore/Rectangle-1.png';
import Slide_image_4 from '../../../../../src/assets/profesore/Rectangle-1.png';

function SwiperComponent() {
  return (
    <div className='container'>
      <h1 className="heading">با برترین استادان جهان اشنا شو</h1>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={
        {
          rotate: 0,
          stretch:0,
          depth:100,
          modifier:2.5,
        }
      }
        pagination={{el:'.swiper-pagination',clickable:true}}
        navigation={{
          nextEl:".swiper-button-next slider-arrow",
          prevEl:".swiper-button-next slider-prev",
          clickable:true,
        }}
        modules={[EffectCoverflow,Pagination,Navigation]}
        className='swiper_container'
      
      >

        <SwiperSlide>
          <img src={Slide_image_1} alt='slide_image' className='w-96 h-96 border'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide_image_2} alt='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide_image_3} alt='slide_image'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide_image_4} alt='slide_image'/>
        </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ino-icon className="arrow-back-outline"></ino-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ino-icon className="arrow-forward-outline"></ino-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>

      </Swiper>
    </div>
  )
}

export default SwiperComponent
