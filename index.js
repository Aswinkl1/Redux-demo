const redux = require("redux");

const INCREMENT = "INCREMENT";
const RESTOCK = "RESTOCK";
function orderCake(quantity = 1) {
  return {
    type: INCREMENT,
    payload: quantity,
  };
}

function restock(quantity = 1) {
  return {
    type: RESTOCK,
    payload: quantity,
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
        numOfCakes: state.numOfCakes - action.payload,
      };
    }
    case RESTOCK: {
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
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

const actions = redux.bindActionCreators(
  { orderCake, restock },
  store.dispatch
);
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restock(3));

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restock(3);

unsubscribe();
