import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Button, Container, Stack } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import { PropTypes } from 'prop-types';

ProductToolBar.propTypes = {
  onSearchChange: PropTypes.func,
  onSelectChange: PropTypes.func,
  onOpenFilter: PropTypes.func,
  selected: PropTypes.number,
};

ProductToolBar.defaultValues = {
  onSearchChange: null,
  onSelectChange: null,
  onOpenFilter: null,
  selected: 0,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: alpha(theme.palette.common.black, 0.23),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    // marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const selectList = [
  {
    value: 1,
    label: 'Giá: Thấp-Cao',
  },
  {
    value: 2,
    label: 'Giá: Cao-Thấp',
  },
  // {
  //   value: 3,
  //   label: 'Mới nhất',
  // },
  // {
  //   value: 4,
  //   label: 'Cũ nhất',
  // },
];

function ProductToolBar({ onSearchChange, onSelectChange, selected, onOpenFilter }) {
  const handleSelectChange = (e) => {
    if (onSelectChange) onSelectChange(e.target.value);
  };

  const handleSearchChange = (e) => {
    if (onSearchChange) onSearchChange({ keyword: e.target.value });
  };

  const handleOpenFilter = () => {
    if (onOpenFilter) onOpenFilter();
  };

  return (
    <Box
      sx={{ mb: 5, flexDirection: { xs: 'column', sm: 'row' } }}
      display="flex"
      justifyContent="space-between"
    >
      <Search sx={{ mb: { xs: 2, sm: 'auto' } }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={handleSearchChange}
          placeholder="Tìm sản phẩm..."
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>

      <Stack justifyContent="flex-end" direction="row" spacing={2}>
        <Button variant="text" color="inherit" onClick={handleOpenFilter}>
          Lọc
          <FilterListIcon sx={{ position: 'relative', bottom: 2.1, ml: 1 }} fontSize="small" />
        </Button>
        <TextField
          id="outlined-select-selected"
          select
          value={selected}
          size="small"
          onChange={handleSelectChange}
        >
          {selectList.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Stack>
    </Box>
  );
}

export default ProductToolBar;
