import { Dispatch, SetStateAction } from 'react'

export const BinanceSocketClient = (handleWSMessage: (message: object) => void) => {
  const url = "wss://stream.binance.com:9443/ws"
  const socket = new WebSocket(url)

  socket.addEventListener('open', () => console.info('Socket connected'))
  socket.addEventListener('error', event => console.warn('Error', event))
  socket.addEventListener('close', event => console.log(event))
  socket.addEventListener('message', message => handleWSMessage(JSON.parse(message.data)))

  return socket
}

export const binanceConnect = (
  socket: any, setSubscribed: Dispatch<SetStateAction<boolean>>, choosenAssets: string[]
) => {
  const symbols = choosenAssets.join('')
  const message = { "method": "SUBSCRIBE", "params": [symbols + "@depth@1000ms"], "id": 1 }

  socket.send(JSON.stringify(message))
  setSubscribed(true)
}
