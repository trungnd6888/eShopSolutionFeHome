import { Container, Grid } from '@mui/material';
import React from 'react';
import ProductDetailInfo from './components/ProductDetailInfo/ProductDetailInfo';
import ProductDetailSlide from './components/ProductDetailSilde/ProductDetailSlide';

ProductDetailMain.propTypes = {};

function ProductDetailMain(props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={6}>
        <ProductDetailSlide />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <ProductDetailInfo />
      </Grid>
    </Grid>
  );
}

export default ProductDetailMain;
