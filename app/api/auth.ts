import apiClient from "./client";

const login = (email:string,password:string)=>apiClient.post("/auth",{email,password})

const register = (name:string,email:string,password:string)=> apiClient.post("/users")

export default {
    login,
    register
}