import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  sampleList: [],
  cartCount: 0,
};

const sampleSlice = createSlice({
  name: "sample",
  initialState: INITIAL_STATE,
  reducers: {
    addCount: (state) => {
      state.cartCount = 1;
    },
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
     
      state.cartCount -= 1;

    },
  },
});

export const { AddCount, increment, decrement } = sampleSlice.actions;
export default sampleSlice.reducer;