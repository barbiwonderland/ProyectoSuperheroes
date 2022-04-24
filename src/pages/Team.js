import React, { useEffect, useState } from "react";
import NavEquipo from "../components/NavEquipo";
import TeamSum from "../components/TeamSum";
import TeamCard from "../components/TeamCard";
import { useSelector } from "react-redux";
function Equipo({}) {
  const equipo = useSelector((state) => state.hero.team);
  console.log(equipo, "equipo");
  return (
    <>
      <div className="container text-center">
        <div className="row mt-3">
          <NavEquipo />
        </div>
        <TeamSum equipo={equipo} />
        <div className="row d-flex justify-content-center  ">
          {equipo &&
            equipo.map((x) => (
              <div key={x.id}>
                <TeamCard
                  equipo={x}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Equipo;
