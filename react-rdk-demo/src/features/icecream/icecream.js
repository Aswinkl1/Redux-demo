import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfIceCream: 10,
};
const iceCreamslice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    orderIceCream: (state, action) => {
      state.numOfIceCream--;
    },
    restock: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
});

export default iceCreamslice.reducer;
export const { orderIceCream, restock } = iceCreamslice.actions;
