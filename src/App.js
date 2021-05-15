import ResultadoSuperheroe from "./components/ResultadoSuperHeroe";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles/busqueda.css";
import SearchBar from "./components/SearchBar";
import { UserProvider } from "./usuarioContext";
import { EventProvider } from "./userEventContext";
import Equipo from "./components/equipo";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/login";

function App() {

  return (
<BrowserRouter>
<Switch>
    <UserProvider>
      <EventProvider>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/busqueda" component={ResultadoSuperheroe}></Route>
        <Route exact path="/equipo" component={Equipo}></Route>
      </EventProvider>
      </UserProvider>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
