import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/Main.css";
import { EventProvider } from "./userEventContext";
import Equipo from "./components/equipo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Busqueda from "./components/Busqueda";
import React, { useState, useEffect } from "react";
import ProtectRoute from "./ProtectRoute";

function App() {
  const [isAuth, setIsAuth] = useState(true);

  useEffect(() => {
    // Llamo al localStorage para ver si existe "Token",si existe cambio el estado "isAuth"
    let TokenLS = localStorage.getItem("Token");
    if (TokenLS !== null) {
      console.log(TokenLS, "token from LS");
      setIsAuth(true);
      console.log(isAuth, "true");
    } else {
      console.log("no hay token porque no esta log");
    }
  }, []);
  console.log(isAuth, "is auth desde afuera");

  return (
    <BrowserRouter>
      <Switch>
        <EventProvider>
          <Route exact path="/" component={Login}></Route>
          {/* Esta fallando la condición, creo que el problema es que el estado IsAuth,
           me devuelve la actualización mas tarde, dejo el set inicial en true para que no falle */}
          {/* //Rutas Protegidas */}
          <ProtectRoute path="/busqueda" component={Busqueda} isAuth={isAuth} />
          <ProtectRoute path="/equipo" component={Equipo} isAuth={isAuth} />
        </EventProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
