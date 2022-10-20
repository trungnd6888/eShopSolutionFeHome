import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
// Import Swiper React components
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Item from '../Item/Item';
import { PropTypes } from 'prop-types';

ListItem.propTypes = {
  title: PropTypes.string,
};

ListItem.dfaultValues = {
  title: '',
};

function ListItem({ title }) {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
            {title}
          </Typography>
          <Box
            sx={{
              minWidth: 143,
            }}
          >
            <Swiper
              className="mySwiper"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              spaceBetween={24}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <Item />
              </SwiperSlide>
              <SwiperSlide>
                <Item />
              </SwiperSlide>
              <SwiperSlide>
                <Item />
              </SwiperSlide>
              <SwiperSlide>
                <Item />
              </SwiperSlide>
              <SwiperSlide>
                <Item />
              </SwiperSlide>
              <SwiperSlide>
                <Item />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListItem;
