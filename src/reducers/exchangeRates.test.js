import reducer from "./exchangeRates";
import { exchangeRateRequested, fetchExchangeRateComplete } from "actions";

describe("reducer", () => {
  describe("handle EXCHANGE_RATE_REQUESTED action", () => {
    test("changes loading state", () => {
      const base = "usd";
      const target = "btc";
      const action = exchangeRateRequested(base, target);
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
    test("add new currencies", () => {
      const base = "a";
      const target = "b";
      const action = exchangeRateRequested(base, target);
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

  describe("handles FETCH_EXCHANGE_RATE_COMPLETE action", () => {
    test("changes loading state", () => {
      const base = "usd";
      const target = "btc";
      const data = { foo: "bar" };
      const action = fetchExchangeRateComplete({ base, target, data });
      const initialState = {
        "usd-btc": {
          isLoading: true,
          isError: false,
          data: {}
        }
      };
      const result = reducer(initialState, action);

      expect(result).toEqual({
        "usd-btc": {
          isLoading: false,
          isError: false,
          data,
        }
      });
    });

    test("changes error state", () => {
      const base = "usd";
      const target = "btc";
      const action = fetchExchangeRateComplete({ base, target, data: new Error('foo') });
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
          isError: true,
          data: {},
        }
      });
    });
  });
});

