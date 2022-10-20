import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';

PaymentData.propTypes = {};

function PaymentData(props) {
  return (
    <Stack direction="row" spacing={2}>
      <img
        width={80}
        height="100%"
        style={{ objectFit: 'cover' }}
        src="../src/images/poster01.png"
      />
      <Stack spacing={0.6}>
        <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
          Đồng hồ chính hãng
        </Typography>
        <Typography variant="caption">Máy: Automatic</Typography>
        <Typography variant="caption">Kích thước: 40mm</Typography>
      </Stack>
    </Stack>
  );
}

export default PaymentData;
