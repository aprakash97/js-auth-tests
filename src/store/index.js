import { combineReducers, createStore } from "redux";
import usersReducer from "./users/reducer";
// import tipPercentageReducer from './tip-percentage/reducer';

// const reducer = combineReducers({
//   items: itemsReducer,
//   // tipPercentage: tipPercentageReducer
// });

const reducer = (state = {}, action) => {
  return {
    ...state,
    users: usersReducer(state.users, action),
  };
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
