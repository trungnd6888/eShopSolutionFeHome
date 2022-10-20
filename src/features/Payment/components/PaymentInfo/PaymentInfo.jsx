import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from 'react';

PaymentInfo.propTypes = {};

function PaymentInfo(props) {
  const [value, setValue] = React.useState(false);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography sx={{ display: 'block', mb: 4 }} variant="button">
        Thông tin thanh toán
      </Typography>
      <Stack spacing={2}>
        <TextField name="name" variant="outlined" label="Họ tên" size="small"></TextField>
        <TextField name="email" variant="outlined" label="Email" size="small"></TextField>
        <TextField name="tel" variant="outlined" label="Điện thoại" size="small"></TextField>
        <TextField
          name="address"
          variant="outlined"
          multiline
          rows={3}
          label="Địa chỉ"
          size="small"
        ></TextField>
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
        <Button variant="contained" component={Link} to="/home">
          Đặt hàng
        </Button>
      </Stack>
    </Paper>
  );
}

export default PaymentInfo;
