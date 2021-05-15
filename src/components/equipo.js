import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import userEventContext from "../userEventContext";

export default function Equipo() {
  const [equipoPersonajes, setequipoPersonajes] = useState([]);
  let personajesId = [];
  personajesId = JSON.parse(localStorage.getItem("id"));

  const Teamurl = ` https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${personajesId[0]}`;
  useEffect(() => {
    const ObtenerEquipo = () => {
      axios
        .get(Teamurl)
        .then((res) => {
          console.log(res.data);
          setequipoPersonajes(res.data);
        })
        .catch(() => {
          console.log("bad");
          //  window.location.reload();
        });
    };
    ObtenerEquipo();
  }, [Teamurl]);
  const { name, image } = equipoPersonajes;
  return (
    <React.Fragment>
      <h1 className="text-center my-3">Equipo</h1>
      <div className="container">
        <div className="row">
          <div className="col-4 text-center">
            <h4 >{name}</h4>
           <img src={image.url} width="150" alt="" />
           <br />
            <button className=" mt-3 btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
