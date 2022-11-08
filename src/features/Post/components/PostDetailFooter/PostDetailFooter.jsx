import { Box, Typography } from '@mui/material';
import React from 'react';
import PostDetailFooterList from './PostDetailFooterList/PostDetailFooterList';
import PropTypes from 'prop-types';

PostDetailFooter.propTypes = {
  list: PropTypes.array,
};

PostDetailFooter.defaultValues = {
  list: null,
};

function PostDetailFooter({ list }) {
  return (
    <Box sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Bài viết liên quan
      </Typography>
      <PostDetailFooterList list={list} />
    </Box>
  );
}

export default PostDetailFooter;
