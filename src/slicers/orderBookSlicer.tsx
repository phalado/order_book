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
  selectedBook: 'order',
  aggregators: [0.000001, 0.00001, 0.0001, 0.001, 0.01, 0.1, 1, 10, 100],
  choosenAggregator: 0.000001
}

const workPayload = (array: string[][], aggregator: number) => {
  let newArray = array.filter((value: string[]) => (Number(value[1]) > 0))

  if (aggregator < 1) {
    const fixed = String(aggregator).split('.')[1].length
    newArray = newArray.map((value: string[]) => [Number(value[0]).toFixed(fixed), value[1]])
  } else {
    newArray = newArray.map((value: string[]) => (
      [String(Math.round(Number(value[0]) / aggregator) * aggregator), value[1]])
    )
  }

  const uniqueValues: { [key: string]: number } = {}
  newArray.forEach((value: any) => {
    if (value[0] in uniqueValues) uniqueValues[value[0]] += Number(value[1])
    else uniqueValues[value[0]] = Number(value[1])
  })

  return Object.entries(uniqueValues).map((v: [string, number]) => [v[0], String(v[1])])
}

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
      bids: [...workPayload(action.payload, state.choosenAggregator)]
    }),
    addAsks: (state: OrderBookSlice, action: { payload: string[][] }) => ({
      ...state,
      asks: [...workPayload(action.payload, state.choosenAggregator)]
    }),
    changeChoosenAssets: (state: OrderBookSlice, action: { payload: string[] }) => ({
      ...state,
      choosenAssets: action.payload
    }),
    changeSelectedOrderBook: (state: OrderBookSlice, action: { payload: string }) => ({
      ...state,
      selectedBook: action.payload
    }),
    changeAggregators: (state: OrderBookSlice, action: { payload: number[] }) => ({
      ...state,
      aggregators: action.payload,
      choosenAggregator: action.payload[0]
    }),
    changeChoosenAggregator: (state: OrderBookSlice, action: { payload: number }) => ({
      ...state,
      choosenAggregator: action.payload
    }),
  }
})

export const {
  changeActualPrice,
  updateLastUpdateId,
  addBids,
  addAsks,
  changeChoosenAssets,
  changeSelectedOrderBook,
  changeAggregators,
  changeChoosenAggregator
} = orderBookSlicer.actions
export default orderBookSlicer
