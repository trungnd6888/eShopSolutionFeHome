import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PaymentHeader from './components/PaymentHeader/PaymentHeader';
import PaymentInfo from './components/PaymentInfo/PaymentInfo';
import PaymentTable from './components/PaymentTable/PaymentTable';
import productApi from '../../api/productApi';

Payment.propTypes = {};

function Payment(props) {
  const [list, setList] = useState(null);

  useEffect(() => {
    fetchCartList();
  }, []);

  const fetchCartList = async () => {
    const cartList = JSON.parse(localStorage.getItem('cart'));
    if (!cartList) return;

    for (let i = 0; i < cartList?.length; i++) {
      const item = cartList[i];
      item.product = await productApi.getById(item.productId);
    }

    setList(cartList);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <PaymentHeader />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <PaymentTable list={list} />
          <Button component={Link} to="/cart" sx={{ mt: 2, fontSize: 12, color: 'inherit' }}>
            <ArrowBackIosNewIcon sx={{ fontSize: 12, mr: 1 }} />
            Trở lại
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <PaymentInfo />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Payment;
