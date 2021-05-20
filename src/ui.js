import React from "react";
import ResultadoBusqueda from "./components/ResultadoBusqueda";
import ApiResults from "./components/ApiResults"
export default function UI() {
  const Loading = () => {
    setTimeout(() => {
      const spinner = document.querySelector(".spinner-border");

      spinner.remove();
    }, 100);
  };
  Loading();

  function mensajeAlert(mensaje, tipo) {
    if (tipo === "error") {
      let msj = document.createElement("p");
      msj.innerText = { mensaje };
      msj.classList.add("bg-danger");
    } else {
      let msj = document.createElement("p");
      msj.innerText = { mensaje };
      msj.classList.add("bg-success");
    }
  }
  mensajeAlert("prueba", "error");
  console.log(mensajeAlert)
  return <div>
      <ApiResults mensajeAlert={mensajeAlert} />
  </div>;
}
