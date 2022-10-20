import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';
import ProductItem from '../ProductList/components/ProductItem/ProductItem';

ProductList.propTypes = {
  list: PropTypes.array,
};

ProductList.defaultValues = {
  list: [],
};

export default function ProductList({ list }) {
  return (
    <Grid container spacing={3}>
      {list.map((item) => (
        <Grid item xs={12} sm={4} md={3} key={item.id + item.price}>
          <ProductItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
