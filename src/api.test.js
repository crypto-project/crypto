import api from "api";
import fetchMock from "fetch-mock";

test("tests it makes a request and gets data", async () => {
  fetchMock.restore().get("https://api.cryptonator.com/api/ticker/btc-usd", {
    ticker: {
      base: "BTC",
      target: "USD",
      price: "4207.82978560",
      volume: "26538.12188642",
      change: "6.84049133"
    },
    timestamp: 1505160841,
    success: true,
    error: ""
  });

  const result = await api.getCurrency("btc", "usd");
  expect(result).toEqual({
    base: "BTC",
    target: "USD",
    price: "4207.82978560",
    volume: "26538.12188642",
    change: "6.84049133"
  });
});

test("throws an error when status code is not ok", () => {
  fetchMock.restore().get("https://api.cryptonator.com/api/ticker/btc-usd", {
    status: 500
  });

  return expect(api.getCurrency("btc", "usd")).rejects.toMatchObject({
    status: 500
  });
});
