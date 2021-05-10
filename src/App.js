import BusquedaSuperheroe from "./components/busquedaSuperheroe";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import { UserProvider } from "./usuarioContext";
import { EventProvider } from "./userEventContext";


function App() {

  return (
    <UserProvider>
      <EventProvider>
      <SearchBar />
      <BusquedaSuperheroe />
      </EventProvider>
      </UserProvider>
  );
}

export default App;
