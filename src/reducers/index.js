// @flow
import { combineReducers } from 'redux';
import exchangeRates from './exchangeRates';
import currencies from './currencies';

export default combineReducers({
  exchangeRates,
  currencies,
});
