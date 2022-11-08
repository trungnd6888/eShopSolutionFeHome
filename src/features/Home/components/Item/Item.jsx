import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, CardActionArea, CardActions, Chip, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { STORAGE_IMAGE } from '../../../../constants/common';
import { formatter } from '../../../../utils/formatNumber';
import { open } from '../../../Auth/snackBarSlice';
import { increment } from '../../../Cart/cartSlice';

Item.propTypes = {
  item: PropTypes.object,
  onTotalQuantityCart: PropTypes.func,
};

Item.defaultValues = {
  item: null,
  onTotalQuantityCart: null,
};

export default function Item({ item, onTotalQuantityCart }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    try {
      const payload = { productId: item.id, quantity: 1 };
      const action = increment(payload);
      dispatch(action);

      if (onTotalQuantityCart) onTotalQuantityCart();

      const actionSnackbar = open({
        status: true,
        message: 'Thêm giỏ hàng thành công',
        type: 'success',
      });
      dispatch(actionSnackbar);
    } catch (error) {
      console.log('Fail to add to card: ', error);

      const actionSnackbar = open({
        status: true,
        message: 'Thêm giỏ hàng không thành công',
        type: 'error',
      });
      dispatch(actionSnackbar);
    }
  };

  const getPathImageTheFirst = (imageList) => {
    const image = imageList?.find((x) => x.sortOrder === 0);
    const path = image ? `https://localhost:7095${image.imageUrl}` : STORAGE_IMAGE.PRODUCT_THUMBNAI;
    return path;
  };

  return (
    <Card sx={{ mb: 1, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={getPathImageTheFirst(item?.images)}
          alt="green iguana"
          sx={{ borderRadius: '0!important', height: '200px!important' }}
        />
        <CardContent sx={{ minHeight: 120 }}>
          <Typography
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
            to={`/product/${item.id}`}
            component={Link}
            gutterBottom
            variant="h6"
          >
            {item.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {item.code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.detail}
          </Typography>
        </CardContent>
        <Stack spacing={1} sx={{ position: 'absolute', top: 10, right: 10 }}>
          {item.isNew && <Chip size="small" label="MỚI" color="primary" sx={{ borderRadius: 1 }} />}
          {item.isBestSale && (
            <Chip size="small" label="CHẠY" color="error" sx={{ borderRadius: 1 }} />
          )}
        </Stack>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="medium" color="primary" onClick={handleAddToCart}>
          <AddShoppingCartIcon sx={{ position: 'relative', bottom: 1, mr: 0.5, fontSize: 18 }} />
          Mua
        </Button>
        <Typography sx={{ p: 1 }} variant="subtitle2">
          {formatter.format(item.price)}
        </Typography>
      </CardActions>
    </Card>
  );
}
