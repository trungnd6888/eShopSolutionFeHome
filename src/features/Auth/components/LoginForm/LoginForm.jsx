import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material';

LoginForm.propTypes = {};

function LoginForm(props) {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 9,
        }}
      >
        <Avatar sx={{ bgcolor: 'primary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" sx={{ mt: 1 }}>
          Đăng nhập
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField sx={{ mb: 3 }} fullWidth label="Tên đăng nhập" />
          <TextField sx={{ mb: 3 }} fullWidth type="password" label="Mật khẩu" />
          <Button variant="contained" fullWidth>
            Đăng nhập
          </Button>
        </Box>
        <Box
          sx={{
            width: '100%',
            mt: 2.4,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
          }}
        >
          <Link variant="body2">Quên mật khẩu?</Link>
          <Link variant="body2">Bạn chưa có tài khoản? Tạo mới</Link>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;
