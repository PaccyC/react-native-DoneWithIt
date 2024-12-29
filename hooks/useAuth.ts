import { useAuthContext } from "./useAuthContext";
import authStorage from "../app/(site)/auth/storage"
import { jwtDecode } from "jwt-decode";
import { User } from "@/app/types";


const useAuth = ()=>{
    
    const {user,setUser}= useAuthContext()

    const handleLogout = ()=>{
        setUser(null);
        authStorage.removeToken()
    }

    const loginUser = (authToken: string)=>{
        const userInfo = jwtDecode<User>(authToken);
        setUser(userInfo);
        authStorage.storeToken(authToken)
    }

    return {
        user,
        handleLogout,
        loginUser
    };

    
}

export default useAuth;