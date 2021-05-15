import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import userEventContext from "../userEventContext";
import SearchBar from "./SearchBar";

function ResultadoSuperHeroe() {
  const { uRl, inputName, cambiarPersonaje, agregarPersonaje } =
    useContext(userEventContext);
  const [personaje, setPersonaje] = useState([]);

  // console.log(uRl);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${uRl}`)
        .then((res) => {
          console.log(res);
          setPersonaje(res.data.results);
        })
        .catch(() => {
    alert("elija otro personaje")
    window.location.reload();
          
        });
    };
    fetchData();
  }, [uRl]);
  

  return (
    <div className="container text-center ">
      <SearchBar />
      <div className="row  ">
        {personaje.map((person) => (
          <React.Fragment>
            <div className="col-md-3 mx-auto " key={person.id}>
              <h5 className="mt-5">{person.name}</h5>
              <img className="img-thumbnail" src={person.image.url} alt="" />
              <br />
              <button
                id={person.id}
                onClick={agregarPersonaje}
                className="btn btn-success mt-3"
                value={person.biography.aligment}
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

export default ResultadoSuperHeroe;
