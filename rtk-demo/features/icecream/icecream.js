const createSlice = require("@reduxjs/toolkit").createSlice;

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

module.exports = iceCreamslice.reducer;
module.exports.icecreamActions = iceCreamslice.actions;
