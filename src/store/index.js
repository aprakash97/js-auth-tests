import { combineReducers, createStore } from "redux";
import itemsReducer from "./items/reducer";
// import tipPercentageReducer from './tip-percentage/reducer';

// const reducer = combineReducers({
//   items: itemsReducer,
//   // tipPercentage: tipPercentageReducer
// });

const reducer = (state = {}, action) => {
  return {
    ...state,
    items: itemsReducer(state.items, action),
  };
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
