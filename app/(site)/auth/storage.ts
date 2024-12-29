import * as SecureStore from "expo-secure-store"


const key="authToken"
 const storeToken = async (authToken: string)=>{

    try {
        await SecureStore.setItemAsync(key,authToken);
    } catch (error) {
        console.log("Error while storing token: " ,error);
        
    }
}

const getToken = async () =>{
    try {
        return await SecureStore.getItemAsync(key);
        
    } catch (error) {
        console.log("Error while getting token", error);
        
    }
}


const removeToken = async ()=>{
    try {
        return await SecureStore.deleteItemAsync(key)
    } catch (error) {
        console.log("Error while removing token", error);
        
    }
}

export default {
  storeToken,
  getToken,
  removeToken
}