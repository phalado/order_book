import React, { useEffect, useState} from 'react';
import BookTableContainer from './Table'
import { binanceConnect, BinanceSocketClient } from '../services/BinanceSocketClient';
import DepthSnapShopt from '../services/DepthSnapshot';
import Header from './Header'

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import tableStyles from '../styles/TableStyles'
import AppInterface from '../interfaces/Appinterface';
import ChooseAssets from './ChooseAssets';
import BuySellTable from './BuySellTable/BuySellTable';

const App = (props: AppInterface) => {
  const {
    orderBook,
    changeActualPrice,
    updateLastUpdateId,
    addBids,
    addAsks,
    changeChoosenAssets,
    changeSelectedOrderBook
  } = props;
  const [socket, setSocket] = useState({ readyState: -1 })
  const [subscribed, setSubscribed] = useState(false)
  const [connectTries, setConnectTries] = useState(0)
  const [snapshot, setSnapshot] = useState({ lastUpdateId: 0, bids: [], asks: [] });
  const [bids, setBids] = useState(orderBook.bids)
  const [asks, setAsks] = useState(orderBook.asks)

  const calcActualPrice = (data: { bids: string[][], asks: string[][] }) => {
    const bids = data.bids.map((value) => Number(value[0]))
      .reduce((partial, value) => partial + value, 0)
    const asks = data.asks.map((value) => Number(value[0]))
      .reduce((partial, value) => partial + value, 0)

    return (bids + asks) / (data.bids.length + data.asks.length)
  }

  const handleWSMessage = (message: any) => {
    if (message.e === 'depthUpdate') {
      addBids(message.b)
      addAsks(message.a)
      updateLastUpdateId(message.u)
      changeActualPrice(calcActualPrice({ bids: message.b, asks: message.a }))
    }
  }

  const handleChangeSelectedBook = (selectedBook: string) => {
    changeSelectedOrderBook(selectedBook)
  }

  useEffect(() => {
    if (snapshot.lastUpdateId === 0) DepthSnapShopt(setSnapshot);
  }, [snapshot])

  useEffect(() => {
    if (!snapshot) return

    updateLastUpdateId(snapshot.lastUpdateId)
    changeActualPrice(calcActualPrice(snapshot))
  }, [snapshot])

  useEffect(() => {
    if (socket.readyState === -1) setSocket(BinanceSocketClient(handleWSMessage))
  })

  useEffect(() => {
    if (
      subscribed === true ||
      socket.readyState === -1 ||
      orderBook.choosenAssets.some(asset => asset === '')
    ) return

    if (socket.readyState === 0) {
      setTimeout(() => setConnectTries(state => state + 1), 2000)
      console.warn(connectTries)
      return
    }
    
    binanceConnect(socket, setSubscribed, orderBook.choosenAssets)
  }, [socket, subscribed, connectTries, orderBook.choosenAssets])

  useEffect(() => setBids(orderBook.bids), [orderBook.bids])
  useEffect(() => setAsks(orderBook.asks), [orderBook.asks])

  if (orderBook.choosenAssets.includes('')) {
    return (
      <div className="App">
        <ChooseAssets changeChoosenAssets={changeChoosenAssets} />
      </div>
    )
  }

  if (orderBook.selectedBook === 'order') {
    return (
      <div className="App">
        <Header
          assets={orderBook.choosenAssets}
          selectedBook={orderBook.selectedBook}
          handleChangeSelectedBook={handleChangeSelectedBook}
        />
        <TableContainer component={Paper} sx={tableStyles.container}>
          <BookTableContainer
            data={bids.slice(0, 15)}
            assets={orderBook.choosenAssets}
          />
          <BookTableContainer
            data={asks.slice(0, 15)}
            actualPrice={orderBook.actualPrice}
            lastPrice={orderBook.lastPrice}
            assets={orderBook.choosenAssets}
            asks
          />
        </TableContainer>
      </div>
    );
  }

  return (
    <div className="App">
        <Header
          assets={orderBook.choosenAssets}
          selectedBook={orderBook.selectedBook}
          handleChangeSelectedBook={handleChangeSelectedBook}
        />
        <TableContainer component={Paper} sx={tableStyles.container}>
          <BuySellTable
            data={orderBook.selectedBook === 'buy' ? asks : bids}
            assets={orderBook.choosenAssets}
            asks={orderBook.selectedBook === 'buy'}
          />
        </TableContainer>
      </div>
  )
}

export default App;
