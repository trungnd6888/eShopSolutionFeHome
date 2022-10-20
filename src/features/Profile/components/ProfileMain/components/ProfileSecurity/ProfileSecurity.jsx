import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, TextField, Paper } from '@mui/material';

ProfileSecurity.propTypes = {};

function ProfileSecurity(props) {
  return (
    <Paper sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            size="small"
            defaultValue="123456"
            label="Mật khẩu cũ"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            size="small"
            defaultValue="123456"
            label="Mật khẩu mới"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="password"
            size="small"
            defaultValue="123456"
            label="Xác nhận mật khẩu"
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

export default ProfileSecurity;
