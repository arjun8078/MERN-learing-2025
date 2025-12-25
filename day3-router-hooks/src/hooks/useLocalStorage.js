import { useEffect, useState } from "react";

export function useLocalStorage(key,value){
    const [storedvalue,setStoredvalue]=useState(()=>{
        try{
            const item=window.localStorage.getItem(key)
            return item ? JSON.parse(item) : value
        }catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return value;
    }
    })

    useEffect(()=>{
        try {
            window.localStorage.setItem(key,JSON.stringify(storedvalue))
            console.log(`💾 Saved to localStorage:`, key, storedvalue);
            
            
        } catch (error) {
            console.error(`Error saving ${key} to localStorage:`, error);

        }
    },[key,storedvalue])

    return [storedvalue,setStoredvalue]
}