import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import NavEquipo from "./NavEquipo";
import ResumenEquipo from "./ResumenEquipo";
import ResultadoEquipo from "./ResultadoEquipo";
import Loading from "./Loading";

function Equipo({}) {
  // History(para ir a una ruta anterior)
  const history = useHistory();
  //Estados
  const [isLoading, setLoading] = useState(false);
  let [equipo, setEquipo] = useState([]);

  //Extraigo de localstorage id selccionados
  let conjuntoIds = localStorage.getItem("id");
  //Lo convierto
  conjuntoIds = JSON.parse(conjuntoIds);
  useEffect(() => {
    // Convierto los id en url dinámica
    if (conjuntoIds !== null) {
      let url = conjuntoIds.map((x) => {
        return ` https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${x}`;
      });

      function obtenerApi() {
        setLoading(true);
        // mapeo los id y llamo a la api
        axios.all(url.map((x) => axios.get(x))).then(
          axios.spread(function (...res) {
            console.log(res);
            if (res !== undefined) {
              let respuesta = res.map((x) => x.data);
              console.log(respuesta);
              setEquipo(respuesta);
              console.log(equipo);
              setLoading(false);
            }
          })
        );
      }

      obtenerApi();

      
    }
  }, []);

  //Funcion para mostrar detalles
  const ocultarDetalles = (x) => {
    let r = document.querySelectorAll(".Detalles");
    r.forEach((m) => {
      if (m.id === x) {
        m.classList.toggle("hidden");
      }
    });
  };

  // Funcion para eliminar todo el equipo de personajes
  function eliminarEquipo() {
    localStorage.removeItem("id");
 
  }

  //Funcion para eliminar un personaje del equipo
  const eliminarPersonaje = (e) => {
    e.preventDefault();
    let borrarPersonaje = e.target.id;
    let LocalId = JSON.parse(localStorage.getItem("id"));
    let ResEliminar = LocalId.filter((x) => x !== borrarPersonaje);
    localStorage.setItem("id", JSON.stringify(ResEliminar));
    window.location.reload();
  };

  // Loading
  if (isLoading) {
    return <Loading />;
  }
  // Si no hay personajes en el equipo redirecciona a busqueda
  if (conjuntoIds === null) {
    setTimeout(() => {
      history.push("/busqueda");
    }, 1000);
  }

  return (
    <div className="container text-center">
      <div className="row mt-3">
        <NavEquipo eliminarEquipo={eliminarEquipo} />
      </div>
      <ResumenEquipo equipo={equipo} />
      <div className="row d-flex justify-content-center ">
        {equipo.map((x) => (
          <div>
            <ResultadoEquipo
              equipo={x}
              ocultarDetalles={ocultarDetalles}
              eliminarPersonaje={eliminarPersonaje}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Equipo;
