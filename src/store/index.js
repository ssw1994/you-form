import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import thunk from "redux-thunk";
import reducers from "./reducers";
export default createStore(reducers, applyMiddleware(promiseMiddleware, thunk));
