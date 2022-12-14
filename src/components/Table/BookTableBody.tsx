import React from "react";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const BookTableBody = ({ data }: { data: any }) => {
  return (
    <TableBody>
      {data.map((row: any, index: number) => (
        <TableRow
          key={index}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell>{row[0]}</TableCell>
          <TableCell align="right">{parseFloat(row[1]).toFixed(5)}</TableCell>
          <TableCell align="right">{(row[0] * row[1]).toFixed(5)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default BookTableBody
