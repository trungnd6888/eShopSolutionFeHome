import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, TextField, Paper } from '@mui/material';

ProfileForm.propTypes = {};

function ProfileForm(props) {
  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" defaultValue="trungnd" label="Tên đăng nhập" disabled />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="Họ tên" defaultValue="Nguyễn Đức Trung" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth size="small" label="Số điện thoại" defaultValue="0387088282" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            rows={3}
            size="small"
            label="Email"
            defaultValue="trungk47s5@gmail.com"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            multiline
            rows={3}
            size="small"
            label="Địa chỉ"
            defaultValue="Long Biên - Hà Nội"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Box sx={{ textAlign: 'right' }}>
            <Button sx={{ maxWidth: 120 }} size="small" variant="contained">
              Cập nhật
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ProfileForm;
