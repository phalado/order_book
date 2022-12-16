import { Table } from '@mui/material'
import React from 'react'
import BookTableContainerInterface from '../../interfaces/BookTableContainerInterface'
import styles from '../../styles/TableStyles';
import BuySellTableBody from './BuySellTableBody';
import BuySellTableHead from './BuySellTableHead';

const BuySellTable = (props: BookTableContainerInterface) => {
  const { data, bids, aggregator } = props;

  return (
    <Table sx={styles.table} aria-label="simple table">
      <BuySellTableHead assets={props.assets} />
      <BuySellTableBody data={data} bids={bids} aggregator={aggregator} />
    </Table>
  )
}

export default BuySellTable
