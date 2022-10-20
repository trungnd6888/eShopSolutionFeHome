import { Paper, Stack, Typography } from '@mui/material';
import CartRow from './components/CartRow/CartRow';
import { PropTypes } from 'prop-types';

CartRow.propTypes = {
  onTotal: PropTypes.func,
};

CartRow.defaultValues = {
  onTotal: null,
};

function CartTable({ onTotal }) {
  const handleTotal = (price) => {
    if (onTotal) onTotal(price);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, display: 'block' }} variant="button">
        Chi tiết đơn hàng
      </Typography>
      <Stack spacing={3}>
        <CartRow onTotal={handleTotal} />
        <CartRow onTotal={handleTotal} />
        <CartRow onTotal={handleTotal} />
      </Stack>
    </Paper>
  );
}

export default CartTable;
