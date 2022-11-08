import React from 'react';
import { PropTypes } from 'prop-types';
import CartTable from './components/CartTable/CartTable';
import CartInfo from './components/CartInfo/CartInfo';
import { Box, Container, Grid, Stack, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CartHeader from './components/CartHeader/CartHeader';
import { useEffect } from 'react';
import productApi from '../../api/productApi';

Cart.propTypes = {
  onTotalQuantityCart: PropTypes.func,
};

Cart.defaultValues = {
  onTotalQuantityCart: null,
};

function Cart({ onTotalQuantityCart }) {
  const [total, setTotal] = React.useState(0);
  const [list, setList] = React.useState(null);

  const handleFetchList = async () => {
    await fetchCartList();

    if (onTotalQuantityCart) onTotalQuantityCart();
  };

  useEffect(() => {
    fetchCartList();
  }, []);

  const fetchCartList = async () => {
    const cartList = JSON.parse(localStorage.getItem('cart'));
    if (!cartList) return;

    let total = 0;

    for (let i = 0; i < cartList?.length; i++) {
      const item = cartList[i];
      item.product = await productApi.getById(item.productId);
      total = total + item.quantity * item.product?.price;
    }

    setList(cartList);
    setTotal(total);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <CartHeader />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <CartTable onFetchList={handleFetchList} list={list} />
            <Button sx={{ mt: 2, fontSize: 12 }} color="inherit" to="/home" component={Link}>
              <ArrowBackIosNewIcon sx={{ mr: 1, fontSize: 12 }} fontSize="small" />
              Tiếp tục mua
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CartInfo total={total} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Cart;
