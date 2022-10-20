import { Box, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import * as React from 'react';

PaymentHeader.propTypes = {};

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function PaymentHeader(props) {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      sx={{ fontSize: 14 }}
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Trang chủ
    </Link>,
    <Link
      underline="hover"
      key="2"
      sx={{ fontSize: 14 }}
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Giỏ hàng
    </Link>,
    <Typography key="3" sx={{ fontSize: 14 }} color="text.primary">
      Thanh toán
    </Typography>,
  ];

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Thanh toán</Typography>
      <Breadcrumbs
        separator={<span style={{ position: 'relative', top: 1, color: 'inherit' }}>&#x2022;</span>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
}

export default PaymentHeader;
