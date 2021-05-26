import React from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import {Link} from "react-router-dom";

function NavEquipo({eliminarEquipo}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-auto ">
          <Link to="/busqueda">
            <button className=" mt-3 mt-md-0  btn btn-primary">
              <FaArrowLeft /> Volver
            </button>
          </Link>
        </div>
        <div className="col-md-4"></div>

        <div className="col-md-4  my-auto">
          <Link to="/busqueda">
          <button
            onClick={eliminarEquipo}
            className="btn btn-danger my-2 rounded "
          >
            <FaTrash /> Equipo
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavEquipo;
