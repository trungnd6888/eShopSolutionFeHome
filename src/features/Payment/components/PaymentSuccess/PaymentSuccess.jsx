import { Typography } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

PaymentSuccess.propTypes = {};

function PaymentSuccess(props) {
  return (
    <Typography variant="body2" sx={{ textAlign: 'center', lineHeight: '100vh' }}>
      Đặt hàng thành công.{' '}
      <Link component={NavLink} to="/home" variant="body2">
        Quay lại trang chủ ?
      </Link>
    </Typography>
  );
}

export default PaymentSuccess;
