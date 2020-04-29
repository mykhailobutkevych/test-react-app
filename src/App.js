import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-ui/styles";

import history from "./history";
import { store } from "./redux/store";

import "./assets/css/index.css";

import theme from "./theme";
import Routes from "./Routes";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}
