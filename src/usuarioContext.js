import React, {createContext,useState} from "react";

const usuarioContext= React.createContext();
const initialUser={
    id:1,
    name:"barbara",
    AgregarPersonaje:[1,2],
}
const UserProvider= ({children})=>{
    const [user,setUser]= useState(initialUser)
    const login = ()=>{
        setUser(initialUser);
    }
    const logout = ()=>{
        setUser(null);
    }
    const data = {user,login,logout}
    return(
        <usuarioContext.Provider value={data}>
{children}
        </usuarioContext.Provider>
    )
}

export default usuarioContext;
export {UserProvider};
    
