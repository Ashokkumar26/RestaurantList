import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers } from "redux";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  list: listReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
