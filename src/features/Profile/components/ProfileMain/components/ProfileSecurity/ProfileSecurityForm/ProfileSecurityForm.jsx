import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Paper } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

ProfileSecurityForm.propTypes = {
  onSubmit: PropTypes.func,
  onSnackbar: PropTypes.func,
};

ProfileSecurityForm.defaultValues = {
  onSubmit: null,
  onSnackbar: null,
};

function ProfileSecurityForm({ onSubmit }) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup.object().shape({
    currentPassword: yup.string().required('Vui lòng điền mật khẩu cũ'),
    password: yup
      .string()
      .required('Vui lòng điền mật khẩu mới')
      .matches(
        '^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z]).{6,}$',
        'Mật khẩu phải ít nhất 6 ký tự (bao gồm ' +
          'ít nhất một số, một chữ hoa, một chữ thường và một ký tự đặc biệt)'
      ),
    confirmPassword: yup
      .string()
      .required('Vui lòng điền xác nhận mật khẩu mới')
      .oneOf([yup.ref('password')], 'Mật khẩu xác nhận chưa khớp'),
  });

  const form = useForm({
    defaultValues: {
      currentPassword: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting } = formState;

  const handleSubmitForm = async (values) => {
    if (onSubmit) await onSubmit(values, handleResetForm);
  };

  const handleResetForm = () => {
    reset({
      confirmPassword: '',
      password: '',
      currentPassword: '',
    });
  };

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((x) => !x);
  };
  const toggleShowCurrentPassword = () => {
    setShowCurrentPassword((x) => !x);
  };

  return (
    <Paper>
      <Box component="form" sx={{ p: 3 }} onSubmit={handleSubmit(handleSubmitForm)}>
        <FormControl sx={{ mb: 3 }} variant="outlined" fullWidth error={!!errors.currentPassword}>
          <InputLabel size="small" htmlFor="outlined-adornment-current-password">
            Mật khẩu cũ
          </InputLabel>
          <OutlinedInput
            {...register('currentPassword')}
            id="outlined-adornment-current-password"
            type={showCurrentPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle current password visibility"
                  onClick={toggleShowCurrentPassword}
                  edge="end"
                >
                  {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Mật khẩu cũ"
            size="small"
          />
          <FormHelperText id="component-error-text">
            {errors?.currentPassword?.message}
          </FormHelperText>
        </FormControl>

        <FormControl sx={{ mb: 3 }} variant="outlined" fullWidth error={!!errors.password}>
          <InputLabel size="small" htmlFor="outlined-adornment-password">
            Mật khẩu mới
          </InputLabel>
          <OutlinedInput
            {...register('password')}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Mật khẩu mới"
            size="small"
          />
          <FormHelperText id="component-error-text">{errors?.password?.message}</FormHelperText>
        </FormControl>

        <FormControl sx={{ mb: 1 }} variant="outlined" fullWidth error={!!errors.confirmPassword}>
          <InputLabel size="small" htmlFor="outlined-adornment-confirm-password">
            Nhập lại mật khẩu mới
          </InputLabel>
          <OutlinedInput
            {...register('confirmPassword')}
            id="outlined-adornment-confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={toggleShowConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Nhập lại mật khẩu mới"
            size="small"
          />
          <FormHelperText id="component-error-text">
            {errors?.confirmPassword?.message}
          </FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
          Cập nhật
        </Button>
      </Box>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isSubmitting}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Paper>
  );
}

export default ProfileSecurityForm;
