import 'isomorphic-fetch';
import api from "api";
import ConfigureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
// import fetchMock from "fetch-mock";

// nock.recorder.rec();
// nock.disableNetConnect();

describe('API facade', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  test("tests it makes a request and gets data", async () => {
    nock('https://api.cryptonator.com')
    .get('/api/ticker/btc-usd')
    .reply(200, {
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

  // test("throws an error when status code is not ok", () => {
  //   fetchMock.restore().get("https://api.cryptonator.com/api/ticker/btc-usd", {
  //     status: 500
  //   });

  //   return expect(api.getCurrency("btc", "usd")).rejects.toMatchObject({
  //     status: 500
  //   });
  // });
})
