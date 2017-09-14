import reducer from "./currencies";
import { exchangeRateRequested } from "actions";

describe("reducer", () => {
  test("handles EXCHANGE_RATE_REQUESTED action", () => {
    const base = "a";
    const target = "b";
    const action = exchangeRateRequested(base, target);
    const initialState = [null, null];
    const result = reducer(initialState, action);
    expect(result).toEqual([base, target]);
  });
});
