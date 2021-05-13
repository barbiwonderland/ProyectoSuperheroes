import BusquedaSuperheroe from "./components/busquedaSuperheroe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/busqueda.css";
import SearchBar from "./components/SearchBar";
import { UserProvider } from "./usuarioContext";
import { EventProvider } from "./userEventContext";
import Equipo from "./components/equipo";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  return (
<BrowserRouter>
<Switch>
    <UserProvider>
      <EventProvider>
        <Route exact path="/" component={BusquedaSuperheroe}></Route>
        <Route exact path="/equipo" component={Equipo}></Route>
      </EventProvider>
      </UserProvider>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
