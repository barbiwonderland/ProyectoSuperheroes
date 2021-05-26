import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/Main.css";
import { EventProvider } from "./userEventContext";
import Equipo from "./components/equipo";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login";
import Busqueda from "./components/Busqueda";
import React, { useState, useEffect } from "react";
import ProtectRoute from "./ProtectRoute";

function App() {
  const [isAuth,setIsAuth]=useState(false)
  console.log(isAuth)
  return (
    <BrowserRouter>
      <Switch>
        <EventProvider>
          <Route exact path="/" component={Login}></Route>
          <ProtectRoute exact path="/busqueda" component={Busqueda} isAuth={isAuth}/>
          <ProtectRoute exact path="/equipo" component={Equipo} isAuth={isAuth}/>
        </EventProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
