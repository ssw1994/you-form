import { combineReducers } from "redux";
import recordsReducer from "./records.reducer";
const appReducer = combineReducers({
  recordsState: recordsReducer,
});
export default function reducer(state, action) {
  return appReducer(state, action);
}
