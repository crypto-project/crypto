// @flow
import { EXCHANGE_RATE_REQUESTED } from "actions";
import type { Action } from "../types";

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
