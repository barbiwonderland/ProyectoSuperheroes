import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/Main.css";
import Team from "./pages/Team";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./pages/login";



function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
            <Route exact path="/" component={Home}  />
            {/* <Route path="/login" component={Login}/> */}
            <Route path="/team" component={Team} />
        </Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
