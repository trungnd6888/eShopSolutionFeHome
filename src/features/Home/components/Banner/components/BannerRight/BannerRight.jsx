import styled from '@emotion/styled';
import { Box, Paper, Skeleton } from '@mui/material';
// Import Swiper React components
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import { STORAGE_IMAGE } from '../../../../../../constants/common';

BannerRight.propTypes = {
  list: PropTypes.array,
};

BannerRight.defaultValues = {
  list: null,
};

function BannerRight({ list }) {
  const CustomizeBox = styled(Box)`
    height: 280px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `;

  return (
    <>
      {list ? (
        <Paper
          sx={{
            height: 280,
            minWidth: 143,
            borderRadius: 4,
            overflow: 'hidden',
          }}
        >
          <Swiper
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
          >
            {list?.map((item) => (
              <SwiperSlide key={item.id}>
                <CustomizeBox
                  src={
                    item.imageUrl
                      ? `${import.meta.env.VITE_BASE_URL}${item.imageUrl}`
                      : STORAGE_IMAGE.PRODUCT_THUMBNAI
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Paper>
      ) : (
        <Skeleton variant="rectangular" height={280} />
      )}
    </>
  );
}

export default BannerRight;
