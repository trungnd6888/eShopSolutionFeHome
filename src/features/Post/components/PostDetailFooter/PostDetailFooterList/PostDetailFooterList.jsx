import { Grid } from '@mui/material';
import React from 'react';
import PostDetailFooterItem from './PostDetailFooterItem/PostDetailFooterItem';

PostDetailFooterList.propTypes = {};

function PostDetailFooterList(props) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <PostDetailFooterItem />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <PostDetailFooterItem />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <PostDetailFooterItem />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <PostDetailFooterItem />
      </Grid>
    </Grid>
  );
}

export default PostDetailFooterList;
