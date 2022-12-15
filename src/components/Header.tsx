import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import HeaderInterface from '../interfaces/HeaderInterface';
import styles from '../styles/HeaderStyles'

const Header = (props: HeaderInterface) => {
  const { assets, selectedBook, handleChangeSelectedBook } = props;

  const capitalAssets = () => assets.map(a => a.toUpperCase()).join('/')

  return (
    <Container style={styles.container}>
      <Typography variant='h3' style={styles.assets}>{capitalAssets()}</Typography>
      <Button onClick={() => handleChangeSelectedBook('order')}>
        <img
          src="./contents/icons/orderBook.svg"
          style={selectedBook === 'order' ? {} : styles.notSelected}
        />
      </Button>
      <Button onClick={() => handleChangeSelectedBook('buy')}>
        <img
          src="./contents/icons/buyBook.svg"
          style={selectedBook === 'buy' ? {} : styles.notSelected}
        />
      </Button>
      <Button onClick={() => handleChangeSelectedBook('sell')}>
        <img
          src="./contents/icons/sellBook.svg"
          style={selectedBook === 'sell' ? {} : styles.notSelected}
        />
      </Button>
    </Container>
  )
}

export default Header;
