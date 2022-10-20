import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';
import postImage from '../../../../../../../images/post01.jpg';

const CustomizeTypography = styled(Typography)({
  '&:hover': { textDecoration: 'underline' },
  textDecoration: 'none',
  display: 'block',
  color: 'inherit',
  fontWeight: 600,
});

export default function PostDetailFooterItem() {
  return (
    <Card sx={{ mb: 1, borderRadius: 4 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={postImage} alt="green iguana" />
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            22 tháng 10
          </Typography>
          <CustomizeTypography
            component={Link}
            to="/post/postdetail"
            gutterBottom
            variant="subtitle2"
          >
            Cách phân biệt đồng hồ chính hãng
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
