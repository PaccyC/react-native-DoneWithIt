import { Listing } from "@/app/types";
import { useState } from "react";


const useApi= ( apiFunc: any)=>{

    const [data, setData] = useState<Listing[]>([])
    const [error,setError]= useState(false);
    const[loading,setLoading]= useState(false);

   const request = async()=> {
     setLoading(true);
     const response= await apiFunc();
     setLoading(false);
 
     if(!response.ok)return setError(true);
 
     setError(false);
     setData(response.data);
     
   }  

   return {
    request,
    data,
    error,
    loading
   }
}
export default useApi;