import {
  exchangeRateRequested,
  fetchExchangeRateComplete,
  FETCH_EXCHANGE_RATE_COMPLETE,
  requestExchangeRate
} from "./index";

test("fetchExchangeRateComplete success", () => {
  const base = "usd";
  const target = "btc";
  const data = { foo: "bar" };
  const action = fetchExchangeRateComplete({ data, base, target });

  expect(action).toEqual({
    type: FETCH_EXCHANGE_RATE_COMPLETE,
    payload: {
      base,
      target,
      data
    }
  });
});

test("fetchExchangeRateComplete error", () => {
  const base = "usd";
  const target = "btc";
  const data = new Error("Foo");
  const action = fetchExchangeRateComplete({ data, base, target });

  expect(action).toEqual({
    type: FETCH_EXCHANGE_RATE_COMPLETE,
    payload: {
      base,
      target,
      error: data
    }
  });
});

test("request exchange rate flow", async () => {
  const data = { foo: 'bar' };
  const api = {
    getCurrency: jest.fn(() => Promise.resolve(data))
  };
  const base = "usd";
  const target = "btc";
  const dispatch = jest.fn();
  const thunk = requestExchangeRate(base, target);
  const result = thunk(dispatch, undefined, api); // Promise

  await result.then((result) => {
    expect(dispatch).toHaveBeenCalledTimes(2);

    expect(dispatch).toHaveBeenCalledWith(
      exchangeRateRequested(base, target),
    )

    expect(dispatch).toHaveBeenCalledWith(
      fetchExchangeRateComplete({ base, target, data })
    )
  });
});
