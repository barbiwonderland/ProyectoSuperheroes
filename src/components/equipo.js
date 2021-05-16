import React, { useEffect, useState } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import userEventContext from "../userEventContext";

export default function Equipo() {
  const history = useHistory();

const [pepe,setPepe]= useState([]);
  const [equipoPersonajes, setequipoPersonajes] = useState(
    []
  );
  let personajesId = [];
  personajesId = JSON.parse(localStorage.getItem("id"));
  personajesId.map(id=>{
let pepe=`https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${id}`


  })

  const equipo1 = `https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${personajesId[0]}`;
  const equipo2 = `https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${personajesId[1]}`;
  const equipo3 = `https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${personajesId[2]}`;
  const equipo4 = `https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${personajesId[3]}`;
  const equipo5 = `https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${personajesId[4]}`;
  const equipo6 = `https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${personajesId[5]}`;
  
   
  
  useEffect(() => {
    
    const ObtenerEquipo = () => {
      
      axios
     
         .all([
           axios.get(equipo6),
           axios.get(equipo1),
           axios.get(equipo2),
           axios.get(equipo3),
           axios.get(equipo4),
           axios.get(equipo5),
         ])

        .then((res) => {
          
          console.log(res);
          setequipoPersonajes(res);
          console.log(equipoPersonajes);
  
        })

        .catch(() => {
          alert("agregue 6 personajes")
          history.push("/busqueda");
          window.location.reload();
          
        });
    };
    ObtenerEquipo();
  }, []);
 
  const ocultarDetalles = () => {
    let detalles = document.querySelector(".DetailsHidden");
    detalles.classList.toggle("hidden");
  };
  const eliminarPersonaje =(e)=>{
    e.preventDefault();
    let borrarPersonaje= (e.target.id);
    localStorage.removeItem(borrarPersonaje.value);
    
  }

  return (
    <React.Fragment>
      <h1 className="text-center mb-5 mt-3">Equipo de Superheroes</h1>
    
      <div className="container">
        <div className="row">
          {equipoPersonajes.map((x) => {
            
            return (
              <React.Fragment>
                <div className="col-md-4 text-center personaje">
                  <div className="card text-center mx-auto mb-3">
                    <h3>{x.data.name}</h3>
                    <img
                      className=" card-img-top "
                      src={x.data.image.url}
                      alt=""
                    />
                    <div className="card-body">
                      <div className="dot mt-3">
                        <h4 className="font-weight-bold">Powerstats</h4>
                        <li>Combat: {x.data.powerstats.combat}</li>
                        <li>Intelligence: {x.data.powerstats.intelligence}</li>
                        <li>Strength: {x.data.powerstats.strength}</li>
                        <li>Speed: {x.data.powerstats.speed}</li>
                        <li>Durability: {x.data.powerstats.durability}</li>
                        <li>Power: {x.data.powerstats.power}</li>
                      </div>
                      <div className="DetailsHidden dot hidden">
                        <h4 className="font-weight-bold">Detalles</h4>
                        <li>Full Name: {x.data.biography["full-name"]}</li>
                        <li>Eye Color: {x.data.appearance["eye-color"]}</li>
                        <li>Hair Color: {x.data.appearance["hair-color"]}</li>
                        <li>Weight: {x.data.appearance.weight[1]}</li>
                        <li>Height: {x.data.appearance.height[1]}</li>
                        <li></li>
                        <li>Base: {x.data.work.base}</li>
                        <li>Aliases: {x.data.biography.aliases[0]}</li>
                      </div>
                      <br />
                       <button
                        onClick={ocultarDetalles}
                        className="btn btn-primary"
                      >
                        Detalles
                      </button> 
                      <br />
                      <button id={x.data.id} className=" mt-3 btn btn-danger " onClick={eliminarPersonaje}>Eliminar</button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
