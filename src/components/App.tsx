import React, { useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BookTableContainer from './Table'
import { binanceConnect, BinanceSocketClient } from '../services/BinanceSocketClient';

const App = () => {
  const [socket] = useState(BinanceSocketClient())
  const [subscribed, setSubscribed] = useState(false)

  const bids = [
    ["0.01530400", "4.33400000"],
    ["0.01530300", "3.58400000"],
    ["0.01530200", "0.81800000"],
    ["0.01530100", "0.09800000"],
    ["0.01529800", "1.10300000"],
    ["0.01529700", "0.13100000"],
    ["0.01529600", "0.08300000"],
    ["0.01529500", "0.18100000"],
    ["0.01529400", "0.78500000"],
    ["0.01529300", "0.05100000"]
  ]

  const asks = [
    ["0.01530500", "6.82200000"],
    ["0.01530600", "7.22200000"],
    ["0.01530700", "3.90000000"],
    ["0.01530900", "0.65600000"],
    ["0.01531000", "0.73300000"],
    ["0.01531300", "0.16300000"],
    ["0.01531500", "1.19500000"],
    ["0.01531600", "2.65400000"],
    ["0.01531800", "0.80000000"],
    ["0.01532000", "1.04000000"]
  ]

  useEffect(() => {
    console.log('here', subscribed)
    if (subscribed === false) {
      setTimeout(() => binanceConnect(socket, setSubscribed), 2000)
    }
  }, [socket, subscribed])

  return (
    <div className="App">
      <BookTableContainer data={bids} />
      <BookTableContainer data={asks} />
    </div>
  );
}

export default App;
