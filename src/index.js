// @flow

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store";
import "semantic-ui-css/semantic.min.css";
import "react-select/dist/react-select.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
