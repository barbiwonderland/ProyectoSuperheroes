import React, { useState } from "react";

function ResultadoBusqueda({ disabled, personaje, agregarPersonaje }) {
  // Desestructuración del map personaje
  const { name, image, biography, id } = personaje;
  // Cambia el texto del botón al agregar personaje
  const [selectElement, setSelectElement] = useState(0);
  function agregado(x) {
    setSelectElement(x);
    document.querySelector(".btnAgregar").classList.add("btn-info");
  }
  return (
    <React.Fragment>
      <h5 className=" superFont subtitulos text-uppercase  ">{name}</h5>
      <img className="img-thumbnail img-busqueda" src={image.url} alt="" />
      <br />
      <button
        disabled={disabled}
        id={id}
        personaje={personaje}
        onClick={(e) => {
          agregarPersonaje(e);
          agregado(id);
        }}
        className="btn btn-success mt-3 mb-3 btnAgregar"
        value={biography.aligment}
      >
        {id === selectElement ? "Agregado" : "Agregar"}
      </button>
      <br />
    </React.Fragment>
  );
}

export default ResultadoBusqueda;
