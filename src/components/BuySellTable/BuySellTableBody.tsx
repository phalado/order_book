import React from "react";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import styles from '../../styles/TableStyles'

const BookTableBody = (
  { data, bids, aggregator }: { data: string[][], bids?: boolean, aggregator: number }
  ) => {
  const cellStyle = { ...styles.cell, color: bids ? '#0ecb81' : '#f6465d' }
  const fixed = aggregator >= 1 ? 0 : String(aggregator).split('.')[1].length

  return (
    <TableBody>
      {data.map((row: string[], index: number) => (
        <>
          <TableRow
            hover
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={cellStyle}>{parseFloat(row[0]).toFixed(fixed)}</TableCell>
            <TableCell align="right" sx={styles.cell}>{parseFloat(row[1]).toFixed(5)}</TableCell>
            <TableCell align="right" sx={styles.cell}>{(Number(row[0]) * Number(row[1])).toFixed(5)}</TableCell>
          </TableRow>
        </>
      ))}
    </TableBody>
  )
}

export default BookTableBody
