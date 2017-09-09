// @flow

import React from "react";
import { Segment } from "semantic-ui-react";
import VirtualizedSelect from "react-virtualized-select";
import "./styles.css";

const SelectionWidget = () => {
  return (
    <div className="selection-widget">
      <VirtualizedSelect />
      <VirtualizedSelect />
    </div>
  );
};

export default SelectionWidget;
