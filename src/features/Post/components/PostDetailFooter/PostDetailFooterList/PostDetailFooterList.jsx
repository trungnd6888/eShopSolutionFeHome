import { Grid } from '@mui/material';
import React from 'react';
import PostDetailFooterItem from './PostDetailFooterItem/PostDetailFooterItem';
import PropTypes from 'prop-types';

PostDetailFooterList.propTypes = {
  list: PropTypes.array,
};

PostDetailFooterList.defaultValues = {
  list: null,
};

const getListSlice = (list) => {
  if (!list) return null;

  return list.slice(0, 4);
};

function PostDetailFooterList({ list }) {
  return (
    <Grid container spacing={3}>
      {getListSlice(list)?.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <PostDetailFooterItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostDetailFooterList;
