import React, { createContext, useState, setState } from "react";
const userEventContext = React.createContext();

const EventProvider = ({ children }) => {
  let [inputName, setInputName] = useState("batman");
  let [idTeam, setidTeam] = useState([]);

  // Obtener Id en el boton agregar
  function agregarPersonaje(e) {
    e.preventDefault();
    let personajeId = e.target.id;
    let team = [...idTeam, personajeId];
    setidTeam(team);
    localStorage.setItem("id",JSON.stringify(team));
  
  }

  // Obtener value del nombre ingresado por el usuario en el input
  const cambioPersonaje = () => {
    let input_Name = document.querySelector(".input-name");
    let estadoName = input_Name.value;
    setInputName(estadoName);
  };

  let uRl = `https://www.superheroapi.com/api.php/2831945550360412/search/${inputName}`;
  console.log(uRl);
  const data = { inputName, cambioPersonaje, uRl, agregarPersonaje, idTeam };

  return (
    <userEventContext.Provider value={data}>
      {children}
    </userEventContext.Provider>
  );
};

export default userEventContext;
export { EventProvider };
