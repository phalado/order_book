import OrderBookSlice from "./OrderBookSlice"

export default interface AppInterface {
  changeActualPrice: (newPrice: number) => void
  updateLastUpdateId: (id: number) => void
  orderBook: OrderBookSlice
  addBids: (bids: string[][]) => void
  addAsks: (asks: string[][]) => void
  changeChoosenAssets: (assets: string[]) => void
  changeSelectedOrderBook: (selectedBook: string) => void
  changeAggregators: (newAggregators: number[]) => void
}
