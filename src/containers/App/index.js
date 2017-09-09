// @flow
import React, { Component } from "react";
import DisplayWidget from "../DisplayWidget";
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
            <DisplayWidget
              base="BTC"
              target="USD"
              price={4352.58}
              volume={57218.36}
              change={83.72}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    );
  }
}

export default App;
