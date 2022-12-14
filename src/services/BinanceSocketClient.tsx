import { Dispatch, SetStateAction } from 'react'

export const BinanceSocketClient = () => {
  const url = "wss://stream.binance.com:9443/ws"
  const socket = new WebSocket(url)

  socket.addEventListener('open', () => console.info('Socket connected'))
  socket.addEventListener('error', event => console.warn('Error', event))
  socket.addEventListener('close', event => console.log(event))
  socket.addEventListener('message', message => console.log(JSON.parse(message.data)))

  return socket
}

export const binanceConnect = (socket: any, setSubscribed: Dispatch<SetStateAction<boolean>>) => {
  console.log(socket.readyState)
  if (socket.readyState === 1) {
    const message = { "method": "SUBSCRIBE", "params": ["btcusdt@depth"], "id": 1 }
  
    socket.send(JSON.stringify(message))
    setSubscribed(true)
  }
}
