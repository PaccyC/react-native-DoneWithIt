import  React, { createContext, ReactNode, useState } from "react";

import { User } from "../types";

interface AuthContextType {
    user: User | null; 
    setUser: React.Dispatch<React.SetStateAction<User | null >>; 
  }
  

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface Props{
    children: ReactNode;
}

const AuthContextProvider = ({ children}:Props)=>{
    const [user,setUser]= useState<User | null>(null)

    return (<AuthContext.Provider value={{user,setUser}}>

             {children}
    
       </AuthContext.Provider>
    )

}

export default AuthContextProvider

