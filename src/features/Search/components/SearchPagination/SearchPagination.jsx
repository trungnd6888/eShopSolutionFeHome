import React from 'react';
import PropTypes from 'prop-types';
import { Box, Pagination } from '@mui/material';

SearchPagination.propTypes = {
  count: PropTypes.number,
  page: PropTypes.number,
  onChange: PropTypes.func,
};

SearchPagination.defaultValues = {
  count: 0,
  page: 0,
  onChange: null,
};

function SearchPagination({ count, page, onChange }) {
  const handleChange = (e, p) => {
    if (onChange) onChange(e, p);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3, mt: 3 }}>
      <Pagination count={count} size="medium" page={page} color="primary" onChange={handleChange} />
    </Box>
  );
}

export default SearchPagination;
