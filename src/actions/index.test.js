import {fetchExchangeRateComplete, FETCH_EXCHANGE_RATE_COMPLETE} from './index'

test('fetchExchangeRateComplete', () => {
  const base = 'usd';
  const target = 'btc';
  const data = { foo: 'bar' };
  const action= fetchExchangeRateComplete({ data, base, target })

  expect(action).toEqual({
    type: FETCH_EXCHANGE_RATE_COMPLETE,
    payload: {
      base,
      target,
      data,
    },
  })
})

test('fetchExchangeRateComplete', () => {
  const base = 'usd';
  const target = 'btc';
  const data = undefined;
  const action= fetchExchangeRateComplete({ data, base, target })

  expect(action).toEqual({
    type: FETCH_EXCHANGE_RATE_COMPLETE,
    payload: {
      base,
      target,
      error: new Error('Foo'),
    },
  })
})
