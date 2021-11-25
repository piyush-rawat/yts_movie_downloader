import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { moviesReducer } from "./reducers/moviesReducer";
import { searchReducer } from "./reducers/searchReducer";

const reducers = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
