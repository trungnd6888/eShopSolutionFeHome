import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import FileInput from '../../../../../../components/FileInput/FileInput';
import { STORAGE_IMAGE } from '../../../../../../constants/common';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

ProfileForm.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func,
};

ProfileForm.defaultValues = {
  user: null,
  onSubmit: null,
};

function ProfileForm({ user, onSubmit }) {
  const schema = yup.object().shape({
    userName: yup.string().required('Vui lòng nhập tên đăng nhập'),
    fullName: yup.string().required('Vui lòng nhập họ tên'),
    email: yup.string().email('Vui lòng nhập đúng định dạng email'),
    phoneNumber: yup.string().required('Vui lòng nhập số điện thoại'),
    address: yup.string(),
  });

  const initialValues = {
    email: '',
    fullName: '',
    userName: '',
    phoneNumber: '',
    address: '',
    avatarImage: [],
  };

  const resetValues = {
    email: user?.email || '',
    fullName: user?.fullName || '',
    userName: user?.userName || '',
    phoneNumber: user?.phoneNumber || '',
    address: user?.address || '',
    avatarImage: [],
  };

  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (values) => {
    if (onSubmit) onSubmit(values);
  };

  const handleFormReset = (data) => {
    reset(data, {
      keepErrors: false,
      keepDirty: false,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false,
    });
  };

  const getUrlImage = (path) => {
    return path ? `https://localhost:7095${path}` : '';
  };

  useEffect(() => {
    handleFormReset(resetValues);
  }, [user]);

  return (
    <Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4} item>
          <Paper sx={{ p: 6, display: 'flex', justifyContent: 'center' }}>
            <FileInput
              {...register('avatarImage')}
              initImageUrl={getUrlImage(user?.avatarImage)}
              defaultImageUrl={STORAGE_IMAGE.AVATAR_THUMBNAI}
              label={['Ảnh đại diện', <br />, '(Kích thước lớn nhất 3mb)']}
            />
          </Paper>
        </Grid>
        <Grid xs={12} md={8} item>
          <Paper sx={{ p: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="userName"
                  control={control}
                  render={({ field: { name, value, onChange } }) => (
                    <TextField
                      name={name}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      id="userName"
                      label="Tên đăng nhập *"
                      size="small"
                      error={!!errors[name]}
                      helperText={errors[name]?.message}
                      disabled
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="fullName"
                  control={control}
                  render={({ field: { name, value, onChange } }) => (
                    <TextField
                      name={name}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      id={name}
                      label="Họ tên *"
                      size="small"
                      error={!!errors[name]}
                      helperText={errors[name]?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field: { name, value, onChange } }) => (
                    <TextField
                      name={name}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      id={name}
                      label="Điện thoại *"
                      size="small"
                      error={!!errors[name]}
                      helperText={errors[name]?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { name, value, onChange } }) => (
                    <TextField
                      name={name}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      id={name}
                      label="Email"
                      size="small"
                      error={!!errors[name]}
                      helperText={errors[name]?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Controller
                  name="address"
                  control={control}
                  render={({ field: { name, value, onChange } }) => (
                    <TextField
                      name={name}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      id={name}
                      label="Địa chỉ"
                      size="small"
                      rows={3}
                      multiline
                      error={!!errors[name]}
                      helperText={errors[name]?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Box sx={{ textAlign: 'right' }}>
                  <Button sx={{ maxWidth: 120 }} type="submit" size="small" variant="contained">
                    Cập nhật
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfileForm;
