import React, { createContext, useState, setState } from "react";
import axios from "axios";

const userEventContext = React.createContext();

const EventProvider = ({ children }) => {
  let [inputName, setInputName] = useState([]);
  // Obtener value del nombre ingresado por el usuario en el input
  const cambioPersonaje = () => {
    let input_Name = document.querySelector(".input-name");
    let estadoName = input_Name.value;
    setInputName(estadoName);
    console.log(inputName)
  }
  let BusquedaUrl = `
  https://www.superheroapi.com/api.php/2831945550360412/search/${inputName}`;
  const data = { inputName, cambioPersonaje, BusquedaUrl };

  return (
    <userEventContext.Provider value={data}>
      {children}
    </userEventContext.Provider>
  );
};

export default userEventContext;
export { EventProvider };
