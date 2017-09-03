import reducers from "./reducer";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({});
});
