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

const DisplayWidget = ({ price, volume, change, base, target }: Props) => {
  return (
    <div className="display-widget">
      <Segment>
        <div className="currency-data">
          <div className="x-price">{price.toFixed(2)}</div>
          <div className="x-volume">{volume.toFixed(2)}</div>
          <div className="x-change">{change.toFixed(2)}</div>
          <div className="x-base">{base}</div>
          <div className="x-target">{target}</div>
        </div>
      </Segment>
    </div>
  );
};

export default DisplayWidget;
