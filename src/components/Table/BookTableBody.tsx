import React from "react";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import styles from '../../styles/TableStyles'

const BookTableBody = ({ data, asks }: { data: string[][], asks?: boolean }) => {
  const cellStyle = { ...styles.cell }

  return (
    <TableBody>
      {data.map((row: any, index: number) => (
        <TableRow
          key={index}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell sx={styles.cell}>{parseFloat(row[0]).toFixed(2)}</TableCell>
          <TableCell align="right" sx={styles.cell}>{parseFloat(row[1]).toFixed(5)}</TableCell>
          <TableCell align="right" sx={styles.cell}>{(row[0] * row[1]).toFixed(5)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}

export default BookTableBody
