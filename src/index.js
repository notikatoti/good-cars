import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "typeface-roboto";

import CarsList from "./containers/CarsContainer";
import Information from "./components/Information";
import CarDetail from "./components/CarDetail";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={CarsList} />
        <Route path="/car-detail/:id" component={CarDetail} />
        <Route path="/information" component={Information} />
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
