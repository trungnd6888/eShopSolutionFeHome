import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Chip } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import productImage from '../../../../../images/Rolex01.jpg';

export default function Item() {
  return (
    <Card sx={{ mb: 1, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={productImage} alt="green iguana" />
        <CardContent sx={{ minHeight: 120 }}>
          <Typography
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
            to="/product/productdetail"
            component={Link}
            gutterBottom
            variant="h6"
          >
            Đồng hồ Rolex 123445435
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Automatic
          </Typography>
        </CardContent>
        <Chip
          size="small"
          label="NEW"
          color="primary"
          sx={{ position: 'absolute', top: 10, right: 10, borderRadius: 1 }}
        />
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button size="medium" color="primary">
          <AddShoppingCartIcon sx={{ position: 'relative', bottom: 1, mr: 0.5, fontSize: 18 }} />
          Mua
        </Button>
        <Typography sx={{ p: 1 }} variant="subtitle2">
          1.000.000 &#8363;
        </Typography>
      </CardActions>
    </Card>
  );
}
