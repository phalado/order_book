export default interface OrderBookSlice {
  symbol: string
  choosenAssets: string[]
  lastUpdateId: number
  actualPrice: number
  lastPrice: number
  bids: string[][]
  asks: string[][]
  selectedBook: string
  aggregators: number[]
  choosenAggregator: number
}
