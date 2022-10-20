import React from 'react';
import PropTypes from 'prop-types';
import ProductDetailHeader from '../../components/ProductDetailHeader/ProductDetailHeader';
import ProductDetailMain from '../../components/ProductDetailMain/ProductDetailMain';
import { Container } from '@mui/material';

ProductDetail.propTypes = {};

function ProductDetail(props) {
  return (
    <Container>
      <ProductDetailHeader />
      <ProductDetailMain />
    </Container>
  );
}

export default ProductDetail;
