// @flow

import React from "react";
import { Segment } from "semantic-ui-react";
import "./styles.css";

type Props = {|
  price: number,
  volume: number,
  change: number,
  base: string,
  target: string
|};

const SelectionWidget = ({ price, volume, change, base, target }: Props) => {
  return (
    <div className="selection-widget">
      <Segment>
        <div className="currency-data">
          <div className="x-price">{price}</div>
          <div className="x-volume">{volume}</div>
          <div className="x-change">{change}</div>
          <div className="x-base">{base}</div>
          <div className="x-target">{target}</div>
        </div>
      </Segment>
    </div>
  );
};

export default SelectionWidget;
