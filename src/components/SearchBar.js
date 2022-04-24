import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar({ searchCharacter }) {
  const [selectedCharacter, setSelectedCharacter] = useState("");

  return (
    <React.Fragment>
      <h1 className="text-center supertitle superFont mb-3">Buscador de superheroes</h1>

      <div className="container text-center ">
        <div className="row ">
          <div className="col-md-4"></div>
          <div className="col-md-4 input-n my-auto my-auto">
            <form className=" mt-md-3 mx-auto form-inline my-2 my-lg-0" />
            <input
              placeholder="Escribí tu superheroe favorito..."
              onChange={(e) => setSelectedCharacter(e.target.value)}
              className="mt-md-3 input-name form-control  mb-3 text-center"
              type="search"
              aria-label="Search"
              id="superValue"
              list="characterList"
            />
            <datalist className="datalist" id="characterList"></datalist>
            <button
              onClick={() => searchCharacter(selectedCharacter)}
              className=" btn m btn-primary
                 my-2 "
              id="buscar"
              type="submit"
            >
              Buscar
            </button>
            <Link to="/team">
              <button className="btn btn-primary mx-3">Equipo</button>
            </Link>
            <div className="error text-center mt-3"></div>
          </div>
        </div>
        <div className="mensaje d-inline-block text-center "></div>
      </div>
    </React.Fragment>
  );
}

export default SearchBar;
