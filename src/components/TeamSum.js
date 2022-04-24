import React from "react";
import "../components/styles/Main.css"
function TeamSum({ equipo }) {
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
    <>
      {equipo.length ? (
        <div>
          <div className="col-12">
            <hr className="line" />

            <h1 className="superFont f">Equipo</h1>
          </div>

          <div className=" superFont  animate__animated animate__zoomIn py-md-1 dot SumaPowerstats rounded totals">
            <li>Total Combat: {SumaCombat}</li>
            <li>Total Intelligence: {SumaIntelligence}</li>
            <li>Total Strength: {SumaStrength}</li>
            <li>Total Speed: {SumaSpeed}</li>
            <li>Total Durability: {SumaDurability}</li>
            <li>Total Power: {SumaPower}</li>
            <li>
              Altura Promedio:{" "}
              {isNaN(SumaAltura) ? "0" : Math.round(SumaAltura)}cm{" "}
            </li>
            <li>
              Peso Promedio: {isNaN(SumaPeso) ? "0" : Math.round(SumaPeso)}kg{" "}
            </li>
          </div>
        </div>
      ) : (
        <div className="col-12 mx-auto mt-5 superFont ">
        <h3>No hay personajes agregados al equipo</h3>

        </div>
      )}
    </>
  );
}

export default TeamSum;
