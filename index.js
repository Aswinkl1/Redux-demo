const redux = require("redux");

const INCREMENT = "INCREMENT";
const RESTOCK = "RESTOCK";
const BUYICECREAM = "BUYICECREAM";
const RESTOCKICECREAM = "RESTOCKICECREAM";

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

function orderIceCream() {
  return {
    type: BUYICECREAM,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: RESTOCKICECREAM,
    payload: qty,
  };
}

const initialStateForIceCream = {
  numOfIceCreams: 10,
};
const initialState = {
  numOfCakes: 10,
};
function reducerForCake(state = initialState, action) {
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

function reducerForIceCream(state = initialStateForIceCream, action) {
  switch (action.type) {
    case BUYICECREAM: {
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    }
    case RESTOCKICECREAM: {
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

const combined = redux.combineReducers({
  cake: reducerForCake,
  iceCream: reducerForIceCream,
});

const store = redux.createStore(combined);

console.log("inital state", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

const actions = redux.bindActionCreators(
  { orderCake, restock, orderIceCream, restockIceCream },
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
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(3);
unsubscribe();
