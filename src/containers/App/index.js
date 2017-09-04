// @flow
import React, { Component } from "react";
import SelectionWidget from "../SelectionWidget";
import { Grid } from "semantic-ui-react";

import "./App.css";

class App extends Component<{}> {
  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Grid.Column>
            <SelectionWidget />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
