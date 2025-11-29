import { orderIceCream } from "../icecream/icecream";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state, action) => {
      // we can just mutate the state because the toolkit uses immer behind the scenes
      state.numOfCakes--;
    },

    reStock: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
  // This extra reducer was removed we need to use the builder for now on
  // extraReducers: {
  //   ["iceCream/orderIceCream"]: (state, action) => {
  //     state.numOfIceCream--;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(orderIceCream, (state) => {
      state.numOfCakes--;
    });
  },
});

console.log(cakeSlice.reducer.toString());
console.log("actioin", cakeSlice.actions.ordered());

export default cakeSlice.reducer;
export const { ordered, reStock } = cakeSlice.actions;
