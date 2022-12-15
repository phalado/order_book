import React from "react";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import BookTableContainerInterface from "../../interfaces/BookTableContainerInterface";
import styles from '../../styles/TableStyles'

const BookTableHead = (props: BookTableContainerInterface) => {
  const { asks, actualPrice = 0, lastPrice = 0 } = props

  let actualPriceColor = '#b7bdc6'
  if (actualPrice > lastPrice) actualPriceColor = '#0ecb81'
  else if (actualPrice < lastPrice) actualPriceColor = '#f6465d'

  const priceArrow = () => {
    if (actualPrice === lastPrice) return null

    if (actualPrice > lastPrice) return <span style={styles.arrow}>&#8593;</span>

    return <span style={styles.arrow}>&#8595;</span>
  }

  if (asks) {
    return (
      <TableHead>
        <TableRow>
          <TableCell style={{ ...styles.actualPrice, color: actualPriceColor }}>
            {actualPrice.toFixed(2)}
            {priceArrow()}
          </TableCell>
          <TableCell align="left" style={styles.head}>{lastPrice.toFixed(2)}</TableCell>
          <TableCell align="right" style={styles.head}>More</TableCell>
        </TableRow>
      </TableHead>
    )
  }

  return (
    <TableHead>
      <TableRow>
        <TableCell style={styles.head}>Price</TableCell>
        <TableCell align="right" style={styles.head}>Amount</TableCell>
        <TableCell align="right" style={styles.head}>Total</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default BookTableHead
