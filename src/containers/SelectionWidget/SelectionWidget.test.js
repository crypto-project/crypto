import React from "react";
import { shallow } from "enzyme";
import SelectionWidget from "containers/SelectionWidget";
import { Segment } from "semantic-ui-react";

describe("I want to see currency data within the Display widget", () => {
  it("renders a panel", () => {
    const wrapper = shallow(<SelectionWidget />);
    expect(wrapper.find(Segment).exists()).toBe(true);
  });
});
