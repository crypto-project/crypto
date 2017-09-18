// @flow

import React from "react";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import Select from "components/Select";
import "./styles.css";
import options from "./data/options";

const SelectionWidget = () => {
  return (
    <Grid>
      <GridRow>
        <GridColumn mobile={8}>
          <Select
            labelKey="name"
            valueKey="code"
            options={options}
            initial={"BTC"}
          />
        </GridColumn>
        <GridColumn mobile={8}>
          <Select
            labelKey="name"
            valueKey="code"
            options={options}
            initial={"USD"}
          />
        </GridColumn>
      </GridRow>
    </Grid>
  );
};

export default SelectionWidget;
