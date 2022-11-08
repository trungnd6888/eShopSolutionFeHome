import { Box, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import * as React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

CartHeader.propTypes = {};

const CustomizeLink = styled(Link)({
  fontSize: 14,
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
});

function CartHeader(props) {
  const breadcrumbs = [
    <CustomizeLink key="1" to="/home">
      Trang chủ
    </CustomizeLink>,
    <Typography key="2" sx={{ fontSize: 14 }} color="text.primary">
      Giỏ hàng
    </Typography>,
  ];

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Giỏ hàng</Typography>
      <Breadcrumbs
        separator={<span style={{ position: 'relative', top: 1, color: 'inherit' }}>&#x2022;</span>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
}

export default CartHeader;
