import React, { useEffect, useContext } from "react";
import userEventContext from "../userEventContext";
import { Link } from "react-router-dom";
import { characterId } from "../CharactersId";
import Auth from "../Auth";

function SearchBar({ fetchData }) {
  const { cambioPersonaje } = useContext(userEventContext);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchData();
    }
  };
  useEffect(() => {
    //Agrego el menu desplegable
    for (let i = 0; i < characterId.length; i++) {
      let option = document.createElement("option");
      option.value = characterId[i];
      // console.log(option)
      document.querySelector("datalist").appendChild(option);
    }
  }, []);

  return (
    <React.Fragment>
      <h1 className="text-center my-3 superFont mb-3">Buscar Superheroes</h1>

      <div className="container text-center ">
        <div className="row ">
          <div className="col-md-4"></div>
          <div className="col-md-4 input-n my-auto my-auto">
            <form className=" mt-md-3 mx-auto form-inline my-2 my-lg-0" />
            <input
              placeholder="Escribí tu superheroe favorito..."
              onChange={cambioPersonaje}
              onKeyDown={handleKeyDown}
              className="mt-md-3 input-name form-control  mb-3 text-center"
              type="search"
              aria-label="Search"
              id="superValue"
              list="characterList"
            />
            <datalist className="datalist" id="characterList"></datalist>
            <button
              onClick={fetchData}
              className=" btn m btn-primary
                 my-2 "
              id="buscar"
              type="submit"
            >
              Buscar
            </button>
            <Link to="equipo">
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
