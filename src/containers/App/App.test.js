import React from "react";
import { shallow } from "enzyme";
import App from "./index";
import DisplayWidget from "containers/DisplayWidget";
import SelectionWidget from "containers/SelectionWidget";

describe("When I visit the homepage I want to see the currency display widget", () => {
  it("renders App", () => {
    const Wrapper = shallow(<App />);

    expect(Wrapper.find(".app").exists()).toBe(true);
  });

  it("renders DisplayWidget", () => {
    const Wrapper = shallow(<App />);

    expect(Wrapper.find(DisplayWidget).exists()).toBe(true);
  });

  it("renders SelectionWidget", () => {
    const Wrapper = shallow(<App />);

    expect(Wrapper.find(SelectionWidget).exists()).toBe(true);
  });
});
