import React from "react";
import { shallow } from "enzyme";
import App from "./index";
import DisplayWidget from "containers/DisplayWidget";

describe("When I visit the homepage I want to see the currency display widget", () => {
  it("renders App", () => {
    const Wrapper = shallow(<App />);

    expect(Wrapper.find(DisplayWidget).exists()).toBe(true);
  });
});
