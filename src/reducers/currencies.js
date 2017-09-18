// @flow
import { EXCHANGE_RATE_REQUESTED } from "actions";
import type { Action, State as GlobalState } from "../types";

type State = [string | null, string | null];
const initial = [null, null];

export default (state: State = initial, action: Action) => {
  switch (action.type) {
    case EXCHANGE_RATE_REQUESTED:
      const { base, target } = action.payload;
      return [base, target];
    default:
      return state;
  }
};

export const getBaseCurrency = (state: GlobalState) => {
  return state.currencies[0];
};

export const getTargetCurrency = (state: GlobalState) => {
  return state.currencies[1];
};
