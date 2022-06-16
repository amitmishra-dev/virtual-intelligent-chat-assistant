import { combineReducers } from "redux";

import { userReducers } from "./UsersInfo/reducer/reducer";
import { bookReducers } from "./BookInfo/reducer/reducer";
/// combine reducer helps your reducer to manage their own slices of state.
/// it will combine all reducers passed to it into a single reducing function
/// that can be exported as default
const reducers = combineReducers({
  user: userReducers,
  book: bookReducers,
});
export default reducers;
