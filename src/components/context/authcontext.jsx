import { createContext,useState } from "react";

export const AuthContext=createContext();

const AuthContextProvider=({children})=>{
    const [viddata,setViddata]=useState([])
    const accumulate=(data)=>{
        setViddata(data)
    }
    return (
    <AuthContext.Provider value={{authState:viddata,accumulate}}>
        {children}
    </AuthContext.Provider>
    );
}

export default AuthContextProvider