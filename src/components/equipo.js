import React, { useEffect, useState, useContext } from "react";
import ResultadoBusqueda from "../components/ResultadoBusqueda";
import axios from "axios";
import Collapse from 'react-bootstrap/Collapse'
function Equipo({}) {

  //Estados
  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  let [prueba, setPrueba] = useState([]);

  //Extraigo de localstorage id selccionados
  let conjuntoIds = localStorage.getItem("id");
  //Lo convierto
  conjuntoIds = JSON.parse(conjuntoIds);
  useEffect(() => {
    // Convierto los id en url dinámica
    let url = conjuntoIds.map((x) => {
      return ` https://secret-ocean-49799.herokuapp.com/https://superheroapi.com/api/2831945550360412/${x}`;
    });
    console.log(url);
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
  }, []);
    // Loading
    if (isLoading) {
      return (
        <div class="text-center">
          <h1>Loading...</h1>
        </div>
      );
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
  const SumaCombat = prueba.reduce((total, currentValue) => total = total + Number(currentValue.powerstats.combat),0);
  const SumaIntelligence = prueba.reduce((total, currentValue) => total = total + Number(currentValue.powerstats.intelligence),0);
  const SumaStrength = prueba.reduce((total, currentValue) => total = total + Number(currentValue.powerstats.strength),0);
  const SumaSpeed = prueba.reduce((total, currentValue) => total = total + Number(currentValue.powerstats.speed),0);
  const SumaDurability = prueba.reduce((total, currentValue) => total = total + Number(currentValue.powerstats.durability),0);
  const SumaPower = prueba.reduce((total, currentValue) => total = total + Number(currentValue.powerstats.power),0);
 //Peso y altura promedio del equipo
 const SumaPeso = prueba.reduce((total, currentValue) => total = total + (currentValue.appearance.weight[1]),0);
console.log(SumaPeso)

 
  return (
    <div className="container text-center">
      <h1 className=" text-center">Mi Equipo</h1>
      <div className="dot SumaPowerstats rounded">
      <li>Total Combat: {SumaCombat}</li>
      <li>Total Intelligence: {SumaIntelligence}</li>
      <li>Total Strength: {SumaStrength}</li>
      <li>Total Speed: {SumaSpeed}</li>
      <li>Total Durability: {SumaDurability}</li>
      <li>Total Power: {SumaPower}</li>
      </div>
      <div className="row text-center ">
        {prueba.map((x) => (
          <React.Fragment key={x.id}>
            <div className="col-4 text-center">
              <p>{x.name}</p>
              <img src={x.image.url} width="150" alt="" />
              <div className="card-body">
                <div className="dot mt-3">
                  <h4 className="font-weight-bold">Powerstats</h4>
                  <li>Combat: {x.powerstats.combat}</li>
                  <li>Intelligence: {x.powerstats.intelligence}</li>
                  <li>Strength: {x.powerstats.strength}</li>
                  <li>Speed: {x.powerstats.speed}</li>
                  <li>Durability: {x.powerstats.durability}</li>
                  <li>Power: {x.powerstats.power}</li>
                </div>
              </div>
              <Collapse in={open}>
               
              <div className="DetailsHidden dot ">
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
              </Collapse>
             
              <button
                id={x.id}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="btn mt-2 btn-primary"
              >
                Detalles
              </button>
              <br />
              <button id={x.id} onClick={eliminarPersonaje} className="btn mt-2 btn-danger">Eliminar</button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Equipo;
