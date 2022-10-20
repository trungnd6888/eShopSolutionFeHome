import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button, CardActionArea, CardActions, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { formatter } from '../../../../../../utils/formatNumber';

SearchItem.propTypes = {
  item: PropTypes.object,
};

SearchItem.defaultValues = {
  item: null,
};

export default function SearchItem({ item }) {
  return (
    <Card sx={{ mb: 1, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={item.src} alt="green iguana" />
        <CardContent sx={{ minHeight: 100 }}>
          <Typography
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
            component={Link}
            to="Searchdetail"
            gutterBottom
            variant="subtitle2"
          >
            {item.name}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            {item.desc}
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
          {formatter.format(item.price)}
        </Typography>
      </CardActions>
    </Card>
  );
}
