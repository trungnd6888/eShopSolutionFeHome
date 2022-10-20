import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Container, Paper, Stack, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import PostDetailShareButton from './components/PostDetailShareButton/PostDetailShareButton';

PostDetailMain.propTypes = {};

function PostDetailMain(props) {
  return (
    <Paper sx={{ overflow: 'hidden', borderRadius: 4 }}>
      <Box sx={{ position: 'relative', mb: 3 }}>
        <img
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src="../src/images/post01.jpg"
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
          Cách Phân Biệt Đồng Hồ Chính Hãng Và Đồng Hồ Giả
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
          <Avatar sx={{ mr: 1 }} alt="Remy Sharp" src="../src/images/avatar.jpg" />
          <Stack>
            <Typography sx={(theme) => ({ color: theme.palette.common.white })} variant="subtitle2">
              Nguyễn Đức Trung
            </Typography>
            <Typography sx={{ color: blueGrey[400] }} variant="caption">
              tháng 10 2022
            </Typography>
          </Stack>
        </Stack>

        <PostDetailShareButton />
      </Box>
      <Container>
        <Stack spacing={3} sx={{ mb: 6 }}>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint fuga recusandae
            minima iure nesciunt eligendi aliquid adipisci minus sed. Nam eius accusamus qui quasi,
            sed laboriosam recusandae quos voluptatum.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum consequuntur rerum,
            molestias animi impedit voluptatibus earum nobis esse provident? Molestias, ex sed
            numquam porro iste cum sit accusamus nostrum error!
          </Typography>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
            src="../src/images/post01.jpg"
          />
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint fuga recusandae
            minima iure nesciunt eligendi aliquid adipisci minus sed. Nam eius accusamus qui quasi,
            sed laboriosam recusandae quos voluptatum. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
            <br />
            <br />
            Illum consequuntur rerum, molestias animi impedit voluptatibus earum nobis esse
            provident? Molestias, ex sed numquam porro iste cum sit accusamus nostrum error! Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Nam sint fuga recusandae minima iure
            nesciunt eligendi aliquid adipisci minus sed. Nam eius accusamus qui quasi, sed
            laboriosam recusandae quos voluptatum. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </Typography>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }}
            src="../src/images/post01.jpg"
          />
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br />
            <br />
            Nam sint fuga recusandae minima iure nesciunt eligendi aliquid adipisci minus sed. Nam
            eius accusamus qui quasi, sed laboriosam recusandae quos voluptatum. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit.
          </Typography>
        </Stack>
      </Container>
    </Paper>
  );
}

export default PostDetailMain;
