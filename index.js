const redux = require("redux");

const INCREMENT = "INCREMENT";
function orderCake(quantity = 1) {
  return {
    type: INCREMENT,
    quantity: quantity,
  };
}

const initialState = {
  numOfCakes: 10,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.quantity,
      };
    }
    default: {
      return state;
    }
  }
}

const store = redux.createStore(reducer);

console.log("inital state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

const unsubscribe1 = store.subscribe(() => {
  console.log("updated state1", store.getState());
});
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake(2));

unsubscribe();
store.dispatch(orderCake(2));
