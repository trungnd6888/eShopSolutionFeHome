import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

PaymentInfo.propTypes = {
  onSubmit: PropTypes.func,
};

PaymentInfo.defaultValues = {
  onSubmit: null,
};

function PaymentInfo({ onSubmit }) {
  const schema = yup
    .object()
    .shape({
      name: yup.string().required('Vui lòng nhập tên khách hàng'),
      email: yup.string().email('Vui lòng nhập đúng định dạng email'),
      address: yup.string(),
      tel: yup.string().required('Vui lòng nhập điện thoại'),
    })
    .required();

  const [value, setValue] = React.useState(false);
  const initialValues = {
    name: '',
    tel: '',
    address: '',
    email: '',
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (values) => {
    if (onSubmit) onSubmit(values);
  };

  return (
    <Paper component="form" onSubmit={handleSubmit(handleOnSubmit)} sx={{ p: 3 }}>
      <Typography sx={{ display: 'block', mb: 4 }} variant="button">
        Thông tin thanh toán
      </Typography>
      <Stack spacing={2}>
        <Controller
          control={control}
          name="name"
          render={({ field: { name, value, onChange } }) => (
            <TextField
              name={name}
              value={value}
              onChange={onChange}
              variant="outlined"
              label="Họ tên *"
              size="small"
              error={!!errors[name]}
              helperText={errors[name]?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { name, value, onChange } }) => (
            <TextField
              name={name}
              value={value}
              onChange={onChange}
              variant="outlined"
              label="Email"
              size="small"
              error={!!errors[name]}
              helperText={errors[name]?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="tel"
          render={({ field: { name, value, onChange } }) => (
            <TextField
              name={name}
              value={value}
              onChange={onChange}
              variant="outlined"
              label="Điện thoại *"
              size="small"
              error={!!errors[name]}
              helperText={errors[name]?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="address"
          render={({ field: { name, value, onChange } }) => (
            <TextField
              name={name}
              value={value}
              onChange={onChange}
              variant="outlined"
              multiline
              rows={3}
              label="Địa chỉ"
              size="small"
              error={!!errors[name]}
              helperText={errors[name]?.message}
            />
          )}
        />

        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="cod"
            name="radio-buttons-group"
            onChange={(e) => {
              if (e.target.value === 'credit') {
                setValue(true);
                return;
              }
              setValue(false);
            }}
          >
            <FormControlLabel value="cod" control={<Radio />} label="Thanh toán khi nhận hàng" />
            <FormControlLabel
              value="credit"
              control={<Radio />}
              label="Thanh toán qua thẻ Visa, Mastercard"
            />
          </RadioGroup>
        </FormControl>
        {value && (
          <>
            <TextField name="code" variant="outlined" label="Mã thẻ" size="small"></TextField>
            <TextField name="date" variant="outlined" label="Ngày hết hạn" size="small"></TextField>
          </>
        )}
        <Button variant="contained" type="submit">
          Đặt hàng
        </Button>
      </Stack>
    </Paper>
  );
}

export default PaymentInfo;
