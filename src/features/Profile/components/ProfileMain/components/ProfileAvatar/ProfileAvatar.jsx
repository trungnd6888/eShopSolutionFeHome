import styled from '@emotion/styled';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { alpha, Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import avatarImage from '../../../../../../../images/avatar.jpg';

ProfileAvatar.propTypes = {};

function ProfileAvatar(props) {
  const [imageUrl, setImageUrl] = React.useState(avatarImage);

  const handleChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
    setImageUrl(url);
  };

  const CustomizeLabel = styled('label')`
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 120px;
    &:hover {
      cursor: pointer;
    }
    & .overlay {
      transition: opacity 0.6s;
      opacity: 0;
    }
    &:hover .overlay {
      opacity: 1;
    }
  `;

  const CustomizeStack = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    opacity: 0.8,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.black, 0.3),
    color: theme.palette.common.white,
  }));

  return (
    <Paper sx={{ p: 6, display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2} width={120} textAlign="center">
        <CustomizeLabel>
          <TextField onChange={handleChange} sx={{ display: 'none' }} type="file" />
          <CustomizeStack spacing={0.5} className="overlay">
            <AddAPhotoIcon sx={(theme) => ({ color: theme.palette.common.white })} />
            <Typography variant="caption">Tải ảnh</Typography>
          </CustomizeStack>
        </CustomizeLabel>
        <Typography fontSize={11}>
          Ảnh đại diện <br />
          (kích thước lớn nhất 3mb)
        </Typography>
      </Stack>
    </Paper>
  );
}

export default ProfileAvatar;
