// @flow
import { combineReducers } from "redux";
import exchangeRates from "./exchangeRates";
import currencies from "./currencies";

const reducers = {
  exchangeRates,
  currencies
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
