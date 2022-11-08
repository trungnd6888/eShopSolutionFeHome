import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem/ListItem';
import { Box } from '@mui/material';
import productApi from '../../../../api/productApi';
import bannerApi from '../../../../api/bannerApi';
import Banner from '../../components/Banner/pages/Banner';

Home.propTypes = {
  onTotalQuantityCart: PropTypes.func,
};

Home.defaultValues = {
  onTotalQuantityCart: null,
};

function Home({ onTotalQuantityCart }) {
  const [list, setList] = useState(null);
  const [bannerList, setBannerList] = useState(null);

  const handleTotalQuantityCart = () => {
    if (onTotalQuantityCart) onTotalQuantityCart();
  };

  useEffect(() => {
    fetchProduct();
    fetchBanner();
  }, []);

  const fetchProduct = async () => {
    try {
      const { data } = await productApi.getAll();
      if (!data) return;

      setList(data);
    } catch (error) {
      console.log('Fail to fetch api');
    }
  };

  const fetchBanner = async () => {
    try {
      const { data } = await bannerApi.getAll();
      if (!data) returns;

      setBannerList(data);
    } catch (error) {
      console.log('Fail to fetch banner list');
    }
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Banner list={bannerList} />
      <ListItem
        onTotalQuantityCart={handleTotalQuantityCart}
        list={list?.filter((x) => x.isNew)}
        title="Sản phẩm mới"
      />
      <ListItem
        onTotalQuantityCart={handleTotalQuantityCart}
        list={list?.filter((x) => x.isBestSale)}
        title="Sản phẩm bán chạy"
      />
      <ListItem
        onTotalQuantityCart={handleTotalQuantityCart}
        list={list?.filter((x) => !x.isNew && !x.isBestSale)}
        title="Sản phẩm nổi bật"
      />
    </Box>
  );
}

export default Home;
