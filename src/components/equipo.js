import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
function Equipo({}) {
  // History(para ir a una ruta anterior)
  const history = useHistory();
  //Estados
  const [isLoading, setLoading] = useState(true);
  let [prueba, setPrueba] = useState([]);

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
        // mapeo los id y llamo a la api
        axios.all(url.map((x) => axios.get(x))).then(
          axios.spread(function (...res) {
            // all requests are now complete
            console.log(res);
            if (res !== undefined) {
              let respuesta = res.map((x) => x.data);
              console.log(respuesta);
              setPrueba(respuesta);
              console.log(prueba);
              setLoading(false);
            }
          })
        );
      }

      obtenerApi();
    }
  }, []);

   if (conjuntoIds === null) {
     setTimeout(() => {
       history.push("/");
     }, 1000);
  
  }

  // Loading
  if (isLoading) {
    return (
      <div className="text-center">
        <h1>Loading...</h1>
      </div>
    );
  }
  //Ocultar detalles
  const ocultarDetalles = (e) => {
    e.preventDefault();
    let detalles = document.querySelector(".Detalles");
    detalles.classList.toggle("hidden");
  };

  // Funcion para eliminar todo el equipo de personajes
  function eliminarEquipo() {
    localStorage.clear();
    window.location.reload();
  }

  //Funcion para eliminar personaje del equipo
  const eliminarPersonaje = (e) => {
    e.preventDefault();
    let borrarPersonaje = e.target.id;
    let LocalId = JSON.parse(localStorage.getItem("id"));
    let ResEliminar = LocalId.filter((x) => x !== borrarPersonaje);
    localStorage.setItem("id", JSON.stringify(ResEliminar));
    window.location.reload();
  };

  //Suma Powerstates
  const SumaCombat = prueba.reduce(
    (total, currentValue) =>
      (total = total + Number(currentValue.powerstats.combat)),
    0
  );
  const SumaIntelligence = prueba.reduce(
    (total, currentValue) =>
      (total = total + Number(currentValue.powerstats.intelligence)),
    0
  );
  const SumaStrength = prueba.reduce(
    (total, currentValue) =>
      (total = total + Number(currentValue.powerstats.strength)),
    0
  );
  const SumaSpeed = prueba.reduce(
    (total, currentValue) =>
      (total = total + Number(currentValue.powerstats.speed)),
    0
  );
  const SumaDurability = prueba.reduce(
    (total, currentValue) =>
      (total = total + Number(currentValue.powerstats.durability)),
    0
  );
  const SumaPower = prueba.reduce(
    (total, currentValue) =>
      (total = total + Number(currentValue.powerstats.power)),
    0
  );

  //Peso y altura promedio del equipo
  const SumaPeso =
    parseInt(
      prueba.reduce(
        (total, currentValue) =>
          (total = total + currentValue.appearance.weight[1]),
        0
      )
    ) / prueba.length;
  const SumaAltura =
    parseInt(
      prueba.reduce(
        (total, currentValue) =>
          (total = total + currentValue.appearance.height[1]),
        0
      )
    ) / prueba.length;
  console.log(SumaPeso, SumaAltura);

  return (
    <div className="container text-center">
      <div className="row mt-3">
        <div className="col-md-4 my-auto ">
          <Link to="/">
            <button className=" mt-3 mt-md-0  btn btn-primary">
              <FaArrowLeft /> Volver
            </button>
          </Link>
        </div>
        <div className="col-md-4"></div>

        <div className="col-md-4  my-auto">
          <button
            onClick={eliminarEquipo}
            className="btn btn-danger my-2 rounded "
          >
            <FaTrash /> Equipo
          </button>
        </div>
        <div className="col-12">
          <hr />
          <h1>Equipo</h1>
        </div>
      </div>

      <div className=" py-md-2 dot SumaPowerstats rounded   ">
        <h2 className="m-0 font-weight-normal ">RESUMEN</h2>
        <li>Total Combat: {SumaCombat}</li>
        <li>Total Intelligence: {SumaIntelligence}</li>
        <li>Total Strength: {SumaStrength}</li>
        <li>Total Speed: {SumaSpeed}</li>
        <li>Total Durability: {SumaDurability}</li>
        <li>Total Power: {SumaPower}</li>
        <li>
          Altura Promedio:{" "}
          {typeof SumaAltura === "string" ? "0" : Math.round(SumaAltura)}cm{" "}
        </li>
        <li>
          Peso Promedio: {SumaPeso === NaN ? "0" : Math.round(SumaPeso)}kg{" "}
        </li>
      </div>
      <div className="row d-flex justify-content-center ">
        {prueba.map((x) => (
          <React.Fragment key={x.id}>
            <div className="card m-4 p-3">
              <h4>{x.name}</h4>
              <img
                className="card-img-top"
                src={x.image.url}
                width="150"
                alt=""
              />
              <div className="card-body ">
                <div className="dot mt-3">
                  <h4 className="font-weight-bold">Powerstats</h4>
                  <li>Combat: {x.powerstats.combat}</li>
                  <li>Intelligence: {x.powerstats.intelligence}</li>
                  <li>Strength: {x.powerstats.strength}</li>
                  <li>Speed: {x.powerstats.speed}</li>
                  <li>Durability: {x.powerstats.durability}</li>
                  <li>Power: {x.powerstats.power}</li>
                </div>

                <div className="Detalles hidden dot ">
                  <h4 className="font-weight-bold">Detalles</h4>
                  <li>Full Name: {x.biography["full-name"]}</li>
                  <li>Eye Color: {x.appearance["eye-color"]}</li>
                  <li>Hair Color: {x.appearance["hair-color"]}</li>
                  <li>Weight: {x.appearance.weight[1]}</li>
                  <li>Height: {x.appearance.height[1]}</li>
                  <li></li>
                  <li>Base: {x.work.base}</li>
                  <li>Aliases: {x.biography.aliases[0]}</li>
                </div>

                <button
                  onClick={ocultarDetalles}
                  className="btn mt-2 btn-primary"
                >
                  Detalles
                </button>
                <br />
                <button
                  id={x.id}
                  onClick={eliminarPersonaje}
                  className="btn mt-2 btn-danger"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Equipo;
