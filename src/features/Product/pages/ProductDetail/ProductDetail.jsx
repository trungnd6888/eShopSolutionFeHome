import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productApi from '../../../../api/productApi';
import ProductDetailHeader from '../../components/ProductDetailHeader/ProductDetailHeader';
import ProductDetailMain from '../../components/ProductDetailMain/ProductDetailMain';

ProductDetail.propTypes = {};

function ProductDetail(props) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const data = await productApi.getById(id);
      setProduct(data);
    } catch (error) {
      console.log('Fail to fetch error');
    }
  };

  return (
    <Container>
      <ProductDetailHeader />
      <ProductDetailMain product={product} />
    </Container>
  );
}

export default ProductDetail;
