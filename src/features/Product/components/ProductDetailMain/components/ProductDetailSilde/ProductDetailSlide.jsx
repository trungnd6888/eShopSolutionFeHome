import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
import ProductDetailSlideSkeleton from './components/ProductDetailSlideSkeleton/ProductDetailSlideSkeleton';

ProductDetailSlide.propTypes = {
  product: PropTypes.object,
};

ProductDetailSlide.detailValues = {
  product: null,
};

export default function ProductDetailSlide({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      {product ? (
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
            {product?.images?.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="swiper-zoom-container">
                  <img height={380} src={`https://localhost:7095${image.imageUrl}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={5}
            slidesPerView={product?.images?.length || 6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper mySwiper1"
          >
            {product?.images?.map((image) => (
              <SwiperSlide key={image.id}>
                <img src={`https://localhost:7095${image.imageUrl}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ) : (
        <ProductDetailSlideSkeleton />
      )}
    </>
  );
}
