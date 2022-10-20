import React from 'react';
import { PropTypes } from 'prop-types';
import CartTable from './components/CartTable/CartTable';
import CartInfo from './components/CartInfo/CartInfo';
import { Box, Container, Grid, Stack, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CartHeader from './components/CartHeader/CartHeader';

Cart.propTypes = {};

function Cart(props) {
  const [total, setTotal] = React.useState(3000000);

  const handleTotal = (price) => {
    setTotal((pre) => pre + price);
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <CartHeader />
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <CartTable onTotal={handleTotal} />
            <Button sx={{ mt: 2, fontSize: 12 }} color="inherit" to="/home" component={Link}>
              <ArrowBackIosNewIcon sx={{ mr: 1, fontSize: 12 }} fontSize="small" />
              Tiếp tục mua
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CartInfo total={total} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Cart;
