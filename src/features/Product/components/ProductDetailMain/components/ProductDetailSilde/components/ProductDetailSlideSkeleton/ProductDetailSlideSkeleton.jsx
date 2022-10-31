import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton, Stack } from '@mui/material';

ProductDetailSlideSkeleton.propTypes = {};

function ProductDetailSlideSkeleton(props) {
  return (
    <Stack spacing={1}>
      <Skeleton variant="rectangular" height={380} />
      <Skeleton variant="rectangular" height={68} />
    </Stack>
  );
}

export default ProductDetailSlideSkeleton;
