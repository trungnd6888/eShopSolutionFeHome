import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@mui/material';

ItemSkeleton.propTypes = {};

function ItemSkeleton(props) {
  return (
    <>
      <Skeleton variant="rectangular" height={140} />
      <Skeleton variant="text" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" width="40%" />
    </>
  );
}

export default ItemSkeleton;
