import { createSlice } from '@reduxjs/toolkit';
import OrderBookSlice from '../interfaces/OrderBookSlice';

const initialState = {
  symbol: '',
  lastUpdateId: 0,
  actualPrice: 0,
  lastPrice: 0,
  bids: [['', '']],
  asks: [['', '']]
}

const workPayload = (array: string[][], state: OrderBookSlice) => (
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
      bids: [...workPayload(action.payload, state)]
    }),
    addAsks: (state: OrderBookSlice, action: { payload: string[][] }) => ({
      ...state,
      asks: [...workPayload(action.payload, state)]
    })
  }
})

export const { changeActualPrice, updateLastUpdateId, addBids, addAsks } = orderBookSlicer.actions
export default orderBookSlicer
