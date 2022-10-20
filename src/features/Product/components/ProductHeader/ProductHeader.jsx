import { Box, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/system';

ProductHeader.propTypes = {};

const CustomizeLink = styled(Link)({
  fontSize: 14,
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
});

function ProductHeader(props) {
  const breadcrumbs = [
    <CustomizeLink to="/home" key="1">
      Trang chủ
    </CustomizeLink>,
    <Typography key="2" sx={{ fontSize: 14 }} color="text.primary">
      Sản phẩm
    </Typography>,
  ];

  return (
    <Box sx={{ mb: 5, mt: 3 }}>
      <Typography variant="h6">Sản phẩm</Typography>
      <Breadcrumbs
        separator={<span style={{ position: 'relative', top: 1, color: 'inherit' }}>&#x2022;</span>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
}

export default ProductHeader;
