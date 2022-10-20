import { Box, Typography } from '@mui/material';
import React from 'react';
import PostDetailFooterList from './PostDetailFooterList/PostDetailFooterList';

PostDetailFooter.propTypes = {};

function PostDetailFooter(props) {
  return (
    <Box sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Bài viết xem gần đây
      </Typography>
      <PostDetailFooterList />
    </Box>
  );
}

export default PostDetailFooter;
