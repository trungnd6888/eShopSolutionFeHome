import { Paper, Stack, Typography } from '@mui/material';
import CartRow from './components/CartRow/CartRow';
import { PropTypes } from 'prop-types';

CartRow.propTypes = {
  onFetchList: PropTypes.func,
  list: PropTypes.array,
};

CartRow.defaultValues = {
  onFetchList: null,
  list: null,
};

function CartTable({ onFetchList, list }) {
  const handleFetchList = () => {
    if (onFetchList) onFetchList();
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography sx={{ mb: 3, display: 'block' }} variant="button">
        Chi tiết đơn hàng
      </Typography>

      <Stack spacing={3}>
        {list?.length > 0 ? (
          list?.map((item) => (
            <CartRow onFetchList={handleFetchList} key={item.productId} item={item} />
          ))
        ) : (
          <Typography variant="overline" textAlign="center">
            Giỏ hàng trống
          </Typography>
        )}
      </Stack>
    </Paper>
  );
}

export default CartTable;
