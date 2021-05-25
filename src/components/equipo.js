import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Alert } from "@material-ui/lab/Alert/Alert";
function Equipo({}) {
  // History(para ir a una ruta anterior)
  const history = useHistory();
  //Estados
  const [isLoading, setLoading] = useState(true);
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
  // Si no hay personajes en el equipo redirecciona a busqueda
  if (conjuntoIds === null) {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  }

  // Loading
  if (isLoading) {
    return (
      <React.Fragment>
        <div className="text-center">
          <h2 className="text-warning ">Loading...</h2>
        </div>
        <div class="d-flex justify-content-center  ">
          <div class="spinner-grow  text-warning mt-3">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
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
    localStorage.clear();
    window.location.reload();
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

  //Suma Powerstates
  const SumaCombat = equipo.reduce(
    (total, currentValue) =>
      (total =
        total +
        Number(
          isNaN(currentValue.powerstats.combat)
            ? ""
            : currentValue.powerstats.combat
        )),
    0
  );
  const SumaIntelligence = equipo.reduce(
    (total, currentValue) =>
      (total =
        total +
        Number(
          isNaN(currentValue.powerstats.intelligence)
            ? ""
            : currentValue.powerstats.intelligence
        )),
    0
  );
  const SumaStrength = equipo.reduce(
    (total, currentValue) =>
      (total =
        total +
        Number(
          isNaN(currentValue.powerstats.strength)
            ? ""
            : currentValue.powerstats.strength
        )),
    0
  );
  const SumaSpeed = equipo.reduce(
    (total, currentValue) =>
      (total =
        total +
        Number(
          isNaN(currentValue.powerstats.speed)
            ? ""
            : currentValue.powerstats.speed
        )),
    0
  );
  const SumaDurability = equipo.reduce(
    (total, currentValue) =>
      (total =
        total +
        Number(
          isNaN(currentValue.powerstats.durability)
            ? ""
            : currentValue.powerstats.durability
        )),
    0
  );
  const SumaPower = equipo.reduce(
    (total, currentValue) =>
      (total =
        total +
        Number(
          isNaN(currentValue.powerstats.power)
            ? ""
            : currentValue.powerstats.power
        )),
    0
  );

  //Peso y altura promedio del equipo
  const SumaPeso =
    equipo.reduce(
      (total, currentValue) =>
        (total = total + parseInt(currentValue.appearance.weight[1])),
      0
    ) / equipo.length;

  const SumaAltura =
    equipo.reduce(
      (total, currentValue) =>
        (total = total + parseInt(currentValue.appearance.height[1])),
      0
    ) / equipo.length;
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
          <h1 className="superFont f">Equipo</h1>
        </div>
      </div>

      <div className=" superFont  animate__animated animate__zoomIn py-md-1 dot SumaPowerstats rounded">
        <li>Total Combat: {SumaCombat}</li>
        <li>Total Intelligence: {SumaIntelligence}</li>
        <li>Total Strength: {SumaStrength}</li>
        <li>Total Speed: {SumaSpeed}</li>
        <li>Total Durability: {SumaDurability}</li>
        <li>Total Power: {SumaPower}</li>
        <li>
          Altura Promedio: {isNaN(SumaAltura) ? "0" : Math.round(SumaAltura)}cm{" "}
        </li>
        <li>
          Peso Promedio: {isNaN(SumaPeso) ? "0" : Math.round(SumaPeso)}kg{" "}
        </li>
      </div>
      <div className="row d-flex justify-content-center ">
        {equipo.map((x) => (
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
                  <h4 className="font-weight-bold superFont subtitulos">
                    Powerstats
                  </h4>
                  <li>
                    Combat:{" "}
                    {x.powerstats.combat === "null" ? "-" : x.powerstats.combat}
                  </li>
                  <li>
                    Intelligence:{" "}
                    {x.powerstats.intelligence === "null"
                      ? "-"
                      : x.powerstats.intelligence}
                  </li>
                  <li>
                    Strength:{" "}
                    {x.powerstats.strength === "null"
                      ? "-"
                      : x.powerstats.strength}
                  </li>
                  <li>
                    Speed:{" "}
                    {x.powerstats.speed === "null" ? "-" : x.powerstats.speed}
                  </li>
                  <li>
                    Durability:{" "}
                    {x.powerstats.durability === "null"
                      ? "-"
                      : x.powerstats.durability}
                  </li>
                  <li>
                    Power:{" "}
                    {x.powerstats.power === "null" ? "-" : x.powerstats.power}
                  </li>
                </div>

                <div className="Detalles dot hidden " id={x.id}>
                  <h4 className="font-weight-bold superFont subtitulos">
                    Detalles
                  </h4>
                  <li>Full Name: {x.biography["full-name"]}</li>
                  <li>Eye Color: {x.appearance["eye-color"]}</li>
                  <li>Hair Color: {x.appearance["hair-color"]}</li>
                  <li>Weight: {x.appearance.weight[1]}</li>
                  <li>Height: {x.appearance.height[1]}</li>
                  <li>Base: {x.work.base}</li>
                  <li>Aliases: {x.biography.aliases[0]}</li>
                </div>

                <button
                  id={x.id}
                  onClick={() => ocultarDetalles(x.id)}
                  className="btn mt-2 btn-primary "
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
