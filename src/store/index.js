// @flow
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import thunk from "redux-thunk";

export default () => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
};
