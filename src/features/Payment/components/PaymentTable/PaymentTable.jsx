import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PaymentData from '../PaymentTable/components/PaymentData/PaymentData';
import { formatter } from '../../../../utils/formatNumber';
import { Typography } from '@mui/material';

PaymentTable.propTypes = {
  list: PropTypes.array,
};

PaymentTable.defaultValues = {
  list: null,
};

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function qtyTotal(items) {
  return items?.map(({ qty }) => qty).reduce((sum, i) => sum + i, 0);
}

function total(items) {
  return items?.map(({ price }) => price).reduce((sum, i) => sum + i, 0) || 0;
}

function PaymentTable({ list }) {
  const rows = list?.map((x) =>
    createRow(<PaymentData data={x.product} />, x.quantity, x.product?.price)
  );

  const invoiceQty = qtyTotal(rows);
  const invoiceTotal = total(rows);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography sx={{ display: 'block', mb: 4 }} variant="button">
        Thông tin đơn hàng
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell>Sản phẩm</TableCell>
              <TableCell align="right">Số lượng</TableCell>
              <TableCell align="right">Đơn giá</TableCell>
              <TableCell align="right">Tổng tiền</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow key={`${index}${row.qty}`}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">{formatter.format(row.unit)} </TableCell>
                <TableCell align="right">{formatter.format(row.price)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>
                <Typography variant="subtitle2">Tổng sản phẩm</Typography>
              </TableCell>
              <TableCell align="right">{invoiceQty}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <Typography variant="subtitle2">Tổng tiền</Typography>
              </TableCell>
              <TableCell align="right">{formatter.format(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default PaymentTable;
