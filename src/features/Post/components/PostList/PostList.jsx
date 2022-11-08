import { Grid } from '@mui/material';
import { PropTypes } from 'prop-types';
import React from 'react';
import PostItem from '../PostList/components/PostItem/PostItem';
import PostSkeleton from './components/PostSkeleton/PostSkeleton';

PostList.propTypes = {
  list: PropTypes.array,
};

PostList.defaultValues = {
  list: [],
};

export default function PostList({ list }) {
  return (
    <Grid container spacing={3}>
      {list
        ? list?.map((item) => (
            <Grid item xs={12} sm={4} md={3} key={item.id}>
              <PostItem item={item} />
            </Grid>
          ))
        : Array.from({ length: 12 }, (_, i) => i + 1).map((x) => (
            <Grid item xs={12} sm={4} md={3} key={x}>
              <PostSkeleton />
            </Grid>
          ))}
    </Grid>
  );
}
