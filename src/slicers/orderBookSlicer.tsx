import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  symbol: '',
  
}

const orderBookSlicer = createSlice({
  name: 'orderBook',
  initialState: 0,
  reducers: {
    changeIndex: (_state: number = 0, action: { payload: number }) => action.payload
  }
})

export const { changeIndex } = orderBookSlicer.actions
export default orderBookSlicer
