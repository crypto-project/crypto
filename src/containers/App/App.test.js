import React from "react";
import { shallow } from "enzyme";
import App from "./index";
import SelectionWidget from "containers/SelectionWidget";

describe("When I visit the homepage I want to see the currency selection widget", () => {
  it("renders SelectionWidget on homepage", () => {
    const Wrapper = shallow(<App />);
    expect(Wrapper.find(SelectionWidget).exists()).toBe(true);
  });
});
