import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { Button, Divider, Paper, Box, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { formatter } from '../../../../utils/formatNumber';
import { useDispatch } from 'react-redux';
import { open } from '../../../Auth/snackBarSlice';

CartInfo.propTypes = {
  total: PropTypes.number,
};

CartInfo.defaultValues = {
  total: 0,
};

const CustomizeBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

function CartInfo({ total }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToPayment = () => {
    const cartList = JSON.parse(localStorage.getItem('cart'));
    const quantityList = cartList?.map((x) => x.quantity) || [];
    const totalQuantity = quantityList.reduce((pre, current) => pre + current, 0);

    if (totalQuantity === 0) {
      const action = open({ status: true, message: 'Giỏ hàng vẫn đang trống', type: 'error' });
      dispatch(action);

      return;
    }

    navigate('payment');
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, display: 'block' }} variant="button">
        Tổng đơn hàng
      </Typography>
      <Stack spacing={2}>
        <CustomizeBox>
          <Typography variant="subtitle2">Tổng tiền:</Typography>
          <Typography sx={{ fontWeight: 'normal' }} variant="subtitle2">
            {formatter.format(total)}
          </Typography>
        </CustomizeBox>
        <CustomizeBox>
          <Typography variant="subtitle2">Giảm giá:</Typography>
          <Typography sx={{ fontWeight: 'normal' }} variant="subtitle2">
            {formatter.format(0)}
          </Typography>
        </CustomizeBox>
        <CustomizeBox>
          <Typography variant="subtitle2">Vận chuyển:</Typography>
          <Typography sx={{ fontWeight: 'normal' }} variant="subtitle2">
            {formatter.format(0)}
          </Typography>
        </CustomizeBox>
        <Divider />
        <CustomizeBox>
          <Typography variant="subtitle2">Thành tiền:</Typography>
          <Typography sx={{ fontWeight: 'normal' }} variant="subtitle2">
            {formatter.format(total)}
          </Typography>
        </CustomizeBox>
        <Button onClick={handleToPayment} variant="contained">
          Thanh toán
        </Button>
      </Stack>
    </Paper>
  );
}

export default CartInfo;
