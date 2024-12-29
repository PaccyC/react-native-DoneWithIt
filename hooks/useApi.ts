import { Listing } from "@/app/types";
import { useState } from "react";


const useApi= ( apiFunc: any)=>{

    const [data, setData] = useState<Listing[]>([])
    const [error,setError]= useState(false);
    const[loading,setLoading]= useState(false);


   const request = async(...otherProps:any)=> {
     setLoading(true);
     const response= await apiFunc(...otherProps);
     setLoading(false);
 
     if(!response.ok){
       setError(true);
       return response;
    }

     setError(false);
     setData(response.data);

     return response
     
   }  

   return {
    request,
    data,
    error,
    loading
   }
}
export default useApi;