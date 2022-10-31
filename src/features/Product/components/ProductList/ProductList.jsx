import { Grid, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import ProductItem from '../ProductList/components/ProductItem/ProductItem';
import ProductSkeleton from './components/ProductSkeleton/ProductSkeleton';

ProductList.propTypes = {
  list: PropTypes.array,
};

ProductList.defaultValues = {
  list: [],
};

export default function ProductList({ list }) {
  return (
    <Grid container spacing={3}>
      {list
        ? list.map((item) => (
            <Grid item xs={12} sm={4} md={3} key={item.id}>
              <ProductItem item={item} />
            </Grid>
          ))
        : Array.from({ length: 12 }, (_, i) => i + 1).map((x) => (
            <Grid item xs={12} sm={4} md={3} key={x}>
              <ProductSkeleton />
            </Grid>
          ))}
    </Grid>
  );
}

{
  /* <Skeleton variant="rectangular" height={140} />
<Skeleton variant="text" />
<Skeleton variant="text" width="60%" />
<Skeleton variant="text" width="40%" /> */
}
