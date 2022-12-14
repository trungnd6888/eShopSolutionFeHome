import { Box, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import * as React from 'react';
import PropTypes from 'prop-types';

PostDetailtHeader.propTypes = {
  title: PropTypes.string,
};

PostDetailtHeader.defaultValues = {
  title: '',
};

const CustomizeLink = styled(Link)({
  fontSize: 14,
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
});

function PostDetailtHeader({ title }) {
  const breadcrumbs = [
    <CustomizeLink to="/home" key="1">
      Trang chủ
    </CustomizeLink>,
    <CustomizeLink to="/post" key="2">
      Bài viết
    </CustomizeLink>,
    <Typography key="3" sx={{ fontSize: 14 }} color="text.primary">
      {title}
    </Typography>,
  ];

  return (
    <Box sx={{ mb: 5, mt: 3 }}>
      <Typography variant="h6">Chi tiết bài viết</Typography>
      <Breadcrumbs
        separator={<span style={{ position: 'relative', top: 1, color: 'inherit' }}>&#x2022;</span>}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
}

export default PostDetailtHeader;
