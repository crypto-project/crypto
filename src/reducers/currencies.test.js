import reducer, { getBaseCurrency, getTargetCurrency } from "./currencies";
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

describe("selectors", () => {
  test("get base currency", () => {
    const state = {
      currencies: ["USD", null]
    };
    const result = getBaseCurrency(state);
    expect(result).toBe("USD");
  });
  test("get target currency", () => {
    const state = {
      currencies: [null, "USD"]
    };
    const result = getTargetCurrency(state);
    expect(result).toBe("USD");
  });
});
