import React from "react";
import { shallow, mount } from "enzyme";
import SelectionWidget from "containers/SelectionWidget";
import { Segment } from "semantic-ui-react";

describe("I want to see currency data within the selection widget", () => {
  it("renders a panel", () => {
    const wrapper = shallow(<SelectionWidget />);

    expect(wrapper.find(Segment).exists()).toBe(true);
  });

  // data = base, target, price, volume, change
  it("renders exchange rate data ", () => {
    const wrapper = shallow(
      <SelectionWidget
        base="BTC"
        target="USD"
        price={4352.58}
        volume={57218.36}
        change={83.72}
      />
    );
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".x-price").text()).toMatch(wrapper.props().price);
    expect(wrapper.find(".x-volume").text()).toMatch(wrapper.props().volume);
    expect(wrapper.find(".x-change").text()).toMatch(wrapper.props().change);
    expect(wrapper.find(".x-base").text()).toMatch(wrapper.props().base);
    expect(wrapper.find(".x-target").text()).toMatch(wrapper.props().target);
  });
});
