import React, {createContext,useState} from "react";
const userEventContext= React.createContext();


const EventProvider =({children})=>{
    let [inputName,setInputName]=useState("batman");
    const cambioPersonaje=()=>{
       let input_Name = document.querySelector(".input-name")
        let estadoName=input_Name.value;
        setInputName (estadoName);
      
    }
    let uRl=   `https://www.superheroapi.com/api.php/2831945550360412/search/${inputName}`
        console.log(uRl)
    const data = {inputName,cambioPersonaje,uRl}


return(
    <userEventContext.Provider value={data}>
     {children}
    </userEventContext.Provider>
)
}

export default userEventContext;
export {EventProvider};