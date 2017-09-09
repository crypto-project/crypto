import React from "react";
import { shallow } from "enzyme";
import SelectionWidget from "containers/SelectionWidget";
import Select from "components/Select";

describe("I want to see a drop down box with currencies", () => {
  it("renders a select component", () => {
    const wrapper = shallow(<SelectionWidget />);
    expect(wrapper.find(Select).length).toBe(2);
  });
});
