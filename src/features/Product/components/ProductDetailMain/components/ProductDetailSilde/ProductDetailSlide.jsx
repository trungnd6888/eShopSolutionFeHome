import React, { useState } from 'react';
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
            <img src="../src/images/banner01.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/poster01.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/banner01.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/poster01.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/banner01.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/poster01.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/banner01.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/poster01.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/banner01.jpg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="../src/images/poster01.png" />
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
          <img src="../src/images/banner01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/poster01.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/banner01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/poster01.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/banner01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/poster01.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/banner01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/poster01.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/banner01.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../src/images/poster01.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
