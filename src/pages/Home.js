import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import Loading from "../components/Loading";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Home() {
  const tokenFromStorage = sessionStorage.getItem("Token");
  const history = useHistory();
  const Swal = require("sweetalert2");
  const [searchResult, setSearchResult] = useState("");
  if (tokenFromStorage === null) {
    history.push("/login");
  }
  const searchCharacter = (inputName) => {
    axios
      .get(
        ` https://www.superheroapi.com/api.php/2831945550360412/search/${inputName}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.response === "error")
          return Swal.fire({
            title: "Error!",
            text: res.data.error,
            icon: "error",
            confirmButtonText: "OK",
            width: 400,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        setSearchResult(res.data.results);
        return res.data;
      });
  };
  return (
    <>
      <div className="main">
        <SearchBar searchCharacter={searchCharacter} />
        <div className="container text-center ">
          <div className="container">
            <div className="row justify-content-center ">
              {/* Cuando pongo && valida que exista personaje */}
              {searchResult &&
                searchResult.map((person, i) => {
                  return (
                    <div className="mb-sm-0 col-md-4 col-sm-12 " key={i}>
                      <SearchResults key={person.id} personaje={person} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
