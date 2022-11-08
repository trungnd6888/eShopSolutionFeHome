import React from 'react';
import PropTypes from 'prop-types';
import { Stack, Typography } from '@mui/material';
import paymentImage from '../../../../../../../images/poster01.png';
import { STORAGE_IMAGE } from '../../../../../../constants/common';

PaymentData.propTypes = {
  data: PropTypes.object,
};

PaymentData.defaultValues = {
  data: null,
};

function PaymentData({ data }) {
  const getPaymentPathImageTheFirst = (listImage) => {
    const image = listImage?.find((x) => x.sortOrder === 0);
    if (!image) return STORAGE_IMAGE.PRODUCT_THUMBNAI;

    const url = image.imageUrl;
    const path = `https://localhost:7095${url}`;

    return path;
  };

  return (
    <Stack direction="row" spacing={2}>
      <img
        width={90}
        height="100%"
        style={{ objectFit: 'cover' }}
        src={getPaymentPathImageTheFirst(data?.images)}
      />
      <Stack spacing={0.6}>
        <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
          {data.name}
        </Typography>
        <Typography variant="caption">{`Mã: ${data.code}`}</Typography>
        <Typography variant="caption">{`Thông tin: ${data.detail}`}</Typography>
      </Stack>
    </Stack>
  );
}

export default PaymentData;
