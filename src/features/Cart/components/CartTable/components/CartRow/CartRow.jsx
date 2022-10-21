import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Grid, IconButton, Paper, Stack, Typography } from '@mui/material';
import { formatter } from '../../../../../../utils/formatNumber';
import { PropTypes } from 'prop-types';
import cartImage from '../../../../../../../images/product01.png';
import React from 'react';

CartRow.propTypes = {
  onTotal: PropTypes.func,
};

CartRow.defaultValues = {
  onTotal: null,
};

CartRow.propTypes;

function CartRow({ onTotal }) {
  const [number, setNumber] = React.useState(1);
  const [mount, setMount] = React.useState(true);
  const price = 1000000;

  const handleAdd = () => {
    if (onTotal) onTotal(price);
    setNumber((pre) => pre + 1);
  };

  const handleSub = () => {
    if (number <= 1) return;

    if (onTotal) onTotal(-price);
    setNumber((pre) => pre - 1);
  };

  const handleMount = () => {
    setMount(false);

    if (onTotal) onTotal(-(price * number));
    setNumber(0);
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
                <img width="100%" height="100%" style={{ objectFit: 'cover' }} src={cartImage} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Stack spacing={1.5} sx={{ p: 1, pl: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Đồng hồ Rolex chính hãng
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Typography variant="body2">
                    {formatter.format(price)} x {number}
                  </Typography>
                  <Typography variant="body2" color="error">
                    {formatter.format(number * price)}
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
