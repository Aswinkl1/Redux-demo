const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamslice = require("../features/icecream/icecream");
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamslice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger.createLogger()),
});

module.exports = store;
