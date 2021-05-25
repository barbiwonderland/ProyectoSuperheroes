import "bootstrap/dist/css/bootstrap.min.css";
import  "./components/styles/Main.css";
import { EventProvider } from "./userEventContext";
import Equipo from "./components/equipo";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Busqueda from "./components/Busqueda"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <EventProvider>
          <Route exact path="/" component={Busqueda}></Route>
          <Route exact path="/equipo" component={Equipo}></Route>
          <Route exact path="/login" component={Login}></Route>
        </EventProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
