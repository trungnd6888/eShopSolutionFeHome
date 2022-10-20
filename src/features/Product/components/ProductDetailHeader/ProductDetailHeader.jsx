import { Box, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import * as React from 'react';

ProductDetailtHeader.propTypes = {};

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const CustomizeLink = styled(Link)({
  fontSize: 14,
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
});

function ProductDetailtHeader(props) {
  const breadcrumbs = [
    <CustomizeLink to="/home" key="1">
      Trang chủ
    </CustomizeLink>,
    <CustomizeLink to="/product" key="2">
      Sản phẩm
    </CustomizeLink>,
    <Typography key="3" sx={{ fontSize: 14 }} color="text.primary">
      Chi tiết sản phẩm
    </Typography>,
  ];

  return (
    <Box sx={{ mb: 5, mt: 3 }}>
      <Typography variant="h6">Chi tiết sản phẩm</Typography>
      <Breadcrumbs
        separator={<span style={{ position: 'relative', top: 1, color: 'inherit' }}>&#x2022;</span>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
}

export default ProductDetailtHeader;
