import reducers from "./index";

test("reducers", () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({});
});
