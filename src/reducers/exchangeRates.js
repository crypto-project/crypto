// @flow
import { REQUEST_EXCHANGE_RATE } from "actions";
import type { Action, ExchangeRateData } from "../types";

type State = {
  [string]: {|
    isLoading: boolean,
    isError: boolean,
    data: ExchangeRateData
  |}
};
const initial = {};

export default (state: State = initial, action: Action) => {
  switch (action.type) {
    case REQUEST_EXCHANGE_RATE:
      const { base, target } = action.payload;
      if (base === null || target === null) return state;
      return {
        ...state,
        [`${base}-${target}`]: {
          isLoading: true,
          isError: false,
          data: {}
        }
      };
    default:
      return state;
  }
};
