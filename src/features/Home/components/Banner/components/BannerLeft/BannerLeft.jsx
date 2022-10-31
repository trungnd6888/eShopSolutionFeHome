import { Box, Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { alpha } from '@mui/material';
// Import Swiper React components
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import posterImage from '../../../../../../images/poster01.png';

BannerLeft.propTypes = {};

function BannerLeft(props) {
  return (
    <Paper
      sx={(theme) => ({
        borderRadius: 4,
        height: { xs: 'auto', sm: 280 },
        width: '100%',
        minWidth: 143,
        backgroundColor: alpha(theme.palette.common.black, 0.05),
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        textAlign: { xs: 'center', sm: 'left' },
      })}
    >
      <Box
        sx={{
          flexGrow: 1,
          pl: { sm: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, mt: { xs: 2 } }}>
          Chào mừng đến với E-Watch
        </Typography>
        <Button
          component={Link}
          to="/product"
          variant="contained"
          sx={{
            minWidth: 105,
            ml: { xs: 'auto', sm: 0 },
            mr: { xs: 'auto' },
          }}
        >
          Xem ngay
        </Button>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: 268,
          pl: { sm: 2 },
          pr: { sm: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <img width="100%" style={{ padding: 1, minWidth: 150 }} src={posterImage} />
      </Box>
    </Paper>
  );
}

export default BannerLeft;
