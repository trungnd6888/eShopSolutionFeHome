import { Box, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import * as React from 'react';

AboutUsHeader.propTypes = {};

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

function AboutUsHeader(props) {
  const breadcrumbs = [
    <CustomizeLink to="/home" key="1">
      Trang chủ
    </CustomizeLink>,

    <Typography key="3" sx={{ fontSize: 14 }} color="text.primary">
      Về chúng tôi
    </Typography>,
  ];

  return (
    <Box sx={{ mb: 5, mt: 3 }}>
      <Typography variant="h6">Về chúng tôi</Typography>
      <Breadcrumbs
        separator={<span style={{ position: 'relative', top: 1, color: 'inherit' }}>&#x2022;</span>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
}

export default AboutUsHeader;
