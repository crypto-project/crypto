// @flow
import { createAction } from "redux-actions";
import type { Action, ExchangeRateData } from "../types";

type FetchCompleteActionCreator = (
  payload: {|
    base: string,
    target: string,
    data: ExchangeRateData,
  |},
) => Action;

export const REQUEST_EXCHANGE_RATE = "REQUEST_EXCHANGE_RATE";
export const FETCH_EXCHANGE_RATE_COMPLETE = "FETCH_EXCHANGE_RATE_COMPLETE";

export const requestExchangeRate = (base: string, target: string): Action => ({
  type: REQUEST_EXCHANGE_RATE,
  payload: { base, target }
});

export const fetchExchangeRateComplete: FetchCompleteActionCreator = ({ data, base, target }) => {
  if (!data) {
    return {
      type: FETCH_EXCHANGE_RATE_COMPLETE,
      payload: {
        base,
        target,
        error: new Error('Foo'),
      },
    }
  }

  return {
    type: FETCH_EXCHANGE_RATE_COMPLETE,
    payload: {
      base,
      target,
      data,
    },
  }
}
