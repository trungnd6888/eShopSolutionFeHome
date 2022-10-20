import styled from '@emotion/styled';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import bannerImage from '../../../../../images/banner01.jpg';
import posterImage from '../../../../../images/poster01.png';

const CustomizeBox = styled(Box)`
  height: 280px;
  background-image: url(${bannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function Banner() {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7} md={8}>
          <Box
            sx={(theme) => ({
              borderRadius: 4,
              height: { xs: 'auto', sm: 280 },
              width: '100%',
              minWidth: 143,
              backgroundColor: theme.palette.primary.light,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              textAlign: { xs: 'center', sm: 'left' },
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                pl: { sm: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, mt: { xs: 2 } }}>
                Chào mừng đến với E-Watch
              </Typography>
              <Button
                component={Link}
                to="/product"
                variant="contained"
                sx={{
                  minWidth: 105,
                  ml: { xs: 'auto', sm: 0 },
                  mr: { xs: 'auto' },
                }}
              >
                Xem ngay
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                width: 268,
                pl: { sm: 2 },
                pr: { sm: 4 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img width="100%" style={{ padding: 1, minWidth: 150 }} src={posterImage} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <Box
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
              <SwiperSlide>
                <CustomizeBox />
              </SwiperSlide>
              <SwiperSlide>
                <CustomizeBox />
              </SwiperSlide>
              <SwiperSlide>
                <CustomizeBox />
              </SwiperSlide>
              <SwiperSlide>
                <CustomizeBox />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Banner;
