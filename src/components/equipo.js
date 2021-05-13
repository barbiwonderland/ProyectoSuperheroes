import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import userEventContext from "../userEventContext";

function Equipo() {
  const { idEquipo } = useContext(userEventContext);
  let [personajeDetalle, setpersonajeDetalle] = useState([]);

  const key = 2831945550360412;
  let BaseUrl =
    `https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/${key}/70/`;


  useEffect(() => {
    function personajeAgregado() {
      axios
        .get(BaseUrl)
        .then((res) => {
          let prueba = res.data;
          console.log(prueba);
          setpersonajeDetalle(prueba);
         if(personajeDetalle === []){
          document.body.innerText=("error")
 return;
         
         }

        })
        .catch((error) => {
          console.error(error);
      
        });
    }
    
    personajeAgregado();
  },[BaseUrl] );

   const { biography, name, image, powerstats, appearance, work } =
   personajeDetalle;
 const { combat, durability, intelligence, power, speed, strength } =
   powerstats;
 const {
   "eye-color": eyeColor,
   "hair-color": hairColor,
   height,
   weight,
 } = appearance;
 const { "full-name": fullName, aliases } = biography;
 const { base } = work;
  return (
  
    <div className="container ">
    <div className="row">
     <div className="col-12 text-center">
       <h3>{name}</h3>
       <img src={image.url} width="150" alt="" />
       <h4>Powerstates</h4>
       <div className="textDecoration">
         <li>Combat: {combat}</li>
         <li>Durability: {durability}</li>
         <li>Intelligence: {intelligence}</li>
         <li>Power: {power}</li>
         <li>Speed: {speed}</li>
         <li>Stength: {strength}</li>
       </div>
       <div className="text-center">
         <button className="btn btn-success text-center my-2">
           Detalles
         </button>
         <p>Eye Color: {eyeColor}</p>
         <p>Hair Color: {hairColor}</p>
         <p>Height:{height[1]}</p>
         <p>Weight: {weight[1]}</p>
          <p>Full Name:{fullName} </p>
          <p>Aliases: {aliases[1]}</p>
         <p>Work-Base: {base}</p>  
         <button className="btn btn-danger text-center ">Eliminar</button>
       </div> */}
     </div>
   </div> 
 </div>
  );
}
export default Equipo;
