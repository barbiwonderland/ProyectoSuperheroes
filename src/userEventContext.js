import React, { createContext, useState, useEffect } from "react";
const userEventContext = React.createContext();

const EventProvider = ({ children }) => {
  //Estado
  let [inputName, setInputName] = useState([]);
  // Obtener value del nombre ingresado por el usuario en el input
  const cambioPersonaje = () => {
    let input_Name = document.querySelector(".input-name");
    let estadoName = input_Name.value;

    // Lo agrego al estado
    setInputName(estadoName);
    console.log(inputName);
  };
  // Armo la url con el value del input
  let BusquedaUrl = `
  https://www.superheroapi.com/api.php/2831945550360412/search/${inputName}`;

  // desestructuro en data
  const data = { inputName, cambioPersonaje, BusquedaUrl };

  return (
    <userEventContext.Provider value={data}>
      {children}
    </userEventContext.Provider>
  );
};

export default userEventContext;
export { EventProvider };
