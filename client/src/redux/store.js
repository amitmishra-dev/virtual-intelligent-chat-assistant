import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import reducers from "./index";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/// store holds the state of the application
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
