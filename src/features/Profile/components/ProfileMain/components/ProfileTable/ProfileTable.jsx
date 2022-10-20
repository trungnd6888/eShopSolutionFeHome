import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('DH0001', 5, '1.000.000', 'Đang giao', '01/10/2022'),
  createData('DH0002', 10, '1.000.000', 'Đã giao', '01/10/2022'),
  createData('DH0003', 5, '1.000.000', 'Đang giao', '01/10/2022'),
  createData('DH0004', 10, '1.000.000', 'Đã giao', '01/10/2022'),
  createData('DH0005', 5, '1.000.000', 'Đang giao', '15/10/2022'),
];

export default function ProfileTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Đơn hàng</TableCell>
            <TableCell align="right">Tổng sản phẩm</TableCell>
            <TableCell align="right">Tổng tiền</TableCell>
            <TableCell align="right">Trạng thái</TableCell>
            <TableCell align="right">Ngày tạo đơn</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
