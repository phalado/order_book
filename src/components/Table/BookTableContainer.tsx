import React from "react";
import Table from '@mui/material/Table';
import BookTableHead from "./BookTableHead";
import BookTableBody from "./BookTableBody";

import styles from '../../styles/TableStyles';
import BookTableContainerInterface from "../../interfaces/BookTableContainerInterface";

const BookTableContainer = (props: BookTableContainerInterface) =>  (
  <Table sx={styles.table} aria-label="simple table">
    <BookTableHead { ...props } />
    <BookTableBody data={props.data} asks={props.asks} />
  </Table>
)

export default BookTableContainer
