import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userEventContext from "../userEventContext";
import SearchBar from "./SearchBar";
import ResultadoBusqueda from "./ResultadoBusqueda";


function ApiResults({}) {
  const { BaseUrl } = useContext(userEventContext);
  //Estados
  const [personaje, setPersonaje] = useState([]);
  const [idTeam, setIdTeam] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [disabled, Setdisabled] = useState(false);
 
  //Funcion para agregar personaje al resultado
  function agregarPersonaje(e) {
    e.preventDefault();
    let personajeId = e.target.id;
    let Localids = localStorage.getItem("id");
    console.log(Localids)
    let IdLength =(JSON.parse(Localids).length)
    if (IdLength === 5){
      Setdisabled(true)
      let mensaje = document.querySelector(".mensaje")
      mensaje.innerHTML="Equipo Completo!"
      mensaje.classList.add("bg-success","text-white", "rounded")
      setTimeout(() => {
        mensaje.remove();
      }, 2000);
      }
 
   

    
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
            <div className="error  ">
          
          </div>
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
