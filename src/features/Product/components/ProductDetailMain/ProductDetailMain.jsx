import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import ProductDetailInfo from './components/ProductDetailInfo/ProductDetailInfo';
import ProductDetailSlide from './components/ProductDetailSilde/ProductDetailSlide';

ProductDetailMain.propTypes = {
  product: PropTypes.object,
};

ProductDetailMain.defaultValues = {
  product: null,
};

function ProductDetailMain({ product }) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={6}>
        <ProductDetailSlide product={product} />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <ProductDetailInfo product={product} />
      </Grid>
    </Grid>
  );
}

export default ProductDetailMain;
