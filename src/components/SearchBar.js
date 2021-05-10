import React,{useState,useContext} from 'react';
import userEventContext from '../userEventContext';
function SearchBar (){
  const {inputName,cambioPersonaje,uRl} =useContext(userEventContext);
    return(
   <React.Fragment>
<h2 className="text-center my-3 ">Buscar Superheroes</h2>
{/* <h1>Nombre : {inputName}</h1>
<p>url:{uRl}</p> */}
<div className="container text-center">
     <div className="row ">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <form  className=" mt-3  mx-auto form-inline my-2 my-lg-0"/>
                <input  className=" input-name form-control  mr-sm-2 mb-3 text-center" type="search" placeholder="Escribi tu superheroe favorito.." aria-label="Search" id="superValue"/>
                <button onClick={cambioPersonaje} className=" btn mx-auto btn-outline-success my-2 my-sm-0 justify-content-end" id="buscar" type="submit">Buscar</button>

        </div>

     </div>
    </div>
   </React.Fragment>
    )};
export default SearchBar;