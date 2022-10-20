import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

SearchTitle.propTypes = {
  length: PropTypes.number,
  text: PropTypes.string,
};

SearchTitle.defaultValues = {
  length: 0,
  text: '',
};

const CustomizeSpan = styled('span')({
  fontWeight: 'bold',
});

function SearchTitle({ length, text }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography sx={{ textAlign: 'center', mb: 4 }}>
        Có <CustomizeSpan>{length}</CustomizeSpan> sản phẩm với từ khóa:{' '}
        <CustomizeSpan>{text}</CustomizeSpan>
      </Typography>
    </Box>
  );
}

export default SearchTitle;
