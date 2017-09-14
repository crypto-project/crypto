// @flow
import { EXCHANGE_RATE_REQUESTED, FETCH_EXCHANGE_RATE_COMPLETE } from "actions";
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
    case EXCHANGE_RATE_REQUESTED: {
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
    }

    case FETCH_EXCHANGE_RATE_COMPLETE: {
      const { base, target } = action.payload;

      if (action.payload.error) {
        return {
          ...state,
          [`${base}-${target}`]: {
            isLoading: false,
            isError: true,
            data: {}
          }
        }
      }

      const { data } = action.payload;

      return {
        ...state,
        [`${base}-${target}`]: {
          isLoading: false,
          isError: false,
          data,
        }
      };
    }

    default:
      return state;
  }
};
