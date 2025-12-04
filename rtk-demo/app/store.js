const configureStore = require("@reduxjs/toolkit").configureStore;
// const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice").default;
const iceCreamslice = require("../features/icecream/icecream");
const userReducer = require("../features/user/userSlice");
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamslice,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(reduxLogger.createLogger()),
});

module.exports = store;
