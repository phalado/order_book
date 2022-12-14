import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import BookTableHead from "./BookTableHead";
import BookTableBody from "./BookTableBody";

import styles from '../styles/TableStyles';

const BookTableContainer = ({ data }: {data: any}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.container} aria-label="simple table">
        <BookTableHead />
        <BookTableBody data={data} />
      </Table>
    </TableContainer>
  )
}

export default BookTableContainer
