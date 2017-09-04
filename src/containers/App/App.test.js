import React from "react";
import { shallow } from "enzyme";
import App from "./index";
import SelectionWidget from "containers/SelectionWidget";

it("renders without crashing", () => {
  const Wrapper = shallow(<App />);
  expect(Wrapper.find(SelectionWidget).exists()).toBe(true);
});
