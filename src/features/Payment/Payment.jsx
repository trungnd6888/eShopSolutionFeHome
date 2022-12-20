import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import PaymentHeader from './components/PaymentHeader/PaymentHeader';
import PaymentInfo from './components/PaymentInfo/PaymentInfo';
import PaymentTable from './components/PaymentTable/PaymentTable';
import productApi from '../../api/productApi';
import orderApi from '../../api/orderApi';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../Auth/snackBarSlice';
import { empty } from '../Cart/cartSlice';
import PropTypes from 'prop-types';
import { STORAGE_USER } from '../../constants/common';

Payment.propTypes = {
  onTotalQuantityCart: PropTypes.func,
};

Payment.defaultValues = {
  onTotalQuantityCart: null,
};

function Payment({ onTotalQuantityCart }) {
  const [list, setList] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth).current;

  const getCheckLogin = (user) => {
    if (!user) return false;

    let isExpired = false;
    let isLogin = false;

    const dateNow = new Date();
    if (user.exp * 1000 < dateNow.getTime()) isExpired = true;

    isLogin = !isExpired;

    return isLogin;
  };

  const isLogin = getCheckLogin(user);
  const userId = isLogin ? user[STORAGE_USER.ID] : null;

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

  const handleTotalQuantityCart = () => {
    if (onTotalQuantityCart) onTotalQuantityCart();
  };

  const handleSubmit = async (values) => {
    const cartList = JSON.parse(localStorage.getItem('cart'));

    const addValues = {
      ...values,
      userId: userId,
      orderDetails: cartList?.map((x) => ({
        productId: x.productId,
        quantity: x.quantity,
      })),
    };

    try {
      await orderApi.add(addValues);

      const snackBarAction = open({
        status: true,
        message: 'Đặt hàng thành công',
        type: 'success',
      });
      dispatch(snackBarAction);

      const action = empty();
      dispatch(action);

      handleTotalQuantityCart();

      navigate('paymentsuccess');
    } catch (error) {
      console.log('Fail to add order: ', error);

      const snackBarAction = open({
        status: true,
        message: 'Đặt hàng không thành công',
        type: 'error',
      });
      dispatch(snackBarAction);
    }
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
          <PaymentInfo onSubmit={handleSubmit} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Payment;
