const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamslice = require("../features/icecream/icecream");
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamslice,
  },
});

module.exports = store;
