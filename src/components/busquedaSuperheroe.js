import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import userEventContext from '../userEventContext';

function BusquedaSuperheroe() {
const {uRl,inputName,cambiarPersonaje} =useContext(userEventContext);
  const [id, setId] = useState([]);
   const [personaje, setPersonaje] = useState([]);
  function agregarPersonaje(e) {
    e.preventDefault();
    const personajeId = e.target.id;
    setId(personajeId);
    console.log(id);
  }
// console.log(uRl);
  useEffect(() => {
    const fetchData = () => {
      
        axios
        .get(
         `${uRl}`
        )
        .then((res) => {
          console.log(res);
          setPersonaje(res.data.results);
           if (res.data.results !== undefined) {
             setPersonaje(res.data.results);
           } else {
             setPersonaje([]);
             const mensajeError = document.createElement("p");
             mensajeError.textContent = "Personaje no valido";
           }
        })
        .catch((error) => {
          console.log(error);
        });
      
    
      
    };
    fetchData();
  },[uRl] );
  
  return (
    
    <div className="container text-center ">
      <div className="row d-flex justify-content-center">
        {personaje.map((person) => (
          
          <React.Fragment>
            
            <div className="col " key={person.id}>
              <h5 className="mt-5">{person.name}</h5>
              <img width="200" className="img-thumbnail" src={person.image.url} alt="" />
              <br />
              {/* <p>Superpoderes {JSON.stringify(person.powerstats)}</p> */}
              <button
                id={person.id}
                onClick={agregarPersonaje}
                className="btn btn-success mt-3"
              >
                Agregar
              </button>
         
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default BusquedaSuperheroe;
