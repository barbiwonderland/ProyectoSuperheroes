import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userEventContext from "../userEventContext";
import SearchBar from "./SearchBar";
import ResultadoBusqueda from "./ResultadoBusqueda";

function ApiResults({}) {
  //Traigo los persoanjes que ya habian sido agregados al equipo o [] si esta vacio
  const LocalGet = JSON.parse(localStorage.getItem("id") || "[]");
  console.log(LocalGet);
  const { BaseUrl } = useContext(userEventContext);
  //Estados
  const [personaje, setPersonaje] = useState([]);
  //Agrego al estado lo que estaaba en LS
  const [idTeam, setIdTeam] = useState(LocalGet);
  const [Loading, setLoading] = useState(true);
  const [disabled, Setdisabled] = useState(false);
  //Funcion para agregar personaje al resultado
  function agregarPersonaje(e) {
    e.preventDefault();
    //Tomo el id del personaje seleccionado
    let personajeId = e.target.id;
    // Condiciones para mostrar mensajes
    if (localStorage.getItem("id")) {
      if (localStorage.getItem("id") !== "[]") {
        let Localids = localStorage.getItem("id");
          // // Compruebo que no se vuelva a agregar un personaje igual
          // if (Localids.includes(personajeId)) {
          //   let repetido = document.querySelector(".repetido");
          //   repetido.innerHTML = "Personaje ya seleccionado";
          //   repetido.classList.add("bg-danger", "text-white", "rounded");
          //   setTimeout(() => {
          //     repetido.remove();
          //   }, 4000);
            
         // }
          if (JSON.parse(Localids).length !== null && JSON.parse(Localids).length === 5) {
            Setdisabled(true);
            let mensaje = document.querySelector(".mensaje");
            mensaje.innerHTML = "Equipo Completo!";
            mensaje.classList.add("bg-success", "text-white", "rounded");
            setTimeout(() => {
              mensaje.remove();
            }, 2000);
          }
       
      }}
       
      
      // Creo un arreglo del estado + el ultimo personaje
      let team = [...idTeam, personajeId];
      // Actualizo el estado
      setIdTeam(team);
      // Guardo el estado en LS
      localStorage.setItem("id", JSON.stringify(idTeam));
    
  }

  useEffect(() => {
    // Compruebo cuando renderizo si puedo agregar mas personajes
    if (localStorage.getItem("id")) {
      if (localStorage.getItem("id") !== "[]") {
        let Localids = localStorage.getItem("id");
        let IdLength = JSON.parse(Localids).length;
        console.log(IdLength);
        if (IdLength !== null && IdLength === 6) {
          Setdisabled(true);
        }
      }
    }

    // Llamado a la api Superhero
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
      <div className="text-center">
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
            <div className="error "></div>
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
                  <div className="col-md-4 col-sm-12" key={person.id}>
                    <ResultadoBusqueda
                      disabled={disabled}
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
