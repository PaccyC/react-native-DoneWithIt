import apiClient from "./client";


const register = (name:string,email:string,password:string)=> apiClient.post("/users",{email,name,password})


export default {
    register,
    
}