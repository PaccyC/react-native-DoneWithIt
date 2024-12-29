import { useContext } from "react";

import { AuthContext } from "@/app/context/authContext";

export const useAuthContext =()=>{

     const context= useContext(AuthContext);
     if(!context)
        throw new Error ("AuthContext must be available inside AuthContextProvider");
     
     return context
}