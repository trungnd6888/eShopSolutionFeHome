import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { STORAGE_IMAGE } from '../../../../../../constants/common';
import { getTitleSlice } from '../../../../../../utils/common';

PostDetailFooterItem.propTypes = {
  item: PropTypes.object,
};

PostDetailFooterItem.defaultValues = {
  item: null,
};

const CustomizeTypography = styled(Typography)({
  '&:hover': { textDecoration: 'underline' },
  textDecoration: 'none',
  display: 'block',
  color: 'inherit',
  fontWeight: 600,
});

export default function PostDetailFooterItem({ item }) {
  const getPathImage = (url) => {
    const path = item.imageUrl
      ? `${import.meta.env.VITE_BASE_URL}${item.imageUrl}`
      : STORAGE_IMAGE.PRODUCT_THUMBNAI;
    return path;
  };

  const getDateString = (dateString) => {
    return `${new Date(dateString).getDate()} tháng 
    ${new Date(dateString).getMonth()} ${new Date(dateString).getUTCFullYear()}`;
  };

  return (
    <Card sx={{ mb: 1, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={getPathImage(item?.imageUrl)}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            {getDateString(item?.createDate)}
          </Typography>
          <CustomizeTypography
            component={Link}
            to={`/post/${item?.id}`}
            gutterBottom
            variant="subtitle2"
          >
            {getTitleSlice(item.title, 60)}
          </CustomizeTypography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'end', flexWrap: 'wrap' }}>
          <Button size="small" sx={{ ml: 0, color: 'text.secondary' }}>
            <TextsmsOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            683
          </Button>
          <Button size="small" sx={{ ml: 0, color: 'text.secondary' }}>
            <RemoveRedEyeOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            6.68k
          </Button>
          <Button size="small" sx={{ ml: 0, color: 'text.secondary' }}>
            <ShareOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            8.89k
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
