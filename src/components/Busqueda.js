import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userEventContext from "../userEventContext";
import SearchBar from "./SearchBar";
import ResultadoBusqueda from "./ResultadoBusqueda";
import Loading from "./Loading";

function Busqueda({}) {

  // Importo UserEvent
  const { BusquedaUrl } = useContext(userEventContext);

  //Traigo los persoanjes que ya habian sido agregados al equipo o [] si esta vacio
  const LocalGet = JSON.parse(localStorage.getItem("id") || "[]");

  //Estados
  //Agrego al estado lo que estaaba en LS
  const [idTeam, setIdTeam] = useState(LocalGet);
  const [personaje, setPersonaje] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, Setdisabled] = useState(false);

  //Mensajes
  function alerta(mensaje, tipo) {
    let div = document.querySelector(".mensaje");
    let msg = document.createElement("p");
    msg.innerHTML = mensaje;
    msg.classList.add("rounded", "p-2", "mb-2", "mx-auto", "text-white");
    if (tipo === "error") {
      msg.classList.add("bg-danger");
    } else {
      msg.classList.add("bg-success");
    }
    div.appendChild(msg);
    setTimeout(() => {
      msg.remove();
    }, 4000);
  }
  
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
          alerta("Personaje Repetido", "error");
          return;
        }
        // Condición para que no se agreguen mas de 6 personajes
        if (
          JSON.parse(Localids).length !== null &&
          JSON.parse(Localids).length === 5
        ) {
          Setdisabled(true);
          alerta("Equipo Completo", "success");
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
    setIsLoading(true);
    axios.get(BusquedaUrl).then((res) => {
      console.log(res);
      setPersonaje(res.data.results);
      setIsLoading(false);
      // Condición si el personaje que se busco no esta en la base de la api
      if (res.data.response === "error") {
        alerta("Personaje no encontrado", "error");
      }
    });
  };

  // Loading
  if (isLoading) {
    return <Loading />;
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
            <div className="row justify-content-center ">
              {personaje.map((person,i) => {
                return (
                  <div className="mb-sm-0 col-md-4 col-sm-12 " key={i}>
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

export default Busqueda;
