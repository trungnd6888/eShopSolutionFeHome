import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Box, Button, CardActionArea, CardActions, Chip, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatter } from '../../../../../../utils/formatNumber';
import { STORAGE_IMAGE } from '../../../../../../constants/common';

ProductItem.propTypes = {
  item: PropTypes.object,
};

ProductItem.defaultValues = {
  item: null,
};

export default function ProductItem({ item }) {
  return (
    <Card sx={{ mb: 1, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={
            item.images?.find((x) => x.sortOrder === 0)
              ? `https://localhost:7095${item.images.find((x) => x.sortOrder === 0).imageUrl}`
              : STORAGE_IMAGE.PRODUCT_THUMBNAI
          }
          alt="green iguana"
        />
        <CardContent sx={{ minHeight: 100 }}>
          <Typography
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
            component={Link}
            to={`${item.id}`}
            gutterBottom
            variant="subtitle2"
          >
            {item.name}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            {item.detail}
          </Typography>
        </CardContent>
        <Stack spacing={0.5} position="absolute" top={10} right={10}>
          {item.isNew && <Chip size="small" label="MỚI" color="primary" sx={{ borderRadius: 1 }} />}
          {item.isBestSale && (
            <Chip size="small" label="CHẠY" color="error" sx={{ borderRadius: 1 }} />
          )}
        </Stack>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="medium" color="primary">
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
