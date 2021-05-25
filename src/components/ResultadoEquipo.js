import React from "react";

function ResultadoEquipo({ equipo, ocultarDetalles, eliminarPersonaje }) {
  const { id, image, powerstats, biography, appearance, work, name } = equipo;
  return (
    <React.Fragment key={id}>
      <div className="card m-4 p-3">
        <h4>{name}</h4>
        <img className="card-img-top" src={image.url} width="150" alt="" />
        <div className="card-body ">
          <div className="dot mt-3">
            <h4 className="font-weight-bold superFont subtitulos">
              Powerstats
            </h4>
            <li>
              Combat: {powerstats.combat === "null" ? "-" : powerstats.combat}
            </li>
            <li>
              Intelligence:{" "}
              {powerstats.intelligence === "null"
                ? "-"
                : powerstats.intelligence}
            </li>
            <li>
              Strength:{" "}
              {powerstats.strength === "null" ? "-" : powerstats.strength}
            </li>
            <li>
              Speed: {powerstats.speed === "null" ? "-" : powerstats.speed}
            </li>
            <li>
              Durability:{" "}
              {powerstats.durability === "null" ? "-" : powerstats.durability}
            </li>
            <li>
              Power: {powerstats.power === "null" ? "-" : powerstats.power}
            </li>
          </div>

          <div className="Detalles dot hidden " id={id}>
            <h4 className="font-weight-bold superFont subtitulos">Detalles</h4>
            <li>Full Name: {biography["full-name"]}</li>
            <li>Eye Color: {appearance["eye-color"]}</li>
            <li>Hair Color: {appearance["hair-color"]}</li>
            <li>Weight: {appearance.weight[1]}</li>
            <li>Height: {appearance.height[1]}</li>
            <li>Base: {work.base}</li>
            <li>Aliases: {biography.aliases[0]}</li>
          </div>

          <button
            id={id}
            onClick={() => ocultarDetalles(id)}
            className="btn mt-2 btn-primary "
          >
            Detalles
          </button>
          <br />
          <button
            id={id}
            onClick={eliminarPersonaje}
            className="btn mt-2 btn-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ResultadoEquipo;
