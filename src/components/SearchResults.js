import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { heroActions } from "../store/Hero.slice";
import { useSelector } from "react-redux";

function SearchResults({ personaje, key }) {
  // Desestructuración del map personaje
  const { name, image, id } = personaje;
  const dispatch = useDispatch();
  const equipo = useSelector((state) => state.hero.team);
  const heroeExist = equipo.find((hero) => equipo.id === hero.id);
  return (
    <React.Fragment>
      <h5 className=" superFont subtitulos text-uppercase  ">{name}</h5>
      <img className="img-thumbnail img-Home" src={image.url} alt="" />
      <br />
      {equipo.find((hero) => hero.id === id) ? (
        <button
          disabled
          id={key}
          personaje={personaje}
          onClick={() => {
            dispatch(heroActions.addSuperhero(personaje));
          }}
          className="btn btn-success mt-3 mb-3 btnAgregar"
        >
          Agregado
        </button>
      ) : (
        <button
          id={key}
          personaje={personaje}
          onClick={() => {
            dispatch(heroActions.addSuperhero(personaje));
          }}
          className="btn btn-success mt-3 mb-3 btnAgregar"
        >
          Agregar
        </button>
      )}

      <br />
    </React.Fragment>
  );
}

export default SearchResults;
