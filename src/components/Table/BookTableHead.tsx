import React from "react";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BookTableContainerInterface from "../../interfaces/BookTableContainerInterface";

const BookTableHead = (props: BookTableContainerInterface) => {
  const { asks, actualPrice, lastPrice } = props

  return (
    <TableHead>
      <TableRow>
        <TableCell>Price</TableCell>
        <TableCell align="right">Amount</TableCell>
        <TableCell align="right">Total</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default BookTableHead
