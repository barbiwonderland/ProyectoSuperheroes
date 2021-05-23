import React, { useState, useContext } from "react";
import userEventContext from "../userEventContext";
import { Link } from "react-router-dom";
function SearchBar() {
  const { inputName, cambioPersonaje } = useContext(userEventContext);
   const handleKeyDown = (event) => {
     if (event.key === 'Enter') {
       cambioPersonaje()
     }
    }
  return (
    <React.Fragment>
      <h2 className="text-center my-3 ">Buscar Superheroes</h2>

      <div className="container text-center">
        <div className="row  ">
          <div className="col-md-4"></div>
          <div className="col-md-4  input-n">
            <form className=" mt-3  mx-auto form-inline my-2 my-lg-0" />
            <input
            onKeyDown={handleKeyDown}
              className=" input-name form-control  mr-sm-2 mb-3 text-center"
              type="search"
              placeholder="Escribi tu superheroe favorito.."
              aria-label="Search"
              id="superValue"
            />
            <button
              onClick={cambioPersonaje}
              className=" btn m btn-primary
                 my-2 "
              id="buscar"
              type="submit"
            >
              Buscar
            </button>
            <Link to="/equipo">
              <button className="btn btn-primary mx-3">Equipo</button>
            </Link>
          </div>
        </div>
        <div className="mensaje  d-inline-block "></div>
    
      </div>
    </React.Fragment>
  );
}
export default SearchBar;
