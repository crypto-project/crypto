// @flow
import type { Action, ExchangeRateData } from "../types";

type FetchCompleteActionCreator = (
  payload: {|
    base: string,
    target: string,
    data: Error | ExchangeRateData,
  |},
) => Action;

export const EXCHANGE_RATE_REQUESTED = "EXCHANGE_RATE_REQUESTED";
export const FETCH_EXCHANGE_RATE_COMPLETE = "FETCH_EXCHANGE_RATE_COMPLETE";

export const requestExchangeRate = (base: string, target: string) => {
  return (dispatch: Function, getState, api) => {
    dispatch(exchangeRateRequested(base, target));

    return api.getCurrency(base, target)
      .then(data => dispatch(fetchExchangeRateComplete({ data, base, target})))
      .catch(error => dispatch(fetchExchangeRateComplete({ data: error, base, target})));
  }
}

export const exchangeRateRequested = (base: string, target: string): Action => ({
  type: EXCHANGE_RATE_REQUESTED,
  payload: { base, target }
});

export const fetchExchangeRateComplete: FetchCompleteActionCreator = ({
  data,
  base,
  target,
}) => {
  if (data instanceof Error) {
    return {
      type: FETCH_EXCHANGE_RATE_COMPLETE,
      payload: {
        base,
        target,
        error: data,
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
