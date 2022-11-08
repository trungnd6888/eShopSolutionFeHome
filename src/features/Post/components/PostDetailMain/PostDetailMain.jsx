import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Container, Paper, Stack, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import PostDetailShareButton from './components/PostDetailShareButton/PostDetailShareButton';
import postImage from '../../../../../images/post01.jpg';
import avatarImage from '../../../../../images/avatar.jpg';
import { STORAGE_IMAGE } from '../../../../constants/common';
import { styled } from '@mui/system';
import { getTitleSlice } from '../../../../utils/common';

PostDetailMain.propTypes = {
  post: PropTypes.object,
};

PostDetailMain.defaultVaues = {
  post: null,
};

const CustomizeDiv = styled(Box)({
  mb: 6,
  overflow: 'hidden',
  '& img': {
    width: '100%',
  },
});

const getPathImage = (url) => {
  return url ? `https://localhost:7095${url}` : STORAGE_IMAGE.PRODUCT_THUMBNAI;
};

const getPathAvatar = (url) => {
  return `https://localhost:7095${url}`;
};

const getDateString = (date) => {
  return date
    ? `tháng ${new Date(date).getMonth()} 
  ${new Date(date).getUTCFullYear()}`
    : '';
};

function PostDetailMain({ post }) {
  return (
    <Paper sx={{ overflow: 'hidden', borderRadius: 4 }}>
      <Box sx={{ position: 'relative', mb: 3 }}>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={getPathImage(post?.imageUrl)}
        />
        <Typography
          sx={(theme) => ({
            position: 'absolute',
            top: 0,
            left: 0,
            p: { xs: 3, sm: 4 },
            pt: { xs: 3, sm: 4, md: 6 },
            fontSize: { xs: 30, sm: 40, md: 50 },
            fontWeight: 800,
            color: theme.palette.common.white,
          })}
        >
          {getTitleSlice(post?.title, 100)}
        </Typography>
        <Stack
          sx={{
            p: { xs: 3, sm: 5 },
            position: 'absolute',
            bottom: 0,
            left: 0,
          }}
          direction="row"
        >
          <Avatar sx={{ mr: 1 }} alt="Remy Sharp" src={getPathAvatar(post?.avatarImage)} />
          <Stack>
            <Typography sx={(theme) => ({ color: theme.palette.common.white })} variant="subtitle2">
              {post?.userName}
            </Typography>
            <Typography sx={{ color: blueGrey[400] }} variant="caption">
              {getDateString(post?.createDate)}
            </Typography>
          </Stack>
        </Stack>
        <PostDetailShareButton />
      </Box>
      <Container>
        <CustomizeDiv>
          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
        </CustomizeDiv>
      </Container>
    </Paper>
  );
}

export default PostDetailMain;
