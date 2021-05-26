import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/Main.css";
import { EventProvider } from "./userEventContext";
import Equipo from "./components/equipo";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login";
import Busqueda from "./components/Busqueda";
import React, { useState, useEffect } from "react";

function App() {


 
  return (
    <BrowserRouter>
      <Switch>
        <EventProvider>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/busqueda" component={Busqueda}></Route>
          {/* <ProtectedRoute exact path="/busqueda" component={Busqueda} /> */}
          <Route exact path="/equipo" component={Equipo} />

        
        </EventProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
