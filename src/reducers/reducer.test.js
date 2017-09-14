import reducers from "./index";

test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({exchangeRates:{},currencies:[null,null]});
});
