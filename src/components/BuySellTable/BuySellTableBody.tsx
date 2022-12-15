import React, { useRef, useState } from "react";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import styles from '../../styles/TableStyles'

const BuySellTableBody = ({ data, asks }: { data: string[][], asks?: boolean }) => {
  const cellStyle = { ...styles.cell, color: asks ? '#0ecb81' : '#f6465d' }

  return (
    <TableBody>
      {data.map((row: string[], index: number) => (
        <>
          <TableRow
            hover
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={cellStyle}>{parseFloat(row[0]).toFixed(2)}</TableCell>
            <TableCell align="right" sx={styles.cell}>{parseFloat(row[1]).toFixed(5)}</TableCell>
            <TableCell align="right" sx={styles.cell}>{(Number(row[0]) * Number(row[1])).toFixed(5)}</TableCell>
          </TableRow>
        </>
      ))}
    </TableBody>
  )
}

export default BuySellTableBody
