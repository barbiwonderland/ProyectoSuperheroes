import React from "react";
import { FaArrowLeft, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// importo acciones
import { heroActions } from "../store/Hero.slice";

function NavEquipo({ eliminarEquipo }) {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
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
              onClick={() => {
                dispatch(heroActions.deleteTeam());
              }}
              className="btn btn-danger my-2 rounded "
            >
              <FaTrash /> Equipo
            </button>
        
        </div>
      </div>
    </div>
  );
}

export default NavEquipo;
