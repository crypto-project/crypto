import React from "react";
import { shallow } from "enzyme";
import DisplayWidget from "containers/DisplayWidget";
import { Segment } from "semantic-ui-react";

describe("I want to see currency data within the Display widget", () => {
  it("renders a panel", () => {
    const wrapper = shallow(
      <DisplayWidget
        base="BTC"
        target="USD"
        price={4352.582}
        volume={57218.36}
        change={83.72}
      />
    );
    expect(wrapper.find(Segment).exists()).toBe(true);
  });

  it("renders exchange rate data ", () => {
    const base = "BTC";
    const target = "USD";
    const price = 4352.582;
    const volume = 57218.36;
    const change = 83.72;

    const wrapper = shallow(
      <DisplayWidget
        base={base}
        target={target}
        price={price}
        volume={volume}
        change={change}
      />
    );
    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".x-price").text()).toEqual("4352.58");
    expect(wrapper.find(".x-volume").text()).toEqual("57218.36");
    expect(wrapper.find(".x-change").text()).toEqual("83.72");
    expect(wrapper.find(".x-base").text()).toMatch(base);
    expect(wrapper.find(".x-target").text()).toMatch(target);
  });
});
