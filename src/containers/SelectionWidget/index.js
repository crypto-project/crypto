// @flow

import React from "react";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import Select from "components/Select";
import "./styles.css";

const base = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 }
];

const target = [
  { label: "One", value: 1 },
  { label: "Two", value: 2 },
  { label: "Three", value: 3 }
];

const SelectionWidget = () => {
  return (
    <Grid>
      <GridRow>
        <GridColumn mobile={8}>
          <Select options={base} initial={() => {}} />
        </GridColumn>
        <GridColumn mobile={8}>
          <Select options={target} initial={1} />
        </GridColumn>
      </GridRow>
    </Grid>
  );
};

export default SelectionWidget;
