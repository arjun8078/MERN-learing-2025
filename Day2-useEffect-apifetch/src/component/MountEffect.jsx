import { useEffect, useState } from "react";

export function MountEffect(){

    const [message,setMessage]=useState('Loading....')

    useEffect(()=>{
        console.log("Component is renderred on MOUNT");

        setTimeout(()=>{
            setMessage('Data is loaded')
        },2000)
    },[])

        return(
            <>
                <div style={{ padding: '20px', border: '2px solid green' }}>
                    <h2>Mount Effect Demo</h2>
                    <p>{message}</p>
                </div>
            </>
        )
        
    
}