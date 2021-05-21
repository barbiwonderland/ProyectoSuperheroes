import React, { useState } from "react";
import ApiResults from "./ApiResults";
import Equipo from "../components/equipo";
function ResultadoBusqueda({ disabled, personaje, agregarPersonaje }) {
  const [acumulativoPersonaje, setAcumulativoPersonaje] = useState([]);

  // Desestructuración del map personaje
  const { name, image, biography, id } = personaje;

  // function agregarPersonaje(e){
  //   let array = []
  //   let total = [...array,personaje]
  //  console.log(total)
  // // let personajeLocal= localStorage.setItem("personaje",total)

  //}

  return (
    <React.Fragment>
      <h5 className="mt-5">{name}</h5>
      <img className="img-thumbnail img-busqueda" src={image.url} alt="" />
      <br />
      <button
        disabled={disabled}
        id={id}
        personaje={personaje}
        onClick={agregarPersonaje}
        className="btn btn-success mt-3 btnAgregar"
        value={biography.aligment}
      >
        Agregar
      </button>
    </React.Fragment>
  );
}

export default ResultadoBusqueda;
