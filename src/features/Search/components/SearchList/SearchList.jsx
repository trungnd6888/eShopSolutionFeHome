import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';
import SearchItem from './components/SearchItem/SearchItem';

SearchMainList.propTypes = {
  list: PropTypes.array,
};

SearchMainList.defaultValues = {
  list: [],
};

export default function SearchMainList({ list }) {
  return (
    <Grid container spacing={3}>
      {list.map((item) => (
        <Grid item xs={12} sm={4} md={3} key={item.id + item.price}>
          <SearchItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
