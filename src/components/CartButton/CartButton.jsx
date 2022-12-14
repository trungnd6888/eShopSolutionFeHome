import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import SpeedDial from '@mui/material/SpeedDial';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import PropTypes from 'prop-types';

CartButton.propTypes = {
  badgeContent: PropTypes.number,
};

CartButton.defaultValues = {
  badgeContent: 0,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartButton({ badgeContent }) {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: 'fixed', top: '68vh', right: 9 }}
      icon={
        <StyledBadge component={Link} to="cart" badgeContent={badgeContent} color="secondary">
          <ShoppingCartIcon sx={(theme) => ({ color: theme.palette.common.white })} />
        </StyledBadge>
      }
    />
  );
}
