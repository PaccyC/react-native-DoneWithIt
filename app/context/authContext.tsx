import  React, { createContext, ReactNode, useState } from "react";



interface AuthContextType {
    user: any; 
    setUser: React.Dispatch<React.SetStateAction<any>>; 
  }
  

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface Props{
    children: ReactNode;
}

const AuthContextProvider = ({childen}:Props)=>{
    const [user,setUser]= useState<any>(null)

    return (<AuthContext.Provider value={{user,setUser}}>

             {childen}
    
       </AuthContext.Provider>
    )

}

export default AuthContextProvider

