import React from "react";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from '../../styles/TableStyles'

const BuySellTableHead = ({ assets }: { assets: string[] }) => {

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
