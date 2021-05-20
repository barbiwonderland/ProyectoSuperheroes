import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userEventContext from "../userEventContext";
import SearchBar from "./SearchBar";
import ResultadoBusqueda from "./ResultadoBusqueda";

function ApiResults({}) {
  //Estados
  const { BaseUrl } = useContext(userEventContext);
  const [personaje, setPersonaje] = useState([]);
  const [idTeam, setIdTeam] = useState([]);
  const [Loading, setLoading] = useState(true);

  //Funcion para agregar personaje al resultado
  function agregarPersonaje(e) {
    e.preventDefault();
    let personajeId = e.target.id;
    let G = localStorage.getItem("id");
    console.log(G);
    setIdTeam(G);
    let team = [...idTeam, personajeId];
    setIdTeam(team);
    localStorage.setItem("id", JSON.stringify(team));
  }

  // Llamado a la api Superhero
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(BaseUrl)
        .then((res) => {
          console.log(res);
          setPersonaje(res.data.results);
          setLoading(false);
        })

        .catch(() => {
          console.log("error");
          return;
        });
    };
    fetchData();
  }, [BaseUrl]);

  // Loading
  if (Loading) {
    return (
      <div class="text-center">
        <h1>Loading...</h1>
      </div>
    );
  }

  // Condición para mostrar o no el resultado de la busqueda
  if (personaje === undefined) {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-12  ">
            <SearchBar />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="container text-center ">
          <SearchBar />
          <div className="container">
            <div className="row  ">
              {personaje.map((person) => {
                return (
                  <div className="col-4" key={person.id}>
                    <ResultadoBusqueda
                      key={person.id}
                      personaje={person}
                      agregarPersonaje={agregarPersonaje}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ApiResults;
