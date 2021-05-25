import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userEventContext from "../userEventContext";
import SearchBar from "./SearchBar";
import ResultadoBusqueda from "./ResultadoBusqueda";

function ApiResults({}) {
  //Traigo los persoanjes que ya habian sido agregados al equipo o [] si esta vacio
  const LocalGet = JSON.parse(localStorage.getItem("id") || "[]");

  // Importo UserEvent
  const { BusquedaUrl } = useContext(userEventContext);

  //Estados
  //Agrego al estado lo que estaaba en LS
  const [idTeam, setIdTeam] = useState(LocalGet);
  const [personaje, setPersonaje] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [disabled, Setdisabled] = useState(false);

  //Funcion para agregar personaje al componente ResultadoBusqueda
  function agregarPersonaje(e) {
    e.preventDefault();
    //Tomo el id del personaje seleccionado
    let personajeId = e.target.id;
    // Condiciones para mostrar alertas
    if (localStorage.getItem("id")) {
      if (localStorage.getItem("id") !== "[]") {
        let Localids = localStorage.getItem("id");

        // Condición para que no se vuelva a agregar un personaje igual
        if (Localids.includes(personajeId)) {
          let repetido = document.querySelector(".mensaje");
          let error = document.createElement("p");
          error.innerHTML = "Personaje ya seleccionado";
          error.classList.add(
            "bg-danger",
            "text-white",
            "rounded",
            "p-2",
            "mb-2",
            "mx-auto"
          );
          repetido.appendChild(error);
          setTimeout(() => {
            error.remove();
          }, 4000);
          return;
        }
        // Condición para que no se agreguen mas de 6 personajes
        if (
          JSON.parse(Localids).length !== null &&
          JSON.parse(Localids).length === 5
        ) {
          Setdisabled(true);
          let mensaje = document.querySelector(".mensaje");
          let msg = document.createElement("p");
          msg.innerHTML = "Equipo Completo";
          msg.classList.add(
            "bg-success",
            "text-white",
            "rounded",
            "p-2",
            "mb-2",
            "mx-auto"
          );
          mensaje.appendChild(msg);
          setTimeout(() => {
            msg.remove();
          }, 4000);
        }
      }
    }
    // Creo un arreglo del estado + el ultimo personaje
    let team = [...idTeam, personajeId];
    console.log(team);
    console.log(idTeam);
    // Actualizo el estado
    setIdTeam(team);
    console.log(idTeam);
    console.log(team);
    //Guardo el estado en LS, **le paso arreglo no el estado**
    localStorage.setItem("id", JSON.stringify(team));
    let mensaje = document.querySelector(".mensaje");
    let msg = document.createElement("p");
    msg.innerHTML = "Personaje agregado";
    msg.classList.add(
      "bg-info",
      "text-white",
      "rounded",
      "p-2",
      "mb-2",
      "mx-auto"
    );
    mensaje.appendChild(msg);
    setTimeout(() => {
      msg.remove();
    }, 800);
  }

  useEffect(() => {
    // Compruebo cuando renderizo si puedo agregar mas personajes
    if (localStorage.getItem("id")) {
      if (localStorage.getItem("id") !== "[]") {
        let Localids = localStorage.getItem("id");
        let IdLength = JSON.parse(Localids).length;
        //console.log(IdLength);
        if (IdLength !== null && IdLength === 6) {
          Setdisabled(true);
        }
      }
    }
  }, []);

  // Llamado a la api Superhero
  const fetchData = () => {
    setLoading(true);
    axios.get(BusquedaUrl).then((res) => {
      console.log(res);
      setPersonaje(res.data.results);
      setLoading(false);
      // Condición si el personaje que se busco no esta en la base de la api
      if (res.data.response === "error") {
        let error = document.querySelector(".error");
        let msg = document.createElement("p");
        msg.innerHTML = "Personaje no encontrado";
        msg.classList.add(
          "bg-danger",
          "text-white",
          "rounded",
          "p-2",
          "mb-2",
          "mx-auto",
          "text-center"
        );
        error.appendChild(msg);
        setTimeout(() => {
          msg.remove();
        }, 1000);
      }
    });
  };

  // Loading
  if (Loading) {
    return (
      <React.Fragment>
        <div className="text-center">
        <h2 className="text-warning ">Loading...</h2>
        </div>
        <div class="d-flex justify-content-center  ">
          <div class="spinner-grow  text-warning mt-3">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  // Condición para mostrar o no el resultado de la busqueda
  if (personaje === undefined) {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-12 text-center ">
            <SearchBar fetchData={fetchData} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <div className="container text-center ">
          <SearchBar fetchData={fetchData} />
          <div className="container">
            <div className="row  ">
              {personaje.map((person) => {
                return (
                  <div className="col-md-4 col-sm-12" key={person.id}>
                    <ResultadoBusqueda
                      disabled={disabled}
                      key={person.id}
                      personaje={person}
                      agregarPersonaje={(e) => agregarPersonaje(e)}
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
