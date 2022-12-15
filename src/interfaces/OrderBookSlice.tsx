export default interface OrderBookSlice {
  symbol: string
  lastUpdateId: number
  actualPrice: number
  lastPrice: number
  bids: any
  asks: any
}
