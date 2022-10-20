import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/Banner/Banner';
import ListItem from '../../components/ListItem/ListItem';
import { Box } from '@mui/material';

Home.propTypes = {};

function Home(props) {
  return (
    <Box sx={{ mb: 5 }}>
      <Banner />
      <ListItem title="Sản phẩm mới" />
      <ListItem title="Sản phẩm bán chạy" />
      <ListItem title="Sản phẩm nổi bật" />
    </Box>
  );
}

export default Home;
