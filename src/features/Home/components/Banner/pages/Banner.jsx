import { Container, Grid } from '@mui/material';
// Import Swiper React components
// Import Swiper styles
import PropTypes from 'prop-types';
import 'swiper/css';
import 'swiper/css/pagination';
import BannerLeft from '../components/BannerLeft/BannerLeft';
import BannerRight from '../components/BannerRight/BannerRight';

Banner.propTypes = {
  list: PropTypes.array,
};

Banner.defaultValues = {
  list: null,
};

function Banner({ list }) {
  return (
    <Container sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7} md={8}>
          <BannerLeft />
        </Grid>
        <Grid item xs={12} sm={5} md={4}>
          <BannerRight list={list} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Banner;
