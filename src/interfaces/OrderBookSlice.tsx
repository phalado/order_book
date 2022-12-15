export default interface OrderBookSlice {
  symbol: string
  choosenAssets: string[]
  lastUpdateId: number
  actualPrice: number
  lastPrice: number
  bids: any
  asks: any
}
