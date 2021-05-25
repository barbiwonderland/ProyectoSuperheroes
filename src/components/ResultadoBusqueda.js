import React, { useState } from "react";

function ResultadoBusqueda({ disabled, personaje, agregarPersonaje }) {
  // Desestructuración del map personaje
  const { name, image, biography, id } = personaje;

  return (
    <React.Fragment>
      <h5 className="mt-md-5 superFont subtitulos text-uppercase ">{name}</h5>
      <img className="img-thumbnail img-busqueda" src={image.url} alt="" />
      <br />
      <button
        disabled={disabled}
        id={id}
        personaje={personaje}
        onClick={(e) => agregarPersonaje(e)}
        className="btn btn-success mt-3 btnAgregar"
        value={biography.aligment}
      >
        Agregar
      </button>
      <br />
      <div className="repetido p-2 m-2 mx-auto d-inline-block"></div>
    </React.Fragment>
  );
}

export default ResultadoBusqueda;
