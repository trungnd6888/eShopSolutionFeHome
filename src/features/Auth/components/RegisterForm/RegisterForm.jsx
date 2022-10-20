import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material';

RegisterForm.propTypes = {};

function RegisterForm(props) {
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
          Đăng ký
        </Typography>
        <Box sx={{ mt: 3 }}>
          <TextField sx={{ mb: 3 }} fullWidth label="Tên đăng nhập" />
          <TextField sx={{ mb: 3 }} fullWidth type="password" label="Mật khẩu" />
          <TextField sx={{ mb: 3 }} fullWidth type="password" label="Xác nhận mật khẩu" />
          <TextField sx={{ mb: 3 }} fullWidth label="Email" />
          <TextField sx={{ mb: 3 }} fullWidth label="Điện thoại" />
          <Button variant="contained" fullWidth>
            Đăng ký
          </Button>
        </Box>
        <Box
          sx={{
            width: '100%',
            mt: 2.4,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Link variant="body2">Bạn đã có tài khoản? Đăng nhập</Link>
        </Box>
      </Box>
    </Container>
  );
}

export default RegisterForm;
