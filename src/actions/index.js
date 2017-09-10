// @flow
import type { Action, ExchangeRateData } from "../types";
import { createAction } from "redux-actions";

type FetchCompleteActionCreator = (
  dateOrError: ExchangeRateData | Error
) => Action;

export const REQUEST_EXCHANGE_RATE = "REQUEST_EXCHANGE_RATE";
export const FETCH_EXCHANGE_RATE_COMPLETE = "FETCH_EXCHANGE_RATE_COMPLETE";

export const requestExchangeRate = (base: string, target: string): Action => ({
  type: REQUEST_EXCHANGE_RATE,
  payload: { base, target }
});

export const fetchExchangeRateComplete: FetchCompleteActionCreator = createAction(
  FETCH_EXCHANGE_RATE_COMPLETE
);
