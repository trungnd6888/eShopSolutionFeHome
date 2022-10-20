import { Container } from '@mui/material';
import React from 'react';
import PostDetailFooter from '../../components/PostDetailFooter/PostDetailFooter';
import PostDetailHeader from '../../components/PostDeTailHeader/PostDetailHeader';
import PostDetailMain from '../../components/PostDetailMain/PostDetailMain';

PostDetail.propTypes = {};

function PostDetail(props) {
  return (
    <Container>
      <PostDetailHeader />
      <PostDetailMain />
      <PostDetailFooter />
    </Container>
  );
}

export default PostDetail;
