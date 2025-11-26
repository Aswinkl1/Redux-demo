const redux = require("redux");
const produce = require("immer").produce;
const intialState = {
  name: "Aswin",
  address: {
    street: "124 street kochi",
    pincode: 467392,
  },
};

const UPDATESTREET = "UPDATESTREET";

function updateStreetActionCreator(value) {
  return {
    type: UPDATESTREET,
    payload: value,
  };
}

function reducer(state = intialState, action) {
  switch (action.type) {
    case UPDATESTREET: {
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };

      return produce(state, (def) => {
        def.address.street = action.payload;
      });
    }
    default: {
      return state;
    }
  }
}

const store = redux.createStore(reducer);

const unsubcribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});

console.log("initial state", store.getState());
store.dispatch(updateStreetActionCreator("i am invinsisble"));
unsubcribe();
