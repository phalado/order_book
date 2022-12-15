import React from "react";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BookTableContainerInterface from "../../interfaces/BookTableContainerInterface";
import styles from '../../styles/TableStyles'

const BuySellTableHead = (props: BookTableContainerInterface) => {
  const { asks, assets } = props

  return (
    <TableHead>
      <TableRow>
        <TableCell style={styles.head}>
          {"Price (" + assets[1].toUpperCase() + ")"}
        </TableCell>
        <TableCell align="right" style={styles.head}>
          {"Amount (" + assets[0].toUpperCase() + ")"}
        </TableCell>
        <TableCell align="right" style={styles.head}>Total</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default BuySellTableHead
