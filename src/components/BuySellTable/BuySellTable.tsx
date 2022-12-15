import { Table } from '@mui/material'
import React from 'react'
import BookTableContainerInterface from '../../interfaces/BookTableContainerInterface'
import styles from '../../styles/TableStyles';
import BuySellTableBody from './BuySellTableBody';
import BuySellTableHead from './BuySellTableHead';

const BuySellTable = (props: BookTableContainerInterface) => {
  return (
    <Table sx={styles.table} aria-label="simple table">
      <BuySellTableHead { ...props } />
      <BuySellTableBody data={props.data} asks={props.asks} />
    </Table>
  )
}

export default BuySellTable
