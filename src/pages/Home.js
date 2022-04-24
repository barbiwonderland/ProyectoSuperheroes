import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Loading from "../components/Loading";

function Busqueda() {
  const [searchResult,setSearchResult]=useState("")
  const searchCharacter = (inputName) => {
    axios
      .get(
        ` https://www.superheroapi.com/api.php/2831945550360412/search/${inputName}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.response === "error") return res.data.error;
        setSearchResult(res.data.results)
        return res.data;

      });
  };
  return (
    <>
      <SearchBar searchCharacter={searchCharacter} />
      <div className="container text-center ">
         <div className="container">
           <div className="row justify-content-center ">
             {/* Cuando pongo && valida que exista personaje */}
             {searchResult &&
               searchResult.map((person, i) => {
                 return (
                   <div className="mb-sm-0 col-md-4 col-sm-12 " key={i}>
                     <SearchResults
                       key={person.id}
                       personaje={person}
                     />
                   </div>
                 );
               })}
           </div>
         </div>
       </div>
    </>

  );
}

export default Busqueda;
