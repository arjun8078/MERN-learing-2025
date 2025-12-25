import { useEffect, useState } from "react";

export function useFetch(url){

    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error, setError] = useState(null);
    

    useEffect(()=>{
    // Don't fetch if no URL provided
    if (!url) return;

    setLoading(true);
    setError(null)

    const fetchData=async ()=>{
        try{
            console.log(`🚀 Fetching: ${url}`);
            const response=await fetch(url)
            if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

            const data=await response.json()
             setData(data);
        }
        catch (err) {
        console.error('❌ Fetch error:', err);
        setError(err.message);
        
      } finally {
        setLoading(false);
      }

      
    }
    fetchData();
    },[url])

      return { data, loading, error };
}