import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { heroActions } from "../store/Hero.slice";
import { useSelector } from "react-redux";

function SearchResults({ personaje, key }) {
  // Desestructuración del map personaje
  const { name, image, id } = personaje;
  const dispatch = useDispatch();
  const equipo = useSelector((state) => state.hero.team);

  return (
    <React.Fragment>
      <h5 className=" superFont subtitulos text-uppercase  ">{name}</h5>
      <img className="img-thumbnail img-busqueda" src={image.url} alt="" />
      <br />
      <button
        id={key}
        personaje={personaje}
        onClick={() => {
          dispatch(heroActions.addSuperhero(personaje));
        }}
        className="btn btn-success mt-3 mb-3 btnAgregar"
      >
        Agregar
        {/* {id === selectElement ? "Agregado" : "Agregar"} */}
      </button>
      <br />
    </React.Fragment>
  );
}

export default SearchResults;
