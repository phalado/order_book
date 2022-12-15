import { createSlice } from '@reduxjs/toolkit';
import OrderBookSlice from '../interfaces/OrderBookSlice';

const initialState = {
  symbol: '',
  choosenAssets: ['', ''],
  lastUpdateId: 0,
  actualPrice: 0,
  lastPrice: 0,
  bids: [['', '']],
  asks: [['', '']],
  selectedBook: 'order'
}

const workPayload = (array: string[][]) => (
  array.filter((bid: string[]) => (Number(bid[1]) > 0))
)

const orderBookSlicer = createSlice({
  name: 'orderBook',
  initialState,
  reducers: {
    changeActualPrice: (state: OrderBookSlice, action: { payload: number }) => ({
      ...state,
      lastPrice: state.actualPrice,
      actualPrice: action.payload
    }),
    updateLastUpdateId: (state: OrderBookSlice, action: { payload: number }) => ({
      ...state,
      lastUpdateId: action.payload
    }),
    addBids: (state: OrderBookSlice, action: { payload: string[][] }) => ({
      ...state,
      bids: [...workPayload(action.payload)]
    }),
    addAsks: (state: OrderBookSlice, action: { payload: string[][] }) => ({
      ...state,
      asks: [...workPayload(action.payload)]
    }),
    changeChoosenAssets: (state: OrderBookSlice, action: { payload: string[] }) => ({
      ...state,
      choosenAssets: action.payload
    }),
    changeSelectedOrderBook: (state: OrderBookSlice, action: { payload: string }) => ({
      ...state,
      selectedBook: action.payload
    }),
  }
})

export const {
  changeActualPrice,
  updateLastUpdateId,
  addBids,
  addAsks,
  changeChoosenAssets,
  changeSelectedOrderBook
} = orderBookSlicer.actions
export default orderBookSlicer
