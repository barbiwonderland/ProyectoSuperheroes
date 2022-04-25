import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { heroActions } from "../store/Hero.slice";
import { useSelector } from "react-redux";
// import Swal from "sweetalert2";

function SearchResults({ personaje, key }) {
  // Desestructuración del map personaje
  const { name, image, id } = personaje;
  const dispatch = useDispatch();
  const objectTeam = useSelector((state) => state.hero);
  const equipo = useSelector((state) => state.hero.team);
  const heroeExist = equipo.find((hero) => equipo.id === hero.id);
  const Swal = require("sweetalert2");
  const addHero = (personaje) => {
    if (equipo.length === 6) {
      Swal.fire({
        title: "Equipo completo",
        text: "El equipo ya tiene 6 personajes",
        icon: "error",
        confirmButtonText: "OK",
        width: 400,
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      // } else if (
      //   personaje.biography.alignment === "good" &&
      //   objectTeam.goodHero === 3
      // ) {
      //   Swal.fire({
      //     title: "Demasiados Heroes buenos!",
      //     text: "Ya posee 3 heroes buenos",
      //     icon: "error",
      //     confirmButtonText: "OK",
      //     width: 400,
      //     showClass: {
      //       popup: "animate__animated animate__fadeInDown",
      //     },
      //     hideClass: {
      //       popup: "animate__animated animate__fadeOutUp",
      //     },
      //   });
      // } else if (
      //   personaje.biography.alignment === "bad" &&
      //   objectTeam.badHero === 3
      // ) {
      //   Swal.fire({
      //     title: "Demasiados Heroes malos!",
      //     text: "Ya posee 3 heroes malos",
      //     icon: "error",
      //     confirmButtonText: "OK",
      //     width: 400,
      //     showClass: {
      //       popup: "animate__animated animate__fadeInDown",
      //     },
      //     hideClass: {
      //       popup: "animate__animated animate__fadeOutUp",
      //     },
      //   });
    } else {
      dispatch(heroActions.addSuperhero(personaje));
    }
  };
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
          className="btn btn-success mt-3 mb-3 btnAgregar"
        >
          Agregado
        </button>
      ) : (
        <button
          id={key}
          personaje={personaje}
          onClick={() => {
            addHero(personaje);
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
