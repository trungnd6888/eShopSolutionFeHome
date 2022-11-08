import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import { formatter } from '../../../../../../utils/formatNumber';
import { PropTypes } from 'prop-types';
import React from 'react';
import { STORAGE_IMAGE } from '../../../../../../constants/common';
import { useDispatch } from 'react-redux';
import { decreament, increment } from '../../../../cartSlice';

CartRow.propTypes = {
  onFetchList: PropTypes.func,
  item: PropTypes.object,
};

CartRow.defaultValues = {
  onFetchList: null,
  item: null,
};

CartRow.propTypes;

function CartRow({ onFetchList, item }) {
  const [number, setNumber] = React.useState(item.quantity);
  const [mount, setMount] = React.useState(true);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const payload = { productId: item.productId, quantity: 1 };
    const action = increment(payload);
    dispatch(action);

    if (onFetchList) onFetchList();
    setNumber((pre) => pre + 1);
  };

  const handleSub = () => {
    if (number <= 1) return;

    const payload = { productId: item.productId, quantity: 1 };
    const action = decreament(payload);
    dispatch(action);

    if (onFetchList) onFetchList();
    setNumber((pre) => pre - 1);
  };

  const handleMount = () => {
    const payload = { productId: item.productId, quantity: number };
    const action = decreament(payload);
    dispatch(action);

    setMount(false);

    if (onFetchList) onFetchList();
    setNumber(0);
  };

  const getPathImageTheFirst = (imageList) => {
    const image = imageList?.find((x) => x.sortOrder === 0);
    if (!image) return STORAGE_IMAGE.PRODUCT_THUMBNAI;

    const url = image.imageUrl;
    const path = url ? `https://localhost:7095/${url}` : STORAGE_IMAGE.PRODUCT_THUMBNAI;

    return path;
  };

  return (
    <>
      {mount && (
        <Paper
          elevation={1}
          sx={{
            position: 'relative',
            borderRadius: 1,
            overflow: 'hidden',
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={3}>
              <Box sx={{ height: { xs: 230, sm: 130 } }}>
                <img
                  width="100%"
                  height="100%"
                  style={{ objectFit: 'cover' }}
                  src={getPathImageTheFirst(item.product?.images)}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Stack spacing={1.5} sx={{ p: 1, pl: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {item.product?.name}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Typography variant="body2">
                    {formatter.format(item.product?.price)} x {number}
                  </Typography>
                  <Typography variant="body2" color="error">
                    {formatter.format(number * item.product?.price)}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Typography
                    variant="body2"
                    sx={{
                      position: 'relative',
                      top: 4,
                    }}
                  >
                    Số lượng:
                  </Typography>
                  <Button sx={{ minWidth: 30 }} onClick={handleSub} variant="outlined" size="small">
                    <RemoveIcon fontSize="small" />
                  </Button>
                  <Typography variant="subtitle1">{number}</Typography>
                  <Button sx={{ minWidth: 30 }} onClick={handleAdd} variant="outlined" size="small">
                    <AddIcon fontSize="small" />
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <IconButton
            sx={{
              position: 'absolute',
              top: 3,
              right: 3,
            }}
            aria-label="close"
            onClick={handleMount}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Paper>
      )}
    </>
  );
}

export default CartRow;
