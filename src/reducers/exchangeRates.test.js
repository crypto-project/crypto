import reducer from "./exchangeRates";
import { requestExchangeRate, fetchExchangeRateComplete } from "actions";

describe("reducer", () => {
  describe("handle REQUEST_EXCHNGE_RATE action", () => {
    test("changes loading state", () => {
      const base = "usd";
      const target = "btc";
      const action = requestExchangeRate(base, target);
      const initialState = {
        "usd-btc": {
          isLoading: false,
          isError: false,
          data: {}
        }
      };
      const result = reducer(initialState, action);
      expect(result).toEqual({
        "usd-btc": {
          isLoading: true,
          isError: false,
          data: {}
        }
      });
    });
    test.only("add new currecies", () => {
      const base = "a";
      const target = "b";
      const action = requestExchangeRate(base, target);
      const initialState = {
        "usd-btc": {
          isLoading: false,
          isError: false,
          data: {}
        }
      };
      const result = reducer(initialState, action);
      expect(result).toEqual({
        "usd-btc": {
          isLoading: false,
          isError: false,
          data: {}
        },
        "a-b": {
          isLoading: true,
          isError: false,
          data: {}
        }
      });
    });
  });

  xtest("handles FETCH_EXCHANGE_RATE_COMPLETE action", () => {});
});
