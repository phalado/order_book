import OrderBookSlice from "./OrderBookSlice"

export default interface AppInterface {
  changeActualPrice: (newPrice: number) => void
  updateLastUpdateId: (id: number) => void
  orderBook: OrderBookSlice
  addBids: (bids: string[][]) => void
  addAsks: (asks: string[][]) => void
}