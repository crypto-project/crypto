// @flow
import React, { Component } from "react";
import SelectionWidget from "../SelectionWidget";
import {
  Grid,
  Header,
  Icon,
  GridRow,
  GridColumn,
  HeaderSubheader
} from "semantic-ui-react";
import "./App.css";

class App extends Component<any> {
  render() {
    return (
      <Grid container>
        <Header as="h2" icon textAlign="center" style={{ marginTop: 20 }}>
          <Icon name="line chart" style={{ color: " #ffc107" }} />
          Crypto
          <HeaderSubheader>
            Check out latest currency exchange prices!
          </HeaderSubheader>
        </Header>
        <GridRow>
          <GridColumn>
            <SelectionWidget />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

export default App;
