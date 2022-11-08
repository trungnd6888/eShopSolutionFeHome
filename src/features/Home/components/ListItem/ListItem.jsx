import { Box, Container, Grid, Skeleton, Typography } from '@mui/material';
import React from 'react';
// Import Swiper React components
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Item from '../Item/Item';
import { PropTypes } from 'prop-types';
import ItemSkeleton from '../ItemSkeleton/ItemSkeleton';

ListItem.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  onTotalQuantityCart: PropTypes.func,
};

ListItem.dfaultValues = {
  title: '',
  list: [],
  onTotalQuantityCart: null,
};

function ListItem({ title, list, onTotalQuantityCart }) {
  const handleTotalQuantityCart = () => {
    if (onTotalQuantityCart) onTotalQuantityCart();
  };

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
              {list
                ? list?.map((item) => (
                    <SwiperSlide key={item.id}>
                      <Item onTotalQuantityCart={handleTotalQuantityCart} item={item} />
                    </SwiperSlide>
                  ))
                : Array.from({ length: 4 }, (_, i) => i + 1).map((x) => (
                    <SwiperSlide key={x}>
                      <ItemSkeleton />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ListItem;
