import React from "react";
import { shallow } from "enzyme";
import BaseSelect from "react-select";
import Select from "./index";

describe("I want to see a drop down box with options", () => {
  it("renders a drop down", () => {
    const wrapper = shallow(<Select />);

    expect(wrapper.find(BaseSelect).exists()).toBe(true);
  });

  it("contains options when selected", () => {
    const options = [];
    const wrapper = shallow(<Select options={options} />);
    const expectedProps = {
      options
    };

    expect(wrapper.find(".x-select").props()).toMatchObject(expectedProps);
  });
});
