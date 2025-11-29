const store = require("./app/store");
const { fetchUser } = require("./features/user/userSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require("./features/icecream/icecream").icecreamActions;
store.subscribe(() => {
  console.log("updated state ", store.getState());
});
console.log("intital state", store.getState());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.reStock(3));

// store.dispatch(icecreamActions.orderIceCream());
// store.dispatch(icecreamActions.orderIceCream());
// store.dispatch(icecreamActions.orderIceCream());

// store.dispatch(icecreamActions.restock(3));

store.dispatch(fetchUser());
