import styled from '@emotion/styled';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { alpha, Stack, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { useEffect } from 'react';

const FileInput = forwardRef(
  ({ label, onChange, onBlur, name, initImageUrl, defaultImageUrl }, ref) => {
    const [imageUrl, setImageUrl] = React.useState(initImageUrl);

    useEffect(() => {
      setImageUrl(initImageUrl);
    }, [initImageUrl]);

    const CustomizeLabel = styled('label')`
      background-image: url(${imageUrl || defaultImageUrl});
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 100%;
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 120px;
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
      cursor: 'pointer',
    }));

    const handleChange = (e) => {
      if (onChange) onChange(e);

      const url = URL.createObjectURL(e.target.files[0]);
      setImageUrl(url);
    };

    const handleBlur = () => {
      if (onBlur) {
        onBlur();
      }
    };

    return (
      <Stack spacing={2} width={120} textAlign="center">
        <CustomizeLabel>
          <TextField
            sx={{ display: 'none' }}
            onBlur={handleBlur}
            onChange={handleChange}
            type="file"
            ref={ref}
            name={name}
          />
          <CustomizeStack spacing={0.5} className="overlay">
            <AddAPhotoIcon sx={(theme) => ({ color: theme.palette.common.white })} />
            <Typography variant="caption">Tải ảnh</Typography>
          </CustomizeStack>
        </CustomizeLabel>
        <Typography fontSize={11}>
          {label?.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </Typography>
      </Stack>
    );
  }
);

FileInput.propTypes = {
  label: PropTypes.array,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  initImageUrl: PropTypes.string,
  defaultImageUrl: PropTypes.string,
};

FileInput.defaultValues = {
  label: null,
  onChange: null,
  onBlur: null,
  name: '',
  initImageUrl: '',
  defaultImageUrl: '',
};

export default FileInput;
