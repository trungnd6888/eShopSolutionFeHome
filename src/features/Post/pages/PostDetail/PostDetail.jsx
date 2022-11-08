import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import newsApi from '../../../../api/newsApi';
import { getTitleSlice } from '../../../../utils/common';
import PostDetailFooter from '../../components/PostDetailFooter/PostDetailFooter';
import PostDetailHeader from '../../components/PostDeTailHeader/PostDetailHeader';
import PostDetailMain from '../../components/PostDetailMain/PostDetailMain';

PostDetail.propTypes = {};

function PostDetail(props) {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    fetchPost();
    fetchPostList();
  }, [id]);

  const fetchPost = async () => {
    try {
      const data = await newsApi.getById(id);
      setPost(data);
    } catch (error) {
      console.log('Fail to fetch error');
    }
  };

  const fetchPostList = async () => {
    try {
      const { data } = await newsApi.getAll();
      if (!data) return;

      setList(data);
    } catch (error) {
      console.log('Fail to fetch post list');
    }
  };

  return (
    <Container>
      <PostDetailHeader title={getTitleSlice(post?.title, 50)} />
      <PostDetailMain post={post} />
      <PostDetailFooter list={list} />
    </Container>
  );
}

export default PostDetail;
