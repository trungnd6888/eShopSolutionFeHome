import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, Chip, Divider, Rating, Stack, Typography } from '@mui/material';
import React from 'react';

ProductDetailInfo.propTypes = {};

function ProductDetailInfo(props) {
  const [value, setValue] = React.useState(2);
  const [number, setNumber] = React.useState(1);

  const handleAdd = () => {
    setNumber((pre) => pre + 1);
  };

  const handleSub = () => {
    if (number > 1) setNumber((pre) => pre - 1);

    return;
  };

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1}>
        <Chip sx={{ borderRadius: 4 }} size="small" label="Có hàng" color="success" />
        <Chip sx={{ borderRadius: 4 }} size="small" label="Đồng hồ nam" />
      </Stack>
      <Typography variant="h5">Đồng hồ Rolex chính hãng</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, mollitia error.
      </Typography>
      <Typography variant="h5">1.000.000 &#8363;</Typography>
      <Stack direction="row" spacing={1}>
        <Rating
          size="small"
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography sx={{ textDecoration: 'underline' }} variant="body2">
          236 đánh giá
        </Typography>
      </Stack>
      <Stack spacing={3}>
        <Divider />
        <Stack direction="row" spacing={2}>
          <Typography
            variant="body2"
            sx={{
              position: 'relative',
              top: 6,
            }}
          >
            Số lượng:
          </Typography>
          <Button sx={{ minWidth: 30 }} onClick={handleSub} variant="outlined" size="small">
            <RemoveIcon />
          </Button>
          <Typography variant="h6">{number}</Typography>
          <Button sx={{ minWidth: 30 }} onClick={handleAdd} variant="outlined" size="small">
            <AddIcon />
          </Button>
        </Stack>
        <Divider />
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="error" size="large">
          Mua ngay
        </Button>
        <Button variant="contained" size="large">
          Thêm giỏ hàng
        </Button>
      </Stack>
    </Stack>
  );
}

export default ProductDetailInfo;
