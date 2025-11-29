import { configureStore } from "@reduxjs/toolkit";
// const reduxLogger = require("redux-logger");
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamslice from "../features/icecream/icecream";
import userReducer from "../features/user/userSlice";
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCream: iceCreamslice,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(reduxLogger.createLogger()),
});

export default store;
