const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk");
const initialState = {
  loding: true,
  user: [],
  error: "",
};

//This are action type
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_ERROR = "FETCH_USER_ERROR";

//This is called action creator
function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUEST,
  };
}

function fetchUserSucceeded(data) {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: data,
  };
}

function fetchUserError(error) {
  return {
    type: FETCH_USER_ERROR,
    payload: error,
  };
}

//This is called a reducer function and it hanldes the logic
function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST: {
      return {
        ...state,
        loding: true,
      };
    }
    case FETCH_USER_SUCCEEDED: {
      return {
        user: action.payload,
        loding: false,
        error: "",
      };
    }

    case FETCH_USER_ERROR: {
      return {
        loding: false,
        user: [],
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const user = res.data.map((user) => user.id);
        dispatch(fetchUserSucceeded(user));
      })
      .catch((error) => {
        dispatch(fetchUserError(error.message));
      });
  };
};

const store = redux.createStore(
  reducer,
  redux.applyMiddleware(thunkMiddleware.thunk)
);
console.log("initialState", store.getState());

store.subscribe(() => console.log("updated state", store.getState()));
store.dispatch(fetchUser());
