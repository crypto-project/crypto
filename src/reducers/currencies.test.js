import reducer from "./currencies";
import { requestExchangeRate, fetchExchangeRateComplete } from "actions";

describe("reducer", () => {
  test("handles REQUEST_EXCHANGE_RATE action", () => {
    const base = "a";
    const target = "b";
    const action = requestExchangeRate(base, target);
    const initialState = [null, null];
    const result = reducer(initialState, action)
    expect(result).toEqual([base, target]);
  });
});
