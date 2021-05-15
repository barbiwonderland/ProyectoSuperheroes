import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import userEventContext from '../userEventContext';



export default function Equipo() {
  const {idTeam} =useContext(userEventContext);
  console.log(idTeam);
// let id_Team = Object.values(idTeam);
idTeam.map((x)=>{
console.log(`https://superheroapi.com/api/2831945550360412/${x}`);
let url= `https://superheroapi.com/api/2831945550360412/${x}`;
  function CalltoId(){
    axios
    .get(
     {url}
    )
    .then((res) => {
      console.log(res);
      
       
    })
    .catch((error) => {
     console.log(error);
    })
  }
  CalltoId();
})


  return (
 <React.Fragment>
   <h1 className="text-center">Equipo</h1>

 </React.Fragment>
  )
}
