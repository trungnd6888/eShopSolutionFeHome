import React, { useState } from 'react';
import detailImage from '../../../../../../../images/banner01.jpg';
import detailImage01 from '../../../../../../../images/poster01.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

import './styles.css';

// import required modules
import { Zoom, FreeMode, Thumbs, Pagination } from 'swiper';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        zoom={true}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        pagination={{
          type: 'progressbar',
        }}
        modules={[FreeMode, Thumbs, Pagination, Zoom]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage01} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage01} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage01} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage01} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src={detailImage01} />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={5}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper mySwiper1"
      >
        <SwiperSlide>
          <img src={detailImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={detailImage01} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
