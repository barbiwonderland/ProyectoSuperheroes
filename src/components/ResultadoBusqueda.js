import React, { useState } from "react";
function ResultadoBusqueda({ disabled, personaje, agregarPersonaje }) {

  // Desestructuración del map personaje
  const { name, image, biography, id } = personaje;

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
